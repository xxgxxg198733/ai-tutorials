import Link from "next/link";
import { categories } from "@/data/categories";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 mt-auto no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Site Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🤖</span>
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {SITE_DESCRIPTION}
            </p>
          </div>

          {/* Category Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat.icon} {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">
              Disclaimer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI Tutorials Hub is a participant in the Google AdSense advertising program.
              This site provides educational content about AI tools and technologies.
              We may earn commissions from affiliate links. All content is for informational purposes only.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using Next.js &bull; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
