"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import type { NavGroup, NavLink } from "@/types/navigation";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/constants/site";
import { cn } from "@/lib/utils";
import { duration, ease } from "@/constants/motion";

/** Full-height drawer with accordion groups. Locks page scroll while open; Escape closes. */
export function MobileNav({
  id,
  open,
  nav,
  cta,
  pathname,
  onClose,
}: {
  id: string;
  open: boolean;
  nav: NavGroup[];
  cta: NavLink;
  pathname: string;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.nav
          id={id}
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: duration.base, ease: ease.standard }}
          className="fixed inset-x-3 top-[5.25rem] bottom-3 z-40 flex flex-col overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-midnight-900 p-3 shadow-raised sm:inset-x-4 lg:hidden"
        >
          <ul className="flex-1">
            {nav.map((group) => {
              const isOpen = expanded === group.label;
              const panelId = `m-${group.label.toLowerCase().replace(/[^a-z]+/g, "-")}`;
              if (!group.items?.length) {
                return (
                  <li key={group.label} className="border-b border-white/[0.07]">
                    <Link
                      href={group.href}
                      onClick={onClose}
                      aria-current={pathname === group.href ? "page" : undefined}
                      className="flex min-h-14 items-center px-3 text-lg font-medium text-white"
                    >
                      {group.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={group.label} className="border-b border-white/[0.07]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setExpanded(isOpen ? null : group.label)}
                    className="flex min-h-14 w-full items-center justify-between px-3 text-left text-lg font-medium text-white"
                  >
                    {group.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 text-silver-300 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div id={panelId} hidden={!isOpen} className="pb-3">
                    <ul className="grid gap-0.5 rounded-lg bg-white/[0.03] p-1.5">
                      <li>
                        <Link
                          href={group.href}
                          onClick={onClose}
                          className="flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] font-medium text-turquoise-500"
                        >
                          {group.label} overview
                        </Link>
                      </li>
                      {group.items.map((item) => (
                        <li key={item.href + item.label}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            aria-current={pathname === item.href ? "page" : undefined}
                            className="flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] text-silver-200 aria-[current=page]:bg-white/[0.06] aria-[current=page]:text-white"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 grid gap-3 px-1 pb-1">
            <ButtonLink href={cta.href} variant="primary" size="lg" arrow onClick={onClose}>
              {cta.label}
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="py-2 text-center font-mono text-sm text-silver-300 hover:text-white"
            >
              {site.email}
            </a>
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
}
