import type { Insight, InsightCategory } from "@/types/insights";
import { site } from "@/constants/site";

export const insightCategories: { id: InsightCategory; label: string; description: string }[] = [
  {
    id: "ai-technology",
    label: "AI & Technology",
    description: "Perspectives on applying AI and modern software in the enterprise.",
  },
  {
    id: "technical",
    label: "Technical Insights",
    description:
      "Gain access to a range of insights and practical tips designed to enhance your Workday application, with clear and actionable guidance.",
  },
  {
    id: "announcements",
    label: "Announcements",
    description: "Company news, partnerships and product launches.",
  },
  {
    id: "resources",
    label: "Resources",
    description: "Downloadable checklists, one-pagers and partner resources.",
  },
  {
    id: "events",
    label: "Events",
    description: "Where to find us, and highlights from past events.",
  },
];

export const categoryLabel = (id: InsightCategory) =>
  insightCategories.find((c) => c.id === id)?.label ?? id;

const ABOUT_IC_2024 =
  "Irvine Consolidated is a tenured consulting firm dedicated to providing top-tier Workday services. Specializing in seamless implementation, comprehensive support, and strategic consulting, we help organizations optimize their processes and achieve operational excellence. Our commitment to tailored solutions ensures that each client can leverage the full potential of Workday to meet their unique needs.";

const ABOUT_WORKDAY_2024 =
  "Workday is a leading provider of enterprise cloud applications for finance and human resources, helping customers adapt and thrive in a changing world. Workday applications for financial management, human resources, planning, spend management, and analytics are built with artificial intelligence and machine learning at the core to help organizations around the world embrace the future of work. Workday is used by more than 10,000 organizations around the world and across industries.";

