import { instagramPosts } from "@/data/instagram";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";
import Media from "./Media";

export default function InstagramFeed() {
  return (
    <section className="section section-flush-top" aria-labelledby="insta-title">
      <div className="container">
        <div className="insta-head">
          <div>
            <p className="label"><span>—</span> Latest from Instagram</p>
            <h2 id="insta-title">{site.instagramHandle}</h2>
          </div>
          <a className="link-arrow" href={site.instagram} target="_blank" rel="noopener noreferrer">Follow along <ArrowRight /></a>
        </div>
        <ul className="insta-grid" role="list" data-stagger>
          {instagramPosts.map((post) => (
            <li key={post.href}>
              <a href={post.href} target="_blank" rel="noopener noreferrer" aria-label={`${post.alt} — view on Instagram`}>
                <Media className="media-zoom" image={post.image} alt="" sizes="(min-width: 640px) 19vw, 46vw" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
