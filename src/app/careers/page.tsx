import type { Metadata } from "next";
import { careers } from "@/content/company";
import { HeroButton, PageHero } from "@/components/page/page-hero";
import { Section, SectionTitle } from "@/components/page/section";
import { Cards } from "@/components/page/cards";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMeta } from "@/lib/seo";

const path = "/careers/";
const applyHref = "/contact/?interest=careers#form";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description:
    "Join Irvine Consolidated's talent network: AI engineers, software developers, data specialists and Workday consultants. 100% remote, with market-beating pay and benefits.",
  path,
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        title={careers.headline}
        intro="AI engineers, software developers, data specialists and Workday consultants, all 100% remote."
        crumbs={[{ name: "Careers", path }]}
      >
        <HeroButton href={applyHref}>Join Our Talent Network</HeroButton>
      </PageHero>

      <Section ground="mist">
        <SectionTitle title="Why people join us." intro={careers.pitch} />
        <Cards items={careers.benefits} cols={4} />
      </Section>

      <CtaSection
        eyebrow="Talent network"
        title="Your next career milestone awaits."
        text="Tell us about the work you want to do. We’ll be in touch when the right role opens."
        primary={{ label: "Join Our Talent Network", href: applyHref }}
      />
    </>
  );
}
