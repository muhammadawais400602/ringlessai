"use client";

import UseCaseTemplate, {
  icons as i,
  type UseCaseData,
} from "../../_components/UseCaseTemplate";

const data: UseCaseData = {
  slug: "lead-gen-agencies",
  eyebrow: "Lead Gen Agencies",
  headline: {
    top: "Built for lead gen",
    italic: "and outbound agencies.",
  },
  sub: "One platform for every client's outbound. Each in its own organization — source Google Maps leads for any niche, run manual or AI calling, and keep every client's numbers, scripts, and data separate.",
  heroImage:
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
  heroBadges: [
    "Separate org per client",
    "Per-campaign briefs + scripts",
    "Usage ledger for billback",
  ],
  demoCard: {
    title: "Summit Roofing · Boise campaign",
    meta: "Client org · AI mode",
    tag: "QUALIFIED",
    tagColor: "from-emerald-400 to-teal-500",
    score: 70,
    angle: "WEAK_SITE",
    scriptHint:
      "AI qualifier called, prospect confirmed interest in a new mobile-friendly site. Follow-up SMS sent.",
    outcomes: ["Qualified", "Send SMS", "Hand off"],
  },
  who: [
    {
      title: "Lead generation agencies",
      body: "Sell qualified conversations to local service businesses. One workspace per client.",
      icon: i.Target,
    },
    {
      title: "Outsourced SDR shops",
      body: "Separate scripts, numbers, and Google Sheets per client — no cross-contamination.",
      icon: i.Users,
    },
    {
      title: "Marketing & web agencies",
      body: "Prospect for yourself with pitch angles and real audit evidence.",
      icon: i.Sparkles,
    },
    {
      title: "Consultants with 3–5 retainers",
      body: "Keep clients cleanly separated without juggling accounts or browser tabs.",
      icon: i.FileSpreadsheet,
    },
  ],
  problems: [
    {
      problem: "Client data and numbers get mixed.",
      solution:
        "One org per client — its own members, roles, and numbers. Nothing bleeds across tenants.",
    },
    {
      problem: "Sourcing takes days for new niches.",
      solution:
        "Enter a niche and city, scrape Google Maps, enrich with site audit, ad detection, and social presence, then score.",
    },
    {
      problem: "Every client needs a different pitch.",
      solution:
        "Each campaign has its own brief, greeting, and script template — switch clients without rewriting anything.",
    },
    {
      problem: "Clients want proof.",
      solution:
        "Outcomes to a Google Sheet per campaign. CSV export. Usage ledger for billback down to the event.",
    },
  ],
  features: [
    { icon: i.Users, t: "Multi-tenant orgs", b: "Owner / admin / agent roles, invites, per-org numbers.", tag: "One org per client" },
    { icon: i.MapPin, t: "Google Maps sourcing", b: "Scrape by niche and city. Export to Sheets or CSV.", tag: "Niche + city" },
    { icon: i.Sparkles, t: "Enrichment & scoring", b: "Audit, Google Ads detection, Instagram / Facebook / TikTok presence, score and pitch angle.", tag: "Scored leads" },
    { icon: i.Bot, t: "AI qualifier", b: "Telnyx AI assistant, discloses AI, returns score, interest, qualified, next action.", tag: "First-touch" },
    { icon: i.Phone, t: "Manual browser dialer", b: "Telnyx WebRTC softphone with keyboard shortcuts.", tag: "C / H / 1-6" },
    { icon: i.FileSpreadsheet, t: "Campaigns with briefs", b: "Manual or AI mode, sheet import, retry logic, worklist filtering.", tag: "Per-client" },
    { icon: i.MessageSquare, t: "Two-way SMS", b: "Follow-ups after connected AI calls, opt-out detection. Each client registers its own 10DLC.", tag: "$0.03 / SMS" },
    { icon: i.Phone, t: "Number pools", b: "Multiple numbers per org with health monitoring.", tag: "Caller ID health" },
    { icon: i.Hash, t: "Usage ledger", b: "Per-event records — the receipt your billable work prints from.", tag: "Billback-ready" },
  ],
  angles: [
    { tag: "RUNS_ADS", color: "from-emerald-400 to-teal-500", body: "Active advertisers — easiest to pitch landing pages, conversion, or call tracking." },
    { tag: "NO_SITE", color: "from-rose-400 to-red-500", body: "No website found. Easiest book for web-build agencies." },
    { tag: "WEAK_SITE", color: "from-amber-400 to-orange-500", body: "Audit evidence to point at — a reason to talk now." },
    { tag: "STRONG_SITE", color: "from-cyan-400 to-blue-500", body: "Solid site. Pitch reviews, social gaps, or ad gaps instead." },
  ],
  steps: [
    { t: "Create a client org", b: "Assign phone numbers from the pool." },
    { t: "Define niche and city", b: "Run the scrape — pull a fresh Google Maps list." },
    { t: "Filter by pitch angle", b: "Pick the angle that matches what this client sells." },
    { t: "Write the brief and script", b: "Per-campaign, with placeholders for every lead field." },
    { t: "Run AI or manual calling", b: "Let the qualifier do first touch, or hand reps the worklist." },
    { t: "Hand over outcomes", b: "A Google Sheet per campaign. Reconcile cost with the ledger." },
  ],
  scriptSection: {
    bullets: [
      "Each campaign has its own brief and greeting",
      "The AI discloses it is an AI on every call",
      "Follow-up drafts come from Claude or Gemini",
      "Sample templates are per-client, not per-platform",
    ],
    templateTitle: "Sample call script template",
    templateBody: `Hi {name}, calling about your {category} listing in {city}.
Saw {evidence} — got 30 seconds to talk about it?`,
    rebuttalTitle: "Live rebuttal · 'How did you get my number?'",
    rebuttalBody:
      "From your public Google Maps listing — same place a customer would find you. Happy to stop contact if that's better. Mind if I ask one quick question first?",
  },
  tracking: [
    "A Google Sheet per campaign",
    "CSV export in HubSpot format",
    "Retry logic up to the attempt cap",
    "Usage ledger for client billback",
  ],
  compliance: [
    "8 AM – 9 PM calling windows",
    "Suppression lists (including SMS opt-outs)",
    "Attempt caps per lead",
    "AI disclosure on every AI call",
  ],
  pricing: [
    { label: "Manual calling", v: "$0.02 /min" },
    { label: "AI qualifier", v: "$0.25 /min" },
    { label: "Outbound SMS", v: "$0.03 /part" },
  ],
  dontDo: [
    "No white-label or custom-branded client portal",
    "No GoHighLevel, Zapier, or webhook automations",
    "No drip sequences beyond campaign retries",
    "No call recording",
    "No power / predictive dialer, no ringless voicemail",
    "No guaranteed uptime SLA",
  ],
  faqs: [
    { q: "How do I keep client data separate?", a: "Create a separate org per client, so members, roles, and numbers are not shared across tenants." },
    { q: "Can I scrape any industry?", a: "Yes — any niche that exists on Google Maps. The enrichment works the same across categories." },
    { q: "Do clients need to register their own 10DLC?", a: "Yes — each client org registers its own 10DLC brand and campaign before SMS at volume." },
    { q: "Can I white-label it?", a: "Not today. You can brand your own reports and the Google Sheet you hand over, but the dashboard stays Xovra-branded." },
    { q: "How do I report to clients?", a: "Share the campaign's Google Sheet directly, or export a HubSpot-compatible CSV. Add the ledger if you're billing by usage." },
    { q: "How do I charge clients for calling?", a: "Up to you — pass through Xovra's rates with a markup, bundle into a retainer, or charge per qualified conversation. The usage ledger is your receipt either way." },
  ],
  closing: {
    headline: "Run your next client",
    italic: "campaign on Xovra.",
    sub: "Get early access and spin up a sample client org built around one of your verticals.",
  },
};

export default function Page() {
  return <UseCaseTemplate data={data} />;
}
