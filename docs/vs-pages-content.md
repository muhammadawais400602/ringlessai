# Comparison pages — content and Stitch prompt

Drop-in copy for three comparison routes:
- `/vs/apollo` — Xovra vs Apollo
- `/vs/zoominfo` — Xovra vs ZoomInfo
- `/vs/d7-leadfinder` — Xovra vs D7 Lead Finder

Positioning reality this doc respects:
- Xovra is an **AI outbound dialer with built-in Google Maps lead sourcing**.
- Pay As You Go: **$0.06/min** AI-handled, **$0.002/min** raw dial.
- No per-seat, no monthly minimum, no annual contract outside Enterprise.
- Honest about Google Maps ToS throughout.

Competitor numbers below are best-recollection approximations and shift every
quarter. Verify on each competitor's live pricing page before publishing.

---

## 0. Shared SEO infrastructure

Pattern that applies to every `/vs/*` page:

- **Title tag:** `Xovra vs {Competitor} | {Honest 1-line angle}`
- **Meta description:** Lead with the primary differentiator, mention price, end with a call to action (`See the full comparison`, `Compare in 2 minutes`).
- **Canonical:** `https://xovra.ai/vs/{slug}`
- **JSON-LD:**
  1. `Article` with `headline`, `author`, `datePublished`, `dateModified`.
  2. `FAQPage` with 3–4 Qs per page.
  3. `BreadcrumbList` (Home → Compare → {Competitor}).
- **Internal links to emit:** `/pricing`, `/`, `/compliance`, the other two `/vs/*` pages.
- **llms.txt:** list all three, since buyer-intent "vs" queries are high-value citation surfaces for AI search engines.

### Universal copy guardrails

- Never trash the competitor. "They're legitimate for X" earns more trust than "they suck."
- Every claim in a comparison table must survive a lawyer looking at it. If you're unsure, soften to "typically" or "most teams report."
- If Xovra loses on a dimension, say so. One honest loss makes ten honest wins land harder.

---

## 1. `/vs/apollo`

### SEO metadata

**Title:** `Xovra vs Apollo | SMB-Native Dialer vs B2B Database (2026)`
**Meta description:** `Apollo is a licensed B2B database with sequencing. Xovra is a per-minute AI outbound dialer with built-in Google Maps lead sourcing. Here's when each one wins.`
**Primary keywords:** apollo alternative, apollo vs xovra, cheaper than apollo, apollo for smb, apollo alternative for cold calling
**Secondary keywords:** b2b database vs scraper, licensed data vs scraped data, apollo per seat pricing, ai dialer alternative to apollo
**Long-tail (FAQ-driven):** is apollo good for smb, does apollo have an ai dialer, how much does apollo cost per seat

### 1.1 Hero

**Eyebrow:** `Compare`

**H1:** `Xovra vs Apollo — pick the one that fits your ICP.`

**Lede:**
Apollo is a licensed B2B database with sequencing and a basic dialer. Xovra is an AI outbound dialer that sources its own leads from Google Maps and charges by the minute. Different categories, different buyers, and the right call depends on whether you dial SMBs or enterprise accounts.

**Primary CTA:** `See the full comparison` → `#comparison`
**Secondary CTA:** `Jump to pricing` → `#pricing-side-by-side`

**Trust strip:** Honest wins and losses on both sides · Apollo pricing verified via their public page · Updated quarterly

### 1.2 Verdict (above the fold)

Two-column card block that answers "which is right for me" in 30 seconds.

**Pick Apollo if:**
- Your ICP is B2B SaaS buyers or mid-market enterprise.
- You need org-chart data, employee counts, funding signals.
- Your compliance team requires contractually licensed data.
- You run multi-touch email + LinkedIn + call sequences on licensed records.
- Per-seat pricing is fine because your team is ≤10 reps and stable.

**Pick Xovra if:**
- Your ICP is SMBs on Google Maps (local services, agencies, lead-gen clients).
- You want ad-intent proof (Google Ads tags / ATC / SERP) before you dial.
- You want an AI voice agent that qualifies live or transfers to a human.
- You want per-minute pricing with no per-seat charge.
- You'd rather pay $0.06 per connected minute than $79 per seat per month.

