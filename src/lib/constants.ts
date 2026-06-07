export const SITE_NAME = "AI Tutorials Hub";
export const SITE_TAGLINE = "Learn AI tools through practical, hands-on tutorials";
export const SITE_DESCRIPTION =
  "Practical AI tutorials for real people. Learn ChatGPT, Midjourney, Claude, and dozens of other AI tools through step-by-step guides, honest reviews, and real-world examples. No jargon, no hype.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://useaitools.fun";
export const SITE_LOCALE = "en_US";

export const ARTICLES_PER_PAGE = 20;

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-1078773058136861";

export const CATEGORY_SLUGS = [
  "ai-tools",
  "work-productivity",
  "daily-life",
  "monetization",
  "basics",
  "news-tools",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];
