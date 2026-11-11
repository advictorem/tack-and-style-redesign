import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Media from "@/components/Media";
import Split from "@/components/Split";
import { getPost, posts } from "@/data/posts";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { type: "article", images: [post.cover.src] } };
}

export default async function PostPage({ params }: Params) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const index = posts.indexOf(post);
  const prev = posts[(index - 1 + posts.length) % posts.length];
  const next = posts[(index + 1) % posts.length];
  // The first image block repeats the cover, which is already shown as the banner.
  const firstImage = post.blocks.findIndex((b) => b.t === "img");
  const blocks = post.blocks.filter((_, i) => i !== firstImage);

  return (
    <>
      <article>
        <header className="page-hero">
          <div className="container-narrow">
            <div className="post-meta" style={{ marginBlockEnd: "1.5rem" }} data-reveal="fade">
              <span>{post.category}</span><time>{post.date}</time><span>Written by {site.founder}</span>
            </div>
            <Split as="h1" text={post.title} className="display" />
          </div>
        </header>
        <div className="container">
          <Media className="page-banner" image={post.cover} alt={post.coverAlt} sizes="100vw" priority reveal parallax />
        </div>
        <div className="section container-narrow prose">
          {blocks.map((block, i) =>
            block.t === "h" ? (
              <h2 key={i}>{block.text}</h2>
            ) : block.t === "p" ? (
              <p key={i}>{block.text}</p>
            ) : (
              <div key={i} data-reveal style={{ marginBlock: "2.5rem" }}>
                <Image src={block.img.src} alt="" width={block.img.w} height={block.img.h} sizes="(min-width: 1000px) 58rem, 100vw" />
              </div>
            ),
          )}
          <p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Follow {site.instagramHandle} on Instagram</a>
          </p>
        </div>
      </article>
      <div className="container">
        <nav className="pager" aria-label="More articles" style={{ marginBlockEnd: "var(--section)" }}>
          <Link href={`/blog/${prev.slug}`}><span className="eyebrow muted">Previous</span><strong className="u-line">{prev.title.split(":")[0]}</strong></Link>
          <Link href={`/blog/${next.slug}`}><span className="eyebrow muted">Next</span><strong className="u-line">{next.title.split(":")[0]}</strong></Link>
        </nav>
      </div>
      <ContactCTA numbered={false} />
    </>
  );
}
