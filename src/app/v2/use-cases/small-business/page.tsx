"use client";

import UseCaseTemplate, {
  icons as i,
  type UseCaseData,
} from "../../_components/UseCaseTemplate";

const data: UseCaseData = {
  slug: "small-business",
  eyebrow: "Small Business",
  headline: {
    top: "Built for solo operators",
    italic: "and small teams.",
  },
  sub: "Find local leads, call from the browser, and let AI make the first contact. No headset, no large monthly commitment.",
  heroImage:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  heroBadges: [
    "Usage-based pricing",
    "Calls from any browser",
    "AI always discloses it is AI",
  ],
  demoCard: {
    title: "Westside Dental",
    meta: "Dentist · Denver, CO",
    tag: "WEAK_SITE",
    tagColor: "from-amber-400 to-orange-500",
    score: 82,
    angle: "WEAK_SITE",
    scriptHint:
      "Noticed the site audit flagged no HTTPS. 68% of dental searches happen on mobile — worth 5 minutes?",
    outcomes: ["Interested", "Call back", "No answer"],
  },
  who: [
    {
      title: "Solo founder doing their own sales",
      body: "Pull a Google Maps list, start with the best-scored leads, log every outcome with one keystroke.",
      icon: i.Users,
    },
    {
      title: "Owners not ready to hire a rep",
      body: "Pay for the minutes and texts you actually use. The AI qualifier takes first-touch calls.",
      icon: i.Sparkles,
    },
    {
      title: "Local services adding B2B",
      body: "Search the niche and city, read the site audit, call the leads that look worth it.",
      icon: i.MapPin,
    },
    {
      title: "Two or three person teams",
      body: "Invite teammates as admins or agents, hand them a number, share one campaign worklist.",
      icon: i.Users,
    },
  ],
  problems: [
    {
      problem: "Building a lead list takes longer than calling.",
      solution:
        "Scrape by niche and city, enrich with site audit, ad detection and social presence, and get a scored Google Sheet or CSV.",
    },
    {
      problem: "No phones, no headsets, no phone system.",
      solution:
        "A browser WebRTC dialer. Press C to call, H to hang up, 1–6 to log an outcome.",
    },
    {
      problem: "Cold calling eats the hours needed for real work.",
      solution:
        "AI mode runs first-touch calls. The qualifier discloses it is AI, asks qualifying questions, and reports score, interest, qualified, and next action.",
    },
    {
      problem: "Follow-up falls through the cracks.",
      solution:
        "After a connected AI call, send a follow-up SMS. Two-way replies arrive in the app and STOP opt-outs are detected.",
    },
  ],
  features: [
    { icon: i.MapPin, t: "Google Maps lead sourcing", b: "Search by niche and city. Get a clean sheet in minutes.", tag: "Niche + city" },
    { icon: i.Sparkles, t: "Enrichment & scoring", b: "Website audit, ad detection, and Instagram / Facebook / TikTok signals roll into a single score.", tag: "Scored leads" },
    { icon: i.Phone, t: "Browser dialer", b: "Manual, one lead at a time. Outcomes written straight to the sheet.", tag: "No hardware" },
    { icon: i.Keyboard, t: "Keyboard shortcuts", b: "C to call, H to hang up, 1–6 to log a disposition.", tag: "C / H / 1-6" },
    { icon: i.Bot, t: "AI qualifier", b: "Per-lead context, discloses AI, returns score, interest, qualified and next action.", tag: "First-touch calls" },
    { icon: i.Zap, t: "Live AI rebuttals", b: "Claude or Gemini drafts context-aware replies and post-call follow-ups.", tag: "Claude / Gemini" },
    { icon: i.MessageSquare, t: "Two-way SMS", b: "Text via Telnyx, opt-out detection, you register your own 10DLC.", tag: "$0.03 / SMS" },
    { icon: i.FileSpreadsheet, t: "Call script templates", b: "Placeholders — {name}, {category}, {city}, {rating}, {evidence}.", tag: "Placeholders" },
    { icon: i.FileSpreadsheet, t: "Google Sheets + CSV", b: "You own the data. HubSpot-format CSV export whenever you need it.", tag: "You own the data" },
  ],
  angles: [
    { tag: "RUNS_ADS", color: "from-emerald-400 to-teal-500", body: "Already pays for traffic. Pitch conversion, landing pages, or call tracking." },
    { tag: "NO_SITE", color: "from-rose-400 to-red-500", body: "Reviews but no site. Pitch web design, listings, or local presence." },
    { tag: "WEAK_SITE", color: "from-amber-400 to-orange-500", body: "Audit found issues. Use the specific evidence in your opening line." },
    { tag: "STRONG_SITE", color: "from-cyan-400 to-blue-500", body: "Solid site already. Skip the web pitch — lead with reviews, social, or ads." },
  ],
  steps: [
    { t: "Pick a niche and a city", b: "Example: dentists in Denver. Xovra pulls the Maps list." },
    { t: "Review the scored sheet", b: "Sort by score, drop poor fits, keep what looks real." },
    { t: "Write one script with placeholders", b: "Add a campaign brief and greeting. Save it." },
    { t: "Choose manual calling or AI mode", b: "Dial yourself or let the qualifier handle the first touch." },
    { t: "Log outcomes and text back", b: "Retry logic brings back non-answers at the attempt cap." },
    { t: "Check the usage ledger", b: "See what the campaign actually cost, per event." },
  ],
  scriptSection: {
    bullets: [
      "Placeholders fill in name, category, city, rating, and evidence",
      "Each campaign has its own brief and greeting",
      "Rebuttals use the lead's own context",
      "Follow-up drafts are generated right after the call",
    ],
    templateTitle: "Call script template",
    templateBody: `Hi {name}, calling about your {category} listing in {city}.
Saw you've got {rating} stars and {evidence} —
got 30 seconds to talk about it?`,
    rebuttalTitle: "Live rebuttal · prospect says 'I already have a marketing person'",
    rebuttalBody:
      "Totally — I'm not asking to replace them. Mind if I send what I found so they can look? I'll text it so it's easy to forward.",
  },
  tracking: [
    "Outcomes stream to a Google Sheet",
    "HubSpot-format CSV export, any time",
    "Retry logic up to a user-set attempt cap",
    "Usage ledger — per-event record of every call and text",
  ],
  compliance: [
    "8 AM – 9 PM calling window",
    "Suppression lists, SMS opt-outs honored",
    "Attempt caps per lead",
    "AI disclosure at the start of every AI call",
  ],
  pricing: [
    { label: "Manual calling", v: "$0.02 /min" },
    { label: "AI qualifier", v: "$0.25 /min" },
    { label: "Outbound SMS", v: "$0.03 /part" },
  ],
  dontDo: [
    "No ringless voicemail or voicemail drops",
    "No power or predictive dialer",
    "No call recording",
    "No native CRM sync — CSV export only",
    "No Zapier, Make, or Slack integrations",
    "No analytics dashboards",
  ],
  faqs: [
    { q: "Do I need a phone or a headset?", a: "No phone needed. The browser softphone works with a computer, microphone, and speakers or a headset." },
    { q: "Can the AI close deals for me?", a: "No. The AI qualifier discloses it is AI, asks qualifying questions, and hands warm leads back to you with a score and a next action." },
    { q: "Where do my leads and results live?", a: "In a Google Sheet you own, plus a HubSpot-compatible CSV you can export anytime. Nothing is locked inside Xovra." },
    { q: "Do I need to register for SMS?", a: "Yes — SMS requires 10DLC brand and campaign registration before volume. Telnyx carrier fees apply separately." },
    { q: "Is there a monthly plan?", a: "No. Usage only — per minute and per message. No contracts, no minimums." },
    { q: "Does it record my calls?", a: "No. Call recording and transcripts are not offered." },
  ],
  closing: {
    headline: "Start with one niche,",
    italic: "one city, one afternoon.",
    sub: "Get early access and run a first Google Maps campaign — or book a walkthrough.",
  },
};

export default function Page() {
  return <UseCaseTemplate data={data} />;
}
