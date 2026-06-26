import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductFilter } from "@/components/features/product/ProductFilter";
import { ProductGrid } from "@/components/features/product/ProductGrid";
import { allProducts, getProductsByCategory } from "@/lib/products";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Shop",
  description:
    "Browse our collection of digital stickers, planner templates, and journal embellishments. French-inspired stationery for the clean-girl aesthetic.",
  path: "/shop",
});

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category || "all";
  const products = getProductsByCategory(category);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          label="Shop"
          title="All Products"
          subtitle="Each piece designed with intention. Digital products delivered instantly via Payhip."
        />
        <ProductFilter />
        <ProductGrid products={products} />
        <p className="mt-4 text-center text-xs text-ink-light">
          Showing {products.length} of {allProducts.length} products
        </p>
      </Container>
    </section>
  );
}
