import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { ArrowRight } from "@/components/Icons";
import Media from "@/components/Media";
import PageHero from "@/components/PageHero";
import Split from "@/components/Split";
import { img } from "@/data/images";
import { pillars } from "@/data/services";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Evan Sheehan, founder of Tack & Style Design — blending timeless charm, thrifted treasures and a lifelong love of horses and home.",
};

const signature = img("home/evan-signature-4x");

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Making Your Home Feel *More You.*"
        lead="Mass-produced furniture. Cookie-cutter houses. Spaces stripped of soul. At Tack & Style Design, I believe your home should reflect you – your story, your style, your spirit."
        image={img("about/evan-designer-kitchen")}
        imageAlt="Evan Sheehan standing at a white kitchen island"
        position="50% 30%"
      />
      <section className="section">
        <div className="container">
          <div className="split-row">
            <Media image={img("about/desk")} alt="Vintage writing desk and lamp beside French doors in a blush-pink room" sizes="(min-width: 900px) 42vw, 100vw" reveal parallax />
            <div className="stack stack-lg" data-reveal>
              <p className="label"><span>(01)</span> Every home deserves a story</p>
              <Split className="display" text="It’s not about *having more.*" />
              <p>
                I blend timeless charm with modern living, curating one-of-a-kind pieces and thrifted treasures that
                bring warmth, character, and function into every room. I find beauty in the well-loved, purpose in the
                imperfect, and inspiration in the everyday.
              </p>
              <p className="muted">
                Because great design isn’t about price tags, it’s about personality. I don’t just style homes, I help
                create spaces to hold life’s most meaningful moments.
              </p>
              <Link className="link-arrow" href="/contact">Get in touch <ArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-alt">
        <div className="container">
          <div className="head">
            <div>
              <p className="label"><span>(02)</span> Values</p>
              <Split className="display-lg" text="What I *believe in.*" />
            </div>
            <p className="head-aside muted" data-reveal>
              As a small business, no job is too small for me. I work with you on a realistic budget and timeframe to
              improve your existing space in ways that make a big impact — without tearing everything down and
              starting from scratch.
            </p>
          </div>
          <div className="grid-3">
            {pillars.map((p, i) => (
              <article className="tile" key={p.num}>
                <Media image={p.image} alt={p.alt} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 46vw, 100vw" reveal delay={i} />
                <p className="proj-num">{p.num}</p>
                <h3>{p.name}</h3>
                <p className="muted">
                  {[
                    "I champion individuality and design spaces that reflect the true spirit of those who live in them.",
                    "Every piece and plan is curated with care, blending function, beauty, and storytelling.",
                    "I believe true luxury is found in timeless elegance and effortless sophistication. Spaces that feel refined, curated, and deeply personal.",
                  ][i]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-row flip">
            <Media image={img("about/about-evan-sheehan")} alt="Evan Sheehan with her family outdoors" sizes="(min-width: 900px) 42vw, 100vw" position="50% 20%" reveal />
            <div className="stack stack-lg" data-reveal>
              <p className="label"><span>(03)</span> About Evan</p>
              <Split className="display" text="A lifelong lover of *horses and home.*" />
              <p>
                Hi, I’m Evan, founder of Tack &amp; Style Design. My journey into design started in the saddle. Horses
                have been a meaningful part of my life since childhood, and I always knew I wanted to weave that
                passion into something bigger.
              </p>
              <p>
                The name Tack &amp; Style comes from the process of “tacking up” a horse, carefully preparing every
                piece of equipment before the ride. I take the same thoughtful approach when designing a room: laying
                the groundwork with intention, then layering in the style that brings it all to life.
              </p>
              <p className="muted">
                To me, great design isn’t just about looks, it’s about how a space feels. Whether I’m sourcing a
                one-of-a-kind thrifted piece or creating a custom layout, my goal is always to reflect your unique
                story. Fun fact: my neighborhood in Potomac, MD, is filled with horse-themed street names, so it truly
                feels like fate that Tack &amp; Style was born here.
              </p>
              <Image className="signature" src={signature.src} alt="Evan Sheehan" width={signature.w} height={signature.h} sizes="10rem" />
              <p className="eyebrow">Evan Sheehan — Founder, Tack &amp; Style</p>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA numbered={false} />
    </>
  );
}
