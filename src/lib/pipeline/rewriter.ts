/**
 * AI-powered content rewriter — uses DeepSeek API.
 * Takes a raw article and rewrites it with strict human-voice instructions.
 * Output: 1200+ words, no AI-isms, personal anecdotes, varied structure.
 */

import { categorize } from "./categorizer";
import { nextAuthor } from "./authors";
import type { RawArticle } from "./fetcher";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || "";
const DEEPSEEK_BASE = "https://api.deepseek.com/v1/chat/completions";

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

The output MUST be valid JSON only (no markdown wrapping). Format: {"title":"...","description":"...","content":"Markdown with H2 headings, include ![description](IMAGE_PLACEHOLDER) once","tags":["tag1","tag2","tag3"],"keywords":["kw1","kw2","kw3","kw4","kw5"],"imageQuery":"short phrase for image search"}`;

export async function rewriteArticle(
  raw: RawArticle
): Promise<RewrittenArticle | null> {
  if (!DEEPSEEK_API_KEY) {
    console.error("DEEPSEEK_API_KEY not configured");
    return null;
  }

  const category = categorize(raw.title, raw.description);
  const author = nextAuthor();

  const userMessage = `Source article:
Title: ${raw.title}
Source: ${raw.source} (${raw.url})
Summary: ${raw.description}
Published: ${raw.publishedAt}

Rewrite this into a 1200+ word article. Category: ${category}. Author: ${author}.
Reference source at least twice: "According to ${raw.source}..."

Output ONLY valid JSON (no markdown wrapping around the JSON):`;

  try {
    const res = await fetch(DEEPSEEK_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
        max_tokens: 4096,
        temperature: 0.8,
      }),
      signal: AbortSignal.timeout(90000),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`DeepSeek API error ${res.status}: ${errText}`);
      return null;
    }

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "";

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Failed to parse JSON from rewrite response:", text.slice(0, 200));
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
  } catch (err: any) {
    console.error("Rewrite failed:", err.message);
    return null;
  }
}
