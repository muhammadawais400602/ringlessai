"use client";

import UseCaseTemplate, {
  icons as i,
  type UseCaseData,
} from "../../_components/UseCaseTemplate";

const data: UseCaseData = {
  slug: "real-estate",
  eyebrow: "Real Estate",
  headline: {
    top: "Built for real estate",
    italic: "agents and teams.",
  },
  sub: "Prospect local business owners and property contacts with area context. Xovra scrapes Google Maps around your neighborhoods, enriches each listing, and lets you call from the browser or hand the first touch to an AI qualifier.",
  heroImage:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  heroBadges: [
    "Maps-based area search",
    "AI discloses itself",
    "SMS follow-up built in",
  ],
  demoCard: {
    title: "Retail shops · Main St, Raleigh",
    meta: "Commercial lead · area campaign",
    tag: "NO_SITE",
    tagColor: "from-rose-400 to-red-500",
    score: 79,
    angle: "NO_SITE",
    scriptHint:
      "Hi, this is Dana with Riverside Realty. Quick one — do you own or lease the space?",
    outcomes: ["Interested", "Send SMS", "Callback"],
  },
  who: [
    {
      title: "Commercial agents and brokers",
      body: "Search a submarket for operating businesses. Owner-operators and tenants near a listing are first calls for lease, sale, or expansion.",
      icon: i.MapPin,
    },
    {
      title: "Residential agents building a sphere",
      body: "Call shops, restaurants, and service providers in a farm area to build real relationships.",
      icon: i.Users,
    },
    {
      title: "Teams with a shared market",
      body: "Invite agents, assign roles, split an area across campaigns — no one calls the same business twice.",
      icon: i.Target,
    },
    {
      title: "Property managers and investors",
      body: "Outreach about leasing, vacancies, or partnerships, with area notes baked into the script.",
      icon: i.FileSpreadsheet,
    },
  ],
  problems: [
    {
      problem: "Building an area list takes time.",
      solution:
        "Search Maps by niche and city. Get a sheet with listings, ratings, website audit, and social presence, already scored.",
    },
    {
      problem: "Calls sound generic.",
      solution:
        "Templates fill {name}, {category}, {city}, {rating}, and {evidence}. Campaign briefs add the local detail.",
    },
    {
      problem: "Showing homes when you should be calling.",
      solution:
        "Switch a campaign to AI mode. The qualifier makes first-touch calls, discloses AI, returns score and next action.",
    },
    {
      problem: "Follow-up gets forgotten.",
      solution:
        "After connected AI calls, Xovra sends a follow-up text. Replies arrive in two-way SMS; opt-outs are detected.",
    },
  ],
  features: [
    { icon: i.MapPin, t: "Google Maps sourcing", b: "Search by niche and city. Export to Sheet or CSV.", tag: "Area search" },
    { icon: i.Sparkles, t: "Enrichment & scoring", b: "Website audit, Google Ads detection, Instagram / Facebook / TikTok presence.", tag: "Scored" },
    { icon: i.Bot, t: "AI qualifier", b: "Telnyx AI with per-lead context. Discloses AI. Records score, interest, qualified, next action.", tag: "First-touch" },
    { icon: i.Phone, t: "Browser dialer", b: "Telnyx WebRTC softphone. C / H / 1–6 shortcuts. No hardware.", tag: "No install" },
    { icon: i.Zap, t: "Live AI rebuttals", b: "Owner declines or has an existing agent — Claude or Gemini drafts a reply using the lead context.", tag: "Claude / Gemini" },
    { icon: i.FileSpreadsheet, t: "Call scripts", b: "Placeholder templates for neighborhood, category, rating, evidence.", tag: "Per-lead fill-in" },
    { icon: i.MessageSquare, t: "Two-way SMS", b: "Telnyx-powered. You register your own 10DLC brand and campaign.", tag: "$0.03 / SMS" },
    { icon: i.Target, t: "Campaigns", b: "Manual or AI mode, sheet import, per-campaign brief and greeting, retries, worklist filters.", tag: "Per area" },
    { icon: i.Phone, t: "Number pools", b: "Multiple numbers, health monitoring, consistent caller ID per lead.", tag: "Caller ID health" },
  ],
  angles: [
    { tag: "RUNS_ADS", color: "from-emerald-400 to-teal-500", body: "Active advertiser — good for expansion, relocation, or extra space conversations." },
    { tag: "NO_SITE", color: "from-rose-400 to-red-500", body: "Small owner-run shop. A friendly opener works better than a pitch." },
    { tag: "WEAK_SITE", color: "from-amber-400 to-orange-500", body: "Mention something specific, then move toward real estate topics." },
    { tag: "STRONG_SITE", color: "from-cyan-400 to-blue-500", body: "Established operator. Fit for commercial space, lease renewals, ownership conversations." },
  ],
  steps: [
    { t: "Pick a niche and area", b: "Example: retail shops near Main St, Raleigh." },
    { t: "Review the scored sheet", b: "Sort by score, drop national chains, keep the owner-operators." },
    { t: "Add local detail to the brief", b: "Name the area, the listing, the context — everything the lead already knows." },
    { t: "Call manually or let AI qualify", b: "Swap modes per campaign." },
    { t: "Text interested leads", b: "Two-way SMS, opt-outs auto-detected." },
    { t: "Retry and log", b: "Retries stop at the attempt cap. Every event lives in the ledger." },
  ],
  scriptSection: {
    bullets: [
      "Add area details to the brief — the lead hears local, not canned",
      "{city} and {category} placeholders personalize every line",
      "Rebuttals use the lead's own site and ad data",
      "Follow-up drafts reference the call, not a generic template",
    ],
    templateTitle: "Call script template",
    templateBody: `Hi, this is Dana with Riverside Realty.
Calling your {category} listing on {street}, {city} —
quick one, do you own or lease the space?`,
    rebuttalTitle: "Live rebuttal · 'I am not looking to sell or move'",
    rebuttalBody:
      "Totally get it — not asking you to. Mind if I just be a resource for the area? I'll text you my info and only reach out if something truly fits.",
  },
  tracking: [
    "Outcomes stream to a Google Sheet",
    "CSV export in HubSpot format — no native CRM sync",
    "Retries re-enter the queue until the attempt cap",
    "Usage ledger shows per-event call and SMS costs",
  ],
  compliance: [
    "8 AM – 9 PM calling window",
    "Suppression lists including SMS opt-outs",
    "Attempt caps per lead",
    "AI disclosure on every AI call",
  ],
  pricing: [
    { label: "Manual calling", v: "$0.02 /min" },
    { label: "AI qualifier", v: "$0.25 /min" },
    { label: "Outbound SMS", v: "$0.03 /part" },
  ],
  dontDo: [
    "No MLS, expired listing, FSBO, or homeowner data",
    "No voicemail drops (including with property addresses)",
    "No instant speed-to-lead triggers",
    "No call recording",
    "No native CRM sync — HubSpot-format CSV only",
    "No power or predictive dialer",
  ],
  faqs: [
    { q: "Does Xovra give me homeowner or listing data?", a: "No. Leads come from Google Maps by niche and city, not MLS, expired listing, or homeowner data." },
    { q: "Can the AI know about a specific property?", a: "Yes — add property details to the campaign brief and script. The AI uses that context on the call." },
    { q: "Will the AI pretend to be a person?", a: "No. Every AI call opens by disclosing it is an AI." },
    { q: "How do I follow up after a call?", a: "Send a two-way SMS, or let Claude or Gemini draft the follow-up from the call context." },
    { q: "Can I use it with my CRM?", a: "Not natively today. Export a HubSpot-format CSV and import into your CRM." },
    { q: "How much does it cost?", a: "Usage-based — $0.02/min manual, $0.25/min AI, $0.03 per SMS. No seat fee, no retainer." },
  ],
  closing: {
    headline: "Start prospecting",
    italic: "your farm area.",
    sub: "Get early access and run a first Maps campaign — or book a walkthrough.",
  },
};

export default function Page() {
  return <UseCaseTemplate data={data} />;
}
