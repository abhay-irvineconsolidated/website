import type { NavGroup, NavLink } from "@/types/navigation";
import { aiPages } from "@/content/ai-solutions";
import { softwareCapabilities } from "@/content/software";
import { workdayServices } from "@/content/enterprise";

/** Primary navigation. Groups render as dropdowns on desktop and accordions on mobile. */
export const primaryNav: NavGroup[] = [
  { label: "AI Solutions", href: "/ai-solutions/" },
  { label: "Software & Workflows", href: "/software-workflows/" },
  { label: "Enterprise Solutions", href: "/enterprise-solutions/" },
  {
    label: "About",
    href: "/about/",
    summary: "Who we are and how we work.",
    items: [
      {
        label: "Company Overview",
        href: "/about/",
        description: "An AI-first technology partner.",
      },
      { label: "Careers", href: "/careers/", description: "Join our talent network." },
    ],
  },
  { label: "Insights", href: "/insights/" },
];

export const contactNav: NavLink = { label: "Let's Talk", href: "/contact/" };

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "AI Solutions",
    links: aiPages.map((p) => ({ label: p.title, href: p.href })),
  },
  {
    title: "Software & Workflows",
    links: softwareCapabilities.map((c) => ({
      label: c.title,
      href: `/software-workflows/#${c.id}`,
    })),
  },
  {
    title: "Enterprise Solutions",
    links: [
      { label: "Enterprise Overview", href: "/enterprise-solutions/" },
      ...workdayServices.map((s) => ({ label: s.pageTitle, href: s.href })),
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Careers", href: "/careers/" },
      { label: "Insights", href: "/insights/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
