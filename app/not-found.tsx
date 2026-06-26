import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="font-serif text-7xl text-ink/10">404</p>
          <h1 className="mt-6 font-serif text-2xl font-semibold text-ink">
            This page doesn&apos;t exist
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            It might have moved, or you might have typed something wrong. Either way,
            let&apos;s get you back to something beautiful.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary">
              Back to Home
            </Button>
            <Button href="/shop" variant="ghost">
              Browse Shop
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
