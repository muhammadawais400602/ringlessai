"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  Scale,
  Zap,
  ArrowDown,
  CheckCircle2,
  ArrowRight,
  Brain,
  PhoneCall,
  Bot,
  Voicemail,
  MessageSquare,
  RefreshCw,
  Shield,
  XCircle,
  AlertTriangle,
  RadioTower,
  TrendingUp,
  BadgeCheck,
  ArrowLeftRight,
  Calculator,
  Calendar,
  Mic2,
  Upload,
  Link2,
  Settings,
  Rocket,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA: Comparison Table Rows                                       */
/* ------------------------------------------------------------------ */

const comparisonRows = [
  { feature: "Power dialer", dialeads: "✅", mojoDialer: "✅ Triple-line", highlight: false },
  { feature: "AI voice agent — autonomous calls", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "Local presence caller ID", dialeads: "✅", mojoDialer: "✅", highlight: false },
  { feature: "Ringless voicemail drop", dialeads: "✅ AI Dynamic", mojoDialer: "✅ Pre-recorded", highlight: true },
  { feature: "Live objection rebuttal copilot", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "Automatic SMS follow-up", dialeads: "✅", mojoDialer: "✅ Basic", highlight: false },
  { feature: "Automatic email follow-up", dialeads: "✅", mojoDialer: "✅ Basic", highlight: false },
  { feature: "WhatsApp follow-up", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "CRM sync — HubSpot, Salesforce", dialeads: "✅ Native", mojoDialer: "✅ Limited", highlight: false },
  { feature: "GoHighLevel integration", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "Real estate CRM integrations", dialeads: "✅", mojoDialer: "✅ Strong", highlight: false },
  { feature: "Call recordings and AI transcripts", dialeads: "✅", mojoDialer: "✅ Recordings only", highlight: false },
  { feature: "AI call transcripts", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "1-click call dispositions", dialeads: "✅", mojoDialer: "✅", highlight: false },
  { feature: "Unified inbox — calls, SMS, notes", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "Speed-to-lead calling via webhook", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "National DNC auto-scrub", dialeads: "✅ Auto", mojoDialer: "✅", highlight: false },
  { feature: "Time-zone enforcement", dialeads: "✅ Auto", mojoDialer: "✅", highlight: false },
  { feature: "STIR/SHAKEN A-attestation", dialeads: "✅", mojoDialer: "❌", highlight: true },
  { feature: "A2P 10DLC SMS registration", dialeads: "✅ Guided", mojoDialer: "❌", highlight: true },
  { feature: "Team management and reporting", dialeads: "✅", mojoDialer: "✅", highlight: false },
  { feature: "White-label for agencies", dialeads: "✅ Enterprise", mojoDialer: "❌", highlight: true },
  { feature: "Starting price", dialeads: "$29/mo", mojoDialer: "$99/mo", highlight: true, isPrice: true },
];

/* ------------------------------------------------------------------ */
/*  DATA: Deep-Dive Differences                                       */
/* ------------------------------------------------------------------ */

