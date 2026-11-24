import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/**
 * Inner-page hero on the dark atmospheric ground, centred like the homepage: the h1, one line
 * and optional actions. No visible breadcrumbs (client request); the trail is still emitted as
 * BreadcrumbList JSON-LD for search engines.
 */
export function PageHero({
  title,
  intro,
  crumbs,
  children,
  className,
}: {
  title: ReactNode;
  intro?: ReactNode;
  /** Trail after Home; the last item is the current page. Used for structured data only. */
  crumbs: Crumb[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section aria-labelledby="page-title">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <div className={cn("atmos-dark px-5 pt-44 pb-24 text-center sm:pt-48 lg:pb-32", className)}>
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
    </section>
  );
}

/** The single frosted hero action, as on the homepage. Give each section its own label. */
export function HeroButton({ href, children }: { href: string; children: string }) {
  return (
    <ButtonLink
      href={href}
      variant="outline-dark"
      arrow
      className="border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-sm hover:bg-white/15"
    >
      {children}
    </ButtonLink>
  );
}
