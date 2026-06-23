/**
 * AI-powered content rewriter.
 * Takes a raw article and rewrites it with strict human-voice instructions.
 * Output: 1200+ words, no AI-isms, personal anecdotes, varied structure.
 */

import { categorize } from "./categorizer";
import { nextAuthor } from "./authors";
import type { RawArticle } from "./fetcher";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "";

interface RewrittenArticle {
  title: string;
  description: string;
  category: string;
  content: string;
  author: string;
  sourceUrl: string;
  sourceName: string;
  tags: string[];
  keywords: string[];
  imageQuery: string;
}

const SYSTEM_PROMPT = `You are a professional tech journalist with 15 years of experience writing for Wired, The Verge, and Ars Technica. Your writing style is:

- Conversational but authoritative. You write like you're explaining something to a smart friend over coffee.
- Full of specific examples, personal anecdotes ("I tried this last week and..."), and concrete details.
- Varied sentence rhythm — some short punchy sentences. Some longer, more thoughtful ones that explore nuance.
- You have strong opinions and aren't afraid to state them. You criticize when criticism is warranted. You praise when praise is earned.
- You use contractions, occasional informal phrasing ("honestly", "here's the thing", "kind of wild when you think about it"), and rhetorical questions.
- You NEVER use phrases like "delve into", "unlock the power of", "revolutionize", "in today's digital landscape", "it is important to note that", "furthermore", "moreover".
- You NEVER end with "Key Takeaways" bullet lists. You end with a natural paragraph, a provocative question, or a personal observation.
- You cite specific sources, numbers, and facts. If something is your opinion, you say so clearly.
- You write for humans who are curious but busy. No jargon without explanation.

CRITICAL: Write at least 1200 words. Include at least 2 places where you reference the original source with "According to [Source Name]..." or "[Source Name] reported that...".

The output format is Markdown with H2 headings. Include exactly one image placeholder: ![description](IMAGE_PLACEHOLDER)`;

export async function rewriteArticle(
  raw: RawArticle
): Promise<RewrittenArticle | null> {
  if (!ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY not configured");
    return null;
  }

  const category = categorize(raw.title, raw.description);
  const author = nextAuthor();

  const userMessage = `Source article:
Title: ${raw.title}
Source: ${raw.source} (${raw.url})
Summary: ${raw.description}
Published: ${raw.publishedAt}

Rewrite this into a 1200+ word article for a general tech audience. Follow your writing style exactly. Include a compelling title (not clickbait), a one-sentence description, and 3-5 relevant tags. The article category is: ${category}. The author is ${author}. Reference the original source at least twice using "According to ${raw.source}..." or similar phrasing.

Output as a JSON object with fields: title, description, content (Markdown with H2 headings), tags (array of 3-5 strings), keywords (array of 5-8 strings), imageQuery (a short phrase describing what image to pair with this article).`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 3000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
      signal: AbortSignal.timeout(60000),
    });

    if (!res.ok) {
      console.error(`Anthropic API error ${res.status}: ${await res.text()}`);
      return null;
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || "";

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Failed to parse JSON from rewrite response");
      return null;
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      title: parsed.title || raw.title,
      description: parsed.description || raw.description.slice(0, 160),
      category,
      content: parsed.content || "",
      author,
      sourceUrl: raw.url,
      sourceName: raw.source,
      tags: parsed.tags || [],
      keywords: parsed.keywords || [],
      imageQuery: parsed.imageQuery || raw.title,
    };
  } catch (err) {
    console.error("Rewrite failed:", err);
    return null;
  }
}
