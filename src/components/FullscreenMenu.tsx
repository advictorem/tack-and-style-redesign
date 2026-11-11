"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { nav, site } from "@/data/site";
import { ArrowRight, Close } from "./Icons";
import Logo from "./Logo";

type Props = { open: boolean; onClose: () => void; pathname: string };

export default function FullscreenMenu({ open, onClose, pathname }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open, onClose]);

  return (
    <div ref={panelRef} id="site-menu" className={`menu tone-dark ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Site menu" inert={!open}>
      <div className="menu-head container-wide">
        <Logo onClick={onClose} />
        <button ref={closeRef} className="menu-close" type="button" onClick={onClose}>
          Close <Close />
        </button>
      </div>
      <div className="menu-body container-wide">
        <nav aria-label="Main menu">
          <ol className="menu-list" role="list">
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  className="menu-link"
                  href={item.href}
                  onClick={onClose}
                  aria-current={pathname === item.href ? "page" : undefined}
                  style={{ "--i": i } as CSSProperties}
                >
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="menu-aside">
          <div>
            <span className="eyebrow">Write to me</span>
            <a className="big u-line" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <span className="eyebrow">Let’s chat</span>
            <a className="big u-line" href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
          <div>
            <span className="eyebrow">Follow along</span>
            <a className="big u-line" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <Link className="btn" href="/contact" onClick={onClose}>
            Book a consultation <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