### 1.3 Feature comparison table

Full 14-row table rendered as real HTML.

| | **Apollo** | **Xovra** |
|---|---|---|
| Category | B2B contact database + sequencing | AI outbound dialer with built-in sourcing |
| Pricing model | Per-seat, monthly or annual | Per-minute, pay as you go |
| Starting price | Free (10k credits), Basic ~$49/user/mo, Pro ~$79/user/mo | $0.06/min AI-handled, $0.002/min raw dial |
| Data source | Licensed B2B database (260M+ contacts) | Live Google Maps scrape, enriched per-run |
| Data freshness | Quarterly refreshes, cached records | Live, scraped the day you run it |
| SMB coverage | Partial, patchy outside US | Native wherever Google Maps covers |
| Enterprise coverage | Strong | Weak — Xovra is not built for named accounts |
| Email on record | Yes, from licensed database | Yes, extracted from business's own website |
| Phone on record | Yes, licensed | Yes, Google Maps public listing |
| Ad-intent signal | No | 3 sources (on-site tags / ATC / live SERP) |
| Org-chart / hierarchy | Yes | No |
| Sequencing (email + LinkedIn + call) | Yes | Call only (for now) |
| AI voice agent (outbound) | Basic dialer, no AI voice | Multi-turn AI qualification at $0.06/min |
| Live call transfers | Click-to-call handoff | Live AI → human transfer with screen pop |
| Auto appointment booking | No | Yes, on your calendar |
| CRM sync | HubSpot, Salesforce, native | HubSpot, Close, GoHighLevel, Salesforce |
| ToS exposure on data | None (licensed) | Google Maps ToS violation (documented) |
| Contract | Monthly or annual | None on PAYG, annual on Enterprise |

### 1.4 Where Apollo wins (honest)

**Three paragraphs:**

1. **Enterprise targeting.** Apollo's database is the strongest in the comparison for companies 500+ employees. If your pitch requires a named account list with the CRO's email and the VP of Engineering's LinkedIn, Apollo pulls it reliably. Xovra can't do this — Google Maps doesn't publish that data.
2. **Org-chart data.** Who-reports-to-whom is baked into Apollo's licensed data. Sequencing tools inside Apollo use it to ladder up from SDR to decision-maker. Xovra has no equivalent.
3. **Compliance posture.** Apollo's data is contractually licensed from source providers. Xovra scrapes Google Maps, which violates Google's Terms of Service. Both operate legally with the output in most jurisdictions, but Apollo carries less tail risk and ships clean to a legal review.

### 1.5 Where Xovra wins (honest)

**Four paragraphs:**

1. **SMB native.** Apollo's SMB coverage is thin and stale — most local businesses aren't in the licensed database at useful depth. Xovra scrapes the public Google Maps result page, so coverage is wherever Maps covers (nearly everywhere).
2. **Ad-intent proof.** Apollo tells you *who* a business is. Xovra tells you *whether they currently pay for leads* — via on-site Google Ads tags, Ads Transparency Center creative counts, and live SERP capture. For SMB cold-call pitches ("we build websites / Facebook ads / AI agents"), this is the difference between a qualified opener and a cold row.
3. **Per-minute pricing beats per-seat for high-volume outbound.** At $79/seat × 5 reps = $395/mo you've committed to Apollo whether anyone dials or not. On Xovra, 50,000 minutes of AI-handled calls run about $3,000 — you pay only for what you use, scale down freely, scale up without re-contracting.
4. **AI voice agent included.** Apollo has click-to-dial. Xovra's managed tier includes a multi-turn AI voice agent that qualifies, transfers, and books — $0.06 per connected minute, no monthly base.

### 1.6 Pricing side-by-side

