import type { Metadata } from "next";
import { categoryLabel, insightCategories, sortedInsights } from "@/content/insights";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { CtaSection } from "@/components/sections/cta-section";
import { InsightGrid } from "@/features/insights/insight-grid";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const path = "/insights/";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "AI and technology perspectives, Workday technical insights, company announcements, events and downloadable resources from Irvine Consolidated.",
  path,
});

export default function InsightsPage() {
  const used = new Set(sortedInsights.map((i) => i.category));
  return (
    <>
      <PageHero
        title="Ideas, news and practical guides."
        intro="Perspectives on AI and software, Workday tips, announcements and resources."
        crumbs={[{ name: "Insights", path }]}
      />
      <Section ground="mist" className="pt-8 lg:pt-12">
        <InsightGrid
          categories={insightCategories
            .filter((c) => used.has(c.id))
            .map((c) => ({ id: c.id, label: c.label }))}
          items={sortedInsights.map((i) => ({
            slug: i.slug,
            title: i.title,
            summary: i.summary,
            category: i.category,
            categoryLabel: categoryLabel(i.category),
            date: i.date,
            dateLabel: formatDate(i.date),
            readingMinutes: i.readingMinutes,
          }))}
        />
      </Section>
      <CtaSection />
    </>
  );
}
