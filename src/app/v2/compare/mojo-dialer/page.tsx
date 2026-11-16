"use client";

import CompareTemplate, {
  type CompareData,
} from "../../_components/CompareTemplate";

const data: CompareData = {
  rival: "Mojo Dialer",
  rivalShort: "Mojo",
  rivalTag: "Throughput-first",
  xovraTag: "Context-first",
  eyebrow: "Comparison",
  headline: {
    top: "Mojo dials fast.",
    italic: "Xovra dials smart.",
  },
  sub: "Mojo Dialer is a multi-line power dialer built for high-volume calling, especially in real estate. Xovra is a manual, browser-based dialer with AI added — it sources and enriches its own leads, runs AI qualifier calls, and suggests rebuttals live.",
  shortAnswer: {
    them: "Mojo is for multi-line power dialing with a prepared list and dials-per-hour goals, with a long real estate track record.",
    us: "Xovra is for AI-assisted cold calling of local businesses, with research done before the call lands.",
  },
  table: [
    { feature: "Multi-line / power dialing", xovra: "no", rival: "yes" },
    { feature: "Manual one-at-a-time calling", xovra: "yes", rival: "yes" },
    { feature: "Predictive dialer", xovra: "no", rival: "Confirm" },
    { feature: "Dialing throughput", xovra: "Lower, 1 at a time", rival: "Higher, built for volume" },
    { feature: "Runs in browser", xovra: "yes", rival: "Confirm" },
    { feature: "AI qualifier calls", xovra: "yes", rival: "no" },
    { feature: "Live AI rebuttals", xovra: "yes", rival: "no" },
    { feature: "Google Maps lead scraper", xovra: "yes", rival: "no" },
    { feature: "Website audit + Google Ads detection", xovra: "yes", rival: "no" },
    { feature: "Instagram / Facebook / TikTok presence", xovra: "yes", rival: "no" },
    { feature: "Lead scoring with pitch angles", xovra: "yes", rival: "no" },
    { feature: "Real-estate list sources", xovra: "no", rival: "yes" },
    { feature: "Two-way SMS", xovra: "yes", rival: "Confirm" },
    { feature: "Campaign management", xovra: "Manual + AI", rival: "Call lists + queues" },
    { feature: "Call scripts with per-lead placeholders", xovra: "yes", rival: "Confirm" },
    { feature: "Google Sheet integration", xovra: "yes", rival: "Confirm" },
    { feature: "CRM integrations", xovra: "no", rival: "Confirm" },
    { feature: "Call recording", xovra: "no", rival: "Confirm" },
    { feature: "Suppression list", xovra: "yes", rival: "Confirm" },
    { feature: "Calling windows + attempt caps", xovra: "yes", rival: "Confirm" },
    { feature: "AI disclosure on AI calls", xovra: "yes", rival: "no" },
    { feature: "Multi-tenant orgs, roles, invites", xovra: "yes", rival: "Confirm" },
    { feature: "Number pools with health monitoring", xovra: "yes", rival: "Confirm" },
    { feature: "Pricing model", xovra: "Usage-based", rival: "Subscription" },
  ],
  rivalStrong: [
    "Multi-line throughput (Xovra has no power or predictive dialer)",
    "Real estate focus and workflow depth",
    "Maturity — Xovra is newer and in early access",
    "Suits a rep dialing all day from a prepared list",
  ],
  xovraStrong: [
    "Built-in sourcing and enrichment",
    "Pre-call context for every lead",
    "AI qualifier calls with disclosure",
    "Live rebuttals drafted mid-call",
    "No subscription tiers",
    "Setup is browser-only",
  ],
  differences: [
    { t: "Lines per rep", b: "Mojo connects the first answering line to save dead time. Xovra gives one call at a time, with context already on the screen." },
    { t: "Lead source", b: "Mojo works from a list you supply. Xovra builds the list from a niche and city." },
    { t: "First conversation", b: "Mojo speeds up the human rep. Xovra's AI assistant does the first qualifying pass." },
    { t: "Objections", b: "Mojo has no rebuttal help. Xovra suggests rebuttals during manual calls." },
    { t: "Industry fit", b: "Mojo is shaped by real estate investors and agents. Xovra targets local-business sellers — agencies, web, ads, insurance." },
  ],
  scenarios: [
    { label: "Calling large homeowner lists all day", winner: "rival" },
    { label: "Need CRM sync or call recording today", winner: "rival" },
    { label: "Selling to local businesses", winner: "xovra" },
    { label: "New reps needing in-call support", winner: "xovra" },
    { label: "Offloading first-pass qualifying", winner: "xovra" },
    { label: "No prepared list to start from", winner: "xovra" },
  ],
  chooseRival: [
    "Dials per hour is your primary KPI",
    "You already have a prepared list ready to go",
    "You want multi-line dialing today",
    "Real-estate track record matters",
    "You don't need sourcing or AI assist",
  ],
  chooseXovra: [
    "You want pre-call context on every dial",
    "You need Google Maps sourcing for local businesses",
    "AI qualifier on first touch matters",
    "Live rebuttals help your newer reps",
    "Usage pricing beats seats for your volume",
    "You can trade peak dial count for better conversations",
  ],
  faqs: [
    { q: "Does Xovra have a power dialer?", a: "No. Xovra is one call at a time with AI qualifier mode for first-touch. If dial throughput is the priority, Mojo is the better fit." },
    { q: "Is Xovra good for real estate?", a: "Xovra works for commercial outreach and area-based business prospecting — not for MLS, expired listings, or homeowner data." },
    { q: "Can I import my existing lists?", a: "Yes — Google Sheet import on any campaign. Scraped leads and imported leads can coexist." },
    { q: "How does Xovra pricing compare with Mojo?", a: "Xovra is usage-based: $0.02/min manual, $0.25/min AI, $0.03/SMS. Mojo is subscription with varying line counts — check their pricing page." },
    { q: "Does the AI caller disclose that it is AI?", a: "Yes. The AI opens every call by disclosing it is an AI." },
    { q: "What compliance controls does Xovra have?", a: "8 AM – 9 PM calling windows, suppression lists, attempt caps, and AI disclosure. Final compliance responsibility stays with you." },
    { q: "Can multiple people use one account?", a: "Yes. Organizations have owner, admin, and agent roles with invites and per-org numbers." },
    { q: "How do I get started?", a: "Early access is free to start. Connect a Telnyx number, run a Google Maps scrape, and make the first call." },
  ],
};

export default function Page() {
  return <CompareTemplate data={data} />;
}
