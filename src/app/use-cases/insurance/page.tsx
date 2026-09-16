"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Check,
  Zap,
  Voicemail,
  BadgeCheck,
  Mic,
  Gauge,
  HeartPulse,
  Users,
  Building2,
  Stethoscope,
  Briefcase,
  ShieldCheck,
  Clock,
  Shield,
  BanIcon,
  FileText,
  AudioWaveform,
  MapPin,
  Repeat,
  Inbox,
  Handshake,
  PhoneCall,
  Webhook,
  FileSpreadsheet,
  Globe,
  ThumbsUp,
  BarChart3,
  Umbrella,
  Home,
  Car,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data arrays                                                        */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "60 sec", label: "Speed-to-Lead" },
  { value: "5x", label: "More Quotes Written" },
  { value: "3x", label: "Higher Callback Rate" },
  { value: "100%", label: "TCPA Compliant" },
];

const profiles = [
  {
    icon: Briefcase,
    tag: "Optimized for Single-Seat Speed",
    title: "Independent Insurance Agents",
    body: "Working internet leads, referrals, and aged lists on your own. You do not have a call center behind you — you need every lead contacted within 60 seconds, every voicemail dropped instantly, and every follow-up automated so nothing slips through while you are on another call.",
    footer: "Ideal for: solo agents running 1-3 lead sources",
  },
  {
    icon: HeartPulse,
    tag: "AEP & T65 Cadence Engine",
    title: "Medicare and Final Expense Agents",
    body: "AEP and T65 volume is brutal — hundreds of leads pour in over a few weeks and every one needs to be contacted fast or a competing agent gets there first. Dialeads runs a built-in AEP/T65 cadence so every senior lead gets called, voicemailed, and texted automatically.",
    footer: "Built for AEP, T65, and SEP surge volume",
  },
  {
    icon: Users,
    tag: "Multi-Agent Hierarchy Control",
    title: "Insurance Marketing Organizations",
    body: "Managing dozens of downline agents means visibility into who is calling, who is not, and which leads are going cold. Dialeads gives IMOs per-agent dashboards, hierarchy-level reporting, and centralized lead distribution so no agent — and no lead — falls through the cracks.",
    footer: "Ideal for: IMOs managing 10-200+ agents",
  },
  {
    icon: Stethoscope,
    tag: "OEP Continuous Contact Protocol",
    title: "Health Insurance and ACA Agents",
    body: "Open Enrollment is a sprint — thousands of subsidy-eligible leads need contact within a narrow window. Dialeads keeps a continuous outbound cadence running through OEP, tracking enrollment deadlines and firing automated follow-up so no eligible household is missed.",
    footer: "Built for OEP subsidy-eligible lead volume",
  },
  {
    icon: Building2,
    tag: "B2B Commercial Account Discovery",
    title: "Commercial Insurance Brokers",
    body: "Prospecting business owners for P&C, workers' comp, and liability coverage is a long-cycle, relationship-driven sale. Dialeads automates first-touch outreach and multi-week follow-up sequences so you spend your time on renewal conversations and risk assessments — not manual dialing.",
    footer: "Ideal for: commercial P&C and group benefits brokers",
    footerExtra: "CRM & ZoomInfo Compatible",
    wide: true,
  },
];

