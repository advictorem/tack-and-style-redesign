import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { img } from "@/data/images";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";
import Split from "./Split";

const photo = img("project-sitting-room/interiordesign3-5-2025-128");
const d = (n: number) => ({ "--d": n }) as CSSProperties;

export default function Hero() {
  return (
    <section className="hero tone-dark" aria-labelledby="hero-title">
      <div className="hero-bg" data-parallax>
        <div className="px-inner">
          <Image src={photo.src} alt="Formal sitting room with green panelled walls, velvet sofas and a brass chandelier" fill priority sizes="100vw" />
        </div>
      </div>
      <div className="hero-inner container-wide">
        <div className="hero-top" data-reveal="fade">
          <p className="eyebrow">Interior Design Studio</p>
          <p className="eyebrow hide-sm">{site.location}</p>
        </div>
        <Split as="h1" className="hero-title" id="hero-title" text="Old-world *elegance* for today’s living." delay={2} />
        <div className="hero-bottom">
          <Link className="hero-caption" href="/projects/sitting-room" data-reveal style={d(6)}>
            <span className="hero-caption-num">01</span>
            <span>
              <strong className="u-line">Formal Sitting Room</strong>
              <span>From the portfolio</span>
            </span>
          </Link>
          <p className="hero-lead" data-reveal style={d(7)}>
            Awe-inspiring spaces designed as the backdrop to your life’s most cherished moments.
          </p>
          <div className="hero-actions" data-reveal style={d(8)}>
            <Link className="btn btn-solid" href="/projects">Explore our work <ArrowRight /></Link>
            <Link className="btn" href="/contact">Book a consultation <ArrowRight /></Link>
          </div>
          <a className="scroll-cue" href="#studio" data-reveal="fade" style={d(9)}>Scroll</a>
        </div>
      </div>
    </section>
  );
}
