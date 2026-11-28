# Stitch design prompts — /features and /about

Two copy-paste-ready prompts. Shared brand + palette block at the top; one
prompt per page below.

---

## 0. Shared brand + palette (paste once at the start of each prompt)

```
BRAND
- Name: Xovra (also "XOVRA AI")
- Vibe: modern AI SaaS. Confident, slightly edgy. Vercel + Linear +
  Framer energy, with neon-purple accents.
- Tone: honest, direct, operator-first — not procurement-first.

COLOR PALETTE
- Backgrounds: deep near-black #0b0618 for dark sections, warm white
  #ffffff for light sections, soft gray #f5f5f5 (--surface) for section
  cards.
- Primary accent gradient: #ec6afb (pink) → #8b2ff8 (purple). Use for
  gradient text on the key phrase of H1/H2s, primary CTA, decorative
  radial glows.
- Supporting accent: #c187fb (lavender) for eyebrow labels on dark
  backgrounds and FAQ chevrons.
- Body text: #5c5c5c on light, rgba(255,255,255,0.7) on dark.
- Lines / dividers: #e3e3e3 on light, rgba(255,255,255,0.1) on dark.
- Brand icon backing color: rgba(139,47,248,0.1) (soft purple) with
  #8b2ff8 icon.

TYPOGRAPHY
- Sans-serif: Inter / Geist / General Sans. Heavy weight on H1
  (-0.03em tracking, 64–88px desktop / 36–44px mobile). H2s at
  40–56px with clamp. Body 15–17px, 1.6 line height.
- Numbers (stats): extra-large, display weight, tabular-nums for
  per-minute rates. Gradient-filled when they're a hero number.

MOTION
- Section headings and cards fade up with a 24px rise over 700ms,
  staggered by 80ms within a group.
- Cards lift -4px on hover with a soft purple shadow.
- Icon tiles (10–12 cards per page) get a subtle 180° color shift
  from brand/10 → brand/20 on card hover.
- Respect prefers-reduced-motion.

RESPONSIVE
- Desktop frame: 1440px.
- Tablet (768px): grids collapse 3→2, 4→2.
- Mobile (375px): everything stacks. H1 drops to 36–44px. Padding
  tightens to px-6.

ACCESSIBILITY
- WCAG AA contrast on dark backgrounds.
- Every CTA has a visible focus ring in lavender (#c187fb).
- Icon-only buttons have aria-labels.
```

---

## 1. `/features` page prompt

Paste the shared block above, then this:

