import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workdayServices } from "@/content/enterprise";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";

/** Grain ground: the statement on the left, the four Workday services in one small panel on the right. */
export function EnterpriseSection() {
  return (
    <section className="ground-grain bg-ice-50 py-28 lg:py-36">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <h2 className="max-w-xl text-h2">A decade of Workday, behind everything we build.</h2>
          <p className="mt-5 max-w-lg text-lead text-slate-600">
            Our established practice, and a Workday Services Partner since 2025.
          </p>
          <ButtonLink href="/enterprise-solutions/" variant="primary" arrow className="mt-8">
            See Enterprise Solutions
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl border border-ink/[0.07] bg-white p-2 shadow-[0_18px_40px_-24px_rgb(11_17_36/0.35)]">
            <p className="flex items-center justify-between px-4 pt-3 pb-2 text-sm">
              <span className="font-medium text-ink">Workday services</span>
              <span className="text-slate-500">Since 2015</span>
            </p>
            <ul>
              {workdayServices.map((s) => (
                <li key={s.slug} className="border-t border-ink/[0.07] first:border-t-0">
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3.5 transition-colors pointer-fine:hover:bg-ice-50"
                  >
                    <span>
                      <span className="block font-medium text-ink">{s.name}</span>
                      <span className="mt-0.5 block text-sm text-slate-500">{s.short}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
