# Pricing page — real pricing

This doc mirrors the shipped page at `src/app/pricing/page.tsx`. It carries the
SEO copy and rationale so updates stay coordinated.

Headline numbers:
- **$0.06 / minute** — AI voice agent handles the call end-to-end.
- **$0.002 / minute** — raw dial (you or your rep talks). Everything else
  bundled.
- **$0 forever** — open-source lead sourcing on GitHub.

Billing rules:
- Minutes count only on connected two-way talk time.
- Voicemails and dropped calls: free.
- Rounded to the second after a 30-second minimum per connected call.
- No per-seat charge, no monthly minimum, no contract on Pay As You Go.

---

## Metadata

- **Title:** `AI Dialer Pricing with Built-In Lead Sourcing | Xovra`
- **Description:** `Transparent per-minute pricing. $0.06/min for AI-handled calls, $0.002/min for raw dial. Free open-source lead sourcing. No per-seat pricing, no annual lock-in.`
- **Canonical:** `https://xovra.ai/pricing`
- **Keywords:** ai dialer pricing, ai outbound dialer pricing, ai sdr pricing, ai voice agent pricing, per minute dialer pricing, ai cold calling cost, pay as you go ai dialer, ai dialer no monthly fee, google maps lead scraper pricing, apollo alternative pricing.

## JSON-LD on page

- `Product` with three `Offer` entries. The two Pay-As-You-Go offers use `UnitPriceSpecification` with `unitText: "minute"` — this is how Google parses per-minute pricing for rich results.
- `FAQPage` with 8 pricing questions.

Both schemas ship inline in the page via `dangerouslySetInnerHTML` so they're visible to crawlers and AI engines.

---

## Section-by-section

### 1. Hero (dark)
**H1:** Pay only for the minutes you actually talk.
**Sub:** Transparent per-minute pricing with no seats, no monthly minimum, no annual contract until you want one. Fresh Google Maps leads sourced for free on the open-source tier, or managed inside Pay As You Go.
**Primary CTA:** See the plans → `#plans`
**Secondary CTA:** Jump to the rate card → `#rate-card`
**Side card:** Shows both per-minute rates — AI at $0.06, Raw at $0.002 — with a "voicemails and dropped calls are free" footnote.
**Trust strip:** No per-seat · No monthly minimum · DNC + TCPA · Open-source sourcing included.

### 2. Three plan cards
Three cards with the middle one featured (purple border, soft glow, "Most flexible" pill):
- **Open Source — $0 forever (MIT)** → View on GitHub. Self-hosted lead sourcing. For solo operators and teams already running a dialer.
- **Pay As You Go — $0.06/min (featured)** → Start dialing. Managed cloud with the AI dialer and CRM sync. Usage-based, no monthly base.
- **Enterprise — Custom** → Book a call. Volume rates, custom scoring, SOC 2 prep, named CSM.

### 3. The rate card (two large cards)
- **AI-handled outbound — $0.06/min** on a dark card with gradient glow: real-time LLM qualification, multi-turn objection handling, live transfer with context, auto-booking.
- **Raw outbound dial — $0.002/min** on a light card: local DIDs with spam-flag rotation, DNC + TCPA scrubbing, recording + transcript, two-way CRM sync.
- Callout underneath: "Mix freely. A common flow — AI qualifies at $0.06/min, then live-transfers to a closer at $0.002/min for the human conversation."

### 4. Feature comparison table
Full table with 14 rows across Open Source / Pay As You Go / Enterprise. AI dialer row shows "$0.06/min" in the PAYG column (not "coming soon") — it's real now that the user is building it. Same for live transfers, booking, DNC scrub, STIR/SHAKEN.

### 5. "One subscription replaces five vendors" (dark)
Illustrative cost replacement table. Apollo ($2.4k/mo), ZoomInfo ($15k+/yr), stand-alone AI dialer ($0.10-$0.25/min + base), appointment setter contractor ($3k-$8k/mo), DNC scrubber ($300-$900/mo). Total: $5k-$10k+/mo replaced. Xovra's typical replacement at 50k AI minutes/mo = about $3k.

### 6. Comparison anchors
Three link cards to `/vs/apollo`, `/vs/zoominfo`, `/vs/d7-leadfinder`.

### 7. FAQ (accordion)
Eight questions, first opened by default, tuned for featured-snippet and AI-engine citation. Covers: per-minute mechanics, why AI vs raw differ, free tier, no seats, mixing AI + raw in one campaign, TCPA/DNC/STIR-SHAKEN, no minimum spend, voicemail billing.

### 8. Final CTA (dark card)
"Start free. Scale per minute." GitHub + Start dialing CTAs.

---

## SEO targeting

**Primary keywords (natural density target ~1%):**
- ai dialer pricing
- ai outbound dialer pricing
- per minute ai dialer

**Secondary keywords:**
- ai voice agent pricing
- ai sdr pricing
- pay as you go ai dialer
- ai cold calling cost
- apollo alternative pricing

**Long-tail (FAQ-driven):**
- how much does an ai dialer cost per minute
- is there a free ai dialer
- ai dialer with no monthly fee
- do ai dialers charge per seat
- what's the cheapest ai cold calling tool

---

## Deployment checklist

- [x] Route exists at `src/app/pricing/page.tsx`
- [x] Metadata set with canonical, OG, keywords
- [x] Product + FAQPage JSON-LD emitted inline
- [x] Navbar linked to `/pricing`
- [x] No per-seat claims made that aren't true
- [x] All "coming soon" language removed from PAYG column — the dialer is being built, and the page states its real price
- [x] Illustrative replacement numbers carry the "illustrative" disclaimer

---

## Note on cost basis vs. retail

If `$0.06` and `$0.002` are your **cost basis** (what the telephony + inference stack costs you), you're currently selling at cost. A healthy SaaS margin on voice-AI workloads is typically 50-70%, which would put retail at `$0.10-$0.12/min` for AI and `$0.005-$0.007/min` for raw.

If those are your **retail prices**, you're positioned as the cheapest AI dialer in the category — strong wedge against Vapi / Retell / Air AI, all of which charge $0.10-$0.25/min + a base fee.

Either way, the page copy and schema are written at `$0.06` / `$0.002`. Adjust the two constants at the top of `src/app/pricing/page.tsx` (`RATE_AI`, `RATE_RAW`) and everything on the page updates — hero, rate card, comparison table, FAQ, JSON-LD.
