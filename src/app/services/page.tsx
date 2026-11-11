import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { ArrowRight } from "@/components/Icons";
import Media from "@/components/Media";
import PageHero from "@/components/PageHero";
import Split from "@/components/Split";
import { img } from "@/data/images";

export const metadata: Metadata = {
  title: "Services",
  description: "Design planning, renderings, renovation & styling, personalized purchasing and furniture revitalization from Tack & Style Design.",
};

const rows = [
  {
    id: "design-planning",
    label: "Design Consultation",
    title: "Design *Planning*",
    text: "I believe that every space tells a story, so let’s sit down to learn your unique style and preferences. When I understand your vision and the utility required for your space, I craft a design that perfectly reflects who you are. Once I’ve gathered your ideas, I create a stunning rendering to inspire the design. Together, let’s bring your dream space to life!",
    cta: "Let’s create",
    image: img("services/design-planning"),
    alt: "Moodboard of fabric swatches, kitchen inspiration and plaid samples",
  },
  {
    id: "design-renderings",
    label: "Design Renderings",
    title: "Design *Renderings*",
    text: "Bring your vision to life with my design rendering services. I create detailed digital blueprints that showcase your space, allowing you to visualize transformations. Renderings help you explore various design options, ensuring every detail aligns with your preferences before the work begins.",
    cta: "Let’s envision",
    image: img("services/design-renderings"),
    alt: "Rendering of a lounge with leather armchairs and plaid wallcovering",
  },
  {
    id: "personalized-purchasing",
    label: "Personalized Purchasing",
    title: "Personalized *Purchasing*",
    text: "Discover the charm of thrifted decor with personalized shopping services! I take pride in finding well-loved, exquisite pieces that stand the test of time and add character to your home. Whether you’re looking for vintage furniture, unique art, or one-of-a-kind accessories, let me do the hunting for you.",
    cta: "Let’s hunt",
    image: img("home/thrifting-store-antique"),
    alt: "Antique shop with white brick walls and vintage furniture",
  },
  {
    id: "renovation-styling",
    label: "Renovation & Styling",
    title: "Renovation *& Styling*",
    text: "From adding trim, painting and wallpapering, to hanging curtains and lighting, I handle the details that make a space shine. And if you have a family heirloom, or furniture that doesn’t fit in your home, I can transform it into something you will fall in love with all over again.",
    cta: "Let’s transform",
    image: img("blog-pencil-trim/wainscot-wall-trim"),
    alt: "White wall with layered wainscot and pencil trim",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Your *One-Stop* Shop."
        lead="At Tack & Style Design, I do it all! Whether you’re looking to refresh a single room or transform an entire space, I handle every detail from concept to completion."
        image={img("services/interiordesign3-5-2025-112")}
        imageAlt="Kitchen with white cabinetry, green accent cabinets and a wood island"
      />
      <section className="section">
        <div className="container">
          {rows.map((row, i) => (
            <div className={`split-row ${i % 2 ? "flip" : ""}`} id={row.id} key={row.id}>
              <Media image={row.image} alt={row.alt} sizes="(min-width: 900px) 42vw, 100vw" reveal parallax />
              <div className="stack stack-lg" data-reveal>
                <p className="label"><span>({String(i + 1).padStart(2, "0")})</span> {row.label}</p>
                <Split className="display" text={row.title} />
                <p>{row.text}</p>
                <Link className="link-arrow" href="/contact">{row.cta} <ArrowRight /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="quote tone-dark" style={{ background: "var(--olive)" }} aria-label="A note from the founder">
        <div className="container-narrow">
          <figure>
            <Split as="blockquote" text="“Design is personal. It’s not about trends, it’s about creating spaces that feel like home the moment you walk in.”" />
            <figcaption data-reveal><span>Evan Sheehan — Founder of Tack &amp; Style Design</span></figcaption>
          </figure>
        </div>
      </section>
      <ContactCTA numbered={false} />
    </>
  );
}
