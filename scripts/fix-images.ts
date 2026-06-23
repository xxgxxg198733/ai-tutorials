/**
 * Batch replace Unsplash images with Pexels images.
 * One article at a time, fetches cover image + downloads to public/images/
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PEXELS_KEY = process.env.PEXELS_API_KEY || "KGDoWxOUeWjwZXYeIRcwEpujesYIO9Ytj1wD2hMJbSsQtAthFt2Z2IaG";
const CONTENT_DIR = path.join(process.cwd(), "content");
const IMAGE_DIR = path.join(process.cwd(), "public/images/auto");

interface PexelsPhoto {
  src: { large: string; medium: string };
  alt: string;
}

async function pexelsSearch(query: string): Promise<PexelsPhoto | null> {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&size=medium`,
    { headers: { Authorization: PEXELS_KEY }, signal: AbortSignal.timeout(10000) }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.photos?.[0] || null;
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 40);
}

async function downloadImage(url: string, filepath: string): Promise<boolean> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (!res.ok) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filepath, buffer);
    return true;
  } catch { return false; }
}

async function main() {
  if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

  // Collect all Unsplash-using files
  const toFix: string[] = [];
  for (const cat of fs.readdirSync(CONTENT_DIR)) {
    const dir = path.join(CONTENT_DIR, cat);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith(".md")) continue;
      const fp = path.join(dir, file);
      const raw = fs.readFileSync(fp, "utf-8");
      if (raw.includes("unsplash.com")) toFix.push(fp);
    }
  }

  console.log(`${toFix.length} articles to fix\n`);
  let fixed = 0;

  for (const fp of toFix) {
    const raw = fs.readFileSync(fp, "utf-8");
    const { data, content } = matter(raw);
    const title = data.title || path.basename(fp, ".md");
    const query = data.coverAlt || data.imageQuery || title;
    const relativePath = path.relative(CONTENT_DIR, fp);

    console.log(`→ ${path.basename(fp)} ... "${query.slice(0, 50)}"`);

    const photo = await pexelsSearch(query);
    if (!photo) {
      console.log(`  ✗ No photo found`);
      continue;
    }

    // Download
    const imgName = `pexels-${slugify(title)}.jpg`;
    const imgPath = path.join(IMAGE_DIR, imgName);
    const ok = await downloadImage(photo.src.large, imgPath);
    if (!ok) {
      console.log(`  ✗ Download failed`);
      continue;
    }

    const imgUrl = `/images/auto/${imgName}`;

    // Replace coverImage in frontmatter
    let newRaw = raw
      .replace(/coverImage:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/, `coverImage: "${imgUrl}"`)
      .replace(/coverImage:\s*https:\/\/images\.unsplash\.com\/\S+/, `coverImage: "${imgUrl}"`)
      .replace(/coverAlt:\s*"[^"]*"/, `coverAlt: "${photo.alt || query}"`);

    // Replace inline Unsplash images
    newRaw = newRaw.replace(
      /!\[([^\]]*)\]\(https:\/\/images\.unsplash\.com\/[^)]+\)/g,
      `![${photo.alt || "$1"}](${imgUrl})`
    );

    fs.writeFileSync(fp, newRaw, "utf-8");
    console.log(`  ✓ ${imgUrl}`);
    fixed++;

    // Respect rate limits (200/hr)
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\nFixed ${fixed} / ${toFix.length} articles`);
}

main().catch(console.error);
