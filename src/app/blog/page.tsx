import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import ContactCTA from "@/components/ContactCTA";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Inspiration and tips from Tack & Style Design: thrifting, pencil trim, organization and designing a home with character.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return (
    <>
      <PageHero label="The Journal" title="Inspiration *& Tips.*" lead="Notes on thrifting, trim, layout and the small decisions that make a home feel like yours." />
      <section className="section section-flush-top">
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: undefined }}>
            {sorted.map((post) => (
              <div key={post.slug} data-reveal>
                <PostCard post={post} ratio="4 / 5" heading="h2" sizes="(min-width: 1000px) 30vw, (min-width: 640px) 46vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA numbered={false} />
    </>
  );
}
