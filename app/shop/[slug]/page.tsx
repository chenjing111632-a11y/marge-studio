import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PayhipBuyButton } from "@/components/features/product/PayhipBuyButton";
import { ProductGrid } from "@/components/features/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allProducts, getProductBySlug } from "@/lib/products";
import { generatePageMetadata, generateProductJsonLd } from "@/lib/metadata";
import { getPayhipCheckoutUrl } from "@/lib/payhip";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  if (!product) return {};
  return generatePageMetadata({
    title: product.title,
    description: product.description,
    path: `/shop/${product.slug}`,
    type: "website",
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();

  const checkoutUrl = getPayhipCheckoutUrl(product.payhipProductId);
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.categories.some((c) => product.categories.includes(c))
    )
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateProductJsonLd(product)}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-card bg-gradient-to-br from-cream via-blush/10 to-sage/10">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="font-serif text-7xl text-ink/10">✦</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="font-serif text-3xl font-semibold text-ink md:text-4xl">
                {product.title}
              </h1>

              <p className="mt-4 leading-relaxed text-ink-muted">
                {product.description}
              </p>

              <p className="mt-6 font-serif text-3xl font-semibold text-gold">
                ${product.price}
                <span className="ml-1 text-sm font-normal text-ink-muted">
                  {product.currency}
                </span>
              </p>

              {/* Payhip Button */}
              <div className="mt-8">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-button bg-ink px-8 py-4 text-center text-sm font-medium tracking-wide text-cream shadow-soft transition-opacity hover:opacity-85 sm:w-auto"
                >
                  Buy Now — ${product.price}
                </a>
                <p className="mt-3 text-xs text-ink-light">
                  You&apos;ll be redirected to Payhip for secure checkout. Instant digital
                  download after purchase.
                </p>
              </div>

              {/* What You Get */}
              <div className="mt-8 border-t border-cream/60 pt-8">
                <h3 className="mb-3 font-serif text-lg font-semibold text-ink">
                  What you&apos;ll get
                </h3>
                <ul className="space-y-2 text-sm text-ink-muted">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-blush">✦</span>
                    Instant digital download — no shipping, no waiting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-blush">✦</span>
                    High-resolution transparent PNGs (for stickers)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-blush">✦</span>
                    Compatible with GoodNotes, Notion, Notability, and more
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-blush">✦</span>
                    Reusable forever — once it&apos;s yours, use it endlessly
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-cream/60 py-20">
          <Container>
            <SectionHeading
              title="You might also like"
              subtitle="Curated picks based on this product."
            />
            <ProductGrid products={relatedProducts} />
          </Container>
        </section>
      )}
    </>
  );
}