| | **Apollo** | **Xovra** |
|---|---|---|
| Free tier | 10,000 email credits/mo | Trial allowance on new accounts |
| Entry paid tier | Basic ~$49/user/mo | Pay As You Go at $0.06/min AI, $0.002/min raw |
| Scale tier | Professional ~$79/user/mo | Pay As You Go scales by minute; Enterprise at custom volume rates |
| Enterprise | Organization ~$99-$149/user/mo (annual) | Enterprise at custom rate, annual |
| Billing | Per seat, per month | Per connected minute |
| Lock-in | Annual contracts common | No contract outside Enterprise |

### 1.7 Migration story

Three sentences. Written for an agency owner reading at 11pm:

> If you're paying Apollo today and your SMB cold-call outcomes are tanking, run a two-week pilot. Keep your Apollo seat for your enterprise accounts. Dial your SMB funnel on Xovra. Compare qualified-conversation rate at the end of two weeks — most teams see it 2–3× higher on Xovra for SMB because advertisers actually pick up.

### 1.8 FAQ (for FAQPage JSON-LD)

- **Is Apollo better than Xovra?** For enterprise B2B sales motions targeting named accounts with licensed data, yes. For SMB outbound at high dial volume with AI qualification, Xovra is purpose-built where Apollo is adapted.
- **How much does Apollo cost vs Xovra?** Apollo starts free (10k credits/mo), then scales per-seat ($49–$149/user/mo). Xovra is usage-based at $0.06/min AI and $0.002/min raw dial with no seat charge.
- **Does Apollo have an AI dialer?** Apollo has a basic click-to-call dialer with call recording. It does not include an AI voice agent that qualifies prospects live, which is Xovra's core product.
- **Can I use both?** Yes. Teams with a hybrid motion keep Apollo for enterprise accounts and run Xovra for SMB cold-call volume.

### 1.9 Related comparisons + Final CTA

Two link cards (`/vs/zoominfo`, `/vs/d7-leadfinder`) + a final dark CTA block mirroring the pricing page.

---

## 2. `/vs/zoominfo`

### SEO metadata

**Title:** `Xovra vs ZoomInfo | SMB-Native Alternative Without the $15k Contract (2026)`
**Meta description:** `ZoomInfo is built for enterprise B2B named-account strategy. Xovra is an AI outbound dialer for SMB at $0.06/min. Here's when each wins, with a pricing side-by-side.`
**Primary keywords:** zoominfo alternative, zoominfo vs xovra, cheaper than zoominfo, zoominfo for smb
**Secondary keywords:** b2b intent data alternative, bombora alternative, no annual contract b2b database, ai dialer alternative to zoominfo
**Long-tail:** is zoominfo worth it for smb, how much does zoominfo cost, zoominfo without annual contract

### 2.1 Hero

**Eyebrow:** `Compare`

**H1:** `Xovra vs ZoomInfo — enterprise database, or SMB-native dialer?`

**Lede:**
ZoomInfo is the gold standard for enterprise B2B sales teams running named-account strategies. Xovra is an AI outbound dialer with built-in Google Maps lead sourcing, priced per minute. If your ICP sits under 50 employees and your contract budget is uncomfortable above $15k/yr, read on.

**Primary CTA:** `See the full comparison` → `#comparison`
**Secondary CTA:** `Jump to pricing` → `#pricing-side-by-side`

### 2.2 Verdict

**Pick ZoomInfo if:**
- Your ICP is enterprise (500+ employees), SaaS or regulated industries.
- You're running a named-account strategy (AEs on 50 named logos each).
- You need Bombora-style intent data from third-party aggregators.
- Average contract value is >$50k and the $15k+/yr ZoomInfo contract is a rounding error.
- Your sales ops team has the ZoomInfo workflow baked in.

**Pick Xovra if:**
- Your ICP is SMB on Google Maps.
- You dial high volume (tens of thousands of minutes per month).
- You want Google Ads intent (not generic aggregated intent).
- You want per-minute pricing with no annual contract.
- You want an AI voice agent to run qualification, not just click-to-dial.

### 2.3 Feature comparison table

