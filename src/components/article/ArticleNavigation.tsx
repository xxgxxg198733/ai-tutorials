import Link from "next/link";
import type { NavItem } from "@/types/content";

export function ArticleNavigation({ prev, next }: NavItem) {
  return (
    <nav className="mt-12 pt-8 border-t border-border no-print" aria-label="Article navigation">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/${prev.category}/${prev.slug}`}
            className="group p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-left"
          >
            <span className="text-xs text-muted-foreground">← Previous Article</span>
            <span className="block mt-1 font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/${next.category}/${next.slug}`}
            className="group p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-right"
          >
            <span className="text-xs text-muted-foreground">Next Article →</span>
            <span className="block mt-1 font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
