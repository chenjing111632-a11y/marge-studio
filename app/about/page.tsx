import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "The story behind Marge Studio — digital stationery for the clean-girl aesthetic, designed with French-inspired elegance and a love for the details.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-ink-muted">
              Our Story
            </p>
            <h1 className="font-serif text-3xl font-semibold text-ink md:text-5xl">
              Quietly making meaningful things
            </h1>
          </div>
        </Container>
      </section>

      {/* Origin */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-ink-muted">
                Marge Studio was born from a simple observation: the tools we use every day should
                feel as good as they look.
              </p>
              <p className="mt-6 leading-relaxed text-ink-muted">
                As a student, I spent hours searching for digital planners and stickers that matched
                my aesthetic — clean, soft, quietly elegant. Everything I found was either too loud,
                too busy, or felt like it was designed for someone else. So I started making my own.
              </p>
              <p className="mt-6 leading-relaxed text-ink-muted">
                The name &quot;Marge&quot; comes from the French word for margin — the quiet space
                around the content. It&apos;s in the margins that ideas breathe, connections form,
                and real thinking happens. Every product we make honors that space.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Aesthetic */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              label="The Aesthetic"
              title="Clean Girl × French Elegance"
              subtitle="Three principles guide everything we make."
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blush/10 text-2xl">
                  🕊️
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink">Soft Minimalism</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Less, but better. Every element earns its place. White space is not empty — it&apos;s breathing room for your thoughts.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/10 text-2xl">
                  🌿
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink">French Restraint</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  The French know that elegance is editing. We choose cream over white, serif over sans, soft shadow over harsh line.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender/10 text-2xl">
                  ✨
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink">Sweet Intention</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  A little warmth goes a long way. Blush tones, gentle curves, and tiny details that feel like a smile in your notebook.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              Ready to make your digital space beautiful?
            </h2>
            <div className="mt-8">
              <Button href="/shop" variant="primary" size="lg">
                Browse the Collection
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