const painPoints = [
  {
    num: "01",
    title: "Internet Leads Go Cold in Under 5 Minutes",
    body: "A lead fills out a Medicare or auto quote form on EverQuote, MediaAlpha, or your own site. If you do not call within 5 minutes, conversion drops by more than 80%. Manually checking your inbox and dialing takes 20-30 minutes on average — the lead has already spoken to two other agents by then.",
    fix: "Speed-to-lead calling via Zapier or direct webhook. The moment a lead submits any form, Dialeads calls automatically within 60 seconds — before the competition even sees the notification.",
  },
  {
    num: "02",
    title: "8-12 Touchpoints Are Needed to Convert — Most Agents Stop at 2",
    body: "Insurance leads convert on the 8th to 12th touch on average across calls, voicemails, and texts. Most agents call twice, leave one voicemail, and move on to the next lead — leaving the majority of their pipeline uncontacted and unconverted.",
    fix: "Automated multi-touch follow-up sequences run calls, voicemail drops, and SMS across 8+ touchpoints automatically — so every lead gets the full cadence without you lifting a finger after the first click.",
  },
  {
    num: "03",
    title: "Generic Voicemails Get Deleted Without a Callback",
    body: '"Hi, this is [name] with [agency], calling about your insurance quote, give me a call back." Every agent working the same lead vendor leaves this exact message. Prospects delete it instantly. Generic voicemail callback rates sit under 3%.',
    fix: "AI dynamic voicemail drops are personalized with the prospect's name, the specific plan or coverage type they inquired about, and a clear next step — so it sounds like a real callback, not a mass blast.",
  },
  {
    num: "04",
    title: "AEP/OEP Volume Overwhelms Manual Dialing Capacity",
    body: "During AEP, T65, and OEP surges, lead volume can triple or quadruple overnight. A single agent or small team simply cannot manually call, voicemail, and text every lead within the compliant contact window — leads sit uncontacted for hours or days.",
    fix: "The AI voice agent handles first-touch outreach autonomously during surge periods — qualifying interest, answering basic questions, and routing hot leads straight into your inbox for a live callback.",
  },
  {
    num: "05",
    title: "TCPA Violations Are an Existential Risk for Insurance Agencies",
    body: "A single uncompliant call — wrong time zone, a number on the DNC list, missing consent documentation — can trigger a TCPA lawsuit with statutory damages of $500 to $1,500 per violation. For agencies dialing thousands of leads, the exposure is enormous.",
    fix: "TCPA compliance is built in and automatic: DNC scrubbing, time-zone enforcement, STIR/SHAKEN attestation, and consent timestamp logging run on every single dial with no manual setup required.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "Speed-to-Lead AI Calling — 60 Seconds",
    body: "Connect any lead source via Zapier or webhook. The moment a lead comes in, Dialeads calls automatically within 60 seconds — every time, day or night.",
  },
  {
    icon: Voicemail,
    title: "AI Dynamic Voicemail Drop",
    body: "Personalized voicemail drops with the prospect's name and coverage interest, delivered instantly on every missed call. No re-recording, no dead time.",
  },
  {
    icon: Repeat,
    title: "Automated 8-Touch Follow-Up",
    body: "A pre-built cadence of calls, voicemail drops, and SMS runs automatically across 8+ touchpoints so every lead gets a full follow-up sequence without manual effort.",
  },
  {
    icon: Zap,
    title: "AEP/OEP Surge Capacity AI Voice Agent",
    body: "During enrollment surges, the AI voice agent handles first-touch conversations autonomously — qualifying and routing hot leads straight to your inbox.",
  },
  {
    icon: ShieldCheck,
    title: "TCPA Compliance — Automatic",
    body: "DNC scrubbing, time-zone enforcement, STIR/SHAKEN attestation, and consent logging run on every dial automatically, with zero manual configuration.",
  },
  {
    icon: MapPin,
    title: "Local Presence Caller ID",
    body: "Every outbound call displays a local area-code number matched to the prospect's location, driving significantly higher pickup rates than toll-free or out-of-state numbers.",
  },
  {
    icon: Repeat,
    title: "CRM Sync — AgencyZoom, HubSpot, Salesforce",
    body: "Two-way sync keeps call outcomes, dispositions, and lead status updated automatically in AgencyZoom, HubSpot, or Salesforce — no manual data entry.",
  },
  {
    icon: BarChart3,
    title: "Per-Agent Reporting for IMOs",
    body: "IMOs get a hierarchy-level dashboard showing contact rates, speed-to-lead, and quote activity broken down by every downline agent in real time.",
  },
];

const insuranceLines = [
  {
    icon: HeartPulse,
    title: "Medicare Advantage and Supplement",
    body: "Purpose-built cadence for AEP, T65, and SEP campaigns with senior-friendly call scripting and follow-up timing.",
    tags: ["AEP Ready", "T65 Lead Campaigns", "24/7 AI Outreach"],
  },
  {
    icon: Umbrella,
    title: "Final Expense Life Insurance",
    body: "Optimized for working aged lead lists and Facebook-generated final expense inquiries with rapid multi-touch follow-up.",
    tags: ["Aged Lead Campaigns", "Facebook Lead Gen", "SMS Follow-Up"],
  },
  {
    icon: Car,
    title: "Auto and Home Insurance",
    body: "Built for high-volume comparison-shopping leads from EverQuote and similar vendors where speed decides who writes the policy.",
    tags: ["60-Second Speed-to-Lead", "Multi-Touch Sequence", "EverQuote Compatible"],
  },
  {
    icon: Stethoscope,
    title: "Health Insurance and ACA",
    body: "Tracks Open Enrollment Period deadlines and keeps subsidy-eligible leads in a continuous contact cadence through the OEP window.",
    tags: ["OEP Ready", "Auto Follow-Up", "Enrollment Window Tracking"],
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    body: "Supports longer B2B sales cycles for P&C, workers' comp, and liability prospecting with business-owner-focused outreach.",
    tags: ["Business Owner Prospecting", "ZoomInfo Compatible", "CRM Sync"],
  },
  {
    icon: Home,
    title: "Life Insurance",
    body: "Runs referral-list and cross-sell campaigns with personalized, multi-touch outreach built for relationship-based life sales.",
    tags: ["Referral List Campaigns", "8-Touch Sequence", "Personalized Outreach"],
  },
];

