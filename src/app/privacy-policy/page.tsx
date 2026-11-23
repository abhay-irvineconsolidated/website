import type { Metadata } from "next";
import type { Block } from "@/types/insights";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/page/section";
import { cardSurface } from "@/components/page/cards";
import { ArticleBody } from "@/features/insights/article-body";
import { site } from "@/constants/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

const path = "/privacy-policy/";
const updated = "November 23, 2026";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Irvine Consolidated collects, uses and protects personal information on this website.",
  path,
});

/*
 * Rewritten from the legacy WordPress policy for this site, which has no comments, accounts or
 * analytics. Kept: contact-form data, embedded and third-party content, retention and your rights.
 * Flagged for the client's legal review before launch (docs/02-content-migration-inventory.md §28).
 */
const policy: Block[] = [
  { type: "h2", text: "Who we are" },
  {
    type: "p",
    content: [
      `This website is operated by ${site.name}, based in Houston, Texas. Our website address is `,
      { text: site.url.replace(/^https?:\/\//, ""), href: "/" },
      ". In this policy, “we”, “us” and “our” mean Irvine Consolidated.",
    ],
  },
  { type: "h2", text: "What we collect and why" },
  { type: "h3", text: "Contact form and email" },
  {
    type: "p",
    content: [
      "When you contact us through the form or by email, we receive the details you choose to give: typically your name, email address, company, the topic and your message. We use them only to respond to you and to keep a record of our conversation. We do not sell this information or use it for advertising.",
    ],
  },
  { type: "h3", text: "Careers and the talent network" },
  {
    type: "p",
    content: [
      "If you contact us about working with us, we use what you send to assess and discuss opportunities with you.",
    ],
  },
  { type: "h3", text: "Server logs" },
  {
    type: "p",
    content: [
      "Like most websites, our hosting provider automatically records technical information such as your IP address, browser type and the pages requested. This is used to keep the site secure and working, and is kept only for a limited period.",
    ],
  },
  { type: "h2", text: "Cookies" },
  {
    type: "p",
    content: [
      "This website does not use advertising or analytics cookies. If we add analytics in the future, we will update this policy and, where required, ask for your consent first.",
    ],
  },
  { type: "h2", text: "Links and content from other websites" },
  {
    type: "p",
    content: [
      "Some links take you to services run by other companies, for example our scheduling form (HubSpot), product demo booking (Calendly), the Workday Marketplace, LinkedIn and YouTube. Those websites may collect data about you, use cookies and track your interaction under their own privacy policies.",
    ],
  },
  { type: "h2", text: "Who we share your data with" },
  {
    type: "p",
    content: [
      "We share personal information only with service providers that help us run this website and our business (such as hosting and email), and only as needed for them to provide that service, or where the law requires it.",
    ],
  },
  { type: "h2", text: "How long we keep your data" },
  {
    type: "p",
    content: [
      "We keep enquiries for as long as needed to respond and to maintain our business records, and then delete them. You can ask us to delete your information at any time.",
    ],
  },
  { type: "h2", text: "Your rights" },
  {
    type: "p",
    content: [
      "You can ask us for a copy of the personal data we hold about you, ask us to correct it, or ask us to erase it. This does not include data we must keep for administrative, legal or security purposes. To make a request, email ",
      { text: site.email, href: `mailto:${site.email}` },
      ".",
    ],
  },
  { type: "h2", text: "Changes to this policy" },
  {
    type: "p",
    content: [
      `We may update this policy from time to time. The date below shows when it last changed. Last updated: ${updated}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro={`How we handle personal information on this website. Last updated ${updated}.`}
        crumbs={[{ name: "Privacy Policy", path }]}
      />
      <Section ground="mist" className="pt-8 lg:pt-12">
        <div className={cn(cardSurface, "mx-auto max-w-3xl p-6 sm:p-10 lg:p-14")}>
          <ArticleBody blocks={policy} />
        </div>
      </Section>
    </>
  );
}
