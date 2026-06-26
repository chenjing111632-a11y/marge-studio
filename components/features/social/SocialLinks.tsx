import { SITE_CONFIG } from "@/lib/site-config";

const socials = [
  { name: "Instagram", href: SITE_CONFIG.social.instagram, icon: "⟡" },
  { name: "TikTok", href: SITE_CONFIG.social.tiktok, icon: "◇" },
  { name: "Pinterest", href: SITE_CONFIG.social.pinterest, icon: "○" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-ink-muted transition-colors hover:text-ink"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
