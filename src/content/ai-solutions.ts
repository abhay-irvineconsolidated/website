import { BrainCircuit, Bot, Workflow, Sparkles, Cable, Compass } from "lucide-react";
import type { CapabilityService } from "@/types/content";

/*
 * AI Solutions practice. Positioning copy: it describes what Irvine Consolidated designs and builds.
 * It intentionally makes no historical client claims or performance figures.
 */

export const aiOverview = {
  eyebrow: "AI Solutions",
  headline: "AI that does real work inside your business.",
  intro:
    "We design, build and deploy AI systems that understand your business, connect to your existing platforms and turn complex operations into intelligent, automated workflows.",
  principles: [
    {
      title: "Grounded in your data",
      text: "Models answer from your policies, records and systems of record, with sources cited, rather than from general internet knowledge.",
    },
    {
      title: "Humans stay in the loop",
      text: "Approvals, escalation paths and audit trails are designed in from the start, so automation stays accountable.",
    },
    {
      title: "Built for production",
      text: "Evaluation suites, observability, access control and cost monitoring ship with the first release, not the fifth.",
    },
    {
      title: "Model-agnostic",
      text: "We choose the model and hosting that fit your security, latency and cost needs, and we architect so you can switch later.",
    },
  ],
};

export const aiServices: CapabilityService[] = [
  {
    slug: "enterprise-ai",
    href: "/ai-solutions/enterprise-ai/",
    name: "Enterprise AI",
    short: "Secure, governed AI platforms and knowledge systems.",
    icon: BrainCircuit,
    eyebrow: "Enterprise AI",
    headline: "Put your organisation’s knowledge to work.",
    intro:
      "Enterprise AI gives every team fast, accurate answers drawn from the documents, policies and systems your business already runs on. We build retrieval-augmented generation (RAG) platforms, knowledge assistants and AI services that respect permissions, cite their sources and meet enterprise security standards.",
    challenge: {
      title: "The knowledge exists. Finding it is the problem.",
      text: "Policies live in SharePoint, procedures in PDFs, answers in someone’s inbox. People lose hours searching, and they make decisions on stale or partial information. General-purpose chatbots can’t help, because they don’t know your business and can’t be trusted with it.",
    },
    capabilities: [
      {
        title: "Retrieval-augmented generation (RAG)",
        text: "Pipelines that index your content, retrieve the right passages and generate answers with citations back to the source.",
      },
      {
        title: "AI-powered knowledge management",
        text: "Unified search and question-answering across document stores, wikis, ticketing tools and HR and finance systems.",
      },
      {
        title: "Permission-aware access",
        text: "Answers respect the same access rules as the source systems, so people only see what they are entitled to see.",
      },
      {
        title: "Evaluation and quality monitoring",
        text: "Test sets, accuracy scoring and feedback loops that measure answer quality continuously, not just at launch.",
      },
      {
        title: "AI infrastructure and deployment",
        text: "Vector stores, model gateways, caching and observability, deployed in your cloud tenancy with your security controls.",
      },
    ],
    useCases: [
      {
        title: "HR and policy assistant",
        text: "Employees ask about benefits, leave or expenses and get answers grounded in current policy, with a link to the source.",
      },
      {
        title: "Operations knowledge base",
        text: "Field and support teams find procedures, specifications and past resolutions in seconds.",
      },
      {
        title: "Contract and policy search",
        text: "Legal and procurement teams search clause-level content across thousands of agreements.",
      },
    ],
    flow: [
      { label: "Sources", detail: "Docs, wikis, HRIS, ERP, tickets" },
      { label: "Ingest & index", detail: "Chunking, embeddings, metadata" },
      { label: "Retrieve", detail: "Hybrid search + permissions" },
      { label: "Generate", detail: "LLM with citations & guardrails" },
      { label: "Evaluate", detail: "Quality scoring & feedback" },
    ],
    outcomes: [
      {
        title: "Faster answers",
        text: "Less time spent searching, and fewer repeated questions to experts.",
      },
      {
        title: "Consistent information",
        text: "Everyone works from the same current source of truth.",
      },
      {
        title: "Controlled risk",
        text: "Access control, audit logs and citations make AI answers reviewable.",
      },
    ],
    faqs: [
      {
        q: "Will our data be used to train public models?",
        a: "No. We architect solutions so your content stays within your environment and is only used to answer your users’ questions. Model providers and hosting are chosen to meet your data-handling requirements.",
      },
      {
        q: "How do you prevent made-up answers?",
        a: "Answers are generated only from retrieved source passages and include citations. Evaluation suites test for unsupported claims, and the assistant is designed to say when it doesn’t know.",
      },
    ],
    serviceType: "Enterprise AI and retrieval-augmented generation solutions",
  },
  {
    slug: "ai-agents",
    href: "/ai-solutions/ai-agents/",
    name: "AI Agents",
    short: "Agentic workflows that plan, act and hand off.",
    icon: Bot,
    eyebrow: "AI Agents & Agentic Workflows",
    headline: "Agents that complete work, not just conversations.",
    intro:
      "AI agents combine language models with tools: they read a request, plan the steps, call your systems through secure APIs and hand off to a person when judgement is needed. We design agentic workflows with clear boundaries, approvals and audit trails, so they can be trusted with real operational work.",
    challenge: {
      title: "Multi-step work still runs on people copying and pasting.",
      text: "Many processes cross several systems: check a record, look up a policy, update a field, notify someone. Traditional automation breaks on the variation. Agents handle the variation, but only when they are engineered with the right guardrails.",
    },
    capabilities: [
      {
        title: "Agent design and orchestration",
        text: "Single agents and multi-agent systems with defined roles, tools and escalation paths.",
      },
      {
        title: "Tool and API integration",
        text: "Secure connectors that let agents read from and write to your business systems, with least-privilege access.",
      },
      {
        title: "Human-in-the-loop controls",
        text: "Approval steps, confidence thresholds and review queues, so people make the decisions that matter.",
      },
      {
        title: "Observability and audit",
        text: "Every plan, tool call and outcome is logged, so you can trace exactly what an agent did and why.",
      },
      {
        title: "AI-powered customer support",
        text: "Agents that triage, draft and resolve requests, escalating with full context when a human is needed.",
      },
    ],
    useCases: [
      {
        title: "Service desk triage",
        text: "Classify incoming requests, gather context from connected systems, propose a resolution and route the rest.",
      },
      {
        title: "Employee request handling",
        text: "Process routine HR and payroll requests end to end, with approval steps before anything changes.",
      },
      {
        title: "Data quality agent",
        text: "Monitor records for anomalies, explain what looks wrong and prepare corrections for review.",
      },
    ],
    flow: [
      { label: "Request", detail: "Email, chat, form or event" },
      { label: "Plan", detail: "Agent breaks work into steps" },
      { label: "Act", detail: "Tool calls to your systems" },
      { label: "Check", detail: "Guardrails & human approval" },
      { label: "Resolve", detail: "Update, notify, log" },
    ],
    outcomes: [
      { title: "Capacity back", text: "Teams spend less time on routine, multi-system tasks." },
      {
        title: "Faster resolution",
        text: "Requests move without waiting in queues for simple steps.",
      },
      { title: "Full traceability", text: "Every automated action is explainable and auditable." },
    ],
    faqs: [
      {
        q: "What stops an agent from doing something it shouldn’t?",
        a: "Agents only get the tools and permissions their role requires. Sensitive actions require approval, and every action is logged. We define these boundaries with your team before anything is built.",
      },
      {
        q: "Do agents replace our existing automation?",
        a: "Usually they complement it. Deterministic steps stay in workflow tools, and agents handle the parts that need interpretation or judgement.",
      },
    ],
    serviceType: "AI agent and agentic workflow development",
  },
  {
    slug: "intelligent-automation",
    href: "/ai-solutions/ai-agents/#intelligent-automation",
    name: "Intelligent Automation",
    short: "Business process automation with AI built in.",
    icon: Workflow,
    eyebrow: "Intelligent Automation",
    headline: "Automate the process, including the messy parts.",
    intro:
      "Intelligent automation combines workflow engines, integrations and AI to remove manual effort from end-to-end business processes. We automate the predictable steps, apply AI to unstructured inputs like documents and emails, and keep people in control of exceptions.",
    challenge: {
      title: "Rules-based automation stalls on real-world inputs.",
      text: "Invoices arrive in a dozen formats. Requests come by email. Exceptions are the norm. Classic automation needs perfectly structured data, so the hard parts stay manual.",
    },
    capabilities: [
      {
        title: "Intelligent document processing",
        text: "Extract, classify and validate data from invoices, forms, contracts and correspondence.",
      },
      {
        title: "Intelligent business process automation",
        text: "End-to-end process redesign with workflow orchestration, integrations and AI decision steps.",
      },
      {
        title: "Exception handling",
        text: "AI flags anomalies and routes exceptions to the right person with the context they need.",
      },
      {
        title: "Process discovery",
        text: "We map current processes, measure effort and identify where automation will pay back first.",
      },
    ],
    useCases: [
      {
        title: "Accounts payable",
        text: "Capture invoice data, match it to purchase orders and route discrepancies for approval.",
      },
      {
        title: "Employee onboarding",
        text: "Coordinate tasks across HR, IT and payroll systems from a single trigger.",
      },
      {
        title: "Compliance reporting",
        text: "Gather data from multiple sources, validate it and assemble reports on a schedule.",
      },
    ],
    flow: [
      { label: "Capture", detail: "Documents, email, events" },
      { label: "Understand", detail: "AI extraction & classification" },
      { label: "Decide", detail: "Rules + AI recommendations" },
      { label: "Execute", detail: "Workflow & system updates" },
      { label: "Exceptions", detail: "Routed to people with context" },
    ],
    outcomes: [
      {
        title: "Less manual entry",
        text: "Fewer re-keyed values and fewer spreadsheet hand-offs.",
      },
      {
        title: "Higher accuracy",
        text: "Validation catches errors before they reach your systems of record.",
      },
      { title: "Visible processes", text: "Every case is tracked, timed and reportable." },
    ],
    faqs: [
      {
        q: "Where should we start?",
        a: "Start with a high-volume, rules-heavy process with clear inputs and a measurable cost. Our discovery work quantifies the options so the first project has a clear business case.",
      },
      {
        q: "Can you automate processes that run in Workday?",
        a: "Yes. Our enterprise systems background means we understand Workday business processes, integrations and security, and we can automate around them safely.",
      },
    ],
    serviceType: "Intelligent business process automation and document processing",
  },
  {
    slug: "generative-ai",
    href: "/ai-solutions/generative-ai/",
    name: "Generative AI",
    short: "Custom GenAI applications and copilots.",
    icon: Sparkles,
    eyebrow: "Generative AI Applications",
    headline: "Generative AI, engineered into your products and teams.",
    intro:
      "We build generative AI applications for specific jobs: drafting, summarising, analysing and transforming content within the workflows where that work already happens. Each application is designed around a defined task, tested against real examples and measured on quality.",
    challenge: {
      title: "Generic tools produce generic results.",
      text: "Off-the-shelf chat tools don’t know your formats, your terminology or your quality bar. Teams end up rewriting the output. Purpose-built applications get it right the first time more often.",
    },
    capabilities: [
      {
        title: "Copilots for internal teams",
        text: "Assistants embedded in the tools your teams use, specialised for their tasks and data.",
      },
      {
        title: "Content generation pipelines",
        text: "Structured generation of reports, summaries, proposals and communications in your templates and tone.",
      },
      {
        title: "Prompt and context engineering",
        text: "Systematic design of instructions, examples and context to get consistent, high-quality output.",
      },
      {
        title: "Evaluation frameworks",
        text: "Golden datasets and scoring rubrics that make quality measurable and regressions visible.",
      },
    ],
    useCases: [
      {
        title: "Report drafting",
        text: "Turn raw data and notes into first-draft reports that follow your structure.",
      },
      {
        title: "Meeting and case summaries",
        text: "Summarise long threads, calls or case histories into actions and decisions.",
      },
      {
        title: "Customer communications",
        text: "Draft personalised responses that reviewers approve and send.",
      },
    ],
    flow: [
      { label: "Task", detail: "Defined job & quality bar" },
      { label: "Context", detail: "Templates, data, examples" },
      { label: "Generate", detail: "Model + structured output" },
      { label: "Review", detail: "Human edit & approval" },
      { label: "Learn", detail: "Feedback improves prompts" },
    ],
    outcomes: [
      {
        title: "Faster first drafts",
        text: "Teams start from a strong draft instead of a blank page.",
      },
      { title: "Consistent quality", text: "Output follows your standards, every time." },
      {
        title: "Measured improvement",
        text: "Evaluation shows exactly how quality changes over time.",
      },
    ],
    faqs: [
      {
        q: "Which models do you use?",
        a: "We are model-agnostic. We select from leading commercial and open models based on task quality, data requirements, latency and cost, and we architect so models can be swapped as the market moves.",
      },
    ],
    serviceType: "Generative AI application development",
  },
  {
    slug: "ai-integration",
    href: "/ai-solutions/ai-integration/",
    name: "AI Integration",
    short: "Connect AI to the systems you already run.",
    icon: Cable,
    eyebrow: "Enterprise AI Integration",
    headline: "AI is only as useful as the systems it can reach.",
    intro:
      "We connect AI capabilities to your enterprise platforms (HCM, ERP, CRM, ticketing and data warehouses) through secure, well-governed integrations. This draws on the same integration discipline we have applied to enterprise systems for a decade.",
    challenge: {
      title: "AI pilots stall at the integration layer.",
      text: "A promising prototype needs live data and the ability to act. That means authentication, data mapping, error handling and change management across systems that were never designed for AI.",
    },
    capabilities: [
      {
        title: "API and event integration",
        text: "Connect models and agents to business systems through APIs, webhooks and event streams.",
      },
      {
        title: "Model Context Protocol and tool servers",
        text: "Standardised, permissioned tool interfaces that let AI assistants work with your systems safely.",
      },
      {
        title: "Embedding AI in existing apps",
        text: "Add AI features to the applications your teams already use, rather than adding another tool.",
      },
      {
        title: "Security and governance",
        text: "Identity, secrets management, logging and data-loss controls across every AI integration.",
      },
    ],
    useCases: [
      {
        title: "AI in your HR platform",
        text: "Surface AI-generated insights and actions alongside HR and payroll data.",
      },
      {
        title: "CRM enrichment",
        text: "Summarise account history and suggest next steps directly in the CRM.",
      },
      {
        title: "Analytics assistants",
        text: "Ask questions of governed warehouse data in plain language.",
      },
    ],
    flow: [
      { label: "AI service", detail: "Model, agent or RAG" },
      { label: "Gateway", detail: "Auth, rate limits, logging" },
      { label: "Connectors", detail: "APIs, events, MCP tools" },
      { label: "Systems", detail: "HCM, ERP, CRM, data" },
    ],
    outcomes: [
      {
        title: "From pilot to production",
        text: "AI that works with live data and real processes.",
      },
      { title: "Fewer tools", text: "AI arrives where people already work." },
      { title: "Governed access", text: "One controlled layer between AI and your systems." },
    ],
    faqs: [
      {
        q: "Can AI work with Workday?",
        a: "Yes. Using Workday’s APIs, integrations and Extend capabilities, AI services can read and act on Workday data within its security model. Our Workday practice brings deep platform knowledge to these projects.",
      },
    ],
    serviceType: "Enterprise AI systems integration",
  },
  {
    slug: "ai-consulting",
    href: "/ai-solutions/ai-consulting/",
    name: "AI Strategy & Consulting",
    short: "Roadmaps, readiness and responsible AI.",
    icon: Compass,
    eyebrow: "AI Strategy & Consulting",
    headline: "Know where AI will pay off before you build.",
    intro:
      "We help leadership teams cut through the noise: identify the use cases with real return, assess data and platform readiness, set governance and build a practical roadmap. Then we deliver the roadmap with the same team.",
    challenge: {
      title: "Every vendor has an AI story. Few have a plan.",
      text: "Organisations face pressure to ‘do AI’ without a clear view of value, risk or readiness. The result is scattered pilots that never reach production.",
    },
    capabilities: [
      {
        title: "Use-case discovery and prioritisation",
        text: "Workshops and process analysis to find and rank AI opportunities by value and feasibility.",
      },
      {
        title: "Data and platform readiness",
        text: "Assessment of data quality, access, architecture and security needed for AI.",
      },
      {
        title: "AI governance and responsible use",
        text: "Policies, risk frameworks and review processes tailored to your organisation.",
      },
      {
        title: "Roadmaps and business cases",
        text: "Sequenced plans with costs, dependencies and success measures for each initiative.",
      },
    ],
    useCases: [
      {
        title: "AI opportunity assessment",
        text: "A focused engagement that ends in a prioritised, costed use-case portfolio.",
      },
      {
        title: "Governance framework",
        text: "Practical AI policies and approval workflows your teams can follow.",
      },
      {
        title: "Proof of value",
        text: "A time-boxed build that tests the highest-priority use case with real data.",
      },
    ],
    flow: [
      { label: "Discover", detail: "Goals, processes, pain points" },
      { label: "Assess", detail: "Data, platforms, risk" },
      { label: "Prioritise", detail: "Value vs. feasibility" },
      { label: "Roadmap", detail: "Sequenced, costed plan" },
      { label: "Prove", detail: "Proof of value build" },
    ],
    outcomes: [
      {
        title: "Clear priorities",
        text: "Investment goes to the use cases most likely to pay back.",
      },
      { title: "Managed risk", text: "Governance is in place before AI reaches users." },
      { title: "Momentum", text: "A path from strategy to a working first release." },
    ],
    faqs: [
      {
        q: "Do we need perfect data before starting with AI?",
        a: "No. Most organisations start with the data they have. A readiness assessment shows which use cases are viable now and what to improve for the next wave.",
      },
    ],
    serviceType: "AI strategy, readiness and governance consulting",
  },
];

