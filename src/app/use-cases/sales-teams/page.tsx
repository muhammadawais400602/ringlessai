"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  X,
  Zap,
  TrendingUp,
  Gauge,
  CalendarDays,
  CircleCheckBig,
  TimerOff,
  BrainCircuit,
  RefreshCwOff,
  CalendarX,
  Phone,
  Bot,
  MessageSquareText,
  PointerIcon,
  MessageSquareMore,
  Monitor,
  AudioLines,
  Star,
  ChevronRight,
  Home,
  Verified,
  Voicemail,
  MessageSquare,
  CalendarClock,
  Workflow,
  CloudSync,
  BarChart3,
  Rocket,
  Search,
  Plug,
  ArrowUpRight,
  MinusCircle,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  {
    value: "4x",
    label: "More Dials",
    desc: "Per rep per day with smart queue cycling & local caller ID.",
    icon: TrendingUp,
  },
  {
    value: "65%",
    label: "Faster Ramp Time",
    desc: "For new SDR hires using real-time objection rebuttal copilot.",
    icon: Gauge,
  },
  {
    value: "3x",
    label: "More Demos Booked",
    desc: "Per rep per week from higher connect density & instant follow-ups.",
    icon: CalendarDays,
  },
  {
    value: "0",
    label: "Manual CRM Updates",
    desc: "Zero typing after calls. Instant disposition sync to HubSpot & Salesforce.",
    icon: CircleCheckBig,
    iconColor: "text-emerald-600",
  },
];

const painPoints = [
  {
    icon: TimerOff,
    title: "Reps Waste 3+ Hours Per Day on Voicemails",
    body: "The average SDR leaves 40–60 voicemails per day. At 45 seconds each, that's 45 minutes of dead time — every single day — just pressing buttons and waiting for beeps.",
    fix: "1-click voicemail drop in under 2 seconds. Rep advances to the next lead instantly. 45 minutes of wasted time becomes 2 minutes.",
  },
  {
    icon: BrainCircuit,
    title: "New Reps Freeze on Objections and Lose the Call",
    body: "Junior SDRs take 8–12 weeks to handle cold call objections confidently. In that window, they lose deals, burn leads, and drain manager time with coaching sessions.",
    fix: "Live objection rebuttal copilot transcribes the prospect in real time and flashes the exact response on screen before the rep even processes the objection. New reps close like veterans from day one.",
  },
  {
    icon: RefreshCwOff,
    title: "CRM Updates Fall Behind and Pipeline Goes Dark",
    body: "After a full day of dialing, reps spend 30–60 minutes manually logging call outcomes, updating deal stages, and writing notes into the CRM. Half the time it's incomplete or wrong.",
    fix: "1-click disposition logging syncs every call outcome, recording, and AI transcript to HubSpot, Salesforce, or Close CRM automatically. Zero manual entry. Zero missed updates.",
  },
  {
    icon: CalendarX,
    title: "Follow-Ups Get Forgotten and Warm Leads Go Cold",
    body: "A prospect says 'call me back Thursday' — the rep writes it on a sticky note. Thursday comes, the note is gone, the lead goes cold, and the deal dies. This happens dozens of times per week across every team.",
    fix: "Automated callback scheduling, SMS reminders, and email follow-ups trigger automatically on every disposition. No sticky notes. No forgotten leads.",
  },
];

