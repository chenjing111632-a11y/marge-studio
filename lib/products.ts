import { Product } from "@/types";

export const allProducts: Product[] = [
  {
    slug: "morning-study-notion-template",
    title: "Morning Study · All-in-One Student Dashboard",
    description:
      "Course schedule, assignment tracker, exam countdown, and GPA calculator — one Notion hub for the entire semester.",
    price: 12,
    currency: "USD",
    payhipProductId: "morning-study",
    categories: ["planner-stickers", "bundles"],
    tags: ["New"],
    featured: true,
  },
  {
    slug: "matin-daily-planner",
    title: "Matin · Daily Planner & Weekly Reflection",
    description:
      "5 minutes each morning to set your day, 3 lines each night to reflect. Lightweight but the one you'll use every day.",
    price: 9,
    currency: "USD",
    payhipProductId: "80olt",
    categories: ["planner-stickers"],
    tags: ["Bestseller"],
    featured: true,
  },
  {
    slug: "cornell-notes-3-color",
    title: "Cornell Note Inserts × 3 Colors",
    description:
      "Cream, sage grey, and lavender — a three-color Cornell note system made for iPad handwriting lovers.",
    price: 7,
    currency: "USD",
    payhipProductId: "cornell-3",
    categories: ["notebook-stickers", "digital-papers"],
    tags: ["Bundle"],
    featured: true,
  },
  {
    slug: "french-rose-sticker-pack",
    title: "French Rose · Digital Sticker Pack",
    description:
      "48 hand-drawn floral stickers inspired by a Parisian garden. Peonies, roses, and delicate botanicals for your digital journal.",
    price: 8,
    currency: "USD",
    payhipProductId: "0ycVA",
    categories: ["notebook-stickers", "journal-stickers"],
    tags: ["New"],
    featured: true,
  },
  {
    slug: "soft-grid-digital-paper",
    title: "Soft Grid · Digital Paper Set",
    description:
      "20 subtly gridded backgrounds in cream, blush, and sage tones. The perfect canvas for digital planning.",
    price: 6,
    currency: "USD",
    payhipProductId: "soft-grid",
    categories: ["digital-papers"],
    tags: ["Bestseller"],
  },
  {
    slug: "clean-girl-icon-collection",
    title: "Clean Girl · Icon Collection",
    description:
      "120 minimal line-drawn icons for Notion, GoodNotes, and your digital workspace. Coffee cups, books, candles, and more.",
    price: 10,
    currency: "USD",
    payhipProductId: "clean-girl-icons",
    categories: ["notebook-stickers", "journal-stickers"],
    tags: ["Bestseller"],
    featured: true,
  },
  {
    slug: "lavender-morning-stickers",
    title: "Lavender Morning · Sticker Set",
    description:
      "Soft purple-hued stickers for your morning journal ritual. Lattes, croissants, and quiet moments.",
    price: 7,
    currency: "USD",
    payhipProductId: "lavender-morning",
    categories: ["journal-stickers", "notebook-stickers"],
    tags: ["New"],
  },
  {
    slug: "aesthetic-planner-bundle",
    title: "The Aesthetic Planner Bundle",
    description:
      "Everything you need: planner templates + sticker pack + digital papers. A complete system for a beautiful planning routine.",
    price: 24,
    currency: "USD",
    payhipProductId: "aesthetic-bundle",
    categories: ["bundles"],
    tags: ["Bundle", "Sale"],
    featured: true,
  },
];

export const featuredProducts = allProducts.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return allProducts;
  return allProducts.filter((p) => p.categories.includes(category as Product["categories"][number]));
}

export const allCategories = [
  { slug: "all", label: "All" },
  { slug: "notebook-stickers", label: "Notebook Stickers" },
  { slug: "planner-stickers", label: "Planner Stickers" },
  { slug: "journal-stickers", label: "Journal Stickers" },
  { slug: "digital-papers", label: "Digital Papers" },
  { slug: "bundles", label: "Bundles" },
] as const;
