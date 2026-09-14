"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Home,
  Star,
  Verified,
  Bot,
  AudioLines,
  PhoneIncoming,
  Voicemail,
  FileUp,
  RefreshCw,
  ClipboardCheck,
  Users,
  Building2,
  Rocket,
  UserCheck,
  ArrowLeftRight,
  Lock,
  Headset,
  Zap,
  Globe,
  Table,
  Code2,
  BrainCircuit,
  CalendarCheck,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const demoSteps = [
  {
    num: "01",
    icon: PhoneIncoming,
    title: "Live AI Cold Call — Right in Front of You",
    body: "We dial a real number from your industry using a Dialeads AI voice agent. You watch the call happen in real time — live answer detection, conversation flow, and objection handling. You hear exactly what your prospects will hear.",
    tag: "Real acoustic testing",
    tagIcon: AudioLines,
  },
  {
    num: "02",
    icon: Voicemail,
    title: "Voicemail Drop Demonstrated Live",
    body: "Watch Dialeads detect a voicemail beep and drop a personalized pre-recorded message in under 2 seconds. We show standard pre-recorded drops vs AI dynamic voicemail drops side by side so you can hear the difference immediately.",
    tag: "Sub-2s Beep Detection",
    tagIcon: Zap,
  },
  {
    num: "03",
    icon: FileUp,
    title: "Your Lead List — Imported Live",
    body: "Bring a CSV of 50–100 leads from your industry. We import it live, run automatic DNC scrubbing, match local caller IDs, and show your queue ready to dial — in under 3 minutes. You leave the demo with your list already inside the platform.",
    tag: "Auto DNC + Local Match",
    tagIcon: Verified,
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "CRM Integration Connected on the Call",
    body: "We connect Dialeads to your HubSpot, Salesforce, Close CRM, or GoHighLevel account live and show every call outcome syncing automatically. You see your own CRM update in real time as we log a disposition.",
    tag: "Instant Disposition Sync",
    tagIcon: RefreshCw,
  },
];

const demoStepFull = {
  num: "05",
  icon: ClipboardCheck,
  title: "Your Custom Setup Plan",
  body: "Based on your team size, dial volume, campaign type, and industry — we build a custom Dialeads setup plan on the call. You leave knowing exactly which plan fits, which integrations to connect first, and how long onboarding takes.",
  tag: "Ready-to-execute onboarding blueprint",
};

const audienceCards = [
  {
    icon: Users,
    title: "Sales Managers & Team Leads",
    body: "Evaluating a power dialer or AI calling tool to increase rep productivity and pipeline volume. Want to see real dials, real answer rates, and real CRM sync before committing.",
    goal: "Maximize Rep Repetition",
  },
  {
    icon: Building2,
    title: "Agency Owners",
    body: "Running outbound campaigns for multiple clients and need a platform that handles compliance, multi-campaign management, and client-level reporting in one dashboard.",
    goal: "Sub-Account Compliance",
  },
  {
    icon: Rocket,
    title: "Solo Founders & Small Business Owners",
    body: "Doing their own outbound sales and need to contact hundreds of leads per week without spending all day on the phone. Want to see how fast the setup really is.",
    goal: "Instant 5x Pipeline Leverage",
  },
  {
    icon: UserCheck,
    title: "SDR Team Leads",
    body: "Looking to increase dials per rep per day, reduce new hire ramp time, and give reps live objection rebuttals during calls. Want to see the AI copilot in action.",
    goal: "Slash SDR Ramp Time",
  },
];

const prepSteps = [
  {
    num: "01",
    title: "Bring a Lead List",
    body: "Export 50–100 leads from your CRM or lead source as a CSV. We'll import it live and show your actual leads ready to dial inside Dialeads before the session ends.",
    tag: "Formatted as CSV or Excel",
    tagIcon: Table,
  },
  {
    num: "02",
    title: "Know Your Stack",
    body: "Know which CRM you use (HubSpot, Salesforce, Close, GoHighLevel, Pipedrive). We'll connect it live on the call and show your data syncing in real time.",
    tag: "API credentials or Admin login",
    tagIcon: Code2,
  },
  {
    num: "03",
    title: "Have Your Biggest Objection Ready",
    body: "What's the one thing that would stop you from switching to Dialeads? Bring it. We'll address it directly during the session — not after with a follow-up email.",
    tag: "Direct, transparent technical answers",
    tagIcon: BrainCircuit,
  },
];

