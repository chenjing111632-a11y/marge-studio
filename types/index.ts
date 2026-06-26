export interface Product {
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  payhipProductId: string;
  categories: ProductCategory[];
  tags: ProductTag[];
  image?: string;
  featured?: boolean;
}

export type ProductCategory =
  | "notebook-stickers"
  | "planner-stickers"
  | "journal-stickers"
  | "digital-papers"
  | "bundles";

export type ProductTag = "New" | "Bestseller" | "Bundle" | "Sale";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
  image?: string;
  content: string;
}
