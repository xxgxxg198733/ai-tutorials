import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME}`,
  description: "Get in touch with the AI Tutorials Hub team. Send us your questions, feedback, topic suggestions, or advertising inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>
          We would love to hear from you! Whether you have a question about a specific tutorial, want to suggest
          a topic for us to cover, have feedback on how we can improve, or are interested in advertising
          opportunities, please do not hesitate to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="general">General Inquiry</option>
                <option value="suggestion">Topic Suggestion</option>
                <option value="feedback">Feedback</option>
                <option value="advertising">Advertising Inquiry</option>
                <option value="technical">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-y"
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-xl font-bold mb-4">Other Ways to Reach Us</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <strong className="block text-sm">Email</strong>
                  <span className="text-sm text-muted-foreground">
                    contact@aitutorialshub.com
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-xl font-bold mb-4">Response Time</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We strive to respond to all inquiries within 24-48 hours during business days.
              For urgent matters, please include &quot;Urgent&quot; in your subject line, and we will do our
              best to prioritize your message.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-xl font-bold mb-4">Advertising Inquiries</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interested in advertising on {SITE_NAME}? We offer various advertising opportunities
              including display ads, sponsored content, and dedicated newsletter placements.
              Please select &quot;Advertising Inquiry&quot; from the subject dropdown or email us
              directly for our media kit and rate card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
