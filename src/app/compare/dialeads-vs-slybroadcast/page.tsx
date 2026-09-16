"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  BarChart3,
  Check,
  X,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const comparisonRows = [
  { feature: "Ringless voicemail drop", dialeads: "Yes", dialStatus: "green", sly: "Yes", slyStatus: "green" },
  { feature: "AI voice agent — live autonomous calls", dialeads: "Yes (Sub-500ms)", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Power dialer with local presence CID", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Live objection rebuttal copilot", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Automatic SMS follow-up", dialeads: "Yes (Outcome-triggered)", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Automatic email follow-up", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "WhatsApp follow-up", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "CRM sync — HubSpot, Salesforce, Close", dialeads: "Native 2-Way", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "GoHighLevel integration", dialeads: "Native Direct", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Zapier integration", dialeads: "Full (Instant Triggers)", dialStatus: "green", sly: "Limited", slyStatus: "amber" },
  { feature: "Call recordings and AI transcripts", dialeads: "Real-Time Sync", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "1-click call dispositions", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Unified inbox — calls, SMS, notes", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Speed-to-lead calling via webhook", dialeads: "Under 60 Seconds", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "National DNC auto-scrub", dialeads: "Auto (On every dial)", dialStatus: "green", sly: "Manual upload required", slyStatus: "amber" },
  { feature: "Time-zone calling window enforcement", dialeads: "Auto (8am–9pm strict)", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "STIR/SHAKEN A-attestation", dialeads: "Yes (Carrier-grade)", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "A2P 10DLC SMS registration", dialeads: "Guided in 5 minutes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "Local presence caller ID matching", dialeads: "Yes", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "AI dynamic personalized voicemail", dialeads: "Yes", dialStatus: "green", sly: "No (Generic MP3 only)", slyStatus: "red" },
  { feature: "Team management and rep reporting", dialeads: "Yes (Full dashboard)", dialStatus: "green", sly: "No", slyStatus: "red" },
  { feature: "White-label for agencies", dialeads: "Enterprise Custom Domain", dialStatus: "green", sly: "No", slyStatus: "red" },
];

const differences = [
  {
    num: "01",
    title: "Voicemail Drop Quality — Generic vs AI Dynamic",
    sly: "Slybroadcast uploads a single static WAV or MP3 file and blasts the identical recording to every contact on your list. No personalization beyond a basic name-insertion merge tag in some plans. Every prospect hears the same generic script, word for word.",
    dialeads: "Dialeads generates a unique AI voicemail per contact — inserting their name, company, the specific offer, and a tailored call to action, synthesized to sound naturally recorded. Verified callback rates run several times higher than static blasts.",
  },
  {
    num: "02",
    title: "What Happens After the Voicemail Drop",
    sly: "Once the drop lands, Slybroadcast's job is done. There is no automatic SMS, no automatic email, no scheduled callback reminder, and nothing to route an interested reply anywhere. Every next step is manual.",
    dialeads: "Dialeads triggers a multi-touch follow-up sequence automatically the moment a voicemail is delivered — SMS within seconds, email the same day, and additional touches over the following week, all triggered by the outcome of the drop with zero manual action required.",
  },
  {
    num: "03",
    title: "Live Calling Capability",
    sly: "No live calling capability exists inside Slybroadcast at all. It is exclusively a voicemail and SMS blasting tool. Any live outbound calling — power dialing, AI calling, or manual dialing — requires an entirely separate platform, subscription, and login.",
    dialeads: "Dialeads includes a full power dialer with local presence caller ID plus an autonomous AI voice agent for live conversations, built into the same platform as voicemail drops. One login covers the entire outbound motion.",
  },
  {
    num: "04",
    title: "CRM Integration Depth",
    sly: "No native CRM integration. Zapier support is limited to basic trigger events, with no automatic deal stage updates, no call recording sync, and no disposition-driven pipeline movement.",
    dialeads: "Native two-way sync with HubSpot, Salesforce, Close CRM, and GoHighLevel. Every drop, call outcome, SMS reply, and disposition writes automatically to the correct CRM record in real time — zero manual data entry.",
  },
  {
    num: "05",
    title: "TCPA Compliance Tools",
    sly: "DNC scrubbing is a manual process — download the registry, cross-reference your list yourself, and remove numbers before uploading a campaign. No STIR/SHAKEN attestation and no automatic time-zone enforcement.",
    dialeads: "Every compliance function runs automatically on every single dial — national DNC scrub, per-contact time-zone window enforcement, STIR/SHAKEN A-level attestation, and a full consent audit trail, with zero manual compliance work.",
  },
];

const faqItems = [
  {
    question: "Does Dialeads do ringless voicemail drops like Slybroadcast?",
    answer:
      "Yes. Dialeads drops pre-recorded voicemails directly to voicemail without ringing the phone — the same core function as Slybroadcast. The difference is that Dialeads adds AI dynamic personalization, automated follow-up sequences, live calling, and native CRM sync around every drop.",
  },
  {
    question: "Is Dialeads more expensive than Slybroadcast?",
    answer:
      "At very low volumes, Slybroadcast's pay-per-drop pricing can look cheaper on paper. At any meaningful scale, Dialeads is significantly cheaper once you account for the separate tools needed to match its functionality. A full equivalent stack around Slybroadcast runs $299–$1,049 per month versus $49 for Dialeads Pro.",
  },
  {
    question: "Can I import my Slybroadcast contact lists into Dialeads?",
    answer:
      "Yes. Export your contacts from Slybroadcast as CSV and import directly into Dialeads. Phone numbers are auto-validated, DNC-scrubbed, and matched to local caller IDs on import — ready to dial in under 2 minutes.",
  },
  {
    question: "Does Dialeads have a pay-per-drop option like Slybroadcast?",
    answer:
      "Dialeads runs on flat monthly plans starting at $29/mo rather than metered per-drop pricing. At most volumes this ends up cheaper than pay-per-drop once SMS, email, live calling, and CRM sync are factored in, since all of that is included rather than billed separately.",
  },
  {
    question: "How long does it take to switch from Slybroadcast to Dialeads?",
    answer:
      "Under 30 minutes. Export your contact lists from Slybroadcast, import into Dialeads, re-record or upload your voicemail drop, connect your CRM, and launch your first campaign. Your 14-day free Pro trial starts immediately — no credit card required.",
  },
];

const testimonials = [
  {
    quote:
      "“We were paying for Slybroadcast and a separate power dialer just to get voicemail drops and live calls in the same pipeline. Dialeads replaced both for $49 a month and the two systems finally talk to each other.”",
    name: "Sales Manager",
    role: "B2B SaaS Company",
  },
  {
    quote:
      "“Slybroadcast has no follow-up whatsoever — you drop the voicemail and that is the entire interaction unless you manually text or email someone yourself. Dialeads fires SMS and email automatically the moment a drop lands. That alone changed our response rate.”",
    name: "Founder",
    role: "Lead Generation Agency",
  },
  {
    quote:
      "“Our callback rate on Slybroadcast's generic drops sat around 1 to 2 percent for years. Switching to Dialeads' AI personalized voicemail pushed us to 6 to 8 percent on the same lists.”",
    name: "Real Estate Wholesaler",
    role: "Motivated Seller Outreach",
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Export Your Contact Lists",
    body: "Download your existing contact lists and campaign data from Slybroadcast as CSV files. All contacts and phone numbers export cleanly with no data loss.",
    footer: "CSV format",
    footerColor: "text-[#7b7487]",
  },
  {
    step: "02",
    title: "Import Into Dialeads",
    body: "Upload your CSV directly into Dialeads. Phone numbers auto-validated, DNC-scrubbed automatically, duplicates removed, local caller IDs matched to every contact. Ready to dial in under 2 minutes.",
    footer: "Under 2 min",
    footerColor: "text-[#630ed4]",
  },
  {
    step: "03",
    title: "Re-Record Your Drop",
    body: "Upload your existing Slybroadcast recording directly into Dialeads or record a new one inside the platform. Optionally enable AI dynamic voicemail drops for personalized messages per contact — a major upgrade from Slybroadcast's static drops.",
    footer: "Audio / AI",
    footerColor: "text-[#7b7487]",
  },
  {
    step: "04",
    title: "Connect Your CRM",
    body: "Connect HubSpot, Salesforce, GoHighLevel, or Close CRM in one click. Every drop, call outcome, and reply will sync automatically going forward — functionality Slybroadcast simply does not offer.",
    footer: "1-Click Native Sync",
    footerColor: "text-[#630ed4]",
  },
  {
    step: "05",
    title: "Launch Your Campaign",
    body: "Launch your first campaign with the same voicemail drop capability as Slybroadcast — plus live calling, automated multi-touch follow-up, CRM sync, and automatic TCPA compliance running alongside it.",
    footer: "Full Stack Live",
    footerColor: "text-emerald-600",
  },
];

const chooseSlybroadcast = [
  "You only need basic voicemail drops — nothing more",
  "You are running a single one-time campaign with no ongoing outbound infrastructure needs",
  "You send a very low volume of drops per month and prefer pay-per-use pricing",
  "You already have a separate dialer and CRM you are satisfied managing independently",
  "You do not need live calling, automated follow-up, or CRM sync",
];

const chooseDialeads = [
  "You need voicemail drops as part of a complete outbound system with live calling and follow-up",
  "You want every call outcome, voicemail, and SMS reply to sync to your CRM automatically",
  "You want AI dynamic voicemail personalization instead of one generic recording",
  "You need TCPA compliance running automatically — not manually managed per campaign",
  "You are tired of paying for and managing separate tools for voicemail, SMS, calling, and CRM",
  "You need white-label options for running client campaigns as an agency",
];

const slyMissing = [
  "No live calling included",
  "No CRM sync included",
  "No automated follow-up sequences included",
  "No AI personalization — static audio only",
];

const slyBreakdown = [
  { label: "Slybroadcast voicemail drops:", cost: "~$150–$300" },
  { label: "Separate SMS platform needed:", cost: "~$50–$150/mo" },
  { label: "Separate dialer needed:", cost: "~$99–$299/mo" },
  { label: "Separate CRM integration:", cost: "~$50–$300/mo" },
];

const dialeadsIncludes = [
  "Unlimited calling and power dialer",
  "Unlimited ringless voicemail drops",
  "AI voice agent autonomous calling",
  "Automated 7-day SMS and email follow-ups",
  "Full native CRM 2-way sync (HubSpot, GHL, Salesforce)",
  "Automated TCPA compliance on every single dial",
];

/* ─── Component ────────────────────────────────────────── */

export default function DialeadsVsSlybroadcastPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] antialiased min-h-screen selection:bg-[#7C3AED] selection:text-white">
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-1 text-xs text-[#4a4455]">
          <Link href="/" className="hover:text-[#0b1c30]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/compare" className="hover:text-[#0b1c30]">
            Comparisons
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0b1c30] font-medium">Dialeads vs Slybroadcast</span>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]" />
            </span>
            <BarChart3 className="w-3.5 h-3.5" />
            Platform Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#0b1c30] font-extrabold tracking-tight mb-6 leading-[1.12]">
            Dialeads vs Slybroadcast &mdash;{" "}
            <br className="hidden sm:inline" />
            Which Platform{" "}
            <span className="relative inline-block text-[#630ed4]">
              Actually Grows
              <svg
                className="absolute left-0 -bottom-2 w-full h-2.5"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4"
                  stroke="#7C3AED"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Your Pipeline?
          </h1>
          <p className="text-lg sm:text-xl text-[#4a4455] max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            Slybroadcast drops a pre-recorded voicemail and stops there.
            Dialeads drops the voicemail, then adds live AI calling, power
            dialing, automated multi-touch follow-up, and full CRM sync &mdash;
            all in one platform. Here is the complete breakdown.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-base shadow-lg shadow-[#7C3AED]/25 transition-all"
            >
              Start Dialeads Free
            </Link>
            <a
              href="#comparison-table"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-[#d3e4fe] text-[#0b1c30] hover:bg-[#eff4ff] font-bold text-base transition-all"
            >
              See Full Feature List
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#4a4455] font-medium">
            No credit card &middot; 14-day full Pro access &middot; Cancel anytime
          </p>

          {/* VISUAL COMPARISON PREVIEW */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left max-w-5xl mx-auto">
            {/* Slybroadcast Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#d3e4fe] shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#eff4ff]">
                <div>
                  <span className="text-xs font-semibold text-[#7b7487] uppercase tracking-wider">
                    Legacy Architecture
                  </span>
                  <h3 className="text-xl font-bold text-[#0b1c30]">Slybroadcast</h3>
                </div>
                <span className="text-xs bg-[#eff4ff] text-[#4a4455] px-2.5 py-1 rounded font-medium">
                  Single Purpose
                </span>
              </div>
              <div className="mt-4 space-y-2.5 text-sm text-[#4a4455]">
                <div className="p-3 bg-[#eff4ff] rounded-lg">
                  <span className="font-medium text-[#0b1c30]">1. Upload Static WAV/MP3</span>
                </div>
                <div className="flex justify-center text-[#7b7487]">
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-[#eff4ff] rounded-lg">
                  <span className="font-medium text-[#0b1c30]">2. Blast Blind to Full List</span>
                </div>
                <div className="flex justify-center text-[#7b7487]">
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-[#ffdad6] rounded-lg flex items-center gap-2">
                  <X className="w-3.5 h-3.5 text-[#ba1a1a]" />
                  <span className="font-medium text-[#93000a]">3. Pipeline Dead End</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#eff4ff] flex items-center justify-between text-xs text-[#4a4455]">
                <span>Average Callback Rate:</span>
                <span className="font-bold text-[#0b1c30] text-sm">1.4%</span>
              </div>
            </div>

            {/* Dialeads Card */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-b from-[#213145] to-[#0b1c30] text-white border border-[#7C3AED]/40 shadow-xl shadow-[#7C3AED]/10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#7C3AED]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div>
                  <span className="text-xs font-semibold text-[#d2bbff] uppercase tracking-wider">
                    All-In-One Platform
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Autonomous AI Outbound Matrix
                  </h3>
                </div>
                <span className="text-xs bg-white/10 text-[#d2bbff] border border-[#7C3AED]/30 px-2.5 py-1 rounded font-medium">
                  Unified
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs relative z-10">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#eaf1ff] font-semibold block mb-1">Dynamic Audio Drop</span>
                  <span className="text-[#d2bbff]">AI personalized per prospect</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#eaf1ff] font-semibold block mb-1">Autonomous Live Calling</span>
                  <span className="text-[#d2bbff]">Power dialer + AI agent</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#eaf1ff] font-semibold block mb-1">Multi-Touch Drip</span>
                  <span className="text-[#d2bbff]">Instant SMS + 7-day cadence</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-[#eaf1ff] font-semibold block mb-1">2-Way Native CRM Sync</span>
                  <span className="text-[#d2bbff]">HubSpot / SF / GHL</span>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#d2bbff] relative z-10">
                <span>Average Verified Callback:</span>
                <span className="font-bold text-emerald-400 text-sm">
                  6.8% &mdash; 3.8x Pipeline Multiplier
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUICK VERDICT */}
      <section className="py-16 bg-white border-y border-[#d3e4fe] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
              Bottom Line Up Front
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
              The Short Answer &mdash; What Each Platform Is Actually For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Slybroadcast is for */}
            <div className="p-8 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5e5d6b] text-white flex items-center justify-center font-bold text-lg">
                    SB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0b1c30]">Slybroadcast:</h3>
                    <span className="text-xs text-[#4a4455] font-medium">
                      Single-Channel Utility
                    </span>
                  </div>
                </div>
                <p className="text-[#0b1c30] text-base leading-relaxed mb-4">
                  For teams that only need voicemail drops &mdash; nothing more.
                </p>
                <ul className="space-y-2.5 text-sm text-[#4a4455]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Ringless voicemail drops
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#ba1a1a] shrink-0" /> No live calling
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#ba1a1a] shrink-0" /> No automated follow-up
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-[#ba1a1a] shrink-0" /> No native CRM sync
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d3e4fe] flex items-center gap-2 text-xs font-semibold text-[#4a4455]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5e5d6b]" />
                Best for low-volume one-off blasts with no CRM requirements
              </div>
            </div>

            {/* Dialeads is for */}
            <div className="p-8 rounded-2xl bg-[#ede0ff] border border-[#d2bbff] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#7C3AED]/20">
                    DL
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0b1c30]">Dialeads:</h3>
                    <span className="text-xs text-[#630ed4] font-semibold">
                      Comprehensive Growth Engine
                    </span>
                  </div>
                </div>
                <p className="text-[#0b1c30] text-base leading-relaxed mb-4">
                  Voicemail drops plus AI calling, follow-up, and CRM sync &mdash; all in one platform.
                </p>
                <ul className="space-y-2.5 text-sm text-[#0b1c30] font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" /> AI dynamic voicemail drops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" /> Power dialer + AI voice agent
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" /> Automated multi-touch follow-up
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0" /> Native 2-way CRM sync
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#d2bbff] flex items-center gap-2 text-xs font-bold text-[#630ed4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                Best for teams scaling callbacks, appointments, and qualified pipeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FULL COMPARISON TABLE */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
            Feature by Feature
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
            Dialeads vs Slybroadcast &mdash; Complete Feature Comparison
          </h2>
          <p className="text-[#4a4455] text-sm mt-3">
            An exhaustive side-by-side audit of outbound capabilities, compliance
            automation, and CRM intelligence.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-[#d3e4fe] shadow-sm">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#d3e4fe] bg-[#eff4ff]/80">
                <th className="p-4 sm:p-5 text-sm font-bold text-[#0b1c30] w-1/2">
                  Feature
                </th>
                <th className="p-4 sm:p-5 text-sm font-bold text-[#630ed4] w-1/4 bg-[#ede0ff]/50">
                  Dialeads
                  <span className="ml-2 text-[10px] bg-[#7C3AED] text-white px-2 py-0.5 rounded font-extrabold uppercase">
                    All-In-One
                  </span>
                </th>
                <th className="p-4 sm:p-5 text-sm font-bold text-[#4a4455] w-1/4">
                  Slybroadcast
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eff4ff] text-sm">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 font-medium text-[#0b1c30]">{row.feature}</td>
                  <td className="p-4 bg-[#ede0ff]/30">
                    <span
                      className={`font-semibold ${
                        row.dialStatus === "green"
                          ? "text-emerald-600"
                          : row.dialStatus === "amber"
                          ? "text-amber-600"
                          : "text-[#7b7487]"
                      }`}
                    >
                      {row.dialStatus === "green" && <>{"✅"} </>}
                      {row.dialeads}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-${row.slyStatus === "green" ? "semibold" : "medium"} ${
                        row.slyStatus === "green"
                          ? "text-emerald-600"
                          : row.slyStatus === "amber"
                          ? "text-amber-600"
                          : "text-[#7b7487]"
                      }`}
                    >
                      {row.slyStatus === "green" && "✅ "}
                      {row.slyStatus === "red" && "❌ "}
                      {row.slyStatus === "amber" && "✅ "}
                      {row.sly}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-[#eff4ff]/90 font-bold">
                <td className="p-4 text-[#0b1c30]">Starting price</td>
                <td className="p-4 bg-[#ede0ff]/50 text-[#630ed4] text-base">
                  $29/mo (All-inclusive)
                </td>
                <td className="p-4 text-[#0b1c30] text-base">$0.05/drop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4 — DEEP DIVE COMPARISON */}
      <section className="py-20 bg-white border-y border-[#d3e4fe] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
              Where They Differ Most
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
              The 5 Biggest Differences Between Dialeads and Slybroadcast
            </h2>
          </div>

          <div className="space-y-12">
            {differences.map((diff) => (
              <div
                key={diff.num}
                className="p-8 rounded-2xl bg-[#f8f9ff] border border-[#d3e4fe]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#7C3AED] font-extrabold text-2xl">
                    {diff.num}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0b1c30]">
                    {diff.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-xl border border-[#d3e4fe]">
                    <span className="text-xs font-bold text-[#7b7487] uppercase tracking-wider block mb-2">
                      Slybroadcast
                    </span>
                    <p className="text-[#4a4455] text-sm leading-relaxed">
                      {diff.sly}
                    </p>
                  </div>
                  <div className="bg-[#ede0ff]/60 p-5 rounded-xl border border-[#d2bbff]">
                    <span className="text-xs font-bold text-[#630ed4] uppercase tracking-wider block mb-2">
                      Dialeads
                    </span>
                    <p className="text-[#0b1c30] text-sm leading-relaxed font-medium">
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
            Cost Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
            Dialeads vs Slybroadcast &mdash; Real Cost at Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Slybroadcast Pricing Card */}
          <div className="p-8 rounded-2xl bg-white border border-[#d3e4fe] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7b7487]">
                Metered Tool
              </span>
              <h3 className="text-2xl font-bold text-[#0b1c30] mt-1 mb-4">
                Slybroadcast Pricing
              </h3>

              <div className="p-4 bg-[#eff4ff] rounded-xl mb-6">
                <span className="text-2xl font-extrabold text-[#0b1c30]">
                  $0.05
                </span>
                <span className="text-xs text-[#4a4455] block mt-1 font-medium">
                  Per drop approximately &middot; Volume tiers available
                </span>
              </div>

              <ul className="space-y-2.5 text-sm text-[#4a4455] mb-6">
                {slyMissing.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#ba1a1a] font-bold">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#eff4ff]">
                <span className="text-xs font-bold text-[#0b1c30] uppercase tracking-wide block mb-2">
                  At 5,000 drops per month:
                </span>
                <div className="text-xs text-[#4a4455] space-y-1.5">
                  {slyBreakdown.map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold text-[#0b1c30]">
                        {item.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d3e4fe]">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-[#0b1c30]">
                  Total to match Dialeads:
                </span>
                <span className="text-xl font-extrabold text-[#ba1a1a]">
                  $349&ndash;$1,049/mo
                </span>
              </div>
            </div>
          </div>

          {/* Dialeads Pricing Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#ede0ff] to-white border-2 border-[#7C3AED] shadow-xl shadow-[#7C3AED]/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-[11px] bg-[#7C3AED] text-white font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                All-Inclusive
              </span>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#630ed4]">
                Dialeads Plans
              </span>
              <h3 className="text-2xl font-bold text-[#0b1c30] mt-1 mb-4">
                Starter &amp; Pro
              </h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 bg-white rounded-xl border border-[#d2bbff] shadow-sm">
                  <span className="text-xs font-semibold text-[#4a4455] block mb-1">Starter</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#0b1c30]">$29</span>
                    <span className="text-[#4a4455] text-xs font-semibold">/mo</span>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#d2bbff] shadow-sm">
                  <span className="text-xs font-semibold text-[#630ed4] block mb-1">Pro</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#630ed4]">$49</span>
                    <span className="text-[#4a4455] text-xs font-semibold">/mo</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-[#0b1c30] mb-6">
                {dialeadsIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#d2bbff]">
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-base shadow-md shadow-[#7C3AED]/30 transition-all text-center"
              >
                Start 14-Day Free Pro Trial <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <span className="block text-center text-xs text-[#4a4455] mt-2 font-medium">
                No credit card required &middot; Instant access
              </span>
            </div>
          </div>
        </div>

        {/* TCO Breakdown Card */}
        <div className="rounded-2xl bg-[#213145] text-white p-8 sm:p-10">
          <h3 className="text-xl font-bold mb-6 text-center">
            The Real Total Cost of Ownership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-semibold text-[#d2bbff] uppercase tracking-wider block mb-2">
                Assembled Legacy Stack
              </span>
              <span className="text-3xl font-extrabold text-white block mb-1">
                $349&ndash;$1,049
              </span>
              <span className="text-xs text-[#eaf1ff]/70">per month, across 4 disconnected tools</span>
            </div>
            <div className="p-5 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/40">
              <span className="text-xs font-semibold text-[#d2bbff] uppercase tracking-wider block mb-2">
                Dialeads Pro
              </span>
              <span className="text-3xl font-extrabold text-emerald-400 block mb-1">
                $49
              </span>
              <span className="text-xs text-[#eaf1ff]/70">per month, one unified platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHEN TO CHOOSE EACH */}
      <section className="py-20 bg-white border-y border-[#d3e4fe] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
              Honest Recommendation
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
              When Slybroadcast Makes Sense &mdash; And When It Doesn&apos;t
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Choose Slybroadcast if */}
            <div className="p-8 rounded-2xl bg-[#f8f9ff] border border-[#d3e4fe]">
              <h3 className="text-xl font-bold text-[#0b1c30] mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#e5eeff] text-[#4a4455] flex items-center justify-center text-sm font-bold">
                  <X className="w-4 h-4" />
                </span>
                Choose Slybroadcast if:
              </h3>
              <ul className="space-y-4 text-sm text-[#4a4455]">
                {chooseSlybroadcast.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#7b7487] font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Dialeads if */}
            <div className="p-8 rounded-2xl bg-[#ede0ff]/50 border border-[#d2bbff] shadow-sm">
              <h3 className="text-xl font-bold text-[#4c1d95] mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center text-sm font-bold">
                  <Check className="w-4 h-4" />
                </span>
                Choose Dialeads if:
              </h3>
              <ul className="space-y-4 text-sm text-[#0b1c30]">
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

      {/* SECTION 7 — MIGRATION FROM SLYBROADCAST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
            Switching From Slybroadcast
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
            Moving From Slybroadcast to Dialeads Takes Under 30 Minutes
          </h2>
          <p className="text-[#4a4455] text-sm mt-3">
            Follow this simple 5-step roadmap to migrate campaigns without
            missing a single dial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {migrationSteps.map((s) => (
            <div
              key={s.step}
              className="p-5 rounded-2xl bg-white border border-[#d3e4fe] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider block mb-2">
                  Step {s.step}
                </span>
                <h3 className="text-base font-bold text-[#0b1c30] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#4a4455] leading-relaxed">
                  {s.body}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#eff4ff] text-[11px] font-semibold">
                <span className={s.footerColor}>{s.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="py-20 bg-white border-y border-[#d3e4fe] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
              Frequently Asked Questions About Dialeads vs Slybroadcast
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#f8f9ff] border border-[#d3e4fe] shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-bold text-[#0b1c30]">
                    Q{i + 1}: {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7b7487] shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-[#4a4455] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS (NO STARS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede0ff] text-[#630ed4] text-xs font-bold uppercase tracking-wider mb-3">
              From Teams Who Switched
            </div>
            <h2 className="text-3xl sm:text-4xl text-[#0b1c30] font-bold tracking-tight">
              What Teams Say After Switching From Slybroadcast to Dialeads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#d3e4fe] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm text-[#0b1c30] leading-relaxed italic mb-6">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#eff4ff]">
                  <span className="text-xs font-bold text-[#0b1c30] block">
                    &mdash; {t.name}
                  </span>
                  <span className="text-[11px] text-[#4a4455]">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — BOTTOM CTA */}
      <section id="trial" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#0b1c30] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl border border-[#213145]">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#213145] text-[#d2bbff] text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
              Ready to Switch?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Get Everything Slybroadcast Offers &mdash;{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbff] to-indigo-300">
                Plus Everything It Doesn&apos;t
              </span>
            </h2>
            <p className="text-[#eaf1ff] text-base sm:text-lg mb-8 font-normal leading-relaxed opacity-90">
              Voicemail drops, AI live calling, intelligent SMS sequences, CRM
              sync, and automatic TCPA compliance &mdash; all in one platform
              for $49 per month. Import your Slybroadcast lists and launch your
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
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#213145] hover:bg-[#2c3e56] text-white border border-white/10 font-bold text-base transition-all"
              >
                Book a Live Demo
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-[#eaf1ff]/70 font-medium">
              No credit card &middot; Import your existing lists &middot; Cancel
              anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
