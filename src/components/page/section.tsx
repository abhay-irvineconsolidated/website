import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export type Ground = "plain" | "mist" | "mist-alt" | "grain" | "halo" | "dark";

/** Flat editorial grounds: dotted paper, white, or the navy technical ground. */
const grounds: Record<Ground, string> = {
  plain: "bg-white",
  mist: "paper",
  "mist-alt": "bg-white",
  grain: "paper",
  halo: "bg-white",
  dark: "atmos-navy",
};

/** A page section on one of the soft light grounds. Every section shares one wrap and rhythm. */
export function Section({
  ground = "plain",
  id,
  className,
  children,
}: {
  ground?: Ground;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 lg:py-28", grounds[ground], className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

/** Section heading: an h2 and at most one line under it. */
export function SectionTitle({
  title,
  intro,
  align = "left",
  className,
}: {
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <h2 className="text-h1">{title}</h2>
      {intro ? (
        <p
          className={cn("mt-5 text-lead text-slate-600", align === "center" && "mx-auto max-w-2xl")}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
