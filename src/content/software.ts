import { Code2, LayoutDashboard, GitBranch, Network, Cloud, Database } from "lucide-react";
import type { CapabilityService, TitledText } from "@/types/content";

/*
 * Software & Workflows practice. Positioning copy describing capabilities.
 * The one historical proof point (Reward My Team) is sourced from the legacy site.
 */

export const softwareOverview = {
  eyebrow: "Software & Workflows",
  headline: "From business requirements to production software.",
  intro:
    "We are engineers first. Irvine Consolidated designs, builds and delivers custom applications, intelligent workflows and connected enterprise systems that solve real business challenges.",
  /** Used by the homepage software section. */
  proof: {
    title: "We ship products, not just projects.",
    text: "In 2025 our team designed, built and presented Reward My Team in a 24-hour Built on Workday Innovation Challenge, and won. We then took it through to a production app on the Workday Marketplace.",
    href: "/enterprise-solutions/reward-my-team/",
    cta: "See the product",
  },
};

/** Layers of one end-to-end business solution, top to bottom (drawn on the overview page). */
export const solutionLayers = [
  { title: "Interfaces & applications", text: "What people use, on web and mobile." },
  { title: "Business logic & workflows", text: "The rules, approvals and routing." },
  { title: "APIs & enterprise integrations", text: "Connections to the systems you run." },
  { title: "Data & analytics", text: "Pipelines, models and reporting." },
  { title: "Cloud infrastructure & security", text: "Hosting, access control and monitoring." },
];

/** The six services, grouped into three capabilities. Each `services` entry is a service slug. */
export const softwareCapabilities = [
  {
    id: "applications",
    title: "Applications & Platforms",
    text: "Custom business applications and enterprise platforms, from internal operational tools to scalable customer-facing software. Architecture, user experience, development, cloud infrastructure and production deployment, handled by one team.",
    covers: ["Custom software", "Enterprise applications", "Cloud-native platforms"],
    services: ["custom-software", "enterprise-applications", "cloud-applications"],
  },
  {
    id: "workflows",
    title: "Workflows & Automation",
    text: "Manual processes turned into structured, automated workflows. From requests and approvals to complex multi-step operations, we build systems that connect people, processes and business rules.",
    covers: [
      "Business process automation",
      "Workflow management",
      "Forms and data capture",
      "Process analytics",
    ],
    services: ["workflow-automation"],
  },
  {
    id: "integration",
    title: "Systems & Data Integration",
    text: "Enterprise systems connected, data pipelines made reliable, and the integration foundations that let business applications operate as one environment.",
    covers: [
      "API development",
      "Enterprise integrations",
      "Data pipelines",
      "Data engineering",
      "Reporting and analytics",
    ],
    services: ["systems-integration", "data-engineering"],
  },
];

/** Delivery lifecycle shown on the Software & Workflows overview. */
export const lifecycle: TitledText[] = [
  { title: "Discovery", text: "Requirements, users and business processes." },
  { title: "Architecture", text: "Solution, integrations, data and infrastructure." },
  { title: "Design", text: "User flows, interfaces and prototypes." },
  { title: "Development", text: "The application and its business logic." },
  { title: "Integration", text: "Existing platforms and systems, connected." },
  { title: "Deployment", text: "Release, monitor and secure production." },
  { title: "Maintenance", text: "Support, optimize and evolve." },
];

