import type { Metadata } from "next";
import {
  lifecycle,
  softwareCapabilities,
  softwareOverview,
  softwareServices,
  solutionLayers,
} from "@/content/software";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { Steps } from "@/components/page/steps";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/motion";
import { CtaSection } from "@/components/sections/cta-section";
import { SolutionLayers } from "@/features/software/solution-layers";
import { absoluteUrl } from "@/constants/site";
import { organizationId, pageMeta } from "@/lib/seo";

const path = "/software-workflows/";

export const metadata: Metadata = pageMeta({
  title: "Software & Workflows",
  description:
    "Custom applications, intelligent workflows and connected enterprise systems, engineered from business requirement to production by Irvine Consolidated.",
  path,
});

function Label({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.18em] text-electric-600 uppercase">{children}</p>
  );
}

export default function SoftwarePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": softwareServices.map((s) => ({
            "@type": "Service",
            name: s.name,
            serviceType: s.serviceType,
            description: s.intro,
            url: absoluteUrl(path),
            provider: { "@id": organizationId },
            areaServed: "US",
          })),
        }}
      />

      <PageHero
        title={softwareOverview.headline}
        intro={softwareOverview.intro}
        crumbs={[{ name: "Software & Workflows", path }]}
        sheet="white"
      >
        <ButtonLink href="/contact/" variant="accent" size="lg" arrow>
          Let’s Talk
        </ButtonLink>
        <ButtonLink href="#capabilities" variant="outline-dark" size="lg">
          Explore Our Capabilities
        </ButtonLink>
      </PageHero>

      {/* 2 · The bigger picture: one solution, five layers */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-wide grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <Label>How it comes together</Label>
            <h2 className="mt-5 max-w-xl text-h2">
              One connected solution. Every layer engineered.
            </h2>
            <p className="mt-6 max-w-lg text-lead text-slate-600">
              Modern business software is more than an application. It is interfaces, workflows,
              business logic, integrations, data and infrastructure working together.
            </p>
            <ol className="mt-10 max-w-lg divide-y divide-ink/10 border-y border-ink/10">
              {solutionLayers.map((l, i) => (
                <li key={l.title} className="flex items-baseline gap-5 py-4">
                  <span className="font-mono text-sm text-electric-600">0{i + 1}</span>
                  <span>
                    <span className="block font-medium text-ink">{l.title}</span>
                    <span className="block text-sm text-slate-600">{l.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <SolutionLayers />
          </Reveal>
        </div>
      </section>

      {/* 3 · Three capabilities, set as an editorial list */}
      <Section ground="mist" id="capabilities">
        <Reveal className="max-w-3xl">
          <Label>Our capabilities</Label>
          <h2 className="mt-5 text-h2">
            Everything required to build and operate modern software.
          </h2>
        </Reveal>

        <ol className="mt-16 border-t border-ink/15">
          {softwareCapabilities.map((c, i) => (
            <li
              key={c.id}
              id={c.id}
              className="grid scroll-mt-28 gap-6 border-b border-ink/15 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
            >
              <p className="font-mono text-sm text-electric-600 lg:col-span-1">0{i + 1}</p>
              <h3 className={`text-h3 lg:col-span-5 lg:text-[2.25rem] lg:leading-[1.1]`}>
                {c.title}
              </h3>
              <div className={`lg:col-span-5 lg:col-start-7`}>
                <p className="text-lead text-slate-600">{c.text}</p>
                <p className="mt-5 text-sm font-medium text-ink">{c.covers.join("  ·  ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5 · Delivery lifecycle */}
      <Section ground="halo">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>Our engineering approach</Label>
          <h2 className="mt-5 text-h2">From the first conversation to production and beyond.</h2>
        </Reveal>
        <Steps steps={lifecycle} />
      </Section>

      <CtaSection
        title="Have a business challenge worth solving?"
        text="Bring the requirement. We’ll bring the architecture, engineering team and a plan to production."
      />
    </>
  );
}
