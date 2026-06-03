import Link from "next/link";
import type { ArticleMeta } from "@/types/content";
import { getCategoryBySlug } from "@/data/categories";

interface RelatedArticlesProps {
  articles: ArticleMeta[];
  compact?: boolean;
}

export function RelatedArticles({ articles, compact = false }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  if (compact) {
    return (
      <ul className="space-y-3">
        {articles.map((article) => (
          <li key={`${article.category}/${article.slug}`}>
            <Link
              href={`/${article.category}/${article.slug}`}
              className="block text-sm hover:text-primary transition-colors"
            >
              <span className="line-clamp-2 font-medium">{article.title}</span>
              <span className="text-xs text-muted-foreground mt-0.5 block">
                {article.readingTime} min read
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="no-print">
      <h3 className="text-xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => {
          const cat = getCategoryBySlug(article.category);
          return (
            <Link
              key={`${article.category}/${article.slug}`}
              href={`/${article.category}/${article.slug}`}
              className="group flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 rounded-lg bg-secondary overflow-hidden shrink-0">
                <img
                  src={article.coverImage}
                  alt={article.coverAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                  {cat && <span>{cat.icon}</span>}
                  <span>{article.readingTime} min read</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