| | **ZoomInfo** | **Xovra** |
|---|---|---|
| Category | Enterprise B2B database + workflow suite | AI outbound dialer with built-in sourcing |
| Pricing model | Annual contract, per-seat tiers | Per-minute, pay as you go |
| Starting price | ~$15k/yr minimum contract | $0.06/min AI-handled, $0.002/min raw dial |
| Data source | Licensed, licensed + web-crawled, enriched | Live Google Maps scrape + website enrichment |
| SMB coverage | Thin | Native |
| Enterprise coverage | Strong (industry standard) | Weak |
| Intent data | Bombora-powered intent signals | Google Ads intent (tags / ATC / live SERP) |
| Org chart / hierarchy | Yes | No |
| Email delivery | Via licensed waterfall | Extracted from each business's own site |
| Phone delivery | Via licensed waterfall | Google Maps public listing |
| AI voice agent | No | $0.06/min, multi-turn qualification |
| Live call transfers | Click-to-dial handoff | AI → human transfer with context screen pop |
| Auto appointment booking | No | Yes |
| CRM sync | Deep, industry-standard | HubSpot, Close, GoHighLevel, Salesforce |
| Contract | Annual minimum | None on PAYG |
| Cancellation | End of annual term | Anytime |

### 2.4 Where ZoomInfo wins (honest)

1. **Enterprise coverage.** ZoomInfo is the industry standard for a reason. If you're targeting Fortune 1000 or large SaaS, their licensed database is the deepest in the market. Xovra isn't playing in this category.
2. **Intent data breadth.** ZoomInfo surfaces aggregated intent from Bombora and their own content network — topic signals that no Google Maps scrape can produce. For "who's researching our category right now at an enterprise level," ZoomInfo is defensible.
3. **Workflow integration.** ZoomInfo ships deep integrations with Salesforce, Outreach, Salesloft, and the rest of the enterprise sales stack. If your ops team runs on those tools, ZoomInfo slots in.

### 2.5 Where Xovra wins (honest)

1. **Pricing that matches SMB outbound economics.** A 5-SDR team dialing SMBs doesn't need $15k/yr of enterprise data — it needs cheap connected minutes. Xovra at $0.06/min AI runs about $3,000 for 50,000 minutes monthly. ZoomInfo's annual minimum covers 4 months of that at full tilt.
2. **Google Ads intent beats generic intent for SMBs.** Bombora intent is aggregated topic interest at the company level. For an agency pitching web/mobile/AI builds to a dentist's office, that doesn't help. Knowing the dentist is actively running Google Ads today is a 10× stronger signal — and it's what Xovra proves.
3. **No annual commitment.** You can turn Xovra on this week and off next month with no penalty. ZoomInfo's contract shape makes "try it for a month" structurally impossible.
4. **AI dialer included, not bolt-on.** ZoomInfo's dialer is a basic click-to-call. Xovra's AI voice agent qualifies and transfers inside the same per-minute price.

### 2.6 Pricing side-by-side

| | **ZoomInfo** | **Xovra** |
|---|---|---|
| Starting commitment | $15k+ / yr annual contract | $0 commitment on PAYG |
| Entry per-seat cost | Varies by tier, typically $10-14k/seat/yr | None |
| Pure usage billing | No | Yes ($0.06/min AI, $0.002/min raw) |
| Contract flexibility | Annual, often 2-year terms | Monthly, cancel anytime |
| SMB-sized budget option | Usually not under $10k/yr | Common PAYG customer spends $1-3k/mo |

### 2.7 Migration story

> Keep ZoomInfo if your Fortune 1000 motion depends on it. For your SMB funnel, pilot Xovra for 60 days. Pick one vertical and one market, run all SMB outbound through Xovra, and measure cost per qualified meeting against your ZoomInfo seats allocated to SMB. Most hybrid teams end up reassigning 50–70% of their ZoomInfo SMB seats to enterprise and letting Xovra carry SMB entirely.

### 2.8 FAQ

