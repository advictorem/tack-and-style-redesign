"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";
import FullscreenMenu from "./FullscreenMenu";
import { ArrowRight } from "./Icons";
import Logo from "./Logo";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 320 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // The home hero is a dark photograph; every other page starts on paper.
  const overlay = pathname === "/" && !scrolled;
  const classes = ["site-header", overlay ? "tone-dark" : "is-solid", hidden && !open ? "is-hidden" : ""].join(" ");

  return (
    <>
      <header className={classes} style={overlay ? { background: "transparent" } : undefined}>
        <div className="header-bar container-wide">
          <Logo />
          <nav className="header-nav" aria-label="Main">
            {nav.slice(1).map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="btn btn-sm" href="/contact">
              Book a consultation <ArrowRight />
            </Link>
            <button ref={toggleRef} className="menu-toggle" type="button" aria-controls="site-menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <span>Menu</span>
              <span className="menu-toggle-icon" aria-hidden="true"><span /><span /></span>
            </button>
          </div>
        </div>
      </header>
      <FullscreenMenu open={open} onClose={close} pathname={pathname} />
    </>
  );
}
