import type { ReactNode } from "react";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/**
 * Inner-page hero on the horizon ground: the h1, one line and optional actions, centred like
 * the homepage. A light sheet rounds up over its foot. No visible breadcrumbs (client request);
 * the trail is still emitted as BreadcrumbList JSON-LD for search engines.
 */
export function PageHero({
  title,
  intro,
  crumbs,
  children,
  className,
  sheet = true,
}: {
  title: ReactNode;
  intro?: ReactNode;
  /** Trail after Home; the last item is the current page. Used for structured data only. */
  crumbs: Crumb[];
  children?: ReactNode;
  className?: string;
  /** The light sheet that rounds up over the hero's foot: ice by default, "white" to meet a white section, false when a dark section follows. */
  sheet?: boolean | "white";
}) {
  return (
    <section aria-labelledby="page-title" className="relative">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <div
        className={cn(
          "surface-horizon px-5 pt-44 pb-56 text-center text-white [--horizon-lift:130px] sm:pt-48 lg:pb-64",
          className,
        )}
      >
        <div className="mx-auto max-w-4xl">
          <h1
            id="page-title"
            className="mx-auto max-w-4xl text-h1 text-white motion-safe:animate-rise"
          >
            {title}
          </h1>
          {intro ? (
            <p className="mx-auto mt-6 max-w-2xl text-lead text-silver-200 motion-safe:animate-rise motion-safe:[animation-delay:100ms]">
              {intro}
            </p>
          ) : null}
          {children ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 motion-safe:animate-rise motion-safe:[animation-delay:200ms] sm:flex-row">
              {children}
            </div>
          ) : null}
        </div>
      </div>
      {sheet ? (
        <div
          aria-hidden="true"
          className={cn(
            "relative z-10 -mt-12 h-12 rounded-t-[2.5rem]",
            sheet === "white" ? "bg-white" : "bg-ice-50",
          )}
        />
      ) : null}
    </section>
  );
}