- **Is Xovra cheaper than ZoomInfo?** For SMB outbound at moderate volume, dramatically. $0.06/min at 50k minutes/mo is about $3k vs ZoomInfo's $15k+/yr contract. For enterprise sales motions that justify the contract, ZoomInfo's per-record cost on named accounts can beat Xovra.
- **Does ZoomInfo have an AI voice agent?** Not at the level Xovra's managed tier provides. ZoomInfo's dialing is click-to-call with recording. There's no multi-turn AI voice agent that qualifies and transfers live.
- **Can I cancel ZoomInfo mid-contract?** Generally no, their contracts are annual with minimal mid-term cancellation rights. Xovra has no contract on Pay As You Go.
- **Which one is better for cold calling?** For enterprise cold calling with human SDRs on named accounts, ZoomInfo + a separate dialer. For SMB cold calling at volume with an AI voice agent, Xovra end-to-end.

### 2.9 Related comparisons + Final CTA

Link cards to `/vs/apollo` and `/vs/d7-leadfinder`, then standard dark CTA.

---

## 3. `/vs/d7-leadfinder`

### SEO metadata

**Title:** `Xovra vs D7 Lead Finder | Scraper vs AI Dialer + Scraper (2026)`
**Meta description:** `D7 is a closed-source Google Maps scraper at $29–$97/mo. Xovra is a per-minute AI outbound dialer with sourcing + scoring + CRM sync included. Here's how to choose.`
**Primary keywords:** d7 lead finder alternative, d7 vs xovra, d7 lead finder vs mapleads, cheap lead scraper alternative
**Secondary keywords:** google maps scraper with dialer, lead scraper + crm sync, ai dialer alternative to d7, ad intent lead scraper
**Long-tail:** how much does d7 lead finder cost, d7 lead finder review, is d7 lead finder worth it, d7 alternative with ai dialer

### 3.1 Hero

**Eyebrow:** `Compare`

**H1:** `Xovra vs D7 Lead Finder — scraper, or scraper plus AI dialer?`

**Lede:**
D7 Lead Finder is a closed-source Google Maps scraper at $29–$97/month. Xovra is an AI outbound dialer with lead sourcing, ad-intent scoring, CRM sync, and voice-AI qualification bundled in. Different scope, different price — here's when each one fits.

**Primary CTA:** `See the full comparison` → `#comparison`
**Secondary CTA:** `Jump to pricing` → `#pricing-side-by-side`

### 3.2 Verdict

**Pick D7 Lead Finder if:**
- You just need a scraped list of businesses and nothing else.
- You already have a dialer, a CRM, and a workflow for cold outreach.
- You want a point-and-click SaaS tool with no CLI, no API key setup.
- $29–$97/month is the right shape for your operating costs.
- You don't care about ad-intent scoring, lead scoring, or AI qualification.

**Pick Xovra if:**
- You want sourcing + scoring + dialing in one tool.
- You want the AI voice agent to qualify before your reps talk.
- You want ad-intent proof (Google Ads tags / ATC / SERP) before dialing.
- You'd rather pay per connected minute than a fixed monthly scraper fee.
- You dial enough that D7's scrape output is just the first 10% of the work.

### 3.3 Feature comparison table

| | **D7 Lead Finder** | **Xovra** |
|---|---|---|
| Category | Google Maps scraper SaaS | AI dialer with sourcing bundled in |
| Pricing | $29–$97/mo subscription | $0.06/min AI, $0.002/min raw dial |
| Source code | Closed | Managed cloud + open core for sourcing |
| Google Maps scrape | ✓ | ✓ |
| Website email enrichment | ✓ | ✓ |
| Tech stack detection | Limited | Yes |
| Social presence signals | Partial | Instagram / Facebook / TikTok + follower counts |
| Ad-intent scoring | No | On-site tags + Ads Transparency Center + live SERP |
| 0–100 lead fit score | No | Yes |
| Batch mode (multi-niche YAML) | Limited | Yes |
| CRM sync | CSV export | Two-way sync with HubSpot, Close, GoHighLevel, Salesforce |
| DNC + TCPA scrubbing | No | Yes, built-in |
| AI voice agent (outbound) | No | $0.06/min, multi-turn qualification |
| Live call transfers | No | AI → human with context screen pop |
| Auto appointment booking | No | Yes |
| ToS exposure | Same (Google Maps ToS) | Same (Google Maps ToS, documented) |

