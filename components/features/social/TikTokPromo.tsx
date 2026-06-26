import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SITE_CONFIG } from "@/lib/site-config";

export function TikTokPromo() {
  return (
    <Card className="overflow-hidden bg-gradient-to-r from-blush/5 via-cream to-sage/5" hover={false}>
      <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="flex-shrink-0 text-5xl">🎬</div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-blush-deep">
            Also on
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
            Find us on TikTok Shop
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Exclusive deals, behind-the-scenes content, and see our stickers in action. Follow
            @margestudio for digital planning inspiration.
          </p>
        </div>
        <Button href={SITE_CONFIG.social.tiktok} variant="primary" external>
          Visit TikTok Shop →
        </Button>
      </div>
    </Card>
  );
}
