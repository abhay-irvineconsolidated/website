import type { MetadataRoute } from "next";
import { aiPages } from "@/content/ai-solutions";
import { sortedInsights } from "@/content/insights";
import { absoluteUrl } from "@/constants/site";

/** Every public URL. Paths keep the trailing slash used site-wide (trailingSlash: true). */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/ai-solutions/", 0.9),
    ...aiPages.map((p) => page(p.href, 0.7)),
    page("/software-workflows/", 0.9),
    page("/enterprise-solutions/", 0.9),
    page("/enterprise-solutions/implementation-services/", 0.7),
    page("/enterprise-solutions/post-implementation/", 0.7),
    page("/enterprise-solutions/technical-services/", 0.7),
    page("/enterprise-solutions/reward-my-team/", 0.7),
    page("/about/", 0.7),
    page("/careers/", 0.6),
    page("/contact/", 0.7),
    page("/insights/", 0.7),
    ...sortedInsights.map((i) => ({
      url: absoluteUrl(`/insights/${i.slug}/`),
      lastModified: i.date,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    page("/privacy-policy/", 0.2),
  ];
}