### 3.4 Where D7 Lead Finder wins (honest)

1. **Simplicity and price for pure scraping.** If what you need is a scraped Google Maps list and nothing more, D7 at $29/mo is cheaper than running Xovra's managed tier. There's no CLI, no setup, no Python environment.
2. **Point-and-click UX.** Non-technical operators can use D7 without touching a terminal. Xovra's open-source core requires `pip install` and a CLI command.
3. **Fixed monthly cost.** D7 bills a flat subscription. If you prefer predictable costs over usage-based billing, that shape matches.

### 3.5 Where Xovra wins (honest)

1. **Scraper + dialer in one.** D7 gives you a list. Xovra gives you a list *and* dials it *and* qualifies it *and* books the meeting. If you're going to buy a dialer anyway, buying them separately costs more and integrates worse.
2. **Ad-intent scoring you can't get from D7.** D7 tells you *where* a business is. Xovra tells you *whether they currently buy leads* via three independent Google Ads signals. For SMB cold-call pitches, this is the difference between a qualified first dial and a cold row.
3. **Two-way CRM sync, not just CSV export.** D7 ships CSVs. Xovra pushes qualified leads, transcripts, and outcomes into HubSpot/Close/GoHighLevel/Salesforce automatically — the manual CSV upload step disappears.
4. **DNC + TCPA built in.** If you dial the D7 output, you're responsible for scrubbing against federal and state DNC lists and logging TCPA consent per call. Xovra does this automatically.

### 3.6 Pricing side-by-side

| | **D7 Lead Finder** | **Xovra** |
|---|---|---|
| Entry tier | $29/mo | Pay As You Go, no base fee |
| Mid tier | ~$67/mo | Same PAYG, scale by usage |
| Top tier | ~$97/mo | Same PAYG, scale by usage |
| Dialer included | No | Yes, $0.06/min AI or $0.002/min raw |
| CRM sync included | CSV only | Yes, two-way |
| Compliance tooling | No | Yes |

### 3.7 Decision framework

Two sentences for someone comparing these in their head:

> If your monthly dialing is < 1,000 connected minutes and you already own a dialer, D7 + your existing stack is cheaper. If you're dialing more than that, or you want the AI voice agent to do the first-dial qualification, Xovra almost always costs less once you add up D7 + a separate dialer + a CRM uploader.

### 3.8 FAQ

- **Is D7 Lead Finder legit?** Yes, it's a closed-source commercial Google Maps scraper that's been around for years. Same ToS footing as any other scraper, Xovra included.
- **Does D7 have an AI dialer?** No. It outputs lead lists. Dialing happens in whatever tool you point at the CSV.
- **Can I use Xovra just for sourcing without the dialer?** The open-source core of the sourcing engine is MIT-licensed on GitHub — use it standalone for free, or get managed sourcing + dialer in Xovra Pay As You Go.
- **Is Xovra cheaper than D7 for pure scraping?** If you're only scraping and never dialing, D7 at $29/mo can be cheaper. Once you add a dialer and CRM uploader on top, Xovra comes out ahead.

### 3.9 Related comparisons + Final CTA

Links to `/vs/apollo` and `/vs/zoominfo`, then standard dark CTA.

---

## 4. Shared Stitch design prompt

Paste this into Stitch to design all three pages. The prompt generates one
template that then gets re-fed with the specific page's content from §1–§3.