const leadSources = [
  {
    icon: Zap,
    name: "EverQuote",
    badge: "60-Second Auto-Call",
    body: "Connect EverQuote's real-time lead feed directly to Dialeads. New quote requests trigger an automatic call within 60 seconds of submission — every time.",
  },
  {
    icon: Webhook,
    name: "MediaAlpha",
    badge: "Webhook Integration",
    body: "MediaAlpha leads post directly into Dialeads via webhook, triggering immediate calling, voicemail drop, and SMS follow-up with zero manual handoff.",
  },
  {
    icon: Globe,
    name: "Your Own Website",
    badge: "Native Webhook",
    body: "Point your website's quote form or Calendly-style intake directly at Dialeads. Every submission triggers the full contact sequence automatically.",
  },
  {
    icon: FileSpreadsheet,
    name: "Aged Lead Lists",
    badge: "Direct CSV Import",
    body: "Upload aged final expense, Medicare, or P&C lead lists as CSV. Dialeads validates numbers, scrubs DNC, and queues the entire list for dialing in minutes.",
  },
  {
    icon: ThumbsUp,
    name: "Facebook Lead Gen Ads",
    badge: "Instant FB Lead Response",
    body: "Sync your Facebook Lead Ads directly to Dialeads. The moment a prospect submits a lead form on Facebook or Instagram, Dialeads calls within 60 seconds — capturing interest while it is highest, before the prospect has left the app.",
    wide: true,
  },
];

const steps = [
  {
    num: "01",
    icon: Inbox,
    title: "Lead Comes In",
    body: "A new lead arrives from EverQuote, MediaAlpha, your website, a CSV upload, or Facebook Lead Ads.",
  },
  {
    num: "02",
    icon: PhoneCall,
    title: "Dialeads Calls Within 60 Seconds",
    body: "The lead is automatically dialed within 60 seconds — with a local caller ID and TCPA-compliant timing.",
  },
  {
    num: "03",
    icon: Repeat,
    title: "Automatic Follow-Up Fires",
    body: "If there is no answer, a personalized voicemail drops instantly and the 8-touch follow-up sequence begins.",
  },
  {
    num: "04",
    icon: Inbox,
    title: "Interested Prospect Appears in Inbox",
    body: "Any prospect who engages — answers, calls back, or replies to SMS — is flagged and routed to your unified inbox.",
  },
  {
    num: "05",
    icon: Handshake,
    title: "Run the Quote and Close",
    body: "Call the interested prospect with full context — call history, voicemail receipt, and SMS thread — and close the sale.",
  },
];

const testimonials = [
  {
    quote:
      "During AEP I was drowning in leads with no way to call them all fast enough. Dialeads contacts every senior lead within 60 seconds and drops a personalized voicemail on every miss. My AEP enrollment count doubled compared to last season with the same lead spend.",
    initials: "MA",
    role: "Medicare Sales Specialist",
    detail: "AEP & T65 Campaigns",
  },
  {
    quote:
      "My EverQuote contact rate was stuck around 22% because leads went cold before I could call them back. Dialeads calls within 60 seconds automatically and my contact rate jumped to 71%. I am writing more auto and home policies with the exact same lead spend.",
    initials: "PC",
    role: "P&C Agency Principal",
    detail: "Auto & Home Insurance",
  },
  {
    quote:
      "As an IMO managing 40 downline agents, I had zero visibility into who was actually calling their leads on time. Dialeads gives me per-agent reporting so I can see speed-to-lead and contact rate for every single agent in one dashboard. It changed how we manage the whole downline.",
    initials: "DS",
    role: "Director of Sales, IMO",
    detail: "Managing 40 Agents",
  },
  {
    quote:
      "Final expense aged leads are hard to convert because everyone has already called them a dozen times. Dialeads' dynamic voicemail and 8-touch sequence tripled my conversion rate on the same aged lead lists I had been working manually for months.",
    initials: "FE",
    role: "Senior Life Producer",
    detail: "Final Expense Specialist",
  },
];

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "DNC Scrubbing",
    body: "Every number checked against the National DNC Registry before every single dial.",
  },
  {
    icon: Clock,
    title: "Time-Zone Enforcement",
    body: "8am-9pm local calling windows enforced automatically based on the prospect's area code.",
  },
  {
    icon: Shield,
    title: "STIR/SHAKEN Attestation",
    body: "A-level caller ID verification on every call to avoid spam-likely flags and carrier blocking.",
  },
  {
    icon: BanIcon,
    title: "SMS Opt-Out Handling",
    body: "STOP replies are suppressed instantly and permanently across every active campaign.",
  },
  {
    icon: FileText,
    title: "Consent Timestamp Logging",
    body: "A full, auditable record of consent and contact history is logged for every call and text — built for TCPA legal defense.",
    wide: true,
  },
];

