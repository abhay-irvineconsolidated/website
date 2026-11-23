/**
 * Company facts and contact details. Every value here is taken from the existing
 * irvineconsolidated.com site (see docs/02-content-migration-inventory.md, "Facts register").
 * Do not add claims that cannot be sourced.
 */
export const site = {
  name: "Irvine Consolidated",
  legalName: "Irvine Consolidated",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://irvineconsolidated.com").replace(/\/$/, ""),
  tagline: "Engineering intelligence into every workflow.",
  description:
    "Irvine Consolidated is an AI-first technology partner building enterprise AI, intelligent automation, custom software and connected workflows — backed by a decade of enterprise systems and Workday delivery.",
  foundedYear: 2015,
  location: { city: "Houston", region: "TX", country: "US" },
  email: "info@irvineconsolidated.com",
  mediaEmail: "media@irvineconsolidated.com",
  phone: { display: "(936) 648-7276", href: "tel:+19366487276" },
  social: {
    linkedin: "https://www.linkedin.com/company/irvine-consolidated/",
    youtube: "https://www.youtube.com/@IrvineConsolidated",
  },
  /** Existing HubSpot "Let's Get Started" form used on the legacy site for scheduling. */
  schedulingUrl: "https://share.hsforms.com/1ezvaoL71Sv2IZiMTptn0hgr3wc7",
  /** Existing Calendly link for Reward My Team demos. */
  productDemoUrl: "https://calendly.com/irvineconsolidated/rewardmyteam",
  marketplaceUrl: "https://marketplace.workday.com/en-US/apps/483501/reward-my-team",
  workdayDisclaimer:
    "Workday is a registered trademark of Workday, Inc. Irvine Consolidated is not affiliated with Workday, Inc., nor does Workday, Inc. sponsor or endorse Irvine Consolidated, its products, or its website.",
} as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
