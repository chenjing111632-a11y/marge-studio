import { Metadata } from "next";
import { SITE_CONFIG } from "./site-config";

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: MetadataParams): Metadata {
  const baseUrl = SITE_CONFIG.url;
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: ogImage ? [{ url: ogImage }] : [{ url: `${baseUrl}/og-image.png` }],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
  };
}

export function generateProductJsonLd(product: {
  title: string;
  description: string;
  price: number;
  currency: string;
  slug: string;
}) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: product.currency,
        availability: "https://schema.org/InStock",
        url: `${SITE_CONFIG.url}/shop/${product.slug}`,
      },
    }),
  };
}

export function generateArticleJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    }),
  };
}
