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

export const cardSurface =
  "rounded-2xl border border-ink/[0.07] bg-white shadow-[0_18px_40px_-28px_rgb(11_17_36/0.3)]";

/** White cards with a title and one line. Linked cards lift on hover and carry an arrow. */
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
    <Stagger className={cn("mt-12 grid gap-4 lg:gap-5", columns[cols], className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const body = (
          <>
            {Icon ? (
              <span className="mb-5 flex size-10 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                <Icon aria-hidden="true" className="size-5" />
              </span>
            ) : null}
            {item.kicker ? (
              <span className="mb-3 block font-mono text-sm text-electric-600">{item.kicker}</span>
            ) : null}
            <h3 className="flex items-start justify-between gap-3 text-lg leading-snug font-semibold text-ink">
              {item.title}
              {item.href ? (
                <ArrowRight
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                />
              ) : null}
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
          </>
        );
        return (
          <StaggerItem key={item.title} className="flex">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  cardSurface,
                  "group flex w-full flex-col p-6 transition-[transform,box-shadow] duration-200 sm:p-7 pointer-fine:hover:-translate-y-0.5 pointer-fine:hover:shadow-[0_24px_48px_-28px_rgb(11_17_36/0.4)]",
                )}
              >
                {body}
              </Link>
            ) : (
              <div className={cn(cardSurface, "flex w-full flex-col p-6 sm:p-7")}>{body}</div>
            )}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
