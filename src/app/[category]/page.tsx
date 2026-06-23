import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory } from "@/lib/content-loader";
import { getCategoryBySlug } from "@/data/categories";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, ARTICLES_PER_PAGE } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.title} — AI Tutorials & Guides`,
    description: cat.description,
    keywords: cat.keywords,
    alternates: { canonical: `${SITE_URL}/${category}` },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const allArticles = getArticlesByCategory(category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const currentPage = Math.max(1, parseInt(pageParam || "1"));
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const articles = allArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const [first, ...rest] = articles;

  return (
    <>
      <JsonLd
        type="CollectionPage"
        data={{
          name: cat.title,
          description: cat.description,
          url: `${SITE_URL}/${category}`,
        }}
      />

      {/* Category Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{cat.title}</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{cat.title}</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{cat.description}</p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{allArticles.length} articles</span>
              <span>•</span>
              <span>Page {currentPage} of {totalPages}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-3xl mb-4">📝</p>
            <h2 className="text-xl font-semibold">No Articles Yet</h2>
            <p className="mt-2 text-muted-foreground">Articles are on the way — check back soon.</p>
            <Link href="/" className="mt-6 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* First article: large hero card */}
            {first && (
              <Link
                href={`/${category}/${first.slug}`}
                className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-secondary overflow-hidden">
                    <img
                      src={first.coverImage}
                      alt={first.coverAlt || first.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">Latest</span>
                    <h2 className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors line-clamp-3">
                      {first.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground line-clamp-3 leading-relaxed">
                      {first.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary rounded font-medium">{first.readingTime} min read</span>
                      <span>{new Date(first.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                    </div>
                    {first.tags && first.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {first.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )}

            {/* Rest: compact list with small thumbs */}
            {rest.length > 0 && (
              <div className="space-y-2">
                {rest.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${category}/${article.slug}`}
                    className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-lg bg-secondary overflow-hidden shrink-0">
                      <img
                        src={article.coverImage}
                        alt={article.coverAlt || article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">
                        {article.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 hidden sm:block">
                        {article.description}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span>{article.readingTime}m</span>
                        <span>•</span>
                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground/40 shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-8 border-t border-border">
                {currentPage > 1 && (
                  <Link
                    href={`/${category}?page=${currentPage - 1}`}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                  >
                    ← Previous
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/${category}?page=${p}`}
                    className={`w-9 h-9 rounded-lg text-sm flex items-center justify-center transition-colors ${
                      p === currentPage
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-secondary text-muted-foreground"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
                {currentPage < totalPages && (
                  <Link
                    href={`/${category}?page=${currentPage + 1}`}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-secondary transition-colors"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
