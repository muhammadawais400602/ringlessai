# Pricing page — SEO-optimized content

Drop-in copy for `/pricing`. Covers positioning, metadata, every section, schema
markup, and internal-link hooks. Written to rank for AI-dialer and lead-sourcing
pricing searches without over-promising on the dialer layer that hasn't shipped.

---

## 0. SEO infrastructure (put this in the page head)

**Title tag (58 chars):**
`AI Dialer Pricing with Built-In Lead Sourcing | Xovra`

**Meta description (154 chars):**
`Transparent pricing for Xovra's AI outbound dialer with Google Maps lead sourcing built in. Free open source tier. Managed early-access waitlist open.`

**Canonical:** `https://xovra.ai/pricing`

**Open Graph:**
- `og:title` → AI Dialer Pricing with Built-In Lead Sourcing
- `og:description` → Open-source lead sourcing, free forever. Managed AI dialer tier in early access — join the waitlist for launch pricing.
- `og:url` → `https://xovra.ai/pricing`
- `og:image` → `/og/pricing.png` (1200×630, show the three-tier table)
- `og:type` → website

**Twitter card:**
- `twitter:card` → summary_large_image
- `twitter:title` → AI Dialer Pricing with Built-In Lead Sourcing
- `twitter:description` → Free open-source core. Managed AI dialer tier coming. No per-seat lock-in.

**Primary keywords (natural density target ~1%):**
- ai dialer pricing
- ai outbound dialer pricing
- ai sdr pricing
- ai cold calling software pricing

**Secondary keywords:**
- lead sourcing tool pricing
- google maps lead scraper pricing
- apollo alternative pricing
- zoominfo alternative pricing
- ai voice agent pricing

**Long-tail / FAQ-driven:**
- how much does an ai dialer cost
- is there a free ai dialer
- ai cold calling pricing per minute
- ai dialer with lead sourcing included
- outbound dialer with crm sync pricing

**Internal links to emit from this page:**
- `/` — brand anchor "AI outbound dialer"
- `/docs` — "install the open-source core"
- `/use-cases/agencies` — "for agencies"
- `/compliance` — "DNC, TCPA, STIR/SHAKEN"
- `/vs/apollo`, `/vs/zoominfo` — comparison anchors
- `/contact` — "book an intro call"

**JSON-LD (two blocks on this page):**

1. `Product` + `Offer` for each tier (helps rich snippets on "AI dialer pricing" queries). Price = "0" for Free; `priceSpecification` for Managed and Enterprise with `"availability": "PreOrder"` and a `validFrom` date.
2. `FAQPage` with the 8 questions in §8 below. This often wins featured-snippet real estate for "how much does an ai dialer cost" and "is there a free ai dialer."

---

## 1. Hero

**Eyebrow:** `Pricing`

**H1:** `AI Outbound Dialing with Built-In Lead Sourcing — Pick Your Tier`

**Lede (1–2 sentences, targets the primary keyword inside the first 120 chars):**
Xovra's AI outbound dialer ships with a fresh Google Maps lead engine built in — so one monthly bill replaces an Apollo seat, a ZoomInfo contract, and the dialer stack it would feed. Start free on the open-source core, or join the managed-tier early access waitlist.

**Primary CTA:** `View the open-source repo` → GitHub
**Secondary CTA:** `Join managed waitlist` → waitlist form or `/contact`

**Trust strip under CTAs (text-only, scannable):**
`No per-seat lock-in` · `DNC and TCPA compliant` · `Fresh leads every run` · `Open-source core, MIT licensed`

---

## 2. Three-tier pricing table

**Section heading (H2):** `Three tiers. One honest promise per tier.`

**Intro sentence:**
Every tier includes the Google Maps lead-sourcing engine. The managed tier adds the AI outbound dialer, live transfers, and auto appointment booking once early access opens.

