import { Rocket, LifeBuoy, Wrench, Package } from "lucide-react";
import type { TitledText, WorkdayService } from "@/types/content";
import { site } from "@/constants/site";

/*
 * Enterprise Solutions: the established Workday practice.
 * Offering names are preserved verbatim from irvineconsolidated.com/service/*.
 * Descriptions are expanded from the 2024/2025 press releases and the company one-pager.
 */

export const enterpriseOverview = {
  eyebrow: "Enterprise Solutions",
  headline: "A decade of enterprise expertise. Built for what’s next.",
  intro:
    "From enterprise implementations and ongoing optimization to connected business systems and custom applications, Irvine Consolidated helps organizations get more from the technology that powers their operations.",
  /** Retained from the previous overview: the story of the Workday practice inside the wider firm. */
  practiceNote:
    "Since 2015, Irvine Consolidated has helped organizations get the most from Workday, with services spanning first activation, ongoing optimization and custom applications. That practice is as strong as ever. Today it also gives our AI and software teams something rare: deep, hands-on knowledge of the enterprise systems that intelligent solutions need to work with.",
  legacyIntro:
    "Fueled by a commitment to excellence and a drive for continuous innovation, we’re more than just a partner — we’re your catalyst for forward progress. From day one, we’re by your side, delivering the guidance, expertise, and tools you need to make your Workday journey seamless, productive, and truly transformative.",
  oneTeam:
    "Whether you’re managing Human Capital, building with Extend, launching Built on Workday apps, or driving smarter decisions through advanced analytics, we bring innovative, tailored solutions that meet you where you are and move with you as your needs evolve.",
};

/** "How We Partner Across the Workday Journey" (preserved from /services/ and Workday Rising pages). */
export const workdayJourney: TitledText[] = [
  { title: "Align", text: "Strategic guidance for every phase." },
  { title: "Build", text: "Stable foundations to grow upon." },
  { title: "Launch", text: "Implementations that fuel your future." },
  { title: "Enable", text: "Support that empowers your team." },
];

/** Verified milestones, oldest first. */
export const credentials: { label: string; detail: string; date: string; href?: string }[] = [
  {
    label: "Founded",
    detail: "Irvine Consolidated is founded.",
    date: "2015",
  },
  {
    label: "Workday Referral Partner",
    detail: "Announced a referral partnership with Workday.",
    date: "July 2024",
    href: "/insights/irvine-consolidated-named-workday-referral-partner/",
  },
  {
    label: "Built on Workday Innovation Challenge winner",
    detail:
      "Won the challenge in Santa Clara (hosted by AWS) by building Reward My Team in 24 hours.",
    date: "January 2025",
    href: "/insights/irvine-consolidated-launches-award-winning-reward-my-team-app-on-workday-marketplace/",
  },
  {
    label: "Reward My Team Marketplace launch",
    detail: "Reward My Team (Bulk One-Time Payments) launched on the Workday Marketplace.",
    date: "February 2025",
    href: "/enterprise-solutions/reward-my-team/",
  },
  {
    label: "Workday Services Partner",
    detail:
      "Designated a Workday Services Partner, expanding into full deployment and lifecycle services.",
    date: "April 2025",
    href: "/insights/irvine-consolidated-named-workday-services-partner/",
  },
];

/** The three capabilities that organise the Enterprise Solutions overview. */
export const enterpriseCapabilities: {
  id: string;
  title: string;
  line: string;
  text: string;
  covers: string[];
  href: string;
  cta: string;
}[] = [
  {
    id: "transformation",
    title: "Enterprise Transformation",
    line: "Implement and modernize the enterprise platforms that support your organization.",
    text: "Structured implementations, thoughtful architecture and business-aligned programs.",
    covers: [
      "Workday GO Activations",
      "Phase 1 & Phase X",
      "Implementation Advisory",
      "Project Management",
    ],
    href: "/enterprise-solutions/implementation-services/",
    cta: "Implementation services",
  },
  {
    id: "operations",
    title: "Enterprise Operations & Optimization",
    line: "Maintain, support, secure and improve the technology your business depends on.",
    text: "Continuous attention that keeps platforms reliable, current and well configured.",
    covers: [
      "Post-Production Support",
      "Security Audits",
      "Tenant Optimization",
      "Release Management",
      "Reporting & Analytics",
    ],
    href: "/enterprise-solutions/post-implementation/",
    cta: "Support & optimization",
  },
  {
    id: "integration",
    title: "Enterprise Integration & Extension",
    line: "Connect systems, extend platforms and enable new business capabilities.",
    text: "Applications, integrations and orchestrations that make business systems work together.",
    covers: [
      "Workday Extend",
      "Built on Workday apps",
      "Integration Architecture",
      "Orchestrations",
      "Data Conversion",
    ],
    href: "/enterprise-solutions/technical-services/",
    cta: "Technical services",
  },
];