```
Design a dark-and-light product features page for Xovra, the AI outbound
dialer. Audience: sales ops leaders, agency founders, SDR team managers
who are already on the homepage and want the full feature list before
hitting /pricing.

PAGE STRUCTURE (top to bottom)

1) NAVBAR (reuse homepage nav — logo + "Features / Pricing / About" +
   dark "Contact us" pill + white "Login" pill with purple arrow chip).

2) HERO — DARK
   - Eyebrow: "Features" in lavender, uppercase 0.22em tracking.
   - H1: "Everything your outbound team needs. One bill." Treat the
     "One bill." in gradient-accent.
   - Subhead (max 60ch): 2 sentences. Lead with "ships sourcing,
     scoring, AI qualification, live transfers, auto booking, CRM sync,
     and built-in compliance in a single per-minute subscription."
   - Two CTAs side-by-side: primary white pill "See pricing" → /pricing,
     secondary dark glass pill "Browse the features" scrolling to
     #pillars with a right-arrow icon.
   - Below CTAs, divided from the hero text by a thin white/10 top
     border, a 4-column stat row:
       $0.06 / per AI minute
       $0.002 / per raw dial minute
       < 60s / live transfer handoff
       24/7 / nights and weekends
     Each stat: display-size number on top, 12px uppercase 0.18em
     tracking label below in white/50.

3) SIX ENGINES — SURFACE
   - Eyebrow "Six engines."
   - H2: "From 'niche + city' to a booked meeting." with "booked
     meeting" in gradient accent.
   - 2-column grid (3 rows). Each card is a full article:
       • 44×44 rounded-xl tile with brand/10 background and the
         lucide icon in brand purple.
       • H3 title.
       • 2-sentence body in #5c5c5c.
       • A thin horizontal rule.
       • 4 sub-feature bullets, each with a 6px lavender dot and
         ink text.
   - The six cards (in order with their icons):
       1. MapPin — Google Maps lead sourcing
       2. Database — Ad-intent scoring (three sources)
       3. Bot — AI voice agent
       4. PhoneCall — Live call transfers
       5. CalendarCheck — Auto appointment booking
       6. RefreshCw — Two-way CRM sync
   - Card border: 1px #e3e3e3 on white bg, rounded-2xl.

4) HOW IT RUNS — WHITE
   - Eyebrow "How it runs."
   - H2: "The whole loop, one subscription." with "one subscription"
     in gradient accent.
   - 5-column grid on desktop (wraps to 1 column on mobile). Each
     step card has:
       • A giant gradient-filled numeral (01, 02, 03, 04, 05) at 36px.
       • An H3 step title.
       • A 2-sentence body.
       • Card hover: lifts -4px, bg flips from surface to white, soft
         purple shadow bloom.
   - Steps: Set your rubric → Leads are sourced → AI dials and
     qualifies → Transfer or book → CRM sync.

5) UNDER THE HOOD — SURFACE
   - Eyebrow "Under the hood."
   - H2: "Compliance and ops, handled." with "handled." in gradient.
   - Sub: "The infrastructure details that usually become their own
     vendor line items. Included here."
   - 4-column grid of 8 spec cards. Each card: 40×40 icon tile in
     brand/10 background, lucide icon in brand purple, H3 title at
     18px, 2-sentence body at 14px.
   - Specs (with icons):
       ShieldCheck — DNC + TCPA scrubbing
       Lock — STIR/SHAKEN
       Clock — 24/7 coverage
       Zap — Speed to lead
       LineChart — Operator analytics
       Workflow — Rubric configuration
       Headphones — Local DID pool
       Gauge — Flat per-minute pricing

6) INTEGRATIONS — WHITE
   - Eyebrow "Integrations."
   - H2: "Ships directly into the tools you use." with "the tools you
     use." in gradient accent.
   - Right-aligned sub on desktop: "Two-way sync with the CRMs your
     team already lives in."
   - 4-column grid of 8 plain cards (text only, no logos — avoids
     licensing issues). Each card: company name (15px semibold ink),
     "Two-way sync" caption in 12px uppercase lavender tracking.
   - Cards: HubSpot, Close, GoHighLevel, Salesforce, Pipedrive,
     Zapier, Google Sheets, Webhook.

7) NUMBERS FROM THE FIELD — DARK
   - Eyebrow "Numbers from the field." in lavender.
   - H2: "Why teams replace their SDR floor." with "SDR floor." in
     gradient accent.
   - 4-column stat grid. Each stat sits above a 2px white/10 top
     border. Above the border, a small lavender uppercase hint
     label. Below: big 4xl–5xl number in white, 14px body text
     underneath in white/60.
   - Stats:
       Transfer speed — < 60s — Live-transfer handoff time
       Qualified lift — 3× — Qualified-conversation lift vs humans-only
       Coverage — 24/7 — Coverage with no overtime bill
       Headcount — 0 — SDR seats required for a weekend campaign
   - Decorative radial glow from the top-right corner in #ec6afb at
     18% alpha, fading to transparent at 60%.

8) FINAL CTA — WHITE PADDED, INNER DARK CARD
   - Full-bleed dark rounded-3xl card (#0b0618) with radial purple
     glows from top and bottom.
   - Eyebrow: "Start today." lavender.
   - H2: "See the features live. Dial this week." with "Dial this
     week." in gradient.
   - Two CTAs: white pill "Start dialing" → /pricing, and dark pill
     "Book a demo" → /contact.
   - Trust row below: "No per-seat pricing · No monthly minimum ·
     DNC + TCPA compliant" in 12px white/45.

9) FOOTER (reuse homepage footer).

LAYOUT NOTES
- Section max-width: 1500px, side padding 24px / 56px / 80px at
  mobile / tablet / desktop (section-shell).
- Section vertical padding: 80px mobile / 112px desktop (py-20
  md:py-28).
- Rounded corners: sections use rounded-3xl on dark CTA card,
  rounded-2xl on content cards, rounded-xl on inner tiles.
```

