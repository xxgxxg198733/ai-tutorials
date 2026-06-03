export const SITE_NAME = "AI Tutorials Hub";
export const SITE_TAGLINE = "Master AI Tools, Boost Productivity, and Monetize Your Skills";
export const SITE_DESCRIPTION =
  "Comprehensive AI tutorials covering ChatGPT, Midjourney, Claude, and 200+ tools. Learn how to use AI for work, daily life, and income generation. Expert guides with step-by-step instructions.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://useaitools.fun";
export const SITE_LOCALE = "en_US";

export const ARTICLES_PER_PAGE = 20;

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-XXXXXXXXXXXXXXXX";

export const CATEGORY_SLUGS = [
  "ai-tools",
  "work-productivity",
  "daily-life",
  "monetization",
  "basics",
  "news-tools",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];
