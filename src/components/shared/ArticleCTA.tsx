import Link from "next/link";
import { getAffiliateLink, affUrl } from "@/lib/affiliate";
import type { AffiliateInfo } from "@/types/content";

interface ArticleCTAProps {
  affiliate: AffiliateInfo;
  articleSlug: string;
}

/**
 * Article CTA Box
 *
 * Renders a styled call-to-action box at the bottom of AI tool tutorial articles.
 * Shows the tool name, value prop, CTA button, and FTC-required affiliate disclosure.
 *
 * Usage: <ArticleCTA affiliate={article.affiliate} articleSlug={article.slug} />
 */
export function ArticleCTA({ affiliate, articleSlug }: ArticleCTAProps) {
  const link = getAffiliateLink(affiliate.tool);

  if (!link) {
    // Tool exists in frontmatter but not registered in AFFILIATE_LINKS yet
    return (
      <div className="my-8 p-6 rounded-xl border border-border bg-card">
        <p className="text-sm text-muted-foreground text-center">
          🚀 Ready to try <strong>{affiliate.tool}</strong>?{" "}
          {affiliate.cta}
        </p>
      </div>
    );
  }

  const trackingUrl = affUrl(
    affiliate.tool as keyof typeof import("@/lib/affiliate").AFFILIATE_LINKS,
    articleSlug
  );

  return (
    <div className="my-8 p-6 sm:p-8 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/[0.02]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            🚀 Ready to try {link.name}?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
            {link.valueProp}
          </p>
        </div>
        <a
          href={trackingUrl}
          target="_blank"
          rel="noopener sponsored"
          className="shrink-0 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
        >
          {link.cta} →
        </a>
      </div>
      {/* FTC-compliant disclosure */}
      <p className="mt-4 text-xs text-muted-foreground/70 border-t border-border pt-3">
        <span className="mr-1">⚡</span>
        Affiliate disclosure: If you sign up through this link, we may earn a
        commission at no extra cost to you. We only recommend tools we have
        tested and believe are genuinely useful.{" "}
        <Link
          href="/privacy"
          className="underline hover:text-foreground transition-colors"
        >
          Learn more
        </Link>
        .
      </p>
    </div>
  );
}

/**
 * Inline Affiliate Link
 *
 * For use inside prose content — a subtle CTA mid-article.
 */
interface InlineAffiliateLinkProps {
  tool: string;
  children?: React.ReactNode;
  articleSlug: string;
}

export function InlineAffiliateLink({
  tool,
  children,
  articleSlug,
}: InlineAffiliateLinkProps) {
  const link = getAffiliateLink(tool);
  if (!link) return <>{children}</>;

  const trackingUrl = affUrl(
    tool as keyof typeof import("@/lib/affiliate").AFFILIATE_LINKS,
    articleSlug
  );

  return (
    <a
      href={trackingUrl}
      target="_blank"
      rel="noopener sponsored"
      className="text-primary font-medium hover:underline"
      title={`Try ${link.name} — ${link.valueProp}`}
    >
      {children || link.name}
      <sup className="text-[10px] text-muted-foreground ml-0.5">*</sup>
    </a>
  );
}

/**
 * Key Takeaways Affiliate Row
 *
 * Compact CTA for the Key Takeaways section at article bottom.
 */
interface TakeawaysCTAProps {
  tool: string;
  articleSlug: string;
}

export function TakeawaysCTA({ tool, articleSlug }: TakeawaysCTAProps) {
  const link = getAffiliateLink(tool);
  if (!link) return null;

  const trackingUrl = affUrl(
    tool as keyof typeof import("@/lib/affiliate").AFFILIATE_LINKS,
    articleSlug
  );

  return (
    <li className="flex items-start gap-2">
      <span className="text-primary mt-0.5">🔗</span>
      <span>
        <a
          href={trackingUrl}
          target="_blank"
          rel="noopener sponsored"
          className="font-semibold text-primary hover:underline"
        >
          Try {link.name}
        </a>{" "}
        — {link.valueProp}{" "}
        <span className="text-xs text-muted-foreground">(affiliate link)</span>
      </span>
    </li>
  );
}