export const insights: Insight[] = [
  /* ------------------------------------------------------------------------------------------ */
  /* New: AI & Technology (written for the relaunch; flagged for review)                         */
  /* ------------------------------------------------------------------------------------------ */
  {
    slug: "from-pilot-to-production-enterprise-ai",
    title: "From pilot to production: what it takes to make enterprise AI stick",
    category: "ai-technology",
    date: "2026-11-23",
    summary:
      "Most AI pilots impress in a demo and stall before production. The gap is rarely the model. It is integration, evaluation and governance.",
    tags: ["Enterprise AI", "Strategy"],
    isNew: true,
    readingMinutes: 5,
    body: [
      {
        type: "p",
        content: [
          "Building an AI prototype has never been easier. A capable model, a handful of documents and an afternoon will produce something that answers questions convincingly. Turning that prototype into a system people rely on every day is a different discipline, and it looks a lot more like enterprise engineering than data science.",
        ],
      },
      { type: "h2", text: "1. Start from a process, not a model" },
      {
        type: "p",
        content: [
          "The most durable AI projects begin with an operational problem that already has an owner, a cost and a measure: hours spent answering policy questions, days lost to manual reconciliation, a queue that never clears. Defining the before-and-after up front makes every later decision easier, including the decision not to use AI where a simpler automation will do.",
        ],
      },
      { type: "h2", text: "2. Integration is the real work" },
      {
        type: "p",
        content: [
          "An assistant that can’t see live data, or can’t act on it, rarely earns a place in someone’s day. Production AI needs authenticated connections to systems of record, permission models that mirror the source system, and error handling for when those systems are slow or unavailable. These are familiar problems to anyone who has run enterprise integrations, and they deserve the same rigor.",
        ],
      },
      { type: "h2", text: "3. Measure quality continuously" },
      {
        type: "p",
        content: [
          "Traditional software either works or throws an error. AI output can be fluent and wrong. That makes evaluation a first-class part of the build:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            "A golden set of real questions and expected answers, reviewed by subject-matter experts.",
          ],
          ["Automated scoring on every change to prompts, retrieval settings or models."],
          ["Feedback captured in the product, so real usage keeps improving the test set."],
        ],
      },
      { type: "h2", text: "4. Design governance in, not on" },
      {
        type: "p",
        content: [
          "Approvals for sensitive actions, audit logs of what the system did and why, clear data-handling rules and an owner for each AI capability. Treating these as launch requirements, rather than follow-ups, is what lets risk and compliance teams say yes.",
        ],
      },
      { type: "h2", text: "The takeaway" },
      {
        type: "p",
        content: [
          "The organizations that get lasting value from AI treat it as a production system from day one. If you are weighing where to start, our ",
          { text: "AI strategy and consulting", href: "/ai-solutions/ai-consulting/" },
          " work is designed to find the use case with the clearest path to production, and then build it.",
        ],
      },
    ],
  },
  {
    slug: "where-ai-agents-fit-in-hr-and-finance-operations",
    title: "Where AI agents fit in HR and finance operations",
    category: "ai-technology",
    date: "2026-11-23",
    summary:
      "Agents are most useful in the multi-step, multi-system work that sits between your platforms, provided they have clear boundaries.",
    tags: ["AI Agents", "Automation", "HCM"],
    isNew: true,
    readingMinutes: 4,
    body: [
      {
        type: "p",
        content: [
          "HR and finance teams run on platforms that are excellent at what they were designed to do: maintain a system of record, enforce business processes and pay people correctly. The friction is usually in the gaps between them, in the requests, look-ups, checks and follow-ups that cross systems and land on someone’s desk.",
        ],
      },
      { type: "h2", text: "Good first candidates" },
      {
        type: "ul",
        items: [
          [
            { strong: "Request triage." },
            " Reading incoming employee questions, gathering the relevant record and policy, and either answering or routing with full context.",
          ],
          [
            { strong: "Data quality checks." },
            " Scanning for records that look wrong, explaining why and preparing a correction for someone to approve.",
          ],
          [
            { strong: "Cycle preparation." },
            " Assembling the checks behind recurring events like open enrollment, compensation reviews and year-end, and flagging what still needs attention.",
          ],
        ],
      },
      { type: "h2", text: "Boundaries make agents trustworthy" },
      {
        type: "p",
        content: [
          "In regulated, people-centered processes, the question is not whether an agent can take an action but whether it should. We design agents with least-privilege access, approval steps before any change to a system of record, and a complete log of every tool call. The agent does the gathering and preparation; a person makes the decision.",
        ],
      },
      { type: "h2", text: "Start with what you already know" },
      {
        type: "p",
        content: [
          "The best agent designs come from people who understand the underlying business processes and security models in depth. That is why we pair our ",
          { text: "AI agents", href: "/ai-solutions/ai-agents/" },
          " team with our ",
          { text: "enterprise solutions", href: "/enterprise-solutions/" },
          " practice on this kind of work.",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------------------------------ */
  /* Migrated: Announcements (legacy /news-partnerships/)                                        */
  /* ------------------------------------------------------------------------------------------ */
  {
    slug: "irvine-consolidated-named-workday-services-partner",
    title: "Irvine Consolidated Named Workday Services Partner",
    category: "announcements",
    date: "2025-04-29",
    summary:
      "Irvine Consolidated has been officially designated as a Workday Services Partner, expanding its ability to deliver comprehensive deployment and lifecycle services.",
    tags: ["Partnership", "Workday"],
    legacyUrl: "/news-partnerships/irvine-consolidated-named-workday-services-partner/",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        content: [
          { strong: "Houston, Texas – April 29, 2025" },
          " – Irvine Consolidated, a premier consulting firm recognized for its extensive expertise in deploying and optimizing Workday® solutions, today announced it has been officially designated as a Workday Services Partner. This expanded partnership with Workday (NASDAQ: WDAY), a leader in enterprise cloud applications for finance and human resources, significantly enhances Irvine Consolidated’s ability to deliver comprehensive deployment and lifecycle services, empowering organizations to fully leverage their Workday investments.",
        ],
      },
      { type: "h2", text: "Driving Innovation and Transformation" },
      {
        type: "p",
        content: [
          "As a Workday Services Partner, Irvine Consolidated joins an elite community of global systems integrators and regional firms selected for their deep expertise and proven ability to deploy Workday’s industry-leading cloud solutions effectively. The partnership enables Irvine Consolidated to offer advanced capabilities, including:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            { strong: "Full-Scale Implementation:" },
            " End-to-end deployment services designed to ensure seamless integration and rapid adoption of Workday’s comprehensive suite of finance and human resource solutions.",
          ],
          [
            { strong: "Lifecycle Support:" },
            " Continuous post-implementation support, helping organizations optimize their Workday platforms and effectively manage regular updates and bi-annual releases.",
          ],
          [
            { strong: "Strategic Advisory Services:" },
            " Expert strategic consulting tailored to align Workday solutions with each organization’s unique business objectives, driving improved decision-making and operational efficiency.",
          ],
        ],
      },
      {
        type: "quote",
        text: "Our elevation to Workday Services Partner represents a significant milestone, underscoring the past decade of providing innovative, tailored solutions for Workday customers. We are thrilled to expand our partnership and start together with customers at the beginning, laying a stable and sustainable foundation to build on. This partnership furthers our ability to provide unparalleled value and continue our role as a trusted advisor and guide for clients at every stage of their Workday journey.",
        cite: "Chris Irvine, CEO of Irvine Consolidated",
      },
      { type: "h2", text: "Enhanced Commitment to Client Success" },
      {
        type: "p",
        content: [
          "Irvine Consolidated leverages its unique position as a Workday customer and app developer to offer unparalleled insights and practical experience to clients. The company’s own experience with ‘",
          { text: "Reward My Team", href: site.marketplaceUrl },
          ",’ an acclaimed Built On Workday application, showcases its innovation and capability in enhancing user experience and business performance.",
        ],
      },
      {
        type: "p",
        content: [
          "Irvine Consolidated’s expanded partnership status reflects its consistent track record of delivering reliable, transformative solutions to clients. Through a deep understanding of Workday’s capabilities, Irvine Consolidated provides robust deployment strategies, seamless implementation processes, and strategic guidance to foster growth, agility, and sustainability for organizations across multiple industries.",
        ],
      },
      { type: "h3", text: "About Irvine Consolidated" },
      {
        type: "p",
        content: [
          "Irvine Consolidated is an established consulting firm dedicated to providing premier Workday implementation, lifecycle management, and strategic consulting services. With a strong history of delivering customized, high-value solutions, Irvine Consolidated supports organizations in achieving operational excellence through technology-driven strategies. For more information, visit irvineconsolidated.com or email ",
          { text: site.email, href: `mailto:${site.email}` },
          ".",
        ],
      },
      { type: "h3", text: "About Workday" },
      {
        type: "p",
        content: [
          "Workday is a leading provider of enterprise cloud applications for finance and human resources, helping organizations adapt and thrive in a rapidly evolving environment. Workday applications for financial management, human resources, planning, spend management, and analytics integrate advanced artificial intelligence and machine learning, enabling businesses worldwide to meet their transformation goals. Workday serves over 10,000 organizations globally across various sectors.",
        ],
      },
      {
        type: "p",
        content: [
          { strong: "Media Relations Contact: " },
          { text: site.mediaEmail, href: `mailto:${site.mediaEmail}` },
        ],
      },
    ],
  },
  {
    slug: "irvine-consolidated-launches-award-winning-reward-my-team-app-on-workday-marketplace",
    title: "Irvine Consolidated Launches Award-Winning “Reward My Team” App on Workday Marketplace",
    category: "announcements",
    date: "2025-02-27",
    summary:
      "Following victory in the Built on Workday Innovation Challenge, Reward My Team is now available on the Workday Marketplace.",
    tags: ["Product", "Built on Workday", "Compensation"],
    legacyUrl:
      "/news-partnerships/irvine-consolidated-launches-award-winning-reward-my-team-app-on-workday-marketplace/",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        content: [
          { strong: "February 27, 2025" },
          " – Irvine Consolidated is thrilled to announce the official launch of our innovative app, ",
          { text: "Reward My Team", href: site.marketplaceUrl },
          ", on the Workday Marketplace! This milestone marks the culmination of an intense development process following our victory in the Built on Workday Innovation Challenge at the end of January.",
        ],
      },
      { type: "h2", text: "Revolutionizing One-Time Payments in Workday" },
      {
        type: "p",
        content: [
          "Reward My Team transforms how businesses manage one-time payments, enabling managers to reward entire teams with a single, secure action. By eliminating the need for tedious manual entries, spreadsheets, and EIBs, this app simplifies bulk payments and approvals on an intuitive screen—saving time, boosting accuracy, and enhancing oversight.",
        ],
      },
      { type: "h2", text: "From Hackathon Victory to Workday Marketplace Success" },
      {
        type: "p",
        content: [
          "The journey began when our team participated in the Built on Workday Innovation Challenge in Santa Clara, hosted by Amazon Web Services (AWS). Competing against top Workday Partners, we spent 24 intense hours designing, building, and presenting our solution—ultimately winning the challenge!",
        ],
      },
      {
        type: "p",
        content: [
          "One of our customers currently manages team bonuses using 100–150 spreadsheets compiled across 26 pay periods per year. With Reward My Team, they estimate saving an incredible 52 days of effort annually! Now, any organization using Workday can streamline its reward processes and empower managers to recognize their teams instantly.",
        ],
      },
      { type: "h2", text: "Key Features & Benefits" },
      {
        type: "ul",
        items: [
          [
            { strong: "Flexible Payment Configuration" },
            " – Set up one-time payment plans with customizable parameters to align with business objectives.",
          ],
          [
            { strong: "Bulk Payment Initiation" },
            " – Managers can reward teams instantly without manual processing.",
          ],
          [
            { strong: "Effortless Approval Workflow" },
            " – Approvers can review, approve, or deny one-time payments in bulk, cutting administrative burden.",
          ],
          [
            { strong: "Automated Approvals" },
            " – Payments are processed automatically upon approval, eliminating additional steps.",
          ],
          [
            { strong: "Improved Oversight & Compliance" },
            " – Track, control, and ensure clarity in one-time payments with a secure, integrated process.",
          ],
          [
            { strong: "Increased Efficiency & Recognition" },
            " – Save valuable time, reduce errors, and enhance employee satisfaction through seamless team rewards.",
          ],
        ],
      },
      { type: "h2", text: "Now Available on the Workday Marketplace" },
      {
        type: "p",
        content: [
          "We’re proud to officially bring Reward My Team to the Workday Marketplace, allowing businesses to enhance their compensation workflows with an intuitive, automated, and scalable solution.",
        ],
      },
      {
        type: "cta",
        label: "Explore Reward My Team on Workday Marketplace",
        href: site.marketplaceUrl,
        external: true,
      },
    ],
  },
  {
    slug: "irvine-consolidated-named-workday-referral-partner",
    title: "Irvine Consolidated Named Workday Referral Partner",
    category: "announcements",
    date: "2024-07-09",
    summary:
      "Irvine Consolidated announced a referral partnership with Workday, enhancing its ability to deliver solutions across organizational needs.",
    tags: ["Partnership", "Workday"],
    legacyUrl: "/news-partnerships/irvine-consolidated-named-workday-referral-partner/",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        content: [
          { strong: "Houston, Texas – July 9, 2024" },
          " – Irvine Consolidated, a premier consulting firm known for its comprehensive range of Workday® services, today announced a referral partnership with Workday (NASDAQ: WDAY), a leader in enterprise cloud applications for finance and human resources. This partnership is set to enhance Irvine Consolidated’s ability to deliver exceptional solutions across various organizational needs.",
        ],
      },
      { type: "h2", text: "Expanding Capabilities to Drive Success" },
      {
        type: "p",
        content: [
          "Irvine Consolidated is dedicated to empowering organizations with tailored Workday solutions that drive efficiency, optimize processes, and foster growth. Our partnership with Workday enables us to offer enhanced services, including:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            { strong: "Implementation Excellence:" },
            " Seamless deployment of Workday solutions, ensuring organizations can quickly benefit from the platform’s full capabilities.",
          ],
          [
            { strong: "Comprehensive Support:" },
            " Ongoing post-implementation support to address any challenges and ensure sustained success.",
          ],
          [
            { strong: "Strategic Consulting:" },
            " Expert guidance to help organizations align their strategic goals with Workday’s robust functionalities.",
          ],
        ],
      },
      {
        type: "quote",
        text: "Irvine Consolidated is thrilled to be selected as a Referral Partner with Workday, further enhancing our ability to align our clients’ needs with Workday’s ever increasing capabilities. By leveraging our deep history and expertise with Workday, we provide comprehensive end-to-end support and ensure delivery of creative solutions to our clients’ most pressing problems. This partnership allows us to deliver unparalleled solutions, helping our clients make faster, more informed decisions that drive effective results.",
        cite: "Chris Irvine, CEO of Irvine Consolidated",
      },
      { type: "h3", text: "About Workday" },
      { type: "p", content: [ABOUT_WORKDAY_2024] },
      { type: "h3", text: "About Irvine Consolidated" },
      {
        type: "p",
        content: [
          ABOUT_IC_2024,
          " For more information, visit irvineconsolidated.com or email ",
          { text: site.email, href: `mailto:${site.email}` },
          ".",
        ],
      },
      {
        type: "p",
        content: [
          "To learn more about Chris Irvine, please visit his ",
          {
            text: "LinkedIn profile",
            href: "https://www.linkedin.com/in/chris-irvine-consolidated/",
          },
          ".",
        ],
      },
      {
        type: "p",
        content: [
          { strong: "Media Relations Contact: " },
          { text: site.mediaEmail, href: `mailto:${site.mediaEmail}` },
        ],
      },
      {
        type: "download",
        label: "Download the press release (PDF)",
        href: "/downloads/workday-referral-partner-press-release.pdf",
        size: "70 KB",
      },
    ],
  },

  /* ------------------------------------------------------------------------------------------ */
  /* Migrated: Technical insights & resources (legacy /resources/)                               */
  /* ------------------------------------------------------------------------------------------ */
  {
    slug: "open-enrollment-preparation",
    title: "Open Enrollment Preparation",
    category: "technical",
    date: "2024-08-02",
    summary:
      "Essential tips for your Workday Open Enrollment setup: configuration review, audits, integrations, payroll, ACA and final reminders.",
    tags: ["Benefits", "HCM", "Payroll"],
    legacyUrl: "/resources/open-enrollment-preparation/",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        content: [
          "Open Enrollment season can feel overwhelming, but we’re here to help! With our support for your Workday Open Enrollment setup, you can focus on what matters most: your employees’ needs.",
        ],
      },
      {
        type: "p",
        content: [
          "To make your OE experience smoother, we’ve gathered some essential tips and tricks. Start with Workday’s ",
          {
            text: "Open Enrollment Checklist",
            href: "https://community-content.workday.com/content/workday-community/en-us/kits-and-tools/products/human-capital-management/benefits/open-enrollment-checklist.html",
          },
          ", and check out our list of common trouble spots that companies often encounter each year. Let’s make this OE season a breeze together!",
        ],
      },
      {
        type: "p",
        content: [
          "Have you reviewed your current configuration? This is a crucial first step in preparing for open enrollment to avoid carrying over any existing issues into the new plan year. This thorough review helps identify existing problems and opportunities to automate manual processes.",
        ],
      },
      { type: "h2", text: "Key areas to review include:" },
      {
        type: "ul",
        items: [
          ["Benefit Groups & Plans"],
          ["Coverage Types & Targets"],
          ["Enrollment Events"],
          ["Enrollment Event Rules"],
          ["Enrollment Instructions"],
          ["Elections"],
          ["Relevant Business Processes"],
          ["COBRA"],
          ["Dependents & Beneficiaries"],
          ["Rates"],
          ["Evidence of Insurability"],
          ["Earnings & Deductions"],
          ["ACA"],
        ],
      },
      { type: "h2", text: "Reporting" },
      {
        type: "p",
        content: [
          "Simple audits can help uncover common roadblocks to a successful open enrollment.",
        ],
      },
      {
        type: "ul",
        items: [
          [
            { strong: "View Workers in Multiple Benefit Groups Audit:" },
            " This report identifies employees in multiple benefit groups. Run this report as of the effective date of your open enrollment; any results indicate an issue with your eligibility rules.",
          ],
          [
            { strong: "Benefit Event Status Report:" },
            " This report lists workers with outstanding benefits events. Finalize these open events to enable employee elections during open enrollment. Use the “Finalize Open Benefit Events” function to clear forgotten events.",
          ],
          [
            { strong: "Dependent Audit:" },
            " Ensure you’re collecting the required demographic information for covered dependents. Audit your data to determine if configuration changes are necessary to meet insurance carriers’ requirements.",
          ],
        ],
      },
      { type: "h2", text: "Configuration Tips" },
      {
        type: "ul",
        items: [
          [
            { strong: "Consolidate Plans:" },
            " Life insurance plans with age reduction policies can be streamlined into one plan using the Age Reduction Policy functionality.",
          ],
          [
            { strong: "Calculated Rates vs Fixed Rates:" },
            " Calculated rates attached to applicable plans make rate updates easier via EIB, reducing rate errors. Fixed rates, however, are beneficial for plans with individual rates, such as global medical plans and some US insurance plans.",
          ],
          [
            { strong: "Evaluate Business Processes:" },
            " Transition from manual to automated processes for benefit events. For example, integrate Evidence of Insurability paperwork into the life event business process, providing instructions and forms for employees.",
          ],
          [
            { strong: "Enable People Experience:" },
            " Use the Evidence of Insurability Link checkbox and related field on insurance benefit plans to remind employees to complete paperwork with a home page card reminder displayed 30 days after submission.",
          ],
        ],
      },
      { type: "h2", text: "Integrations" },
      {
        type: "p",
        content: [
          "Managing integrations with insurance carriers is crucial during open enrollment. Consider these points:",
        ],
      },
      {
        type: "ul",
        items: [
          [
            { strong: "Setting Up New Integrations:" },
            " Engage integration support early, as setting up a new integration file typically takes three months.",
          ],
          [
            { strong: "Impact on File Feeds:" },
            " Ensure updates to benefit plans, coverage targets, tiers, and deductions align with carrier specifications.",
          ],
          [
            { strong: "Open Enrollment Files:" },
            " Insurance carriers generally need your open enrollment file by the first week of December.",
          ],
          [
            { strong: "Notification Preferences:" },
            " Review and update your notification settings.",
          ],
          [
            { strong: "Support for OE Integrations:" },
            " Even if there are no carrier or benefit plan changes, we provide support for managing and coordinating OE integrations, communicating with vendors, and maintaining schedules and deadlines.",
          ],
        ],
      },
      { type: "h2", text: "Payroll" },
      {
        type: "p",
        content: [
          "Ensure correct deductions by coordinating with payroll for a successful open enrollment.",
        ],
      },
      {
        type: "ul",
        items: [
          [{ strong: "New Deduction Codes:" }, " Add new codes for newly added benefit plans."],
          [
            { strong: "Updating Deductions:" },
            " Update existing benefit deductions with any new plans.",
          ],
          [
            { strong: "Run Category Modifications:" },
            " Modify the Run Category for new deductions, considering benefits on paid leave, arrears for unpaid leave, and final termination checks.",
          ],
        ],
      },
      { type: "h2", text: "ACA Ties to Open Enrollment" },
      {
        type: "p",
        content: [
          "Ensure employees averaging at least 30 hours per week are in the appropriate benefit group for correct coverage. Update your ACA configuration to include new earnings codes for hour calculations.",
        ],
      },
      { type: "h2", text: "Final Reminders" },
      {
        type: "ul",
        items: [
          [
            { strong: "Create an announcement on your Home page for Open Enrollment!" },
            " Here you can attach job aids, videos, and FAQs that your employees can reference for the duration of OE.",
          ],
          [
            { strong: "Have an effective communication plan in place:" },
            " Keep your internal stakeholders, external vendors, and HRIS team aligned on testing, timelines, and plans.",
          ],
          [
            { strong: "Clean up outstanding Benefit Items:" },
            " Close out pending EOIs and finalize any prior benefit events.",
          ],
          [
            { strong: "TEST! TEST! TEST!:" },
            " Test the entire OE process, including your Payroll and Integration items as well.",
          ],
        ],
      },
    ],
  },
  {
    slug: "the-compensation-checklist",
    title: "The Compensation Checklist",
    category: "resources",
    date: "2024-11-25",
    summary:
      "What to review and test before launching your Workday Compensation Review: participation rules, plan assignments, security, grids, validations, pools and targets.",
    tags: ["Compensation", "Checklist"],
    legacyUrl: "/resources/the-compensation-checklist/",
    readingMinutes: 2,
    body: [
      {
        type: "p",
        content: [
          "A missed step in compensation review setup can send tasks to the wrong planner or calculate awards incorrectly. Use this checklist, with the Workday task for each step, before you launch your next cycle.",
        ],
      },
      {
        type: "download",
        label: "Download the Compensation Review Checklist (PDF)",
        href: "/downloads/compensation-review-checklist.pdf",
        size: "150 KB",
      },
      { type: "h2", text: "Preparing for launch" },
      {
        type: "ul",
        items: [
          [
            "Review & update compensation participation rule sets — ",
            { strong: "Maintain Compensation Review Participation Rule Sets" },
          ],
          [
            "Audit Plan Assignments to ensure all workers who should be eligible are included in the process — ",
            { strong: "Employee Compensation Audit Report" },
          ],
          [
            "Audit Security Groups involved in the Compensation Review cycle to confirm assignments align with current process and staffing — ",
            { strong: "View Security Group" },
          ],
          [
            "Audit & test the Configurable Grid to ensure it includes all desired fields in the Compensation Review process — ",
            { strong: "View Configurable Grid" },
          ],
          [
            "Review & test all Compensation Validation Rules, both at the organization and individual levels — ",
            { strong: "Maintain Compensation Review Validations" },
          ],
          [
            "Review & update Custom Reports to confirm they will support the latest process — ",
            { strong: "View Custom Report" },
          ],
          [
            "Confirm all workers have received a rating from their Annual Performance Review (if applicable) — ",
            { strong: "Employee Reviews Report (or build custom report)" },
          ],
          [
            "Review & test overall Process Pools to confirm they are being funded correctly — ",
            { strong: "Requires initiating a process in your test tenant" },
          ],
          [
            "Review & test Individual Plan Targets for workers to confirm the awards are calculating correctly — ",
            { strong: "Requires initiating a process in your test tenant" },
          ],
          [
            "Test to ensure parallel job changes and compensation changes are being handled correctly — ",
            { strong: "Requires initiating a process in your test tenant" },
          ],
        ],
      },
      { type: "h2", text: "Prior to launch" },
      {
        type: "ul",
        items: [
          [
            "Review & update key dates, plans, participation rules, and reasons on the Compensation Review Process templates — ",
            { strong: "View Compensation Review Process Template" },
          ],
          [
            "Complete any reorganizations prior to launching the Compensation Review Process — ",
            { strong: "This ensures the correct tasks go to the correct compensation planner" },
          ],
        ],
      },
      {
        type: "p",
        content: [
          "Want to remove the manual work from spot bonuses and team rewards? See ",
          { text: "Bulk One-Time Payments", href: "/enterprise-solutions/reward-my-team/" },
          ".",
        ],
      },
    ],
  },
  {
    slug: "end-of-year-payroll-checklist",
    title: "End-of-Year Payroll Checklist",
    category: "resources",
    date: "2024-11-25",
    summary:
      "End-of-year tasks for Workday Payroll, month by month from October to December, across Benefits, Absence, HCM, Time Tracking, Compensation and Payroll.",
    tags: ["Payroll", "Benefits", "Checklist"],
    legacyUrl: "/resources/end-of-year-payroll-checklist/",
    readingMinutes: 3,
    body: [
      {
        type: "p",
        content: [
          "Year-end is the busiest season for payroll teams. This checklist sets out the Workday tasks to complete each month, with the Workday task or report to use for each one.",
        ],
      },
      {
        type: "download",
        label: "Download the End-of-Year Tasks for Workday® Payroll checklist (PDF)",
        href: "/downloads/end-of-year-payroll-checklist.pdf",
        size: "320 KB",
      },
      { type: "h2", text: "October" },
      {
        type: "ul",
        items: [
          [
            { strong: "Benefits:" },
            " Configure next year’s ACA Measurement Periods — Create ACA Measurement Period",
          ],
          [
            { strong: "Benefits:" },
            " Load ACA Hours for Benefits Eligibility — Web Service EIB, Benefit Eligibility by Group",
          ],
          [
            { strong: "Payroll, Benefits:" },
            " Review Earnings and Deductions (for upcoming Benefit Plan Year) — View Earning/Deduction",
          ],
          [
            { strong: "Payroll, Benefits:" },
            " Review Period Schedules before testing Open Enrollment — View Period Schedule",
          ],
        ],
      },
      { type: "h2", text: "November" },
      {
        type: "ul",
        items: [
          [
            { strong: "Absence:" },
            " Update/Generate Time Off Plan Period Schedule Periods for the New Year — View Period Schedule > Generate Periods",
          ],
          [
            { strong: "HCM:" },
            " Review and extend alert schedules — View Alert > Schedule Future Processes",
          ],
          [
            { strong: "HCM, Integrations, etc.:" },
            " Extend other Scheduled Future Events (such as Integrations) — Run Scheduled Future Process report or Mass Update Scheduled Future Process",
          ],
          [
            { strong: "Payroll:" },
            " Audit W-2s and check for errors — W-2 Preview, Company W-2 Audit, View W-2 Errors",
          ],
          [
            { strong: "Time Tracking:" },
            " Review next year’s Holiday Schedule — View Holiday Calendar",
          ],
          [
            { strong: "Time Tracking:" },
            " Connect Time Tracking Period schedule to Payroll Schedule — Edit Period Schedule: check “Usage” and “Link to Payroll Period”",
          ],
          [
            { strong: "Time Tracking:" },
            " Build Work Periods for next year’s FLSA — View FLSA Work Period Calendar > Build Work Period Events",
          ],
          [
            { strong: "All Modules:" },
            " Review updates on Community and the “What’s New?” Report — Run “What’s New in Workday?” Report",
          ],
        ],
      },
      { type: "h2", text: "December" },
      {
        type: "ul",
        items: [
          [
            { strong: "Adv Comp:" },
            " Audit All Compensation Plans — Run Compensation Plans Report",
          ],
          [
            { strong: "Adv Comp:" },
            " Audit Compensation Plan Assignments — Compensation Plan Assignment Audit",
          ],
          [
            { strong: "Adv Comp:" },
            " Align Compensation Matrices with Review Templates — View Compensation Matrix, View Employee Review Template",
          ],
          [
            { strong: "Payroll:" },
            " Create and configure the next Fiscal Year — Create Next Fiscal Year",
          ],
          [
            { strong: "Payroll:" },
            " Create and configure Ledger Year and Ledger Periods — Create Ledger Year and Ledger Periods",
          ],
          [
            { strong: "Payroll:" },
            " Update Ledger Period Status for next fiscal year — Mass Update Ledger Period Status",
          ],
          [
            { strong: "Payroll:" },
            " Audit W-2s (Sandbox) and make corrections (Production) — Create W-2 Data, Company W-2 Audits, & View W-2 Errors",
          ],
          [
            { strong: "Payroll:" },
            " Enable Box 13 for retirement participants (W-2) — W-2 Preview",
          ],
          [
            { strong: "Payroll:" },
            " Submit 4th quarter file and W-2 data to tax filing partner — Launch/Schedule Integration",
          ],
          [
            { strong: "Payroll:" },
            " Update SUI and applicable company tax rates — Edit Company State and Local US Tax Reporting",
          ],
          [
            { strong: "Payroll:" },
            " Update custom limits for pay components — Audit Benefit Deduction Limit for Tax Year",
          ],
          [
            { strong: "Payroll:" },
            " Process necessary true-up transactions for year-end accuracy (401k, etc.) — Run On-Demand/Pay Input EIB",
          ],
          [
            { strong: "Payroll:" },
            " Extend end-dates for Scheduled Future Processes — Mass Update Scheduled Future Processes",
          ],
          [
            { strong: "Payroll:" },
            " Convert pre-tax arrears balances for ending tax year to post-tax arrears balances — Run On-Demand EIB",
          ],
          [
            { strong: "Talent & Performance:" },
            " Launch Annual Performance Review — Start Performance Review for Organization",
          ],
        ],
      },
    ],
  },
  {
    slug: "irvine-partnership",
    title: "Irvine Partnerships: Achievers",
    category: "resources",
    date: "2024-11-07",
    summary:
      "Achievers is a global leader in employee recognition and reward software, with Workday-certified integrations as a Gold Tier Workday Innovation partner.",
    tags: ["Partnership", "Recognition", "HCM"],
    legacyUrl: "/resources/irvine-partnership/",
    readingMinutes: 2,
    body: [
      {
        type: "p",
        content: [
          "Achievers is a global leader in employee recognition and reward software. Achievers’ easy-to-use web & mobile platform allows employees to share social and points-based recognitions and redeem points earned on a global marketplace. Enterprise-grade integrations with productivity apps and HRIS systems means recognitions can be shared right in an employee’s workflow making it easy for HR teams to drive engagement, productivity, and retention with Achievers.",
        ],
      },
      {
        type: "p",
        content: [
          "As a Gold Tier Workday Innovation partner, all integrations are co-developed and Workday-certified, ensuring our mutual customers save time, reduce costs, and minimize risk. Achievers’ seamless integrations with Workday streamline the employee experience, syncing employee and redemption data to create a single source of truth. The bi-directional flow of recognition and feedback enhances performance management, empowering both employees and managers. Recognition data integrated into Workday Feedback provides a “reservoir” of peer-validated soft skills that Workday Skills Cloud can “serve up” to be selected for inclusion in a user profile and/or extracted by HR for a job description. Additionally, sub-optimal indicators of team engagement – as identified by Workday Peakon – can be ameliorated by the recognition and reward capabilities of the Achievers platform.",
        ],
      },
    ],
  },
  {
    slug: "irvine-consolidated-one-pager",
    title: "Who is Irvine Consolidated? (Company one-pager)",
    category: "resources",
    date: "2026-02-06",
    summary:
      "A two-page overview of our Workday services, industries served and the Bulk One-Time Payments app.",
    tags: ["Company", "Workday"],
    legacyUrl: "/services/ (download)",
    readingMinutes: 1,
    body: [
      {
        type: "p",
        content: [
          "Irvine Consolidated is a modern consultancy rooted in the Workday ecosystem, combining deep product expertise, next-gen technology, and real-world insight to help you unlock the full potential of your Workday investment. This one-pager summarizes our Implementation, Post-Implementation and Technical Services, the industries we serve and our Built on Workday app.",
        ],
      },
      {
        type: "download",
        label: "Download the one-pager (PDF)",
        href: "/downloads/irvine-consolidated-one-pager.pdf",
        size: "530 KB",
      },
    ],
  },

  /* ------------------------------------------------------------------------------------------ */
  /* Migrated: Events (legacy /workday-rising-2025/, /workday-rising-2026/)                      */
  /* ------------------------------------------------------------------------------------------ */
  {
    slug: "workday-rising-2026",
    title: "Workday Rising 2026: It’s a New Work Day",
    category: "events",
    date: "2026-10-12",
    summary:
      "Irvine Consolidated exhibited at Booth C5 at Workday Rising 2026 in Las Vegas, October 12–15, and co-sponsored OSV’s DIVE IN customer appreciation party.",
    tags: ["Workday Rising", "Event"],
    legacyUrl: "/workday-rising-2026/",
    readingMinutes: 2,
    body: [
      {
        type: "p",
        content: [{ strong: "Las Vegas · October 12–15, 2026 · Booth C5, Venetian Expo Center" }],
      },
      {
        type: "p",
        content: [
          "Workday Rising returned with a fresh start. At Irvine Consolidated, every day is a new work day, and we were there to help organizations make the most of theirs.",
        ],
      },
      {
        type: "p",
        content: [
          "We help organizations start strong and keep moving: turning strategy into working configuration, giving teams the tools and confidence to own their Workday tenant, delivering results you can measure, and building custom apps with Workday Extend. Our consultants average almost a decade of Workday experience, so you get a team that has seen it before and knows how to get it right.",
        ],
      },
      {
        type: "p",
        content: [
          "Visitors met our team at Booth C5 in the Expo Hall to talk advisory, deployment and application management. When the work day was done, we were proud to co-sponsor OSV’s DIVE IN Customer Appreciation Party on Tuesday, October 13th at Zouk Nightclub, celebrating with the Workday community.",
        ],
      },
      { type: "h2", text: "How We Partner Across the Workday Journey" },
      {
        type: "ul",
        items: [
          [{ strong: "Align" }, " – Strategic Guidance for Every Phase."],
          [{ strong: "Build" }, " – Stable Foundations To Grow Upon."],
          [{ strong: "Launch" }, " – Implementations That Fuel Your Future."],
          [{ strong: "Enable" }, " – Support That Empowers Your Team."],
        ],
      },
      {
        type: "p",
        content: [
          "Missed us in Las Vegas? Follow us on ",
          { text: "LinkedIn", href: site.social.linkedin },
          " and ",
          { text: "YouTube", href: site.social.youtube },
          " for updates, or start a conversation below.",
        ],
      },
      { type: "cta", label: "Let’s Get Started", href: "/contact/" },
    ],
  },
  {
    slug: "workday-rising-2025",
    title: "Workday Rising 2025: Success in Every Step",
    category: "events",
    date: "2025-09-15",
    summary:
      "Irvine Consolidated was a proud Signature sponsor of Workday Rising 2025 in San Francisco, with live demos of Reward My Team.",
    tags: ["Workday Rising", "Event", "Sponsorship"],
    legacyUrl: "/workday-rising-2025/",
    readingMinutes: 3,
    body: [
      { type: "p", content: [{ strong: "San Francisco · September 15–18, 2025" }] },
      {
        type: "p",
        content: [
          "Workday Rising was the event of the season, and Irvine Consolidated was there to illuminate what’s next. As a proud Signature sponsor, we connected with the leaders, innovators, and change-makers shaping the future of work.",
        ],
      },
      {
        type: "p",
        content: [
          "At Irvine Consolidated, we turn strategy into possibility, empower teams with the tools and confidence to thrive, deliver solutions that drive real results, and build cutting-edge apps with Workday Extend. With our consultants averaging over 9 years of experience, we bring deep expertise and proven skill to every step of your Workday journey.",
        ],
      },
      {
        type: "p",
        content: [
          "Visitors to our booth saw live demos of our Built on Workday solution, Reward My Team, which transforms how businesses manage one-time payments in Workday by enabling managers to reward entire teams with a single, secure action.",
        ],
      },
      { type: "h2", text: "Featured Sessions" },
      {
        type: "h3",
        text: "Bridging the Gap: A Unified Leave Ecosystem for Today’s Workforce, presented by Lincoln [25-SPTS1236]",
      },
      {
        type: "p",
        content: [
          "Explored how enterprise organizations can modernize and simplify the employee leave of absence experience through connected technology, joined by a mutual Lincoln + Workday customer. Tracks: HR. Products: Benefits and Wellness, Core Human Capital Management, Messaging, Time Tracking and Absence.",
        ],
      },
      {
        type: "h3",
        text: "Supercharging Workday into a Hiring Machine: How Paradox Pairs Perfectly to Recruit Easier and Save Money [25-VTS1676]",
      },
      {
        type: "p",
        content: [
          "Paradox showed how conversational candidate experiences enhance Workday, and how leading employers use AI with Workday to transform static systems into true hiring engines.",
        ],
      },
      {
        type: "download",
        label: "Download our Workday Rising 2025 one-pager (PDF)",
        href: "/downloads/workday-rising-2025-one-pager.pdf",
        size: "530 KB",
      },
    ],
  },
];

/** Newest first. */
export const sortedInsights = [...insights].sort((a, b) => b.date.localeCompare(a.date));

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
