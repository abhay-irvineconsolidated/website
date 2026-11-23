"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import type { NavGroup } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { duration, ease } from "@/constants/motion";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0] ?? href);

/**
 * Desktop navigation with disclosure-pattern dropdowns:
 * buttons toggle panels (click, Enter/Space), hover opens after a short intent delay,
 * Escape closes and returns focus to the trigger, clicking outside closes.
 */
export function DesktopNav({ nav, pathname }: { nav: NavGroup[]; pathname: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const [lastPath, setLastPath] = useState(pathname);
  const rootRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});

  // Close on route change.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
  }

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggers.current[open]?.focus();
        setOpen(null);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const schedule = (label: string | null, delay: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpen(label), delay);
  };

  return (
    <nav ref={rootRef} aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {nav.map((group) => {
          const active = isActive(pathname, group.href);
          const linkBase = cn(
            "relative inline-flex h-10 items-center gap-1 rounded-pill px-3.5 text-[0.9375rem] font-medium transition-colors duration-200 xl:px-4",
            active ? "text-white" : "text-silver-200 hover:text-white",
          );
          const indicator = active && (
            <span
              aria-hidden="true"
              className="absolute inset-x-3.5 -bottom-px h-px bg-turquoise-500 xl:inset-x-4"
            />
          );

          if (!group.items?.length) {
            return (
              <li key={group.label}>
                <Link
                  href={group.href}
                  className={linkBase}
                  aria-current={active ? "page" : undefined}
                >
                  {group.label}
                  {indicator}
                </Link>
              </li>
            );
          }

          const id = `nav-panel-${group.label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
          const expanded = open === group.label;

          return (
            <li
              key={group.label}
              className="relative"
              onPointerEnter={(e) => e.pointerType === "mouse" && schedule(group.label, 90)}
              onPointerLeave={(e) => e.pointerType === "mouse" && schedule(null, 160)}
            >
              <button
                ref={(el) => {
                  triggers.current[group.label] = el;
                }}
                type="button"
                className={cn(linkBase, expanded && "text-white")}
                aria-expanded={expanded}
                aria-controls={id}
                onClick={() => setOpen(expanded ? null : group.label)}
              >
                {group.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-4 opacity-60 transition-transform duration-200",
                    expanded && "rotate-180",
                  )}
                />
                {indicator}
              </button>

              <AnimatePresence>
                {expanded && (
                  <m.div
                    id={id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: duration.fast, ease: ease.standard }}
                    className="absolute top-full left-1/2 z-50 w-[24rem] -translate-x-1/2 pt-3"
                  >
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-midnight-800 shadow-raised">
                      <ul className="grid gap-0.5 p-2.5">
                        {group.items.map((item) => (
                          <li key={item.href + item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setOpen(null)}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className="block rounded-lg px-4 py-2.5 transition-colors duration-150 hover:bg-white/[0.06] aria-[current=page]:bg-white/[0.06]"
                            >
                              <span className="block text-[0.9375rem] font-medium text-white">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-0.5 block text-[0.8125rem] leading-snug text-silver-300">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