**Pricing table (render as a real `<table>`, not an image — it's indexable and reads inside AI engines):**

| | **Open Source** | **Managed** <span class="eyebrow">Early access</span> | **Enterprise** |
|---|---|---|---|
| **Price** | **$0** / forever | **Join waitlist** | **Talk to us** |
| **Best for** | Developers and solo operators running their own stack | Agencies and SDR teams who want it hosted + dialer included | Lead-gen call centers, multi-location sales orgs |
| Deployment | Self-host via GitHub | Fully managed cloud | Managed + dedicated infrastructure |
| Google Maps lead sourcing | ✅ Unlimited, self-run | ✅ Weekly fresh pulls, scheduled | ✅ Custom niche × city batching |
| Website enrichment (email, tech, social) | ✅ | ✅ | ✅ |
| Ad-intent scoring (tags / ATC / SERP) | ✅ | ✅ | ✅ Custom scoring weights |
| 0–100 lead fit score | ✅ | ✅ | ✅ |
| CSV + Google Sheet export | ✅ | ✅ | ✅ |
| CRM sync (HubSpot, Close, GoHighLevel, Salesforce) | — | ✅ | ✅ Two-way + custom fields |
| AI outbound dialer | — | 🟣 Coming soon (included) | 🟣 Coming soon (included) |
| Live call transfers | — | 🟣 Coming soon (included) | 🟣 Coming soon (included) |
| Auto appointment booking | — | 🟣 Coming soon (included) | 🟣 Coming soon (included) |
| DNC + TCPA compliance | Self-managed | ✅ Built-in scrubbing | ✅ Built-in + audit logs |
| STIR/SHAKEN attestation | — | 🟣 Coming soon | 🟣 Coming soon (per-pool) |
| Support | GitHub issues | Email + shared Slack | Dedicated Slack, named CSM, 4h response SLA |
| Contract | None | Monthly, no annual lock-in | Annual |
| CTA | `View on GitHub` | `Join waitlist` | `Book a call` |

> **About the "coming soon" rows.** The Google Maps lead engine ships today in the open-source repo. The AI dialer, live transfers, and booking are in private development as the managed tier. Waitlist members get first access and launch pricing lock-in.

---

## 3. Open Source tier — detail card

**H2:** `Open Source — $0, forever`

**Intro (keyword-targeted):**
The best free AI SDR tool starts here. Xovra's lead-sourcing engine is MIT-licensed and installable in under two minutes.

**What you get (bullet list, scannable):**
- Unlimited Google Maps scraping by niche and city
- Website enrichment: email, phone, tech stack, Instagram, Facebook, TikTok, follower counts
- Three ad-intent sources: on-site Google Ads tags, Ads Transparency Center, live SERP capture
- 0-to-100 fit score per lead
- HubSpot-formatted CSV output
- Optional Google Sheets export
- Batch mode for multi-niche × city runs via YAML

**What you self-manage:**
- Installation (Python, Playwright, optional residential proxy for live SERP)
- DNC and TCPA compliance for any dialing you do downstream
- CRM upload (manual CSV or Sheets)
- Hosting the runner if you want cron-scheduled pulls

**CTA:** `Install from GitHub` → repo link

**Internal link:** `Read the docs` → `/docs`

---

## 4. Managed tier — detail card

**H2:** `Managed — hosted sourcing + AI dialer, early access`

**Intro (keyword-targeted):**
When the managed tier opens, it will be the first AI outbound dialer with lead sourcing built into the subscription. No separate list vendor, no separate dialer bill, no manual CSV shuttling.

**What's included at launch:**
- Hosted Google Maps lead sourcing with weekly scheduled pulls
- Two-way CRM sync (HubSpot, Close, GoHighLevel, Salesforce)
- Built-in DNC scrubbing against federal and state lists
- Lead fit scoring with configurable thresholds
- Transcript and outcome logging per record

**Rolling in as development ships:**
- AI voice agent handling multi-turn qualification conversations
- Live call transfers with context-rich screen pops for your reps
- Auto appointment booking with timezone handling
- STIR/SHAKEN attestation configurable per outbound pool
- Dedicated DID pool management with spam-flag rotation

**Pricing model (preview):**
A monthly base plus per-qualified-dial pricing. Waitlist members lock in launch pricing. We publish real numbers the week early access opens.

**Who it's for:**
- Agencies prospecting SMBs at scale (see `/use-cases/agencies`)
- SDR teams tired of paying for Apollo lists their last customer already burned
- Lead-gen businesses that want one invoice instead of five

**CTA:** `Join early access waitlist` → form

---

## 5. Enterprise tier — detail card

**H2:** `Enterprise — custom deployment, named CSM`

**Intro (keyword-targeted):**
For lead-generation call centers, multi-location sales organizations, and teams dialing six-figure monthly volume. Pricing scales with usage and is quoted on an annual basis.

**What enterprise adds on top of Managed:**
- Custom niche × city batching tuned to your territories
- Custom scoring weights per vertical
- Two-way CRM sync into custom fields and workflows
- Audit logs for TCPA compliance and SOC 2 preparation
- Per-pool STIR/SHAKEN attestation configuration
- Dedicated Slack channel with 4-hour response SLA
- Named Customer Success Manager

**Common conversation starters:**
- Replacing a ZoomInfo contract (see `/vs/zoominfo`)
- Consolidating five vendors into one invoice
- Scaling from one market to a continent without bloating headcount

**CTA:** `Book a call` → `/contact`

---

## 6. ROI framing (Alpine-style numeric block)

**H2:** `What teams replace when they move to Xovra`

**Intro:**
A single managed Xovra subscription typically replaces this stack:

**Cost comparison table (illustrative, not promised):**

| Tool | Typical cost | Replaced by |
|---|---|---|
| Apollo | ~$2,400 / month per seat | Built-in sourcing |
| ZoomInfo contract | $15k+ / year minimum | Built-in sourcing + enrichment |
| Stand-alone AI dialer (Vapi / Retell / Air AI) | $0.10–$0.25 / minute + base | Managed dialer tier |
| Appointment-setter contractor | $3k–$8k / month | Auto booking |
| DNC scrubbing service | $300–$900 / month | Built-in |
| **Total replaced** | **$5k–$10k+ / month** | **One subscription** |

**Honest note:** We publish Xovra's managed-tier pricing publicly the week early access opens. The replaced-stack numbers above come from public pricing pages and published ranges for comparable tools — your mileage will vary.

---

## 7. Comparison anchor section

**H2:** `How Xovra pricing compares`

Short paragraph + three buttons to the dedicated comparison pages:

> Buyers already shopping usually benchmark Xovra against three categories: static database vendors, pure-play dialer startups, and cheap Google Maps scrapers. We wrote honest comparisons for each.

**Link cards:**
- `Xovra vs Apollo` → `/vs/apollo` — "Database vs live scrape, with ad-intent built in"
- `Xovra vs ZoomInfo` → `/vs/zoominfo` — "SMB-native alternative without the $15k contract"
- `Xovra vs D7 Lead Finder` → `/vs/d7-leadfinder` — "Open source alternative to a closed scraper"

---

## 8. Pricing FAQ (feeds `FAQPage` JSON-LD — biggest SEO win on this page)

**H2:** `Pricing FAQ`

**Q1 — How much does an AI dialer cost?**
AI dialers in this category typically price between $500 and $5,000 per month, plus $0.08 to $0.25 per minute of talk time, plus a separate bill for the lead list it consumes. Xovra's managed tier rolls sourcing + dialer + CRM sync into one subscription so the stack bill drops to a single invoice. We publish our exact numbers the week early access opens; the open-source core is free today.

**Q2 — Is there a free AI dialer?**
The open-source core of Xovra — the Google Maps lead sourcing, website enrichment, ad-intent scoring, and CSV/Sheet export — is free forever under the MIT license. Install from GitHub. The AI dialer itself is in private development and will ship as part of the managed tier.

**Q3 — Does Xovra charge per seat?**
No. There's no seat-based pricing in any tier. Open source is unlimited. Managed uses volume-based billing (base + usage). Enterprise is quoted annually based on dial volume.

**Q4 — Can I use Xovra for free forever?**
Yes. The open-source repository is licensed MIT, so you can use it commercially at no cost and for as long as you want. There's no telemetry, no upgrade nag, no feature cliff.

**Q5 — Is there a free trial of the managed tier?**
When managed early access opens, first-wave waitlist members get a time-boxed free trial of the full stack including the AI dialer. Join the waitlist to lock in access.

**Q6 — Will I be billed per dial?**
In the managed tier, yes — a monthly base plus per-qualified-dial pricing. "Qualified" means the AI agent reached budget, timeline, and decision-maker confirmation. Dropped calls and voicemails aren't billed. Open source has no usage charges.

**Q7 — Do you offer a Google Ads advertiser filter without the dialer?**
Yes. The open-source tier ships with `--require-ads` and configurable `--ads-source` flags. You can source a list of businesses actively running Google Ads (via on-site tags, Ads Transparency Center, or live SERP capture) completely free, then dial it with whatever stack you already use.

**Q8 — Does the managed tier include DNC and TCPA compliance?**
Yes. When it ships, every number is scrubbed against federal and state DNC lists before dial. TCPA consent is logged per call. STIR/SHAKEN attestation is configurable per outbound pool. Enterprise adds full audit logs. See `/compliance` for the full posture.

---

## 9. Add-ons and credits (keep thin for now)

**H2:** `Add-ons`

Thin section — only list what's realistic:

- **Residential proxy pool** — for live SERP scraping at scale. Available on Managed and Enterprise. Priced on actual usage.
- **Custom dialer onboarding** — white-glove setup for your voice/script/routing rules. Flat fee, Enterprise only.
- **Custom reporting dashboard** — your KPIs, your fields, your branded PDF. Enterprise only.

---

## 10. Final CTA block

**H2:** `Start free. Upgrade when you're ready.`

**Body paragraph:**
The open-source core is production-ready today. If you're waiting on the AI dialer, join the waitlist and we'll tell you the day early access opens. No credit card, no ping-every-week sales cycle.

**Primary CTA:** `View on GitHub` → repo
**Secondary CTA:** `Join managed waitlist` → form
**Trust row:** `MIT licensed` · `No per-seat pricing` · `No annual contract until Enterprise` · `DNC + TCPA built in on Managed`

---

## 11. Content hygiene checklist before publishing

- [ ] Primary keyword "ai dialer pricing" appears in H1, first 120 chars of lede, meta description, and one H2.
- [ ] Table is a real HTML `<table>` (not an image).
- [ ] Every "coming soon" claim is explicitly labeled — no future-tense sold as present.
- [ ] `FAQPage` JSON-LD emitted with all 8 Qs.
- [ ] `Product` JSON-LD emitted per tier with `availability` reflecting reality (`InStock` for Free, `PreOrder` for Managed and Enterprise).
- [ ] At least 4 internal links out to `/`, `/docs`, `/use-cases/agencies`, `/compliance`, and one `/vs/*` page.
- [ ] All cost numbers in the comparison section carry the "illustrative" disclaimer.
- [ ] No fabricated customer testimonials. If quotes go on this page later, they're from contracted case studies only.
- [ ] Mobile layout: the pricing table scrolls horizontally or collapses to stacked cards — not a shrunk-to-illegibility 4-column at 375px.

---

## 12. Suggested URL + routing

- Route: `/pricing`
- File (Next.js App Router): `src/app/pricing/page.tsx`
- Metadata export in the same file using Next's `Metadata` type (see `src/app/layout.tsx` for the pattern).
- Add to `src/components/Navbar.tsx` if not already linked.
- Add to `llms.txt` so LLMs cite it for pricing queries.

---

## 13. Stitch design prompt

Paste this into Stitch (or any text-to-UI tool) to generate the visual.

```
Design a dark, premium pricing page for "Xovra", an AI outbound dialer
with built-in Google Maps lead sourcing. Target audience: agency owners,
SDR leaders, and lead-gen call-center managers.

BRAND
- Name: Xovra (also "XOVRA AI" when the full mark is used)
- Vibe: modern AI SaaS, confident, slightly edgy. Think Vercel + Linear
  + Framer, with a neon-purple accent instead of blue.
- Mood: trustworthy enough for enterprise, bold enough for agencies.

COLOR PALETTE
- Background: deep near-black #0b0618, with soft purple ambient glows
  radiating from section corners.
- Primary accent gradient: #ec6afb (pink) -> #8b2ff8 (purple). Use for
  the main CTA, the "Managed" tier highlight, and key numbers.
- Supporting accent: #c187fb (lavender) for secondary highlights.
- Light tint for emphasis chips: #f3e9ff background with #5b1fa7 text.
- Body text: #c8c2d8 for muted, #ffffff for strong.
- Lines / dividers: rgba(255,255,255,0.08).

TYPOGRAPHY
- Headings: a modern sans-serif (Inter, Geist, or General Sans) with
  tight letter spacing (-0.03em) and heavy weight for H1 (88px desktop,
  44px mobile).
- Body: Inter 16-18px desktop, 15-16px mobile, 1.6 line height.
- Numbers (prices): extra-large, display-weight, gradient-filled when
  they're the hero number per tier.

PAGE STRUCTURE (top to bottom)

1) HERO
   - Fixed-position dark navbar with the XOVRA AI logo on the left,
     "Features / Pricing / About Us" center links, a dark glass
     "Contact us" pill and a bright white "Login" pill with a small
     purple arrow on the right.
   - Eyebrow: small uppercase "Pricing" in lavender with wide
     letter-spacing (0.22em).
   - H1 (centered or left-aligned): "AI Outbound Dialing with Built-In
     Lead Sourcing. Pick Your Tier." White with a gradient-filled
     "Built-In Lead Sourcing" segment.
   - Sub headline (max 60ch): grey text explaining one subscription
     replaces a lead vendor + dialer + DNC scrubber.
   - Two CTAs side-by-side: primary white pill "Join managed waitlist"
     with purple arrow icon, and dark glass pill "View on GitHub"
     with a GitHub icon.
   - Trust strip below CTAs: four small badge-chips in a row with icons
     ("No per-seat lock-in", "DNC + TCPA compliant", "Fresh leads every
     run", "Open source core, MIT licensed").

2) THREE-TIER PRICING TABLE
   - Three cards side by side on desktop, stacked on mobile.
   - Middle card (Managed) is visually lifted: slightly taller, border
     glow using the primary gradient, and a floating "Most popular"
     purple pill tucked into the top edge.
   - Each card contains, top to bottom:
       - Small tier name (eyebrow caps)
       - Price (display-large). "Free forever" for Open Source,
         "Join waitlist" button-styled for Managed, "Custom" for
         Enterprise.
       - 1-sentence "best for" caption
       - CTA button (full width inside card). Open Source -> "View on
         GitHub", Managed -> "Join waitlist", Enterprise -> "Book a
         call".
       - A thin divider.
       - A checklist of 8-12 features. Use purple check circles for
         items included and a small "coming soon" lavender pill for
         items still in development (AI dialer, live transfers, booking,
         STIR/SHAKEN).
   - Underneath the three cards: one centered line in small muted text
     explaining what "coming soon" means (the dialer, transfers, and
     booking are in private development; join the waitlist for launch
     pricing).

3) PER-TIER DETAIL SECTIONS (three stacked blocks)
   - Each with a large tier name, 1-paragraph intro, two columns of
     bullet lists (What's included / What you self-manage or What's
     rolling in), and a right-column illustration.
   - Illustration ideas:
       - Open Source: terminal window showing `mapleads --niche
         "dentists" --city "Dubai" --max 100` with a purple glow.
       - Managed: schematic showing Google Maps -> scoring gauge -> AI
         voice agent -> calendar with a BOOKED invite popping out.
       - Enterprise: a radial map of pins across multiple cities with
         a dashboard overlay.

4) ROI / "WHAT YOU REPLACE" BLOCK
   - Centered H2: "What teams replace when they move to Xovra."
   - A clean comparison table: left column "Tool" (Apollo / ZoomInfo /
     Stand-alone AI dialer / Appointment setter / DNC scrubber), middle
     column "Typical cost", right column "Replaced by". Last row is a
     highlighted total row with the gradient accent bar on the left.
   - Small "illustrative" footnote below the table in muted text.

5) COMPARISON ANCHOR
   - H2: "How Xovra pricing compares."
   - Three link cards: Xovra vs Apollo, Xovra vs ZoomInfo, Xovra vs D7
     Lead Finder. Each card has the competitor's name, a 1-line
     summary, and a purple "Read comparison ->" link.

6) PRICING FAQ
   - H2: "Pricing FAQ".
   - Accordion with 8 questions (see the markdown doc). Collapsed by
     default, each opens with a smooth transition. Chevron icon
     rotates. The first question is open by default.

7) FINAL CTA BLOCK
   - Full-bleed dark card with a strong gradient-glow background.
   - H2: "Start free. Upgrade when you're ready."
   - Single paragraph, two CTAs (primary + secondary).
   - Trust row below.

8) FOOTER
   - White background section. XOVRA wordmark extra-large across the
     bottom, almost edge to edge, in near-black text. Three link
     columns above (Platform / Company / Legal & Trust). A tagline and
     copyright line at the very bottom.

MOTION
- On scroll, section headings and cards fade up with a 24px rise over
  700ms, staggered by 80ms within a group. Use IntersectionObserver.
- Pricing cards lift slightly (-4px translateY) on hover with a soft
  purple shadow.
- Respect prefers-reduced-motion.

RESPONSIVE RULES
- Desktop: 1440px design frame.
- Tablet (768px): pricing cards wrap to two columns with the Managed
  card taking full width at top.
- Mobile (375px): everything stacks. Pricing cards full-width. Comparison
  table scrolls horizontally with a subtle fade mask on the right edge.
  Hero H1 drops to 44px.

ACCESSIBILITY
- Text contrast on dark backgrounds must hit WCAG AA.
- Every CTA has a visible focus ring in the accent lavender.
- The FAQ accordion is keyboard-operable and announces state to
  screen readers.
```

Tips when iterating in Stitch:
- Generate the whole page first, then re-prompt specific sections. "Only
  the hero", "only the pricing cards" iterations converge faster than
  trying to redesign the whole thing per prompt.
- If Stitch pushes a light-mode design even though you asked for dark,
  include the phrase "dark surface #0b0618" in follow-up prompts; it
  anchors.
- When Stitch produces wordy filler copy, paste the real copy from
  sections 1-10 of this doc into the component edit flow.

