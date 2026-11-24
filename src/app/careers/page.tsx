import type { Metadata } from "next";
import { careers } from "@/content/company";
import { HeroButton, PageHero } from "@/components/page/page-hero";
import { Section, SectionTitle } from "@/components/page/section";
import { Cards, cardSurface } from "@/components/page/cards";
import { Reveal } from "@/components/ui/motion";
import { TalentNetworkForm } from "@/features/careers/talent-network-form";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

const path = "/careers/";
const applyHref = "#talent-network";

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

      <Section ground="plain" id="talent-network">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionTitle
              title="Your next career milestone awaits."
              intro="Tell us about the work you want to do. We’ll be in touch when the right role opens."
            />
          </div>
          <Reveal className={cn(cardSurface, "relative pt-8 lg:col-span-7")}>
            <TalentNetworkForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