const features = [
  {
    icon: Phone,
    label: "Presence Engine",
    title: "Power Dialer With Local Presence Caller ID",
    body: "Automatically cycles through your lead queue with local area code matching on every outbound call. Prospects see a familiar local number — answer rates jump to 85%+. Reps focus on conversations, not keypads.",
    stat: "ANSWER RATES > 85%",
  },
  {
    icon: Bot,
    label: "Autonomous Layer",
    title: "AI Voice Agent for Autonomous First-Touch Calls",
    body: "Deploy an AI voice agent to handle first-touch cold calls autonomously — no rep required. The agent handles greetings, qualification questions, and objections. Reps only join when a prospect is qualified and ready to talk.",
    stat: "ZERO REP COLD TOUCH",
    highlight: true,
  },
  {
    icon: MessageSquareText,
    label: "Live Whisper Copilot",
    title: "Live Objection Rebuttal Copilot",
    body: "Real-time audio transcription detects prospect objections the moment they land — price, timing, competitor, gatekeeper. The right rebuttal script appears on screen instantly. No freezing. No fumbling. No lost calls.",
    stat: "<500MS REBUTTAL POP",
  },
  {
    icon: PointerIcon,
    label: "Frictionless Admin",
    title: "1-Click Call Dispositions With CRM Auto-Sync",
    body: "After every call, reps tap one key — Interested, Voicemail, No Answer, Callback, Bad Number. The queue advances automatically. HubSpot, Salesforce, or Close updates in real time. Zero manual logging.",
    stat: "ZERO MANUAL ENTRY",
  },
  {
    icon: MessageSquareMore,
    label: "Speed-to-Lead",
    title: "Automated Multi-Channel Follow-Up",
    body: "The moment a call ends, Dialeads fires pre-written follow-up sequences — SMS, email, or WhatsApp — personalized with the prospect's name, company, and agreed next step. No copy-paste. No delay.",
    stat: "IMMEDIATE TRIGGER",
    highlight: true,
  },
  {
    icon: Monitor,
    label: "Live Leadership",
    title: "Manager Dashboard With Real-Time Rep Activity",
    body: "Live presence dashboard shows who's on a call, who's idle, and who's hitting their daily dial target. Managers can listen in, whisper coach, and pull rep-level performance reports without leaving their screen.",
    stat: "WHISPER & BARGE IN",
  },
];

const featureFull = {
  icon: AudioLines,
  label: "Continuous Intelligence",
  title: "Call Recordings and AI Transcripts for Coaching",
  body: "Every call is recorded and transcribed automatically. Managers pull any call recording for coaching — with the AI transcript synced word-by-word so you can jump to any moment in the conversation instantly.",
  badge: "Word-by-Word Sync",
};

const beforeItems = [
  "Log in, open CRM, manually find next lead to call",
  "Dial number, wait, get voicemail, leave 45-second message manually",
  "Log back into CRM, update call outcome manually",
  "Copy-paste follow-up email, send manually",
  "Repeat 60–80 times per day",
  "Spend last hour logging everything that fell behind",
];

const afterItems = [
  "Log in, click Start Dialing — queue auto-populated from CRM",
  "Dialeads dials automatically, drops voicemail in 2 seconds if no answer, advances to next lead",
  "1-click disposition after every live connect — CRM updates instantly",
  "Follow-up SMS fires automatically the moment the call ends",
  "Repeat 200–300 times per day with zero admin",
  "Leave on time — everything already logged",
];

const integrations = [
  {
    name: "HubSpot",
    desc: "Native two-way sync, deal stage updates, sequence pausing.",
    icon: Workflow,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Salesforce",
    desc: "REST API sync, custom object support, opportunity updates.",
    icon: CloudSync,
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    name: "Close CRM",
    desc: "Full API, activity logging, smart view updates.",
    icon: BarChart3,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    name: "GoHighLevel",
    desc: "Pipeline triggers, workflow automation, contact sync.",
    icon: Workflow,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    name: "Outreach.io",
    desc: "Sequence control, disposition triggers, activity logging.",
    icon: Rocket,
    color: "bg-violet-500/10 text-[#7C3AED]",
  },
  {
    name: "Apollo.io",
    desc: "One-click lead import, verified contact sync.",
    icon: Search,
    color: "bg-amber-500/10 text-amber-700",
  },
];

const testimonials = [
  {
    quote:
      "We went from 60 dials per rep per day to 220. The objection copilot cut our new hire ramp from 10 weeks to 3. Every SDR manager I know should be running this.",
    name: "SDR Manager",
    company: "B2B SaaS Company",
  },
  {
    quote:
      "The AI voice agent handles all our first-touch calls overnight. By the time reps log in, they have a queue of warm prospects who already responded positively to the AI. Booking rate went up 3x in the first month.",
    name: "VP of Sales",
    company: "Financial Services Firm",
  },
  {
    quote:
      "The 1-click disposition system alone saved my team 45 minutes of admin per rep per day. That's 45 minutes back on the phones. Pipeline doubled in 6 weeks.",
    name: "Sales Team Lead",
    company: "B2B Lead Generation Agency",
  },
];

const starterFeatures = [
  "1,000 calling minutes included",
  "Manual click-to-call dialing",
  "1-click voicemail drop",
  "Basic SMS follow-up triggers",
];

const proFeatures = [
  "Unlimited calling & local matching",
  "AI voice agent for first-touch calls",
  "Automated multi-line power dialer",
  "Live objection rebuttals copilot",
  "Full two-way CRM sync (HubSpot/SF)",
  "Automated multi-channel follow-up",
];

