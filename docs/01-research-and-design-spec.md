# Irvine Consolidated — Research & Design Specification

Phase 1 deliverable. Audit date: 23 November 2026.

Companion documents:

- [02-content-migration-inventory.md](./02-content-migration-inventory.md): every page of the existing site, what it holds, and where it goes.
- [03-url-migration-map.md](./03-url-migration-map.md): the 301 redirect plan, as implemented in `next.config.ts`.

---

## 1. Reference project review (`sample-website-main`)

The reference project was inspected read-only. It was not modified.

**Stack:** Next.js 16 (App Router, static export), React 19, Tailwind CSS 3, framer-motion (via `LazyMotion` + `domAnimation`), lucide-react, Hanken Grotesk + Instrument Sans via `next/font`.

**Patterns worth adopting**

| Pattern                  | Reference implementation                                                                                   | How we adapt it                                                                                                                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Floating header          | Rounded, glass header that turns solid navy once the page scrolls                                          | Kept the floating, inset header. Replaced the glass effect with a solid midnight surface and a hairline border, because the brief asks us to limit glassmorphism. Added real dropdown menus because our IA is deeper. |
| Rounded "panel" sections | Dark sections inset from the page edge with 40px radii                                                     | Used for the dark sections that sit on light pages (AI band, CTA band). Radii are tightened to 28–32px for a more engineered feel.                                                                                    |
| Eyebrow + large headline | Small uppercase tracked label above a 48–88px headline                                                     | Kept. The eyebrow is set in Geist Mono with a numeric index (`01 / AI SOLUTIONS`), which gives a technical tone.                                                                                                      |
| Reveal / Stagger motion  | `whileInView` fade-and-rise, `MotionConfig reducedMotion="user"`                                           | Kept as-is conceptually. Our motion tokens are centralised in `src/constants/motion.ts`.                                                                                                                              |
| Closed-loop diagram      | Three cards joined by arrows, with a dashed "loop" bar                                                     | Developed further into animated SVG workflow and agent-orchestration visualisations.                                                                                                                                  |
| Content in one data file | `lib/content.ts` holds all copy                                                                            | Kept the idea but split by domain (`src/content/*.ts`) so the files stay readable.                                                                                                                                    |
| Service page template    | One `ServicePage` component, data-driven                                                                   | Kept for detail pages (AI, Software, Workday) so they share one layout and stay consistent.                                                                                                                           |
| SEO helpers              | `pageMeta()` gives canonical, OG and Twitter data; JSON-LD component; sitemap and robots from a route list | Kept. Extended with breadcrumb and `Service`/`Article` structured data.                                                                                                                                               |
| `<details>` FAQ          | Native disclosure that works with the keyboard and needs no JavaScript                                     | Kept for FAQs.                                                                                                                                                                                                        |
| Contact form             | Plain `fetch` to an env-configured endpoint, with a honeypot                                               | Rebuilt with react-hook-form + zod. Kept the env-configured endpoint and the honeypot.                                                                                                                                |

**Patterns we deliberately do not adopt**

- **Static export (`output: "export"`).** We need real HTTP 301 redirects to protect existing search rankings, and those require a server or edge runtime. The site is still fully prerendered; it simply ships with `next start` (or Vercel) instead of a bucket of files.
- **Photography-led cards.** We have no licensed photography. Generic stock imagery is explicitly ruled out by the brief, so visuals are built in code: SVG diagrams, interface mock-ups and data visualisations.
- **The reference's orange-on-navy palette.** It was derived from the current Irvine Consolidated site. The new palette follows the two motorsport references (see §3).

## 2. Existing site audit (summary)

The full page-by-page inventory is in `02-content-migration-inventory.md`. The headline findings:

1. **The site is small and entirely Workday-centred.** It has 28 indexed URLs (from the All in One SEO sitemaps), every service is Workday, and the H1 on the home page is "Success in Every Step".
2. **There are real, verifiable credentials that must be preserved:**
   - Founded 2015 ("Since 2015…").
   - Workday **Services Partner** (announced 29 April 2025, Houston, TX).
   - Workday **Referral Partner** (announced 9 July 2024).
   - Winner of the **Built on Workday Innovation Challenge** (Santa Clara, hosted by AWS, end of January 2025).
   - **Reward My Team** / **Bulk One-Time Payments**: a Built on Workday app on the Workday Marketplace (launched 27 February 2025).
   - **Signature sponsor** at Workday Rising 2025 (San Francisco), and exhibitor at **Booth C5**, Workday Rising 2026 (Las Vegas).
   - Consultants average "almost a decade" (2026) / "over 9 years" (2025) of Workday experience.
   - A customer estimate that Reward My Team saves **52 days of effort annually**.
   - The **Achievers** partnership resource.
3. **There are real company facts to keep:** Founder & CEO Chris Irvine; the four values (Tenacity, Innovation, Understanding, Integrity); the mission and vision statements; 100% remote company; the benefits package; and the contact details: phone (936) 648-7276, info@ and media@irvineconsolidated.com, LinkedIn and YouTube.
4. **There are downloadable resources that must stay reachable:** five PDFs (company one-pager, Rising 2025 one-pager, press release, compensation checklist, end-of-year payroll checklist).
5. **There are dead or empty pages:** `/news/` (no posts), `/forms/` (empty), `/shop/` (WooCommerce with no products) and `/careers/` (an empty H1). The `/contact/` page contains leftover template copy about "non-profit digital marketing". These pages are redirected, not recreated.
6. **The Workday trademark disclaimer in the footer is required** and is carried over verbatim.

Nothing on the existing site describes AI or custom-software delivery history. All AI and software copy on the new site is therefore written as **capability and positioning statements** ("we design…", "we build…"). It never makes historical claims ("we delivered X for Y").

## 3. Visual direction

### 3.1 What we took from the references

| Reference                             | Observed qualities                                                                                                            | Translation                                                                                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image 1: black / charcoal / turquoise | Near-black body with metallic sheen, a single sharp turquoise stripe, a teal-tinted studio gradient, high-contrast white type | Graphite and midnight surfaces; turquoise used _sparingly_ as the "intelligence" signal (live states, AI nodes, focus rings); a metallic silver secondary text colour; hairline 1px borders that mimic panel seams. |
| Image 2: electric blue / navy / cyan  | Saturated royal-blue bodywork over deep navy, a cyan glow from the floor, a crisp white livery band                           | Royal and electric blue as the interactive and brand colour; a cyan "underglow" gradient at the base of dark sections; white bands (light sections) cutting across the dark.                                        |

We take no shapes, logos, numbers or vehicle forms from the images. The racing references affect colour, contrast and lighting only.

### 3.2 Palette (implemented in `src/styles/tokens.css`)

The proposed tokens were adopted, with these adjustments for accessibility:

