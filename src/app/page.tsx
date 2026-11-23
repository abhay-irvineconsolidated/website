import type { Metadata } from "next";
import { site } from "@/constants/site";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/features/home/hero";
import { PracticesSection } from "@/features/home/practices-section";
import { SoftwareSection } from "@/features/home/software-section";
import { EnterpriseSection } from "@/features/home/enterprise-section";
import { IndustriesSection } from "@/features/home/industries-section";
import { CtaSection } from "@/components/sections/cta-section";

const title = `${site.name} | AI Solutions, Software & Enterprise Technology`;

export const metadata: Metadata = {
  ...pageMeta({ title, description: site.description, path: "/" }),
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticesSection />
      <SoftwareSection />
      <EnterpriseSection />
      <IndustriesSection />
      <CtaSection />
    </>
  );
}
