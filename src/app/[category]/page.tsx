import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getArticleMetaByCategory } from "@/lib/content-loader";
import { getCategoryBySlug } from "@/data/categories";
import { AdSlot } from "@/components/shared/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { CATEGORY_SLUGS } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.title} — ${cat.articleCount}+ AI Tutorials & Guides`,
    description: cat.description,
    keywords: cat.keywords,
    alternates: { canonical: `${SITE_URL}/${category}` },
    openGraph: {
      title: `${cat.title} — AI Tutorials & Guides`,
      description: cat.description,
      url: `${SITE_URL}/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const articles = getArticlesByCategory(category);
  const totalWords = articles.reduce((sum, a) => sum + (a.content?.split(/\s+/).length || 0), 0);

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
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{cat.title}</span>
          </nav>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {cat.title}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {cat.description}
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>📄 {articles.length} Articles</span>
              <span>📝 {totalWords.toLocaleString()}+ Words</span>
              <span>🕐 In-Depth Tutorials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot slot="top-banner" format="horizontal" />
      </div>

      {/* Article List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-3xl mb-4">📝</p>
            <h2 className="text-xl font-semibold">Articles Coming Soon</h2>
            <p className="mt-2 text-muted-foreground">
              We are working on creating in-depth tutorials for this category. Check back soon!
            </p>
            <Link
              href="/"
              className="mt-6 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link
                key={`${article.category}/${article.slug}`}
                href={`/${article.category}/${article.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Article number badge */}
                <div className="relative">
                  <div className="aspect-video bg-secondary overflow-hidden rounded-t-xl">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute top-3 right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                    {article.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.readingTime} min read</span>
                      <span>•</span>
                      <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </div>
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* In-Feed Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot slot="bottom-banner" format="horizontal" />
      </div>
    </>
  );
}
