/**
 * News fetcher — pulls AI-related articles from public RSS feeds and APIs.
 * Runs hourly, fetches 10 fresh articles.
 */

const RSS_FEEDS = [
  "https://feeds.feedburner.com/TechCrunch/artificial-intelligence",
  "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
  "https://feeds.arstechnica.com/arstechnica/ai",
  "https://venturebeat.com/category/ai/feed/",
  "https://www.artificialintelligence-news.com/feed/",
  "https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml",
  "https://news.mit.edu/rss/topic/artificial-intelligence2",
];

export interface RawArticle {
  title: string;
  url: string;
  source: string;
  description: string;
  publishedAt: string;
}

/**
 * Fetch and parse RSS feeds for AI articles.
 * Returns deduplicated articles sorted by recency.
 */
export async function fetchAINews(): Promise<RawArticle[]> {
  const articles: RawArticle[] = [];
  const seen = new Set<string>();

  for (const feedUrl of RSS_FEEDS) {
    try {
      // Use rss2json service to convert RSS to JSON
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`,
        { signal: AbortSignal.timeout(10000) }
      );
      if (!res.ok) continue;
      const data = await res.json();
      if (data.status !== "ok" || !data.items) continue;

      for (const item of data.items) {
        const key = item.title?.toLowerCase().trim();
        if (seen.has(key) || seen.size >= 25) break;
        seen.add(key);

        articles.push({
          title: item.title || "Untitled",
          url: item.link || "",
          source: new URL(feedUrl).hostname,
          description: stripHtml(item.description || item.content || "").slice(0, 300),
          publishedAt: item.pubDate || new Date().toISOString(),
        });
      }
    } catch {
      // Feed down, skip
    }

    if (articles.length >= 25) break;
  }

  // Sort by recency, return newest 10
  return articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 10);
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, "").trim();
}
