import Link from "next/link";
import { BlogPost } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group flex flex-col">
      {/* Image Placeholder */}
      {post.image ? (
        <div className="mb-4 aspect-[16/10] overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-cream via-lavender/10 to-blush/10">
          <div className="flex h-full items-center justify-center">
            <span className="font-serif text-5xl text-ink/5">✧</span>
          </div>
        </div>
      )}

      {/* Meta */}
      <div className="mb-2 flex items-center gap-3 text-xs text-ink-muted">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>·</span>
        <span>{post.readTime} min read</span>
      </div>

      {/* Title */}
      <Link href={`/blog/${post.slug}`} className="group/link">
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink transition-colors group-hover/link:text-blush-deep">
          {post.title}
        </h3>
      </Link>

      {/* Excerpt */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="sage">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
