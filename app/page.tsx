import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroSection } from "@/components/features/hero/HeroSection";
import { ProductGrid } from "@/components/features/product/ProductGrid";
import { TikTokPromo } from "@/components/features/social/TikTokPromo";
import { NewsletterForm } from "@/components/features/newsletter/NewsletterForm";
import { Button } from "@/components/ui/Button";
import { featuredProducts } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20">
        <Container>
          <SectionHeading
            label="Shop"
            title="The Collection"
            subtitle="Curated digital stationery for every moment of your planning ritual."
            center
          />
          <ProductGrid products={featuredProducts} />
          <div className="mt-12 text-center">
            <Button href="/shop" variant="outline" size="lg">
              View All Products →
            </Button>
          </div>
        </Container>
      </section>

      {/* Brand Intro */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-ink-muted">
              The Philosophy
            </p>
            <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
              For the details-obsessed
            </h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              We believe the small things matter — the weight of a line, the shade of cream on
              your screen, the quiet satisfaction of a page that feels like you. Every Marge
              Studio product is designed with restraint and intention, so your tools feel less
              like software and more like a softly lit desk on a Tuesday morning.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                Read Our Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* TikTok Promo */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <TikTokPromo />
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <SectionHeading
              label="Stay in Touch"
              title="Join the Studio"
              subtitle="10% off your first order, early access to new releases, and quietly beautiful emails. No spam, ever."
              center
            />
            <NewsletterForm variant="default" />
          </div>
        </Container>
      </section>
    </>
  );
}