const faqs = [
  {
    q: "How long is the demo?",
    a: "20 minutes. We respect your time — we move fast and show, not tell. If you want to go deeper on any feature, we can extend or schedule a follow-up technical session.",
  },
  {
    q: "Is this a sales call?",
    a: "We'll show you the platform and give you honest answers about whether Dialeads fits your use case. If it doesn't, we'll tell you that directly. No pressure, no follow-up spam.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nothing required. Optionally, bring a CSV of 50–100 leads from your industry so we can demo with your real data. Having your CRM login handy also speeds things up.",
  },
  {
    q: "Can I start a free trial right after the demo?",
    a: "Yes. Your 14-day Pro trial activates immediately after the demo with your lead list already imported and your CRM already connected — so you can start dialing the same day.",
  },
  {
    q: "What if I just want to try it myself first?",
    a: "Go to the pricing page and start the 14-day Pro trial directly. No credit card required. You'll have access to every feature including the AI voice agent and live objection copilot.",
  },
  {
    q: "Can I bring my whole team to the demo?",
    a: "Absolutely. Send the calendar invite to whoever needs to see it — sales managers, IT, operations. We'll tailor the session to cover everyone's questions.",
  },
];

const testimonials = [
  {
    quote:
      "I booked the demo expecting a standard vendor pitch. Instead they dialed one of my actual leads live on the call. I signed up before the session was over.",
    name: "Sales Manager",
    company: "B2B SaaS Company",
  },
  {
    quote:
      "The 20 minutes was enough to see exactly how it works. They imported my lead list, connected my HubSpot, and showed me a live AI call. Setup was done before I even left the demo.",
    name: "Founder",
    company: "Lead Generation Agency",
  },
  {
    quote:
      "I came in skeptical about AI calling sounding robotic. After hearing a live call during the demo, I couldn't tell it wasn't a human. Signed up that day.",
    name: "SDR Team Lead",
    company: "Insurance Agency",
  },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
];

const calendarDays = [
  { day: 20, disabled: true },
  { day: 21, disabled: true },
  { day: 22, disabled: true },
  { day: 23, disabled: true },
  { day: 24, disabled: false },
  { day: 25, disabled: false },
  { day: 26, disabled: true },
  { day: 27, disabled: false },
  { day: 28, disabled: false },
  { day: 29, disabled: false },
  { day: 30, disabled: false },
  { day: 31, disabled: false },
  { day: 1, disabled: true },
  { day: 2, disabled: true },
];

/* ─── Component ────────────────────────────────────────── */

