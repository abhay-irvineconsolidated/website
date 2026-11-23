import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/**
 * Technical eyebrow label: `01 — AI SOLUTIONS`. The index is optional.
 * Turquoise on dark surfaces, darkened turquoise on light (both AA for small text).
 */
export function Eyebrow({
  children,
  index,
  tone = "light",
  className,
}: {
  children: ReactNode;
  index?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.8125rem] leading-snug font-medium tracking-normal",
        tone === "dark" ? "text-turquoise-500" : "text-turquoise-700",
        className,
      )}
    >
      {index && (
        <>
          <span className={tone === "dark" ? "text-silver-300" : "text-slate-500"}>{index}</span>
          <span
            aria-hidden="true"
            className={cn("h-px w-6", tone === "dark" ? "bg-white/25" : "bg-ink/20")}
          />
        </>
      )}
      <span>{children}</span>
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  /** Heading level. Defaults to h2. */
  as?: "h1" | "h2" | "h3";
  size?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
};

/** Eyebrow + headline + optional intro: the standard opening for every section. */
export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  tone = "light",
  align = "left",
  as: Heading = "h2",
  size = "h2",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center [&>p:first-child]:justify-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow index={index} tone={tone}>
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          eyebrow && "mt-5",
          size === "h1" && "text-h1",
          size === "h2" && "text-h2",
          size === "h3" && "text-h3",
          tone === "dark" && "text-white",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-6 text-lead",
            tone === "dark" ? "text-silver-300" : "text-slate-600",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
