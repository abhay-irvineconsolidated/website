import type { LucideIcon } from "lucide-react";

export type TitledText = { title: string; text: string };
export type Faq = { q: string; a: string };

/** A service detail page in the AI Solutions or Software & Workflows practice. */
export type CapabilityService = {
  slug: string;
  href: string;
  name: string;
  /** One line, used in navigation and cards. */
  short: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  intro: string;
  /** The business problem this service addresses. */
  challenge: TitledText;
  capabilities: TitledText[];
  useCases: TitledText[];
  /** Left-to-right flow rendered as an architecture diagram. */
  flow: { label: string; detail: string }[];
  outcomes: TitledText[];
  faqs: Faq[];
  /** Plain-language description for schema.org `serviceType`. */
  serviceType: string;
};

/** A Workday practice page in Enterprise Solutions. */
export type WorkdayService = {
  slug: string;
  href: string;
  /** Title of the dedicated page (and its metadata). */
  pageTitle: string;
  name: string;
  short: string;
  icon: LucideIcon;
  headline: string;
  intro: string;
  /** Journey stage(s) from the Align / Build / Launch / Enable model. */
  stages: string[];
  offerings: TitledText[];
  serviceType: string;
};