const deepDives = [
  {
    num: "01",
    title: "Price — Dialeads is 70% Cheaper Than Mojo",
    mojoText:
      "Starts at $99/month for a single-line dialer. Triple-line dialing — Mojo’s signature feature — costs $149/month. Additional seats priced separately. For a 5-person team on triple-line, expect $500–$750/month.",
    dialeadsText:
      "$29/month for Starter. $49/month for Pro — which includes unlimited calling, AI voice agent, power dialer, live objection rebuttals, automated follow-up, and full CRM sync. A 5-person team on Dialeads Pro costs $245/month — vs $500–$750 on Mojo.",
    calloutIcon: TrendingUp,
    callout: "Annual savings for a 5-person team: $3,060–$6,060 per year.",
    calloutStyle: "highlight" as const,
  },
  {
    num: "02",
    title: "AI Voice Agent — Mojo Has None",
    mojoText:
      "No AI voice agent capability. Every call requires a human rep on the line. First-touch outreach at scale requires proportional headcount growth. More leads contacted = more reps hired = higher cost.",
    dialeadsText:
      "AI voice agent handles first-touch outbound calls autonomously — 24 hours a day, 7 days a week, with no human rep required. The AI introduces your business, qualifies prospects, handles common objections, and routes warm leads to human reps. One operator can oversee campaigns contacting thousands of leads per day.",
    calloutLabel: "Human Headcount Impact",
    callout: "Scale lead qualification 10x without recruiting, onboarding, or managing additional cold callers.",
    calloutStyle: "neutral" as const,
  },
  {
    num: "03",
    title: "Live Objection Rebuttals — Mojo Has None",
    mojoText:
      "No real-time objection coaching. When a prospect pushes back on price, timing, or competition — reps are on their own. New reps freeze. Calls die. Mojo offers no AI assistance during live conversations.",
    dialeadsText:
      "Sub-200ms real-time audio transcription detects objections the moment they land. The exact rebuttal script appears on the rep’s screen before they even process what the prospect said. New reps close like veterans from their first week. Objection win rates increase 41% across audited campaigns.",
    calloutIcon: BadgeCheck,
    callout: "+41% objection win rate on live sales calls",
    calloutStyle: "highlight" as const,
  },
  {
    num: "04",
    title: "Voicemail Drop Quality — Static vs AI Dynamic",
    mojoText:
      "Pre-recorded voicemail drop — same audio file dropped to every contact. Generic message, zero personalization, identical to every other agent dropping the same voicemail. Callback rates typically under 3%.",
    dialeadsText:
      "AI dynamic voicemail drops synthesize a personalized message per contact — inserting their name, the specific property or product they are associated with, and a tailored call to action. Every voicemail sounds individually crafted. Callback rates average 3x higher than Mojo’s static drops.",
    calloutLabel: "Callback Velocity",
    callout: "Triple callback conversion with synthesized address and owner data injection.",
    calloutStyle: "neutral" as const,
  },
  {
    num: "05",
    title: "CRM Integration Depth",
    mojoText:
      "Integrates with some real estate CRMs — LionDesk, Top Producer, Follow Up Boss — but limited native sync with HubSpot, Salesforce, and GoHighLevel. No AI transcript delivery to CRM records. No disposition-triggered pipeline movements.",
    dialeadsText:
      "Native two-way sync with HubSpot, Salesforce, Close CRM, and GoHighLevel. Every call outcome, voicemail drop receipt, AI transcript, SMS thread, and disposition writes to your CRM automatically in real time. Full custom field mapping for any CRM setup.",
    calloutIcon: ArrowLeftRight,
    callout: "100% automated logging — Zero manual admin hours",
    calloutStyle: "highlight" as const,
  },
  {
    num: "06",
    title: "STIR/SHAKEN Caller ID Verification",
    mojoText:
      "No STIR/SHAKEN attestation on outbound caller IDs. As carrier spam detection has become more aggressive, Mojo users report increasing spam flag rates — reducing answer rates over time as numbers age on shared infrastructure.",
    dialeadsText:
      "All outbound caller IDs pass STIR/SHAKEN A-level attestation — the FCC framework for verified caller ID. Numbers stay clean. Answer rates stay consistently above 80% because every call carries verified caller ID status.",
    calloutLabel: "Reputation Shield",
    callout: ">80% sustained pickup rates via carrier-authenticated A-tier cryptographic tokens.",
    calloutStyle: "neutral" as const,
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Pricing Comparison Table                                    */
/* ------------------------------------------------------------------ */

const pricingRows = [
  { feature: "Entry plan", dialeads: "$29/mo", mojo: "$99/mo" },
  { feature: "Full-featured plan", dialeads: "$49/mo", mojo: "$149/mo" },
  { feature: "AI voice agent", dialeads: "Included", mojo: "Not available", mojoError: true },
  { feature: "Live objection rebuttals", dialeads: "Included", mojo: "Not available", mojoError: true },
  { feature: "AI call transcripts", dialeads: "Included", mojo: "Not available", mojoError: true },
  { feature: "Automated follow-up sequences", dialeads: "Included", mojo: "Basic only" },
  { feature: "HubSpot native sync", dialeads: "Included", mojo: "Limited" },
  { feature: "STIR/SHAKEN attestation", dialeads: "Included", mojo: "Not available", mojoError: true },
  { feature: "A2P 10DLC registration", dialeads: "Guided — included", mojo: "Not available", mojoError: true },
  { feature: "White-label for agencies", dialeads: "Enterprise plan", mojo: "Not available", mojoError: true },
];

/* ------------------------------------------------------------------ */
/*  DATA: Real Estate Comparison Cards                                */
/* ------------------------------------------------------------------ */

const realEstateCards = [
  {
    title: "Absentee Owner and Cold List Dialing",
    mojoText:
      "Triple-line dialing gets through more contacts per hour than single-line. Strong for volume cold calling on large lists. Pre-recorded voicemail drops available.",
    dialeadsText:
      "AI power dialer contacts 400–500 leads per day. AI dynamic voicemails personalized with property address and owner name get 3x more callbacks than Mojo’s generic drops. Local presence CID on every call.",
    verdict: "Verdict: Dialeads wins on callback rate and automation. Mojo wins on simultaneous line count.",
  },
  {
    title: "Expired Listing and FSBO Outreach",
    mojoText:
      "Strong real estate database integration for pulling expired and FSBO data directly into dialer. Popular with agents for this specific use case.",
    dialeadsText:
      "Speed-to-lead calling via Zapier contacts every new expired listing within 60 seconds of MLS update. AI voice agent handles initial outreach autonomously. Import any expired or FSBO list via CSV from any data source.",
    verdict: "Verdict: Mojo has better native real estate database access. Dialeads wins on speed-to-lead and AI automation.",
  },
  {
    title: "Follow-Up and Pipeline Management",
    mojoText:
      "Basic follow-up sequences. Manual CRM updates. No unified inbox combining calls, SMS, and notes.",
    dialeadsText:
      "Automated multi-touch SMS and email sequences triggered by call outcomes. Full CRM sync. Unified inbox shows every call, text, and note per contact. Callbacks never fall through the cracks.",
    verdict: "Verdict: Dialeads wins significantly on follow-up automation and pipeline management.",
  },
  {
    title: "New Agent Ramp Time",
    mojoText:
      "No live coaching during calls. New agents learn objection handling through trial and error over weeks of dialing.",
    dialeadsText:
      "Live objection rebuttal copilot shows new agents exactly what to say the moment a prospect pushes back. New agents hit full productivity in days — not weeks.",
    verdict: "Verdict: Dialeads wins significantly for new agent onboarding.",
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Migration Steps                                             */
/* ------------------------------------------------------------------ */

const migrationSteps = [
  {
    num: "01",
    title: "Export Your Contact Lists",
    body: "Export your lead lists and contact data from Mojo Dialer as CSV files. All contacts, phone numbers, call history, and dispositions export cleanly.",
  },
  {
    num: "02",
    title: "Import Into Dialeads",
    body: "Upload your Mojo CSV directly into Dialeads. Phone numbers auto-validated, DNC-scrubbed, duplicates removed, local caller IDs matched. Ready to dial in under 2 minutes.",
  },
  {
    num: "03",
    title: "Re-Upload Your Voicemail Recordings",
    body: "Upload your existing Mojo voicemail recordings directly into Dialeads. Optionally enable AI dynamic voicemail drops for personalized messages per contact — a significant upgrade from Mojo’s static drops.",
  },
  {
    num: "04",
    title: "Connect Your CRM",
    body: "Connect HubSpot, Salesforce, GoHighLevel, or Close CRM with one click. Full bi-directional sync active immediately. Every future call outcome syncs automatically — something Mojo only partially delivered.",
  },
  {
    num: "05",
    title: "Configure Objection Rebuttals",
    body: "Upload your objection playbook or use Dialeads pre-built playbooks for real estate and insurance verticals. Live rebuttal copilot activates immediately on every call — a feature Mojo simply does not have.",
  },
  {
    num: "06",
    title: "Launch Your First Campaign",
    body: "Start dialing. Same core power dialing capability as Mojo — plus AI voice agent, dynamic voicemail drops, live objection rebuttals, automated follow-up, and full CRM sync running alongside it.",
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: FAQ Items                                                   */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: "Does Dialeads have triple-line dialing like Mojo?",
    answer:
      "Dialeads uses a single-line AI-assisted power dialer that automatically advances through leads and drops voicemails instantly — achieving similar or higher daily contact volumes to Mojo’s triple-line through automation rather than simultaneous lines. For teams that specifically require simultaneous multi-line dialing, Mojo remains strong in that capability.",
  },
  {
    question: "Is Dialeads really 70% cheaper than Mojo?",
    answer:
      "Yes. Mojo Dialer starts at $99/month for single-line and $149/month for triple-line. Dialeads Pro — which includes AI voice agent, live objection rebuttals, and full CRM sync that Mojo does not offer at any price — is $49/month. The savings increase significantly for multi-seat teams.",
  },
  {
    question: "Does Dialeads work for real estate like Mojo does?",
    answer:
      "Yes. Dialeads is widely used by real estate wholesalers, agents, and property managers. CSV import from PropStream, BatchLeads, DealMachine, and any other data source. Local presence CID, ringless voicemail drops, SMS follow-up, and real estate-specific call dispositions all included.",
  },
  {
    question: "Can I import my Mojo lead lists into Dialeads?",
    answer:
      "Yes. Export your leads from Mojo as CSV and import directly into Dialeads. Automatic phone validation, DNC scrubbing, and local caller ID matching on import. Ready to dial in under 2 minutes.",
  },
  {
    question: "Does Dialeads have the same real estate database integrations as Mojo?",
    answer:
      "Mojo has stronger native integrations with real estate-specific databases like Vulcan7 and RedX. Dialeads connects to any lead source via CSV import or Zapier — including PropStream, BatchLeads, DealMachine, and MLS feeds. If your specific data source is not natively supported, Zapier provides the connection.",
  },
  {
    question: "How long does it take to switch from Mojo to Dialeads?",
    answer:
      "Under 45 minutes for most users. Export contacts from Mojo, import into Dialeads, upload voicemail recordings, connect CRM, configure objection playbook, launch first campaign. 14-day free Pro trial starts immediately — no credit card required.",
  },
];

/* ------------------------------------------------------------------ */
/*  DATA: Testimonials                                                */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    quote:
      "“I was paying $149 a month for Mojo triple-line. Switched to Dialeads Pro at $49 and immediately got features Mojo does not have — AI voicemails, live objection scripts on screen, and automatic SMS follow-up. Saved $1,200 a year and got a better platform.”",
    initials: "MV",
    name: "Marcus Vance",
    role: "Real Estate Wholesaler",
  },
  {
    quote:
      "“Mojo is solid for dialing but it is just a dialer. After every call I was manually logging to my CRM, manually sending follow-up texts, manually scheduling callbacks. Dialeads does all of that automatically. I get 2 extra hours of actual dialing time every day.”",
    initials: "ER",
    name: "Elena Rostova",
    role: "Real Estate Agent",
  },
  {
    quote:
      "“The objection rebuttal copilot was the feature that sold me. My new agents were freezing on cold calls and taking months to ramp. Dialeads shows them exactly what to say the moment a seller pushes back. Ramp time dropped from 8 weeks to 2 weeks.”",
    initials: "JM",
    name: "Jason Miller",
    role: "Team Lead, Real Estate Investment Company",
  },
  {
    quote:
      "“I switched 6 agents from Mojo to Dialeads and saved $600 per month immediately. The AI voicemail drops alone increased our callback rate significantly because every voicemail now has the property address and seller’s name in it — not a generic recording.”",
    initials: "DK",
    name: "David K.",
    role: "Owner, Real Estate Wholesaling Operation",
  },
];

/* ================================================================== */
/*  COMPONENT                                                         */
/* ================================================================== */

export default function DialeadsVsMojoDialerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* ── Breadcrumb ── */}
      <section className="w-full bg-[#eff4ff] py-2">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm text-[#4a4455]">
          <nav className="flex items-center gap-2 text-[#5e5d6b]">
            <Link href="/" className="hover:text-[#630ed4] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/compare" className="hover:text-[#630ed4] transition-colors">
              Comparisons
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0b1c30] font-medium">Dialeads vs Mojo Dialer</span>
          </nav>
        </div>
      </section>

      {/* ── SECTION 1: Hero ── */}
      <section className="w-full py-24 bg-[#f8f9ff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
              <Scale className="w-3.5 h-3.5" />
              PLATFORM COMPARISON 2025
            </div>
            <h1 className="text-4xl md:text-[56px] md:leading-[60px] font-bold tracking-tight text-[#0b1c30] mb-6 text-balance">
              Dialeads vs Mojo Dialer &mdash; Which Power Dialer Wins for Outbound Teams in 2025?
            </h1>
            <p className="text-lg leading-7 text-[#4a4455] max-w-3xl mx-auto mb-8">
              Mojo Dialer is a solid triple-line power dialer with a strong reputation in real estate. Dialeads adds AI voice agents, live objection rebuttals, dynamic voicemail drops, and automated multi-channel follow-up &mdash; at 70% less cost. Here is the complete honest comparison.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all"
              >
                <span>Start Dialeads Free</span>
                <Zap className="w-4 h-4" />
              </Link>
              <a
                href="#comparison-table"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold text-sm shadow-sm transition-all"
              >
                <span>See Full Feature List</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-[#5e5d6b] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#630ed4]" />
              No credit card &middot; 14-day full Pro access &middot; Cancel anytime
            </p>
          </div>

          {/* Hero Cockpit Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Mojo Legacy Cockpit */}
            <div className="lg:col-span-5 bg-white rounded-xl p-8 flex flex-col justify-between shadow-sm relative opacity-95">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 bg-[#eff4ff] -mx-8 -mt-8 p-6 rounded-t-xl">
                  <div>
                    <span className="text-xl font-bold text-[#0b1c30]">Mojo Dialer</span>
                    <p className="text-sm text-[#5e5d6b]">Legacy Hardware / Triple-Line Dialer</p>
                  </div>
                  <span className="px-3 py-1 bg-[#dce9ff] rounded-full font-bold text-xs text-[#5e5d6b] uppercase">Copper / SIP Core</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-[#eff4ff] rounded-lg">
                    <div className="flex items-center justify-between text-[#5e5d6b] font-bold text-xs mb-2">
                      <span>Triple-Line Trunk Status</span>
                      <span className="text-[#ba1a1a] flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#ba1a1a] inline-block" /> High Connect Drop Rate
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white p-2 rounded text-sm text-[#0b1c30]">Line 1: Ringing...</div>
                      <div className="bg-white p-2 rounded text-sm text-[#0b1c30]">Line 2: Busy</div>
                      <div className="bg-white p-2 rounded text-sm text-[#0b1c30]">Line 3: Voicemail</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-[#4a4455]">
                    <div className="flex items-center gap-2 py-1">
                      <RadioTower className="w-4 h-4 text-[#5e5d6b]" />
                      <span>Single Static Audio Drop (.wav replay)</span>
                    </div>
                    <div className="flex items-center gap-2 py-1">
                      <XCircle className="w-4 h-4 text-[#ba1a1a]" />
                      <span className="text-[#ba1a1a] font-medium">No Live AI Transcription</span>
                    </div>
                    <div className="flex items-center gap-2 py-1">
                      <XCircle className="w-4 h-4 text-[#ba1a1a]" />
                      <span className="text-[#ba1a1a] font-medium">No In-Call Objection Assist</span>
                    </div>
                    <div className="flex items-center gap-2 py-1">
                      <AlertTriangle className="w-4 h-4 text-[#5e5d6b]" />
                      <span>Basic Real Estate CRM Export (Manual sync)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 bg-[#eff4ff] -mx-8 -mb-8 p-4 rounded-b-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs text-[#5e5d6b] uppercase block">Triple-Line Base Seat</span>
                  <span className="text-2xl font-bold text-[#0b1c30]">$149</span>
                  <span className="text-sm text-[#5e5d6b]">/mo/seat</span>
                </div>
                <span className="px-3 py-2 bg-[#dce9ff] rounded text-[#5e5d6b] font-semibold text-xs">Legacy Stack</span>
              </div>
            </div>

            {/* Right: Dialeads AI Cockpit */}
            <div className="lg:col-span-7 bg-white rounded-xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white via-white to-[#eff4ff]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#7C3AED]" />
              <div>
                <div className="flex flex-wrap items-center justify-between pb-4 mb-4 bg-[#eaddff]/20 -mx-8 -mt-8 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shadow-sm">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-[#0b1c30]">Dialeads Outbound AI Cockpit</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#7C3AED] text-white font-bold text-xs">LIVE</span>
                      </div>
                      <p className="text-sm text-[#630ed4] font-medium">Next-Gen AI Outbound Platform &middot; Sub-200ms Latency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-xs text-[#0b1c30] uppercase">A-Attestation CID Active</span>
                  </div>
                </div>

                {/* Active Call Stream */}
                <div className="bg-[#213145] text-[#eaf1ff] p-4 rounded-xl mb-4 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#d2bbff]" />
                      <span className="text-sm font-semibold text-white">Sarah Jenkins &mdash; 448 Maple Drive (Expired Lead)</span>
                    </div>
                    <span className="text-[#d2bbff] font-semibold text-xs bg-[#630ed4]/30 px-2 py-0.5 rounded">00:42 Active</span>
                  </div>
                  {/* Waveform */}
                  <div className="h-8 flex items-center gap-1 px-2 mb-3 bg-[#213145]/60 rounded">
                    <div className="w-1.5 h-3 bg-[#7C3AED] rounded-full animate-pulse" />
                    <div className="w-1.5 h-6 bg-[#7C3AED] rounded-full" />
                    <div className="w-1.5 h-7 bg-[#eaddff] rounded-full" />
                    <div className="w-1.5 h-4 bg-[#7C3AED] rounded-full" />
                    <div className="w-1.5 h-8 bg-[#eaddff] rounded-full" />
                    <div className="w-1.5 h-5 bg-[#7C3AED] rounded-full" />
                    <div className="w-1.5 h-3 bg-[#7C3AED] rounded-full" />
                    <div className="w-1.5 h-6 bg-[#eaddff] rounded-full" />
                    <span className="ml-auto text-[#eaddff] font-bold text-xs">Real-Time Audio Stream</span>
                  </div>
                  <div className="text-[#d3e4fe] text-sm italic">
                    &ldquo;We had so many looky-loos last month, and honestly we are locked into a contract with an advisor until December...&rdquo;
                  </div>
                </div>

                {/* Objection Rebuttal Copilot */}
                <div className="bg-[#eaddff]/30 rounded-xl p-4 mb-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-[#7C3AED] font-bold text-xs uppercase">
                      <Bot className="w-4 h-4" />
                      <span>Sub-200ms Copilot &middot; Detected: &ldquo;Locked into contract&rdquo;</span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#7C3AED] text-white rounded text-[11px] font-semibold">94% Confidence</span>
                  </div>
                  <p className="text-base text-[#0b1c30] mb-3">
                    <span className="font-semibold text-[#630ed4]">Script:</span> &ldquo;Totally understand, most teams we talk to are too until Q4. What if we just showed you our 70% cost reduction benchmark so you have numbers for your annual review?&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 px-3 py-1 bg-[#7C3AED] text-white rounded font-semibold text-xs hover:bg-[#630ed4] shadow-xs">
                      <Mic2 className="w-3.5 h-3.5" />
                      <span>Copy to Voice</span>
                    </button>
                    <button className="inline-flex items-center gap-1 px-3 py-1 bg-white text-[#0b1c30] rounded font-semibold text-xs hover:bg-[#e5eeff] shadow-xs">
                      <span>Advance Pipeline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Cockpit Actions */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-[#0b1c30] mb-4">
                  <div className="bg-[#eff4ff] p-2 rounded text-center">
                    <Voicemail className="w-5 h-5 text-[#630ed4] mx-auto" />
                    <span className="font-medium">1-Click AI VM Drop</span>
                  </div>
                  <div className="bg-[#eff4ff] p-2 rounded text-center">
                    <MessageSquare className="w-5 h-5 text-[#630ed4] mx-auto" />
                    <span className="font-medium">Auto SMS Trigger</span>
                  </div>
                  <div className="bg-[#eff4ff] p-2 rounded text-center">
                    <RefreshCw className="w-5 h-5 text-[#630ed4] mx-auto" />
                    <span className="font-medium">HubSpot 2-Way</span>
                  </div>
                  <div className="bg-[#eff4ff] p-2 rounded text-center">
                    <Shield className="w-5 h-5 text-[#630ed4] mx-auto" />
                    <span className="font-medium">Auto DNC Clean</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 bg-[#eff4ff] -mx-8 -mb-8 p-4 rounded-b-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs text-[#630ed4] uppercase block">Dialeads Pro All-Inclusive</span>
                  <span className="text-2xl font-bold text-[#0b1c30]">$49</span>
                  <span className="text-sm text-[#5e5d6b]">/mo all-inclusive</span>
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#7C3AED] text-white font-semibold text-xs hover:bg-[#630ed4] transition-all shadow-sm"
                >
                  <span>Claim Pro Access</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Quick Verdict ── */}
      <section className="w-full py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white text-[#5e5d6b] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              BOTTOM LINE UP FRONT
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              The Short Answer &mdash; What Each Platform Is Built For
            </h2>
            <p className="text-base text-[#5e5d6b]">No fluff, no bias. Here is the architectural reality of choosing between Mojo and Dialeads in 2025.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mojo Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#5e5d6b] flex items-center justify-center font-bold">M</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30]">Mojo Dialer is for:</h3>
                  <p className="text-sm text-[#5e5d6b]">Legacy Triple-Line Cold Call Volumes</p>
                </div>
              </div>
              <p className="text-base text-[#4a4455] leading-relaxed">
                Real estate agents and sales teams that need a reliable triple-line power dialer with a large existing user base and strong real estate industry integrations. Established tool with a proven track record &mdash; but built on older technology without AI calling, autonomous voice agents, or live objection coaching.
              </p>
            </div>
            {/* Dialeads Card */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#7C3AED]" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center font-bold">D</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30]">Dialeads is for:</h3>
                  <p className="text-sm text-[#630ed4] font-medium">Autonomous Scale &amp; High-Conversion Revenue Teams</p>
                </div>
              </div>
              <p className="text-base text-[#4a4455] leading-relaxed">
                Sales teams and real estate professionals who want a modern AI-powered outbound platform &mdash; power dialing plus autonomous AI voice agents, live objection rebuttals that appear on screen in real time, dynamic personalized voicemail drops, and automated multi-channel follow-up &mdash; at significantly lower cost than Mojo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Full Comparison Table ── */}
      <section className="w-full py-24 bg-[#f8f9ff]" id="comparison-table">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              FEATURE BY FEATURE
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Dialeads vs Mojo Dialer &mdash; Complete Feature Comparison
            </h2>
            <p className="text-base text-[#5e5d6b]">
              Detailed inspection across 23 technical and commercial capabilities.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#eff4ff] text-[#0b1c30]">
                  <th className="py-4 px-6 text-xl font-bold" scope="col">Feature</th>
                  <th className="py-4 px-6 text-xl font-bold text-[#630ed4]" scope="col">Dialeads</th>
                  <th className="py-4 px-6 text-xl font-bold text-[#5e5d6b]" scope="col">Mojo Dialer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eeff]">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-[#eff4ff]/50 transition-colors ${row.highlight ? "bg-[#eaddff]/5" : ""}`}
                  >
                    <td className={`py-3 px-6 font-medium text-[#0b1c30] ${row.isPrice ? "text-base" : ""}`}>
                      {row.feature}
                    </td>
                    <td className={`py-3 px-6 font-bold text-[#630ed4] ${row.isPrice ? "text-xl" : ""}`}>
                      {row.dialeads}
                    </td>
                    <td
                      className={`py-3 px-6 ${
                        row.mojoDialer === "❌"
                          ? "text-[#ba1a1a] font-medium"
                          : "text-[#5e5d6b]"
                      } ${row.isPrice ? "text-xl" : ""}`}
                    >
                      {row.mojoDialer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Deep Dive Comparison ── */}
      <section className="w-full py-24 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white text-[#630ed4] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              WHERE THEY DIFFER MOST
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              The 6 Biggest Differences Between Dialeads and Mojo Dialer
            </h2>
            <p className="text-base text-[#5e5d6b]">A rigorous technical and operational audit of everyday outbound performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deepDives.map((item) => (
              <div key={item.num} className="bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs">{item.num}</span>
                    <h3 className="text-xl font-bold text-[#0b1c30]">{item.title}</h3>
                  </div>
                  <div className="space-y-3 text-sm text-[#4a4455] mb-6">
                    <p>
                      <strong className="text-[#0b1c30]">Mojo Dialer:</strong> {item.mojoText}
                    </p>
                    <p>
                      <strong className="text-[#0b1c30]">Dialeads:</strong> {item.dialeadsText}
                    </p>
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${item.calloutStyle === "highlight" ? "bg-[#eaddff]/30" : "bg-[#eff4ff]"}`}>
                  {item.calloutLabel && (
                    <span className="font-bold text-xs text-[#5e5d6b] uppercase block mb-1">{item.calloutLabel}</span>
                  )}
                  {item.calloutIcon ? (
                    <div className="flex items-center gap-2 text-[#630ed4] font-semibold text-sm">
                      <item.calloutIcon className="w-4 h-4" />
                      <span>{item.callout}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-[#0b1c30]">{item.callout}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Pricing Comparison ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              REAL COST COMPARISON
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Dialeads vs Mojo Dialer &mdash; What You Actually Pay Per Seat
            </h2>
            <p className="text-base text-[#5e5d6b]">A transparent breakdown of direct monthly software costs and hidden upgrade fees.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 overflow-x-auto rounded-xl shadow-sm bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#eff4ff] text-[#0b1c30]">
                    <th className="py-4 px-6 text-xl font-bold" scope="col">Plan Feature / Tier</th>
                    <th className="py-4 px-6 text-xl font-bold text-[#630ed4]" scope="col">Dialeads</th>
                    <th className="py-4 px-6 text-xl font-bold text-[#5e5d6b]" scope="col">Mojo Dialer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5eeff]">
                  {pricingRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-[#eaddff]/5" : ""}>
                      <td className="py-3 px-6 font-medium text-[#0b1c30]">{row.feature}</td>
                      <td className="py-3 px-6 font-semibold text-[#630ed4]">{row.dialeads}</td>
                      <td className={`py-3 px-6 ${row.mojoError ? "text-[#ba1a1a]" : "text-[#5e5d6b]"}`}>
                        {row.mojo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Team Cost Simulation */}
            <div className="lg:col-span-4 bg-white rounded-xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#7C3AED]" />
              <div>
                <span className="inline-flex items-center gap-1 font-bold text-xs uppercase text-[#630ed4] mb-3">
                  <Calculator className="w-4 h-4" />
                  TEAM COST SIMULATION
                </span>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-4">
                  5-Person Team Annual Run Rate
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-[#eff4ff] rounded-lg">
                    <div className="flex justify-between items-center text-[#5e5d6b] text-sm mb-1">
                      <span>Mojo Triple-Line (5 seats)</span>
                      <span className="text-[#0b1c30] font-semibold">$745/mo</span>
                    </div>
                    <div className="text-xl font-bold text-[#5e5d6b]">~$8,940 / year</div>
                  </div>
                  <div className="p-4 bg-[#eaddff]/20 rounded-lg">
                    <div className="flex justify-between items-center text-[#630ed4] text-sm mb-1">
                      <span>Dialeads Pro (5 seats)</span>
                      <span className="text-[#0b1c30] font-semibold">$245/mo</span>
                    </div>
                    <div className="text-xl font-bold text-[#630ed4]">~$2,940 / year</div>
                  </div>
                </div>
                <div className="p-4 bg-[#7C3AED] text-white rounded-xl text-center shadow-md">
                  <span className="font-bold text-xs uppercase text-white/80 block mb-1">Guaranteed Capital Optimization</span>
                  <div className="text-2xl md:text-[32px] md:leading-[38px] font-bold tracking-tight">
                    Annual saving with Dialeads: ~$6,000
                  </div>
                </div>
              </div>
              <div className="pt-6 text-center">
                <Link
                  href="/signup"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <span>Switch Your Team Today</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Real Estate Specific ── */}
      <section className="w-full py-24 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white text-[#630ed4] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              REAL ESTATE USE CASE
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Dialeads vs Mojo Dialer for Real Estate Professionals
            </h2>
            <p className="text-base text-[#5e5d6b]">
              Mojo Dialer was built primarily for real estate and has strong brand recognition in the industry. Here is how the two platforms compare specifically for real estate use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realEstateCards.map((card, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c30] mb-4">{card.title}</h3>
                  <div className="space-y-3 text-sm text-[#4a4455] mb-6">
                    <p>
                      <strong className="text-[#0b1c30]">Mojo:</strong> {card.mojoText}
                    </p>
                    <p>
                      <strong className="text-[#0b1c30]">Dialeads:</strong> {card.dialeadsText}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-[#eaddff]/30 text-[#630ed4] font-semibold text-xs rounded">
                  {card.verdict}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Migration Guide ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              SWITCHING FROM MOJO
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Moving From Mojo Dialer to Dialeads Takes Under 45 Minutes
            </h2>
            <p className="text-base text-[#5e5d6b]">Zero downtime. Zero list corruption. Clean transition architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {migrationSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-[#eaddff] text-[#630ed4] font-bold flex items-center justify-center mb-3 text-xs">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4a4455]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ── */}
      <section className="w-full py-24 bg-[#eff4ff]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white text-[#630ed4] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              COMMON QUESTIONS
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Frequently Asked Questions About Dialeads vs Mojo Dialer
            </h2>
            <p className="text-base text-[#5e5d6b]">Clear answers about migration, technical requirements, and functional differences.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className="text-xl font-bold text-[#0b1c30] pr-4">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7b7487] flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#4a4455] leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Testimonials (NO STARS) ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] font-bold text-xs uppercase tracking-wider mb-3 shadow-xs">
              FROM TEAMS WHO SWITCHED
            </div>
            <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              What Teams Say After Switching From Mojo Dialer to Dialeads
            </h2>
            <p className="text-base text-[#5e5d6b]">Real operators reporting actual economics, ramp speeds, and conversion uplifts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <p className="text-base text-[#0b1c30] mb-6 leading-relaxed italic">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e5eeff]">
                  <div className="w-10 h-10 rounded-full bg-[#eaddff] text-[#630ed4] flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#0b1c30] block">{t.name}</span>
                    <span className="text-sm text-[#5e5d6b]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: Bottom CTA ── */}
      <section className="w-full py-32 bg-[#eff4ff] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-white text-[#630ed4] font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            READY TO SWITCH?
          </div>
          <h2 className="text-4xl md:text-[56px] md:leading-[60px] font-bold tracking-tight text-[#0b1c30] mb-6 text-balance">
            Get Everything Mojo Offers &mdash; Plus AI Voice Agents, Live Objection Rebuttals, and Full CRM Sync &mdash; at 70% Less Cost
          </h2>
          <p className="text-lg leading-7 text-[#4a4455] max-w-2xl mx-auto mb-8">
            Import your Mojo lead lists, upload your voicemail recordings, connect your CRM, and launch your first AI-powered dial session in under 45 minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold text-sm shadow-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-[#630ed4]" />
              <span>Book a Live Demo</span>
            </Link>
          </div>
          <p className="text-sm text-[#5e5d6b] flex items-center justify-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#630ed4]" />
            No credit card &middot; Import your Mojo lists &middot; Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
