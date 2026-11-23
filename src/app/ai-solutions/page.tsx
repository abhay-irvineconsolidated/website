import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  aiCapabilities,
  aiLifecycle,
  aiOverview,
  aiServices,
  practiceFit,
  strategyThread,
} from "@/content/ai-solutions";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { Label } from "@/components/page/label";
import { Steps } from "@/components/page/steps";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/motion";
import { CtaSection } from "@/components/sections/cta-section";
import { AiOperatingModel } from "@/components/visualizations/ai-operating-model";
import { InvoiceFlow } from "@/features/ai/invoice-flow";
import { absoluteUrl } from "@/constants/site";
import { organizationId, pageMeta } from "@/lib/seo";

const path = "/ai-solutions/";

export const metadata: Metadata = pageMeta({
  title: "AI Solutions",
  description:
    "Enterprise intelligence, AI agents and automation, and AI engineering and integration: complete AI systems that do real work inside your business.",
  path,
});

export default function AiSolutionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": aiServices.map((s) => ({
            "@type": "Service",
            name: s.name,
            serviceType: s.serviceType,
            description: s.intro,
            url: absoluteUrl(s.href),
            provider: { "@id": organizationId },
            areaServed: "US",
          })),
        }}
      />

      {/* 01 · Hero */}
      <PageHero
        title={aiOverview.headline}
        intro={aiOverview.intro}
        crumbs={[{ name: "AI Solutions", path }]}
      >
        <ButtonLink href="/contact/" variant="accent" size="lg" arrow>
          Let’s Talk
        </ButtonLink>
        <ButtonLink href="#capabilities" variant="outline-dark" size="lg">
          Explore Our Capabilities
        </ButtonLink>
      </PageHero>

      {/* 02 · The bigger picture */}
      <Section ground="plain" className="pt-12 lg:pt-16">
        <Reveal className="max-w-3xl">
          <Label>Intelligence into action</Label>
          <h2 className="mt-5 text-h2">From business information to intelligent action.</h2>
          <p className="mt-6 max-w-2xl text-lead text-slate-600">
            AI becomes valuable when it can understand your business, work with your systems and
            move processes forward. We bring intelligence, automation and enterprise integration
            together to make that possible.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <AiOperatingModel />
        </Reveal>
      </Section>

      {/* 03 · Capabilities */}
      <Section ground="mist" id="capabilities">
        <Reveal className="max-w-3xl">
          <Label>Our capabilities</Label>
          <h2 className="mt-5 text-h2">Three capabilities. One connected AI practice.</h2>
        </Reveal>

        <ol className="mt-16 border-t border-ink/15">
          {aiCapabilities.map((c, i) => (
            <li
              key={c.id}
              id={c.id}
              className="grid scroll-mt-28 gap-6 border-b border-ink/15 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
            >
              <p className="font-mono text-sm text-electric-600 lg:col-span-1">0{i + 1}</p>
              <h3 className="text-h3 lg:col-span-5 lg:text-[2.25rem] lg:leading-[1.1]">
                {c.title}
              </h3>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-lead text-ink">{c.line}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-1.5 text-slate-600 sm:grid-cols-2">
                  {c.examples.map((e) => (
                    <li key={e} className="border-t border-ink/10 pt-2">
                      {e}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col items-start gap-1">
                  {c.links.map((l) => (
                    <ButtonLink key={l.href} href={l.href} variant="link-light" arrow>
                      {l.label}
                    </ButtonLink>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 04 · AI in practice */}
      <Section ground="grain">
        <Reveal className="max-w-3xl">
          <Label>From process to intelligence</Label>
          <h2 className="mt-5 text-h2">
            One business process. An entire AI system working together.
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-slate-600">
            Take intelligent invoice processing. Step through it to see which capability does what.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <InvoiceFlow />
        </Reveal>
      </Section>

      {/* 05 · How we build */}
      <Section ground="mist-alt">
        <Reveal className="max-w-3xl">
          <Label>Production-ready AI</Label>
          <h2 className="mt-5 text-h2">
            Engineered for trust, performance and real-world operations.
          </h2>
        </Reveal>
        <dl className="mt-16 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {aiOverview.principles.map((p) => (
            <Reveal key={p.title} className="border-t border-ink/20 pt-6">
              <dt className="text-h3">{p.title}</dt>
              <dd className="mt-3 max-w-md text-slate-600">{p.text}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* 06 · Approach */}
      <Section ground="halo" className="pb-16 lg:pb-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Label>Our approach</Label>
          <h2 className="mt-5 text-h2">From identifying the opportunity to putting AI to work.</h2>
        </Reveal>
        <Steps steps={aiLifecycle} />
        <Reveal className="mt-16 grid gap-6 border-t border-turquoise-700/40 pt-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.18em] text-turquoise-700 uppercase">
              AI strategy, throughout
            </p>
            <p className="mt-3 text-lg text-ink">{strategyThread.text}</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-600">
              {strategyThread.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <ButtonLink href={strategyThread.href} variant="link-light" arrow className="mt-3">
              AI Strategy & Consulting
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* One technology organization */}
      <Section ground="mist">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Label>One technology organization</Label>
            <h2 className="mt-5 max-w-md text-h2">
              Intelligence, software and platforms. Built to work together.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {practiceFit.map((p) => {
                const here = p.href === path;
                const body = (
                  <>
                    <span className="min-w-0">
                      <span
                        className={`block text-lg font-semibold ${here ? "text-turquoise-700" : "text-ink group-hover:text-electric-600"}`}
                      >
                        {p.name}
                        {here ? <span className="sr-only"> (this page)</span> : null}
                      </span>
                      <span className="mt-0.5 block text-slate-600">{p.line}</span>
                      <span className="mt-1 block text-sm text-ink">{p.role}</span>
                    </span>
                    {here ? null : (
                      <ArrowRight
                        aria-hidden="true"
                        className="size-5 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                      />
                    )}
                  </>
                );
                return (
                  <li key={p.name}>
                    {here ? (
                      <div className="flex items-center justify-between gap-4 py-5">{body}</div>
                    ) : (
                      <Link
                        href={p.href}
                        className="group flex items-center justify-between gap-4 py-5"
                      >
                        {body}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 07 · Final CTA */}
      <CtaSection
        title="Have a process AI should be running?"
        text="Tell us where work gets stuck. We’ll help identify where AI can make a meaningful difference and engineer a solution that works inside your business."
      />
    </>
  );
}
