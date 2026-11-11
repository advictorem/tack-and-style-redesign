import Link from "next/link";
import { img } from "@/data/images";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";
import Media from "./Media";
import Split from "./Split";

export default function ContactCTA({ numbered = true }: { numbered?: boolean }) {
  return (
    <section className="cta tone-alt" aria-labelledby="cta-title">
      <Media
        className="cta-media"
        image={img("project-sitting-room/interiordesign3-5-2025-056")}
        alt="Gingham armchair beneath an arched brass mirror in a green sitting room"
        sizes="(min-width: 1000px) 42vw, 100vw"
        position="50% 70%"
        reveal
        parallax
      />
      <div className="cta-body">
        <p className="label" data-reveal>{numbered ? <span>(07)</span> : <span>—</span>} Let’s Connect</p>
        <Split className="cta-title" id="cta-title" text="Let’s Create Something *Beautiful.*" />
        <p data-reveal>Have a project in mind? Let’s create a space that tells your story.</p>
        <Link className="btn btn-solid btn-lg" href="/contact" data-reveal>Book a design consultation <ArrowRight /></Link>
        <div className="cta-direct" data-reveal>
          <a className="u-line" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="u-line" href={site.phoneHref}>{site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