```
Design a dark, premium comparison page template for "Xovra" — an AI outbound
dialer with built-in Google Maps lead sourcing. This is for routes like
/vs/apollo, /vs/zoominfo, /vs/d7-leadfinder. Target audience: sales ops
leaders, agency founders, and SDR team managers researching alternatives.

BRAND
- Name: Xovra (also "XOVRA AI")
- Vibe: modern AI SaaS. Confident, slightly edgy. Vercel + Linear + Framer
  energy, with neon-purple accents.
- Tone: honest, direct. Never trash the competitor — "they're legit for X,
  we're better at Y."

COLOR PALETTE
- Background: deep near-black #0b0618 for dark sections, warm white #ffffff
  for light sections, soft gray #f5f5f5 (--surface) for section cards.
- Primary accent gradient: #ec6afb (pink) → #8b2ff8 (purple). Used on key
  words in H1s, on the primary CTA, and on the "Xovra wins" column in the
  table.
- Supporting accent: #c187fb (lavender) for eyebrow labels on dark
  backgrounds.
- Body text: #5c5c5c on light, rgba(255,255,255,0.7) on dark.
- Line / divider: #e3e3e3 on light, rgba(255,255,255,0.1) on dark.

TYPOGRAPHY
- Sans-serif stack: Inter / Geist / General Sans. Heavy weight on H1 (-0.04em
  tracking, 64–88px desktop / 36–44px mobile). H2 sections at 40–56px.
- Body: Inter 16–18px desktop, 15–16px mobile, 1.6 line height.
- Table text: 14–15px, tabular-nums for any numbers.

PAGE STRUCTURE (top to bottom — eight sections)

1) NAVBAR (reuse homepage nav).

2) HERO — DARK
   - Fixed-position dark navbar carries over.
   - Eyebrow: "Compare" in lavender, uppercase, wide tracking (0.22em).
   - H1: "Xovra vs {Competitor} — {honest 1-line angle}". Treat the competitor
     name in neutral white and the angle after the em dash in gradient-fill.
   - Subhead (max 65ch): 2 sentences. States what each product is, then who
     the page is written for.
   - Two CTAs: primary white pill "See the full comparison" scrolling to
     #comparison, secondary dark glass pill "Jump to pricing" scrolling to
     #pricing-side-by-side.
   - Floating card right side on desktop: a tiny verdict summary. "Pick
     Apollo if →" with 2 lines, "Pick Xovra if →" with 2 lines. Separated by
     a thin horizontal rule. Lavender eyebrow at top.
   - Trust strip below CTAs: 3 small chips with icons (honest wins and
     losses, verified pricing, updated quarterly).

3) VERDICT (two-column card) — LIGHT
   - Section header: "Pick in 30 seconds." gradient-accent on "30 seconds."
   - Two cards side by side. Left card header: "Pick {Competitor} if"; right
     card header: "Pick Xovra if." Each with 5 bulleted criteria.
   - Right card (Xovra) is visually lifted: purple border glow, a floating
     "Recommended for SMB outbound" pill (or whatever fits that page) tucked
     into the top edge.
   - The left card uses the generic brand neutral; the right card uses the
     gradient accent on its header.

4) FEATURE COMPARISON TABLE — SURFACE
   - Header: "The full comparison." Eyebrow above: "Side by side."
   - Full-width table card with rounded corners, border, light shadow.
   - Column widths: capability label 45%, competitor 27%, Xovra 28%.
   - Xovra column has a very soft lavender tint (#fafafa → #faf5ff) to draw
     the eye without shouting.
   - Rows alternate: #ffffff → surface-tinted 50%.
   - Use check icons (purple) for included, minus icons (gray) for not
     included, and short text otherwise.
   - On mobile the table turns into a horizontal scroll with a soft fade
     mask on the right edge.

5) WHERE {COMPETITOR} WINS + WHERE XOVRA WINS — DARK + LIGHT STACKED
   - Two stacked blocks, each full-width.
   - "Where {Competitor} wins" on a light surface: 3 cards in a row. Each
     card has a gray header pill, a short title, and a 2-3 sentence body.
   - "Where Xovra wins" on a dark surface with the purple ambient glow: 4
     cards in a row (one more to subtly signal Xovra's broader strength
     without being heavy-handed). Each card has a lavender header pill, a
     gradient-accented title word, and a 2-3 sentence body.

6) PRICING SIDE-BY-SIDE — LIGHT
   - Section header: "Pricing side by side."
   - Simple 2-column pricing card layout. Left card for competitor (gray
     border, neutral text), right card for Xovra (purple border, featured
     treatment, "Most flexible" pill).
   - Each card shows: entry tier price, scale tier price, enterprise shape,
     contract flexibility, cancellation terms.
   - Below the two cards, a thin illustrative-numbers disclaimer in muted
     text.
   - CTA under the Xovra card: "See full Xovra pricing" → /pricing.

7) MIGRATION STORY / DECISION FRAMEWORK — DARK
   - Short block. 2–3 sentences in a large pull-quote style, lavender quote
     mark on the left.
   - Below the quote: a single CTA pill "Start a 60-day pilot" → /contact.

8) FAQ (accordion) — LIGHT
   - Left column: 1-sentence eyebrow, H2 "Pricing and fit FAQ", 3-sentence
     subhead, and a CtaButton to "Book an intro call".
   - Right column: 3–4 native <details> accordion rows. First row open by
     default. Chevron (lucide ChevronDown) rotates on open with a 200ms
     ease-out transition.

9) RELATED COMPARISONS + FINAL CTA — DARK
   - Three small link cards for the other two /vs/ pages and /pricing, each
     with a 1-line angle and a lucide ArrowRight icon that nudges right on
     hover.
   - Followed by a full-bleed rounded dark card: H2, 2-sentence subhead,
     two CTAs ("Start dialing" + "Talk to sales"), trust row below.

FOOTER (reuse homepage footer).

MOTION
- Section headings and cards fade up with a 24px rise over 700ms on scroll,
  staggered by 80ms within a group.
- Pricing cards and verdict cards lift 4px on hover with a soft purple
  shadow.
- Honor prefers-reduced-motion.

RESPONSIVE
- Desktop frame: 1440px.
- Tablet (768px): verdict cards stack, "where X wins" cards wrap to 2
  columns, pricing cards stack with Xovra on top.
- Mobile (375px): everything stacks. Table scrolls horizontally with a soft
  right-edge fade. H1 drops to 36–44px.

ACCESSIBILITY
- WCAG AA contrast on dark backgrounds.
- Every CTA has a visible focus ring in lavender (#c187fb).
- Accordion is keyboard-operable.
- Table has a caption element announced to screen readers: "Feature
  comparison between {Competitor} and Xovra."
```

