# Xovra AI — site content & information architecture

**Product reality (from the `mapleads` repo):**
A Python engine that scrapes Google Maps for businesses in a niche + city, visits each
business's website to enrich data (email, tech signals, social, ad signals), scores each
record, and drops the result into Google Sheets (CRM-ready) or CSV. Ad-intent signals
come from three sources — on-site Google Ads tags, Ads Transparency Center, and live
SERP scraping (proxy required). Output includes an Instagram/Facebook/TikTok presence
block. The sheet is read by a dialer downstream.

**Positioning for the site: end-to-end outbound engine.**
`mapleads` sources and scores the list. The AI calling layer (positioned on the
homepage) qualifies and transfers. The site should sell the pipeline, not either half
alone — because the differentiator is the handoff from "we built the list" to "we
dialed it, qualified it, and booked the meeting."

**Honesty constraints to respect in every page.**
- Scraping Google Maps violates Google ToS (per README). Do not claim to be a licensed
  Google partner. Lean into "ad-intent signals" and "verified web presence" rather than
  "approved data feed from Google."
- Email is not on Maps — it is extracted from each business's own site. Phrase accordingly.
- Revenue and contact first/last name are intentionally blank in CSV output. Don't claim
  firmographic depth we don't ship.
- Live SERP source only works with a residential proxy. If "live SERP intent" is
  mentioned on the site, it belongs in an optional/premium tier, not the base claim.

---

## 1. Sitemap

Pages in bold are launch-week priorities. Others follow as time allows.

### Core marketing
- **`/` — Homepage** (already built)
- **`/product` — Product overview** (how the lead engine + AI dialer fit together)
- `/product/lead-sourcing` — The mapleads half (Google Maps + web + ad-intent + social)
- `/product/ai-dialer` — The AI calling + live-transfer half
- `/product/integrations` — HubSpot, GoHighLevel, Salesforce, Close, Zapier, Twilio SIP
- **`/pricing`**
- `/security` — SOC2 roadmap, data handling, call recording retention, DNC/TCPA posture
- `/trust/compliance` — TCPA / DNC / STIR-SHAKEN / GDPR posture

### Use cases (drive comparison / intent traffic)
- **`/use-cases/agencies`** — Web/mobile/AI-agent agencies prospecting SMBs
- `/use-cases/home-services` — Roofers, HVAC, solar, epoxy, etc.
- `/use-cases/b2b-saas` — Inbound/outbound blending for growth teams
- `/use-cases/real-estate` — Agents and brokerages
- `/use-cases/financial-services` — Lead buyers / insurance / loans

### Solutions by industry targeted (programmatic SEO opportunity)
- `/solutions/[niche]-in-[city]` — e.g. `/solutions/dentists-in-dubai`
  Template-driven: pulled from a curated niche × city matrix, each page ~500 words of
  genuinely useful info (avg market size, typical lead cost, common ad spend signals).
  Guard thin content by only shipping a page when the niche × city produces ≥N
  qualified prospects in our own dataset.

### Resources (E-E-A-T + GEO/AI citation surface)
- **`/blog`** — primary content hub
- `/guides/cold-call-script-builder` — interactive, high-link target
- `/guides/tcpa-dnc-cheatsheet` — compliance hub
- `/guides/google-maps-lead-generation` — how the sourcing actually works (own the term)
- `/guides/ai-cold-calling-playbook` — ebook-length, gated or ungated
- `/benchmarks` — annual outbound benchmarks report (updates yearly; strong link bait)
- `/glossary` — DNC, STIR-SHAKEN, CPL, SDR, intent signal, Ads Transparency Center…
- `/changelog`

### Social proof
- **`/customers`** — case study index
- `/customers/[slug]` — individual case studies (SEO: long-tail outcome queries)
- `/reviews` — G2 / Trustpilot / Capterra aggregation when it exists

### Company
- **`/about`**
- `/careers`
- **`/contact`**
- `/legal/privacy`, `/legal/terms`, `/legal/dpa`, `/legal/aup`
- `/legal/do-not-call` — our own DNC request form (legal requirement if we dial)

