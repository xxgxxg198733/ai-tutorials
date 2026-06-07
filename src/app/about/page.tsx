import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, who we are, why we built this site, and how we create and test every AI tutorial we publish.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-2">About AI Tutorials Hub</h1>
      <p className="text-muted-foreground mb-8 text-lg">Who we are and why we built this.</p>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Hi, I'm Alex.</h2>
        <p>
          I started AI Tutorials Hub in early 2026 because I was frustrated. Every time a new AI tool launched,
          I'd spend hours hunting through Reddit threads, YouTube comments, and scattered blog posts just to
          figure out the basics. There was plenty of AI content out there, but most of it fell into two camps:
          too technical for a normal person to use, or too shallow to actually help.
        </p>
        <p>
          I wanted a single place where someone could go from "what even is an LLM" to "here's exactly how I
          set up this AI tool to save me three hours a week." That place didn't exist. So I built it.
        </p>

        <h2>How We Work</h2>
        <p>
          Every tutorial on this site follows the same process: we actually use the tool first. We spend time
          with it — figuring out what works, what's broken, what's confusing, what the documentation leaves
          out. Then we write the guide we wish we'd had when we started.
        </p>
        <p>
          We're not affiliated with any of the AI companies we cover. Some of our links may earn a small
          commission if you sign up for a paid plan — that's how we keep the lights on — but it doesn't
          affect what we say about a tool. If something is overhyped or overpriced, we'll tell you.
        </p>
        <p>
          Our content is written by humans who use these tools in their actual work. We use AI to help
          with research and drafting efficiency — we'd be hypocrites not to — but every article goes
          through multiple rounds of human editing, fact-checking, and real-world testing before it's published.
        </p>

        <h2>Our Content</h2>
        <ul>
          <li><strong>200+ tutorials</strong> across AI tool guides, productivity workflows, AI fundamentals, and more.</li>
          <li><strong>Every guide is free.</strong> No paywalls, no "premium content." We believe AI literacy should be accessible to everyone.</li>
          <li><strong>Regularly updated.</strong> AI tools change fast. We revisit and update our guides when major features or changes ship.</li>
          <li><strong>Written for normal people.</strong> No computer science degree required. We explain things in plain language with real examples you can actually follow.</li>
        </ul>

        <h2>Who This Site Is For</h2>
        <p>
          If you're curious about AI but feel overwhelmed — this is for you. If you want to use AI
          tools to work faster, learn better, or build something new — this is for you. If you're a
          professional trying to stay current without spending every weekend reading research papers —
          this is definitely for you.
        </p>
        <p>
          You don't need a technical background. You don't need to understand how neural networks work
          under the hood (though we cover that too, if you're interested). You just need curiosity
          and a willingness to try things.
        </p>

        <h2>Get In Touch</h2>
        <p>
          Questions about a tutorial? Suggestions for a topic we should cover? Found something that's
          outdated or inaccurate? Drop us a message through the{" "}
          <a href="/contact">Contact page</a>. We read every message and try to respond within
          24-48 hours.
        </p>
        <p>
          If you want to reach us directly: <strong>xxgxxg198733@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
