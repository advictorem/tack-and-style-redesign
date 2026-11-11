import Link from "next/link";
import type { CSSProperties } from "react";
import { img } from "@/data/images";
import { ArrowRight } from "./Icons";
import Media from "./Media";
import Split from "./Split";

export default function EditorialIntro() {
  return (
    <section className="section" id="studio" aria-labelledby="studio-title">
      <div className="container">
        <div className="intro-head">
          <p className="label" data-reveal><span>(01)</span> The Studio</p>
          <Split className="display-lg" id="studio-title" text="Every Home Tells a *Story.*" />
          <p className="statement" data-reveal style={{ "--d": 2 } as CSSProperties}>
            Tack &amp; Style blends timeless charm with modern living — one-of-a-kind pieces, thrifted treasures and
            purposeful design that reflect the people who actually live there.
          </p>
        </div>
        <div className="intro-grid">
          <Media
            className="intro-a"
            image={img("home/tackandstyle-interior-living-room-blue-drapes")}
            alt="Sitting area with bay windows, navy drapes and a mirrored cabinet"
            sizes="(min-width: 900px) 46vw, 100vw"
            reveal
            parallax
          />
          <div className="intro-text stack stack-lg" data-reveal style={{ "--d": 2 } as CSSProperties}>
            <p>
              Founder Evan Sheehan is on a mission to bring individuality to every home, curating well-loved treasures
              that reflect each client’s unique story. In a world of mass-produced sameness, her work is thoughtful,
              approachable and personal.
            </p>
            <p className="muted">
              No job is too small. Evan works with you on a realistic budget and timeframe to create rooms that are as
              functional as they are beautiful — timeless, elegant, and made to be lived in.
            </p>
            <Link className="link-arrow" href="/about">About Tack &amp; Style <ArrowRight /></Link>
          </div>
          <Media
            className="intro-b"
            image={img("about/evan-designer-stairs")}
            alt="Founder Evan Sheehan sitting on a panelled staircase with her laptop"
            sizes="(min-width: 900px) 30vw, 58vw"
            position="50% 30%"
            reveal
            delay={3}
          />
        </div>
      </div>
    </section>
  );
}
