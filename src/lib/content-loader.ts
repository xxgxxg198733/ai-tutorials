import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, ArticleMeta, NavItem } from "@/types/content";
import { CATEGORY_SLUGS, type CategorySlug } from "./constants";
import { categories } from "@/data/categories";

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Parse a single markdown file and return article data
 */
function parseArticleFile(
  filePath: string,
  category: string
): Article | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    // Skip hidden/draft articles
    if (data.hidden === true) {
      return null;
    }

    // Validate required fields
    if (!data.title || !data.description) {
      console.warn(`Skipping ${filePath}: missing title or description`);
      return null;
    }

    const slug = path.basename(filePath, ".md").replace(/^\d+-/, "");

    // Parse affiliate info from frontmatter (optional)
    const affiliate = data.affiliate
      ? {
          tool: data.affiliate.tool || "",
          cta: data.affiliate.cta || `Try ${data.affiliate.tool || "this tool"} today`,
          url: data.affiliate.url || "",
        }
      : undefined;

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      category: data.category || category,
      order: data.order || 0,
      date: data.date || new Date().toISOString().split("T")[0],
      updatedDate: data.updatedDate || undefined,
      readingTime: data.readingTime || Math.ceil(content.split(/\s+/).length / 200),
      coverImage: data.coverImage || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
      coverAlt: data.coverAlt || data.title || "",
      tags: data.tags || [],
      keywords: data.keywords || [],
      content,
      affiliate,
    };
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

/**
 * Get all articles from a specific category directory
 */
function getArticlesInCategory(category: string): Article[] {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => parseArticleFile(path.join(dir, file), category))
    .filter((a): a is Article => a !== null)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all articles across all categories
 */
export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  for (const catSlug of CATEGORY_SLUGS) {
    articles.push(...getArticlesInCategory(catSlug));
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Cache for build-time performance
 */
let _allArticlesCache: Article[] | null = null;

function getCachedArticles(): Article[] {
  if (!_allArticlesCache) {
    _allArticlesCache = getAllArticles();
  }
  return _allArticlesCache;
}

/**
 * Get articles filtered by category
 */
export function getArticlesByCategory(category: string): Article[] {
  return getCachedArticles()
    .filter((a) => a.category === category)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get a single article by category and slug
 */
export function getArticleBySlug(
  category: string,
  slug: string
): Article | null {
  return getCachedArticles().find(
    (a) => a.category === category && a.slug === slug
  ) || null;
}

/**
 * Get article metadata only (no content) for listing pages
 */
export function getArticleMetaByCategory(category: string): ArticleMeta[] {
  return getArticlesByCategory(category).map(
    ({ content: _content, ...meta }) => meta
  );
}

/**
 * Get all article slugs for static path generation
 */
export function getAllSlugs(): { category: string; slug: string }[] {
  return getCachedArticles().map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

/**
 * Get related articles (same category, excluding current)
 */
export function getRelatedArticles(
  article: Article,
  count: number = 4
): ArticleMeta[] {
  const sameCategory = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, count);

  // If not enough in same category, pull from other categories
  if (sameCategory.length < count) {
    const others = getCachedArticles()
      .filter((a) => a.category !== article.category)
      .slice(0, count - sameCategory.length);

    return [...sameCategory, ...others].map(
      ({ content: _content, ...meta }) => meta
    );
  }

  return sameCategory.map(({ content: _content, ...meta }) => meta);
}

/**
 * Get previous and next article navigation
 */
export function getArticleNavigation(article: Article): NavItem {
  const categoryArticles = getArticlesByCategory(article.category);
  const index = categoryArticles.findIndex((a) => a.slug === article.slug);

  const prev =
    index > 0
      ? {
          category: categoryArticles[index - 1].category,
          slug: categoryArticles[index - 1].slug,
          title: categoryArticles[index - 1].title,
        }
      : null;

  const next =
    index < categoryArticles.length - 1
      ? {
          category: categoryArticles[index + 1].category,
          slug: categoryArticles[index + 1].slug,
          title: categoryArticles[index + 1].title,
        }
      : null;

  return { prev, next };
}

/**
 * Get featured articles (most recent across categories)
 */
export function getFeaturedArticles(count: number = 6): ArticleMeta[] {
  return getCachedArticles()
    .slice(0, count)
    .map(({ content: _content, ...meta }) => meta);
}

/**
 * Get total article count
 */
export function getTotalArticleCount(): number {
  return getCachedArticles().length;
}

/**
 * Get article counts per category
 */
export function getCategoryArticleCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const catSlug of CATEGORY_SLUGS) {
    counts[catSlug] = getArticlesInCategory(catSlug).length;
  }
  return counts;
}

/**
 * Get all articles as search index (metadata only, for API)
 */
export function getSearchIndex(): ArticleMeta[] {
  return getCachedArticles().map(({ content: _content, ...meta }) => meta);
}
