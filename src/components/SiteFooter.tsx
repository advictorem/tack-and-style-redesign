import Image from "next/image";
import Link from "next/link";
import { img } from "@/data/images";
import { nav, site } from "@/data/site";
import BackToTop from "./BackToTop";

const logo = img("brand/logo-paper");

export default function SiteFooter() {
  return (
    <footer className="site-footer tone-dark">
      <div className="container">
        <div className="footer-pattern" aria-hidden="true" />
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label={`${site.name} — home`}>
              <Image src={logo.src} alt={site.name} width={logo.w} height={logo.h} sizes="14rem" />
            </Link>
            <p>{site.description}</p>
          </div>
          <nav className="footer-col footer-nav" aria-label="Footer">
            <h2>Explore</h2>
            <ul role="list">
              {nav.map((item) => (
                <li key={item.href}><Link className="u-line" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <h2>Get in touch</h2>
            <ul role="list">
              <li><a className="u-line" href={site.phoneHref}>{site.phoneDisplay}</a></li>
              <li><a className="u-line" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a className="u-line" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved. For all your design desires!</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
