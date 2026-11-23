# Content Migration Inventory

This is the source audit of https://irvineconsolidated.com/, crawled on 23 November 2026. The crawl covered all 28 URLs listed in the site's sitemaps (`page`, `service`, `news_partnerships`, `resources` and `post-archive`), plus every internal link found on those pages. The only extra links found were two author archives.

Status key:

- ✅ **Migrated**: the content is carried across (rewritten where noted).
- ♻️ **Merged**: the content is combined into another page.
- ⛔ **Retired**: the page had no real content, so its URL redirects.

Shared elements that appear on every page:

- **Header nav:** Home, Services (Implementation, Technical, Post-Implementation, Products), About Us (About, News & Partnerships, Careers), and a "Let's Get Started" button. These map onto the new IA.
- **Footer:** "Connect with us" text, links (Services, About Us, Resources, Careers), phone (936) 648-7276, info@irvineconsolidated.com, LinkedIn, the **Workday trademark disclaimer** and a Privacy Policy link. All of these are retained, and the disclaimer is kept verbatim.
- **"Let's Get Started" CTA band:** replaced by the new CTA band.

---

## Pages

### 1. Home: `/`

- **Title:** "Success In Every Step"
- **Content:**
  - H1 "Success in Every Step" with the catalyst paragraph.
  - "Featured Services" intro.
  - Four service teasers (Implementation, Post-Implementation, Products/Bulk One-Time Payments, Technical).
  - "Your Journey, Your Growth, Our Mission": the _Since 2015_ paragraph.
  - Careers teaser.
  - Talent Network teaser.
- **Images:** logo (colour), Workday Services Partner badge, decorative icons (rocket, monitors, chat shirts), and one stock photo (office workers).
- **New destination:** `/` (rebuilt).
- **Updates:**
  - The hero is now AI-first.
  - The Workday teasers move into the "Enterprise Solutions" band.
  - The _Since 2015_ fact moves into the credibility strip.
  - The careers teaser is linked from the footer and About.
  - The stock photo and clip-art icons are not reused (the brief rules out generic stock).
- **Redirect:** none.

### 2. About Us: `/about-us/`

- **Title:** "About Us"
- **Content:**
  - Mission: "match your organizational needs with Workday's capabilities…"
  - Vision: "a top-notch Workday provider… driving real, game-changing transformation".
  - Leadership intro, and Chris Irvine, Founder and CEO (LinkedIn `chris-irvine-9b9a9729`).
  - Values: Tenacity, Innovation, Understanding, Integrity (each with a description).
