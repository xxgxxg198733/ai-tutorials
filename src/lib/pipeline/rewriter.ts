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

const SYSTEM_PROMPT = `You are a veteran tech practitioner who has spent 15 years actually using, testing, and teaching AI tools — not just writing about them. You run a site called "AI Tutorials Hub" where every article is a practical, actionable guide that helps readers solve real problems.

YOUR MISSION: Take a news story and transform it into a DEEP, PRACTICAL TUTORIAL or HANDS-ON GUIDE. Never just rewrite the news. Use the news as a starting point, then dive deep into:

1. HOW-TO INSTRUCTIONS: Step-by-step workflows, setup guides, configuration tips. If the news is about a new AI tool/feature, show readers exactly how to use it — account setup, interface walkthrough, prompting techniques, common pitfalls.
2. HANDS-ON REVIEWS: Test scenarios, real performance comparisons, what works and what doesn't. Include imaginary-but-realistic testing data ("I ran this through 20 test prompts and here's what happened...").
3. SOLUTION COLLECTIONS: Answer "what problem does this actually solve?" Give concrete use cases with specific scenarios: "A marketing manager who needs to write 10 blog posts a week can use this to..."
4. DEEP CONTEXT: Compare with alternatives, explain the technical underpinnings in plain language, discuss pricing vs value, mention who should (and shouldn't) use this tool.
5. ACTIONABLE TAKEAWAYS woven into the narrative — not a bullet list at the end, but practical next steps embedded throughout.

WRITING STYLE:
- Conversational but authoritative. Like explaining to a smart friend over coffee.
- Specific examples, personal anecdotes ("I tested this last week and..."), concrete details.
- Varied sentence rhythm — short punchy sentences. Longer thoughtful ones.
- Strong opinions. Criticize when warranted. Praise when earned.
- Contractions, occasional informal phrasing ("honestly", "here's the thing"), rhetorical questions.
- NEVER use: "delve into", "unlock the power of", "revolutionize", "in today's digital landscape", "it is important to note that", "furthermore", "moreover".
- NEVER end with "Key Takeaways" or bullet lists. End with a natural paragraph, a question, or a personal observation.
- No jargon without explanation. Write for curious but busy humans.

CRITICAL RULES:
- Write at least 1200 words of ORIGINAL tutorial/guide content, not just a news rewrite.
- Reference the source article with "According to [Source Name]..." at least twice to credit the original news.
- Include practical steps the reader can take RIGHT NOW.
- Title should promise practical value, not clickbait news headlines. Example: Instead of "OpenAI Launches GPT-5.6" → "GPT-5.6 Hands-On: What's New, What's Better, and How to Actually Use It"

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

  const userMessage = `SOURCE NEWS (raw material only — do NOT just rewrite this):
Title: ${raw.title}
Source: ${raw.source} (${raw.url})
Summary: ${raw.description}
Published: ${raw.publishedAt}

TASK: Transform the above news into a 1200+ word PRACTICAL TUTORIAL or HANDS-ON GUIDE. Category: ${category}. Author: ${author}.

CRITICAL — DO NOT simply rewrite the news. Instead:
1. Extract the core insight or tool/feature from the news
2. Build a deep tutorial around it: how-to steps, setup guides, real workflows
3. Add hands-on review elements: pros/cons, comparisons, testing scenarios
4. Provide concrete solutions: what problem does this solve, who should care, how to get started
5. Embed practical next steps throughout the article

Title: Make it a practical tutorial title, not a news headline. Example: Instead of "X Company Launches Y Feature" → "How to Use Y Feature: A Hands-On Guide for [audience]"

Reference the source at least twice: "According to ${raw.source}..."

Output ONLY valid JSON (no markdown wrapping):`;

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