/** "How We Partner": the ongoing relationship, from first conversation to continuous improvement. */
export const partnerSteps: TitledText[] = [
  { title: "Align", text: "Understand business objectives and enterprise requirements." },
  { title: "Build", text: "Establish and configure the right technology foundations." },
  { title: "Launch", text: "Implement and deliver enterprise solutions." },
  { title: "Evolve", text: "Support, optimize and extend systems as business needs change." },
];

/** Reward My Team benefits shown on the overview showcase. */
export const productHighlights = [
  "Simplified bulk payment initiation",
  "Streamlined approvals",
  "Improved governance and auditability",
  "Reduced manual processing",
];

export const workdayServices: WorkdayService[] = [
  {
    slug: "implementation-services",
    href: "/enterprise-solutions/implementation-services/",
    pageTitle: "Enterprise Implementation Services",
    name: "Implementation Services",
    short: "Workday deployments, from GO activations to Phase X.",
    icon: Rocket,
    headline: "Implementations that fuel your future.",
    intro:
      "As a Workday Services Partner, we deliver end-to-end deployments designed for seamless integration and rapid adoption of Workday’s finance and human resources solutions. Together with you, we lay a stable, sustainable foundation to build on.",
    stages: ["Align", "Build", "Launch"],
    offerings: [
      {
        title: "Workday GO Activations",
        text: "Accelerated deployments for midsize organizations using Workday’s prescriptive GO approach.",
      },
      {
        title: "Phase 1 Implementation",
        text: "Your initial Workday deployment, from design and configuration through testing and go-live.",
      },
      {
        title: "Phase X Implementation",
        text: "Adding new Workday products and functional areas once your core deployment is live.",
      },
      {
        title: "Implementation Advisory",
        text: "Independent, experienced guidance to keep your implementation aligned to business goals.",
      },
      {
        title: "Project Management",
        text: "Planning, governance, risk management and status reporting from kickoff to go-live.",
      },
      {
        title: "Net New Integrations",
        text: "New integrations between Workday and your payroll providers, carriers and business systems.",
      },
    ],
    serviceType: "Workday implementation services",
  },
  {
    slug: "post-implementation",
    href: "/enterprise-solutions/post-implementation/",
    pageTitle: "Enterprise Support & Optimization",
    name: "Post-Implementation Services",
    short: "Lifecycle support, optimization and staff augmentation.",
    icon: LifeBuoy,
    headline: "Support that empowers your team.",
    intro:
      "After go-live, we provide continuous support that helps organizations optimize their Workday platforms and manage regular updates and bi-annual releases. Engage us for a specific report or for ongoing, comprehensive support. Either way, we address immediate needs and set the stage for sustained success.",
    stages: ["Enable"],
    offerings: [
      {
        title: "Post Production Services",
        text: "Day-to-day production support for configuration, business processes and issues.",
      },
      {
        title: "Staff Augmentation",
        text: "Experienced Workday consultants who extend your team for as long as you need them.",
      },
      {
        title: "Annual Projects",
        text: "Support for recurring cycles such as open enrollment, compensation reviews and year-end.",
      },
      {
        title: "Change Enablement",
        text: "Training, communications and adoption support that help people get value from Workday.",
      },
      {
        title: "Security Audit",
        text: "Review of security groups, roles and access to reduce risk and support compliance.",
      },
      {
        title: "Tenant Optimization",
        text: "Clean up configuration, simplify business processes and automate manual steps.",
      },
      {
        title: "Release Management",
        text: "Assess, test and adopt Workday’s bi-annual releases with confidence.",
      },
      {
        title: "Review & Recommend",
        text: "An expert review of your tenant with prioritized, practical recommendations.",
      },
      {
        title: "Reporting & Analytics",
        text: "Custom reports, dashboards and analytics that turn Workday data into decisions.",
      },
    ],
    serviceType: "Workday post-implementation support and optimization",
  },
  {
    slug: "technical-services",
    href: "/enterprise-solutions/technical-services/",
    pageTitle: "Workday Technical Services",
    name: "Technical Services",
    short: "Extend, integrations, orchestrations and data conversion.",
    icon: Wrench,
    headline: "Engineering on and around Workday.",
    intro:
      "Our technical team builds what configuration alone can’t: custom applications with Workday Extend, Built on Workday apps, integration architecture, orchestrations and data conversion. This is where our Workday practice and our software engineering practice meet.",
    stages: ["Build", "Launch"],
    offerings: [
      {
        title: "Workday Extend",
        text: "Custom applications built inside Workday, using its data, security and user experience.",
      },
      {
        title: "Built on Workday Apps",
        text: "Marketplace-ready applications such as our own Reward My Team, designed for any Workday customer.",
      },
      {
        title: "Integration Architecture",
        text: "Patterns and standards for a reliable, maintainable Workday integration estate.",
      },
      {
        title: "Orchestrations",
        text: "Multi-step automated flows that coordinate Workday with other systems.",
      },
      {
        title: "Data Conversion",
        text: "Accurate migration of historical and legacy data into Workday.",
      },
    ],
    serviceType: "Workday Extend, integrations and technical services",
  },
  {
    slug: "reward-my-team",
    href: "/enterprise-solutions/reward-my-team/",
    pageTitle: "Reward My Team",
    name: "Workday Products",
    short: "Bulk One-Time Payments (Reward My Team) on the Marketplace.",
    icon: Package,
    headline: "Bulk One-Time Payments, built on Workday.",
    intro:
      "Bulk One-Time Payments is Irvine Consolidated’s flagship Built on Workday app. It is designed to streamline spot bonuses, peer recognition and manager-driven rewards, all within Workday. It is available on the Workday Marketplace as Reward My Team.",
    stages: ["Build"],
    offerings: [
      {
        title: "Streamlined Workforce Operations",
        text: "Automate bulk one-time payment processes to reduce administrative burden and free up HR resources for strategic initiatives.",
      },
      {
        title: "Stronger Governance",
        text: "Enhance oversight and auditability of payments, ensuring policy compliance and reducing organizational risk.",
      },
      {
        title: "Managerial Empowerment",
        text: "Offer an intuitive, self-service interface that simplifies approvals and promotes accountability across leadership.",
      },
      {
        title: "Data Integrity & Accuracy",
        text: "Eliminate spreadsheet dependency and manual errors with a secure, integrated solution aligned with enterprise standards.",
      },
      {
        title: "Strategic HR Value",
        text: "Accelerate efficiency while enabling timely recognition and rewards — key to retention, engagement, and organizational culture.",
      },
    ],
    serviceType: "Built on Workday application for bulk one-time payments",
  },
];