### Product-led
- **`/demo`** — book a strategy call
- `/signup` and `/login`
- `/app/*` — authenticated product

### SEO infrastructure (not nav-facing)
- `/sitemap.xml`, `/robots.txt`
- `/llms.txt` (GEO: declare which pages LLMs may cite)
- `/.well-known/ai-plugin.json` if we expose any MCP/tool surface
- Open Graph + Twitter images per page, JSON-LD Organization + SoftwareApplication + FAQPage

---

## 2. Homepage — accurate rewrite

The structure we built is right; the claims need re-anchoring in what the product
actually does. Changes are tight; most sections keep their shape.

### Hero
- **Headline:** `Stop Chasing Leads. Start Closing Them.` ✅ keep
- **Subhead (revised):**
  > Xovra finds local businesses that are already advertising, enriches them with
  > real contact data from their own websites, and dials the ones that match your
  > buyer — then transfers the qualified ones live or books the meeting for you.

  (Why: "AI outbound at scale" is table stakes; "already advertising" is the
  mapleads-specific hook that makes our lists different.)

- **Three chips (revised):**
  - `Pulls live ad-intent from Google Ads signals`
  - `Dials qualified leads, transfers the hot ones live`
  - `CRM-ready: HubSpot, Close, GoHighLevel`

### Integration strip
Keep as-is. Add two: **Instantly / Smartlead** if we ever sync email, remove them for now.

### Main Features (6 cards) — revised labels
1. **Smart Routing → "Ad-Intent Sourcing"**
   Find businesses already running Google Ads via on-site tags, Ads Transparency
   Center, and live SERP capture. Advertisers are the highest-fit cold-call targets:
   budget approved, CPL already tracked.
2. **Multi-Touch Cadence → "Enriched Contact Data"**
   Each lead is enriched from the business's own website — emails, tech stack,
   Instagram/Facebook/TikTok presence, review counts. No guessed revenue figures.
3. **Speed to Lead (<60s) → keep** (dialer side)
4. **Auto Booking → keep** (dialer side)
5. **Revenue Analytics → "Lead Scoring Engine"**
   Every record gets a 0–100 score from presence signals, ad signals, and web
   quality. Filter with `--min-score 50` before you spend a dial on it.
6. **Self-Managing Local DIDs → keep**

### Impact Quantified
Replace the 30%+ / 24/7 / <60s stats with numbers we can defend. Before launch,
produce defensible numbers from our own pilots. Honest placeholders:
- `3×` qualified-conversation lift vs. untargeted lists
- `~70%` of Maps results have a reachable site (and therefore an email path)
- `24/7` coverage ✅ keep
- `< 60s` speed-to-lead ✅ keep

### Path (01–05) — small tweaks
- **02 Define Prospect:** emphasize niche + city + min-score filter
- **03 Build Script:** ✅
- **04 Launch & Qualify:** mention Google Sheet → dialer handoff

### Why Top Teams Choose Xovra (6 dark cards) — keep structure
Rename `Outbound-First Platform` → `Source + Dial in One Stack`. That's the
real wedge: nobody else owns both halves.

### Case Studies
Remove invented names (ApexSolar, OmniDirect, ClearPath) until we have real logos.
Replace with "Pilot results — anonymized" blocks, stated as such. Google treats
fabricated testimonials as a trust violation under YMYL-adjacent review guidance.

### FAQ — add
- "Is scraping Google Maps legal?" — give the honest answer (ToS violation, but the
  data derived is public; you accept the risk; we recommend running only against
  niches and cities where it is commercially sensible for you).
- "Where do the emails come from?" — from the businesses' own websites; never
  purchased from brokers.

### Final CTA — keep
Change "72-day performance guarantee" to something defensible — e.g. "First 100
qualified dials included on any plan."

---

## 3. Per-page copy skeletons

### `/product/lead-sourcing`
**H1:** Lead sourcing built on ad-intent, not stale databases.
**Hook:** Every lead list vendor sells the same stale Apollo exports. Xovra builds
yours fresh, every week, from Google Maps + each business's own website + three
independent ad-intent sources.
**Sections:**
1. The three ad-intent sources (tags, ATC, SERP) — with the same honest table the
   README uses.
