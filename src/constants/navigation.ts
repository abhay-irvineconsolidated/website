import type { NavGroup, NavLink } from "@/types/navigation";

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

/** Footer links mirror the primary navigation: every top-level link, with the About group expanded. */
export const footerNav: NavLink[] = [
  ...primaryNav.flatMap((g) =>
    g.items
      ? g.items.map((i) => ({ label: i.label, href: i.href }))
      : [{ label: g.label, href: g.href }],
  ),
  contactNav,
];
