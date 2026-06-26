"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-serif text-2xl font-semibold text-ink">
            Something went wrong
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            A small glitch. Try refreshing the page — it usually fixes things.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button onClick={reset} variant="primary">
              Try again
            </Button>
            <Button href="/" variant="ghost">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
