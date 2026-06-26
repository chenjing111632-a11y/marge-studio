"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { allCategories } from "@/lib/products";

export function ProductFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "all";

  const handleFilter = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mb-10 flex flex-wrap items-center gap-3">
      {allCategories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleFilter(cat.slug)}
          className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all ${
            currentCategory === cat.slug
              ? "bg-ink text-cream"
              : "bg-cream/50 text-ink-muted hover:bg-cream hover:text-ink"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
