"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavGroup, NavLink } from "@/types/navigation";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { cn } from "@/lib/utils";

export function HeaderShell({ nav, cta }: { nav: NavGroup[]; cta: NavLink }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the mobile drawer whenever the route changes (state is preserved across navigations).
  if (mobileOpen && openedAt !== pathname) {
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-(--container-wide) items-center justify-between gap-6 rounded-xl border pr-2 pl-5 transition-[background-color,border-color,box-shadow] duration-300 lg:h-[4.5rem] lg:pr-3 lg:pl-6",
          solid
            ? "border-white/10 bg-midnight-900/95 shadow-raised backdrop-blur-md"
            : "border-white/[0.07] bg-midnight-900/30",
        )}
      >
        <Link
          href="/"
          className="shrink-0 rounded-sm"
          aria-label="Irvine Consolidated home"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <Logo tone="dark" priority className="h-7 lg:h-8" />
        </Link>

        <DesktopNav nav={nav} pathname={pathname} />

        <div className="flex items-center gap-2">
          <ButtonLink href={cta.href} variant="primary" arrow className="hidden lg:inline-flex">
            {cta.label}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => {
              setOpenedAt(pathname);
              setMobileOpen((v) => !v);
            }}
          >
            {mobileOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileNav
        id="mobile-nav"
        open={mobileOpen}
        nav={nav}
        cta={cta}
        pathname={pathname}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
