import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";
import { softwareOverview } from "@/content/software";

/** Mist ground: the statement on the left, a short proof blurb on the right. */
export function SoftwareSection() {
  const { proof } = softwareOverview;
  return (
    <section className="ground-mist bg-ice-50 py-28 lg:py-36">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-6">
          <h2 className="max-w-xl text-h2">We build the software, not just the slide deck.</h2>
          <p className="mt-5 max-w-lg text-lead text-slate-600">
            Workflow tools, enterprise apps and integrations, from first sketch to production.
          </p>
          <ButtonLink href="/software-workflows/" variant="primary" arrow className="mt-8">
            See Software & Workflows
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <div className="border-l-2 border-electric-500 pl-6 lg:pl-8">
            <p className="text-sm font-medium text-electric-600">From idea to shipped</p>
            <p className="mt-3 text-h4 leading-snug font-medium text-ink">{proof.title}</p>
            <p className="mt-4 text-slate-600">
              In 2025 we designed, built and presented Reward My Team in a 24‑hour Built on Workday
              Innovation Challenge, and won. We then took it all the way to a production app on the
              Workday Marketplace.
            </p>
            <ButtonLink href={proof.href} variant="link-light" arrow className="mt-5">
              {proof.cta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
