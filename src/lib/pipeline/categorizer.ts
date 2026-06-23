/**
 * Auto-categorize articles into existing site categories.
 */

type CategorySlug =
  | "ai-tools"
  | "work-productivity"
  | "daily-life"
  | "monetization"
  | "basics"
  | "news-tools";

const KEYWORDS: Record<CategorySlug, string[]> = {
  "ai-tools": [
    "tool", "software", "app", "platform", "ChatGPT", "Claude", "Gemini",
    "Midjourney", "Copilot", "Cursor", "Suno", "Runway", "Perplexity",
    "launch", "released", "update", "new feature", "tutorial",
  ],
  "work-productivity": [
    "work", "productivity", "business", "office", "automation", "workflow",
    "enterprise", "team", "meeting", "email", "project", "collaboration",
    "efficiency", "corporate",
  ],
  "daily-life": [
    "daily", "life", "home", "personal", "learning", "health", "travel",
    "cooking", "fitness", "entertainment", "shopping", "lifestyle",
    "family", "kids", "pet", "music", "photo",
  ],
  monetization: [
    "money", "income", "revenue", "business model", "startup", "funding",
    "investment", "profit", "earn", "career", "job", "freelance",
    "market", "stock", "economy",
  ],
  basics: [
    "what is", "how does", "explained", "beginner", "fundamental",
    "concept", "understanding", "history", "future of", "trend",
    "research", "science", "ethics", "safety",
  ],
  "news-tools": [
    "news", "breakthrough", "announced", "acquisition", "partnership",
    "regulation", "policy", "government", "report", "study", "survey",
    "comparison", "review", "best", "top", "roundup",
  ],
};

export function categorize(title: string, description: string): CategorySlug {
  const text = (title + " " + description).toLowerCase();
  let best: CategorySlug = "news-tools";
  let bestScore = 0;

  for (const [slug, words] of Object.entries(KEYWORDS)) {
    let score = 0;
    for (const word of words) {
      if (text.includes(word.toLowerCase())) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = slug as CategorySlug;
    }
  }

  return best;
}

/** Get next article order number in category */
export function getNextOrder(category: string): number {
  // Will be computed at write time from existing files
  return 0;
}