export const softwareServices: CapabilityService[] = [
  {
    slug: "custom-software",
    href: "/software-workflows/#applications",
    name: "Custom Software Development",
    short: "End-to-end design and build of business software.",
    icon: Code2,
    eyebrow: "Custom Software Development",
    headline: "Software shaped around how your business actually works.",
    intro:
      "When off-the-shelf tools force your teams into workarounds, custom software removes them. We design and build applications around your processes, data and users, and we stay accountable from the first workshop through to production support.",
    challenge: {
      title: "Spreadsheets and workarounds are holding processes together.",
      text: "Critical work runs on email threads, shared spreadsheets and manual hand-offs between systems. It’s slow, error-prone and impossible to see at a glance.",
    },
    capabilities: [
      {
        title: "End-to-end software development",
        text: "One team from discovery and design through development, testing and deployment.",
      },
      {
        title: "Internal business tools",
        text: "Purpose-built tools for operations, finance, HR and service teams that replace spreadsheets and email.",
      },
      {
        title: "Product engineering",
        text: "Commercial-grade applications and marketplace apps with multi-tenant architecture.",
      },
      {
        title: "Quality engineering",
        text: "Automated testing, code review and security scanning built into every delivery cycle.",
      },
    ],
    useCases: [
      {
        title: "Approval portals",
        text: "Structured requests, routing and approvals with a full audit trail.",
      },
      {
        title: "Operational dashboards",
        text: "Live views of work in progress, SLAs and exceptions.",
      },
      {
        title: "Partner and customer portals",
        text: "Secure self-service access to information and requests.",
      },
    ],
    flow: [
      { label: "Discover", detail: "Requirements & success measures" },
      { label: "Design", detail: "Prototype & validate" },
      { label: "Build", detail: "Iterative sprints" },
      { label: "Ship", detail: "Automated deployment" },
      { label: "Support", detail: "Monitor & improve" },
    ],
    outcomes: [
      { title: "Fit to process", text: "Software that matches how work really happens." },
      {
        title: "Fewer workarounds",
        text: "Spreadsheets and email chains replaced by a system of record.",
      },
      { title: "Ownership", text: "Documented code and architecture you own outright." },
    ],
    faqs: [
      {
        q: "Who owns the code?",
        a: "You do. We deliver documented source code, infrastructure definitions and runbooks as part of every engagement.",
      },
      {
        q: "How do you estimate cost?",
        a: "Discovery produces a scoped backlog and architecture. We then estimate in phases, so you can fund the most valuable release first.",
      },
    ],
    serviceType: "Custom software development",
  },
  {
    slug: "enterprise-applications",
    href: "/software-workflows/#applications",
    name: "Enterprise Applications",
    short: "Scalable web applications for the enterprise.",
    icon: LayoutDashboard,
    eyebrow: "Enterprise Web Applications",
    headline: "Enterprise-grade applications that people want to use.",
    intro:
      "We build secure, scalable web applications with modern, accessible interfaces, integrated with your identity provider and core systems. We also modernize legacy applications, so you keep the business logic and lose the technical debt.",
    challenge: {
      title: "Legacy apps are hard to change and harder to use.",
      text: "Aging applications slow down every change request, frustrate users and carry security risk. Rewriting from scratch feels risky, while standing still costs more every year.",
    },
    capabilities: [
      {
        title: "Enterprise web applications",
        text: "Responsive, accessible applications with role-based access, audit trails and SSO.",
      },
      {
        title: "Application modernization",
        text: "Incremental re-platforming of legacy systems to modern, cloud-ready architecture.",
      },
      {
        title: "Design systems",
        text: "Reusable component libraries that keep large application estates consistent.",
      },
      {
        title: "Performance and accessibility",
        text: "Fast load times and WCAG-aligned interfaces as a standard, not an add-on.",
      },
    ],
    useCases: [
      {
        title: "Case management",
        text: "Track and resolve complex cases across teams and systems.",
      },
      {
        title: "Planning tools",
        text: "Collaborative planning and forecasting beyond spreadsheet limits.",
      },
      {
        title: "Legacy replacement",
        text: "Move an aging internal app to a modern stack, one module at a time.",
      },
    ],
    flow: [
      { label: "Assess", detail: "Current app & constraints" },
      { label: "Architect", detail: "Target design & migration" },
      { label: "Build", detail: "Modules in priority order" },
      { label: "Migrate", detail: "Data & users, safely" },
      { label: "Retire", detail: "Decommission legacy" },
    ],
    outcomes: [
      { title: "Faster change", text: "Modern architecture that is quicker to extend." },
      { title: "Better adoption", text: "Interfaces designed with and for real users." },
      { title: "Reduced risk", text: "Supported, patched and observable platforms." },
    ],
    faqs: [
      {
        q: "Do we have to replace everything at once?",
        a: "No. We favor incremental modernization, replacing a system piece by piece so the business keeps running throughout.",
      },
    ],
    serviceType: "Enterprise web application development and modernization",
  },
  {
    slug: "workflow-automation",
    href: "/software-workflows/#workflows",
    name: "Workflow Automation",
    short: "Workflow management and process automation.",
    icon: GitBranch,
    eyebrow: "Workflow Management & Automation",
    headline: "Turn manual processes into managed workflows.",
    intro:
      "We design and build workflow management systems that route work to the right people, enforce business rules, integrate with your systems and give leaders real-time visibility. Where AI adds value, we build it in.",
    challenge: {
      title: "Work gets lost between people and systems.",
      text: "Requests sit in inboxes, approvals stall, and nobody can say where a case is or why it’s late. Manual processes don’t scale and can’t be audited.",
    },
    capabilities: [
      {
        title: "Workflow management systems",
        text: "Configurable routing, approvals, SLAs and escalations for any multi-step process.",
      },
      {
        title: "Business process automation",
        text: "Automated hand-offs, notifications and system updates triggered by real events.",
      },
      {
        title: "Forms and data capture",
        text: "Structured, validated intake that replaces email and spreadsheets.",
      },
      {
        title: "Process analytics",
        text: "Cycle times, bottlenecks and volumes, visible in real time.",
      },
    ],
    useCases: [
      {
        title: "Bulk payments and rewards",
        text: "Initiate, approve and process payments in bulk with a full audit trail.",
      },
      {
        title: "Procurement requests",
        text: "Intake, approval and purchase-order creation in one flow.",
      },
      {
        title: "Access requests",
        text: "Request, approve and provision system access with evidence.",
      },
    ],
    flow: [
      { label: "Intake", detail: "Forms, email, API" },
      { label: "Route", detail: "Rules & assignment" },
      { label: "Approve", detail: "Delegation & SLAs" },
      { label: "Execute", detail: "System updates" },
      { label: "Report", detail: "Audit & analytics" },
    ],
    outcomes: [
      { title: "Shorter cycle times", text: "Work moves automatically between steps." },
      { title: "Accountability", text: "Every step has an owner and a timestamp." },
      { title: "Compliance", text: "Rules enforced consistently, with evidence on file." },
    ],
    faqs: [
      {
        q: "Do you build on a platform or from scratch?",
        a: "Both. We recommend the approach that fits. Sometimes that means extending a platform you own, such as Workday Extend, and sometimes it means a purpose-built application.",
      },
    ],
    serviceType: "Workflow management systems and business process automation",
  },
  {
    slug: "systems-integration",
    href: "/software-workflows/#integration",
    name: "Systems Integration",
    short: "APIs and enterprise integration architecture.",
    icon: Network,
    eyebrow: "API Development & Systems Integration",
    headline: "Connected systems, one reliable flow of data.",
    intro:
      "Integration has been central to our work for a decade, across HR, payroll, finance and benefits systems. We design integration architecture, build APIs and orchestrations, and keep data flowing accurately between the platforms your business depends on.",
    challenge: {
      title: "Disconnected systems mean duplicate work and bad data.",
      text: "When systems don’t talk to each other, people re-key data, files fail silently and reports disagree. Point-to-point integrations become brittle and expensive to maintain.",
    },
    capabilities: [
      {
        title: "Integration architecture",
        text: "Patterns, standards and platform choices for a maintainable integration estate.",
      },
      {
        title: "API development",
        text: "Secure, documented REST and GraphQL APIs with versioning and monitoring.",
      },
      {
        title: "Orchestrations and data conversion",
        text: "Multi-step data flows, transformations and migrations between platforms.",
      },
      {
        title: "Vendor and carrier integrations",
        text: "File and API integrations with payroll providers, benefits carriers and partners.",
      },
    ],
    useCases: [
      {
        title: "HR-to-payroll",
        text: "Reliable worker and pay data flow between HCM and payroll.",
      },
      { title: "Benefits carriers", text: "Enrollment feeds that meet carrier specifications." },
      {
        title: "Finance consolidation",
        text: "Ledger and spend data from multiple systems into one view.",
      },
    ],
    flow: [
      { label: "Source", detail: "System of record" },
      { label: "Extract", detail: "API, event or file" },
      { label: "Transform", detail: "Map, validate, enrich" },
      { label: "Deliver", detail: "Target systems" },
      { label: "Monitor", detail: "Alerts & reconciliation" },
    ],
    outcomes: [
      { title: "Accurate data", text: "One version of the truth across systems." },
      { title: "Less re-keying", text: "Automated flows replace manual transfers." },
      { title: "Resilience", text: "Monitored integrations that fail loudly, not silently." },
    ],
    faqs: [
      {
        q: "Can you take over integrations another team built?",
        a: "Yes. We start with an integration audit, document what exists and stabilize it before making improvements.",
      },
    ],
    serviceType: "API development and enterprise systems integration",
  },
  {
    slug: "cloud-applications",
    href: "/software-workflows/#applications",
    name: "Cloud Applications",
    short: "Cloud-native architecture and deployment.",
    icon: Cloud,
    eyebrow: "Cloud-Native Applications",
    headline: "Cloud-native by design, not by migration.",
    intro:
      "We architect and build applications that take full advantage of the cloud: scalable, resilient, secure and cost-aware. Infrastructure is defined as code, deployments are automated and production is observable from day one.",
    challenge: {
      title: "Lift-and-shift rarely delivers the promised benefits.",
      text: "Moving an application to the cloud without re-thinking its architecture often raises cost without improving scale, resilience or speed of change.",
    },
    capabilities: [
      {
        title: "Cloud architecture",
        text: "Serverless, container and managed-service designs matched to the workload.",
      },
      {
        title: "Infrastructure as code",
        text: "Repeatable, reviewable environments with automated provisioning.",
      },
      {
        title: "CI/CD and DevOps",
        text: "Automated build, test and deployment pipelines with safe rollbacks.",
      },
      {
        title: "Security and cost management",
        text: "Identity, secrets, network controls and cost monitoring built into the platform.",
      },
    ],
    useCases: [
      {
        title: "New cloud products",
        text: "Greenfield applications designed for scale from day one.",
      },
      {
        title: "Re-platforming",
        text: "Move workloads to managed services to cut operational overhead.",
      },
      {
        title: "AI workloads",
        text: "Hosting for models, vector stores and AI services in your tenancy.",
      },
    ],
    flow: [
      { label: "Design", detail: "Architecture & cost model" },
      { label: "Provision", detail: "Infrastructure as code" },
      { label: "Deploy", detail: "CI/CD pipelines" },
      { label: "Observe", detail: "Logs, metrics, traces" },
      { label: "Optimize", detail: "Cost & performance" },
    ],
    outcomes: [
      { title: "Elastic scale", text: "Capacity that follows demand." },
      { title: "Faster releases", text: "Automated pipelines make change routine." },
      { title: "Cost visibility", text: "Spend tracked and tuned continuously." },
    ],
    faqs: [
      {
        q: "Which cloud do you work with?",
        a: "We work across AWS, Microsoft Azure and Google Cloud, and we design around the platform your organization has standardized on.",
      },
    ],
    serviceType: "Cloud-native application development",
  },
  {
    slug: "data-engineering",
    href: "/software-workflows/#integration",
    name: "Data Engineering & Analytics",
    short: "Pipelines, reporting and analytics foundations.",
    icon: Database,
    eyebrow: "Data Engineering & Analytics",
    headline: "Trusted data, ready for reporting and AI.",
    intro:
      "Good AI and good decisions both start with good data. We build the pipelines, models and reporting layers that turn scattered operational data into trusted, governed and usable information.",
    challenge: {
      title: "Reports disagree and nobody trusts the numbers.",
      text: "Data is spread across systems with different definitions. Analysts spend more time reconciling than analyzing, and AI initiatives stall on poor data quality.",
    },
    capabilities: [
      {
        title: "Data pipelines",
        text: "Reliable batch and streaming pipelines from operational systems into your data platform.",
      },
      {
        title: "Data modeling",
        text: "Clear, documented models with shared business definitions.",
      },
      {
        title: "Reporting and analytics",
        text: "Dashboards and self-service analytics built on governed data.",
      },
      {
        title: "Data quality and governance",
        text: "Validation, lineage and ownership, so data can be trusted and audited.",
      },
    ],
    useCases: [
      {
        title: "Workforce analytics",
        text: "Headcount, compensation and turnover insight from HR data.",
      },
      { title: "Operational reporting", text: "Daily views of volumes, SLAs and exceptions." },
      {
        title: "AI-ready data",
        text: "Clean, documented datasets for retrieval and model features.",
      },
    ],
    flow: [
      { label: "Ingest", detail: "Systems & files" },
      { label: "Clean", detail: "Validate & standardize" },
      { label: "Model", detail: "Shared definitions" },
      { label: "Serve", detail: "BI, apps & AI" },
    ],
    outcomes: [
      { title: "One version of the truth", text: "Consistent definitions across reports." },
      { title: "Faster insight", text: "Less time reconciling, more time analyzing." },
      { title: "AI readiness", text: "Data foundations that AI initiatives can build on." },
    ],
    faqs: [
      {
        q: "Do you work with Workday reporting?",
        a: "Yes. Reporting and analytics is a core part of our Workday post-implementation practice, and we can extend Workday data into broader analytics platforms.",
      },
    ],
    serviceType: "Data engineering and analytics",
  },
];

export function getSoftwareService(slug: string) {
  return softwareServices.find((s) => s.slug === slug);
}
