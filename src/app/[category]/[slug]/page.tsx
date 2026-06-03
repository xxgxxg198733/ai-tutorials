import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
  getArticleNavigation,
  getAllSlugs,
} from "@/lib/content-loader";
import { getCategoryBySlug } from "@/data/categories";
import { AdSlot } from "@/components/shared/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleContent } from "@/components/article/ArticleContent";
import { TableOfContents } from "@/components/article/TableOfContents";
import { Breadcrumb } from "@/components/article/Breadcrumb";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { ArticleNavigation } from "@/components/article/ArticleNavigation";
import { DownloadPDFButton } from "@/components/shared/DownloadPDFButton";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

interface ArticlePageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords?.join(", "),
    alternates: { canonical: `${SITE_URL}/${category}/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/${category}/${slug}`,
      images: article.coverImage ? [{ url: article.coverImage, width: 1200, height: 630, alt: article.coverAlt }] : undefined,
      publishedTime: article.date,
      modifiedTime: article.updatedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.coverImage ? [article.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticleBySlug(category, slug);
  if (!article) notFound();

  const cat = getCategoryBySlug(article.category);
  const relatedArticles = getRelatedArticles(article, 4);
  const { prev, next } = getArticleNavigation(article);

  // Extract headings for table of contents
  const headings = extractHeadings(article.content);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd
        type="Article"
        data={{
          headline: article.title,
          description: article.description,
          image: article.coverImage || undefined,
          datePublished: article.date,
          dateModified: article.updatedDate || article.date,
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME },
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: cat?.title || article.category,
              item: `${SITE_URL}/${article.category}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: article.title,
            },
          ],
        }}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb category={cat} article={article} />

        {/* Top Ad Banner */}
        <AdSlot slot="top-banner" format="horizontal" />

        {/* Article Header */}
        <ArticleHeader article={article} category={cat} />

        {/* Ad below header */}
        <AdSlot slot="top-banner" format="auto" className="md:hidden" />

        <div className="mt-8 flex gap-8">
          {/* Table of Contents (Desktop Sidebar) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <TableOfContents headings={headings} />
              <div className="mt-6">
                <AdSlot slot="sidebar-rectangle" format="rectangle" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            <ArticleContent content={article.content} />

            {/* In-Article Ad */}
            <AdSlot slot="in-article" format="auto" />

            {/* Article Navigation (Prev/Next) */}
            <ArticleNavigation prev={prev} next={next} />

            {/* Download PDF Button */}
            <div className="mt-8 flex justify-center">
              <DownloadPDFButton articleTitle={article.title} />
            </div>
          </div>

          {/* Right Sidebar (desktop only) */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24">
              <AdSlot slot="sidebar-rectangle" format="rectangle" />
              <div className="mt-6">
                <h3 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">
                  Related Articles
                </h3>
                <RelatedArticles articles={relatedArticles} compact />
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile: Related articles below content */}
        <div className="xl:hidden mt-8">
          <RelatedArticles articles={relatedArticles} />
        </div>

        {/* Bottom Ad */}
        <AdSlot slot="bottom-banner" format="horizontal" />
      </article>
    </>
  );
}

/**
 * Extract H2 and H3 headings from markdown content for Table of Contents
 */
function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}
