import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getWorkdayService, workdayServices } from "@/content/enterprise";
import { HeroButton, PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { ProductExtras } from "@/components/page/product-extras";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/motion";
import { CtaSection } from "@/components/sections/cta-section";
import { absoluteUrl } from "@/constants/site";
import { organizationId, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return workdayServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/enterprise-solutions/[slug]">): Promise<Metadata> {
  const s = getWorkdayService((await params).slug);
  if (!s) return {};
  return pageMeta({ title: s.pageTitle, description: s.intro, path: s.href });
}

export default async function EnterpriseServicePage({
  params,
}: PageProps<"/enterprise-solutions/[slug]">) {
  const service = getWorkdayService((await params).slug);
  if (!service) notFound();
  const isProduct = service.slug === "reward-my-team";
  const others = workdayServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...(isProduct
            ? {
                "@type": "SoftwareApplication",
                name: "Reward My Team (Bulk One-Time Payments)",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Workday",
                publisher: { "@id": organizationId },
              }
            : {
                "@type": "Service",
                name: service.pageTitle,
                serviceType: service.serviceType,
                provider: { "@id": organizationId },
              }),
          description: service.intro,
          url: absoluteUrl(service.href),
        }}
      />
      <PageHero
        title={service.headline}
        intro={service.short}
        crumbs={[
          { name: "Enterprise Solutions", path: "/enterprise-solutions/" },
          { name: service.pageTitle, path: service.href },
        ]}
      >
        <HeroButton href="/contact/">Book a Consultation</HeroButton>
      </PageHero>

      <Section ground="mist">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.18em] text-electric-600 uppercase">
              {service.pageTitle}
            </p>
            <p className="mt-5 max-w-md text-lead text-slate-600">{service.intro}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {service.offerings.map((o) => (
                <li key={o.title} className="py-5">
                  <p className="text-lg font-semibold text-ink">{o.title}</p>
                  <p className="mt-1 leading-relaxed text-slate-600">{o.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {isProduct ? (
        <Section ground="grain">
          <Reveal className="max-w-3xl">
            <h2 className="text-h2">Everything a bulk payment needs.</h2>
          </Reveal>
          <div className="mt-12">
            <ProductExtras />
          </div>
        </Section>
      ) : null}

      <Section ground="halo" className="py-16 lg:py-20">
        <p className="font-mono text-xs tracking-[0.18em] text-electric-600 uppercase">
          More from Enterprise Solutions
        </p>
        <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="group flex items-center justify-between gap-4 py-5 pointer-fine:hover:text-electric-600"
              >
                <span>
                  <span className="block text-lg font-semibold text-ink group-hover:text-electric-600">
                    {s.pageTitle}
                  </span>
                  <span className="block text-slate-600">{s.short}</span>
                </span>
                <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection
        eyebrow="Talk to Chris Irvine"
        title="Let’s make your enterprise technology work harder."
        text="Book time with our Founder & CEO to discuss what your organization needs next."
        primary={{ label: "Book a Consultation", href: "/contact/" }}
      />
    </>
  );
}
