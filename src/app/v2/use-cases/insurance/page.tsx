"use client";

import UseCaseTemplate, {
  icons as i,
  type UseCaseData,
} from "../../_components/UseCaseTemplate";

const data: UseCaseData = {
  slug: "insurance",
  eyebrow: "Insurance Agents & IMOs",
  headline: {
    top: "Built for insurance",
    italic: "agents and IMOs.",
  },
  sub: "Find business owners who need coverage, pre-screen interest with AI, and stay inside the rules. Xovra scrapes Google Maps in your territory, enriches each business, and lets AI or your agents make the call.",
  heroImage:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  heroBadges: [
    "Calling windows enforced",
    "Suppression lists",
    "AI disclosure on every call",
  ],
  demoCard: {
    title: "Phoenix restaurant · commercial lines",
    meta: "AI mode · attempt 1 of 3",
    tag: "RUNS_ADS",
    tagColor: "from-emerald-400 to-teal-500",
    score: 81,
    angle: "RUNS_ADS",
    scriptHint:
      "Qualifier opens with AI disclosure, asks about current GL + workers' comp coverage, and books follow-up.",
    outcomes: ["Qualified", "Callback", "Suppress"],
  },
  who: [
    {
      title: "Independent commercial agents",
      body: "Target small businesses in your territory for GL, workers' comp, commercial auto, and BOP.",
      icon: i.ShieldCheck,
    },
    {
      title: "IMOs and agencies",
      body: "Run campaigns by product line or territory in separate organizations with owner, admin, and agent roles.",
      icon: i.Users,
    },
    {
      title: "Benefits producers",
      body: "Find small employers by category and city, then pre-screen interest before the sales call.",
      icon: i.Target,
    },
    {
      title: "P&C agents expanding a book",
      body: "Use website and social signals to gauge how established a business is before dialing.",
      icon: i.Sparkles,
    },
  ],
  problems: [
    {
      problem: "Finding the right businesses is manual.",
      solution:
        "Maps scrape by niche and city, enrichment with website audit, ad detection, and social presence. Scored sheet + CSV.",
    },
    {
      problem: "Most calls go nowhere.",
      solution:
        "The AI qualifier pre-screens — discloses it is AI, and returns score, interest, qualified, and next action.",
    },
    {
      problem: "Product lines need different approaches.",
      solution:
        "Each campaign has its own brief, greeting, and script. One campaign per product line. Manual or AI mode.",
    },
    {
      problem: "Compliance is a constant worry.",
      solution:
        "Suppression lists, 8 AM – 9 PM windows, attempt caps, and AI disclosure. Final responsibility stays with you.",
    },
  ],
  features: [
    { icon: i.MapPin, t: "Maps-based lead sourcing", b: "Territory search by niche and city. Output to Google Sheet and CSV.", tag: "Territory" },
    { icon: i.Sparkles, t: "Enrichment", b: "Website audit, Google Ads detection, Instagram / Facebook / TikTok presence.", tag: "Signals" },
    { icon: i.Bot, t: "AI pre-screening", b: "Telnyx AI assistant with per-lead context. Discloses AI. Returns score + next action.", tag: "First-touch" },
    { icon: i.Phone, t: "Browser dialer", b: "Telnyx WebRTC softphone. C / H / 1–6 shortcuts. Outcomes logged to Sheets.", tag: "No hardware" },
    { icon: i.Zap, t: "Live rebuttals", b: "Claude or Gemini suggests objection handling and drafts follow-ups with lead context.", tag: "Claude / Gemini" },
    { icon: i.MessageSquare, t: "Two-way SMS", b: "Replies read, opt-outs detected. You register your 10DLC.", tag: "$0.03 / SMS" },
    { icon: i.FileSpreadsheet, t: "Call scripts", b: "Placeholders — {name}, {category}, {city}, {rating}, {evidence}. Per product line.", tag: "Per product" },
    { icon: i.Users, t: "Orgs and roles", b: "Owners, admins, and agents. Invites, per-org numbers.", tag: "Agency ready" },
    { icon: i.Phone, t: "Number pools", b: "Several numbers, health monitoring, consistent lead-to-number mapping.", tag: "Caller ID health" },
  ],
  angles: [
    { tag: "RUNS_ADS", color: "from-emerald-400 to-teal-500", body: "Actively advertising. Ask about exposure, vehicles, employees, contracts." },
    { tag: "NO_SITE", color: "from-rose-400 to-red-500", body: "No website. Smaller or older — a plain conversation about coverage fits best." },
    { tag: "WEAK_SITE", color: "from-amber-400 to-orange-500", body: "Audit issues. Ask who handles insurance and renewals today." },
    { tag: "STRONG_SITE", color: "from-cyan-400 to-blue-500", body: "Established operations — often more complex coverage needs." },
  ],
  steps: [
    { t: "Choose niche and territory", b: "Example: contractors in Tampa for workers' comp." },
    { t: "Scrape and review", b: "Drop businesses you don't write. Keep what fits your book." },
    { t: "Create the campaign", b: "Manual or AI mode. Import the sheet. Write brief, greeting, script." },
    { t: "Set compliance controls", b: "Calling window, suppression numbers, attempt cap." },
    { t: "Pre-screen with AI or call yourself", b: "Qualified leads go to agents." },
    { t: "Follow up by text and log", b: "Outcomes land in the Google Sheet." },
  ],
  scriptSection: {
    bullets: [
      "The AI states it is an AI before asking questions",
      "Briefs keep conversations on the product line",
      "Live rebuttals are suggestions for the agent to review",
      "Follow-up drafts stay consistent with the call",
    ],
    templateTitle: "Call script template",
    templateBody: `Hi {name}, I'm {rep} with {agency}.
Calling about your {category} business in {city} —
quick one: who handles your {product_line} today?`,
    rebuttalTitle: "Live rebuttal · 'We have a long-time agent'",
    rebuttalBody:
      "Totally understand — not asking you to switch. Mind if I offer a second look at renewal time? I'll text my info so it's easy to find later.",
  },
  tracking: [
    "Outcome logging to the Google Sheet",
    "CSV in HubSpot format for manual CRM import",
    "Retries within attempt caps and calling windows",
    "Per-line usage ledger — a cost record, not a dashboard",
  ],
  compliance: [
    "8 AM – 9 PM calling window",
    "Suppression lists (SMS opt-outs auto-detected)",
    "Attempt caps per lead",
    "AI disclosure on every call",
  ],
  pricing: [
    { label: "Manual calling", v: "$0.02 /min" },
    { label: "AI qualifier", v: "$0.25 /min" },
    { label: "Outbound SMS", v: "$0.03 /part" },
  ],
  dontDo: [
    "No voicemail drops or ringless voicemail",
    "No power or predictive dialer",
    "No native CRM or agency-management sync",
    "No Zapier or webhook automations",
    "No analytics dashboards",
    "No call recording. No SOC 2 or HIPAA certification claims",
  ],
  faqs: [
    { q: "Does Xovra include consumer insurance leads?", a: "No. Leads come from Google Maps — no Medicare, ACA, or final-expense lists." },
    { q: "Can the AI discuss policy details or give quotes?", a: "No. The qualifier pre-screens interest and hands qualified calls to a licensed agent. It does not quote." },
    { q: "How do I handle do-not-call requests?", a: "Add numbers to the suppression list. Suppression is append-only and applies across calls and texts." },
    { q: "Can I run separate campaigns for each product line?", a: "Yes. One campaign per product line, each with its own brief, script, and attempt cap." },
    { q: "Is Xovra compliant for me?", a: "Xovra provides the guardrail tools (windows, caps, disclosure, suppression). Final compliance responsibility stays with you." },
    { q: "How much does it cost?", a: "Pay-per-use: $0.02/min manual, $0.25/min AI, $0.03 per SMS. No seat fee." },
  ],
  closing: {
    headline: "Pre-screen your territory",
    italic: "before you pick up the phone.",
    sub: "Get early access or book a demo built around one of your product lines.",
  },
};

export default function Page() {
  return <UseCaseTemplate data={data} />;
}