2. What each lead carries — phone, verified site, email (when present), social
   handles, follower counts, tech tags, score, pitch angle. What it does not carry
   — purchased revenue, guessed personal names. Say both.
3. The scoring model, in plain English.
4. Output shapes — Google Sheet (dialer-ready) and CSV (HubSpot-shaped).
5. Compliance — DNC pass is run before any number enters a dial queue.

### `/product/ai-dialer`
**H1:** Dial every scored lead. Transfer the hot ones in under 60 seconds.
**Sections:**
1. The qualification rubric (budget / timeline / decision-maker).
2. Live transfer flow (context passed to rep before pickup).
3. Appointment booking flow.
4. Voice/script customization.
5. Number pool management + local DIDs + spam-flag mitigation.
6. Transcripts, recording, retention.

### `/pricing`
Three tiers, named after the engine's real knobs:
- **Sourcing only** — monthly lead cap, no dialer. For agencies with their own SDRs.
- **Source + Dial** — includes outbound AI minutes bundle.
- **Source + Dial + Transfer** — adds live transfer + closer queue integration.

Add-ons: residential proxy (for live SERP), additional local DIDs, dedicated success.

Don't publish numbers until pilots inform them. Placeholder "Talk to sales" CTA on
the top tier is fine.

### `/security`
Must exist on day one if we dial. Cover: data handling, PII in sheets, retention of
call recordings, sub-processors, SOC2 status (honest — "in progress" is OK), DNC
sync cadence, STIR/SHAKEN attestation level.

### `/trust/compliance`
- TCPA — what consent model we require customers to carry.
- Federal + state DNC — how often we refresh (document the cadence).
- STIR/SHAKEN — attestation posture.
- GDPR — EU data handling; if we're not GDPR-ready, say the product is US/Canada-first.
- A link to `/legal/do-not-call` for consumer-side opt-out.

### `/use-cases/agencies` (highest-fit ICP from the README)
The README literally says mapleads qualifies leads "for web / mobile / AI-agent
services." This is the ICP. Write this page before any other use-case page.
**H1:** Prospect lists for agencies that sell web, mobile, and AI builds.
**Sections:** typical agency workflow before Xovra (buying Apollo lists, scraping by
hand, cold emails bouncing) vs. with Xovra (niche+city → scored list → dial the
advertisers → book calls). Include a worked example: "dentists in Dubai, running
Google Ads, no Instagram — $12k/mo budget tier — 47 prospects in your sheet by
morning."

### `/guides/google-maps-lead-generation`
**Why this page:** we can outrank every "how to get leads from Google Maps" how-to
by being honest about the ToS tradeoff and showing the actual mechanics. GEO-friendly
(AI engines love explicit, cited, how-it-works content).
**Structure:** what the Maps result page exposes, what it hides (emails), what the
business's own site exposes, how ad-intent signals triangulate, what the scoring
model does, where the ToS line is, how to operate on the right side of TCPA/DNC.

### `/blog` — launch-week post plan
1. `How we score 1.4M local businesses for cold-call fit`
2. `The three signals that prove a business is actively buying leads`
3. `Why "AI SDR" isn't one product — it's four`
4. `We analyzed 100,000 Google Ads advertisers. Here's what they all have in common.`
5. `TCPA in 2026: what agencies dialing on behalf of clients need to know`

---

## 4. Per-page SEO: title, meta, primary intent

