import type { Metadata } from "next";
import { site } from "@/constants/site";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/features/home/hero";
import { PracticesSection } from "@/features/home/practices-section";
import { IndustriesSection } from "@/features/home/industries-section";
import { IntroSection } from "@/features/home/intro-section";
import { ConnectedSection } from "@/features/home/connected-section";
import { WhySection } from "@/features/home/why-section";
import { FinalCta } from "@/features/home/final-cta";

const title = `${site.name} | AI Solutions, Software & Enterprise Technology`;

export const metadata: Metadata = {
  ...pageMeta({ title, description: site.description, path: "/" }),
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <PracticesSection />
      <ConnectedSection />
      <IndustriesSection />
      <WhySection />
      <FinalCta />
    </>
  );
}
