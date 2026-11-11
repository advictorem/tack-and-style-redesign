import Link from "next/link";
import type { CSSProperties } from "react";
import type { Post } from "@/data/posts";
import Media from "./Media";

export default function PostCard({ post, ratio = "4 / 3", sizes, heading: Heading = "h3" }: { post: Post; ratio?: string; sizes: string; heading?: "h2" | "h3" }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="post-card" style={{ "--ratio": ratio } as CSSProperties}>
      <Link href={href} tabIndex={-1} aria-hidden="true">
        <Media className="media-zoom" image={post.cover} alt="" sizes={sizes} />
      </Link>
      <div className="post-meta"><span>{post.category}</span><time>{post.date}</time></div>
      <Heading className="post-card-title"><Link href={href} className="u-line">{post.title}</Link></Heading>
      <p>{post.excerpt}</p>
    </article>
  );
}