export function getAiService(slug: string) {
  return aiServices.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------------------------------------
 * Overview narrative. The long-form service content above is unchanged and lives on the detail
 * pages; the overview only tells the connected story and links down to them.
 * ---------------------------------------------------------------------------------------------- */

/** The five detail pages. The six services map onto them (agents and automation share one page). */
export const aiPages = [
  {
    slug: "enterprise-ai",
    href: "/ai-solutions/enterprise-ai/",
    title: "Enterprise AI & Knowledge Systems",
    short: "Knowledge assistants, RAG platforms and document intelligence.",
    services: ["enterprise-ai"],
  },
  {
    slug: "ai-agents",
    href: "/ai-solutions/ai-agents/",
    title: "AI Agents & Intelligent Automation",
    short: "Agents and intelligent workflows that move work forward.",
    services: ["ai-agents", "intelligent-automation"],
  },
  {
    slug: "generative-ai",
    href: "/ai-solutions/generative-ai/",
    title: "Generative AI Applications",
    short: "Copilots and custom generative AI inside your applications.",
    services: ["generative-ai"],
  },
  {
    slug: "ai-integration",
    href: "/ai-solutions/ai-integration/",
    title: "AI Integration & Engineering",
    short: "Integration, deployment and governance for production AI.",
    services: ["ai-integration"],
  },
  {
    slug: "ai-consulting",
    href: "/ai-solutions/ai-consulting/",
    title: "AI Strategy & Consulting",
    short: "Use cases, readiness, governance and roadmaps.",
    services: ["ai-consulting"],
  },
] as const;

export type AiPage = (typeof aiPages)[number];

export function getAiPage(slug: string): AiPage | undefined {
  return aiPages.find((p) => p.slug === slug);
}

/** The operating model: five connected layers, with controls running underneath all of them. */
export const operatingModel = {
  layers: [
    {
      title: "Business information",
      tag: "Your business",
      items: "Documents, emails, databases, knowledge bases, ERP, CRM and HR systems.",
    },
    {
      title: "Enterprise intelligence",
      tag: "Enterprise Intelligence",
      items: "RAG, knowledge retrieval, generative AI, document understanding and reasoning.",
    },
    {
      title: "Agents & orchestration",
      tag: "AI Agents & Automation",
      items: "AI agents, planning, tool usage, decision logic and workflow coordination.",
    },
    {
      title: "Enterprise integration",
      tag: "AI Engineering & Integration",
      items: "APIs, business applications, enterprise systems and data platforms.",
    },
    {
      title: "Business outcomes",
      tag: "Your results",
      items:
        "Decisions, completed workflows, operational actions, insights and measurable results.",
    },
  ],
  controlsLabel: "Across every layer",
  controls: ["Strategy & governance", "Human oversight", "Permissions", "Security & audit"],
};

export const aiCapabilities = [
  {
    id: "enterprise-intelligence",
    title: "Enterprise Intelligence",
    line: "AI systems that understand your business information.",
    examples: [
      "Knowledge assistants",
      "Enterprise RAG platforms",
      "Document intelligence",
      "Generative AI applications",
      "Enterprise copilots",
    ],
    links: [
      { label: "Enterprise AI & Knowledge Systems", href: "/ai-solutions/enterprise-ai/" },
      { label: "Generative AI Applications", href: "/ai-solutions/generative-ai/" },
    ],
  },
  {
    id: "agents-automation",
    title: "AI Agents & Automation",
    line: "AI systems that perform tasks and coordinate business processes.",
    examples: [
      "AI agents",
      "Agentic workflows",
      "Intelligent document processing",
      "Business process automation",
      "Human-in-the-loop orchestration",
    ],
    links: [{ label: "AI Agents & Intelligent Automation", href: "/ai-solutions/ai-agents/" }],
  },
  {
    id: "engineering-integration",
    title: "AI Engineering & Integration",
    line: "The architecture and engineering that bring AI into production.",
    examples: [
      "Enterprise API integration",
      "MCP and tool servers",
      "AI application development",
      "Model deployment",
      "Security and governance",
      "Evaluation and observability",
    ],
    links: [{ label: "AI Integration & Engineering", href: "/ai-solutions/ai-integration/" }],
  },
] as const;

export type InvoiceLane =
  "Enterprise Intelligence" | "AI Agents & Automation" | "AI Engineering & Integration";

/** One illustrative scenario. All values are invented for illustration, not a client implementation. */
export const invoiceScenario = {
  challenge:
    "Invoices arrive by email, portal and paper scan, in every format. People re-key the details, check records, chase discrepancies and start approvals by hand.",
  record: { id: "INV-20418", note: "Illustrative example" },
  steps: [
    {
      title: "Understand",
      lane: "Enterprise Intelligence" as InvoiceLane,
      text: "An invoice arrives by email or document system. Document intelligence extracts the vendor, amounts and references.",
      status: "Extracted",
    },
    {
      title: "Validate",
      lane: "Enterprise Intelligence" as InvoiceLane,
      text: "The system retrieves the relevant policy and checks the invoice against enterprise records.",
      status: "Variance found",
    },
    {
      title: "Reason and route",
      lane: "AI Agents & Automation" as InvoiceLane,
      text: "An AI agent decides the next step and sends exceptions to a person for review.",
      status: "With AP reviewer",
    },
    {
      title: "Integrate",
      lane: "AI Engineering & Integration" as InvoiceLane,
      text: "The system works with ERP and finance applications through secure APIs.",
      status: "Synced to ERP",
    },
    {
      title: "Complete",
      lane: "AI Agents & Automation" as InvoiceLane,
      text: "The approved invoice enters the business workflow, with status, audit history and reporting.",
      status: "Approved",
    },
  ],
  /** Ledger rows; each appears once its step is reached. */
  rows: [
    { step: 0, label: "Source", value: "Email attachment (PDF)" },
    { step: 0, label: "Vendor", value: "Northwind Supply Co." },
    { step: 0, label: "Total", value: "$12,480.00" },
    { step: 0, label: "PO reference", value: "PO-77310" },
    {
      step: 1,
      label: "Policy",
      value: "Three-way match required",
      source: "Procurement policy 4.2",
    },
    { step: 1, label: "PO balance", value: "$12,000.00 open" },
    { step: 1, label: "Variance", value: "+$480.00 (4%), tolerance 2%", warn: true },
    {
      step: 2,
      label: "Agent decision",
      value: "Hold payment and route to AP reviewer with context",
    },
    { step: 3, label: "ERP", value: "Vendor and PO records read; approval task created" },
    { step: 4, label: "Reviewer", value: "Approved with note" },
    { step: 4, label: "Payment", value: "Scheduled for next run" },
    { step: 4, label: "Audit trail", value: "7 entries recorded" },
  ] as { step: number; label: string; value: string; source?: string; warn?: boolean }[],
};

export const buildPrinciples = {
  eyebrow: "Production-ready AI",
  title: "Engineered for trust, performance and real-world operations.",
};

export const aiLifecycle = [
  { title: "Discover", text: "Identify business problems and prioritize AI opportunities." },
  { title: "Architect", text: "Assess data, systems, security and technical readiness." },
  { title: "Engineer", text: "Build AI applications, agents, integrations and workflows." },
  { title: "Validate", text: "Test accuracy, evaluate performance and establish safeguards." },
  { title: "Deploy", text: "Integrate with business systems and release into production." },
  { title: "Evolve", text: "Monitor, optimize and continuously improve." },
];

/** AI Strategy & Consulting, shown as the discipline that runs through the lifecycle. */
export const strategyThread = {
  text: "Before building AI, we identify where it creates measurable business value, assess technical readiness and establish the architecture and governance needed to deploy it responsibly.",
  items: [
    "Use-case discovery",
    "Data and platform readiness",
    "Governance and responsible use",
    "Roadmaps and business cases",
    "Proof of value",
    "Security and risk assessment",
  ],
  href: "/ai-solutions/ai-consulting/",
};

export const practiceFit = [
  {
    name: "AI Solutions",
    href: "/ai-solutions/",
    line: "We make businesses more intelligent through AI.",
    role: "Introduces intelligence into business operations.",
  },
  {
    name: "Software & Workflows",
    href: "/software-workflows/",
    line: "We engineer the applications and workflows that run businesses.",
    role: "Provides the custom applications and automation infrastructure.",
  },
  {
    name: "Enterprise Solutions",
    href: "/enterprise-solutions/",
    line: "We implement, optimize, connect and extend the enterprise platforms businesses depend on.",
    role: "Provides the established systems, integrations and operational foundations.",
  },
];