### Iteration tips for /features

- The six-engine section does the heavy lifting. Generate that block
  first standalone with "Only the six-engine section, 2 columns of 3
  rows, use lucide MapPin, Database, Bot, PhoneCall, CalendarCheck,
  RefreshCw," then re-prompt with "add the 4 sub-feature bullets under
  a horizontal rule in each card."
- If Stitch generates competitor logos for the integrations strip,
  re-prompt with "replace with plain text labels — no company logos"
  to avoid brand usage issues.
- The "under the hood" spec grid should look lightweight compared to
  the six-engine section. If Stitch makes the two sections visually
  equal, re-prompt specifying "40×40 icon tile, 18px title, and only
  2 sentences of body on specs cards — these are smaller than the
  six-engine cards."

---

## 2. `/about` page prompt

Paste the shared block above, then this:

```
Design a dark-and-light about page for Xovra, the AI outbound dialer.
Audience: sales ops leaders and agency founders evaluating whether
to trust us with their outbound stack. Tone: honest about what ships
and what's roadmap. No "world-class" / "revolutionary" language.
Principles-driven, not team-photo driven.

PAGE STRUCTURE (top to bottom)

1) NAVBAR (reuse homepage nav).

2) HERO — DARK
   - Eyebrow: "About Xovra" in lavender uppercase 0.22em tracking.
   - H1: "Built for the sales floor. Not for procurement." Treat
     "sales floor." in gradient accent, leave the "Not for procurement."
     clause in neutral white.
   - Subhead (max 60ch): 2 sentences explaining Xovra ships one
     subscription, publishes its rate card, bundles compliance.
   - Two CTAs: primary white pill "See the rate card" → /pricing,
     secondary dark glass pill "What we believe" scrolling to
     #principles with a right-arrow icon.
   - No stat strip here — the hero stays text-heavy because this is a
     narrative page, not a product page.

3) WHY XOVRA EXISTS — WHITE
   - Two-column grid (35/65 split on desktop, stacks on mobile).
   - Left column:
       Eyebrow "Why Xovra exists." in brand purple.
       H2: "SMB outbound is broken. We're fixing the stack." with
       "We're fixing the stack." in gradient accent.
   - Right column: three paragraphs of body text at 16.5px / 1.6
     line height in #5c5c5c. First paragraph names the pain (teams
     buying Apollo seats or stitching five vendors). Second paragraph
     explains both paths bury sales ops in integration. Third
     paragraph positions Xovra as the one subscription that replaces
     the stack.

4) PRINCIPLES — SURFACE
   - Eyebrow "Principles."
   - H2: "Six things we believe." with "believe." in gradient accent.
   - Sub: "Not slogans. Decisions we make every release when we have
     to pick between two choices."
   - 2-column grid of 6 principle cards. Each card:
       • 44×44 rounded-xl tile with brand/10 background and the
         lucide icon in brand purple.
       • H3 title (21px, bold, ink).
       • 3-sentence body in #5c5c5c.
   - Principles (with icons):
       HandCoins — Transparent pricing wins trust.
       Puzzle — Bundles beat stitching.
       ShieldCheck — Compliance isn't an upsell.
       Zap — Operators ship faster than procurement.
       Compass — Honest about ToS, honest about roadmap.
       LineChart — Measure booked meetings, not activations.
   - Card hover: lifts -4px with soft purple shadow.

5) HONEST TIMELINE — WHITE
   - Eyebrow "Honest timeline."
   - H2: "What ships today. What's next." with "What's next." in
     gradient.
   - Sub: "If something isn't shipping yet, we say so. Here's the
     honest state of the product."
   - Vertical list of 4 horizontal cards (not a grid). Each card:
     left slot (192px wide on desktop) holds a status pill. Right
     slot holds H3 title (21px) and 2-sentence body.
   - Status pills (pills are 11px uppercase, 0.18em tracking, rounded
     pill, pill colors indicate shipping status):
       "Shipping now" — brand/10 bg, brand purple text.
       "Rolling out" — amber/15 bg, amber-700 text.
       "On the roadmap" — surface-2 (#efefef) bg, body gray text.
   - The four items:
       Shipping now — Google Maps lead sourcing engine
       Shipping now — Managed cloud + CRM sync
       Rolling out — AI voice agent at $0.06/min
       On the roadmap — Vertical templates and custom scoring
   - Card hover: lifts -0.5rem, bg flips to white with shadow.

6) WHO WE SERVE — DARK
   - Two-column grid (same 35/65 split as section 3), but inverted
     onto dark background.
   - Left column:
       Lavender eyebrow "Who we serve."
       H2 white: "Operators. Not RFPs." with "RFPs." in gradient.
   - Right column: two paragraphs in white/70. First paragraph names
     ICP (agencies, lead-gen companies, call centers, SDR teams).
     Second paragraph acknowledges enterprise buyers but says "only
     engage Enterprise when your volume clearly earns it."
   - Decorative radial glow from the top-right corner (#ec6afb at
     18% alpha fading to transparent at 60%).

7) STILL DECIDING — SURFACE
   - Eyebrow "Still deciding?"
   - H2: "Benchmark Xovra against the alternatives." with "the
     alternatives." in gradient accent.
   - 3-column grid of link cards. Each card: H3 title left-aligned,
     ArrowRight icon in brand purple right-aligned, 2-sentence sub
     below in #5c5c5c.
   - Cards: "Xovra Pricing" → /pricing, "Compare vs AI dialers" →
     /vs, "Features" → /features.
   - Card hover: lifts -4px, border goes brand/40, shadow bloom in
     purple.

8) FINAL CTA — WHITE PADDED, INNER DARK CARD
   - Full-bleed dark rounded-3xl card (#0b0618) with radial purple
     glows from top and bottom.
   - Eyebrow "Talk to us." lavender.
   - H2: "Have a question? Ask directly." with "Ask directly." in
     gradient.
   - Sub: "No gatekeeper, no qualification form. Book a 30-minute
     call or email us for anything deeper than the docs cover."
   - Two CTAs: white pill "Book a call" → /contact, dark pill "See
     pricing" → /pricing.

9) FOOTER (reuse homepage footer).

VOICE GUIDELINES
- Never use the words "world-class," "revolutionary," "transforms the
  way," or "best-in-class." Use direct, specific language instead.
- Don't invent team members or company history. If there's no team
  photo, don't manufacture one.
- When discussing roadmap items, use "Rolling out" or "On the roadmap"
  tags — never present-tense marketing claims.
- Honest-about-ToS: the compliance posture around Google Maps scraping
  is explicit in the Compass principle card; this is intentional and
  shouldn't be softened.

LAYOUT NOTES
- Section max-width: 1500px, section padding matches /features page.
- Principles cards use the same 44×44 brand/10 tile as /features
  six-engine cards — intentional visual rhyme between the two pages.
- The timeline section's vertical list is the only non-grid layout on
  the page — the rest uses grids.
```

