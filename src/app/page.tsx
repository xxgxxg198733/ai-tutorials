import Link from "next/link";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/content-loader";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Learn AI.{" "}
              <span className="text-primary">Use It Every Day.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Practical AI tutorials for real people. Step-by-step guides,
              honest reviews, and real-world examples — no jargon, no hype.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                Browse AI Tools
              </Link>
              <Link
                href="/basics"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Start with the Basics →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Left list + Right sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* === LEFT: Category Sections with Article Lists === */}
          <div className="flex-1 min-w-0 space-y-16">
            {categories.map((cat) => {
              const articles = getArticlesByCategory(cat.slug).slice(0, 6);
              if (articles.length === 0) return null;
              const [first, ...rest] = articles;

              return (
                <section key={cat.slug}>
                  {/* Category Heading */}
                  <div className="flex items-center justify-between mb-5">
                    <Link
                      href={`/${cat.slug}`}
                      className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {cat.title}
                      </h2>
                    </Link>
                    <Link
                      href={`/${cat.slug}`}
                      className="text-sm font-medium text-primary hover:underline shrink-0"
                    >
                      View all →
                    </Link>
                  </div>

                  {/* First article: with image */}
                  <Link
                    href={`/${cat.slug}/${first.slug}`}
                    className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 mb-3"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-56 shrink-0 aspect-video sm:aspect-auto sm:h-40 bg-secondary overflow-hidden">
                        <img
                          src={first.coverImage}
                          alt={first.coverAlt || first.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 sm:p-5 flex flex-col justify-center flex-1">
                        <h3 className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-2">
                          {first.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                          {first.description}
                        </p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{first.readingTime} min read</span>
                          <span>•</span>
                          <span>
                            {new Date(first.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Rest of articles: compact text list */}
                  {rest.length > 0 && (
                    <ul className="space-y-0.5 ml-1">
                      {rest.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/${cat.slug}/${article.slug}`}
                            className="flex items-center justify-between px-3 py-2 -mx-3 rounded-lg hover:bg-secondary transition-colors group/list"
                          >
                            <span className="text-sm text-foreground/85 group-hover/list:text-primary transition-colors line-clamp-1 flex-1">
                              {article.title}
                            </span>
                            <span className="text-xs text-muted-foreground shrink-0 ml-4">
                              {article.readingTime}m
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>

          {/* === RIGHT: Sidebar === */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* About Card */}
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  About This Site
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Honest, practical AI tutorials written by people who actually
                  use these tools. No jargon. No hype. Just real guides that
                  help you get stuff done.
                </p>
                <Link
                  href="/about"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>

              {/* Quick Categories */}
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Jump to Category
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/${cat.slug}`}
                        className="flex items-center gap-2 px-2 py-1.5 -mx-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="p-5 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Get In Touch
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Questions? Topic suggestions? Found something outdated?
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
