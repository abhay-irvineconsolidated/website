import { Reveal } from "@/components/ui/motion";

const reasons = [
  { n: "01", text: "We understand enterprise complexity." },
  { n: "02", text: "We engineer, not just advise." },
  { n: "03", text: "We stay beyond deployment." },
];

/** White, editorial: a headline and three numbered statements set as large type. */
export function WhySection() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="container-wide grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="kicker text-electric-600">Why Irvine Consolidated</p>
          <h2 className="mt-6 text-h2">
            Technology expertise. Engineering mindset. Business perspective.
          </h2>
        </Reveal>
        <ol className="lg:col-span-6 lg:col-start-7">
          {reasons.map((r) => (
            <Reveal
              as="li"
              key={r.n}
              className="flex gap-6 border-t border-ink/10 py-8 first:border-t-0 first:pt-0 lg:gap-10"
            >
              <span className="pt-2 kicker text-electric-600">{r.n}</span>
              <p className="text-h3 text-ink">{r.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
