import Link from "next/link";
import { categories } from "@/data/categories";
import { getArticlesByCategory } from "@/lib/content-loader";

const SCENARIOS = [
  {
    icon: "✍️",
    title: "写作 & 文案",
    desc: "博客、营销文案、邮件、报告",
    query: "AI writing assistant",
    href: "/ai-tools/copy-ai-marketing-content-guide",
  },
  {
    icon: "🎬",
    title: "视频创作 & 剪辑",
    desc: "AI 生成视频、自动剪辑、字幕",
    query: "AI video creation",
    href: "/ai-tools/runway-ai-video-generation-guide",
  },
  {
    icon: "🎨",
    title: "图像 & 设计",
    desc: "AI 绘画、海报、Logo 设计",
    query: "AI image generation design",
    href: "/ai-tools/midjourney-beginners-guide",
  },
  {
    icon: "🎵",
    title: "音乐 & 音频",
    desc: "AI 作曲、配音、播客制作",
    query: "AI music audio creation",
    href: "/ai-tools/suno-ai-music-generation-guide",
  },
  {
    icon: "💻",
    title: "编程 & 开发",
    desc: "AI 写代码、Debug、自动化",
    query: "AI coding assistant",
    href: "/ai-tools/github-copilot-tutorial",
  },
  {
    icon: "📊",
    title: "数据 & 办公",
    desc: "Excel 自动化、PPT、数据分析",
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
            你需要什么 <span className="text-primary">AI 工具</span>？
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            描述你的需求，我们帮你找到最合适的 AI 工具和教程
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
              placeholder='试试输入："帮我写周报"、"AI 做 PPT"、"自动剪辑视频"...'
              className="flex-1 px-5 py-3.5 text-sm rounded-l-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-primary text-primary-foreground rounded-r-xl font-medium text-sm hover:opacity-90 transition-opacity shrink-0"
            >
              搜索教程 →
            </button>
          </form>

          {/* Hot tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>热门：</span>
            {["ChatGPT 教程", "Claude Code", "AI 副业", "Midjourney", "Cursor", "Suno AI"].map((tag) => (
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
          <h2 className="text-2xl font-bold tracking-tight">快速找到你需要的 AI 工具</h2>
          <p className="mt-2 text-sm text-muted-foreground">按场景分类，一键直达教程</p>
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
                      全部 →
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
                <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">关于本站</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  真实 AI 教程，亲手测试每一个工具。<br />不写废话，只给解决方案。
                </p>
                <Link href="/about" className="mt-2 inline-block text-xs font-medium text-primary hover:underline">了解更多 →</Link>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card">
                <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">快速跳转</h3>
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
