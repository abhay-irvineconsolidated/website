/**
 * Permanent (301/308) redirects from the legacy WordPress site to the new information architecture.
 * Source of truth for `next.config.ts` and docs/03-url-migration-map.md. See the content migration
 * inventory for the reasoning behind each destination.
 *
 * Paths are written with trailing slashes because the site runs with `trailingSlash: true`
 * (matching the URLs search engines have indexed). Next.js also matches the slash-less form.
 */
export type LegacyRedirect = { source: string; destination: string; note: string };

const WP_UPLOADS = "/wp-content/uploads/sites/27";

export const legacyRedirects: LegacyRedirect[] = [
  // Company
  { source: "/about-us/", destination: "/about/", note: "About Us" },
  { source: "/join-us/", destination: "/careers/", note: "Talent network merged into Careers" },

  // Workday services → Enterprise Solutions
  { source: "/services/", destination: "/enterprise-solutions/", note: "Services overview" },
  { source: "/service/", destination: "/enterprise-solutions/", note: "Service post archive" },
  {
    source: "/service/implementation-services/",
    destination: "/enterprise-solutions/implementation-services/",
    note: "Implementation Services",
  },
  {
    source: "/service/post-implementation/",
    destination: "/enterprise-solutions/post-implementation/",
    note: "Post-Implementation Services",
  },
  {
    source: "/service/technical-services/",
    destination: "/enterprise-solutions/technical-services/",
    note: "Technical Services",
  },
  {
    source: "/service/products/",
    destination: "/enterprise-solutions/reward-my-team/",
    note: "Products (Bulk One-Time Payments)",
  },
  {
    source: "/shop/",
    destination: "/enterprise-solutions/reward-my-team/",
    note: "Empty WooCommerce shop",
  },

  // Intelligent automation now lives on the combined agents page (the other five AI slugs are real pages)
  {
    source: "/ai-solutions/intelligent-automation/",
    destination: "/ai-solutions/ai-agents/#intelligent-automation",
    note: "Merged into AI Agents & Intelligent Automation",
  },

  // Former service pages, now sections on their overview pages
  ...(
    [
      ["/software-workflows/", "custom-software", "applications"],
      ["/software-workflows/", "enterprise-applications", "applications"],
      ["/software-workflows/", "cloud-applications", "applications"],
      ["/software-workflows/", "workflow-automation", "workflows"],
      ["/software-workflows/", "systems-integration", "integration"],
      ["/software-workflows/", "data-engineering", "integration"],
    ] as const
  ).map(([base, slug, anchor]) => ({
    source: `${base}${slug}/`,
    destination: `${base}#${anchor}`,
    note: "Former service page, now a section of its overview",
  })),

  // News, resources and events → Insights (slugs preserved)
  { source: "/news-partnerships/", destination: "/insights/", note: "News & Partnerships archive" },
  {
    source: "/news-partnerships/:slug/",
    destination: "/insights/:slug/",
    note: "Each announcement keeps its slug",
  },
  { source: "/resources/", destination: "/insights/", note: "Workday Resources archive" },
  {
    source: "/resources/:slug/",
    destination: "/insights/:slug/",
    note: "Each resource keeps its slug",
  },
  { source: "/news/", destination: "/insights/", note: "Empty news archive" },
  {
    source: "/workday-rising-2025/",
    destination: "/insights/workday-rising-2025/",
    note: "Event page",
  },
  {
    source: "/workday-rising-2026/",
    destination: "/insights/workday-rising-2026/",
    note: "Event page",
  },
  { source: "/author/:name/", destination: "/insights/", note: "WordPress author archives" },

  // Contact flows
  { source: "/lets-get-started/", destination: "/contact/", note: "Let's Get Started" },
  {
    source: "/schedule-a-consultation/",
    destination: "/contact/#schedule",
    note: "Schedule a consultation",
  },
  { source: "/forms/", destination: "/contact/", note: "Empty forms page" },

  // Legacy feeds
  { source: "/sitemap.rss", destination: "/sitemap.xml", note: "RSS sitemap" },

  // Re-hosted downloads (links shared in email and social keep working)
  {
    source: `${WP_UPLOADS}/2026/02/Irvine-Consolidated-One-Pager-for-Website.pdf`,
    destination: "/downloads/irvine-consolidated-one-pager.pdf",
    note: "Company one-pager",
  },
  {
    source: `${WP_UPLOADS}/2025/07/Irvine-Consolidated-Rising-One-Pager.pdf`,
    destination: "/downloads/workday-rising-2025-one-pager.pdf",
    note: "Workday Rising 2025 one-pager",
  },
  {
    source: `${WP_UPLOADS}/2024/07/Workday-Partnership-_-Press-Release-_-Irvine-Consolidated.pdf`,
    destination: "/downloads/workday-referral-partner-press-release.pdf",
    note: "Referral partner press release",
  },
  {
    source: `${WP_UPLOADS}/2024/11/Irvine-Compensation-Review-Checklist.pdf`,
    destination: "/downloads/compensation-review-checklist.pdf",
    note: "Compensation checklist",
  },
  {
    source: `${WP_UPLOADS}/2024/11/Irvine-End-of-Year-Tasks-Checklist.pdf`,
    destination: "/downloads/end-of-year-payroll-checklist.pdf",
    note: "End-of-year payroll checklist",
  },
  // Any other legacy upload (logos, event graphics) → home rather than a 404.
  { source: "/wp-content/:path*", destination: "/", note: "Other WordPress media" },
];
