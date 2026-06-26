import Script from "next/script";
import { getPayhipCheckoutUrl } from "@/lib/payhip";

interface PayhipBuyButtonProps {
  productId: string;
  productTitle: string;
}

export function PayhipBuyButton({ productId, productTitle }: PayhipBuyButtonProps) {
  const checkoutUrl = getPayhipCheckoutUrl(productId);

  return (
    <>
      <Script
        src="https://payhip.com/payhip.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Payhip script initializes automatically
        }}
      />

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* Direct checkout — primary CTA */}
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full rounded-button bg-ink px-8 py-4 text-center text-sm font-medium tracking-wide text-cream shadow-soft transition-opacity hover:opacity-85 sm:w-auto"
        >
          Buy Now — ${/* price injected via parent */ ""}
        </a>

        {/* Payhip embed fallback */}
        <a
          href={`https://payhip.com/b/${productId}`}
          className={`payhip-buy-button w-full rounded-button border-2 border-ink/10 bg-transparent px-8 py-4 text-center text-sm font-medium tracking-wide text-ink transition-colors hover:border-ink/30 sm:w-auto`}
          data-theme="none"
          data-product={productId}
        >
          View on Payhip
        </a>
      </div>
    </>
  );
}
