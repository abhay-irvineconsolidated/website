# Irvine Consolidated website

This is the corporate website for Irvine Consolidated, an AI-first technology company. It has three practices: AI Solutions, Software & Workflows, and Enterprise Solutions (Workday).

## Stack

- **Next.js 16** with the App Router. Cache Components and partial prefetching are enabled, and URLs use trailing slashes.
- **React 19** and **TypeScript** (strict, with `noUncheckedIndexedAccess`).
- **Tailwind CSS v4.** Design tokens live in `src/styles/tokens.css`; the background utilities are in `src/app/globals.css`.
- **Motion** (`motion/react`, lazy-loaded) for reveals. It respects reduced motion.
- **react-hook-form** and **zod** for the contact form.
- **ESLint** and **Prettier** (with the Tailwind plugin).

## Getting started

Requires Node 20.9 or later.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Script                            | What it does                              |
| --------------------------------- | ----------------------------------------- |
| `npm run dev`                     | Development server                        |
| `npm run build` / `npm start`     | Production build and server               |
| `npm run lint` / `lint:fix`       | ESLint                                    |
| `npm run typecheck`               | Route type generation, then `tsc`         |
| `npm run format` / `format:check` | Prettier                                  |
| `npm run check`                   | Typecheck, lint and format check together |

## Environment

| Variable               | Purpose                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata, the sitemap and JSON-LD. Defaults to `https://irvineconsolidated.com`. |

## Where things live

```
src/
  app/            routes: pages, sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
  components/
    layout/       header, footer
    navigation/   floating nav, dropdowns, mobile menu
    page/         inner-page kit: PageHero, Section (backgrounds), Cards, Steps, FaqList, ServiceDetail
    sections/     CTA, logo marquee
    ui/           buttons, logo, motion helpers, JSON-LD
  content/        all copy, as typed data (one file per practice, plus company and insights)
  constants/      site facts, navigation, legacy redirects, motion tokens
  features/       page-specific parts: home sections, contact form, insights
  lib/            SEO helpers, utilities
docs/             research, content inventory (with the facts register), URL map, design notes
```

### Editing content

All copy lives in `src/content/*.ts`. Pages render whatever those files contain, so most edits never touch a component.

- **AI detail pages** (`/ai-solutions/[slug]/`) render `aiServices` through `aiPages`; the AI overview narrative (operating model, capabilities, invoice scenario, lifecycle) is in `src/content/ai-solutions.ts`. **Software service pages** come from `softwareServices`. Each entry has a hero, the problem, capabilities, a flow, use cases, outcomes and FAQs.
- **Workday pages** come from `workdayServices` in `enterprise.ts`. The offering names are kept verbatim from the legacy site.
- **Insights** come from `insights.ts`. Each article is built from a small block model (paragraphs, headings, lists, quotes, downloads and CTAs). PDFs are in `public/downloads/`.

**Facts rule:** company claims (dates, partnerships, awards, figures) must come from the facts register in `docs/02-content-migration-inventory.md`. Do not add customer names, testimonials or results that cannot be sourced.

## SEO

- Every page sets its title, description, canonical URL, and Open Graph and Twitter tags through `pageMeta()` in `src/lib/seo.ts`.
- **JSON-LD:**
  - Organization and WebSite on every page
  - BreadcrumbList on inner pages
  - Service (plus FAQPage) on service pages
  - SoftwareApplication on the product page
  - Article on insights
- `/sitemap.xml` lists every page, and `/robots.txt` points to it.
- Legacy WordPress URLs return 301 redirects. See `docs/03-url-migration-map.md` and `src/constants/redirects.ts`.

## Before launch

- Legal review of `/privacy-policy/`.
- Client review of the two new AI articles in Insights (`isNew: true`) and of the platform logos in the homepage marquee.

Workday is a registered trademark of Workday, Inc. Irvine Consolidated is not affiliated with Workday, Inc., nor does Workday, Inc. sponsor or endorse Irvine Consolidated, its products, or its website.
