# Stitch design prompt — /contact

Copy-paste-ready. Paste the shared brand + palette block from
`features-about-stitch-prompts.md` first, then this page-specific prompt.

The guiding principle: a contact page for a self-serve product shouldn't
look like an enterprise RFP intake form. The hero tone matches the About
page — "no gatekeeper, no qualification form." Three clear routes
(sales, support, partnerships) with the right contact method next to
each, a short form that doesn't ask for data we don't need, an optional
calendar embed, and a small FAQ of pre-sales questions. That's it.

---

## 0. Paste the shared brand + palette block first

Use the block from `docs/features-about-stitch-prompts.md` §0. It
covers palette (#0b0618 dark, #ffffff light, #f5f5f5 surface, brand
gradient #ec6afb → #8b2ff8, lavender #c187fb), typography (Inter /
Geist, display weight on H1 with -0.03em tracking), motion (24px rise
over 700ms on scroll, -4px lift on hover), responsive (1440 / 768 /
375), and a11y (WCAG AA contrast, focus rings in lavender).

---

## 1. `/contact` page prompt

```
Design a dark-and-light contact page for Xovra, the AI outbound dialer.
Audience: sales ops leaders, agency founders, SDR team managers, and
developers who've already read /pricing and /features and need to talk
to a human. Tone: honest, direct, operator-first. Explicit rejection
of RFP vibes.

PAGE STRUCTURE (top to bottom)

1) NAVBAR (reuse homepage nav).

2) HERO — DARK
   - Eyebrow: "Contact" in lavender, uppercase 0.22em tracking.
   - H1: "Three ways to reach us. Zero gatekeepers." Treat "Zero
     gatekeepers." in gradient-accent.
   - Subhead (max 60ch): 2 sentences explaining there's no sales
     qualification form, response time is under one business day,
     and the right channel depends on what you want to talk about.
   - No CTA row in the hero — the whole page below IS the CTA. Trust
     strip only: "Replies within 1 business day · No qualification
     form · Real humans, not an SDR flow."

3) THREE CONTACT ROUTES — SURFACE
   - Eyebrow: "Pick a channel."
   - H2: "Match the question to the right person." with "right
     person." in gradient accent.
   - 3-column grid of 3 route cards on desktop, stacked on mobile.
   - Each card is 1 article, all same height, structured as:
       Icon tile (44x44, rounded-xl, brand/10 bg, brand icon)
       Eyebrow caption (e.g., "SALES")
       H3 route title
       1-sentence description
       Horizontal rule
       "Best channel" label + inline link
       "Response time" label + text
       A primary button at the bottom
   - The three routes:

     Card 1 — SALES / "Book a demo"
       Icon: Rocket (lucide)
       For: "Sales ops and founders evaluating Xovra for their
         team's outbound. Want the dialer walked through live."
       Best channel: 30-minute call → button opens Calendly / Cal.com
         embed in section 4.
       Response time: Same business day, usually within 2 hours.
       Button: "Book a demo" (primary white pill with purple arrow)

     Card 2 — SUPPORT / "Email the team"
       Icon: LifeBuoy (lucide)
       For: "Current customers with a technical question, a bug
         report, or a campaign that isn't behaving as expected."
       Best channel: support@xovra.ai (inline mailto link)
       Response time: Under 4 business hours.
       Button: "Email support" (dark pill, opens mailto)

     Card 3 — PARTNERSHIPS / "Press + partners"
       Icon: Handshake (lucide)
       For: "Journalists, agency partners, affiliate programs, and
         integrations teams."
       Best channel: partners@xovra.ai (inline mailto link)
       Response time: 2–3 business days.
       Button: "Email partnerships" (dark pill, opens mailto)

   - Middle card (SALES) is the visually featured one: purple border
     glow, soft shadow, slightly lifted baseline. The other two sit
     on neutral white borders.

4) CONTACT FORM + CALENDAR — WHITE
   - Two-column grid, 50/50 on desktop, stacks on mobile.
   - Left column:
       Eyebrow "Send a note."
       H2 "Tell us what you're working on." with "working on." in
         gradient accent.
       Sub (max 60ch): "If you'd rather write than talk. We read
         every submission."
       Form fields (short, don't ask for things we don't need):
         • Name (text, required)
         • Work email (email, required)
         • Company (text, optional)
         • Monthly outbound dial volume (select dropdown with 4
           options: "< 1,000 minutes", "1,000–10,000", "10,000–100,000",
           "100,000+")
         • What are you trying to solve? (textarea, required,
           min-height 140px)
         • Checkbox: "Add me to product updates (optional, unsubscribe
           anytime)"
         • Submit button: primary white pill "Send message" with purple
           arrow chip
         • Small text below: "By submitting you agree to our Privacy
           Policy. We don't share your email."
       Form style: white bg, subtle gray borders on inputs (#e3e3e3),
       brand-color focus ring (#8b2ff8), 12px rounded corners,
       body-size labels above fields in uppercase 11px tracking-wide.

   - Right column: Calendar embed container.
       Eyebrow "Or pick a time."
       H2 "Book 30 minutes." with "30 minutes." in gradient accent.
       Sub: "Same calendar the Sales card points to. If the embed
         doesn't load, use the direct link below."
       Placeholder for Cal.com / Calendly embed (framed with a thin
         gray border, full width, 520px tall on desktop, 420px on
         mobile).
       Below the embed: a small "Direct link: cal.com/xovra" fallback
         link in body text, in case the iframe fails.

5) FAQ — SURFACE
   - Eyebrow: "Before you write."
   - H2: "A few things we get asked first." with "asked first." in
     gradient accent.
   - 2-column layout on desktop (left: eyebrow + H2 + sub + "Book a
     call" CtaButton; right: accordion). Stacks on mobile.
   - Sub (left column, under H2): "If the answer is already here,
     save yourself the back-and-forth."
   - Accordion rows (first row open by default):
       • "How fast will you respond?"
         "Sales within 2 business hours typically. Support within 4.
         Partnerships 2–3 business days."
       • "Do I need to be on a paid plan to book a demo?"
         "No. Pay As You Go is self-serve and doesn't require a demo
         — but if you want to see the dialer walked through before
         signing up, we'll run one in 30 minutes."
       • "Can I get help setting up a campaign?"
         "Yes. Pay As You Go includes shared-Slack onboarding.
         Enterprise includes a named CSM and dedicated onboarding."
       • "Where are you based?"
         "The team is distributed. Our primary contact hours are
         Monday–Friday, 9am–6pm Pacific."
       • "Do you have an office I can visit?"
         "No physical office. We meet customers over video calls and
         at industry events."
       • "I'm a journalist / analyst. Who do I email?"
         "partners@xovra.ai with 'Press' in the subject line. We'll
         route you to the right person within 2 business days."
   - Accordion row style: rounded-xl, subtle gray border on surface
     bg, open row flips to white with a soft purple shadow. Chevron
     icon rotates +45° on open.

6) FINAL CTA — WHITE PADDED, INNER DARK CARD
   - Full-bleed dark rounded-3xl card (#0b0618) with radial purple
     glows from top-right and bottom-left.
   - Eyebrow "Still deciding?" in lavender.
   - H2: "You can start without talking to us. Start anyway." with
     "Start anyway." in gradient accent.
   - Sub (max 60ch): "Pay As You Go is self-serve. Launch a campaign
     today, talk to us when you're ready."
   - Two CTAs: white pill "Start dialing" → /pricing, dark glass pill
     "See features" → /features.

7) FOOTER (reuse homepage footer).

LAYOUT NOTES
- Section max-width: 1500px (section-shell).
- Section vertical padding: py-20 md:py-28 to match the other pages.
- The form/calendar section should NOT use section-shell's py-28
  default — give it py-24 md:py-32 instead because the form needs
  extra breathing room above the fold.
- Icon tiles in the three route cards are 44x44 rounded-xl with
  bg-brand/10 and the lucide icon at 22px, strokeWidth 2, in brand
  purple — same tile style as /features engines and /about principles
  for visual rhyme.

CONTENT GUARDRAILS
- Never use "revolutionary," "world-class," "transforms the way,"
  "best-in-class," or "cutting-edge."
- Never suggest a response time we can't hit. If sales is slower than
  2 hours some days, change the number here instead of marketing an
  aspirational one.
- The form doesn't ask for job title, role, headcount, or industry.
  Those are RFP-form fields. We only need: who you are, how to reach
  you, roughly how much you'd dial, and what you're trying to solve.
- Email addresses (support@, partners@, hello@) must resolve to a real
  inbox before this page ships. If they don't exist yet, remove them
  from the page and use only the form + calendar.
```

