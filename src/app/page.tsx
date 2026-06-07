import Link from "next/link";
import { categories } from "@/data/categories";
import { getFeaturedArticles } from "@/lib/content-loader";
import { SITE_DESCRIPTION } from "@/lib/constants";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Master AI Tools &{" "}
              <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Learning AI Tools
              </Link>
              <Link
                href="/basics"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                AI Basics First →
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>📚 In-Depth Tutorials</span>
              <span>🛠️ Step-by-Step Guides</span>
              <span>✅ Always Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Explore AI Tutorials by Category
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Choose from {categories.length} comprehensive categories covering every aspect of artificial intelligence — from beginner basics to advanced monetization strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {cat.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  Browse tutorials →
                </span>
                <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1 transition-transform">
                  Browse →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Latest AI Tutorials
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fresh content updated regularly — new AI tools and techniques every week
              </p>
            </div>
            <Link
              href="/news-tools"
              className="text-sm font-medium text-primary hover:underline hidden sm:inline"
            >
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => {
              const cat = categories.find((c) => c.slug === article.category);
              return (
                <Link
                  key={`${article.category}/${article.slug}`}
                  href={`/${article.category}/${article.slug}`}
                  className="group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video bg-secondary relative overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.coverAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {cat && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur text-xs font-medium rounded text-foreground">
                        {cat.icon} {cat.title}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.readingTime} min read</span>
                      <span>•</span>
                      <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Master AI?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Browse our tutorials and discover how AI can help you work smarter, learn faster, and build new skills.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {categories.slice(0, 3).map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="px-5 py-2.5 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition-colors"
              >
                {cat.icon} {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
