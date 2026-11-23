# Design refinement: audit and principles

This is the refinement pass on the first homepage build. It applies the project's `design-taste-frontend` skill (tasteskill 2.5.1, `.claude/skills/design-taste-frontend`), which was loaded and read before any change was made:

- `SKILL.md`
- `layout-v4.md`
- `sections.md` §1–3
- `system.md`
- `copy.md`
- `motion.md`
- `moments.md`
- `copy-voice.md` §6

## 1. How the skill applies to this project

**Kind:** software, from the skill's table: "a studio selling its own software". Irvine builds AI and software, and sells its own Built on Workday app. This is also the only kind for which the skill allows dark heroes, technical diagrams and motion loops, and the brief requires the dark navy identity.

**Dealt with the skill's dealers** (`.taste-skill/history.json`), not chosen by taste:

| Part | Dealt | Applied as |
|---|---|---|
| Nav | `nav-mega` | The existing dropdown panels: link columns plus an overview panel. |
| Footer | `footer-columns` | The existing column footer, de-boxed. |
| Close | `close-word` | Closing statement, line and button on the dark ground, running straight into the footer. |
| Rhythm | `surface-pairs` | One ice band holding two sections (Software, Enterprise). Everything else is separated by full-width ground changes or space. |
| Buttons | `tonal` | Not applied. The brief says to preserve the current buttons. The skill's hover/press behaviour is applied instead. |
| Moments | `letters-assemble`, `liquid-type` | `letters-assemble` is used once, on the closing statement, mounted through the kit's own `moments.js`. `liquid-type` is **declined** (see §1.2). |

### 1.1 Skill rules adopted

**Layout and structure**
- **Separation by ground change or space only.** No inset rounded panels standing in for a ground, no boxes around sections, no nested cards.
- **The hero stands alone on the first screen.** The three-practice strip moves out of the hero into a section of its own.
- **Equal edges.** One content wrap for every section; blocks start on the left line or a column start.

**Header**
- An opaque, full-width bar with a 1px hairline. It looks the same at every scroll position: no floating pill, no blur, no transparency change.

**Labels and type**
- Labels are 13px, sentence case. No tracked capitals on section labels. Mono is kept for indices and metadata only.
- Section eyebrows are used selectively. Most sections now open on their headline alone.

**Content**
- No check-icon lists and no decorative icon beside every heading.
- No row of identical stat boxes. Figures stand in open type with one hairline.
- Lists may close each row with a 1px rule inside the content edges. This is the only line used in content.

**Motion**
- **No scroll-reveal on cards, rows or sections.** Every `Reveal`/`Stagger` fade-in is removed.
- **Motion is in three places only:**
  - the hero entrance, once on load;
  - one dealt moment;
  - the hover/press layer: buttons step 1px and press, underlines draw, linked rows answer.
- Diagram pulses are allowed on software pages. Each runs a 2.5–4 s cycle and rests under reduced motion.

### 1.2 Skill rules not applied, and why (the brief takes precedence)

| Skill rule | Brief instruction | Decision |
|---|---|---|
| Fonts are dealt (`start.mjs`) | "Preserve current font family" | Geist and Geist Mono are kept. Geist is not on the skill's banned list. |
| Palette is dealt | "Do not introduce a new palette" | Brand tokens are kept. |
| Every section is exactly 1 or 2 screens tall | "Natural transitions", multi-page corporate site with long-form secondary pages | Not enforced as fixed heights. Generous, consistent section padding, and one idea per section. |
| No "illustrative" or sample label on visuals | "Sample metrics must be clearly identified as illustrative" | One short line under the interface mock-up. |
| No phone number or real email; contacts on `.example` | Real company contact details from the existing site | Real details are kept. They are the client's own, given in the brief. |
| No stat figures | "Explore large typographic figures" for the track record | Kept as open typographic figures, all sourced from the facts register. |
| Static export, the kit's CSS and the gate | Existing Next.js app with real 301 redirects; "do not rewrite the application" | Principles applied inside the existing Tailwind system. The kit's `moments.js` is copied to `public/assets/moments` and loaded as plain files, as the skill describes for framework projects. |
| Hero h1 names the category, no slogan; no "Explore" buttons | "Preserve existing headline… primary and secondary calls to action" | Headline and CTAs are kept. The first screen gains a hard fact line instead: since 2015, Workday Services Partner, Houston. |
| `liquid-type` moment | "Avoid distracting/gimmicky motion" | Declined. One moment is enough for the restraint the brief asks for. |

## 2. Audit of the first build (homepage)

