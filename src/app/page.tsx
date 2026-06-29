import Link from "next/link";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/content-loader";

const SCENARIOS = [
  {
    icon: "✍️",
    title: "Writing & Copy",
    desc: "Blog posts, marketing copy, emails, reports",
    query: "AI writing assistant",
    href: "/ai-tools/copy-ai-marketing-content-guide",
  },
  {
    icon: "🎬",
    title: "Video & Editing",
    desc: "AI video generation, auto-editing, subtitles",
    query: "AI video creation",
    href: "/ai-tools/runway-ai-video-generation-guide",
  },
  {
    icon: "🎨",
    title: "Image & Design",
    desc: "AI art, posters, logos, branding",
    query: "AI image generation design",
    href: "/ai-tools/midjourney-beginners-guide",
  },
  {
    icon: "🎵",
    title: "Music & Audio",
    desc: "AI composing, voiceover, podcast production",
    query: "AI music audio creation",
    href: "/ai-tools/suno-ai-music-generation-guide",
  },
  {
    icon: "💻",
    title: "Code & Dev",
    desc: "AI coding, debugging, automation",
    query: "AI coding assistant",
    href: "/ai-tools/github-copilot-tutorial",
  },
  {
    icon: "📊",
    title: "Data & Office",
    desc: "Excel automation, PPT, data analysis",
    query: "AI productivity office tools",
    href: "/work-productivity/ai-writing-assistant-tools",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Search Hero */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What <span className="text-primary">AI Tool</span> Do You Need?
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Tell us what you're trying to do — we'll match you with the right AI tool and tutorial
          </p>

          {/* Search Bar */}
          <form
            action="/ai-tools"
            method="GET"
            className="mt-8 flex max-w-xl mx-auto"
          >
            <input
              type="text"
              name="q"
              placeholder='Try: "write a blog post", "create AI video", "automate Excel", "generate music"...'
              className="flex-1 px-5 py-3.5 text-sm rounded-l-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-primary text-primary-foreground rounded-r-xl font-medium text-sm hover:opacity-90 transition-opacity shrink-0"
            >
              Search Tutorials →
            </button>
          </form>

          {/* Hot tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Trending:</span>
            {["ChatGPT Guide", "Claude Code", "AI Side Hustle", "Midjourney", "Cursor AI", "Suno AI"].map((tag) => (
              <Link
                key={tag}
                href={`/ai-tools?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1 rounded-full border border-border hover:bg-secondary hover:text-foreground transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Find the Right AI Tool — Fast</h2>
          <p className="mt-2 text-sm text-muted-foreground">Browse by use case. One click to the tutorial.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SCENARIOS.map((scene) => (
            <Link
              key={scene.title}
              href={scene.href}
              className="group flex flex-col items-center p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {scene.icon}
              </span>
              <h3 className="font-semibold text-sm text-foreground">{scene.title}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground leading-tight">
                {scene.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Sections — List Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 space-y-16">
            {categories.map((cat) => {
              const articles = getArticlesByCategory(cat.slug)
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 5);
              if (articles.length === 0) return null;
              const [first, ...rest] = articles;

              return (
                <section key={cat.slug}>
                  <div className="flex items-center justify-between mb-5">
                    <Link
                      href={`/${cat.slug}`}
                      className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {cat.title}
                      </h2>
                    </Link>
                    <Link
                      href={`/${cat.slug}`}
                      className="text-xs font-medium text-primary hover:underline shrink-0"
                    >
                      All →
                    </Link>
                  </div>

                  {/* First article with image */}
                  {first && (
                    <Link
                      href={`/${cat.slug}/${first.slug}`}
                      className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 mb-3"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-44 shrink-0 aspect-video sm:aspect-auto sm:h-32 bg-secondary overflow-hidden">
                          <img
                            src={first.coverImage}
                            alt={first.coverAlt || first.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 flex flex-col justify-center flex-1">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {first.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                            {first.description}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span>{first.readingTime} min</span>
                            <span>{new Date(first.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}

                  {/* Rest: compact list */}
                  {rest.length > 0 && (
                    <ul className="space-y-0.5">
                      {rest.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/${cat.slug}/${article.slug}`}
                            className="flex items-center justify-between px-3 py-1.5 -mx-3 rounded-lg hover:bg-secondary transition-colors group/list"
                          >
                            <span className="text-sm text-foreground/80 group-hover/list:text-primary transition-colors line-clamp-1">
                              {article.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground shrink-0 ml-3">
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

          {/* Right Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-5">
              <div className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">About</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Honest AI tutorials. Every tool tested by hand.<br />No fluff. Just solutions that work.
                </p>
                <Link href="/about" className="mt-2 inline-block text-xs font-medium text-primary hover:underline">Learn more →</Link>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">Jump to</h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link href={`/${cat.slug}`} className="flex items-center gap-2 px-2 py-1 -mx-2 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                        <span>{cat.icon}</span>
                        <span>{cat.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