### Iteration tips for /about

- Stitch defaults to team-grid layouts for About pages. If it tries to
  generate a "Meet the team" grid, re-prompt with "no team section —
  this is a principles-driven about page, not a people page."
- The "Honest timeline" block needs the status pill colors enforced
  explicitly. If Stitch makes all three pill colors the same, re-prompt
  with "the three status pills must use distinct backgrounds: brand
  purple for 'Shipping now', amber for 'Rolling out', neutral gray for
  'On the roadmap'."
- Keep the "Why Xovra exists" and "Who we serve" narrative blocks text
  heavy. If Stitch tries to add decorative imagery to them, re-prompt
  with "narrative blocks stay text-only with no illustration — the
  typography is the visual."

---

## 3. Combined Stitch workflow

If you want both pages designed in sequence:

1. Paste the shared brand + palette block, then the `/features` prompt
   below it. Generate.
2. Iterate on `/features` until approved. Use the iteration tips.
3. Open a new Stitch session (fresh canvas is cleaner than reusing).
4. Paste the shared brand + palette block, then the `/about` prompt.
   Generate.
5. Iterate on `/about`.
6. Export both. The design tokens stay consistent because both prompts
   share the same palette and type scale.

If Stitch produces visual drift between the two pages, the fastest fix
is to copy a specific element from the approved `/features` design and
re-feed it into `/about` with "use this component as the reference
style for the equivalent card on the about page."
