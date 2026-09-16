"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  BarChart3,
  Check,
  X,
  AlertCircle,
  ArrowRight,
  Upload,
  Download,
  Mic,
  Settings,
  Link2,
  Zap,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const comparisonRows = [
  { feature: "Ringless voicemail drop", dialeads: "Yes", dialStatus: "green", dropCowboy: "Yes", dropStatus: "green" },
  { feature: "AI voice agent — live autonomous calls", dialeads: "Yes (Sub-500ms)", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Power dialer with local presence CID", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Live objection rebuttal copilot", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Automatic SMS follow-up", dialeads: "Yes (Outcome-triggered)", dialStatus: "green", dropCowboy: "Basic (Manual broadcast)", dropStatus: "amber" },
  { feature: "SMS broadcasting", dialeads: "Yes", dialStatus: "green", dropCowboy: "Yes", dropStatus: "green" },
  { feature: "Automatic email follow-up", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "WhatsApp follow-up", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "CRM sync — HubSpot, Salesforce, Close", dialeads: "Native 2-Way", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "GoHighLevel integration", dialeads: "Native Direct", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Zapier integration", dialeads: "Full (Instant Triggers)", dialStatus: "green", dropCowboy: "Limited", dropStatus: "amber" },
  { feature: "Call recordings and AI transcripts", dialeads: "Real-Time Sync", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "1-click call dispositions", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Unified inbox — calls, SMS, notes", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Speed-to-lead calling via webhook", dialeads: "Under 60 Seconds", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "AI dynamic personalized voicemail", dialeads: "Yes", dialStatus: "green", dropCowboy: "No (Generic MP3 only)", dropStatus: "red" },
  { feature: "National DNC auto-scrub", dialeads: "Auto (On every dial)", dialStatus: "green", dropCowboy: "Manual upload required", dropStatus: "amber" },
  { feature: "Time-zone calling window enforcement", dialeads: "Auto (8am–9pm strict)", dialStatus: "green", dropCowboy: "Manual scheduling", dropStatus: "amber" },
  { feature: "STIR/SHAKEN A-attestation", dialeads: "Yes (Carrier-grade)", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "A2P 10DLC SMS registration", dialeads: "Guided in 5 minutes", dialStatus: "green", dropCowboy: "Manual carrier steps", dropStatus: "amber" },
  { feature: "Local presence caller ID matching", dialeads: "Yes", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
  { feature: "Team management and rep reporting", dialeads: "Yes (Full dashboard)", dialStatus: "green", dropCowboy: "Basic export", dropStatus: "amber" },
  { feature: "White-label for agencies", dialeads: "Enterprise Custom Domain", dialStatus: "green", dropCowboy: "No", dropStatus: "red" },
];

const differences = [
  {
    num: "01",
    title: "Voicemail Personalization — Static vs AI Dynamic",
    dropCowboy: "Drops the same pre-recorded audio file to every contact on your list. No personalization. Every prospect hears the identical generic message — same greeting, same content, same call to action. Callback rates on generic drops average under 2%.",
    dialeads: "AI dynamic voicemail drops synthesize a unique personalized message for each contact — inserting their name, company, the specific product or service they enquired about, and a tailored call to action. Every voicemail sounds individually recorded. Callback rates average 3x higher than generic static drops.",
  },
  {
    num: "02",
    title: "SMS Follow-Up — Basic Broadcasting vs Intelligent Automation",
    dropCowboy: "Offers basic SMS broadcasting — send the same message to a list of contacts. No automation triggers based on call outcomes. No personalization beyond basic merge tags. No multi-touch sequencing over multiple days.",
    dialeads: "Full automated SMS follow-up sequences triggered by specific call outcomes. Voicemail dropped → SMS fires in 10 seconds with personalized content. No answer → day 2 SMS queued automatically. Interested but busy → callback scheduled and reminder SMS fires automatically. Every touchpoint personalized and triggered without manual action.",
  },
  {
    num: "03",
    title: "Live Calling — None vs Full Power Dialer Plus AI Agent",
    dropCowboy: "No live calling capability. Drop Cowboy is exclusively a voicemail drop and SMS broadcasting tool. For any live outbound calling you need a completely separate platform — separate subscription, separate login, separate data management, separate reporting.",
    dialeads: "Full power dialer with local presence caller ID plus AI voice agent for autonomous calls — built into the same platform as voicemail drops. One login. One dashboard. One subscription covering every outbound activity your team needs.",
  },
  {
    num: "04",
    title: "CRM Integration — None vs Native Bi-Directional Sync",
    dropCowboy: "No native CRM integration. Basic Zapier support allows triggering simple actions when a voicemail is delivered — but no automatic deal stage updates, no call recording sync, no AI transcript delivery, no disposition-triggered pipeline movements.",
    dialeads: "Native two-way sync with HubSpot, Salesforce, Close CRM, and GoHighLevel. Every call outcome, voicemail drop receipt, SMS reply, disposition, and AI transcript writes automatically to the right CRM record in real time. Zero manual data entry. Zero missed updates.",
  },
  {
    num: "05",
    title: "Compliance Infrastructure — Manual vs Automatic",
    dropCowboy: "DNC scrubbing requires manual list upload — you must download the DNC list, cross-reference it yourself, and remove numbers before uploading your campaign. Time-zone enforcement requires manual scheduling. No STIR/SHAKEN attestation. Significant manual compliance burden at scale.",
    dialeads: "Every compliance function runs automatically on every dial. National DNC scrub before every drop. Time-zone window enforcement per contact local timezone. STIR/SHAKEN A-level attestation on all caller IDs. Instant SMS opt-out suppression. Full consent timestamp audit trail. Zero manual compliance management.",
  },
];

const faqItems = [
  {
    question: "Does Dialeads do ringless voicemail drops like Drop Cowboy?",
    answer: "Yes. Dialeads drops pre-recorded voicemails directly to voicemail without ringing the phone — the same core function as Drop Cowboy. The difference is that Dialeads adds AI dynamic personalization, automated follow-up sequences, live calling, and native CRM sync around every drop.",
  },
  {
    question: "Is Drop Cowboy cheaper than Dialeads?",
    answer: "At very low volumes — under 500 drops per month — Drop Cowboy’s pay-per-drop model may appear cheaper. At any meaningful scale, Dialeads is significantly cheaper when you include the cost of separate tools needed to match Dialeads functionality. A full equivalent stack using Drop Cowboy costs $299–$679 per month vs $49 for Dialeads Pro.",
  },
  {
    question: "Can I import my Drop Cowboy contact lists into Dialeads?",
    answer: "Yes. Export your contacts from Drop Cowboy as CSV and import directly into Dialeads. Automatic phone number validation, DNC scrubbing, and local caller ID matching runs on import. Ready to dial in under 2 minutes.",
  },
  {
    question: "Does Dialeads have SMS broadcasting like Drop Cowboy?",
    answer: "Yes — and more. Dialeads sends personalized SMS messages triggered automatically by call outcomes, not just manual broadcasts. Every SMS is personalized with dynamic variables and sequenced over multiple days automatically.",
  },
  {
    question: "How does Dialeads handle DNC compliance compared to Drop Cowboy?",
    answer: "Drop Cowboy requires you to manually upload and manage your own DNC suppression list. Dialeads automatically checks every phone number against the National DNC Registry before every dial and every drop — with zero manual management required.",
  },
  {
    question: "How long does it take to switch from Drop Cowboy to Dialeads?",
    answer: "Under 30 minutes. Export your contact lists from Drop Cowboy, import into Dialeads, upload your voicemail recording, connect your CRM, and launch your first campaign. Your 14-day free Pro trial starts immediately — no credit card required.",
  },
];

const testimonials = [
  {
    quote: "“Drop Cowboy drops the voicemail and that is it. I still had to manually send follow-up texts and log everything in my CRM. Dialeads does all of that automatically. I went from spending 3 hours on follow-up admin every day to spending 20 minutes reviewing what Dialeads already handled.”",
    name: "Real Estate Wholesaler",
    role: "Motivated Seller Outreach",
  },
  {
    quote: "“The SMS from Drop Cowboy was just a broadcast tool — same message to everyone with no personalization and no automation. Dialeads fires personalized SMS within 10 seconds of every voicemail drop and sequences follow-ups automatically for 7 days. My response rate tripled.”",
    name: "Independent Insurance Agent",
    role: "Life & Health Producer",
  },
  {
    quote: "“I was using Drop Cowboy for drops and a separate power dialer for live calls. Two subscriptions, two logins, two sets of data that never talked to each other. Dialeads does both in one platform and syncs everything to HubSpot automatically. Should have switched a year ago.”",
    name: "SDR Manager, B2B SaaS Company",
    role: "Outbound Sales Team",
  },
  {
    quote: "“DNC compliance with Drop Cowboy was fully manual — I had to manage my own suppression lists. With Dialeads it is completely automatic. Every number scrubbed before every drop. As someone running high-volume campaigns, the compliance peace of mind alone is worth the switch.”",
    name: "Owner, Lead Generation Agency",
    role: "Multi-Client Outbound",
  },
];

const useCases = [
  {
    title: "Real Estate Wholesalers",
    winner: "Dialeads",
    dropCowboy: "Drop voicemails on absentee owner lists. No live calling follow-up. No automatic SMS after the drop. Manual DNC management. No CRM sync for tracking motivated sellers.",
    dialeads: "Drop personalized voicemails on every missed call. Automatic SMS fires within 10 seconds. AI voice agent makes live calls on the list simultaneously. Every interested seller logged in CRM automatically. DNC scrubbed before every dial.",
  },
  {
    title: "Insurance Agents",
    winner: "Dialeads",
    dropCowboy: "Drop voicemails on lead lists. Basic SMS broadcasting. No speed-to-lead automation. No multi-touch follow-up sequence. Manual compliance management.",
    dialeads: "Speed-to-lead calling within 60 seconds of new lead arrival. Dynamic personalized voicemail on every missed call. 8-touch automated follow-up sequence. Full TCPA compliance automatic. CRM sync on every outcome.",
  },
  {
    title: "B2B Sales Teams",
    winner: "Dialeads",
    dropCowboy: "Drop voicemails on prospect lists. No live calling capability. No CRM sync. No objection rebuttal tools. No rep performance reporting.",
    dialeads: "Power dialer with AI objection rebuttals for live calls. Voicemail drop on every missed call. Automated SMS follow-up. Full HubSpot and Salesforce sync. Rep performance dashboard for managers.",
  },
  {
    title: "One-Time Campaign — Small Volume",
    winner: "Tie",
    dropCowboy: "Simple pay-per-drop with no monthly commitment. Low barrier to entry for a single campaign under 500 drops.",
    dialeads: "14-day free Pro trial covers any one-time campaign with full platform access. No credit card required. Both work for low-volume one-time campaigns.",
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Export Your Contact Lists",
    body: "Download your existing contact lists and campaign data from Drop Cowboy as CSV files. All contacts and phone numbers export cleanly with no data loss.",
    footer: "CSV format",
    footerColor: "text-slate-400",
  },
  {
    step: "02",
    title: "Import Into Dialeads",
    body: "Upload your CSV directly into Dialeads. Phone numbers auto-validated, DNC-scrubbed automatically, duplicates removed, local caller IDs matched to every contact. Ready to dial in under 2 minutes.",
    footer: "Under 2 min",
    footerColor: "text-[#7C3AED]",
  },
  {
    step: "03",
    title: "Upload Your Voicemail Recording",
    body: "Upload your existing Drop Cowboy voicemail recording directly into Dialeads. Or record a new one inside the platform. Optionally enable AI dynamic voicemail drops for personalized messages per contact — a major upgrade from Drop Cowboy’s static drops.",
    footer: "Audio / AI",
    footerColor: "text-slate-400",
  },
  {
    step: "04",
    title: "Set Up Your Follow-Up Sequence",
    body: "Configure your automated SMS and email follow-up sequence — triggered automatically after every voicemail drop. This is functionality Drop Cowboy simply does not offer. Set it up once and it runs automatically on every future campaign.",
    footer: "Multi-Touch",
    footerColor: "text-[#7C3AED]",
  },
  {
    step: "05",
    title: "Connect Your CRM and Launch",
    body: "Connect HubSpot, Salesforce, GoHighLevel, or Close CRM in one click. Launch your first campaign. Same voicemail drop capability as Drop Cowboy — plus live calling, intelligent SMS sequences, CRM sync, and automatic TCPA compliance running alongside it.",
    footer: "1-Click Native Sync",
    footerColor: "text-emerald-600",
  },
];

const chooseDropCowboy = [
  "You only need voicemail drops and basic SMS — nothing more",
  "You are running a one-time campaign with no ongoing outbound infrastructure needs",
  "You send fewer than 500 drops per month and prefer pay-per-use over a monthly subscription",
  "You already have a separate dialer and CRM you are satisfied managing independently",
  "You do not need live calling, automated follow-up sequences, or CRM sync",
];

const chooseDialeads = [
  "You need voicemail drops as part of a complete outbound system with live calling and follow-up",
  "You want every call outcome, voicemail, and SMS to sync to your CRM automatically",
  "You need TCPA compliance running automatically — not manually managed per campaign",
  "You are tired of paying for and managing separate tools for voicemail, SMS, calling, and CRM",
  "You want AI voice agents handling first-touch calls autonomously around the clock",
  "You need white-label options for running client campaigns as an agency",
];

const dropCowboyPricingMissing = [
  "No live calling included",
  "No CRM sync included",
  "No automated follow-up sequences included",
  "No compliance tools beyond basic DNC upload",
];

const dropCowboyBreakdown = [
  { label: "Drop Cowboy voicemail drops:", cost: "~$100–$180" },
  { label: "Separate SMS platform needed:", cost: "~$50–$150/mo" },
  { label: "Separate dialer needed:", cost: "~$99–$299/mo" },
  { label: "Separate CRM integration:", cost: "~$50/mo" },
];

const dialeadsPricingIncludes = [
  "Unlimited calling + power dialer",
  "Unlimited ringless voicemail drops",
  "AI voice agent autonomous calling",
  "Automated 7-day SMS & email follow-ups",
  "Full native CRM 2-way sync (HubSpot, GHL, Salesforce)",
  "Automated TCPA compliance on every single dial",
];

/* ─── Component ────────────────────────────────────────── */

export default function DialeadsVsDropCowboyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8f9ff] text-slate-800 antialiased min-h-screen selection:bg-[#8b5cf6] selection:text-white">
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/compare" className="hover:text-slate-800">
            Comparisons
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 font-medium">Dialeads vs Drop Cowboy</span>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe]/80 text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            Platform Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 font-extrabold tracking-tight mb-6 leading-[1.12]">
            Dialeads vs Drop Cowboy &mdash;{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#8b5cf6] to-indigo-600">
              Beyond the Voicemail Drop
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            Drop Cowboy delivers ringless voicemails and basic SMS. Dialeads
            delivers ringless voicemails, live AI calling, power dialing,
            automated multi-touch follow-up, full CRM sync, and carrier-grade
            TCPA compliance &mdash; all in one platform. Here is the complete
            breakdown.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-bold text-base shadow-lg shadow-[#8b5cf6]/25 transition-all"
            >
              Start Dialeads Free
            </Link>
            <a
              href="#comparison-table"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-base transition-all"
            >
              See Full Feature List
            </a>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            No credit card &middot; 14-day full Pro access &middot; Cancel anytime
          </p>

          {/* VISUAL COMPARISON PREVIEW */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {/* Drop Cowboy Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Traditional Tool
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">Drop Cowboy</h3>
                </div>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-medium">
                  Single Purpose
                </span>
              </div>
              <div className="mt-4 space-y-2.5 text-sm text-slate-600">
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-slate-700">Voicemail Drops:</span>
                  <span className="text-slate-500">Static audio file only</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-slate-700">Live Calling:</span>
                  <span className="text-rose-500 font-semibold flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> None (Requires separate dialer)
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-slate-700">Automated Follow-Up:</span>
                  <span className="text-rose-500 font-semibold flex items-center gap-1">
                    <X className="w-3.5 h-3.5" /> Basic broadcast only
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-medium text-slate-700">CRM Sync:</span>
                  <span className="text-slate-500">Limited Zapier (No native sync)</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Callback Rate Average:</span>
                <span className="font-bold text-slate-700 text-sm">Under 2.0%</span>
              </div>
            </div>

            {/* Dialeads Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-[#8b5cf6]/40 shadow-xl shadow-[#8b5cf6]/10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#8b5cf6]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
                <div>
                  <span className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wider">
                    All-In-One Platform
                  </span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Dialeads AI
                    <span className="text-[10px] bg-[#7C3AED] text-white px-2 py-0.5 rounded font-extrabold uppercase">
                      Full Engine
                    </span>
                  </h3>
                </div>
                <span className="text-xs bg-[#4c1d95]/80 text-[#c4b5fd] border border-[#8b5cf6]/30 px-2.5 py-1 rounded font-medium">
                  Unified Matrix
                </span>
              </div>
              <div className="mt-4 space-y-2.5 text-sm relative z-10">
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-between">
                  <span className="text-slate-200">Dynamic Audio:</span>
                  <span className="text-[#c4b5fd] font-semibold">AI personalized per prospect</span>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-between">
                  <span className="text-slate-200">Live Calling:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Power Dialer + Autonomous AI Agent
                  </span>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-between">
                  <span className="text-slate-200">Follow-Up Drips:</span>
                  <span className="text-[#c4b5fd] font-semibold">Instant SMS + 7-Day Auto Cadence</span>
                </div>
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-center justify-between">
                  <span className="text-slate-200">CRM Integration:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Native 2-Way Sync (HubSpot/SF/GHL)
                  </span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <span>Callback Rate Average:</span>
                <span className="font-bold text-emerald-400 text-sm">6.5%+ (3x Increase)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUICK VERDICT */}
      <section className="py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
              Bottom Line Up Front
            </div>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              The Short Answer &mdash; What Each Platform Is Actually Built For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Drop Cowboy is for */}
            <div className="p-8 rounded-2xl bg-[#eff4ff] border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    DC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Drop Cowboy is for:</h3>
                    <span className="text-xs text-blue-700 font-medium">
                      Utility Voicemail &amp; SMS Broadcast
                    </span>
                  </div>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  Teams that need ringless voicemail drops and basic SMS
                  broadcasting to contact lists &mdash; without live calling,
                  advanced CRM integration, or automated multi-touch follow-up
                  sequences. Simple interface, pay-per-use pricing, low barrier
                  to entry.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center gap-2 text-xs font-semibold text-blue-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Best for low-volume one-off broadcasts with no CRM sync
                requirements
              </div>
            </div>

            {/* Dialeads is for */}
            <div className="p-8 rounded-2xl bg-[#f5f3ff] border border-[#ddd6fe] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#8b5cf6]/20">
                    DL
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Dialeads is for:</h3>
                    <span className="text-xs text-[#6d28d9] font-semibold">
                      Comprehensive Outbound Revenue Engine
                    </span>
                  </div>
                </div>
                <p className="text-slate-700 text-base leading-relaxed">
                  Sales teams, agencies, and business owners who need voicemail
                  drops as part of a complete outbound system &mdash; with live
                  AI calling, power dialing, real-time objection rebuttals,
                  automated follow-up, and CRM sync all working together in one
                  platform.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ddd6fe] flex items-center gap-2 text-xs font-bold text-[#5b21b6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                Best for teams scaling callbacks, appointments, and qualified
                pipeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FULL COMPARISON TABLE */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
            Feature by Feature
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Dialeads vs Drop Cowboy &mdash; Complete Feature Comparison
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            An exhaustive side-by-side audit of outbound capabilities, compliance
            automation, and CRM intelligence.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 sm:p-5 text-sm font-bold text-slate-700 w-1/2">
                  Feature
                </th>
                <th className="p-4 sm:p-5 text-sm font-bold text-[#6d28d9] w-1/4 bg-[#f5f3ff]/50">
                  Dialeads
                  <span className="ml-2 text-[10px] bg-[#7C3AED] text-white px-2 py-0.5 rounded font-extrabold uppercase">
                    All-In-One
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-sm font-bold text-slate-600 w-1/4">
                  Drop Cowboy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium text-slate-800">{row.feature}</td>
                  <td className="p-4 bg-[#f5f3ff]/30">
                    <span
                      className={`font-semibold ${
                        row.dialStatus === "green"
                          ? "text-emerald-600"
                          : row.dialStatus === "amber"
                          ? "text-amber-600"
                          : "text-slate-400"
                      }`}
                    >
                      {row.dialStatus === "green" && (
                        <>{"✅"} </>
                      )}
                      {row.dialeads}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-${row.dropStatus === "green" ? "semibold" : "medium"} ${
                        row.dropStatus === "green"
                          ? "text-emerald-600"
                          : row.dropStatus === "amber"
                          ? "text-amber-600"
                          : "text-slate-400"
                      }`}
                    >
                      {row.dropStatus === "green" && "✅ "}
                      {row.dropStatus === "red" && "❌ "}
                      {row.dropStatus === "amber" && "✅ "}
                      {row.dropCowboy}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50/90 font-bold">
                <td className="p-4 text-slate-900">Starting price</td>
                <td className="p-4 bg-[#ede9fe]/50 text-[#6d28d9] text-base">
                  $29/mo (All-inclusive)
                </td>
                <td className="p-4 text-slate-700 text-base">Pay-per-drop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4 — DEEP DIVE COMPARISON */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
              Where They Differ Most
            </div>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              The 5 Biggest Differences Between Dialeads and Drop Cowboy
            </h2>
          </div>

          <div className="space-y-12">
            {differences.map((diff) => (
              <div
                key={diff.num}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#7C3AED] font-extrabold text-2xl">
                    {diff.num}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {diff.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Drop Cowboy
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {diff.dropCowboy}
                    </p>
                  </div>
                  <div className="bg-[#f5f3ff]/60 p-5 rounded-xl border border-[#ddd6fe]">
                    <span className="text-xs font-bold text-[#6d28d9] uppercase tracking-wider block mb-2">
                      Dialeads Fix
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {diff.dialeads}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRICING COMPARISON */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
            Real Cost at Scale
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Dialeads vs Drop Cowboy &mdash; What You Actually Pay
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Drop Cowboy Pricing Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Metered Tool
              </span>
              <h3 className="text-2xl font-bold text-slate-800 mt-1 mb-4">
                Drop Cowboy Pricing
              </h3>

              <div className="p-4 bg-slate-50 rounded-xl mb-6">
                <span className="text-2xl font-extrabold text-slate-900">
                  $0.05 &ndash; $0.09
                </span>
                <span className="text-xs text-slate-500 block mt-1 font-medium">
                  Pay per drop approximately &middot; SMS sold separately
                </span>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-600 mb-6">
                {dropCowboyPricingMissing.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-2">
                  At 2,000 drops per month:
                </span>
                <div className="text-xs text-slate-600 space-y-1.5">
                  {dropCowboyBreakdown.map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold text-slate-800">
                        {item.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  Total to match Dialeads:
                </span>
                <span className="text-xl font-extrabold text-rose-600">
                  $299&ndash;$679/mo
                </span>
              </div>
            </div>
          </div>

          {/* Dialeads Pro Pricing Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#f5f3ff] to-white border-2 border-[#8b5cf6] shadow-xl shadow-[#8b5cf6]/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-[11px] bg-[#7C3AED] text-white font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                All-Inclusive
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9]">
                Dialeads Pro
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
                One Flat Rate
              </h3>

              <div className="p-4 bg-white rounded-xl border border-[#ddd6fe] mb-6 shadow-sm">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#6d28d9]">
                    $49
                  </span>
                  <span className="text-slate-500 font-semibold">/month</span>
                </div>
                <span className="text-xs text-[#7C3AED] font-medium block mt-1">
                  Dialeads covers all of the above for $49/mo on Pro.
                </span>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                {dialeadsPricingIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">
                      <Check className="w-4 h-4" />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: `<strong>${item.split(" ")[0]} ${item.split(" ")[1]}</strong> ${item.split(" ").slice(2).join(" ")}` }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#ddd6fe]">
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6d28d9] text-white font-bold text-base shadow-md shadow-[#8b5cf6]/30 transition-all text-center"
              >
                Start 14-Day Free Pro Trial <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <span className="block text-center text-xs text-slate-500 mt-2 font-medium">
                No credit card required &middot; Instant access
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHEN TO CHOOSE EACH */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
              Honest Recommendation
            </div>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              When Drop Cowboy Makes Sense &mdash; And When Dialeads Is the
              Better Choice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Choose Drop Cowboy if */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold">
                  <X className="w-4 h-4" />
                </span>
                Choose Drop Cowboy if:
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                {chooseDropCowboy.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Dialeads if */}
            <div className="p-8 rounded-2xl bg-[#f5f3ff]/50 border border-[#ddd6fe] shadow-sm">
              <h3 className="text-xl font-bold text-[#4c1d95] mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center text-sm font-bold">
                  <Check className="w-4 h-4" />
                </span>
                Choose Dialeads if:
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                {chooseDialeads.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#7C3AED] font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — MIGRATION FROM DROP COWBOY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
            Switching From Drop Cowboy
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Moving From Drop Cowboy to Dialeads Takes Under 30 Minutes
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Follow this simple 5-step roadmap to migrate campaigns without
            missing a single dial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {migrationSteps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider block mb-2">
                  Step {s.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold">
                <span className={s.footerColor}>{s.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — USE CASE COMPARISON */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
              Real World Scenarios
            </div>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              Which Platform Wins for Your Specific Use Case
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {uc.title}
                    </h3>
                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                        uc.winner === "Tie"
                          ? "bg-slate-200 text-slate-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      Winner: {uc.winner}
                    </span>
                  </div>
                  <div className="space-y-4 text-sm mt-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-800 block mb-1">
                        Drop Cowboy:
                      </strong>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {uc.dropCowboy}
                      </p>
                    </div>
                    <div className="p-3 bg-[#f5f3ff]/70 rounded-lg border border-[#ddd6fe]">
                      <strong className="text-[#4c1d95] block mb-1">
                        Dialeads:
                      </strong>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {uc.dialeads}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Frequently Asked Questions About Dialeads vs Drop Cowboy
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  Q{i + 1}: {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS (NO STARS) */}
      <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-bold uppercase tracking-wider mb-3">
              From Teams Who Switched
            </div>
            <h2 className="text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
              What Teams Say After Switching From Drop Cowboy to Dialeads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block">
                    &mdash; {t.name}
                  </span>
                  <span className="text-[11px] text-slate-500">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — BOTTOM CTA */}
      <section id="trial" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-[#c4b5fd] text-xs font-bold uppercase tracking-wider mb-6 border border-slate-700">
              Ready to Switch?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Get Everything Drop Cowboy Offers &mdash;{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-indigo-300">
                Plus Everything It Doesn&apos;t
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 font-normal leading-relaxed">
              Voicemail drops, AI live calling, intelligent SMS sequences, CRM
              sync, and automatic TCPA compliance &mdash; all in one platform
              for $49 per month. Import your Drop Cowboy lists and launch your
              first Dialeads campaign in under 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#8b5cf6] text-white font-bold text-base shadow-xl shadow-[#7C3AED]/30 transition-all"
              >
                Start Free 14-Day Trial
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-base transition-all"
              >
                Book a Live Demo
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              No credit card &middot; Import your existing lists &middot; Cancel
              anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