| Area | What worked | Box-heavy or template-like | Change |
|---|---|---|---|
| Header | Clear IA, dropdowns | Floating rounded pill with blur and a changing transparency | Full-width opaque midnight bar, hairline under it |
| Hero | Headline, palette, accent word, CTAs | Pill badge with tracked caps; diagram built from 9 rounded pills; three bordered pillar boxes inside the hero | Plain fact line; a bespoke line-work schematic with no pills; pillars moved out |
| Practices | — | Three bordered cells in a row | An editorial index: three full-width rows, each with a large numeral, the name at headline scale, one line and an arrow |
| Introduction | Statement plus list | `00 — WHO WE ARE` label | Statement dominates the left (7 columns); the list sits on the right (5 columns) |
| AI section | Teal identity, interactive concept | Inset rounded panel, bordered tab buttons, the pipeline inside a second card, a legend box, an icon in every service row | Full-bleed teal ground; asymmetric head; use cases as a plain vertical text list with a 2px marker; the pipeline drawn straight on the ground; services as a text index |
| Software | Mock-up concept | Proof-point card, check-icon list, KPI tiles and bar chart (generic dashboard), floating AI card | Mock-up widened to 8 columns: a believable request-and-approval app with a detail pane where the AI check sits inside the product. Proof becomes a paragraph. Capabilities become a typeset list |
| Enterprise | Content, credibility | Hub circle with six identical rounded labels | A three-tier systems schematic: connected systems → integration layer → Workday tenant, drawn as fine lines and labels |
| Industries | Content | 10 identical bordered cells with an icon each | A typographic two-column index: names at large size, mono numerals, a note under each, hairline rows, no icons |
| How we work | Five steps on a line | Steps staggered on scroll; no line on mobile | Continuous line with numbered markers; a vertical rail on mobile |
| Track record | Sourced facts | Four identical boxed cells | Four open figures over one hairline each |
| Insights | Editorial list | Titles too small against the meta | The title is the primary element; date and category are quiet meta |
| CTA | Palette | Inset rounded panel, grid overlay, blurred glow | Full-bleed close on midnight; the statement assembles as the dealt moment; runs straight into the footer |
| Footer | IA | Bordered square social buttons | Text links, columns organised by type and spacing |
| Motion | Hero entrance | Fade-ins on every section and card | Removed (see §1.1) |

## 3. Principles for every page

**Grid**
- One `container-content` wrap (1216px plus gutters) for every section.
- 12 columns. Splits use 7/5 or 4/8, never 6/6 by default.
- Text never sits centred in a wide block. The close and section heads start on the left line.

**Spacing**
- Sections: `--spacing-section` (80–144px) top and bottom. Compact sections: `--spacing-section-sm`.
- Headline to content: 48–64px.
- Lists: 20–28px per row.

**Type hierarchy**
- Display: the hero and the closing statement.
- h1 scale: page heroes.
- h2: section heads.
- h3 (28–30px): index rows and list names.
- Lead: 19–21px.
- Body: 16px.
- Meta: 13px, mono, sentence case.
- Each level is at least 1.3× the next.
- Line length: at most about 62 characters for reading text.

**Containers** (only where they do a job)
- Product UI frames (an app window).
- Form fields.
- The navigation dropdown panel.
- Nothing else is boxed.
- Radii: 12px for UI frames and the dropdown, pill for buttons only.

**Lines**
- A 1px rule may close list rows, separate index rows, or mark a figure.
- No borders around text blocks.
- No hairlines between sections. Sections change ground instead.

**Grounds**
- White: the default.
- Ice: one band of two sections.
- Midnight hero gradient: page heroes and the close.
- Teal gradient: AI Solutions only.
- Midnight flat: industries / data-dense sections.
- No glows, blurs or grid overlays, except the hero's faint construction grid.

**Icons**
- Only where they carry meaning: navigation chevrons, arrows on links, social marks.
- Never decoration beside a heading.

**Motion**
- Hero entrance once.
- One dealt moment per page at most.
- The hover/press layer everywhere.
- Diagram pulses on software visuals.
- Nothing reveals on scroll.

## 4. Revision after client review (23 Nov 2026)

The client reviewed the editorial pass and asked for a different direction:

- Restore the original floating navigation bar.
- Make the hero a centred title, one line of subtext and two buttons, with no graphic, following the reference sample site.
- Use far fewer words across the homepage, and make it flow like the sample site.

The homepage now runs in this order:

1. **Hero.** Sits on the skill's "horizon" ground, rebuilt as the `surface-horizon` utility in brand colours. A light sheet rounds up over its foot and carries a scrolling platform-logo marquee taken from the sample site; it replaced the four-fact strip. The logos are Simple Icons; Workday is shown by name only.
2. **Three practices.** Visual panels, each with a name, one line and a button.
3. ~~AI Solutions panel~~: removed at the client’s request.
4. **Software.** Mist ground (`ground-mist`). The statement, one line and a button on the left; on the right a short blurb (Reward My Team: built in the 24-hour challenge, now on the Marketplace). The application mock-up was removed at the client’s request and is kept for the Software page.
5. **Workday services.** Grain ground (`ground-grain`). The statement on the left; the four services in one small white panel on the right.
6. **Industries.** Mirrored mist ground (`ground-mist-alt`). Ten white cards, 5 × 2 on desktop and 2 across on mobile, each with a name and one line.
7. ~~Five delivery steps~~: removed at the client’s request.
8. **CTA.** Halo ground (`ground-halo`): a centred statement, one line and two buttons, running into the footer.

From section 4 on, each section uses one of the skill's soft light grounds (mist, grain, halo; `assets/backgrounds`), rebuilt as utilities in `globals.css` and tinted with the brand electric, cyan and turquoise. Each fades into its neighbours at the top and bottom, so no hard edges show between sections.

Where the skill rules in §1–3 conflict with this direction, this direction wins.
