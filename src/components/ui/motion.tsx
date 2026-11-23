"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "motion/react";
import type { ReactNode } from "react";
import {
  duration,
  ease,
  revealOffset,
  revealViewport,
  stagger as staggerTokens,
} from "@/constants/motion";

/**
 * Loads the small `domAnimation` feature set once and honours the user's reduced-motion setting.
 * `strict` ensures components use the lightweight `m.*` elements rather than the full `motion.*`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Fade-and-rise once when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = revealOffset,
  as = "div",
}: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: duration.reveal, delay, ease: ease.standard }}
    >
      {children}
    </Component>
  );
}

/** Container that staggers the reveal of its <StaggerItem> children. */
export function Stagger({
  children,
  className,
  gap = staggerTokens.base,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "ol";
}) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Component = m[as];
  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: revealOffset },
        show: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.standard } },
      }}
    >
      {children}
    </Component>
  );
}
