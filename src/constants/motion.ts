/**
 * Animation conventions. Mirrors the motion tokens in src/styles/tokens.css for JS-driven animation.
 * All motion runs through <MotionProvider>, which honours `prefers-reduced-motion`.
 */
export const ease = {
  /** Default for entrances: fast start, long settle. */
  standard: [0.22, 1, 0.36, 1],
  /** Big, confident moves (hero, panels). */
  expo: [0.16, 1, 0.3, 1],
} as const;

export const duration = {
  fast: 0.2,
  base: 0.45,
  reveal: 0.75,
  slow: 1.1,
} as const;

export const stagger = {
  tight: 0.05,
  base: 0.08,
  loose: 0.14,
} as const;

/** Viewport trigger for scroll reveals: fire once, slightly before the element is fully in view. */
export const revealViewport = { once: true, margin: "-80px 0px" } as const;

/** Distance (px) elements travel on reveal. Kept small so motion reads as refinement, not effect. */
export const revealOffset = 20;
