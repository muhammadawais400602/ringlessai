"use client";

import CompareTemplate, {
  type CompareData,
} from "../../_components/CompareTemplate";

const data: CompareData = {
  rival: "CallTools",
  rivalShort: "CallTools",
  rivalTag: "Enterprise-scale",
  xovraTag: "Lightweight",
  eyebrow: "Comparison",
  headline: {
    top: "CallTools is for call centers.",
    italic: "Xovra is for revenue teams.",
  },
  sub: "CallTools is established contact-center software with predictive dialing. Xovra is a lightweight browser-based tool for small teams — it finds leads on Google Maps, enriches them, and puts a rep or an AI qualifier on the call.",
  shortAnswer: {
    them: "CallTools is for staffed call centers that need operational depth, predictive dialing, and contact-center administration.",
    us: "Xovra is for founders and small teams that want to get started quickly with sourcing + AI on first touch — without enterprise scaffolding.",
  },
  table: [
    { feature: "Predictive dialer", xovra: "no", rival: "yes" },
    { feature: "Progressive / power dialing", xovra: "no", rival: "Confirm" },
    { feature: "Manual one-at-a-time calling", xovra: "yes", rival: "yes" },
    { feature: "Runs in browser, no install", xovra: "yes", rival: "Confirm" },
    { feature: "AI qualifier calls", xovra: "yes", rival: "Confirm" },
    { feature: "Live AI rebuttals", xovra: "yes", rival: "Confirm" },
    { feature: "Google Maps lead scraper", xovra: "yes", rival: "no" },
    { feature: "Website audit + Google Ads detection", xovra: "yes", rival: "no" },
    { feature: "Instagram / Facebook / TikTok presence", xovra: "yes", rival: "no" },
    { feature: "Lead scoring with pitch angles", xovra: "yes", rival: "no" },
    { feature: "Agent + supervisor admin", xovra: "Orgs + roles", rival: "Extensive" },
    { feature: "Inbound / ACD / IVR", xovra: "no", rival: "yes" },
    { feature: "Reporting", xovra: "Basic campaign views", rival: "Extensive" },
    { feature: "Call recording", xovra: "no", rival: "Confirm" },
    { feature: "Two-way SMS", xovra: "yes", rival: "Confirm" },
    { feature: "Campaign management", xovra: "Manual + AI", rival: "Extensive" },
    { feature: "Call scripts with per-lead placeholders", xovra: "yes", rival: "Confirm" },
    { feature: "Google Sheet integration", xovra: "yes", rival: "Confirm" },
    { feature: "CRM integrations", xovra: "no", rival: "Confirm" },
    { feature: "Suppression list", xovra: "yes", rival: "Confirm" },
    { feature: "Calling windows + attempt caps", xovra: "yes", rival: "Confirm" },
    { feature: "AI disclosure on AI calls", xovra: "yes", rival: "no" },
    { feature: "SOC 2 report", xovra: "no", rival: "Confirm" },
    { feature: "Number pools with health monitoring", xovra: "yes", rival: "Confirm" },
    { feature: "Pricing model", xovra: "Usage-based", rival: "Contact for pricing" },
  ],
  rivalStrong: [
    "Predictive and automated dialing modes",
    "Contact-center administration and deep reporting",
    "Scale and operational maturity for larger teams",
    "Broader telephony feature set (inbound, routing)",
  ],
  xovraStrong: [
    "Lead sourcing and enrichment built in",
    "AI qualifier calls with disclosure",
    "Per-lead pitch angles out of the box",
    "Usage-based pricing, no seat minimum",
    "Setup is browser-only, no install",
    "Fits a founder or small team today",
  ],
  differences: [
    { t: "Who the product is designed for", b: "CallTools is built for staffed call centers. Xovra is built for small teams and solo operators." },
    { t: "Dialing modes", b: "CallTools includes predictive and power dialing. Xovra is one-at-a-time manual or AI qualifier mode." },
    { t: "Setup and onboarding", b: "CallTools onboarding is more involved. Xovra is browser-based — connect a Telnyx number and go." },
    { t: "Lead sourcing", b: "Xovra scrapes and enriches its own leads. CallTools expects a prepared list." },
    { t: "Pricing structure", b: "CallTools is per seat or package on request. Xovra is per minute or message with no seat minimum." },
  ],
  scenarios: [
    { label: "Staffed call center, 20+ agents", winner: "rival" },
    { label: "Regulated, audit-heavy operations", winner: "rival" },
    { label: "Founder or small team starting out", winner: "xovra" },
    { label: "Agency selling to local businesses", winner: "xovra" },
    { label: "Variable-volume calling", winner: "xovra" },
    { label: "Need full contact-center tooling", winner: "rival" },
  ],
  chooseRival: [
    "You run a staffed call center",
    "Predictive or power dialing is a hard requirement",
    "You need deep supervisor tooling and reporting",
    "You handle inbound as well as outbound",
    "SOC 2 certification is required today",
  ],
  chooseXovra: [
    "You're a founder or small team starting out",
    "You want sourcing + enrichment in the product",
    "AI on first touch matters more than peak dial volume",
    "You prefer usage-based pricing",
    "You want to start today without an implementation project",
    "Browser-only, no install, is a plus",
  ],
  faqs: [
    { q: "Does Xovra have a predictive dialer?", a: "No. Xovra is one-at-a-time manual, or AI qualifier mode. If predictive dialing is a hard requirement, CallTools is the better fit." },
    { q: "Is Xovra a call-center platform?", a: "No. Xovra is a lightweight outbound tool — no inbound, no ACD, no IVR. CallTools covers those contact-center needs." },
    { q: "How does pricing compare?", a: "Xovra is usage-based ($0.02/min manual, $0.25/min AI, $0.03/SMS). CallTools is priced per seat or package on request." },
    { q: "Does Xovra record calls?", a: "No. Call recording and transcripts are not offered today." },
    { q: "Can Xovra integrate with my CRM?", a: "Not natively — export a HubSpot-format CSV and import into your CRM." },
    { q: "Does Xovra have SOC 2?", a: "Not today. If SOC 2 is a procurement requirement, CallTools is the better fit." },
    { q: "Can I share with my team?", a: "Yes — orgs with owner, admin, and agent roles, invites, and per-org numbers." },
    { q: "How do I get started?", a: "Early access is free to start. Connect a Telnyx number, run a Google Maps scrape, and make the first call." },
  ],
};

export default function Page() {
  return <CompareTemplate data={data} />;
}
