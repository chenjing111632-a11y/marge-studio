import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/features/newsletter/NewsletterForm";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Newsletter",
  description:
    "Join the Marge Studio newsletter for 10% off your first order, early access to new releases, and quietly beautiful emails.",
  path: "/newsletter",
});

const perks = [
  {
    emoji: "💌",
    title: "10% off your first order",
    description: "A welcome gift for joining the studio.",
  },
  {
    emoji: "🌟",
    title: "Early access to new releases",
    description: "Shop new collections before anyone else.",
  },
  {
    emoji: "📝",
    title: "Subscriber-only freebies",
    description: "Free digital goodies delivered to your inbox.",
  },
  {
    emoji: "🤍",
    title: "Quietly beautiful emails",
    description: "No spam. No noise. Just things worth reading.",
  },
];

export default function NewsletterPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <SectionHeading
            label="Stay in Touch"
            title="Join the Studio"
            subtitle="A newsletter for people who love beautiful digital tools — and hate inbox clutter."
            center
          />

          <div className="mb-10">
            <NewsletterForm variant="default" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-card bg-surface-card p-6 text-center shadow-card"
              >
                <div className="mb-3 text-2xl">{perk.emoji}</div>
                <h3 className="font-serif text-sm font-semibold text-ink">
                  {perk.title}
                </h3>
                <p className="mt-1 text-xs text-ink-muted">{perk.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-ink-light">
            One email per week, sometimes fewer. Unsubscribe anytime. Your email stays with us,
            never shared.
          </p>
        </div>
      </Container>
    </section>
  );
}
