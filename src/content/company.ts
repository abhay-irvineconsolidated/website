import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  Factory,
  Fuel,
  FlaskConical,
  LineChart,
  Briefcase,
  Cpu,
  Building2,
  type LucideIcon,
} from "lucide-react";
import type { TitledText } from "@/types/content";

/* ---------------------------------------------------------------------------------------------- */
/* About                                                                                           */
/* ---------------------------------------------------------------------------------------------- */

export const aboutIntro = {
  eyebrow: "About Irvine Consolidated",
  headline: "An AI-first technology partner with enterprise roots.",
  intro:
    "Irvine Consolidated designs, builds and delivers intelligent solutions, from enterprise AI and automated workflows to custom software and the enterprise systems that run modern organizations. We began in 2015 as Workday specialists. The discipline that practice demands now powers everything we build.",
  body: [
    "Enterprise systems are unforgiving. Payroll has to be right. Integrations have to run every night. Security has to hold. A decade of work at the center of HR and finance platforms taught us to understand business requirements precisely, design for reliability and stay accountable after go-live.",
    "Those same habits are what AI and modern software need to succeed in the real world. So we’ve evolved: Irvine Consolidated is now an AI-first technology company, with dedicated practices in AI solutions, software and workflow engineering, and enterprise solutions, including the Workday practice our clients know us for.",
  ],
};

export const mission = {
  current:
    "To help organizations work more intelligently by engineering AI, software and automated workflows that solve real business problems, integrate with the systems they already depend on and deliver measurable results.",
  vision:
    "To be the technology partner organizations trust to turn artificial intelligence into everyday operational advantage, built with the precision of enterprise engineering and the curiosity of a team that never stops learning.",
  /** Original statements from irvineconsolidated.com/about-us/, preserved as part of our history. */
  originalMission:
    "Our mission is to match your organizational needs with Workday's capabilities, utilizing our expert consultants' deep implementation and support experience. Whether you need targeted assistance or extensive support, we’re dedicated to ensuring your journey with Workday is seamless and successful.",
  originalVision:
    "We strive to be a top-notch Workday provider for business of all sizes and industries worldwide. Our goal is to tackle our clients' toughest challenges by teaming them up with expert consultants who excel in harnessing cloud-based tech and optimizing enterprise systems. We're all about driving real, game-changing transformation for our clients' businesses.",
};

/** Values preserved verbatim from the legacy About page. */
export const values: TitledText[] = [
  {
    title: "Tenacity",
    text: "Staying determined and focused through challenges until goals are achieved.",
  },
  {
    title: "Innovation",
    text: "The commitment to exploring new ideas and methods to solve problems creatively and bring fresh solutions to the table.",
  },
  {
    title: "Understanding",
    text: "We listen, understand, and respond to the needs of our clients and our team with kindness and deep concern.",
  },
  {
    title: "Integrity",
    text: "We speak truthfully, without embellishment or deception. We value honesty, transparency, and straightforward communication.",
  },
];

export const leadership = {
  intro:
    "Our leadership team brings deep expertise in implementation and support, and a commitment to aligning technology with what each organization actually needs, so every client’s journey is seamless and successful.",
  people: [
    {
      name: "Chris Irvine",
      role: "Founder & CEO",
      image: "/images/team/chris-irvine.png",
      linkedin: "https://www.linkedin.com/in/chris-irvine-9b9a9729/",
      quote:
        "By leveraging our deep history and expertise, we provide comprehensive end-to-end support and ensure delivery of creative solutions to our clients’ most pressing problems.",
      quoteSource: "Chris Irvine, July 2024",
    },
  ],
};

/** Dated milestones. Every entry is sourced from the legacy site. */
export const milestones: { year: string; title: string; text: string }[] = [
  {
    year: "2015",
    title: "Founded",
    text: "Irvine Consolidated begins its mission to deliver unparalleled expertise to the Workday ecosystem.",
  },
  {
    year: "2024",
    title: "Workday Referral Partner",
    text: "A referral partnership with Workday expands our ability to deliver implementation, support and strategic consulting.",
  },
  {
    year: "2025",
    title: "Innovation Challenge winners",
    text: "Our team wins the Built on Workday Innovation Challenge, then launches Reward My Team on the Workday Marketplace.",
  },
  {
    year: "2025",
    title: "Workday Services Partner",
    text: "Designated a Workday Services Partner, and a Signature sponsor of Workday Rising in San Francisco.",
  },
  {
    year: "2026",
    title: "AI-first",
    text: "Irvine Consolidated evolves into an AI-first technology company, with AI Solutions and Software & Workflows practices alongside Enterprise Solutions.",
  },
];

