import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, our mission to provide comprehensive AI tutorials, and our team of AI enthusiasts dedicated to making artificial intelligence accessible to everyone.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About AI Tutorials Hub</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Our Mission</h2>
        <p>
          At AI Tutorials Hub, our mission is to make artificial intelligence accessible, practical, and valuable for everyone.
          We believe that AI is the most transformative technology of our time, and that everyone — regardless of their technical
          background — should have access to high-quality, easy-to-understand tutorials that help them harness the power of AI
          in their work, daily life, and income-generating activities.
        </p>
        <p>
          We have created over 200 comprehensive tutorials covering every aspect of artificial intelligence, from fundamental
          concepts explained in plain language to advanced guides on using specific AI tools like ChatGPT, Midjourney, Claude,
          and dozens more. Every article is written with the goal of providing actionable, practical knowledge that readers
          can immediately apply.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li><strong>200+ In-Depth Tutorials:</strong> Each article is 800+ words of original, practical content covering AI tools, techniques, and applications.</li>
          <li><strong>6 Comprehensive Categories:</strong> AI Tools, Work Productivity, Daily Life, Monetization, AI Fundamentals, and AI News & Reviews.</li>
          <li><strong>SEO-Optimized Content:</strong> Every article is carefully researched and structured to help readers find exactly what they need.</li>
          <li><strong>Free Access:</strong> All our content is freely accessible to everyone. We believe in democratizing AI knowledge.</li>
          <li><strong>Regular Updates:</strong> The AI landscape evolves rapidly, and we continuously update our content to reflect the latest tools, features, and best practices.</li>
        </ul>

        <h2>Our Content Philosophy</h2>
        <p>
          Every article on AI Tutorials Hub is created following rigorous standards. We prioritize clarity, accuracy, and
          practical value above all else. Our tutorials are designed to be:
        </p>
        <ul>
          <li><strong>Comprehensive:</strong> Each tutorial covers its topic in depth, ensuring readers walk away with complete understanding.</li>
          <li><strong>Practical:</strong> We focus on real-world applications and actionable steps, not just theory.</li>
          <li><strong>Beginner-Friendly:</strong> Complex concepts are broken down into simple, digestible explanations — no technical background required.</li>
          <li><strong>Up-to-Date:</strong> We regularly review and update content to reflect the latest developments in the fast-moving AI landscape.</li>
          <li><strong>Ethical:</strong> We emphasize responsible AI use, including privacy considerations, bias awareness, and human oversight.</li>
        </ul>

        <h2>Why We Created This Site</h2>
        <p>
          As AI tools have proliferated, we noticed a significant gap: most AI educational content was either too technical for
          the average person or too superficial to be genuinely useful. We created AI Tutorials Hub to fill that gap — providing
          content that is both accessible to beginners and substantive enough to deliver real value.
        </p>
        <p>
          We are passionate about helping people understand and leverage AI, not just as consumers of technology but as empowered
          users who can use these tools to improve their lives, advance their careers, and create new opportunities for themselves.
        </p>

        <h2>Contact Us</h2>
        <p>
          We love hearing from our readers! Whether you have a question about a specific tutorial, a suggestion for a topic
          you would like us to cover, or feedback on how we can improve, please do not hesitate to reach out through our
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