| Path | Title (≤60c) | Meta description (≤155c) | Primary intent |
|---|---|---|---|
| `/` | Xovra AI — Source leads, dial them, book the meeting | AI outbound engine that sources ad-intent leads from Google Maps and qualifies them live. Book meetings, not dials. | brand + category |
| `/product/lead-sourcing` | Lead sourcing from Google Maps + ad-intent | Build fresh lead lists scored by on-site Google Ads tags, Transparency Center, and live SERP capture. CRM-ready. | commercial |
| `/product/ai-dialer` | AI outbound dialer with live transfers | Dial scored leads, qualify in under 60 seconds, transfer the hot ones live or book the meeting. | commercial |
| `/pricing` | Xovra AI pricing | Sourcing, dialing, live transfer — pick the layer your team needs. | transactional |
| `/use-cases/agencies` | Lead gen for web, mobile, AI agencies | Fresh prospect lists of local businesses already buying ads. Scored, enriched, dialed. | commercial-informational |
| `/guides/google-maps-lead-generation` | How to generate leads from Google Maps | The honest mechanics — what Maps shows, what it hides, and how to combine it with ad-intent signals. | informational |
| `/guides/tcpa-dnc-cheatsheet` | TCPA & DNC compliance for outbound | Federal + state DNC, consent frameworks, STIR/SHAKEN — the 2026 posture every dialing team needs. | informational |
| `/security` | Security at Xovra | Data handling, recording retention, subprocessors, SOC2 progress, DNC refresh cadence. | trust |
| `/blog/three-signals-a-business-is-buying-leads` | 3 signals a business is buying leads | On-site Ads tags, Ads Transparency Center creatives, and live SERP bids — what each proves and what each misses. | informational |

Rules we apply everywhere:
- Title case for titles; sentence case for H1.
- Every page ships Open Graph + Twitter cards. Image is a brand-consistent 1200×630.
- `Organization`, `WebSite`, and page-type JSON-LD (`SoftwareApplication` on product
  pages, `FAQPage` on homepage FAQ, `Article` on guides and blog, `BreadcrumbList`
  on nested paths).
- Canonical tag on every page, pointing to the self URL.
- `llms.txt` lists the pages we are happy to have cited by AI engines.

---

## 5. Keyword universe (seed)

Group → head terms → long-tail we can realistically rank for.

**Lead sourcing**
- `google maps lead scraper`, `google maps leads`, `local business leads`
- `how to find businesses running google ads`, `ads transparency center scraper`,
  `find advertisers in my city`

**AI calling**
- `ai cold calling`, `ai outbound dialer`, `ai sdr`, `ai voice agent for sales`
- `live transfer dialer`, `speed to lead ai`, `ai appointment setter`

**Agency vertical**
- `cold call leads for web design agency`, `how agencies prospect smbs`,
  `prospecting for ai agencies`

**Compliance**
- `tcpa compliance for ai dialers`, `dnc list checker`, `stir shaken attestation`

Programmatic SEO expansion (niche × city template):
- `dentists in dubai`, `hvac companies in phoenix az`, `epoxy flooring los angeles`
- Only ship a page when the niche × city produces real supply in our data. Thin
  programmatic pages are the fastest way to a Helpful Content penalty.

---

## 6. GEO (AI-engine citability)

Because a share of our buyers will discover us via ChatGPT / Perplexity / AI
Overviews, every long-form guide must include:
- A one-paragraph TL;DR directly under H1 that an engine can lift wholesale.
- A FAQ-style passage block near the bottom, with explicit questions as headings.
- At least one external citation to a primary source (FCC on STIR/SHAKEN, FTC on
  TCPA, Google's own docs on Ads Transparency).
- `author` + `datePublished` + `dateModified` in `Article` JSON-LD.

Ship `llms.txt` at the root. For now it lists:
- `/`, `/product/*`, `/pricing`, `/use-cases/*`, `/guides/*`, `/blog/*`.
Not listed: `/app/*`, `/legal/*` (except privacy), `/customers/*` until logos are
contractually cleared.

---

## 7. What to build next (concrete order)

1. Reword hero subhead + the three chips on `/` to match section 2.
2. Rename FeatureGrid labels per section 2.
3. Replace fabricated case-study logos with "Pilot results — anonymized" blocks.
4. Ship `/product/lead-sourcing`, `/product/ai-dialer`, `/pricing`, `/security`,
   `/trust/compliance`, `/use-cases/agencies` — the launch bundle.
5. Author `/guides/google-maps-lead-generation` and
   `/guides/tcpa-dnc-cheatsheet` — the first two SEO workhorses.
6. Add `/sitemap.xml`, `/robots.txt`, `/llms.txt`, JSON-LD across all pages.
7. Open the `/blog` with the five posts listed above.
