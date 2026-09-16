"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ArrowLeftRight,
  BadgeCheck,
  Phone,
  UserX,
  Ban,
  Network,
  AudioWaveform,
  Voicemail,
  MessageSquareText,
  RefreshCw,
  Zap,
  Building2,
  Rocket,
  Users,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  HeadphonesIcon,
  Calendar,
  Bot,
  CircleAlert,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA ARRAYS                                                        */
/* ------------------------------------------------------------------ */

const comparisonRows = [
  { feature: "Power dialer", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Predictive dialer", dialeads: "Yes (AI-Assisted)", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "AI voice agent — autonomous calls", dialeads: "Yes (Sub-500ms)", calltools: "No", dialeadsWin: true, calltoolsWin: false, keyDiff: true },
  { feature: "Local presence caller ID", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Ringless voicemail drop", dialeads: "AI Dynamic", calltools: "Pre-recorded", dialeadsWin: true, calltoolsWin: false },
  { feature: "Live objection rebuttal copilot", dialeads: "Yes", calltools: "No", dialeadsWin: true, calltoolsWin: false, keyDiff: true },
  { feature: "Automatic SMS follow-up", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Automatic email follow-up", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "WhatsApp follow-up", dialeads: "Yes", calltools: "No", dialeadsWin: true, calltoolsWin: false },
  { feature: "Inbound call routing", dialeads: "No (Outbound focus)", calltools: "Yes", dialeadsWin: false, calltoolsWin: true },
  { feature: "IVR system", dialeads: "No", calltools: "Yes", dialeadsWin: false, calltoolsWin: true },
  { feature: "CRM sync — HubSpot, Salesforce", dialeads: "Native 2-Way", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "GoHighLevel integration", dialeads: "Native", calltools: "No", dialeadsWin: true, calltoolsWin: false },
  { feature: "Call recordings", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "AI call transcripts", dialeads: "Real-Time", calltools: "No", dialeadsWin: true, calltoolsWin: false },
  { feature: "1-click call dispositions", dialeads: "Yes", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Unified inbox — calls, SMS, notes", dialeads: "Yes", calltools: "No", dialeadsWin: true, calltoolsWin: false },
  { feature: "Speed-to-lead calling via webhook", dialeads: "Under 60s", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "National DNC auto-scrub", dialeads: "Auto (Every dial)", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Time-zone enforcement", dialeads: "Auto (8am-9pm local)", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "STIR/SHAKEN A-attestation", dialeads: "Yes (Carrier Grade)", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "A2P 10DLC SMS registration", dialeads: "Guided in 5 min", calltools: "Manual", dialeadsWin: true, calltoolsWin: false },
  { feature: "Team management and reporting", dialeads: "Yes (Full Dashboard)", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "White-label for agencies", dialeads: "Enterprise", calltools: "Yes", dialeadsWin: true, calltoolsWin: false },
  { feature: "Setup time", dialeads: "15 minutes", calltools: "Days to weeks", dialeadsWin: true, calltoolsWin: false, bold: true },
  { feature: "Starting price", dialeads: "$29/mo", calltools: "$99+/mo", dialeadsWin: true, calltoolsWin: false, bold: true, large: true },
];

const deepDives = [
  {
    number: "01",
    title: "Setup Complexity — 15 Minutes vs Days to Weeks",
    calltoolsText:
      "Enterprise telephony platform with significant setup complexity. SIP trunk configuration, IVR setup, inbound routing rules, compliance configuration, CRM mapping, and agent provisioning typically require IT involvement and days to weeks of onboarding. Many users report needing dedicated support resources to get fully operational.",
    dialeadsText:
      "Designed for teams that need to be dialing within 15 minutes of signing up. Import your CSV, connect your CRM with one click, upload your voicemail recording, configure your SMS follow-up template, and launch your first campaign. No IT required. No technical knowledge needed. No onboarding calls.",
    badgeIcon: "verified",
    badgeText: "Zero IT dependency · Dialing in under 15 minutes guaranteed.",
  },
  {
    number: "02",
    title: "AI Voice Agent — CallTools Has None",
    calltoolsText:
      "No AI voice agent capability. Every outbound call requires a human rep. Scaling outbound volume means scaling headcount proportionally. First-touch outreach at 10,000 leads per month requires enough reps to make 10,000 calls manually.",
    dialeadsText:
      "AI voice agent handles first-touch outbound calls autonomously around the clock — qualifying prospects, handling common objections, and routing warm leads to human reps. One operator manages campaigns contacting thousands of leads per day without additional headcount. Scale volume without scaling cost.",
    badgeIcon: "group",
    badgeText: "Human Headcount Deficit: Scale lead qualification without recruiting, onboarding, or managing additional cold callers.",
  },
  {
    number: "03",
    title: "Live Objection Rebuttals — CallTools Has None",
    calltoolsText:
      "No real-time AI coaching during live calls. Reps handle objections based on their own training and experience. New reps ramp slowly. Senior reps carry the team. No systematic way to ensure consistent objection handling across the entire team.",
    dialeadsText:
      "Sub-200ms real-time audio transcription detects every objection the moment it lands — price, timing, competition, gatekeeper. The exact rebuttal script appears on the rep’s screen instantly. New reps perform like veterans from day one. Objection handling becomes systematic and consistent across every rep on the team.",
    badgeIcon: "trending",
    badgeText: "+41% objection win rate on live sales calls across audited campaigns.",
  },
  {
    number: "04",
    title: "Price — Dialeads Is Significantly Cheaper",
    calltoolsText:
      "Starts at $99/month per seat and increases significantly with additional features, seats, and usage. For a 10-person team with full features, expect $1,000–$2,500 per month. Enterprise contracts with annual commitments common.",
    dialeadsText:
      "$49/month Pro plan includes AI voice agent, live objection rebuttals, automated follow-up, and full CRM sync — features that are either unavailable in CallTools or require significant additional cost. A 10-person team on Dialeads Pro costs $490/month vs $1,000–$2,500 on CallTools. Annual savings for a 10-person team: $6,120–$24,120.",
    badgeIcon: "savings",
    badgeText: "Annual savings for a 10-person team: $6,120–$24,120 per year.",
  },
  {
    number: "05",
    title: "Voicemail Drop Intelligence",
    calltoolsText:
      "Pre-recorded voicemail drop — same audio file dropped to every contact. No personalization. Generic message identical for every prospect on your list. Standard callback rates under 3%.",
    dialeadsText:
      "AI dynamic voicemail drops synthesize a personalized message per contact — inserting their name, company, specific pain point or product interest, and a tailored call to action. Every voicemail sounds individually crafted. Callback rates average 3x higher than generic pre-recorded drops.",
    badgeIcon: "waveform",
    badgeText: "Callback Velocity: 3x higher callback rate with synthesized individual voice notes.",
  },
  {
    number: "06",
    title: "Inbound Capabilities — CallTools Wins Here",
    calltoolsText:
      "Strong inbound call routing, IVR systems, queue management, and blended inbound/outbound call center functionality. Built for operations that need to handle both inbound and outbound volume simultaneously.",
    dialeadsText:
      "Dialeads is purpose-built for outbound. Inbound call routing and IVR are not core Dialeads features. If your operation requires significant inbound call center functionality alongside outbound, CallTools has an advantage in this specific area.",
    badgeIcon: "shield",
    badgeText: "Architectural Honesty: If multi-tier IVR and inbound queues are mandatory, CallTools excels.",
    calltoolsWins: true,
  },
];

const pricingRows = [
  { metric: "Entry price", dialeads: "$29/mo", calltools: "$99+/mo" },
  { metric: "Full-featured plan", dialeads: "$49/mo", calltools: "$150–$300/mo per seat" },
  { metric: "AI voice agent", dialeads: "Included", calltools: "Not available", calltoolsError: true },
  { metric: "Live objection rebuttals", dialeads: "Included", calltools: "Not available", calltoolsError: true },
  { metric: "AI call transcripts", dialeads: "Included", calltools: "Not available", calltoolsError: true },
  { metric: "Setup time", dialeads: "15 minutes", calltools: "Days to weeks" },
  { metric: "Onboarding cost", dialeads: "Zero", calltools: "Often paid" },
  { metric: "Annual contract required", dialeads: "No", calltools: "Often yes" },
  { metric: "10-person team monthly", dialeads: "$490", calltools: "$1,000–$2,500", highlight: true },
  { metric: "10-person team annual", dialeads: "$5,880", calltools: "$12,000–$30,000", highlight: true, large: true },
];

const chooseCalltools = [
  "You run a large traditional call center with dedicated IT and operations staff",
  "You need robust inbound call routing, IVR systems, and blended inbound/outbound management",
  "You have an enterprise telephony setup that requires custom SIP trunk configuration",
  "You have an annual budget for a complex platform and the resources to manage it",
  "Your team size is 50+ seats and you need enterprise-grade call center infrastructure",
  "You do not need AI voice agents or live objection coaching — just high-volume predictive dialing",
];

const chooseDialeads = [
  "You want to be dialing within 15 minutes of signing up — not after days of setup",
  "You need AI voice agents to handle first-touch calls autonomously without adding headcount",
  "You want live objection rebuttals coaching reps in real time during every call",
  "You need outbound calling plus voicemail drops plus automated follow-up in one platform",
  "Your team is under 50 seats and you want enterprise features without enterprise complexity",
  "You want to save $6,000–$24,000 per year compared to CallTools for a 10-person team",
  "You are an agency that needs white-label branding and multi-client campaign management",
];

const useCases = [
  {
    number: 1,
    title: "B2B Sales Teams — SDR Outbound",
    calltoolsText:
      "Solid predictive dialer for high-volume SDR teams. CRM sync, voicemail drops, SMS follow-up, team reporting all available. No AI coaching during calls. No autonomous AI voice agent. High per-seat cost.",
    dialeadsText:
      "AI voice agent handles first-touch calls. Live objection rebuttals coach reps in real time. Automated follow-up sequences run post-call without manual action. 70%+ cheaper per seat. New reps ramp in days not months.",
    winner: "dialeads",
    winnerText: "Dialeads for modern SDR teams focused on AI-assisted outbound.",
  },
  {
    number: 2,
    title: "Real Estate and Insurance Outreach",
    calltoolsText:
      "Works for real estate and insurance outbound. Power dialer, voicemail drops, local presence CID, DNC scrubbing all available. Setup complexity and cost may be overkill for individual agents or small teams.",
    dialeadsText:
      "Purpose-optimized for real estate and insurance with speed-to-lead calling, dynamic personalized voicemail drops, 8-touch automated follow-up, and TCPA compliance — at $49/month with 15-minute setup.",
    winner: "dialeads",
    winnerText: "Dialeads for individual agents and small teams. CallTools for large insurance call centers.",
  },
  {
    number: 3,
    title: "Large Call Centers — 50+ Seats",
    calltoolsText:
      "Strong inbound/outbound blended call center infrastructure. IVR, queue management, workforce management features. Built for large operations with dedicated IT.",
    dialeadsText:
      "Enterprise plan handles large teams with dedicated SIP trunks, white-label, and custom configuration — but without native IVR or inbound routing.",
    winner: "calltools",
    winnerText: "CallTools for operations requiring inbound call center infrastructure. Dialeads for outbound-only operations at any scale.",
  },
  {
    number: 4,
    title: "Lead Generation Agencies",
    calltoolsText:
      "White-label available. Multi-campaign management possible but complex. Per-client reporting requires manual configuration.",
    dialeadsText:
      "Purpose-built for agencies — multi-client dashboard with full data isolation, one-click per-client reporting, guided 10DLC registration per client, GoHighLevel sync, white-label on Enterprise plan.",
    winner: "dialeads",
    winnerText: "Dialeads for lead generation agencies running multiple client campaigns.",
  },
];

const migrationSteps = [
  {
    title: "Export Your Contact Data",
    text: "Request a full data export from CallTools — contact lists, call history, disposition data, and any custom fields. Most data exports as CSV cleanly.",
  },
  {
    title: "Import Into Dialeads",
    text: "Upload your contact CSV into Dialeads. Phone numbers auto-validated, DNC-scrubbed, duplicates removed, local caller IDs matched. Ready to dial in under 2 minutes per list.",
  },
  {
    title: "Re-Upload Voicemail Recordings",
    text: "Upload your existing voicemail recordings from CallTools directly into Dialeads. Optionally enable AI dynamic voicemail drops for personalized messages — a significant upgrade from CallTools static drops.",
  },
  {
    title: "Connect Your CRM",
    text: "Connect HubSpot, Salesforce, GoHighLevel, or Close CRM with one click. Full bi-directional sync active immediately. More comprehensive than CallTools CRM integration for most modern CRM setups.",
  },
  {
    title: "Configure Objection Playbooks",
    text: "Upload your objection handling scripts or use Dialeads pre-built playbooks by vertical. Live rebuttal copilot activates on every call — a feature unavailable in CallTools at any price.",
  },
  {
    title: "Set Up Follow-Up Sequences",
    text: "Configure automated SMS, email, and WhatsApp follow-up sequences triggered by call dispositions. More sophisticated than CallTools follow-up capabilities and fully automated.",
  },
  {
    title: "Launch and Save",
    text: "Start dialing. Same core outbound capability as CallTools — plus AI voice agent, dynamic voicemail drops, live objection rebuttals, unified inbox, and automated follow-up. At a fraction of the cost.",
    highlight: true,
  },
];

const faqItems = [
  {
    q: "Is Dialeads as powerful as CallTools for large teams?",
    a: "For outbound-focused operations, yes — and with significant additional AI capabilities CallTools does not offer. For operations requiring robust inbound call routing and IVR systems, CallTools has an advantage in those specific areas.",
  },
  {
    q: "Does Dialeads have predictive dialing like CallTools?",
    a: "Dialeads uses an AI-assisted power dialer that automatically advances through lead queues, detects answering machines, drops voicemails instantly, and routes live answers to reps — achieving similar daily contact volumes to predictive dialers through intelligent automation rather than simultaneous line blasting.",
  },
  {
    q: "How much does switching from CallTools to Dialeads save?",
    a: "For a 10-person team, switching from CallTools to Dialeads Pro saves approximately $6,120–$24,120 per year depending on your CallTools plan and seat count. The savings increase further when you eliminate separate tools for voicemail drops, SMS, and CRM integration that Dialeads includes.",
  },
  {
    q: "Can Dialeads handle the same call volume as CallTools?",
    a: "Yes. Dialeads handles high-volume outbound campaigns with no caps on call volume on the Pro and Enterprise plans. The AI voice agent handles unlimited simultaneous autonomous calls — significantly exceeding what any human rep-dependent system can achieve.",
  },
  {
    q: "Does Dialeads have inbound call routing like CallTools?",
    a: "Dialeads is currently optimized for outbound operations. Native inbound call routing and IVR systems are not core Dialeads features. If your operation requires significant inbound call center functionality, evaluate whether CallTools or a dedicated inbound platform better serves that need.",
  },
  {
    q: "How long does switching from CallTools to Dialeads take?",
    a: "Most teams are fully operational on Dialeads within a few hours — compared to the days or weeks CallTools typically requires. Export your contacts, import into Dialeads, connect your CRM, configure your sequences, and launch your first campaign. 14-day free Pro trial starts immediately.",
  },
  {
    q: "Does Dialeads offer a contract like CallTools?",
    a: "No. Dialeads is month-to-month with no annual contract required. Cancel anytime. No cancellation fees. No lock-in.",
  },
];

const testimonials = [
  {
    quote:
      "CallTools is a solid call center platform but it was built for a different era. We needed AI voice agents and live objection coaching — neither of which CallTools offers at any price. Dialeads had both, cost 70% less per seat, and we were up and running in an afternoon instead of two weeks.",
    initials: "VP",
    role: "VP of Sales, B2B SaaS Company",
  },
  {
    quote:
      "The setup complexity of CallTools required us to bring in a consultant. Dialeads took 20 minutes to set up ourselves. The time and money we saved on implementation alone paid for a year of Dialeads.",
    initials: "OM",
    role: "Operations Manager, Lead Generation Agency",
  },
  {
    quote:
      "We were paying over $2,000 a month for CallTools for a 10-person team. Switched to Dialeads Enterprise for less than half that cost and immediately got AI voice agents and live objection rebuttals that CallTools never offered. Pipeline velocity doubled in 60 days.",
    initials: "SD",
    role: "Sales Director, Financial Services Firm",
  },
  {
    quote:
      "The objection rebuttal copilot is what nobody talks about enough. Our reps used to freeze when prospects pushed back on price. Dialeads shows them exactly what to say before they even process the objection. Win rates on price objections went up significantly within the first month.",
    initials: "SD",
    role: "SDR Team Lead, Insurance Agency",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function DialeadsVsCallToolsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* ── Breadcrumb & Carrier Status ── */}
      <section className="w-full bg-[#eff4ff]/60 border-b border-[#ccc3d8]/30 py-3">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#5e5d6b]">
            <Link href="/" className="hover:text-[#630ed4] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#7b7487]" />
            <Link href="/compare" className="hover:text-[#630ed4] transition-colors">
              Comparisons
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#7b7487]" />
            <span className="text-[#0b1c30] font-semibold">Dialeads vs CallTools</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#630ed4]/10 border border-[#630ed4]/20 text-[#630ed4] font-bold text-[11px] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#630ed4] animate-pulse" />
            <span>Carrier Compliance Verified &middot; 99.98% Local Presence Attestation (STIR/SHAKEN Tier-A)</span>
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="w-full relative overflow-hidden pt-16 pb-24 bg-gradient-to-b from-[#f8f9ff] via-white to-[#f8f9ff]">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-4 shadow-sm">
              <ArrowLeftRight className="w-4 h-4" />
              PLATFORM COMPARISON
            </span>
            <h1 className="font-bold text-[28px] leading-[32px] md:text-[56px] md:leading-[60px] text-[#0b1c30] tracking-tight mb-4">
              Dialeads vs CallTools &mdash; Which Outbound Platform Is Right for Your Team in 2025?
            </h1>
            <p className="text-lg leading-7 text-[#4a4455] max-w-3xl mb-8">
              CallTools is an established predictive dialer built for traditional call centers. Dialeads is built for modern outbound teams that want AI voice agents handling first-touch calls autonomously, live objection rebuttals coaching reps in real time, and automated multi-channel follow-up running without manual input. Here is the complete honest comparison.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 w-full sm:w-auto">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#630ed4] text-white font-bold text-sm shadow-lg hover:bg-[#7C3AED] transition-all hover:scale-[1.02]"
              >
                Start Dialeads Free
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="#comparison-table"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-[#ccc3d8]/60 text-[#0b1c30] font-bold text-sm hover:bg-[#eff4ff] transition-all"
              >
                See Full Feature List
                <ArrowDown className="w-4 h-4 ml-1" />
              </a>
            </div>
            <p className="text-sm text-[#5e5d6b] flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-[#630ed4]" />
              No credit card &middot; 14-day full Pro access &middot; Cancel anytime
            </p>
          </div>

          {/* Side-by-Side Architecture Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* CallTools Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-[#ccc3d8]/50 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e3e0f1]/40 rounded-bl-full -z-0 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#dce9ff] flex items-center justify-center text-[#5e5d6b]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#0b1c30]">CallTools</h3>
                      <span className="text-xs text-[#5e5d6b] font-medium">Legacy Call Center Architecture</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#dce9ff] text-[#5e5d6b] text-[11px] font-bold uppercase">PBX Based</span>
                </div>
                <p className="text-sm text-[#4a4455] mb-4">
                  Predictive Multi-Line PBX &middot; Heavy IT Overhead &middot; Days/Weeks Setup &middot; $99+/seat + telephony surcharges
                </p>
                <div className="space-y-2 mb-6">
                  <div className="p-3 rounded-lg bg-[#eff4ff]/70 border border-[#ccc3d8]/30 text-sm text-[#5e5d6b] flex items-start gap-2">
                    <Network className="w-[18px] h-[18px] text-[#5e5d6b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0b1c30] block">Complex SIP / PBX Provisioning</span>
                      <span className="text-xs">Manual trunking, IVR tree builds, and telecom engineering required.</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#eff4ff]/70 border border-[#ccc3d8]/30 text-sm text-[#5e5d6b] flex items-start gap-2">
                    <UserX className="w-[18px] h-[18px] text-[#5e5d6b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0b1c30] block">100% Rep-Dependent Calling</span>
                      <span className="text-xs">Zero AI voice autonomy. Every dial consumes human SDR time.</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#eff4ff]/70 border border-[#ccc3d8]/30 text-sm text-[#5e5d6b] flex items-start gap-2">
                    <Ban className="w-[18px] h-[18px] text-[#5e5d6b] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0b1c30] block">Static Voicemail Drop</span>
                      <span className="text-xs">Identical MP3 playback to all prospects. Under 3% callback rate.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#ccc3d8]/30 flex items-center justify-between text-sm">
                <span className="text-[#5e5d6b]">Average Deployment</span>
                <span className="font-bold text-[#0b1c30]">14 to 28 Days</span>
              </div>
            </div>

            {/* Dialeads Card */}
            <div className="lg:col-span-7 rounded-2xl bg-[#213145] text-[#eaf1ff] p-6 border-2 border-[#7C3AED] shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#630ed4] via-[#7C3AED] to-[#d2bbff]" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-[#630ed4] flex items-center justify-center shadow-lg">
                      <AudioWaveform className="w-[22px] h-[22px] text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-white">Dialeads Outbound AI Cockpit</h3>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Live Audio Node
                        </span>
                      </div>
                      <span className="text-xs text-[#cbdbf5] font-medium">Sub-180ms Latency &middot; Autonomous &amp; Assisted</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#630ed4]/30 border border-[#d2bbff]/40 text-[#eaddff] text-[11px] font-bold">
                    15-Minute Setup &middot; $49/mo All-Inclusive
                  </span>
                </div>

                {/* Live Stream Cockpit Visual */}
                <div className="rounded-xl bg-[#0b1422] border border-white/10 p-4 mb-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">Active Call: Michael Harris (VP RevOps, CloudFlow)</span>
                      <span className="text-[#cbdbf5]">(415) 555-0182</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#eaddff]">
                      <Zap className="w-4 h-4" />
                      <span className="font-bold">142ms Latency</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 bg-white/5 rounded">
                    <span className="text-[11px] text-[#cbdbf5]">Prospect Speaking...</span>
                    <div className="flex items-end gap-1 h-5">
                      <span className="w-1 bg-[#7C3AED] h-2 animate-pulse" />
                      <span className="w-1 bg-[#7C3AED] h-4 animate-pulse" />
                      <span className="w-1 bg-[#7C3AED] h-5 animate-pulse" />
                      <span className="w-1 bg-[#7C3AED] h-3 animate-pulse" />
                      <span className="w-1 bg-[#7C3AED] h-4 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-[13px] text-[#cbdbf5] leading-snug">
                    <span className="text-white font-medium">Prospect:</span> &ldquo;We&rsquo;re actually already locked into an enterprise call center contract with our current dialer through next year.&rdquo;
                  </div>
                  <div className="rounded-lg bg-[#ba1a1a]/20 border border-[#ba1a1a]/40 p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CircleAlert className="w-[18px] h-[18px] text-rose-400" />
                      <span className="font-bold text-xs text-rose-200">OBJECTION DETECTED: &lsquo;Already locked into an enterprise call center contract&rsquo;</span>
                    </div>
                    <span className="text-[11px] text-rose-300 font-mono">Matched in 48ms</span>
                  </div>
                  <div className="rounded-lg bg-[#7C3AED]/20 border border-[#630ed4]/50 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-[#eaddff] uppercase tracking-wider flex items-center gap-1">
                        <Bot className="w-3.5 h-3.5" /> Live Rebuttal Script
                      </span>
                      <span className="text-[11px] text-[#d2bbff]">Auto-Coached</span>
                    </div>
                    <p className="text-[13px] text-white font-medium italic">
                      &ldquo;Understand completely, most enterprise centers tell us that before testing our hybrid AI pilot. What if we handled just your tier-1 cold outbound at 70% lower cost?&rdquo;
                    </p>
                  </div>
                </div>

                {/* Cockpit feature badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded bg-white/5 flex items-center gap-2">
                    <Voicemail className="w-4 h-4 text-[#d2bbff]" />
                    <span>Dynamic VM Drop Trigger</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 flex items-center gap-2">
                    <MessageSquareText className="w-4 h-4 text-[#d2bbff]" />
                    <span>Multi-Channel Auto Follow-up</span>
                  </div>
                  <div className="p-2 rounded bg-white/5 flex items-center gap-2 col-span-2 sm:col-span-1">
                    <RefreshCw className="w-4 h-4 text-[#d2bbff]" />
                    <span>Bi-Directional CRM Sync</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-sm">
                <span className="text-[#cbdbf5]">Launch Velocity</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <CheckCircle2 className="w-[18px] h-[18px] text-emerald-400" />
                  Dialing in under 15 minutes guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK VERDICT ── */}
      <section className="w-full py-16 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e3e0f1] text-[#1b1a26] font-bold text-xs tracking-wider uppercase mb-2">
              BOTTOM LINE UP FRONT
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              The Short Answer &mdash; What Each Platform Is Built For
            </h2>
            <p className="text-base text-[#4a4455]">
              No fluff, no bias. Here is the architectural reality of choosing between Dialeads and CallTools in 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CallTools Verdict */}
            <div className="rounded-2xl bg-white border border-[#ccc3d8]/60 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-[#0b1c30]">CallTools is for:</h3>
                  <span className="px-3 py-1 rounded-full bg-[#dce9ff] text-[#5e5d6b] font-bold text-xs">PBX Architecture</span>
                </div>
                <div className="inline-block mb-4 px-3 py-1 rounded bg-[#e5eeff] text-[#0b1c30] font-bold text-[13px]">
                  Traditional Call Centers &amp; Enterprise Telephony
                </div>
                <p className="text-base text-[#4a4455] leading-relaxed">
                  Traditional call centers and high-volume outbound operations that need predictive dialing, inbound call routing, IVR systems, and enterprise telephony infrastructure. Strong for large teams doing transactional outbound with established workflows and a dedicated IT or operations team to manage the platform.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ccc3d8]/30 flex items-center gap-2 text-[#5e5d6b] text-sm">
                <HeadphonesIcon className="w-[18px] h-[18px]" />
                <span>Best suited for: 50+ agent inbound/outbound blended centers with full-time telecom IT.</span>
              </div>
            </div>
            {/* Dialeads Verdict */}
            <div className="rounded-2xl bg-white border-2 border-[#630ed4]/30 p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 bg-[#630ed4] text-white text-[11px] font-bold rounded-bl-xl uppercase tracking-wider">
                Modern SDR Choice
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-[#630ed4]">Dialeads is for:</h3>
                  <span className="px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs">Autonomous AI</span>
                </div>
                <div className="inline-block mb-4 px-3 py-1 rounded bg-[#630ed4]/10 text-[#630ed4] font-bold text-[13px]">
                  Autonomous AI Outreach &amp; Rapid Scalability
                </div>
                <p className="text-base text-[#0b1c30] leading-relaxed">
                  Modern sales teams, agencies, and businesses that want AI to handle first-touch outreach autonomously, coach reps through live objections in real time, and automate every follow-up touchpoint &mdash; without the complexity, cost, and setup time of a traditional call center platform.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ccc3d8]/30 flex items-center gap-2 text-[#630ed4] font-bold text-sm">
                <Rocket className="w-[18px] h-[18px]" />
                <span>Best suited for: SDRs, revenue teams, and agencies wanting instant ROI and AI scale.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="w-full py-24 bg-[#f8f9ff]" id="comparison-table">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              FEATURE BY FEATURE
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              Dialeads vs CallTools &mdash; Complete Feature Comparison
            </h2>
            <p className="text-base text-[#4a4455]">
              Detailed inspection across 24 technical, operational, and architectural capabilities.
            </p>
          </div>
          <div className="rounded-2xl border border-[#ccc3d8]/50 bg-white shadow-md overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#ccc3d8]/40 bg-[#eff4ff]/70">
                  <th className="py-4 px-6 font-bold text-xl text-[#0b1c30] w-1/2">Feature</th>
                  <th className="py-4 px-6 font-bold text-xl text-[#630ed4] w-1/4 bg-[#630ed4]/5 border-x border-[#630ed4]/10">
                    Dialeads
                  </th>
                  <th className="py-4 px-6 font-bold text-xl text-[#5e5d6b] w-1/4">CallTools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ccc3d8]/30 text-sm">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-[#eff4ff]/30 transition-colors ${row.keyDiff ? "bg-[#630ed4]/[0.02]" : ""} ${row.large ? "bg-[#630ed4]/10" : row.bold ? "bg-[#630ed4]/5" : ""}`}
                  >
                    <td className={`py-3 px-6 text-[#0b1c30] ${row.bold || row.keyDiff ? "font-bold" : "font-medium"} ${row.large ? "text-xl" : ""}`}>
                      <span className="flex items-center gap-2">
                        {row.feature}
                        {row.keyDiff && (
                          <span className="px-1.5 py-0.5 rounded bg-[#630ed4]/10 text-[#630ed4] text-[10px] font-bold">KEY AI DIFF</span>
                        )}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-6 bg-[#630ed4]/5 border-x border-[#630ed4]/10 ${row.large ? "text-xl" : ""} ${
                        row.dialeadsWin ? "font-bold text-[#630ed4]" : "text-[#5e5d6b]"
                      }`}
                    >
                      {row.dialeadsWin && row.dialeads !== "No" && row.dialeads !== "No (Outbound focus)" ? "✅ " : ""}
                      {!row.dialeadsWin ? "❌ " : ""}
                      {row.dialeads}
                    </td>
                    <td
                      className={`py-3 px-6 ${row.large ? "text-xl" : ""} ${
                        row.calltoolsWin ? "font-bold text-[#630ed4]" : row.calltools === "No" ? "font-semibold text-[#ba1a1a]" : "text-[#5e5d6b]"
                      }`}
                    >
                      {row.calltoolsWin ? "✅ " : ""}
                      {row.calltools === "No" ? "❌ " : ""}
                      {row.calltools}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE ── */}
      <section className="w-full py-24 bg-[#eff4ff]/50">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              WHERE THEY DIFFER MOST
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              The 6 Biggest Differences Between Dialeads and CallTools
            </h2>
            <p className="text-base text-[#4a4455]">
              A rigorous technical and operational audit of everyday outbound performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deepDives.map((d, i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#ccc3d8]/60 p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`font-bold text-[32px] leading-[38px] ${d.calltoolsWins ? "text-[#5e5d6b]/40" : "text-[#630ed4]/40"}`}>
                      {d.number}
                    </span>
                    <h3 className="font-bold text-xl text-[#0b1c30]">{d.title}</h3>
                  </div>
                  <div className="space-y-3 text-sm mb-4">
                    <div className={`p-3 rounded-xl border ${d.calltoolsWins ? "bg-[#dce9ff]/40 border-[#ccc3d8]/30" : "bg-[#eff4ff]/50 border-[#ccc3d8]/30"}`}>
                      <span className={`font-bold text-[13px] block mb-1 ${d.calltoolsWins ? "text-[#0b1c30]" : "text-[#5e5d6b]"}`}>CallTools:</span>
                      <p className="text-[#4a4455] leading-relaxed">{d.calltoolsText}</p>
                    </div>
                    <div className={`p-3 rounded-xl border ${d.calltoolsWins ? "bg-[#eff4ff]/50 border-[#ccc3d8]/30" : "bg-[#630ed4]/5 border-[#630ed4]/20"}`}>
                      <span className={`font-bold text-[13px] block mb-1 ${d.calltoolsWins ? "text-[#5e5d6b]" : "text-[#630ed4]"}`}>Dialeads:</span>
                      <p className={`leading-relaxed ${d.calltoolsWins ? "text-[#4a4455]" : "text-[#0b1c30]"}`}>{d.dialeadsText}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`p-3 rounded-lg font-bold text-[13px] flex items-center gap-2 ${
                    d.calltoolsWins ? "bg-[#e3e0f1]/60 text-[#1b1a26]" : "bg-[#eaddff]/40 text-[#630ed4]"
                  }`}
                >
                  {d.calltoolsWins ? (
                    <ShieldCheck className="w-[18px] h-[18px]" />
                  ) : d.badgeIcon === "verified" ? (
                    <BadgeCheck className="w-[18px] h-[18px]" />
                  ) : d.badgeIcon === "group" ? (
                    <Users className="w-[18px] h-[18px]" />
                  ) : d.badgeIcon === "trending" ? (
                    <TrendingUp className="w-[18px] h-[18px]" />
                  ) : d.badgeIcon === "savings" ? (
                    <PiggyBank className="w-[18px] h-[18px]" />
                  ) : (
                    <AudioWaveform className="w-[18px] h-[18px]" />
                  )}
                  <span>{d.badgeText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING COMPARISON ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              REAL COST COMPARISON
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              Dialeads vs CallTools &mdash; What You Actually Pay
            </h2>
            <p className="text-base text-[#4a4455]">
              A transparent breakdown of direct monthly software costs and hidden enterprise infrastructure fees.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 rounded-2xl border border-[#ccc3d8]/50 bg-white shadow-md overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ccc3d8]/40 bg-[#eff4ff]/60">
                    <th className="py-4 px-4 font-bold text-xl text-[#0b1c30]">Metric / Plan</th>
                    <th className="py-4 px-4 font-bold text-xl text-[#630ed4] bg-[#630ed4]/5 border-x border-[#630ed4]/10">Dialeads</th>
                    <th className="py-4 px-4 font-bold text-xl text-[#5e5d6b]">CallTools</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ccc3d8]/30 text-sm">
                  {pricingRows.map((row, i) => (
                    <tr key={i} className={row.highlight ? (row.large ? "bg-[#630ed4]/10" : "bg-[#630ed4]/5") : ""}>
                      <td className={`py-3 px-4 text-[#0b1c30] ${row.highlight ? "font-bold" : "font-medium"} ${row.large ? "text-xl" : ""}`}>
                        {row.metric}
                      </td>
                      <td className={`py-3 px-4 font-bold text-[#630ed4] bg-[#630ed4]/5 border-x border-[#630ed4]/10 ${row.large ? "text-xl" : ""}`}>
                        {row.dialeads}
                      </td>
                      <td className={`py-3 px-4 font-semibold ${row.calltoolsError ? "text-[#ba1a1a]" : "text-[#5e5d6b]"} ${row.large ? "text-xl" : ""}`}>
                        {row.calltools}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Annual Run-Rate Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white border-2 border-[#630ed4]/30 p-8 shadow-lg relative">
              <div className="text-[#5e5d6b] font-bold text-xs uppercase tracking-wider mb-2">Team Economics</div>
              <h3 className="font-bold text-2xl text-[#0b1c30] mb-6">10-Person Team Annual Run Rate</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-[#eff4ff] border border-[#ccc3d8]/40">
                  <span className="text-sm text-[#5e5d6b] block mb-1 font-medium">CallTools (Mid-Tier 10 Seats)</span>
                  <span className="font-bold text-2xl text-[#5e5d6b] line-through">$18,000&ndash;$30,000/year</span>
                  <span className="text-xs text-[#5e5d6b] block mt-1">+ hidden setup fees &amp; usage surcharges</span>
                </div>
                <div className="p-4 rounded-xl bg-[#630ed4]/10 border border-[#630ed4]/30">
                  <span className="text-sm text-[#630ed4] block mb-1 font-medium">Dialeads Pro (10 Seats)</span>
                  <span className="font-bold text-[40px] leading-[44px] text-[#630ed4]">$5,880/year</span>
                  <span className="text-xs text-[#630ed4] block mt-1">Flat rate. Full AI voice agents + real-time copilot included.</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-[13px] uppercase tracking-wide">Guaranteed Capital Optimization</span>
                </div>
                <p className="font-bold text-xl text-emerald-900">
                  Annual saving with Dialeads: $6,120 to $24,120
                </p>
              </div>
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#630ed4] text-white font-bold text-sm shadow-md hover:bg-[#7C3AED] transition-all"
              >
                Switch Your Team Today
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE EACH ── */}
      <section className="w-full py-24 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e3e0f1] text-[#1b1a26] font-bold text-xs tracking-wider uppercase mb-2">
              HONEST RECOMMENDATION
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              When CallTools Makes Sense &mdash; And When Dialeads Is the Better Choice
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Choose CallTools */}
            <div className="rounded-2xl bg-white border border-[#ccc3d8]/60 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#dce9ff] flex items-center justify-center text-[#5e5d6b]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-[#0b1c30]">Choose CallTools if:</h3>
              </div>
              <ul className="space-y-4 text-base text-[#4a4455]">
                {chooseCalltools.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#5e5d6b] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Choose Dialeads */}
            <div className="rounded-2xl bg-white border-2 border-[#630ed4]/40 p-8 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#630ed4] flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-[#630ed4]">Choose Dialeads if:</h3>
              </div>
              <ul className="space-y-4 text-base text-[#0b1c30]">
                {chooseDialeads.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#630ed4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASE COMPARISON ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              REAL WORLD SCENARIOS
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              Dialeads vs CallTools for Specific Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#ccc3d8]/60 p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold ${
                        uc.winner === "calltools" ? "bg-[#5e5d6b]/10 text-[#5e5d6b]" : "bg-[#630ed4]/10 text-[#630ed4]"
                      }`}
                    >
                      {uc.number}
                    </div>
                    <h3 className="font-bold text-xl text-[#0b1c30]">{uc.title}</h3>
                  </div>
                  <div className="space-y-3 mb-4 text-sm">
                    <p>
                      <strong className="text-[#5e5d6b]">CallTools:</strong> {uc.calltoolsText}
                    </p>
                    <p>
                      <strong className="text-[#630ed4]">Dialeads:</strong> {uc.dialeadsText}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#ccc3d8]/30 flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-white font-bold text-[11px] uppercase ${
                      uc.winner === "calltools" ? "bg-[#5e5d6b]" : "bg-[#630ed4]"
                    }`}
                  >
                    Winner
                  </span>
                  <span className="font-bold text-[#0b1c30] text-sm">{uc.winnerText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIGRATION GUIDE ── */}
      <section className="w-full py-24 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              SWITCHING FROM CALLTOOLS
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              Moving From CallTools to Dialeads &mdash; What to Expect
            </h2>
            <p className="text-base text-[#4a4455]">
              Zero downtime. Zero data loss. Rapid 7-step onboarding roadmap.
            </p>
          </div>
          <div className="relative border-l-2 border-[#630ed4]/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8 max-w-4xl mx-auto">
            {migrationSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#630ed4] text-white flex items-center justify-center font-bold text-xs shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className={`rounded-xl border p-6 shadow-sm ${
                    step.highlight
                      ? "bg-[#630ed4]/10 border-2 border-[#630ed4]/40"
                      : "bg-white border-[#ccc3d8]/50"
                  }`}
                >
                  <h3 className={`font-bold text-xl mb-1 ${step.highlight ? "text-[#630ed4]" : "text-[#0b1c30]"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-base ${step.highlight ? "text-[#0b1c30]" : "text-[#4a4455]"}`}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e3e0f1] text-[#1b1a26] font-bold text-xs tracking-wider uppercase mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              Frequently Asked Questions About Dialeads vs CallTools
            </h2>
            <p className="text-base text-[#4a4455]">
              Clear answers about migration, technical capabilities, and architectural differences.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[#ccc3d8]/50 bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-bold text-xl text-[#0b1c30] pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7b7487] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-[#4a4455] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full py-24 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-xs tracking-wider uppercase mb-2">
              FROM TEAMS WHO SWITCHED
            </span>
            <h2 className="font-bold text-[32px] leading-[38px] md:text-[40px] md:leading-[44px] text-[#0b1c30] mb-2">
              What Teams Say After Switching From CallTools to Dialeads
            </h2>
            <p className="text-base text-[#4a4455]">
              Real operators reporting actual economics, ramp speeds, and conversion uplifts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white border border-[#ccc3d8]/50 p-8 shadow-sm flex flex-col justify-between">
                <p className="text-base text-[#0b1c30] italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-[#ccc3d8]/30">
                  <div className="w-8 h-8 rounded-full bg-[#630ed4]/20 text-[#630ed4] flex items-center justify-center font-bold text-xs">
                    {t.initials}
                  </div>
                  <span className="font-bold text-sm text-[#0b1c30]">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="w-full py-32 bg-gradient-to-b from-[#f8f9ff] to-[#dce9ff]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12] pointer-events-none" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#630ed4] text-white font-bold text-xs tracking-wider uppercase mb-4 shadow-sm">
              <BadgeCheck className="w-4 h-4" />
              READY TO SWITCH?
            </span>
            <h2 className="font-bold text-[28px] leading-[32px] md:text-[56px] md:leading-[60px] text-[#0b1c30] tracking-tight mb-4">
              Get More Than CallTools Offers &mdash; At a Fraction of the Cost
            </h2>
            <p className="text-lg leading-7 text-[#4a4455] mb-8">
              AI voice agents, live objection rebuttals, dynamic voicemail drops, automated follow-up, and full CRM sync &mdash; all in one platform. Up and running in 15 minutes. No contract. No IT required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#630ed4] text-white font-bold text-sm shadow-lg hover:bg-[#7C3AED] transition-all hover:scale-[1.02]"
              >
                Start Free 14-Day Trial
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-white border border-[#ccc3d8]/70 text-[#0b1c30] font-bold text-sm hover:bg-[#eff4ff] transition-all"
              >
                Book a Live Demo
                <Calendar className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <p className="text-sm text-[#5e5d6b]">
              No credit card &middot; No annual contract &middot; Cancel anytime &middot; Setup in 15 minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