const enterpriseFeatures = [
  "Dedicated SIP trunks & carrier routes",
  "Custom white-label options",
  "Salesforce Enterprise sync & custom objects",
  "Dedicated account manager & dial strategist",
  "99.99% uptime enterprise SLA",
];

/* ─── Component ────────────────────────────────────────── */

export default function SalesTeamsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="w-full bg-white/80 border-b border-[#e5eeff]">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-sm text-[#4a4455]">
            <Link
              href="/"
              className="hover:text-[#7C3AED] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5d6b]" />
            <span className="hover:text-[#7C3AED] transition-colors">
              Use Cases
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5d6b]" />
            <span className="text-[#0b1c30] font-semibold">Sales Teams</span>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e5eeff] text-[#0b1c30] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Engine v4.2 Dial Active
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative w-full overflow-hidden pt-16 pb-24">
        <div className="absolute -top-40 right-10 w-[580px] h-[580px] rounded-full bg-[#eaddff]/40 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-[#d3e4fe]/50 blur-3xl -z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1]/70 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                Built for SDR & AE Teams
              </div>
              <h1 className="text-4xl lg:text-[56px] lg:leading-[60px] tracking-tight text-[#0b1c30] mb-6 font-bold">
                Your SDRs Should Be Talking to Prospects — Not Dialing and
                Leaving Voicemails
              </h1>
              <p className="text-lg text-[#4a4455] max-w-xl mb-8">
                Dialeads automates the top-of-funnel grunt work — dialing
                queues, dropping voicemails, logging dispositions, and
                triggering follow-ups — so every rep spends 100% of their time
                on live conversations that matter.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-[18px] h-[18px]" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold shadow-sm hover:shadow transition-all"
                >
                  <CalendarDays className="w-[18px] h-[18px] text-[#7C3AED]" />
                  Book a Sales Team Demo
                </Link>
              </div>
              <div className="flex items-center gap-2 text-[#4a4455] text-sm">
                <Verified className="w-[18px] h-[18px] text-[#7C3AED]" />
                No credit card · Full platform access · Cancel anytime
              </div>
            </div>

            {/* SDR Live Cockpit Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full rounded-2xl bg-[#0b1c30] text-white shadow-2xl overflow-hidden">
                {/* Top bar */}
                <div className="bg-[#071322] px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs text-[#d3e4fe]/70 tracking-widest pl-2 font-mono">
                      LIVE_COCKPIT // SDR_DISPATCH
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Connected (01:24)
                  </span>
                </div>

                {/* Prospect metadata */}
                <div className="px-6 py-3 bg-[#10233b]/60 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      Austin Energy Solutions
                      <span className="text-xs px-2 py-0.5 rounded bg-[#7C3AED] text-white font-medium">
                        Enterprise SDR
                      </span>
                    </div>
                    <p className="text-xs text-[#d3e4fe]/70 font-mono">
                      Lead: Marcus Vance — VP Operations · +1 (512) 894-0199
                      (Local Match)
                    </p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-[#d3e4fe]/60 block uppercase tracking-wider font-bold">
                      Queue Velocity
                    </span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">
                      188 Dials Today
                    </span>
                  </div>
                </div>

                {/* Waveform & telemetry */}
                <div className="p-6 space-y-4">
                  <div className="bg-[#071322] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#eaddff] uppercase tracking-wider flex items-center gap-1.5">
                        <AudioLines className="w-4 h-4 text-[#eaddff] animate-pulse" />
                        Sub-500ms Audio Streamer & Latency HUD
                      </span>
                      <span className="text-xs font-mono text-[#d3e4fe]/60">
                        34ms edge routing
                      </span>
                    </div>
                    {/* Waveform bars */}
                    <div className="h-10 flex items-center gap-1 px-2">
                      {[3, 5, 8, 4, 9, 10, 6, 4, 7, 10, 8, 3, 2, 5, 9, 6, 4, 2, 8, 10, 6, 3, 2].map(
                        (h, i) => (
                          <span
                            key={i}
                            className={`w-1 rounded-full ${
                              h <= 2
                                ? "bg-[#d3e4fe]/30"
                                : i % 3 === 0
                                  ? "bg-[#eaddff]"
                                  : "bg-[#7C3AED]"
                            }`}
                            style={{ height: `${h * 4}px` }}
                          />
                        )
                      )}
                    </div>
                    {/* Transcript */}
                    <div className="mt-2 text-xs font-mono text-[#d3e4fe]/90 bg-[#0b1c30] p-2.5 rounded-lg">
                      <span className="text-[#eaddff] font-bold">
                        PROSPECT (01:21):
                      </span>{" "}
                      &quot;Look, it makes complete sense, but our budget is
                      honestly frozen until Q3 before we sign anything.&quot;
                    </div>
                  </div>

                  {/* Objection alert */}
                  <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-[#7C3AED]/10 to-transparent p-4 shadow-inner">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] uppercase tracking-wider font-bold">
                        <Zap className="w-3.5 h-3.5" />
                        Objection Detected: &quot;Budget frozen until Q3&quot;
                      </span>
                      <span className="text-[11px] text-[#d3e4fe]/70 font-mono ml-auto">
                        Rebuttal match: 98.4%
                      </span>
                    </div>
                    <div className="text-xs text-white font-medium bg-[#0b1c30]/90 p-3 rounded-lg">
                      <span className="text-[#eaddff] font-bold block mb-1">
                        RECOMMENDED REBUTTAL (SAY THIS):
                      </span>
                      &quot;Understood on the freeze, Marcus. Most teams we
                      speak with run a 14-day zero-commitment pilot now so they
                      have verified pipeline ready on Day 1 of Q3. Would a
                      15-minute operational walkthrough next Tuesday make
                      sense?&quot;
                    </div>
                  </div>

                  {/* Dispositions bar */}
                  <div>
                    <div className="text-[11px] font-mono text-[#d3e4fe]/60 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>
                        1-Click Dispositions (Advances Queue & Syncs CRM)
                      </span>
                      <span className="text-emerald-400">
                        HubSpot Connected
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button className="px-2.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Interested
                      </button>
                      <button className="px-2.5 py-2 rounded-lg bg-[#1a2d48] hover:bg-[#7C3AED] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1">
                        <Voicemail className="w-3.5 h-3.5" />
                        Drop VM (2s)
                      </button>
                      <button className="px-2.5 py-2 rounded-lg bg-[#1a2d48] hover:bg-[#7C3AED] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Auto SMS
                      </button>
                      <button className="px-2.5 py-2 rounded-lg bg-[#1a2d48] hover:bg-[#7C3AED] text-white text-xs font-medium transition-colors flex items-center justify-center gap-1">
                        <CalendarClock className="w-3.5 h-3.5" />
                        Callback
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-[#f8f9ff] hover:bg-[#eff4ff] transition-all"
              >
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[56px] leading-[60px] text-[#7C3AED] font-bold">
                    {s.value}
                  </span>
                  <s.icon
                    className={`w-6 h-6 ${s.iconColor || "text-[#7C3AED]"}`}
                  />
                </div>
                <h3 className="text-xl text-[#0b1c30] mb-1 font-bold">
                  {s.label}
                </h3>
                <p className="text-sm text-[#4a4455]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffdad6] text-[#ba1a1a] text-xs font-bold uppercase tracking-wider mb-3">
              The Real Problem
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              Why Most SDR Teams Underperform — And It&apos;s Not the Reps
            </h2>
            <p className="text-lg text-[#4a4455]">
              The average SDR spends less than 28% of their day actually talking
              to prospects. The rest is dialing, leaving voicemails, logging
              notes, and chasing follow-ups manually. Dialeads fixes that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffdad6] text-[#ba1a1a] flex items-center justify-center mb-4">
                    <p.icon className="w-[26px] h-[26px]" />
                  </div>
                  <h3 className="text-2xl text-[#0b1c30] mb-2 font-bold">
                    {p.title}
                  </h3>
                  <p className="text-base text-[#4a4455] mb-6">{p.body}</p>
                </div>
                <div className="rounded-xl bg-[#eff4ff] p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-5 h-5 text-[#7C3AED]" />
                    <span className="text-xs uppercase text-[#7C3AED] tracking-wider font-bold">
                      Dialeads Solution
                    </span>
                  </div>
                  <p className="text-sm text-[#0b1c30]">
                    <span className="font-semibold text-[#7C3AED]">
                      Dialeads fix:
                    </span>{" "}
                    {p.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Everything Your Team Needs
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              Every Feature Built for High-Volume SDR Outbound
            </h2>
            <p className="text-lg text-[#4a4455]">
              Dialeads is not a general-purpose communication tool. Every
              feature is built specifically for outbound sales teams running
              high-volume cold calling campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-[#f8f9ff] p-8 hover:bg-[#eff4ff] transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg ${f.highlight ? "bg-[#630ed4]" : "bg-[#7C3AED]"} text-white flex items-center justify-center mb-4`}
                  >
                    <f.icon className="w-[22px] h-[22px]" />
                  </div>
                  <span className="text-xs text-[#7C3AED] uppercase font-bold tracking-wider mb-1 block">
                    {f.label}
                  </span>
                  <h3 className="text-2xl text-[#0b1c30] mb-2 font-bold">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#4a4455] mb-4">{f.body}</p>
                </div>
                <div className="pt-3 text-xs font-mono text-[#7C3AED] flex items-center gap-1 font-semibold">
                  <span>{f.stat}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}

            {/* Full-span feature */}
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl bg-[#f8f9ff] p-8 hover:bg-[#eff4ff] transition-all flex flex-col md:flex-row items-center gap-8">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
                <featureFull.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-[#7C3AED] uppercase font-bold tracking-wider mb-1 block">
                  {featureFull.label}
                </span>
                <h3 className="text-2xl text-[#0b1c30] mb-2 font-bold">
                  {featureFull.title}
                </h3>
                <p className="text-sm text-[#4a4455]">{featureFull.body}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-sm font-semibold">
                  <AudioLines className="w-[18px] h-[18px]" />
                  {featureFull.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAY IN THE LIFE — Before vs After */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Day in the Life
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              What a Dialeads SDR Day Looks Like vs Before
            </h2>
            <p className="text-lg text-[#4a4455]">
              Here is the difference Dialeads makes to a rep&apos;s daily
              workflow — from the moment they log in to the moment they hit their
              dial target.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="rounded-2xl bg-white p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-rose-500" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                      <X className="w-[18px] h-[18px]" />
                    </span>
                    <h3 className="text-2xl text-[#0b1c30] font-bold">
                      Before Dialeads
                    </h3>
                  </div>
                  <span className="text-xs uppercase text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded">
                    High Friction
                  </span>
                </div>
                <ul className="space-y-4 text-base text-[#4a4455]">
                  {beforeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <MinusCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-rose-50/70">
                <span className="text-xs uppercase text-rose-700 tracking-wider block mb-1 font-bold">
                  Rep Daily Output
                </span>
                <p className="text-xl text-rose-900 font-bold">
                  Average: 60–80 dials per day, 2–4 connects
                </p>
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl bg-white p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#7C3AED]" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#e3e0f1] text-[#7C3AED] flex items-center justify-center">
                      <Check className="w-[18px] h-[18px]" />
                    </span>
                    <h3 className="text-2xl text-[#0b1c30] font-bold">
                      After Dialeads
                    </h3>
                  </div>
                  <span className="text-xs uppercase text-[#7C3AED] font-bold bg-[#e3e0f1] px-2 py-1 rounded">
                    Autonomous Flow
                  </span>
                </div>
                <ul className="space-y-4 text-base text-[#0b1c30]">
                  {afterItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 p-4 rounded-xl bg-[#e3e0f1]">
                <span className="text-xs uppercase text-[#7C3AED] tracking-wider block mb-1 font-bold">
                  Rep Daily Output
                </span>
                <p className="text-xl text-[#0b1c30] font-bold flex items-center justify-between">
                  <span>Average: 200–300 dials per day, 12–20 connects</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#7C3AED] text-white">
                    4x Output
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Works With Your Stack
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              Connects to Every CRM Your Sales Team Already Uses
            </h2>
            <p className="text-lg text-[#4a4455]">
              Dialeads syncs natively with the tools your team already lives in
              — no new workflows, no manual exports, no fragile Zap chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map((intg) => (
              <div
                key={intg.name}
                className="p-6 rounded-xl bg-[#f8f9ff] hover:bg-[#eff4ff] transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${intg.color} flex items-center justify-center font-bold text-lg mb-3`}
                >
                  <intg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl text-[#0b1c30] mb-1 font-bold">
                  {intg.name}
                </h3>
                <p className="text-sm text-[#4a4455]">{intg.desc}</p>
              </div>
            ))}
            {/* Zapier full span */}
            <div className="md:col-span-2 p-6 rounded-xl bg-[#f8f9ff] hover:bg-[#eff4ff] transition-all flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                <Plug className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl text-[#0b1c30] mb-1 font-bold">
                  Zapier & Webhooks
                </h3>
                <p className="text-sm text-[#4a4455]">
                  Connect to 5,000+ additional tools, no code required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              From Sales Teams Using Dialeads
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              What SDR Leaders Say After 30 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-base text-[#0b1c30] italic mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div>
                  <span className="text-xl text-[#0b1c30] block font-bold">
                    {t.name}
                  </span>
                  <span className="text-sm text-[#4a4455]">{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              Simple Pricing
            </span>
            <h2 className="text-[40px] leading-[44px] text-[#0b1c30] mb-3 font-bold">
              Plans Built for Teams of Every Size
            </h2>
            <p className="text-lg text-[#4a4455]">
              Transparent seat licensing. Scale up as your SDR count grows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="p-8 rounded-2xl bg-[#f8f9ff] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-xs uppercase text-[#5e5d6b] tracking-wider block mb-1 font-bold">
                  Entry Tier
                </span>
                <h3 className="text-2xl text-[#0b1c30] font-bold mb-2">
                  Starter
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[56px] leading-[60px] text-[#0b1c30] font-bold">
                    $29
                  </span>
                  <span className="text-[#4a4455] text-sm">/rep /mo</span>
                </div>
                <p className="text-sm text-[#4a4455] pb-4 mb-4">
                  Solo SDRs and early-stage teams testing outbound.
                </p>
                <ul className="space-y-3 text-sm text-[#0b1c30] mb-8">
                  {starterFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-[18px] h-[18px] text-[#7C3AED]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-full bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-semibold transition-colors"
              >
                Choose Starter
              </Link>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl bg-white flex flex-col justify-between shadow-xl relative overflow-hidden ring-2 ring-[#7C3AED]">
              <div className="absolute top-0 right-0 bg-[#7C3AED] text-white text-xs uppercase tracking-wider px-4 py-1 rounded-bl-xl font-bold">
                Most popular for SDR teams
              </div>
              <div>
                <span className="text-xs uppercase text-[#7C3AED] tracking-wider block mb-1 font-bold">
                  High Velocity
                </span>
                <h3 className="text-2xl text-[#0b1c30] font-bold mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[56px] leading-[60px] text-[#7C3AED] font-bold">
                    $49
                  </span>
                  <span className="text-[#4a4455] text-sm">/rep /mo</span>
                </div>
                <p className="text-sm text-[#4a4455] pb-4 mb-4">
                  Growing sales teams running high-volume campaigns.
                </p>
                <ul className="space-y-3 text-sm text-[#0b1c30] mb-8">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#7C3AED]" />
                      <span className="font-semibold">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 px-4 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold shadow-md transition-all"
              >
                Start 14-Day Free Pro Trial — No Credit Card
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl bg-[#f8f9ff] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                <span className="text-xs uppercase text-[#5e5d6b] tracking-wider block mb-1 font-bold">
                  Scale & Control
                </span>
                <h3 className="text-2xl text-[#0b1c30] font-bold mb-2">
                  Enterprise
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[56px] leading-[60px] text-[#0b1c30] font-bold">
                    Custom
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] pb-4 mb-4">
                  Large call centers and multi-team agencies.
                </p>
                <ul className="space-y-3 text-sm text-[#0b1c30] mb-8">
                  {enterpriseFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-[18px] h-[18px] text-[#7C3AED]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full text-center py-3 rounded-full bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#7C3AED] via-[#630ed4] to-[#3b0764] text-white p-12 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#7C3AED]/40 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#d2bbff]/20 blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4">
                Ready to 3x Your Pipeline?
              </span>
              <h2 className="text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] text-white mb-4 font-bold">
                Give Every Rep the Tools to Dial More and Close More — Starting
                Today
              </h2>
              <p className="text-lg text-[#d2bbff] max-w-2xl mb-8">
                Import your lead list, connect your CRM, and have your first AI
                dial session running in under 15 minutes. No long onboarding. No
                IT required.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-[#0b1c30] hover:bg-[#e5eeff] font-bold shadow-lg transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-[18px] h-[18px]" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
                >
                  <CalendarDays className="w-[18px] h-[18px]" />
                  Book a Sales Team Demo
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d3e4fe]/80">
                <Verified className="w-4 h-4 text-emerald-300" />
                No credit card · 14-day full Pro access · Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
