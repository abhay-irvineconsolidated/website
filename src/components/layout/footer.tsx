import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon, YouTubeIcon } from "@/components/ui/social-icons";
import { footerNav } from "@/constants/navigation";
import { site } from "@/constants/site";
import { Logo } from "@/components/ui/logo";
import { CopyrightYear } from "@/components/layout/copyright-year";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-silver-300 surface-graphite">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 seam" />
      <div className="container-wide pt-20 pb-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo tone="dark" className="h-9" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed">
              An AI-first technology partner building intelligent solutions, enterprise applications
              and automated workflows that transform how businesses operate.
            </p>
            <ul className="mt-8 space-y-1 text-[0.9375rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-11 items-center gap-3 hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-4 text-turquoise-500" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phone.href}
                  className="inline-flex min-h-11 items-center gap-3 hover:text-white"
                >
                  <Phone aria-hidden="true" className="size-4 text-turquoise-500" />
                  {site.phone.display}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Irvine Consolidated on LinkedIn (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-white/10 hover:border-white/30 hover:text-white"
              >
                <LinkedInIcon className="size-[1.125rem]" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Irvine Consolidated on YouTube (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-white/10 hover:border-white/30 hover:text-white"
              >
                <YouTubeIcon className="size-[1.125rem]" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="font-mono text-caption font-medium text-white uppercase">
                  {col.title}
                </h2>
                <ul className="mt-5 space-y-0.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="inline-block py-1.5 text-[0.875rem] leading-snug transition-colors duration-150 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-[0.8125rem] leading-relaxed">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>
              © <CopyrightYear /> {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy-policy/" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers/" className="hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <p className="mt-6 max-w-4xl text-silver-300/80">{site.workdayDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
