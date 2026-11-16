"use client";

import CompareTemplate, {
  type CompareData,
} from "../../_components/CompareTemplate";

const data: CompareData = {
  rival: "Slybroadcast",
  rivalShort: "Slybroadcast",
  rivalTag: "Voicemail broadcast",
  xovraTag: "Live outbound",
  eyebrow: "Comparison",
  headline: {
    top: "Slybroadcast drops voicemails.",
    italic: "Xovra has real conversations.",
  },
  sub: "Slybroadcast is a voicemail broadcasting service. Xovra is an AI-powered cold calling platform for teams that want to talk to the prospect, not just drop a message.",
  shortAnswer: {
    them: "Slybroadcast fits when the product itself is the voicemail — a single recording sent to a large list, then wait for inbound callbacks.",
    us: "Xovra fits when the goal is a conversation with research done in advance, outcomes logged, and SMS follow-up in the same record.",
  },
  table: [
    { feature: "Primary channel", xovra: "Live calls + SMS", rival: "Voicemail broadcast" },
    { feature: "Voicemail drop / ringless voicemail", xovra: "no", rival: "yes" },
    { feature: "Live outbound calls", xovra: "yes", rival: "no" },
    { feature: "Google Maps lead scraper", xovra: "yes", rival: "no" },
    { feature: "Website audit + Google Ads detection", xovra: "yes", rival: "no" },
    { feature: "Instagram / Facebook / TikTok presence", xovra: "yes", rival: "no" },
    { feature: "Lead scoring with pitch angles", xovra: "yes", rival: "no" },
    { feature: "Manual one-at-a-time calling", xovra: "yes", rival: "no" },
    { feature: "AI qualifier calls (disclosed as AI)", xovra: "yes", rival: "no" },
    { feature: "Live AI rebuttals (Claude / Gemini)", xovra: "yes", rival: "no" },
    { feature: "Power or predictive dialer", xovra: "no", rival: "no" },
    { feature: "Call recording", xovra: "no", rival: "no" },
    { feature: "Two-way SMS", xovra: "yes", rival: "Confirm" },
    { feature: "Campaign management", xovra: "Manual + AI", rival: "Broadcast campaigns" },
    { feature: "Call scripts with per-lead placeholders", xovra: "yes", rival: "Recorded audio only" },
    { feature: "Google Sheet integration", xovra: "yes", rival: "Confirm" },
    { feature: "CRM integrations", xovra: "no", rival: "Confirm" },
    { feature: "Suppression list", xovra: "yes", rival: "Confirm" },
    { feature: "Calling windows + attempt caps", xovra: "yes", rival: "Confirm" },
    { feature: "AI disclosure on AI calls", xovra: "yes", rival: "no" },
    { feature: "Multi-tenant orgs, roles, invites", xovra: "yes", rival: "Confirm" },
    { feature: "Number pools with health monitoring", xovra: "yes", rival: "no" },
    { feature: "Pricing model", xovra: "Usage-based", rival: "See vendor" },
  ],
  rivalStrong: [
    "Voicemail delivery is the core product — Xovra has no drop",
    "Single-purpose and simple: record, choose a list, send",
    "No rep or AI minutes required for a broadcast",
    "Fits announcement-style, one-way messages",
  ],
  xovraStrong: [
    "You want a conversation, not a recording",
    "Local-business outreach with Google Maps sourcing",
    "Per-lead enrichment and pitch angles",
    "AI qualifier calls with clear disclosure",
    "SMS follow-up in the same lead record",
    "Usage-based pricing, no subscription tiers",
  ],
  differences: [
    { t: "Broadcasting vs holding a conversation", b: "Slybroadcast sends a single recording. Xovra puts a rep or AI on a live call, with lead context already loaded." },
    { t: "Where the list comes from", b: "Slybroadcast expects you to supply a list. Xovra builds it from Google Maps by niche and city." },
    { t: "Personalization", b: "Voicemail drops send one recording to everyone. Xovra fills per-lead script placeholders with real data." },
    { t: "Learning interest", b: "Slybroadcast relies on callbacks. Xovra captures direct answers plus SMS replies." },
    { t: "Guardrails", b: "Xovra ships suppression lists, calling windows, attempt caps, and AI disclosure. Not legal advice — compliance responsibility stays with you." },
  ],
  scenarios: [
    { label: "Voicemail to a large list", winner: "rival" },
    { label: "One-way announcements", winner: "rival" },
    { label: "Selling services to local businesses", winner: "xovra" },
    { label: "Qualifying leads before a rep touches them", winner: "xovra" },
    { label: "Small budget, want to try it out", winner: "either" },
    { label: "Need voicemail features Xovra lacks", winner: "rival" },
  ],
  chooseRival: [
    "Voicemail delivery to a list is the campaign",
    "One-way announcements fit the message",
    "No live or AI calls are needed",
    "You want a single-purpose tool",
    "You need voicemail features Xovra doesn't offer",
  ],
  chooseXovra: [
    "You want conversations, not recordings",
    "You sell to local businesses on Google Maps",
    "Per-lead enrichment and angles matter",
    "AI qualifier calls with disclosure fit your compliance posture",
    "SMS follow-up should live beside the call record",
    "Usage-based pricing beats subscriptions for your volume",
  ],
  faqs: [
    { q: "Does Xovra do voicemail drops?", a: "No. Xovra is live, two-way outbound only. If voicemail broadcast is the product, Slybroadcast fits better." },
    { q: "Is Xovra cheaper than Slybroadcast?", a: "Different billing shapes — Xovra is per-minute and per-SMS, Slybroadcast is per voicemail. For a conversation goal, Xovra tends to be cheaper per outcome." },
    { q: "Can Xovra find leads for me?", a: "Yes — Google Maps scraping by niche and city, enriched with site audit, ad detection, and social presence." },
    { q: "Does the AI disclose it is AI?", a: "Yes. Every AI call opens with disclosure in the first sentence." },
    { q: "Does Xovra have a power dialer?", a: "No. One call at a time, or AI on first touch. No multi-line, power, or predictive dialing." },
    { q: "Does Xovra record calls or integrate with CRMs?", a: "No call recording. No native CRM sync today — Google Sheets integration and HubSpot-format CSV export." },
    { q: "What compliance controls are built in?", a: "Suppression lists, 8 AM – 9 PM calling windows, attempt caps, and AI disclosure." },
    { q: "How do I get started?", a: "Early access is free to start. Connect a Telnyx number, pick a niche, run your first scrape." },
  ],
};

export default function Page() {
  return <CompareTemplate data={data} />;
}