- **Images:** `Chris_Irvine_Web.png` (portrait).
- **New destination:** `/about/` (sections #overview, #history, #mission, #leadership, #values and #industries).
- **Updates:**
  - Mission and vision are broadened from Workday-only to AI + software + enterprise systems. The **original wording is preserved** in a "Where we started" history passage, so the record is kept.
  - The values are kept verbatim.
  - The portrait is kept.
- **Redirect:** `/about-us/` → `/about/` (301).

### 3. Services: `/services/`

- **Title:** "Services"
- **Content:**
  - "About our Services" intro.
  - **One-Pager PDF** download.
  - "Industries Served": Banking, Healthcare, Retail, Manufacturing, Oil and Gas, Life Sciences, Financial Services, Professional Services and Technology.
  - "How We Partner Across the Workday Journey": Align / Build / Launch / Enable (each with a tagline).
  - The four service cards.
- **Files:** `Irvine-Consolidated-One-Pager-for-Website.pdf`.
- **New destination:** `/enterprise-solutions/`.
- **Updates:**
  - Industries move to the Home and About pages.
  - Align/Build/Launch/Enable is kept as the _Workday journey_ model on Enterprise Solutions.
  - The one-pager is re-hosted at `/downloads/irvine-consolidated-one-pager.pdf`.
- **Redirect:** `/services/` → `/enterprise-solutions/`.

### 4. Service archive: `/service/`

- **Content:** a WordPress post archive of the four service posts (with author and date bylines).
- **New destination:** `/enterprise-solutions/`.
- **Redirect:** 301.

### 5. Implementation Services: `/service/implementation-services/`

- **Content:**
  - Workday GO Activations
  - Phase 1 Implementation
  - Phase X Implementation
  - Implementation Advisory
  - Project Management
  - Net New Integrations
  - CTA linking to schedule-a-consultation.
- **New destination:** `/enterprise-solutions/implementation-services/`.
- **Updates:** every list item is kept and each now has a short description. The Services Partner press release (full-scale implementation, strategic advisory) is used as the source for those descriptions.
- **Redirect:** 301.

### 6. Post-Implementation Services: `/service/post-implementation/`

- **Content:**
  - Post Production Services
  - Staff Augmentation
  - Annual Projects
  - Change Enablement
  - Security Audit
  - Tenant Optimization
  - Release Management
  - Review & Recommend
  - Reporting & Analytics
- **New destination:** `/enterprise-solutions/post-implementation/`.
- **Updates:** all nine items are kept and each now has a short description (lifecycle support, bi-annual releases).
- **Redirect:** 301.

### 7. Technical Services: `/service/technical-services/`

- **Content:**
  - Workday Extend
  - Built on Workday Apps
  - Integration Architecture
  - Orchestrations
  - Data Conversion
  - CTA linking to the Calendly page `irvineconsolidated/rewardmyteam`.
- **New destination:** `/enterprise-solutions/technical-services/`.
- **Updates:** all items are kept. The page now cross-links to Software & Workflows (Systems Integration), because this is the natural bridge between the two practices.
- **Redirect:** 301.

### 8. Products: `/service/products/`

- **Content:**
  - Bulk One-Time Payments, the "flagship Built on Workday app" (spot bonuses, peer recognition, manager-driven rewards).
  - Five key benefits: Streamlined Workforce Operations, Stronger Governance, Managerial Empowerment, Data Integrity & Accuracy, and Strategic HR Value.
  - Marketplace link `marketplace.workday.com/en-US/apps/483501/reward-my-team`.
- **Images:** `Bulk-one-time-payments-icon`.
- **New destination:** `/enterprise-solutions/products/`.
- **Updates:**
  - Kept verbatim, plus the feature list from the launch announcement.
  - Clarified that _Reward My Team_ and _Bulk One-Time Payments_ refer to the same Marketplace listing (it is the same URL on the old site).
  - Added a Calendly demo link.
- **Redirect:** 301.

### 9. News & Partnerships archive: `/news-partnerships/`

- **Content:** a listing of the three announcements.
- **New destination:** `/insights/?category=announcements` (the filter is client-side). The redirect target is `/insights/`.
- **Redirect:** 301.

### 10. "Irvine Consolidated Named Workday Services Partner": `/news-partnerships/irvine-consolidated-named-workday-services-partner/`

- **Content:**
  - Houston, TX, 29 April 2025, press release.
  - Three capabilities (Full-Scale Implementation, Lifecycle Support, Strategic Advisory Services).
  - Quote from Chris Irvine.
  - "Enhanced Commitment to Client Success".
  - About Irvine Consolidated; About Workday.
  - Media contact media@irvineconsolidated.com.
- **New destination:** `/insights/irvine-consolidated-named-workday-services-partner/` (**slug preserved**).
- **Updates:** migrated in full, unchanged (it is a dated press release).
- **Redirect:** 301.

### 11. "…Launches Award-Winning 'Reward My Team' App on Workday Marketplace": `/news-partnerships/irvine-consolidated-launches-award-winning-reward-my-team-app-on-workday-marketplace/`

- **Content:**
  - 27 February 2025.
  - Hackathon win (Built on Workday Innovation Challenge, Santa Clara, hosted by AWS, 24 hours).
  - Customer estimate of 100–150 spreadsheets across 26 pay periods, saving 52 days per year.
  - Six features.
  - Marketplace links.
- **New destination:** `/insights/irvine-consolidated-launches-award-winning-reward-my-team-app-on-workday-marketplace/`.
- **Updates:** migrated in full, unchanged.
- **Redirect:** 301.

### 12. "Irvine Consolidated Named Workday Referral Partner": `/news-partnerships/irvine-consolidated-named-workday-referral-partner/`

- **Content:**
  - Houston, TX, 9 July 2024.
  - Three capabilities.
  - Quote from Chris Irvine.
  - About Workday; About Irvine Consolidated.
  - Chris Irvine's LinkedIn (`chris-irvine-consolidated`).
  - Media contact.
  - **Press release PDF**.
- **Files:** `Workday-Partnership-_-Press-Release-_-Irvine-Consolidated.pdf`.
- **New destination:** `/insights/irvine-consolidated-named-workday-referral-partner/`.
- **Updates:** migrated in full. The PDF is re-hosted at `/downloads/workday-referral-partner-press-release.pdf`.
- **Redirect:** 301.

### 13. News: `/news/`

- **Content:** empty ("Sorry, we couldn't find any posts").
- **New destination:** none needed. ⛔
- **Redirect:** `/news/` → `/insights/`.

### 14. Resources archive: `/resources/`

- **Content:**
  - "Workday Resources" intro: "Gain access to a range of insights and practical tips…"
  - Filters: Benefits, Compensation, HCM and Payroll.
  - Three listed items.
- **New destination:** `/insights/` with the **Resources** category. The original intro is kept as that category's description. Topic tags (Benefits, Compensation, HCM, Payroll) are kept on each item.
- **Redirect:** 301.

### 15. End-of-Year Payroll Checklist: `/resources/end-of-year-payroll-checklist/`

- **Content:** a download link only.
- **Files:** `Irvine-End-of-Year-Tasks-Checklist.pdf` (2 pages).
- **New destination:** `/insights/end-of-year-payroll-checklist/`.
- **Updates:** a short description is added and the PDF is re-hosted at `/downloads/end-of-year-payroll-checklist.pdf`.
- **Redirect:** 301.

### 16. The Compensation Checklist: `/resources/the-compensation-checklist/`

- **Content:** a download link only.
- **Files:** `Irvine-Compensation-Review-Checklist.pdf`.
- **New destination:** `/insights/the-compensation-checklist/`.
- **Updates:** a description is added and the PDF is re-hosted at `/downloads/compensation-review-checklist.pdf`.
- **Redirect:** 301.

### 17. Open Enrollment Preparation: `/resources/open-enrollment-preparation/`

- **Content:** a full article covering:
  - configuration review (13 areas)
  - reporting audits (3)
  - configuration tips (4)
  - integrations (5)
  - payroll (3)
  - ACA
  - final reminders (4)
  - the Workday Community checklist link.
- **New destination:** `/insights/open-enrollment-preparation/`.
- **Updates:** migrated in full, unchanged.
- **Redirect:** 301.

### 18. Irvine Partnerships (Achievers): `/resources/irvine-partnership/`

- **Content:** two paragraphs on Achievers: a Gold Tier Workday Innovation partner; recognition integrations with Workday Feedback, Skills Cloud and Peakon.
- **New destination:** `/insights/irvine-partnership/`.
- **Updates:** migrated in full. It is also listed under "Partnerships" on Enterprise Solutions.
- **Redirect:** 301.

### 19. Workday Rising 2026: `/workday-rising-2026/`

- **Content:**
  - "It's a New Work Day."
  - Las Vegas, 12–15 October 2026.
  - Booth C5, Venetian Expo Center.
  - Consultants average almost a decade of experience.
  - Co-sponsor of OSV's DIVE IN party (13 October, Zouk).
  - Align/Build/Launch/Enable.
  - HubSpot "Let's Get Started" form.
  - YouTube and LinkedIn links.
- **Images:** Booth C5 announcement and a QR code.
- **New destination:** `/insights/workday-rising-2026/` (Events category).
- **Updates:** migrated. The event has now passed, so the copy is written in the past tense and the countdown is removed.
- **Redirect:** 301.

### 20. Workday Rising 2025: `/workday-rising-2025/`

- **Content:**
  - San Francisco, 15–18 September 2025.
  - Signature sponsor.
  - Consultants average over 9 years of experience.
  - Live Reward My Team demo.
  - Featured sessions: Lincoln (25-SPTS1236) and Paradox (25-VTS1676).
  - **Rising one-pager PDF**.
- **Files:** `Irvine-Consolidated-Rising-One-Pager.pdf`.
- **New destination:** `/insights/workday-rising-2025/`.
- **Updates:** migrated, in the past tense. Session details are kept. Lincoln and Paradox are described as session presenters only, **not** as clients. The PDF is re-hosted.
- **Redirect:** 301.

### 21. Join Our Talent Network: `/join-us/`

- **Content:**
  - "Join the best and brightest of Workday consultants…"
  - Benefits: Market-Beating Salary; 100% Remote Work (flexible hours, generous PTO, monthly phone and internet allowance); Retirement Savings (401k match, traditional and Roth); Comprehensive Benefits (nationwide insurance, no surcharges).
  - Talent network CTA.
- **New destination:** `/careers/`.
- **Updates:**
  - Broadened from "Workday consultants" to engineers, AI practitioners _and_ Workday consultants.
  - The four benefits are kept verbatim.
  - The CTA opens the contact form with "Careers / Talent Network" pre-selected.
- **Redirect:** `/join-us/` → `/careers/`.

### 22. Careers: `/careers/`

- **Content:** an empty H1.
- **New destination:** `/careers/` (now populated from `/join-us/`). ✅
- **Redirect:** none (same URL).

### 23. Contact: `/contact/`

- **Content:**
  - A contact form (name, email, message, captcha).
  - **Leftover template copy** about "non-profit digital marketing", which is wrong for this company.
- **New destination:** `/contact/`.
- **Updates:** rebuilt. The incorrect copy is removed. Fields: name, business email, company, area of interest, message.
- **Redirect:** none.

### 24. Let's Get Started: `/lets-get-started/`

- **Content:** "Interested in discussing your Workday needs…", plus a "Schedule a Meeting" embed.
- **New destination:** `/contact/` (the intro is reused, broadened).
- **Redirect:** 301.

### 25. Schedule a Consultation: `/schedule-a-consultation/`

- **Content:**
  - Chris Irvine, Founder & CEO.
  - "Your Partner in Achieving Workday Success".
  - Topics: Client Advocacy, Phase X Implementation, Production Support, Tenant Optimization.
  - An embedded scheduler (client-side; the provider is not identifiable from the HTML).
- **New destination:** `/contact/#schedule`. The "talk to Chris" block is kept, together with the four topics.
- **Redirect:** 301.

### 26. Forms: `/forms/`

- **Content:** an empty H1. ⛔
- **Redirect:** → `/contact/`.

### 27. Shop: `/shop/`

- **Content:** WooCommerce, "No products were found". ⛔
- **Redirect:** → `/enterprise-solutions/products/` (the company's only product).

### 28. Privacy Policy: `/privacy-policy/`

- **Content:** the WordPress default policy (comments, Gravatar, media, contact forms, cookies, embedded content, Google Analytics, retention, rights, where data is sent).
- **New destination:** `/privacy-policy/` (same URL).
- **Updates:**
  - Rewritten for the new site, which has no comments, Gravatar or logins.
  - Contact-form data, analytics, embedded content, retention and rights are kept.
  - Flagged for legal review.
- **Redirect:** none.

### Extra URLs found during the crawl

- `/author/laurenhd/` and `/author/rupalig/`: WordPress author archives. ⛔ Redirect to `/insights/`.

---

## Downloadable resources

| Original URL (`/wp-content/uploads/sites/27/…`)                         | New URL                                                 | Redirected |
| ----------------------------------------------------------------------- | ------------------------------------------------------- | ---------- |
| `2026/02/Irvine-Consolidated-One-Pager-for-Website.pdf`                 | `/downloads/irvine-consolidated-one-pager.pdf`          | ✅         |
| `2025/07/Irvine-Consolidated-Rising-One-Pager.pdf`                      | `/downloads/workday-rising-2025-one-pager.pdf`          | ✅         |
| `2024/07/Workday-Partnership-_-Press-Release-_-Irvine-Consolidated.pdf` | `/downloads/workday-referral-partner-press-release.pdf` | ✅         |
| `2024/11/Irvine-Compensation-Review-Checklist.pdf`                      | `/downloads/compensation-review-checklist.pdf`          | ✅         |
| `2024/11/Irvine-End-of-Year-Tasks-Checklist.pdf`                        | `/downloads/end-of-year-payroll-checklist.pdf`          | ✅         |

## Images retained

| Asset                                         | Use on new site                   |
| --------------------------------------------- | --------------------------------- |
| `Irvine-Consolidated-Logo.png` (supplied)     | Logo on light surfaces            |
| `Irvine-Logo-Pack_Irvine_H_White.png`         | Logo on dark surfaces             |
| `Chris_Irvine_Web.png`                        | About: Leadership                 |
| `Workday-Services-Partner-Logo.png`           | Enterprise Solutions: credentials |
| `wday-partners-badge-built-on-workday@4x.png` | Products and credentials          |
| `Bulk-one-time-payments-icon`                 | Products                          |

**Images not retained:**

- Stock photography (office workers, businesspeople, whiteboard backgrounds), because the brief excludes generic stock.
- Clip-art icon set (rocket, lightbulb, monitors, shirts), which is replaced with lucide icons and custom SVG.
- Event graphics (booth GIF, sponsor shout-out, QR code), which were time-bound.
- Third-party logos (Lincoln, Paradox). These are not client logos, so they are not shown.

## External links retained

- Workday Marketplace: `https://marketplace.workday.com/en-US/apps/483501/reward-my-team`
- Calendly (Reward My Team demo): `https://calendly.com/irvineconsolidated/rewardmyteam`
- HubSpot "Let's Get Started" form: `https://share.hsforms.com/1ezvaoL71Sv2IZiMTptn0hgr3wc7`
- LinkedIn (company): `https://www.linkedin.com/company/irvine-consolidated/`
- YouTube: `https://www.youtube.com/@IrvineConsolidated`
- Chris Irvine LinkedIn: `https://www.linkedin.com/in/chris-irvine-9b9a9729/`
- Workday Community Open Enrollment checklist (inside the article)

## Facts register (things the new site may state as fact)

Each fact below is backed by a source on the existing site. **Anything not on this list must not be written as a historical claim.**

| Fact                                                                                                                                                                              | Source              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Founded 2015                                                                                                                                                                      | Home                |
| Headquartered in / press dateline Houston, Texas                                                                                                                                  | Press releases      |
| Workday Services Partner (29 Apr 2025)                                                                                                                                            | Press release       |
| Workday Referral Partner (9 Jul 2024)                                                                                                                                             | Press release       |
| Won the Built on Workday Innovation Challenge (Santa Clara, hosted by AWS, Jan 2025)                                                                                              | Announcement        |
| Reward My Team on the Workday Marketplace (27 Feb 2025)                                                                                                                           | Announcement        |
| One customer estimates 52 days saved per year                                                                                                                                     | Announcement        |
| Consultants average almost a decade of Workday experience                                                                                                                         | Rising 2026         |
| Signature sponsor, Workday Rising 2025                                                                                                                                            | Rising 2025         |
| Exhibitor, Booth C5, Workday Rising 2026                                                                                                                                          | Rising 2026         |
| 100% remote company                                                                                                                                                               | Join Us             |
| Industries served (Banking, Healthcare, Retail, Manufacturing, Oil & Gas / Energy & Resources, Life Sciences, Financial Services, Professional Services, Technology, Real Estate) | Services, One-Pager |
| Chris Irvine, Founder & CEO                                                                                                                                                       | About               |
| Values: Tenacity, Innovation, Understanding, Integrity                                                                                                                            | About               |
