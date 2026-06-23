/**
 * Pipeline orchestrator.
 * Hourly: fetch news → rewrite → images → GitHub API commit → Vercel auto-deploy.
 */

import { fetchAINews } from "./fetcher";
import { rewriteArticle } from "./rewriter";
import { fetchCoverImage, fetchInlineImage } from "./pexels";
import type { RawArticle } from "./fetcher";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_REPO = process.env.GITHUB_REPO || ""; // "owner/repo"
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

export interface PipelineResult {
  success: boolean;
  articlesWritten: number;
  errors: string[];
  articles: Array<{ title: string; category: string; slug: string }>;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

/**
 * Get existing file list from GitHub repo to compute next order number.
 */
async function getExistingOrders(category: string): Promise<number[]> {
  if (!GITHUB_TOKEN || !GITHUB_REPO) return [];

  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/content/${category}?ref=${GITHUB_BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        signal: AbortSignal.timeout(10000),
      }
    );
    if (!res.ok) return [];
    const files: any[] = await res.json();
    return files
      .filter((f) => f.name.endsWith(".md"))
      .map((f) => {
        const match = f.name.match(/^(\d+)-/);
        return match ? parseInt(match[1]) : 0;
      });
  } catch {
    return [];
  }
}

/**
 * Create/update file in GitHub repo via API.
 * This triggers a Vercel deploy automatically (if repo is connected).
 */
async function createGitHubFile(
  filepath: string,
  content: string,
  message: string
): Promise<boolean> {
  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    console.error("GitHub credentials not configured");
    return false;
  }

  try {
    const base64 = Buffer.from(content, "utf-8").toString("base64");

    // Check if file exists (for SHA)
    let sha = "";
    try {
      const checkRes = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/${filepath}?ref=${GITHUB_BRANCH}`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
          signal: AbortSignal.timeout(10000),
        }
      );
      if (checkRes.ok) {
        const existing: any = await checkRes.json();
        sha = existing.sha || "";
      }
    } catch {}

    const body: any = {
      message,
      content: base64,
      branch: GITHUB_BRANCH,
    };
    if (sha) body.sha = sha;

    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${filepath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15000),
      }
    );

    if (!res.ok) {
      console.error(`GitHub API error ${res.status}: ${await res.text()}`);
      return false;
    }
    return true;
  } catch (err: any) {
    console.error("GitHub upload failed:", err.message);
    return false;
  }
}

/**
 * Main pipeline.
 */
export async function runPipeline(): Promise<PipelineResult> {
  const result: PipelineResult = {
    success: false,
    articlesWritten: 0,
    errors: [],
    articles: [],
  };

  console.log(`\n[${new Date().toISOString()}] Pipeline start\n`);

  // 1. Fetch news
  console.log("→ Fetching AI news...");
  let rawArticles: RawArticle[] = [];
  try {
    rawArticles = await fetchAINews();
    console.log(`  ${rawArticles.length} articles fetched`);
  } catch (err: any) {
    result.errors.push(`Fetch: ${err.message}`);
    return result;
  }

  if (rawArticles.length === 0) {
    result.errors.push("No articles available");
    return result;
  }

  // 2. Process each article
  for (const raw of rawArticles) {
    console.log(`\n→ ${raw.title.slice(0, 70)}...`);

    try {
      // 2a. Rewrite
      console.log("  Rewriting...");
      const rewritten = await rewriteArticle(raw);
      if (!rewritten) {
        result.errors.push(`Rewrite: ${raw.title}`);
        continue;
      }

      // 2b. Fetch images
      console.log("  Fetching images...");
      const coverUrl = await fetchCoverImage(rewritten.imageQuery);
      const inline = await fetchInlineImage(rewritten.imageQuery);

      // 2c. Build markdown
      const slug = slugify(rewritten.title);
      const orders = await getExistingOrders(rewritten.category);
      const order = orders.length > 0 ? Math.max(...orders) + 1 : 1;
      const today = new Date().toISOString().split("T")[0];
      const filename = `${String(order).padStart(2, "0")}-${slug}.md`;
      const filepath = `content/${rewritten.category}/${filename}`;

      const coverImg = coverUrl ||
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop";
      const inlineMd = inline?.url
        ? `\n![${rewritten.imageQuery}](${inline.url})\n`
        : "";
      const citation = `\n\n---\n\n*Originally reported by [${rewritten.sourceName}](${rewritten.sourceUrl}). Rewritten with additional analysis and real-world context by ${rewritten.author}.*\n`;

      const md = `---
title: "${rewritten.title.replace(/"/g, '\\"')}"
description: "${rewritten.description.replace(/"/g, '\\"')}"
category: ${rewritten.category}
order: ${order}
date: ${today}
readingTime: ${Math.ceil(rewritten.content.split(/\\s+/).length / 200)}
coverImage: "${coverImg}"
coverAlt: "${rewritten.imageQuery}"
tags:${rewritten.tags.map((t: string) => `\n  - ${t}`).join("")}
keywords:${rewritten.keywords.map((k: string) => `\n  - ${k}`).join("")}
author: "${rewritten.author}"
source: "${rewritten.sourceUrl}"
---

${rewritten.content}${inlineMd}${citation}`;

      // 2d. Upload via GitHub API
      console.log("  Uploading...");
      const uploaded = await createGitHubFile(
        filepath,
        md,
        `auto: ${rewritten.title.slice(0, 60)} [pipeline]`
      );

      if (uploaded) {
        result.articlesWritten++;
        result.articles.push({
          title: rewritten.title,
          category: rewritten.category,
          slug,
        });
        console.log(`  ✓ ${rewritten.category}/${filename}`);
      } else {
        result.errors.push(`Upload failed: ${rewritten.title}`);
      }
    } catch (err: any) {
      result.errors.push(`${raw.title}: ${err.message}`);
    }

    // Respect rate limits
    await new Promise((r) => setTimeout(r, 2000));
  }

  result.success = result.articlesWritten > 0;
  console.log(
    `\nPipeline done: ${result.articlesWritten} articles, ${result.errors.length} errors`
  );

  return result;
}
