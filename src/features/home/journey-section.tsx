import { Reveal } from "@/components/ui/motion";

const steps = [
  {
    when: "2015",
    text: "Irvine Consolidated begins its enterprise technology journey.",
  },
  {
    when: "2024–2025",
    text: "Expands Workday partnerships and launches Reward My Team.",
  },
  {
    when: "Today",
    text: "Building AI-first solutions, custom software and connected enterprise systems.",
  },
];

/** Light timeline: three verified milestones on one hairline. */
export function JourneySection() {
  return (
    <section className="bg-brand-ice py-24 lg:py-36">
      <div className="container-wide">
        <Reveal>
          <p className="kicker text-electric-600">Our journey</p>
          <h2 className="mt-6 max-w-3xl text-h1">Built on experience. Focused on what’s next.</h2>
        </Reveal>
        <ol className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-3 lg:gap-0">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.when}
              delay={i * 0.08}
              className="relative border-l border-ink/15 pl-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-10 lg:pl-0"
            >
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[5px] size-2.5 rounded-full lg:-top-[5px] lg:left-0 ${i === steps.length - 1 ? "bg-brand-turquoise" : "bg-brand-electric"}`}
              />
              <p className="text-h2 text-ink">{s.when}</p>
              <p className="mt-4 max-w-xs text-slate-600">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
