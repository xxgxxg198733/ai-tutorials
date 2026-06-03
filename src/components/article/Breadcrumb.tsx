import Link from "next/link";
import type { Article, Category } from "@/types/content";

interface BreadcrumbProps {
  category?: Category;
  article: Article;
}

export function Breadcrumb({ category, article }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 no-print" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
      </svg>
      <Link href={`/${article.category}`} className="hover:text-foreground transition-colors">
        {category?.title || article.category}
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
      </svg>
      <span className="text-foreground truncate max-w-[200px] sm:max-w-sm">
        {article.title}
      </span>
    </nav>
  );
}
