"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { InsightCategory } from "@/types/insights";
import { cn } from "@/lib/utils";

export type InsightCard = {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  categoryLabel: string;
  dateLabel: string;
  date: string;
  readingMinutes: number;
};

/** Category filter (plain buttons, no URL state) over a grid of article cards. */
export function InsightGrid({
  items,
  categories,
}: {
  items: InsightCard[];
  categories: { id: InsightCategory; label: string }[];
}) {
  const [active, setActive] = useState<InsightCategory | "all">("all");
  const shown = active === "all" ? items : items.filter((i) => i.category === active);
  const filters = [{ id: "all" as const, label: "All" }, ...categories];

  return (
    <>
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "min-h-11 rounded-pill border px-5 text-sm font-medium transition-colors",
              active === f.id
                ? "border-electric-600 bg-electric-600 text-white"
                : "border-ink/15 bg-white text-ink hover:border-ink/35",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {shown.length} articles shown
      </p>

      <ul className="mt-10 border-b border-ink/15">
        {shown.map((item) => (
          <li key={item.slug} className="flex">
            <Link
              href={`/insights/${item.slug}/`}
              className="group grid w-full gap-x-10 gap-y-3 border-t border-ink/15 py-8 sm:grid-cols-[9rem_1fr] sm:py-10"
            >
              <p className="flex flex-col gap-1 text-sm">
                <span className="font-medium text-electric-600">{item.categoryLabel}</span>
                <time dateTime={item.date} className="text-slate-600">
                  {item.dateLabel}
                </time>
              </p>
              <div>
                <h2 className="text-2xl leading-snug font-semibold text-ink transition-colors group-hover:text-electric-600">
                  {item.title}
                </h2>
                <p className="mt-3 line-clamp-2 leading-relaxed text-slate-600">{item.summary}</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium text-ink">
                  Read · {item.readingMinutes} min
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                  />
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
