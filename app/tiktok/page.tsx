import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NewsletterForm } from "@/components/features/newsletter/NewsletterForm";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "TikTok Shop",
  description:
    "Find Marge Studio on TikTok Shop — exclusive deals, behind-the-scenes content, and digital planning inspiration.",
  path: "/tiktok",
});

const tiktokBenefits = [
  {
    emoji: "💰",
    title: "TikTok-exclusive deals",
    description: "Special pricing and bundles you won't find anywhere else.",
  },
  {
    emoji: "🎥",
    title: "See the stickers in action",
    description: "Watch how our products look in real notebooks before you buy.",
  },
  {
    emoji: "🎬",
    title: "Behind the scenes",
    description: "Peek into the design process and see new products being made.",
  },
];

export default function TikTokPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-ink-muted">
              Also on
            </p>
            <h1 className="font-serif text-3xl font-semibold text-ink md:text-5xl">
              Find us on TikTok Shop
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              The same Marge Studio aesthetic, now on TikTok. Exclusive deals, behind-the-scenes
              content, and digital planning inspiration in bite-sized videos.
            </p>
            <div className="mt-10">
              <Button
                href={SITE_CONFIG.social.tiktok}
                variant="primary"
                size="lg"
                external
              >
                Visit @margestudio on TikTok →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <SectionHeading
            title="Why shop on TikTok?"
            subtitle="A different way to discover and buy digital stationery."
            center
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {tiktokBenefits.map((benefit) => (
              <Card key={benefit.title} hover={false}>
                <div className="text-center">
                  <div className="mb-4 text-3xl">{benefit.emoji}</div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Gallery Placeholder */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <SectionHeading
            title="Latest videos"
            subtitle="Follow along for digital planning tips, aesthetic setups, and first looks at new products."
            center
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[9/16] overflow-hidden rounded-card bg-gradient-to-br from-cream via-blush/5 to-lavender/10 shadow-card"
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl">🎬</span>
                    <p className="mt-3 text-xs text-ink-muted">
                      TikTok video coming soon
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter fallback */}
      <section className="border-t border-cream/60 py-20">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <SectionHeading
              title="Not on TikTok?"
              subtitle="Get the same deals and first looks delivered to your inbox instead."
              center
            />
            <NewsletterForm variant="default" />
          </div>
        </Container>
      </section>
    </>
  );
}
