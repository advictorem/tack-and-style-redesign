import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Media from "@/components/Media";
import PageHero from "@/components/PageHero";
import { img } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a design consultation with Tack & Style Design. Call, email or send a message to start something beautiful.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s Bring Your Vision *to Life.*"
        lead="Whether you’re dreaming up a full-room refresh or just need a little design direction, I’d love to hear from you. Reach out and let’s start something beautiful."
      />
      <section className="section section-flush-top">
        <div className="container">
          <div className="contact-grid">
            <div className="stack stack-lg">
              <ul className="contact-list" role="list" data-stagger>
                <li><span className="eyebrow">Let’s chat</span><a className="u-line" href={site.phoneHref}>{site.phoneDisplay}</a></li>
                <li><span className="eyebrow">Write to me</span><a className="u-line" href={`mailto:${site.email}?subject=${encodeURIComponent("Contact Page Inquiry")}`}>{site.email}</a></li>
                <li><span className="eyebrow">Follow on Instagram</span><a className="u-line" href={site.instagram} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a></li>
              </ul>
              <Media image={img("contact/horse-jump")} alt="Horse and rider clearing a jump at an outdoor show" sizes="(min-width: 950px) 40vw, 100vw" style={{ aspectRatio: "5 / 4" }} reveal />
            </div>
            <div data-reveal>
              <h2 className="display" style={{ marginBlockEnd: "2rem" }}>Send a <em>message</em></h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
