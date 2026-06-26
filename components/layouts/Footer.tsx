import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { NewsletterForm } from "@/components/features/newsletter/NewsletterForm";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=planner-stickers", label: "Planner Stickers" },
    { href: "/shop?category=notebook-stickers", label: "Notebook Stickers" },
    { href: "/shop?category=bundles", label: "Bundles" },
  ],
  studio: [
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Journal" },
    { href: "/tiktok", label: "TikTok Shop" },
    { href: "/newsletter", label: "Newsletter" },
  ],
  connect: [
    { href: SITE_CONFIG.social.instagram, label: "Instagram", external: true },
    { href: SITE_CONFIG.social.tiktok, label: "TikTok", external: true },
    { href: SITE_CONFIG.social.pinterest, label: "Pinterest", external: true },
    { href: `mailto:${SITE_CONFIG.social.email}`, label: "Email", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-cream/60 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="font-serif text-sm font-semibold uppercase tracking-[4px] text-ink-muted"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-ink-muted">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-ink-muted">
              Studio
            </h4>
            <ul className="space-y-2">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Mini */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-ink-muted">
              Stay in touch
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-ink-muted">
              10% off your first order, early access to new releases, and quietly beautiful emails.
            </p>
            <NewsletterForm variant="compact" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-cream/60 pt-6 text-center">
          <p className="text-xs text-ink-light">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Quietly making meaningful things.
          </p>
        </div>
      </div>
    </footer>
  );
}
