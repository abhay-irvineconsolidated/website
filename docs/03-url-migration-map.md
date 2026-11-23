# URL migration map

Every URL on the legacy WordPress site and where it now lives. The redirects themselves are defined once in `src/constants/redirects.ts` and loaded by `next.config.ts`. Each one returns **301 Moved Permanently** (`statusCode: 301`).

The site runs with `trailingSlash: true`, matching the URLs search engines have already indexed. A request without the slash first gets a 308 to the slashed form, then the 301.

## Pages that keep their URL

| Legacy URL | New page | Notes |
|---|---|---|
| `/` | `/` | Rebuilt homepage |
| `/careers/` | `/careers/` | Was an empty H1; now holds the `/join-us/` content |
| `/contact/` | `/contact/` | Rebuilt form; incorrect template copy removed |
| `/privacy-policy/` | `/privacy-policy/` | Rewritten for the new site; flagged for legal review |

## Redirected pages (301)

| Legacy URL | Destination | Notes |
|---|---|---|
| `/about-us/` | `/about/` | About Us |
| `/join-us/` | `/careers/` | Talent network merged into Careers |
| `/services/` | `/enterprise-solutions/` | Services overview |
| `/service/` | `/enterprise-solutions/` | Service post archive |
| `/service/implementation-services/` | `/enterprise-solutions/implementation-services/` | Offerings kept verbatim |
| `/service/post-implementation/` | `/enterprise-solutions/post-implementation/` | Offerings kept verbatim |
| `/service/technical-services/` | `/enterprise-solutions/technical-services/` | Offerings kept verbatim |
| `/service/products/` | `/enterprise-solutions/reward-my-team/` | Bulk One-Time Payments (Reward My Team) |
| `/shop/` | `/enterprise-solutions/reward-my-team/` | Empty WooCommerce shop |
| `/news-partnerships/` | `/insights/` | Archive |
| `/news-partnerships/:slug/` | `/insights/:slug/` | Slugs preserved; all three press releases checked |
| `/resources/` | `/insights/` | Archive |
| `/resources/:slug/` | `/insights/:slug/` | Slugs preserved; all four resources checked |
| `/news/` | `/insights/` | Empty archive |
| `/workday-rising-2025/` | `/insights/workday-rising-2025/` | Event page, now in the past tense |
| `/workday-rising-2026/` | `/insights/workday-rising-2026/` | Event page |
| `/author/:name/` | `/insights/` | WordPress author archives (`laurenhd`, `rupalig`) |
| `/lets-get-started/` | `/contact/` | Intro reused |
| `/schedule-a-consultation/` | `/contact/#schedule` | Chris Irvine block and the four topics kept |
| `/forms/` | `/contact/` | Empty page |
| `/sitemap.rss` | `/sitemap.xml` | New XML sitemap |

## Re-hosted downloads (301)

These PDFs are linked from emails and social posts, so the old links keep working.

| Legacy file (under `/wp-content/uploads/sites/27/`) | New file |
|---|---|
| `2026/02/Irvine-Consolidated-One-Pager-for-Website.pdf` | `/downloads/irvine-consolidated-one-pager.pdf` |
| `2025/07/Irvine-Consolidated-Rising-One-Pager.pdf` | `/downloads/workday-rising-2025-one-pager.pdf` |
| `2024/07/Workday-Partnership-_-Press-Release-_-Irvine-Consolidated.pdf` | `/downloads/workday-referral-partner-press-release.pdf` |
| `2024/11/Irvine-Compensation-Review-Checklist.pdf` | `/downloads/compensation-review-checklist.pdf` |
| `2024/11/Irvine-End-of-Year-Tasks-Checklist.pdf` | `/downloads/end-of-year-payroll-checklist.pdf` |
| Any other `/wp-content/*` file | `/` |

## New URLs (no legacy equivalent)

- `/ai-solutions/`, plus five detail pages: `enterprise-ai`, `ai-agents` (includes intelligent automation; `/ai-solutions/intelligent-automation/` redirects to it), `generative-ai`, `ai-integration`, `ai-consulting`
- `/software-workflows/`, plus six service pages: `custom-software`, `enterprise-applications`, `workflow-automation`, `systems-integration`, `cloud-applications`, `data-engineering`
- `/enterprise-solutions/`
- `/about/`
- `/insights/`, plus two new AI articles (flagged for client review)
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image/`

## After launch

1. Submit `/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Check the legacy URLs above (for example with `curl -I`). Each should return a 301 to its destination.
3. Watch the Search Console coverage report for 404s over the first weeks, and add any missed URLs to `src/constants/redirects.ts`.
