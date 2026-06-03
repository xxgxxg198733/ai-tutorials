import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  tags?: string[];
  noIndex?: boolean;
}

export function generateSeoMetadata({
  title,
  description,
  url = SITE_URL,
  image,
  imageAlt,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  category,
  tags,
  noIndex = false,
}: SeoProps): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - ${SITE_DESCRIPTION.slice(0, 100)}`;

  return {
    title: pageTitle,
    description: description || SITE_DESCRIPTION,
    keywords: keywords.length > 0 ? keywords : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type,
      title: pageTitle,
      description: description || SITE_DESCRIPTION,
      url,
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: imageAlt || title || SITE_NAME,
              },
            ],
          }
        : {}),
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description || SITE_DESCRIPTION,
      ...(image ? { images: [image] } : {}),
    },
    other: {
      ...(publishedTime ? { "article:published_time": publishedTime } : {}),
      ...(modifiedTime ? { "article:modified_time": modifiedTime } : {}),
      ...(category ? { "article:section": category } : {}),
      ...(tags?.length ? { "article:tag": tags.join(",") } : {}),
    },
  };
}
