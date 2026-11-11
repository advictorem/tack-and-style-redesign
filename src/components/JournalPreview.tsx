import Link from "next/link";
import type { CSSProperties } from "react";
import { featuredPosts } from "@/data/posts";
import { ArrowRight } from "./Icons";
import PostCard from "./PostCard";
import Split from "./Split";

export default function JournalPreview() {
  const [main, ...side] = featuredPosts;
  return (
    <section className="section section-line" aria-labelledby="journal-title">
      <div className="container">
        <div className="head">
          <div>
            <p className="label"><span>(06)</span> The Journal</p>
            <Split className="display-lg" id="journal-title" text="Inspiration *& Ideas.*" />
          </div>
          <div className="head-aside" data-reveal>
            <Link className="btn" href="/blog">Read the journal <ArrowRight /></Link>
          </div>
        </div>
        <div className="journal-grid">
          <div className="journal-main" data-reveal>
            <PostCard post={main} ratio="5 / 4" sizes="(min-width: 1000px) 50vw, 100vw" />
          </div>
          <div className="journal-side">
            {side.map((post, i) => (
              <div className="journal-item" key={post.slug} data-reveal style={{ "--d": i + 2 } as CSSProperties}>
                <PostCard post={post} ratio="1 / 1" sizes="(min-width: 1000px) 18vw, (min-width: 560px) 40vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
