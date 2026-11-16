"use client";

import CompareTemplate, {
  type CompareData,
} from "../../_components/CompareTemplate";

const data: CompareData = {
  rival: "Drop Cowboy",
  rivalShort: "Drop Cowboy",
  rivalTag: "Voicemail-first",
  xovraTag: "Conversation-first",
  eyebrow: "Comparison",
  headline: {
    top: "Drop Cowboy sends voicemails.",
    italic: "Xovra holds conversations.",
  },
  sub: "Drop Cowboy is built around ringless voicemail. Xovra is an AI-powered cold calling platform that finds leads on Google Maps, enriches them, and puts a rep or an AI qualifier on a live call.",
  shortAnswer: {
    them: "Drop Cowboy is for broadcasting a voicemail to a large list and waiting for the prospect to call back on their own time.",
    us: "Xovra is for teams that want to talk to the prospect — with lead context pulled in advance and an AI qualifier for first-touch calls.",
  },
  table: [
    { feature: "Primary channel", xovra: "Live calls + SMS", rival: "Ringless voicemail" },
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
    { feature: "Call recording", xovra: "no", rival: "Confirm" },
    { feature: "Two-way SMS", xovra: "yes", rival: "Confirm" },
    { feature: "Campaign management", xovra: "Manual + AI", rival: "Voicemail campaigns" },
    { feature: "Call scripts with per-lead placeholders", xovra: "yes", rival: "no" },
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
    "Ringless voicemail is the core product — Xovra has no voicemail drop",
    "Reach without rep time or AI minutes",
    "Simpler to understand and run than a full outbound platform",
    "Established in its category",
  ],
  xovraStrong: [
    "Goal is a conversation, not a recording",
    "Local-business outreach with Google Maps sourcing",
    "Per-lead enrichment and pitch angles",
    "AI qualifier calls with clear disclosure",
    "SMS follow-up lives in the same lead record",
    "Usage-based pricing, no subscription tiers",
  ],
  differences: [
    { t: "One-way message vs two-way conversation", b: "A voicemail drop delivers a recording. Xovra puts a rep or an AI on a live line." },
    { t: "Where the list comes from", b: "Drop Cowboy expects you to bring the list. Xovra builds it from Google Maps by niche and city." },
    { t: "Context on each lead", b: "A voicemail is the same recording for everyone. Xovra fills per-lead script placeholders with real site and ad data." },
    { t: "Handling objections", b: "There's no live moment in a voicemail drop. Xovra suggests rebuttals during manual calls." },
    { t: "Follow-up", b: "Xovra has two-way SMS in the same lead record, with attempt caps and calling windows." },
  ],
  scenarios: [
    { label: "Voicemail broadcast to a large list", winner: "rival" },
    { label: "Selling services to local businesses", winner: "xovra" },
    { label: "Qualifying leads before a rep touches them", winner: "xovra" },
    { label: "Small team with no dedicated SDRs", winner: "xovra" },
    { label: "Announcement-style one-way messaging", winner: "rival" },
    { label: "Tight budget, want to try it out", winner: "either" },
  ],
  chooseRival: [
    "Voicemail delivery to a list is your primary motion",
    "One-way announcements fit your campaign",
    "No need for live calls or AI qualification",
    "You want a single-purpose tool",
    "You need voicemail-specific features Xovra lacks",
  ],
  chooseXovra: [
    "You want conversations, not recordings",
    "You sell to local businesses and want Google Maps sourcing",
    "Per-lead enrichment and pitch angles matter",
    "AI qualifier calls with disclosure fit your compliance posture",
    "SMS follow-up should live beside the call",
    "You prefer usage-based pricing",
  ],
  faqs: [
    { q: "Does Xovra do ringless voicemail drops?", a: "No. Xovra is live, two-way outbound only. If voicemail drops are the core of your motion, Drop Cowboy is the better fit." },
    { q: "Is Xovra a replacement for Drop Cowboy?", a: "Not directly — they do different jobs. Teams sometimes use both: Drop Cowboy for awareness, Xovra for live qualifying calls." },
    { q: "How much does Xovra cost compared with Drop Cowboy?", a: "Xovra is usage-based: $0.02/min manual, $0.25/min AI, $0.03/SMS. Drop Cowboy publishes its own pricing — check their site for current rates." },
    { q: "Can Xovra find leads for me?", a: "Yes — Google Maps scraping by niche and city, then enriched with site audit, ad detection, and social signals." },
    { q: "Does the AI caller pretend to be human?", a: "No. The AI discloses it is an AI in the first sentence of every call." },
    { q: "Does Xovra have a power dialer?", a: "No. Xovra is one call at a time, or AI on first touch. No multi-line, power, or predictive dialing." },
    { q: "Does Xovra integrate with my CRM?", a: "No native CRM sync today — Google Sheets integration plus HubSpot-format CSV export." },
    { q: "How do I get started?", a: "Early access is free to start. Connect a Telnyx number, pick a niche and city, and run your first scrape." },
  ],
};

export default function Page() {
  return <CompareTemplate data={data} />;
}
