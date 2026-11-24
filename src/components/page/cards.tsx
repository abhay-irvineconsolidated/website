import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export type CardItem = {
  title: string;
  text: string;
  href?: string;
  icon?: LucideIcon;
  /** Small label above the title (a number, a stage). */
  kicker?: string;
};

const columns = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 lg:grid-cols-5",
} as const;

/** An editorial cell: a hairline above, no box. Used by Cards and anywhere a flat item is needed. */
export const cardSurface = "border-t border-ink/15";

/** Items set between hairlines: a title and one line. Linked items carry an arrow and the title answers hover. */
export function Cards({
  items,
  cols = 3,
  className,
}: {
  items: CardItem[];
  cols?: keyof typeof columns;
  className?: string;
}) {
  return (
    <Stagger className={cn("mt-14 grid gap-x-10 gap-y-12 lg:gap-x-14", columns[cols], className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const body = (
          <>
            {Icon ? (
              <Icon
                aria-hidden="true"
                className="mb-5 size-6 text-electric-600"
                strokeWidth={1.5}
              />
            ) : null}
            {item.kicker ? (
              <span className="mb-3 block kicker text-electric-600">{item.kicker}</span>
            ) : null}
            <h3 className="flex items-start justify-between gap-3 text-h4 text-ink transition-colors group-hover:text-electric-600">
              {item.title}
              {item.href ? (
                <ArrowRight
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                />
              ) : null}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
          </>
        );
        return (
          <StaggerItem key={item.title} className="flex">
            {item.href ? (
              <Link href={item.href} className={cn(cardSurface, "group flex w-full flex-col pt-6")}>
                {body}
              </Link>
            ) : (
              <div className={cn(cardSurface, "group flex w-full flex-col pt-6")}>{body}</div>
            )}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
