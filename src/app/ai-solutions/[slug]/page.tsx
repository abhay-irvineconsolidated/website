import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { aiPages, aiServices, getAiPage } from "@/content/ai-solutions";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { ServiceBlock } from "@/components/page/service-block";
import { faqSchema } from "@/components/page/faq-list";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { absoluteUrl } from "@/constants/site";
import { organizationId, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return aiPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/ai-solutions/[slug]">): Promise<Metadata> {
  const page = getAiPage((await params).slug);
  if (!page) return {};
  const first = aiServices.find((s) => s.slug === page.services[0]);
  return pageMeta({ title: page.title, description: first?.intro ?? page.short, path: page.href });
}

export default async function AiDetailPage({ params }: PageProps<"/ai-solutions/[slug]">) {
  const page = getAiPage((await params).slug);
  if (!page) notFound();
  const services = aiServices.filter((s) => (page.services as readonly string[]).includes(s.slug));
  const others = aiPages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            ...services.map((s) => ({
              "@type": "Service",
              name: s.name,
              serviceType: s.serviceType,
              description: s.intro,
              url: absoluteUrl(s.href),
              provider: { "@id": organizationId },
              areaServed: "US",
            })),
            faqSchema(services.flatMap((s) => s.faqs)),
          ],
        }}
      />
      <PageHero
        title={page.title}
        intro={page.short}
        crumbs={[
          { name: "AI Solutions", path: "/ai-solutions/" },
          { name: page.title, path: page.href },
        ]}
      >
        <ButtonLink href="/contact/" variant="accent" size="lg" arrow>
          Let’s Talk
        </ButtonLink>
        <ButtonLink href="/ai-solutions/" variant="outline-dark" size="lg">
          AI Solutions overview
        </ButtonLink>
      </PageHero>

      {services.map((s, i) => (
        <ServiceBlock key={s.slug} service={s} ground={i % 2 ? "grain" : "mist"} />
      ))}

      <Section ground="halo" className="py-16 lg:py-20">
        <p className="font-mono text-xs tracking-[0.18em] text-electric-600 uppercase">
          More from AI Solutions
        </p>
        <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.href}
                className="group flex items-center justify-between gap-4 py-5 pointer-fine:hover:text-electric-600"
              >
                <span>
                  <span className="block text-lg font-semibold text-ink group-hover:text-electric-600">
                    {p.title}
                  </span>
                  <span className="block text-slate-600">{p.short}</span>
                </span>
                <ArrowRight aria-hidden="true" className="size-5 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Have a process AI should be running?"
        text="Tell us where work gets stuck. We’ll help identify where AI can make a meaningful difference."
      />
    </>
  );
}