### Iteration tips for /contact

- Stitch almost always renders contact pages with a left-aligned
  single-column form and a boring right-rail illustration. Re-prompt
  explicitly with "two-column grid, form on the left, calendar embed
  on the right, both the same vertical height." if it defaults to
  single-column.

- If Stitch fills the form with 10+ fields (title, phone, country,
  budget, timeline, etc.), re-prompt with "strictly 5 fields: Name,
  Work email, Company, Monthly dial volume dropdown, and a textarea.
  Plus one optional checkbox for product updates. No other fields."

- Calendar embeds: Stitch usually renders a placeholder iframe that
  looks lifeless. Re-prompt with "replace the empty iframe with a
  styled calendar grid mock — show a current month with 2–3 slots
  highlighted in brand purple and the rest in neutral — so the live
  Cal.com embed will slot in visually."

- The three route cards should visually weight the middle card more
  than the outer two. If Stitch renders them equal, re-prompt with
  "the middle (Sales) card gets a 1.5px brand purple border + soft
  purple shadow + 'Most responsive' pill tucked into the top edge;
  the outer cards stay on neutral 1px gray borders."

- If Stitch adds a map or physical office section, strip it — we're
  distributed-only. Re-prompt "no map, no physical address section."

---

## 2. Suggested wording tweaks after Stitch

