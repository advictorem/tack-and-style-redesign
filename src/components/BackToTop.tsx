"use client";

import { ArrowUp } from "./Icons";

export default function BackToTop() {
  return (
    <button
      className="to-top"
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.querySelector<HTMLElement>(".brand")?.focus({ preventScroll: true });
      }}
    >
      Back to top <span aria-hidden="true"><ArrowUp /></span>
    </button>
  );
}
