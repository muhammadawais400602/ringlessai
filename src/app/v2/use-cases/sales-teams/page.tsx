"use client";

import UseCaseTemplate, {
  icons as i,
  type UseCaseData,
} from "../../_components/UseCaseTemplate";

const data: UseCaseData = {
  slug: "sales-teams",
  eyebrow: "Sales Teams",
  headline: {
    top: "Built for sales teams",
    italic: "running outbound.",
  },
  sub: "Organized cold-calling campaigns, manual or AI, with every rep on the same page. Shared worklists, per-campaign scripts, role-based access, and a usage ledger for every call and text.",
  heroImage:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
  heroBadges: [
    "Owner / admin / agent roles",
    "Per-org phone numbers",
    "Per-event usage ledger",
  ],
  demoCard: {
    title: "Campaign worklist · manual mode",
    meta: "Denver dentists · 48 leads",
    tag: "SHARED",
    tagColor: "from-indigo-400 to-fuchsia-500",
    score: 78,
    angle: "WEAK_SITE",
    scriptHint:
      "Hi {name}, calling about your {category} listing in {city}. Saw {evidence} — got 30 seconds?",
    outcomes: ["Interested", "Mockup", "VM"],
  },
  who: [
    {
      title: "Small SDR and BDR teams",
      body: "2–10 reps on a shared list of local businesses. Shared worklists and filtering prevent double-calling.",
      icon: i.Users,
    },
    {
      title: "Managers who set the playbook",
      body: "One script and brief used by every rep and by the AI qualifier.",
      icon: i.Target,
    },
    {
      title: "Founder-led teams adding first reps",
      body: "Invite agents, assign numbers, see usage per person. Nothing to install.",
      icon: i.Sparkles,
    },
    {
      title: "Teams wanting AI on first touch",
      body: "AI qualifier makes the first call, then passes interested leads to a rep with score and next action.",
      icon: i.Bot,
    },
  ],
  problems: [
    {
      problem: "Reps use different lists and different scripts.",
      solution:
        "Campaigns hold the import, brief, greeting, and script. Everyone works the same one.",
    },
    {
      problem: "Manual dialing is slow.",
      solution:
        "Keyboard shortcuts — C to call, H to hang up, 1–6 to log outcomes. One lead at a time, no power dialer.",
    },
    {
      problem: "Caller ID gets flagged.",
      solution:
        "Number pools with health monitoring, and consistent lead-to-number mapping across attempts.",
    },
    {
      problem: "No visibility into cost.",
      solution:
        "A usage ledger of call minutes and SMS counts, per campaign and per person. A cost record, not a dashboard.",
    },
  ],
  features: [
    { icon: i.FileSpreadsheet, t: "Campaign management", b: "Manual or AI mode, Google Sheet import, brief and greeting per campaign.", tag: "Manual + AI modes" },
    { icon: i.Hash, t: "Per-campaign call scripts", b: "Placeholders {name}, {category}, {city}, {rating}, {evidence}.", tag: "Placeholders" },
    { icon: i.Users, t: "Orgs, roles, invites", b: "Owner / admin / agent roles with email invites.", tag: "Shared workspace" },
    { icon: i.Phone, t: "Number pools", b: "Multiple numbers per org with health monitoring.", tag: "Caller ID protection" },
    { icon: i.Keyboard, t: "Keyboard-first dialer", b: "Telnyx WebRTC softphone. Outcomes written straight to the sheet.", tag: "No hardware" },
    { icon: i.Bot, t: "AI qualifier mode", b: "Telnyx AI for first-touch calls. Discloses AI. Returns score, interest, qualified, next action.", tag: "First-touch" },
    { icon: i.Zap, t: "Live AI rebuttals", b: "Claude or Gemini suggests objection handling during manual calls and drafts follow-ups.", tag: "Claude / Gemini" },
    { icon: i.MessageSquare, t: "Two-way SMS", b: "Via Telnyx, with opt-out detection. You register 10DLC.", tag: "$0.03 / SMS" },
    { icon: i.Target, t: "Retry logic & filtering", b: "Retries up to an attempt cap. Worklist filters by status, attempts, or outcome.", tag: "Caps + filters" },
  ],
  angles: [
    { tag: "RUNS_ADS", color: "from-emerald-400 to-teal-500", body: "Actively running Google Ads. Assign a campaign angle around traffic." },
    { tag: "NO_SITE", color: "from-rose-400 to-red-500", body: "No website. Lead with a friendly opener about getting online." },
    { tag: "WEAK_SITE", color: "from-amber-400 to-orange-500", body: "Audit found issues — mobile, HTTPS, or year. Evidence feeds the script." },
    { tag: "STRONG_SITE", color: "from-cyan-400 to-blue-500", body: "Established. Pitch advanced services, reviews, or social." },
  ],
  steps: [
    { t: "Create the org and invite reps", b: "Owner, admin, or agent roles — each gets what they need." },
    { t: "Source and import leads", b: "Google Maps scrape or an existing Google Sheet import." },
    { t: "Write the brief and script", b: "One template, filled in per lead with placeholders." },
    { t: "Assign numbers from the pool", b: "Each lead keeps the same number across attempts." },
    { t: "Reps call, or AI qualifies", b: "Switch a campaign to AI mode when you want first-touch autopilot." },
    { t: "Review the ledger and retry", b: "Attempt caps + per-rep usage keep the pipeline clean." },
  ],
  scriptSection: {
    bullets: [
      "Managers edit one template — placeholders pull lead data",
      "Live rebuttals appear on objections, drafted with the lead's context",
      "Follow-up drafts are generated after every call",
      "AI calls always open with disclosure",
    ],
    templateTitle: "Call script template",
    templateBody: `Hi {name}, this is {rep} from {company}.
Calling your {category} listing in {city} — saw {evidence}.
Mind if I ask what you're doing for {topic} right now?`,
    rebuttalTitle: "Live rebuttal · prospect says 'Just send me an email, I'm busy'",
    rebuttalBody:
      "Totally — one line and you can read it later. Mind if I text the summary so it's not buried? I'll make it 2 bullets.",
  },
  tracking: [
    "Outcomes land in the Google Sheet",
    "Usage ledger: per-rep minutes and messages",
    "Worklist filters by status, attempts, or outcome",
    "HubSpot-format CSV export",
  ],
  compliance: [
    "8 AM – 9 PM calling window enforced",
    "Suppression list blocks calls and texts",
    "Attempt caps per lead",
    "AI disclosure on every AI call",
  ],
  pricing: [
    { label: "Manual calling", v: "$0.02 /min" },
    { label: "AI qualifier", v: "$0.25 /min" },
    { label: "Outbound SMS", v: "$0.03 /part" },
  ],
  dontDo: [
    "No multi-line, power, or predictive dialer",
    "No manager whisper, barge, or live monitoring",
    "No leaderboards or analytics dashboards",
    "No call recording",
    "No native CRM sync — Google Sheets + CSV",
    "No Zapier, Make, or Slack integrations",
  ],
  faqs: [
    { q: "What can an agent do versus an admin?", a: "Owners and admins manage the org, invites, numbers, and settings. Agents work assigned campaigns. Owners hold the highest access." },
    { q: "Can multiple reps dial at once?", a: "Yes — every rep works the shared worklist, each with their own assigned number from the pool. One lead per rep at a time (no power dialer)." },
    { q: "How do number pools help?", a: "Each lead stays mapped to the same number across attempts, and health monitoring rotates flagged numbers out so caller ID holds up." },
    { q: "How do I see what each rep did?", a: "The usage ledger shows per-rep minutes and messages, and the Google Sheet shows every outcome by rep." },
    { q: "Can I connect it to our CRM?", a: "No native CRM sync — export a HubSpot-format CSV and import that into your CRM." },
    { q: "Do you record calls for coaching?", a: "No. Call recording is not offered." },
    { q: "Is pricing per seat?", a: "No. Usage-based — per minute and per message. Invite as many reps as you want." },
  ],
  closing: {
    headline: "Bring structure",
    italic: "to your outbound.",
    sub: "Get early access, invite the team, and run your first shared campaign today.",
  },
};

export default function Page() {
  return <UseCaseTemplate data={data} />;
}