| Token           | Hex       | Notes                                                                                                                     |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `midnight-950`  | `#060A19` | A darker step for the footer and the deepest gradients.                                                                   |
| `midnight-900`  | `#080D20` | Midnight Navy (primary dark).                                                                                             |
| `midnight-800`  | `#0A102B` | Deep Navy.                                                                                                                |
| `midnight-700`  | `#111A3D` | Raised dark surface.                                                                                                      |
| `graphite-800`  | `#252C36` | Graphite.                                                                                                                 |
| `electric-700`  | `#123C9E` | Electric Blue: brand accent and gradients.                                                                                |
| `electric-600`  | `#1748B8` | Royal Blue: primary buttons on light backgrounds (white text 7.9:1).                                                      |
| `electric-400`  | `#4F7DEB` | Lifted blue for links on dark backgrounds (5.0:1 on midnight).                                                            |
| `teal-900`      | `#123B39` | Deep Teal.                                                                                                                |
| `turquoise-500` | `#00B6B0` | Turquoise: AI highlight. Used for fills and icons, and as text on dark backgrounds only (7.6:1 on midnight).              |
| `turquoise-700` | `#007A76` | Darkened turquoise for _text_ on light backgrounds (5.2:1 on white, 4.8:1 on ice).                                        |
| `cyan-400`      | `#28BCE8` | Technical Cyan: visualisation lines and glows.                                                                            |
| `silver-300`    | `#AAB5C2` | Metallic Silver: secondary text on dark (9.3:1 on midnight).                                                              |
| `slate-500`     | `#677486` | Cool Gray: supporting text on white only (4.75:1). On ice it is 4.4:1, so ice sections use `slate-600` (#4D5868) instead. |
| `ice-50`        | `#F5F7FA` | Ice White: light sections.                                                                                                |

**Colour distribution:** roughly 50% dark (midnight and graphite), 25% light (white and ice), 15% blue, 10% turquoise and cyan. Turquoise is reserved for meaning: anything "intelligent", "live" or "automated" glows turquoise, so the colour carries semantic weight rather than serving as decoration.

### 3.3 Gradients

Only four gradients are defined, all as tokens:

- `--gradient-hero`: midnight → deep navy, with a radial electric-blue bloom at the top right and a teal bloom at the bottom left (the two references, combined).
- `--gradient-teal`: midnight → deep teal (AI section).
- `--gradient-accent`: electric → cyan. Used only on thin strokes, progress lines and a single headline word.
- `--gradient-graphite`: graphite → midnight (footer and cards).

There are no purple gradients, no full-bleed neon, and no gradient text on body copy.

### 3.4 Typography

**Geist** (headings and body) with **Geist Mono** (eyebrows, indices, data labels and code-like UI).

- Geist reads as modern and engineered without the ubiquity of Inter; Manrope and Plus Jakarta felt softer and more "startup".
- The mono companion gives the "slightly technical" voice requested, and it suits interface mock-ups.
- Both are served through `next/font/google`: self-hosted, no layout shift.

The type scale is fluid (`clamp()`), from a 4.75rem display down to a 0.75rem mono caption. See `src/styles/tokens.css`.

### 3.5 Imagery and graphics

All visuals are code-native (SVG and HTML/CSS), which keeps them sharp, themeable, light to download and free of licensing risk:

- **Hero:** "Intelligence Mesh", an animated node graph in which signals travel from data sources through agent nodes into business outcomes.
- **AI section:** an interactive agent workflow. Selecting a use case (document intelligence, knowledge assistant, support automation…) re-routes the animated pipeline.
- **Software section:** a product-style interface mock-up (a workflow builder and dashboard) built in HTML.
- **Enterprise section:** an integration architecture diagram (Workday ⇄ integration layer ⇄ systems).
- **Industries:** a typographic index grid with hover states, rather than icon tiles.

The only photograph used is the real portrait of Chris Irvine from the existing site. The real Workday partner badges are retained on the Enterprise Solutions page as credentials.

**The logo** is used exactly as supplied: full colour on light surfaces, and the official all-white version (from the existing site's logo pack) on dark surfaces. The orange sun in the mark is the company's existing identity. We leave it unaltered, and it gives a small, warm counterpoint to the cool palette.

## 4. Brand positioning

**Positioning statement:** _Irvine Consolidated is an AI-first technology partner that builds intelligent solutions, enterprise applications and automated workflows that change how businesses operate, backed by a decade of enterprise-systems delivery._

**Primary headline:** "Engineering intelligence into every workflow."

We chose this over the suggested alternatives for three reasons:

- "Engineering" signals that the company builds things, not just advises.
- "Intelligence" is the AI-first claim.
- "Every workflow" ties the AI story to the operational reality the company already knows: payroll, compensation, benefits and integrations.

"Building the intelligent enterprise." is retained as the closing line of the hero's supporting copy and in the page metadata.

**Narrative arc (homepage):**

1. **What we are:** an AI-first engineering partner (hero).
2. **How we think:** business problem → intelligent solution (introduction).
3. **AI is the lead capability:** interactive visualisation.
4. **We build real software:** interface mock-up.
5. **We run mission-critical enterprise systems:** Workday as proof of enterprise depth, not as the identity.
6. **Where we've worked:** industries.
7. **How we deliver:** Discover → Architect → Build → Deploy → Evolve.
8. **Credibility:** real, dated facts only.
9. **The call to action.**

**The bridge from Workday to AI.** The company's real history (building and shipping a Built on Workday app that automates a manual, spreadsheet-heavy process) is genuine evidence of the automation and product-engineering capability. The site uses that story honestly as the link between the established practice and the new direction.

## 5. Information architecture

```
/                                  Home
/ai-solutions/                     AI Solutions (overview)
  /enterprise-ai/  /ai-agents/  /intelligent-automation/
  /generative-ai/  /ai-integration/  /ai-consulting/
/software-workflows/               Software & Workflows (overview + lifecycle)
  /custom-software/  /enterprise-applications/  /workflow-automation/
  /systems-integration/  /cloud-applications/  /data-engineering/
/enterprise-solutions/             Enterprise Solutions: the Workday practice
  /implementation-services/  /post-implementation/
  /technical-services/  /products/
/about/                            Overview, history, mission & vision, leadership, values, industries
/careers/                          Careers & talent network (migrated from /join-us/)
/insights/                         Articles, technical insights, announcements, resources, events
  /[slug]/                         One page per item (old slugs preserved)
/contact/                          Contact form, consultation scheduling, direct details
/privacy-policy/                   Privacy policy (same URL as today)
```

**Primary navigation:** AI Solutions ▾ · Software & Workflows ▾ · Enterprise Solutions ▾ · About ▾ · Insights · Contact (button).

"Home" is the logo, which is standard and saves horizontal space. The dropdowns list each sub-page with a one-line description. On mobile they become an accordion drawer.

## 6. Technical decisions

| Decision         | Choice                                                                                       | Why                                                               |
| ---------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Framework        | Next.js 16.4 (App Router), React 19.3, TypeScript (strict, plus `noUncheckedIndexedAccess`)  | Latest stable from the official starter.                          |
| Rendering        | Cache Components (starter default); every route prerendered with `generateStaticParams`      | Static performance, with real redirects.                          |
| Styling          | Tailwind CSS 4 (CSS-first `@theme` tokens)                                                   | Tokens live in one CSS file and generate utilities automatically. |
| Motion           | `motion` (the successor package to framer-motion), loaded with `LazyMotion` + `domAnimation` | Smallest bundle; `reducedMotion="user"` respects OS settings.     |
| Forms            | react-hook-form + zod                                                                        | Typed validation with accessible error messages.                  |
| Icons            | lucide-react                                                                                 | Consistent stroke icons that tree-shake well.                     |
| Class merging    | clsx + tailwind-merge (`cn()` helper)                                                        | Safe composition of variant classes.                              |
| Formatting       | Prettier + prettier-plugin-tailwindcss                                                       | Consistent class ordering.                                        |
| Trailing slashes | `trailingSlash: true`                                                                        | Matches the URL style Google already has indexed for this domain. |

## 7. Assumptions and open items for the client

These are flagged here, and in the README, for confirmation before launch:

1. **Contact form backend.** Both forms (contact and talent network) render the site's own UI and submit to HubSpot through the Forms API (`src/lib/hubspot.ts`). Field names must match the HubSpot form fields.
2. **Consultation scheduling.** The existing HubSpot form link (`share.hsforms.com/1ezvaoL…`) is reused as "Schedule a consultation". The Reward My Team Calendly link is kept on the Products page.
3. **AI and software copy** is positioning copy describing intended capabilities. Before launch, the client should confirm each listed capability is one they are ready to sell.
4. **New "AI & Technology" insight articles** (two) are written as editorial perspective pieces with no client claims. The client should review them before launch.
5. **Privacy policy:** updated to reflect the new site, which has no comments or WordPress logins. It needs legal review.
6. **Industries:** the web page lists nine; the company one-pager also lists "Energy & Resources" and "Real Estate". We show ten: Oil & Gas is presented as "Oil, Gas & Energy" and Real Estate is added, because both come from the company's own published material.
7. **Old WordPress media URLs** (`/wp-content/uploads/...pdf`) are redirected to the re-hosted copies under `/downloads/`, so links shared in emails and LinkedIn posts keep working.
