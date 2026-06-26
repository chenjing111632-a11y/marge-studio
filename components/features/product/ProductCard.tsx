import Link from "next/link";
import { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPayhipCheckoutUrl } from "@/lib/payhip";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const checkoutUrl = getPayhipCheckoutUrl(product.payhipProductId);

  return (
    <Card className="group flex flex-col">
      {/* Image Placeholder */}
      <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-cream via-blush/10 to-sage/10">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-serif text-4xl text-ink/10">✦</span>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="mb-2 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <Link href={`/shop/${product.slug}`} className="group/link">
        <h3 className="font-serif text-lg font-semibold text-ink transition-colors group-hover/link:text-blush-deep">
          {product.title}
        </h3>
      </Link>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {product.description}
      </p>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-serif text-lg font-semibold text-gold">
          ${product.price}
          <span className="ml-1 text-xs font-normal text-ink-muted">
            {product.currency}
          </span>
        </span>
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-button bg-ink px-4 py-2 text-xs font-medium tracking-wide text-cream transition-opacity hover:opacity-85"
        >
          Buy Now
        </a>
      </div>
    </Card>
  );
}
