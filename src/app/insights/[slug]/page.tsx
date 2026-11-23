import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabel, getInsight, sortedInsights } from "@/content/insights";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionTitle } from "@/components/page/section";
import { JsonLd } from "@/components/ui/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { ArticleBody } from "@/features/insights/article-body";
import { absoluteUrl, site } from "@/constants/site";
import { OG_IMAGE, organizationId, pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return sortedInsights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const insight = getInsight((await params).slug);
  if (!insight) return {};
  return pageMeta({
    title: insight.title,
    description: insight.summary,
    path: `/insights/${insight.slug}/`,
    type: "article",
  });
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  const url = `/insights/${insight.slug}/`;
  const related = [
    ...sortedInsights.filter((i) => i.slug !== insight.slug && i.category === insight.category),
    ...sortedInsights.filter((i) => i.slug !== insight.slug && i.category !== insight.category),
  ].slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title,
          description: insight.summary,
          datePublished: insight.date,
          url: absoluteUrl(url),
          image: absoluteUrl(OG_IMAGE.url),
          author: { "@id": organizationId },
          publisher: { "@id": organizationId, name: site.name },
          keywords: insight.tags.join(", "),
        }}
      />
      <PageHero
        title={insight.title}
        intro={
          <>
            {categoryLabel(insight.category)} ·{" "}
            <time dateTime={insight.date}>{formatDate(insight.date)}</time> ·{" "}
            {insight.readingMinutes} min read
          </>
        }
        crumbs={[
          { name: "Insights", path: "/insights/" },
          { name: insight.title, path: url },
        ]}
      />

      <Section ground="mist" className="pt-8 lg:pt-12">
        <article className="mx-auto max-w-2xl">
          <p className="mb-10 border-b border-ink/10 pb-10 text-xl leading-relaxed font-medium text-ink">
            {insight.summary}
          </p>
          <ArticleBody blocks={insight.body} />
          {insight.tags.length ? (
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-ink/10 pt-8">
              {insight.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-pill border border-ink/10 px-3.5 py-1.5 text-sm text-slate-600"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      </Section>

      <Section ground="grain">
        <SectionTitle title="Keep reading." />
        <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/insights/${r.slug}/`}
                className="group grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[14rem_1fr]"
              >
                <p className="text-sm text-slate-600">
                  {categoryLabel(r.category)} · {formatDate(r.date)}
                </p>
                <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-electric-600">
                  {r.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection />
    </>
  );
}
