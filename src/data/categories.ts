import type { Category } from "@/types/content";

export const categories: Category[] = [
  {
    slug: "ai-tools",
    title: "AI Tools Tutorials",
    description:
      "Comprehensive step-by-step guides for ChatGPT, Midjourney, Claude, GitHub Copilot, and 30+ other AI tools. Learn setup, advanced features, prompting techniques, and real-world applications.",
    icon: "🛠️",
    articleCount: 35,
    keywords: [
      "AI tools tutorial",
      "ChatGPT tutorial",
      "Midjourney tutorial",
      "how to use AI tools",
      "best AI software guide",
      "Claude AI tutorial",
      "AI tool reviews",
      "AI tools for beginners",
    ],
  },
  {
    slug: "work-productivity",
    title: "AI for Work & Productivity",
    description:
      "Supercharge your workplace efficiency with AI. Learn how to automate repetitive tasks, write professional documents, analyze data, create presentations, and manage projects using cutting-edge AI tools.",
    icon: "💼",
    articleCount: 35,
    keywords: [
      "AI for work",
      "AI productivity tools",
      "AI automation",
      "AI writing assistant",
      "AI data analysis",
      "AI office productivity",
      "workplace AI",
      "AI business tools",
    ],
  },
  {
    slug: "daily-life",
    title: "AI in Daily Life",
    description:
      "Discover how AI transforms everyday living — from personalized learning and travel planning to health tracking, entertainment recommendations, and smart home automation.",
    icon: "🏠",
    articleCount: 35,
    keywords: [
      "AI in daily life",
      "AI lifestyle apps",
      "AI for learning",
      "AI travel planner",
      "AI health apps",
      "AI personal assistant",
      "AI smart home",
      "AI entertainment",
    ],
  },
  {
    slug: "monetization",
    title: "AI Monetization & Income",
    description:
      "Turn AI skills into real income. Explore proven strategies for AI-powered freelancing, content creation, digital product development, affiliate marketing, and building online businesses with AI.",
    icon: "💰",
    articleCount: 35,
    keywords: [
      "AI monetization",
      "make money with AI",
      "AI side hustle",
      "AI freelance income",
      "AI content creation money",
      "AI business ideas",
      "AI passive income",
      "earn money AI tools",
    ],
  },
  {
    slug: "basics",
    title: "AI Fundamentals & Basics",
    description:
      "Understand artificial intelligence from the ground up. Clear explanations of machine learning, neural networks, large language models, computer vision, and key AI concepts — no technical background required.",
    icon: "📚",
    articleCount: 35,
    keywords: [
      "AI fundamentals",
      "artificial intelligence basics",
      "what is AI",
      "machine learning explained",
      "types of AI",
      "how LLMs work",
      "AI for beginners",
      "AI concepts explained",
    ],
  },
  {
    slug: "news-tools",
    title: "AI News & Tool Reviews",
    description:
      "Stay up to date with the latest AI developments, product launches, tool comparisons, industry trends, and expert analysis. Your go-to source for what's new and what matters in artificial intelligence.",
    icon: "📰",
    articleCount: 30,
    keywords: [
      "AI news 2026",
      "AI tool reviews",
      "latest AI tools",
      "AI industry trends",
      "AI comparison guide",
      "best AI software 2026",
      "AI product updates",
      "new AI releases",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