const starterFeatures = [
  "1,000 outbound calling minutes",
  "1-Click Voicemail Drop",
  "Basic SMS follow-up trigger",
  "Local caller ID matching",
];

const proFeatures = [
  "Unlimited calling minutes",
  "Autonomous AI Voice Agent",
  "Automated 8-touch follow-up sequence",
  "AEP/OEP surge capacity",
  "TCPA compliance suite included",
];

const enterpriseFeatures = [
  "Multi-agent hierarchy management",
  "Per-agent reporting dashboard",
  "Dedicated onboarding & support",
  "Custom CRM & webhook integrations",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function InsurancePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ── BREADCRUMB ─────────────────────────────────────── */}
      <section className="w-full bg-white border-b border-[#e5eeff] py-2 px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#4a4455] font-medium">
            <Link href="/use-cases" className="hover:text-[#630ed4] transition-colors">
              Use Cases
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0b1c30] font-semibold">
              Insurance Agents &amp; IMOs
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#e5eeff] text-[#630ed4] text-[11px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>60-Sec Speed-to-Lead &amp; TCPA Shield Active</span>
          </div>
        </div>
      </section>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden py-16 lg:py-24 px-4 lg:px-8">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-[#630ed4]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>BUILT FOR INSURANCE PROFESSIONALS</span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[62px] lg:leading-[1.08] font-bold tracking-tight text-[#0b1c30] max-w-5xl mb-6">
            Contact Every Insurance Lead{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630ed4] via-[#7C3AED] to-[#732ee4]">
              Within 60 Seconds
            </span>{" "}
            — Fully TCPA Compliant
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-7 text-[#4a4455] max-w-3xl mb-8">
            Dialeads helps insurance agents and IMOs contact every lead within
            60 seconds, drop personalized voicemails, automate 8-touch
            follow-up sequences, and stay TCPA compliant — across Medicare,
            Final Expense, P&amp;C, ACA, and commercial lines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-base shadow-lg shadow-[#630ed4]/25 transition-all"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold text-base shadow-sm transition-all"
            >
              <PhoneCall className="w-5 h-5 text-[#7C3AED]" />
              <span>Book an Insurance Demo</span>
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 text-[#4a4455] text-sm font-medium mb-12">
            <BadgeCheck className="w-4 h-4 text-[#7C3AED]" />
            <span>No credit card · TCPA compliant by default · Cancel anytime</span>
          </div>

          {/* Console Mockup */}
          <div className="w-full max-w-5xl bg-[#0f0f1a] text-white rounded-2xl p-4 sm:p-8 shadow-2xl relative text-left">
            {/* Top accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#630ed4] via-[#7C3AED] to-[#732ee4] rounded-t-2xl" />

            {/* Console header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 bg-white/5 px-4 py-3 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-sm tracking-wide text-white">
                  Live Dispatch Engine — Active Campaign: Medicare &amp; Final
                  Expense Outbound Engine
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 text-[#ede0ff] text-xs font-semibold">
                <Webhook className="w-3.5 h-3.5" />
                <span>EverQuote Realtime Direct Hook</span>
              </div>
            </div>

            {/* Active record */}
            <div className="bg-white/[0.04] p-6 rounded-xl mb-6 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#630ed4] flex items-center justify-center text-white font-bold text-sm">
                    SJ
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-white">
                        Sarah Jenkins
                      </h4>
                      <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#d3e4fe] font-medium">
                        AEP Inquiry — Medicare Advantage
                      </span>
                    </div>
                    <p className="text-xs text-[#d3e4fe]/70 font-mono mt-0.5">
                      Live Carrier Link · In Call · Local Caller ID Matched
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                  <AudioWaveform className="w-4 h-4" />
                  <span>Call Connected — AI Voice Agent Live</span>
                </div>
              </div>

              {/* Waveform bars */}
              <div className="flex items-end gap-1 h-10 px-1">
                {[6, 14, 22, 10, 28, 16, 24, 12, 30, 18, 8, 20, 26, 14, 10, 22, 16, 28, 12, 20].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#7C3AED]/60 rounded-sm"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>

              {/* Transcript */}
              <div className="bg-[#0b1c30]/70 p-3 rounded-lg">
                <div className="text-[11px] font-bold text-[#ede0ff] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Mic className="w-3.5 h-3.5" />
                  AI Voice Agent Transcript
                </div>
                <p className="text-xs text-[#d3e4fe]/90 italic leading-relaxed">
                  &ldquo;Hi Sarah, this is calling about the Medicare Advantage
                  plan info you requested. I can walk you through what is
                  available in your area, or connect you with a licensed
                  agent right now — which works better for you?&rdquo;
                </p>
              </div>
            </div>

            {/* Metric chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Speed-to-Touch", value: "48 sec", color: "text-emerald-400" },
                { label: "Contact Rate", value: "74.2%", color: "text-white" },
                { label: "1-Click VM Drops", value: "128", color: "text-[#d2bbff]" },
                { label: "TCPA DNC Scrubbed", value: "100%", color: "text-[#d3e4fe]" },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.03] p-3 rounded-xl">
                  <span className="text-[11px] text-[#d3e4fe]/70 uppercase font-semibold block">
                    {m.label}
                  </span>
                  <span className={`font-bold text-xl ${m.color}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <section className="w-full bg-white py-12 px-4 lg:px-8 shadow-sm">
        <div className="max-w-[75rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-4xl lg:text-5xl font-bold text-[#7C3AED] tracking-tight mb-1">
                {s.value}
              </span>
              <span className="font-semibold text-[#0b1c30] text-sm sm:text-base max-w-[200px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO THIS IS FOR ────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              EVERY INSURANCE PROFESSIONAL WHO DIALS LEADS
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Dialeads Is Built for Every Insurance Agent Running Outbound
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Whether you are a solo agent working internet leads or an IMO
              managing hundreds of downline producers — Dialeads handles the
              outreach so you handle the quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((p) => (
              <div
                key={p.title}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  p.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e5eeff] text-[#7C3AED] flex items-center justify-center mb-4">
                    <p.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#630ed4] tracking-wide uppercase block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-xl text-[#0b1c30] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {p.body}
                  </p>
                </div>
                <div className="mt-6 pt-3 bg-[#eff4ff] px-4 py-2 rounded-lg text-xs font-semibold text-[#0b1c30] flex items-center justify-between">
                  <span>{p.footer}</span>
                  {p.footerExtra && (
                    <span className="text-[#630ed4] font-bold">
                      {p.footerExtra}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              THE INSURANCE SALES PROBLEM
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Why Insurance Agents Lose Leads — And How to Stop It
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Insurance leads are expensive and time-sensitive. Most agents
              lose them not because their quote is uncompetitive but because
              their follow-up is too slow, too generic, or noncompliant.
            </p>
          </div>

          <div className="space-y-6">
            {painPoints.map((pp) => (
              <div
                key={pp.num}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col lg:flex-row gap-8 items-stretch"
              >
                <div className="lg:w-7/12 flex gap-4">
                  <span className="font-bold text-3xl lg:text-4xl text-[#630ed4]/30">
                    {pp.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-xl text-[#0b1c30] mb-2">
                      {pp.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4a4455]">
                      {pp.body}
                    </p>
                  </div>
                </div>
                <div className="lg:w-5/12 bg-[#e3e0f1]/40 p-6 rounded-xl flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#7C3AED] font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Dialeads Fix</span>
                  </div>
                  <p className="text-sm text-[#0b1c30] font-medium leading-relaxed">
                    {pp.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              PURPOSE-BUILT FOR INSURANCE OUTREACH
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Every Feature Built for High-Volume Insurance Lead Follow-Up
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Dialeads is not a generic calling tool. Every feature is
              optimized for the specific workflows insurance agents and IMOs
              use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e5eeff] text-[#7C3AED] flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0b1c30] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE LINES ────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              EVERY LINE OF BUSINESS COVERED
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Dialeads Works Across Every Insurance Line and Campaign Type
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceLines.map((l) => (
              <div
                key={l.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e5eeff] text-[#7C3AED] flex items-center justify-center mb-4">
                  <l.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-[#0b1c30] mb-2">
                  {l.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4a4455] mb-4">
                  {l.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {l.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD SOURCES ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              COMPATIBLE WITH YOUR LEAD SOURCES
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Works With Every Insurance Lead Vendor and Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadSources.map((s) => (
              <div
                key={s.name}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all ${
                  s.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#630ed4]">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl text-[#0b1c30]">
                      {s.name}
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] font-semibold">
                    {s.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#4a4455]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              SIMPLE WORKFLOW
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              From New Lead to Booked Quote — Automatically
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-3xl text-[#7C3AED]">
                    {s.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#630ed4]">
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-bold text-base text-[#0b1c30] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4a4455]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ─────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              TCPA COMPLIANCE FOR INSURANCE
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Built to Keep Insurance Agents Compliant at Scale
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Insurance outbound calling is one of the most heavily scrutinized
              categories under TCPA. Dialeads protects your agency
              automatically on every dial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceItems.map((c) => (
              <div
                key={c.title}
                className={`bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 ${
                  c.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#0b1c30] mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#4a4455]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              FROM INSURANCE AGENTS USING DIALEADS
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              What Insurance Professionals Say After 30 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="text-base leading-relaxed text-[#0b1c30] mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e5eeff]">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#0b1c30] block">
                      {t.role}
                    </span>
                    <span className="text-xs text-[#4a4455]">{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              SIMPLE PRICING
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Start Contacting More Leads Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-3">
                  Starter
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-bold text-5xl text-[#0b1c30]">
                    $29
                  </span>
                  <span className="text-[#4a4455] font-medium text-sm">
                    /mo
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6">
                  Solo agents getting started with compliant outbound calling.
                  1,000 minutes, voicemail drop, basic SMS follow-up, local
                  caller ID matching.
                </p>
                <div className="space-y-2 mb-8">
                  {starterFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#0b1c30]"
                    >
                      <Check className="w-[18px] h-[18px] text-[#630ed4]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-bold text-sm transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between relative ring-2 ring-[#7C3AED]">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#7C3AED] text-white font-bold text-xs shadow">
                Most Popular for Insurance
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-3">Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-bold text-5xl text-[#7C3AED]">
                    $49
                  </span>
                  <span className="text-[#4a4455] font-medium text-sm">
                    /mo
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6">
                  For agents running high-volume outreach through AEP, OEP,
                  and beyond. Unlimited calling, AI voice agent, automated
                  8-touch sequences, full TCPA compliance suite.
                </p>
                <div className="space-y-2 mb-8">
                  {proFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#0b1c30] font-medium"
                    >
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#7C3AED]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-sm shadow-md transition-all"
              >
                Start 14-Day Free Pro Trial — No Credit Card
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-3">
                  Enterprise
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-bold text-5xl text-[#0b1c30]">
                    Custom
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6">
                  Built for IMOs managing multiple agents. Hierarchy-level
                  dashboards, per-agent reporting, dedicated onboarding, and
                  custom integrations.
                </p>
                <div className="space-y-2 mb-8">
                  {enterpriseFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#0b1c30]"
                    >
                      <Check className="w-[18px] h-[18px] text-[#630ed4]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/demo"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-bold text-sm transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="w-full bg-gradient-to-br from-[#630ed4] via-[#7C3AED] to-[#43088a] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#ede0ff] text-xs font-bold uppercase tracking-[0.08em] mb-4">
            READY TO CONTACT MORE LEADS?
          </div>
          <h2 className="text-[28px] sm:text-[40px] lg:text-5xl leading-tight font-bold tracking-tight text-white mb-4 max-w-2xl">
            Stop Losing Insurance Leads to Slow Follow-Up — Start Today
          </h2>
          <p className="text-lg leading-7 text-[#ede0ff]/90 max-w-2xl mb-8">
            Connect your lead source, configure your voicemail drop, and let
            Dialeads contact every lead within 60 seconds — while you stay
            fully TCPA compliant.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0f0f1a] font-bold text-base shadow-xl transition-all"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all"
            >
              <PhoneCall className="w-[18px] h-[18px]" />
              <span>Book an Insurance Demo</span>
            </Link>
          </div>
          <p className="text-xs text-[#ede0ff]/70">
            No credit card · TCPA compliant by default · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