/** Feature list from the February 2025 launch announcement. */
export const productFeatures: TitledText[] = [
  {
    title: "Flexible Payment Configuration",
    text: "Set up one-time payment plans with customizable parameters to align with business objectives.",
  },
  {
    title: "Bulk Payment Initiation",
    text: "Managers can reward teams instantly without manual processing.",
  },
  {
    title: "Effortless Approval Workflow",
    text: "Approvers can review, approve, or deny one-time payments in bulk, cutting administrative burden.",
  },
  {
    title: "Automated Approvals",
    text: "Payments are processed automatically upon approval, eliminating additional steps.",
  },
  {
    title: "Improved Oversight & Compliance",
    text: "Track, control, and ensure clarity in one-time payments with a secure, integrated process.",
  },
  {
    title: "Increased Efficiency & Recognition",
    text: "Save valuable time, reduce errors, and enhance employee satisfaction through seamless team rewards.",
  },
];

export const productLinks = {
  marketplace: site.marketplaceUrl,
  demo: site.productDemoUrl,
};

/** Topics Chris Irvine covers in consultations (preserved from /schedule-a-consultation/). */
export const consultationTopics = [
  "Client Advocacy",
  "Phase X Implementation",
  "Production Support",
  "Tenant Optimization",
];

export function getWorkdayService(slug: string) {
  return workdayServices.find((s) => s.slug === slug);
}
