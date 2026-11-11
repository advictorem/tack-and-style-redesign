"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import { ArrowRight } from "./Icons";

/**
 * Oversized editorial list. On hover-capable desktops a related interior image
 * trails the cursor; on touch and small screens each row shows its image inline.
 */
export default function ServicesList() {
  const [active, setActive] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (active === null) return;
    let frame = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (floatRef.current) floatRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(1.5rem, -50%)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <>
      <ul
        className="svc-list"
        role="list"
        data-stagger
        onMouseMove={(e) => { target.current = { x: e.clientX, y: e.clientY }; }}
        onMouseLeave={() => setActive(null)}
      >
        {services.map((s, i) => (
          <li key={s.num}>
            <Link
              href={`/services#${s.anchor}`}
              onMouseEnter={(e) => {
                if (active === null) pos.current = { x: e.clientX, y: e.clientY };
                target.current = { x: e.clientX, y: e.clientY };
                setActive(i);
              }}
            >
              <span className="svc-num">{s.num}</span>
              <h3 className="svc-name">{s.name}</h3>
              <span className="svc-text">{s.text}</span>
              <span className="svc-arrow" aria-hidden="true"><ArrowRight /></span>
              <span className="svc-thumb media">
                <Image src={s.image.src} alt={s.imageAlt} fill sizes="(min-width: 900px) 1px, 90vw" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div ref={floatRef} className={`hover-reveal ${active !== null ? "is-on" : ""}`} aria-hidden="true">
        {services.map((s, i) => (
          <div key={s.num} className={`media ${active === i ? "is-on" : ""}`}>
            <Image src={s.image.src} alt="" fill sizes="20rem" />
          </div>
        ))}
      </div>
    </>
  );
}
