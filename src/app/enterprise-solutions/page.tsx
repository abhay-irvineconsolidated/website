import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  enterpriseCapabilities,
  enterpriseOverview,
  productHighlights,
  productLinks,
  workdayServices,
} from "@/content/enterprise";
import { HeroButton, PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/motion";
import { CtaSection } from "@/components/sections/cta-section";
import { EnterpriseEcosystem } from "@/components/visualizations/enterprise-ecosystem";
import { absoluteUrl } from "@/constants/site";
import { organizationId, pageMeta } from "@/lib/seo";
import productShot from "../../../public/images/products/bulk-one-time-payments.png";

const path = "/enterprise-solutions/";

export const metadata: Metadata = pageMeta({
  title: "Enterprise Solutions",
  description:
    "Enterprise implementations, ongoing optimization, integrations and custom applications from a Workday Services Partner delivering since 2015.",
  path,
});

function Label({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`font-mono text-xs tracking-[0.18em] uppercase ${dark ? "text-turquoise-500" : "text-electric-600"}`}
    >
      {children}
    </p>
  );
}

export default function EnterprisePage() {
  const reward = workdayServices.find((s) => s.slug === "reward-my-team")!;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": workdayServices.map((s) =>
            s.slug === "reward-my-team"
              ? {
                  "@type": "SoftwareApplication",
                  name: "Reward My Team (Bulk One-Time Payments)",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Workday",
                  description: s.intro,
                  url: absoluteUrl(s.href),
                  publisher: { "@id": organizationId },
                }
              : {
                  "@type": "Service",
                  name: s.pageTitle,
                  serviceType: s.serviceType,
                  description: s.intro,
                  url: absoluteUrl(s.href),
                  provider: { "@id": organizationId },
                },
          ),
        }}
      />

      {/* 1 · Hero */}
      <PageHero
        title={enterpriseOverview.headline}
        intro={enterpriseOverview.intro}
        crumbs={[{ name: "Enterprise Solutions", path }]}
      >
        <HeroButton href="/contact/">Start Your Workday Project</HeroButton>
      </PageHero>

      {/* 2 · The bigger picture */}
      <Section ground="plain" className="bg-white">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Label>Enterprise technology</Label>
            <h2 className="mt-5 max-w-lg text-h2">
              Enterprise systems are more than platforms. They’re how business gets done.
            </h2>
            <p className="mt-6 max-w-md text-lead text-slate-600">
              Your enterprise technology connects people, processes, data, finance, HR and
              operations. We help you implement the right foundations, keep systems performing and
              connect technology across the business.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <EnterpriseEcosystem className="mx-auto h-auto w-full max-w-[40rem]" />
          </Reveal>
        </div>
      </Section>

      {/* 3 · Three capabilities */}
      <Section ground="mist" id="capabilities">
        <Reveal className="max-w-3xl">
          <Label>Our capabilities</Label>
          <h2 className="mt-5 text-h2">From implementation to continuous evolution.</h2>
        </Reveal>

        <ol className="mt-16 border-t border-ink/15">
          {enterpriseCapabilities.map((c, i) => (
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
                <p className="mt-4 text-slate-600">{c.text}</p>
                <p className="mt-5 text-sm font-medium text-ink">{c.covers.join("  ·  ")}</p>
                <ButtonLink href={c.href} variant="link-light" arrow className="mt-5">
                  {c.cta}
                </ButtonLink>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4 · Workday expertise */}
      <Section ground="grain">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Label>Our established expertise</Label>
            <h2 className="mt-5 max-w-md text-h2">
              Deep Workday experience. Broader enterprise perspective.
            </h2>
            <p className="mt-6 max-w-md text-slate-600">
              Since 2015, Irvine Consolidated has helped organizations implement, support and extend
              Workday across their HR and finance operations, supported by a team that understands
              the systems, integrations and processes behind enterprise operations.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {workdayServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-lg font-semibold text-ink group-hover:text-electric-600">
                        {s.name}
                      </span>
                      <span className="mt-0.5 block text-slate-600">{s.short}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-electric-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 5 · Reward My Team */}
      <section className="atmos-navy py-20 lg:py-28">
        <Reveal className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Label dark>Built on Workday</Label>
              <h2 className="mt-5 max-w-xl text-h2 text-white">
                Enterprise expertise that turns into real products.
              </h2>
              <p className="mt-6 max-w-xl text-lead text-silver-200">
                Reward My Team is our flagship Built on Workday application, designed to simplify
                bulk one-time payments, spot bonuses and employee recognition directly within
                Workday.
              </p>
              <ul className="mt-8 grid max-w-xl gap-x-8 gap-y-3 sm:grid-cols-2">
                {productHighlights.map((h) => (
                  <li key={h} className="border-t border-white/15 pt-3 text-silver-100">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href={productLinks.marketplace} variant="accent" arrow external>
                  View on Workday Marketplace
                </ButtonLink>
                <ButtonLink href={reward.href} variant="outline-dark" arrow>
                  Explore Reward My Team
                </ButtonLink>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 lg:col-span-4 lg:col-start-9">
              <div className="rounded-3xl bg-white p-4">
                <Image
                  src={productShot}
                  alt="Reward My Team app icon"
                  className="size-44 sm:size-52"
                  sizes="208px"
                  placeholder="blur"
                />
              </div>
              <p className="font-semibold">Reward My Team</p>
              <p className="text-sm text-silver-300">Available on the Workday Marketplace</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8 · Final CTA */}
      <CtaSection
        eyebrow="Talk to Chris Irvine"
        title="Let’s make your enterprise technology work harder."
        text="Whether you’re implementing Workday, optimizing an existing tenant, or connecting enterprise systems, let’s discuss what your organization needs next."
        primary={{ label: "Book a Consultation", href: "/contact/" }}
      />
    </>
  );
}
