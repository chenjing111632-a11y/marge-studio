import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogGrid } from "@/components/features/blog/BlogGrid";
import { allBlogPosts } from "@/lib/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Journal",
  description:
    "Digital planning tips, aesthetic desk setup guides, app comparisons, and studio notes from Marge Studio.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          label="Journal"
          title="Notes from the Studio"
          subtitle="Digital planning tips, desk setup guides, and quiet thoughts on making beautiful things."
        />
        <BlogGrid posts={allBlogPosts} />
      </Container>
    </section>
  );
}