/* ---------------------------------------------------------------------------------------------- */
/* Industries (from /services/ and the company one-pager)                                         */
/* ---------------------------------------------------------------------------------------------- */

export const industriesIntro =
  "Irvine Consolidated brings industry knowledge to every engagement. Our team has proudly supported clients across a range of sectors.";

export const industries: { name: string; icon: LucideIcon; note: string }[] = [
  { name: "Banking", icon: Landmark, note: "Regulated workforce and pay processes" },
  {
    name: "Financial Services",
    icon: LineChart,
    note: "Compliance-heavy, data-intensive operations",
  },
  { name: "Healthcare", icon: HeartPulse, note: "Complex scheduling, credentialing and workforce" },
  { name: "Life Sciences", icon: FlaskConical, note: "Validated processes and global teams" },
  { name: "Retail", icon: ShoppingBag, note: "Large hourly workforces and seasonal peaks" },
  { name: "Manufacturing", icon: Factory, note: "Multi-site operations and shift patterns" },
  { name: "Oil, Gas & Energy", icon: Fuel, note: "Field workforces and remote operations" },
  {
    name: "Professional Services",
    icon: Briefcase,
    note: "Project-based staffing and utilization",
  },
  { name: "Technology", icon: Cpu, note: "Fast growth and frequent change" },
  { name: "Real Estate", icon: Building2, note: "Distributed portfolios and property teams" },
];

/* ---------------------------------------------------------------------------------------------- */
/* Delivery approach                                                                               */
/* ---------------------------------------------------------------------------------------------- */

export const approach: (TitledText & { detail: string[] })[] = [
  {
    title: "Discover",
    text: "Understand the business challenge.",
    detail: ["Stakeholder interviews", "Process & data mapping", "Success measures agreed"],
  },
  {
    title: "Architect",
    text: "Design the right solution.",
    detail: ["Solution & data architecture", "Security & governance", "Build-vs-buy decisions"],
  },
  {
    title: "Build",
    text: "Develop and integrate the technology.",
    detail: ["Iterative sprints & demos", "Integrations & testing", "AI evaluation suites"],
  },
  {
    title: "Deploy",
    text: "Deliver production-ready solutions.",
    detail: ["Automated deployment", "Training & change enablement", "Monitoring from day one"],
  },
  {
    title: "Evolve",
    text: "Continuously improve and optimize.",
    detail: ["Usage & quality analytics", "Release management", "Roadmap for what’s next"],
  },
];

/* ---------------------------------------------------------------------------------------------- */
/* Careers (from /join-us/)                                                                        */
/* ---------------------------------------------------------------------------------------------- */

export const careers = {
  eyebrow: "Careers",
  headline: "Build what’s next with us.",
  intro:
    "Join our mission at Irvine Consolidated, where we're not just building a team; we're cultivating a community of the best and brightest. That now includes AI engineers, software developers and data specialists alongside the Workday consultants we’ve always been known for.",
  pitch:
    "If you're passionate about making a difference, eager to innovate, and ready to be recognized as an ambassador of excellence, your next career milestone awaits.",
  benefits: [
    {
      title: "Market-Beating Salary",
      text: "We believe in rewarding our team for their expertise and effort with top-tier base salaries and bonuses.",
    },
    {
      title: "100% Remote Work",
      text: "As a remote company, we embrace work-life balance with flexible hours, generous paid time off plans, and a monthly cell phone & internet allowance.",
    },
    {
      title: "Retirement Savings",
      text: "Invest in your future with our match on your 401k contributions (traditional and ROTH options).",
    },
    {
      title: "Comprehensive Benefits",
      text: "Our nationwide insurance plans ensure you and your family are always covered, wherever you may be, without surcharges.",
    },
  ] satisfies TitledText[],
  disciplines: [
    "AI & machine learning engineering",
    "Software & cloud engineering",
    "Data engineering & analytics",
    "Workday functional consulting",
    "Workday integrations & Extend",
    "Project & change management",
  ],
  talentNetwork:
    "Are you ready to take the next step in your career with a company that values your expertise and supports your professional growth? Join our talent network and tell us about the work you want to do.",
};