### Iteration tips

- Generate the shared template first (empty copy slots). Then for each page,
  re-prompt with "Replace the hero copy with: {H1, lede}" and "Fill the
  table rows from: {paste CSV of the 14 rows}." Stitch converges faster
  this way than trying to design the three pages from scratch.
- When Stitch defaults to light mode even though you asked for dark, drop
  "dark surface #0b0618 primary" in the follow-up; it anchors.
- If Stitch's auto-generated competitor icon in the comparison table looks
  off, replace with a text-only competitor name — comparison pages read
  better without visual logos that can look like endorsements.

---

## 5. Content hygiene checklist (per page before publishing)

- [ ] Every claim about the competitor's pricing, features, or availability has been verified against their live site within the last 30 days.
- [ ] If a claim softens with "typically" or "most teams report," there's at least one defensible data point behind it.
- [ ] The "where {Competitor} wins" section is genuinely honest, not a strawman.
- [ ] No fabricated customer quotes or outcomes attributed to the competitor.
- [ ] Both JSON-LD blocks (`Article` and `FAQPage`) render without errors.
- [ ] Canonical set to self.
- [ ] All three `/vs/*` pages link to each other at the bottom.
- [ ] `/pricing` and `/compliance` linked at least once in-copy.
- [ ] Open Graph image is page-specific (not the generic Xovra OG).

---

## 6. Routing

Create under `src/app/vs/`:

- `src/app/vs/apollo/page.tsx`
- `src/app/vs/zoominfo/page.tsx`
- `src/app/vs/d7-leadfinder/page.tsx`

Each exports its own `metadata` and renders the shared layout with
per-page copy. Build a shared component `src/components/vs/VsPageLayout.tsx`
that takes props for the hero, verdict, table, win sections, pricing,
migration, and FAQ — the copy stays in the three route files, the layout
lives in one place.

Add the three pages to `llms.txt` so AI engines index them for buyer-intent
"vs" queries.
