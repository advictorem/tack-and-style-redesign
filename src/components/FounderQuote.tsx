import Image from "next/image";
import type { CSSProperties } from "react";
import { img } from "@/data/images";
import Split from "./Split";

const fabric = img("home/blue-fabric");
const signature = img("home/evan-signature-4x");

/** Founder's own words from the existing homepage, set over the brand's navy satin. */
export default function FounderQuote() {
  return (
    <section className="quote tone-dark" aria-label="A note from the founder">
      <div className="quote-bg" data-parallax>
        <div className="px-inner"><Image src={fabric.src} alt="" fill sizes="100vw" /></div>
      </div>
      <div className="container-narrow">
        <figure>
          <Split
            as="blockquote"
            text="“I design for life’s everyday moments — muddy boots at the doors, homework on the table, and late-night laughs in a home that fits you perfectly.”"
          />
          <figcaption data-reveal style={{ "--d": 4 } as CSSProperties}>
            <Image src={signature.src} alt="Evan Sheehan signature" width={signature.w} height={signature.h} sizes="12rem" />
            <span>Evan Sheehan — Founder</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
