import type { CapabilityService, WorkdayService } from "@/types/content";
import { Check } from "lucide-react";
import { Section } from "@/components/page/section";
import { FaqList } from "@/components/page/faq-list";
import { cardSurface } from "@/components/page/cards";
import type { Ground } from "@/components/page/section";
import { Reveal } from "@/components/ui/motion";

type Props = {
  service: CapabilityService | WorkdayService;
  ground: Ground;
  /** Extra content under the offerings (a product screenshot, say). */
  children?: React.ReactNode;
};

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-medium tracking-wide text-electric-600">{children}</h3>;
}

/**
 * One full service on an overview page: the pitch on the left (sticky on desktop), then the
 * problem, what we deliver, use cases, outcomes and FAQs on the right. Replaces the old
 * per-service pages, so everything important lives in one place. No timelines or flow diagrams.
 */
export function ServiceBlock({ service, ground, children }: Props) {
  const Icon = service.icon;
  const capability = "capabilities" in service ? service : null;
  const items = capability ? capability.capabilities : (service as WorkdayService).offerings;

  return (
    <Section ground={ground} id={service.slug} className="py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <span className="flex size-12 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-6 text-sm font-medium text-electric-600">{service.name}</p>
            <h2 className="mt-3 text-h2">{service.headline}</h2>
            <p className="mt-5 text-lead text-slate-600">{service.intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:col-span-7">
          {capability ? (
            <div>
              <SubHead>The problem</SubHead>
              <p className="mt-3 text-xl leading-snug font-semibold text-ink">
                {capability.challenge.title}
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">{capability.challenge.text}</p>
            </div>
          ) : null}

          <div>
            <SubHead>{capability ? "What we build" : "What we deliver"}</SubHead>
            <ul className={`${cardSurface} mt-4 divide-y divide-ink/[0.07] px-6 sm:px-8`}>
              {items.map((c) => (
                <li key={c.title} className="flex gap-4 py-5">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-turquoise-700" />
                  <div>
                    <p className="font-semibold text-ink">{c.title}</p>
                    <p className="mt-1 leading-relaxed text-slate-600">{c.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {children}

          {capability ? (
            <>
              <div>
                <SubHead>Where it helps</SubHead>
                <ul className="mt-4 grid gap-5 sm:grid-cols-2">
                  {capability.useCases.map((u) => (
                    <li key={u.title} className="border-l-2 border-electric-500 pl-5">
                      <p className="font-semibold text-ink">{u.title}</p>
                      <p className="mt-1 leading-relaxed text-slate-600">{u.text}</p>
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {capability.outcomes.map((o) => (
                    <li key={o.title} className="rounded-xl bg-white/70 p-5 ring-1 ring-ink/[0.07]">
                      <p className="font-mono text-xs text-electric-600">Outcome</p>
                      <p className="mt-2 font-semibold text-ink">{o.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{o.text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SubHead>Questions we hear</SubHead>
                <FaqList faqs={capability.faqs} className="mt-4" />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
