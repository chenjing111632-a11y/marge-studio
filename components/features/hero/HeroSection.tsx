import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blush/5 via-transparent to-transparent" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-ink-muted">
            Marge Studio
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink md:text-5xl lg:text-6xl">
            Digital stickers that feel like morning light.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            Notebook stickers, planner templates, and journal embellishments for the clean-girl
            aesthetic. French-inspired, thoughtfully designed, made for students who find joy in
            the details.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/shop" variant="primary" size="lg">
              Shop the Collection
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
