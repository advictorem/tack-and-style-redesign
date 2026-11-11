const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;

export const ArrowRight = () => (
  <svg {...base}><path d="M4 12h16M14 6l6 6-6 6" /></svg>
);
export const ArrowUp = () => (
  <svg {...base}><path d="M12 20V4M6 10l6-6 6 6" /></svg>
);
export const Close = () => (
  <svg {...base}><path d="M5 5l14 14M19 5L5 19" /></svg>
);