Once Stitch generates the design, the copy below reads well out of the
box but check these two spots:

- The "Zero gatekeepers." in the H1 is deliberate. If Stitch softens it
  to "no gatekeepers" or "no gatekeeping," push back — the period after
  "gatekeepers" lands harder than a lowercase soft phrase.

- The sub under the form section says "we don't share your email."
  Keep that exact phrasing. Marketing-speak versions ("we respect your
  inbox," "your data is safe with us") read as filler.

---

## 3. Routing + deployment notes

- Route: `/contact`
- File (Next.js App Router): `src/app/contact/page.tsx`
- Import existing components: `Navbar`, `Footer`, `Reveal`, `Eyebrow`,
  `CtaButton`. The design should feel like it belongs on the same site
  as `/pricing`, `/features`, and `/about`.
- Form submission handler: `app/api/contact/route.ts` or wire straight
  to an existing form backend (Resend, Loops, Postmark). This spec
  doesn't dictate which — pick whatever already handles the waitlist
  signup.
- Calendar embed: Cal.com (self-hosted or hosted) works cleanly in
  Next.js App Router via their `<Cal />` client component. Make sure
  the component is marked `"use client"` or dynamically imported with
  `ssr: false` to avoid hydration warnings.
- Form validation: client-side with native HTML5 (`required`, `type`),
  server-side in the API route. No zod ceremony needed for 5 fields.
- `FAQPage` JSON-LD emitted inline with the six FAQ questions.
- Add to `llms.txt` so AI engines index the FAQ for "how to contact
  xovra" queries.

---

## 4. One honest caveat

If the sales / support / partnerships email addresses don't exist yet,
don't ship a page that lists them. Either:

- Route everything through the form until the inboxes exist, OR
- Set up the inboxes first (Google Workspace or Fastmail routing rules
  take 10 minutes), then ship the page.

Dead email addresses on a contact page are worse than a slightly
smaller contact page. Pick the honest option.
