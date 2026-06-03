export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  date: string;
  updatedDate?: string;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  keywords: string[];
  content: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string;
  articleCount: number;
  keywords: string[];
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  date: string;
  updatedDate?: string;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  keywords: string[];
}

export interface NavItem {
  prev: { category: string; slug: string; title: string } | null;
  next: { category: string; slug: string; title: string } | null;
}
