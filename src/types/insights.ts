export type InsightCategory =
  "ai-technology" | "technical" | "announcements" | "resources" | "events";

/** Inline rich text: plain strings, or links. Kept deliberately small. */
export type Inline = string | { text: string; href: string; strong?: boolean } | { strong: string };

export type Block =
  | { type: "p"; content: Inline[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Inline[][] }
  | { type: "quote"; text: string; cite: string }
  | { type: "download"; label: string; href: string; size?: string }
  | { type: "cta"; label: string; href: string; external?: boolean };

export type Insight = {
  slug: string;
  title: string;
  category: InsightCategory;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  summary: string;
  /** Topic tags (e.g. Payroll, Benefits). */
  tags: string[];
  /** Where this item lived on the legacy site, for the migration record. */
  legacyUrl?: string;
  /** Newly written for the relaunch: flagged for client review before publishing. */
  isNew?: boolean;
  readingMinutes: number;
  body: Block[];
};