export default function DemoPage() {
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
  const [selectedDay, setSelectedDay] = useState(24);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#4a4455] mb-6">
            <Link
              href="/"
              className="hover:text-[#7C3AED] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#ccc3d8]" />
            <span className="text-[#7C3AED] font-medium">Book a Demo</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left pitch */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                Live Platform Demo
              </div>
              <h1 className="text-4xl lg:text-[56px] lg:leading-[60px] tracking-tight text-[#0b1c30] mb-4 font-bold leading-[1.08]">
                See Dialeads Dial a Real Lead —{" "}
                <span className="text-[#7C3AED]">Live, In Front of You</span>
              </h1>
              <p className="text-lg text-[#4a4455] mb-8 max-w-2xl leading-relaxed">
                In 20 minutes, we&apos;ll show you exactly how Dialeads runs AI
                cold calls, drops voicemails instantly, handles live objections,
                and follows up automatically — using your actual lead list if you
                bring one.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
                <a
                  href="#scheduler"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Book Your Demo Below
                  <ArrowDown className="w-[18px] h-[18px]" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold shadow-sm transition-colors"
                >
                  Start Free Trial Instead
                </Link>
              </div>
              <div className="flex items-center gap-2 text-[#4a4455] text-sm">
                <Verified className="w-[18px] h-[18px] text-[#7C3AED]" />
                No sales pressure · 20 minutes · We&apos;ll do live dials
                during the call
              </div>
            </div>

            {/* Right: Live Demo Simulation */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#630ed4]/10 via-[#7C3AED]/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-[#213145] rounded-2xl p-6 text-[#eaf1ff] shadow-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white font-bold">
                      Active Simulation
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-[#7C3AED]/20 px-2 py-1 rounded-md text-[#eaddff] text-xs font-semibold">
                    <Verified className="w-3.5 h-3.5" />
                    Telnyx STIR/SHAKEN A-Level
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center bg-[#213145]/60 p-3 rounded-xl">
                    <span className="text-[#d3e4fe]/70 text-sm">
                      Target Company
                    </span>
                    <span className="font-bold text-white">
                      Austin Solar Group
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-[#213145]/60 p-3 rounded-xl">
                    <span className="text-[#d3e4fe]/70 text-sm">
                      Active Voice Model
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#d2bbff] text-sm">
                      <Bot className="w-4 h-4" /> Alex (Voice Synthetic v2)
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-[#213145]/60 p-3 rounded-xl">
                    <span className="text-[#d3e4fe]/70 text-sm">Status</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      In-Call (00:48) — Handling Objection
                    </span>
                  </div>
                </div>

                {/* Waveform */}
                <div className="bg-black/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between text-[#d3e4fe]/70 text-xs font-semibold mb-2">
                    <span>Sub-350ms Synthetic Stream</span>
                    <span className="text-emerald-400 font-mono">
                      LATENCY: 294ms
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 h-12">
                    {[12, 24, 18, 32, 28, 14, 26, 8, 20].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1.5 rounded-full ${i % 2 === 0 ? "bg-[#7C3AED]" : "bg-[#d2bbff]"}`}
                        style={{
                          height: `${h}px`,
                          animation: `pulse 1.2s ease-in-out ${i * 0.1}s infinite alternate`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcript */}
                <div className="bg-white/5 rounded-xl p-3 text-[#d3e4fe]/90 text-sm">
                  <p className="italic text-white">
                    &quot;I understand budget cycles reset in Q1, Marcus. Would
                    it be premature to lock in our guaranteed Tier-1 pilot rates
                    before Thursday?&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDLY SECTION */}
      <section className="w-full py-24 bg-[#eff4ff]" id="scheduler">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Direct Booking
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              Pick a Time That Works for You
            </h2>
            <p className="text-lg text-[#4a4455]">
              All demo slots are 20 minutes. A real person from our team runs
              every session — no pre-recorded videos, no slides-only
              presentations.
            </p>
          </div>

          {/* Calendar mockup */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              {/* Left info panel */}
              <div className="lg:col-span-5 p-8 bg-[#f8f9ff] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shadow-sm">
                      <Headset className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#0b1c30]">
                        Dialeads Solutions Team
                      </h4>
                      <p className="text-sm text-[#4a4455]">
                        Hosted by Alex Rivera & Sarah Chen
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl text-[#0b1c30] font-bold mb-3">
                    Dialeads AI Calling & Voicemail Drop Deep Dive
                  </h3>
                  <div className="flex items-center gap-2 text-[#4a4455] text-sm mb-4">
                    <CalendarCheck className="w-[18px] h-[18px] text-[#7C3AED]" />
                    <span className="font-semibold text-[#0b1c30]">
                      20 Min Video Meeting
                    </span>
                    <span>·</span>
                    <span>Google Meet / Zoom</span>
                  </div>
                  <p className="text-sm text-[#4a4455] mb-6 leading-relaxed">
                    We will conduct real-time dials, test objection handling with
                    custom scenarios, and hook up your target data sources during
                    this working session.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Live dial to a phone number of your choice",
                      "Direct CRM pipeline writeback demonstration",
                      "Immediate custom onboarding blueprint generation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-[#0b1c30]"
                      >
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#7C3AED] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e5eeff] flex items-center gap-2 text-[#4a4455] text-xs font-semibold">
                  <Globe className="w-4 h-4" />
                  Timezone: Central Time - US & Canada (CST)
                </div>
              </div>

              {/* Right calendar panel */}
              <div className="lg:col-span-7 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl text-[#0b1c30] font-bold">
                    Select Date & Time
                  </h4>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-full hover:bg-[#e5eeff] flex items-center justify-center text-[#4a4455] transition-colors">
                      <ChevronLeft className="w-[18px] h-[18px]" />
                    </button>
                    <span className="font-bold text-base text-[#0b1c30] px-2">
                      October 2025
                    </span>
                    <button className="w-8 h-8 rounded-full hover:bg-[#e5eeff] flex items-center justify-center text-[#4a4455] transition-colors">
                      <ChevronRight className="w-[18px] h-[18px]" />
                    </button>
                  </div>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span
                      key={d + i}
                      className={`text-xs font-semibold ${i >= 5 ? "text-[#4a4455]/40" : "text-[#4a4455]"}`}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-2 text-center mb-6">
                  {calendarDays.map((cd) => (
                    <button
                      key={`${cd.day}-${cd.disabled}`}
                      onClick={() => !cd.disabled && setSelectedDay(cd.day)}
                      className={`py-2 text-sm rounded-lg transition-colors ${
                        cd.disabled
                          ? "text-[#4a4455]/40 cursor-default"
                          : cd.day === selectedDay
                            ? "bg-[#7C3AED] text-white font-bold shadow-sm"
                            : "text-[#0b1c30] cursor-pointer hover:bg-[#e5eeff]"
                      }`}
                    >
                      {cd.day}
                    </button>
                  ))}
                </div>

                {/* Time slots */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-base text-[#0b1c30]">
                      Thursday, Oct {selectedDay} — Open Slots
                    </span>
                    <span className="text-[#7C3AED] text-xs font-semibold">
                      6 slots remaining
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => {
                          setSelectedSlot(slot);
                          setConfirmed(false);
                        }}
                        className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                          slot === selectedSlot
                            ? "bg-[#7C3AED] text-white"
                            : "bg-[#f8f9ff] hover:bg-[#7C3AED] hover:text-white text-[#0b1c30]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  {/* Confirmation */}
                  <div className="mt-6 p-4 rounded-xl bg-[#e5eeff] flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-5 h-5 text-[#7C3AED]" />
                      <span className="text-sm text-[#0b1c30] font-medium">
                        Oct {selectedDay} at {selectedSlot} (CST)
                      </span>
                    </div>
                    <button
                      onClick={() => setConfirmed(true)}
                      className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold text-sm shadow-sm transition-all ${
                        confirmed
                          ? "bg-emerald-600 text-white"
                          : "bg-[#7C3AED] hover:bg-[#630ed4] text-white"
                      }`}
                    >
                      {confirmed ? "Slot Reserved!" : "Confirm This Slot"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8 text-center">
            {[
              {
                icon: Lock,
                text: "Your information is never shared or sold",
              },
              { icon: Headset, text: "Real team member — not a bot" },
              {
                icon: Zap,
                text: "Instant confirmation with prep checklist",
              },
            ].map((t) => (
              <div
                key={t.text}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white shadow-sm"
              >
                <t.icon className="w-5 h-5 text-[#7C3AED]" />
                <span className="text-sm text-[#0b1c30] font-medium">
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              What to Expect
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              Exactly What Happens in Your 20-Minute Demo
            </h2>
            <p className="text-lg text-[#4a4455]">
              We move fast. Every minute is a live demonstration — no fluff, no
              slides, no vendor pitch decks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoSteps.map((s) => (
              <div
                key={s.num}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[32px] leading-[36px] text-[#d2bbff] font-bold">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#eaddff]/30 flex items-center justify-center text-[#7C3AED]">
                      <s.icon className="w-[22px] h-[22px]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-[#0b1c30] font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-base text-[#4a4455] leading-relaxed">
                    {s.body}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#e5eeff] text-[#630ed4] text-xs font-semibold flex items-center gap-1">
                  <s.tagIcon className="w-4 h-4" /> {s.tag}
                </div>
              </div>
            ))}

            {/* Step 05 — full span */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-[#eff4ff] p-8 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[32px] leading-[36px] text-[#7C3AED] font-bold">
                    {demoStepFull.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shadow-sm">
                    <demoStepFull.icon className="w-[22px] h-[22px]" />
                  </div>
                </div>
                <h3 className="text-xl text-[#0b1c30] font-bold mb-3">
                  {demoStepFull.title}
                </h3>
                <p className="text-base text-[#4a4455] leading-relaxed max-w-2xl">
                  {demoStepFull.body}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#e5eeff] text-[#630ed4] text-xs font-semibold flex items-center gap-1">
                <ClipboardCheck className="w-4 h-4" /> {demoStepFull.tag}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS DEMO IS FOR */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Is This Demo Right for You?
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              This Demo Is Built for People Who Are Ready to Dial
            </h2>
            <p className="text-lg text-[#4a4455]">
              We respect your time. This session is for teams actively
              evaluating an outbound calling platform — not casual browsers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceCards.map((c) => (
              <div
                key={c.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#7C3AED] mb-4">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl text-[#0b1c30] font-bold mb-2">
                    {c.title}
                  </h3>
                  <p className="text-base text-[#4a4455] leading-relaxed">
                    {c.body}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e5eeff] text-xs font-semibold text-[#4a4455]">
                  Goal: {c.goal}
                </div>
              </div>
            ))}

            {/* Switchers — highlighted full span */}
            <div className="lg:col-span-2 bg-[#7C3AED] text-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
                <h3 className="text-xl text-white font-bold mb-2">
                  Switchers
                </h3>
                <p className="text-base text-[#ede0ff] leading-relaxed max-w-xl">
                  Currently using Mojo Dialer, Sly Broadcast, Drop Cowboy,
                  CallTools, or a manual dialing process and actively comparing
                  alternatives before making a switch.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/20 text-xs font-semibold text-[#ede0ff] flex items-center gap-1">
                <ArrowLeftRight className="w-4 h-4" /> Live 1:1 Side-by-Side
                Comparison Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE YOUR DEMO */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Come Prepared
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              Three Things That Make Your Demo 10x More Valuable
            </h2>
            <p className="text-lg text-[#4a4455]">
              None of these are required — but each one makes the session more
              useful for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prepSteps.map((s) => (
              <div
                key={s.num}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#7C3AED] font-bold text-xl">
                    <span className="w-8 h-8 rounded-full bg-[#eaddff]/40 flex items-center justify-center text-sm font-bold">
                      {s.num}
                    </span>
                    <span>{s.title}</span>
                  </div>
                  <p className="text-base text-[#4a4455] leading-relaxed mb-4">
                    {s.body}
                  </p>
                </div>
                <div className="bg-[#eff4ff] p-3 rounded-xl text-xs font-semibold text-[#0b1c30] flex items-center gap-2">
                  <s.tagIcon className="w-[18px] h-[18px] text-[#7C3AED]" />
                  {s.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-24 bg-[#eff4ff]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Common Questions
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              Questions About the Demo
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer"
                >
                  <h4 className="text-xl text-[#0b1c30] font-bold">
                    {faq.q}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7C3AED] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 text-[#4a4455] text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff]/40 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Trusted by Sales Teams
            </div>
            <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-[#0b1c30] mb-2 font-bold tracking-tight">
              What People Say After Their First Demo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-[#0b1c30] leading-relaxed mb-6">
                    &quot;{t.quote}&quot;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-[#e5eeff]">
                  <div className="font-bold text-base text-[#0b1c30]">
                    {t.name}
                  </div>
                  <div className="text-sm text-[#4a4455]">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-[#7C3AED] text-white rounded-3xl p-12 lg:p-24 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#630ed4] opacity-40 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#d2bbff] opacity-20 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                Ready to See It Live?
              </div>
              <h2 className="text-[40px] leading-[44px] lg:text-[56px] lg:leading-[60px] text-white mb-4 font-bold tracking-tight leading-tight">
                Book Your 20-Minute Demo Now
              </h2>
              <p className="text-lg text-[#ede0ff] mb-8 max-w-2xl leading-relaxed">
                Pick any available slot above. Instant confirmation. Real team
                member. Live dials. Your questions answered directly — no
                follow-up email required.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6 w-full sm:w-auto">
                <a
                  href="#scheduler"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#f8f9ff] text-[#0b1c30] font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Book a Demo Slot
                  <CalendarCheck className="w-[18px] h-[18px]" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold backdrop-blur-md transition-colors"
                >
                  Start Free Trial Instead
                </Link>
              </div>
              <p className="text-[#ede0ff] text-sm">
                No credit card for trial · No sales pressure in demo · Cancel
                anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
