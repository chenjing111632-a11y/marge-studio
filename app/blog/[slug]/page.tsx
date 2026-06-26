import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";
import { allBlogPosts, getBlogPostBySlug } from "@/lib/blog-posts";
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug((await params).slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug((await params).slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateArticleJsonLd(post)}
      />

      <article className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[2px] text-ink-muted transition-colors hover:text-ink"
            >
              ← Back to Journal
            </Link>

            {/* Header */}
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="sage">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-3 text-sm text-ink-muted">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>·</span>
                <span>{post.readTime} min read</span>
                <span>·</span>
                <span>{post.author}</span>
              </div>
            </header>

            <Divider className="mb-10" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="mt-10 font-serif text-xl font-semibold text-ink first:mt-0">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={i} className="mt-8 font-serif text-lg font-semibold text-ink">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-none space-y-2 pl-0">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-ink-muted">
                          <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-blush" />
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith("1. ")) {
                  return (
                    <ol key={i} className="list-decimal space-y-2 pl-6">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-ink-muted">
                          {item.replace(/^\d+\.\s/, "")}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <Divider className="my-12" />

            {/* Footer nav */}
            <nav className="flex justify-between">
              <Link
                href="/blog"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                ← All posts
              </Link>
              <Link
                href="/shop"
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                Browse products →
              </Link>
            </nav>
          </div>
        </Container>
      </article>
    </>
  );
}
