"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Zap,
  BookOpen,
  Ear,
  Activity,
  SlidersHorizontal,
  Brain,
  BarChart3,
  TrendingUp,
  Copy,
  Check,
  Megaphone,
  Mic,
  Bot,
  PlayCircle,
  ArrowRight,
  BadgeCheck,
  GitBranch,
  Timer,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Battlecard data                                                    */
/* ------------------------------------------------------------------ */

interface Battlecard {
  title: string;
  rate: string;
  ack: string;
  reframe: string;
  ask: string;
  tone: string;
}

const battlecards: Record<string, Battlecard> = {
  expensive: {
    title: 'Pricing Pushback ("Too expensive / No budget")',
    rate: "68.2%",
    ack: "“Totally hear you on keeping budgets tight right now—honestly wouldn’t expect you to have line-item budget set aside for something you haven’t seen in action yet.”",
    reframe:
      "“We usually don’t replace active systems right away; we sit beside them to eliminate 14 hours of dead dial time per rep each week, which typically self-funds inside 45 days.”",
    ask: "“Could I send you a 90-second teardown showing how a 12-person SDR org did that? If it doesn’t make sense, we part ways—fair enough?”",
    tone: "Deliver at 0.95x speed. Keep inflection level and collaborative; avoid defensive upward pitch.",
  },
  email: {
    title: 'Brush-Off Pushback ("Just send me an email")',
    rate: "74.5%",
    ack: "“I can certainly do that! My inbox gets inundated as well, so I don’t want to spam you with generic brochures that miss the mark.”",
    reframe:
      "“Usually folks ask for an email because they’re slammed, or because they assume this is just another generic dialer tool.”",
    ask: "“Which one was it for you? If it’s timing, when can I give you a 2-minute call, or would you prefer a 30-second Loom over Slack?”",
    tone: "Lighthearted, disarming tone. Smile while speaking to reduce combative resistance.",
  },
  vendor: {
    title: 'Existing Incumbent ("We already work with [Competitor]")',
    rate: "69.0%",
    ack: "“They’re a solid company! Many of our enterprise clients were using them for their base dialer architecture before testing our real-time copilot layer.”",
    reframe:
      "“We don’t ask teams to rip-and-replace. We integrate directly into their audio pipeline to provide real-time coaching triggers that their native platform doesn’t offer.”",
    ask: "“Are you completely locked in, or is your team open to running a 1-week pilot alongside your current setup to benchmark booked pipeline?”",
    tone: "Complimentary towards competitor. Respectful validation eliminates adversarial stance.",
  },
  "not-interested": {
    title: 'Immediate Rejection ("Not interested, take me off list")',
    rate: "54.8%",
    ack: "“Fair enough, I appreciate you being upfront with me right away.”",
    reframe:
      "“Just out of curiosity—is it that pipeline generation isn’t a priority for your team this quarter, or did I just catch you at a terrible moment walking into a meeting?”",
    ask: "“If it’s simply bad timing, can I try you back tomorrow at 10 AM, or should I take a hint and walk?”",
    tone: "Completely unbothered, radically honest. Detach from outcome to trigger respect.",
  },
  "next-quarter": {
    title: 'Timing Stall ("Reach back out next quarter")',
    rate: "81.4%",
    ack: "“Happy to put a note in my calendar for October 1st, no problem at all.”",
    reframe:
      "“Usually when people tell me next quarter, it means their team is overwhelmed rolling out current initiatives, rather than lacking demand for outbound results.”",
    ask: "“What specific milestone needs to happen on your end before this would become a priority worth a 15-minute sync?”",
    tone: "Consultative and exploratory. Gently uncovers hidden gating priorities.",
  },
};

const tabKeys = [
  { key: "expensive", label: "Too Expensive" },
  { key: "email", label: "Send Me An Email" },
  { key: "vendor", label: "We Have a Vendor" },
  { key: "not-interested", label: "Not Interested" },
  { key: "next-quarter", label: "Call Me Next Quarter" },
];

/* ------------------------------------------------------------------ */
/*  Progress bar data                                                  */
/* ------------------------------------------------------------------ */

const frequencyData = [
  {
    label: '1. "Just send an email" (42% volume)',
    rate: "74% Pivot Success",
    width: 74,
  },
  {
    label: '2. "Already working with competitor" (28% volume)',
    rate: "69% Pivot Success",
    width: 69,
  },
  {
    label: '3. "No budget / Too pricey" (18% volume)',
    rate: "63% Pivot Success",
    width: 63,
  },
  {
    label: '4. "Reach back out next quarter" (12% volume)',
    rate: "81% Pivot Success",
    width: 81,
  },
];

/* ------------------------------------------------------------------ */
/*  Hero script text                                                   */
/* ------------------------------------------------------------------ */

const heroScriptText =
  "“Totally understand, Marcus! Most teams we partner with actually kept their in-house reps solely focused on closing deals, using Dialeads to feed them warmed meetings on autopilot. Can I show you how in 3 minutes?”";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ObjectionRebuttalsPage() {
  const [activeTab, setActiveTab] = useState("expensive");
  const [copied, setCopied] = useState(false);

  const card = battlecards[activeTab];

  function handleCopy() {
    navigator.clipboard.writeText(heroScriptText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-32">
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#7c3aed 0.75px, transparent 0.75px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <Link
              href="/features"
              className="hover:text-primary transition-colors"
            >
              Features
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary font-semibold">
              Live Objection Rebuttals
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-light text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Real-Time Sales Copilot
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Live Objection Rebuttals.{" "}
                <br className="hidden sm:inline" />
                <span className="text-primary">Never Freeze</span> on a Call
                Again.
              </h1>

              <p className="text-lg text-gray-500 mb-8 max-w-xl">
                As soon as a prospect pushes back with price, competitor, or
                timing objections, our sub-200ms real-time audio copilot flashes
                battle-tested pivot scripts right before your eyes.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/live-demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Try Live Copilot Demo
                  <Zap className="h-4 w-4" />
                </Link>
                <a
                  href="#battlecards-library"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold transition-all border border-gray-200"
                >
                  <BookOpen className="h-4 w-4" />
                  View Battlecard Library
                </a>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-xs font-bold">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-bold">
                    SK
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold">
                    AL
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Trusted by sales teams running 180k+ objection turns daily.
                </p>
              </div>
            </div>

            {/* Right column - Live call mockup */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#131025] text-white rounded-xl shadow-xl overflow-hidden border border-white/10">
                {/* gradient bar */}
                <div className="h-1 bg-gradient-to-r from-primary via-purple-300 to-primary" />

                {/* call header */}
                <div className="p-4 lg:p-6 flex items-center justify-between bg-[#131025]/90">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-white">
                        Outbound Call: Marcus Vance
                      </span>
                      <span className="block text-xs text-zinc-400">
                        VP Sales Operations @ CloudStack
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full text-purple-300 text-xs font-semibold">
                    <Timer className="h-3.5 w-3.5" />
                    164ms Latency
                  </div>
                </div>

                {/* detected phrase */}
                <div className="px-4 lg:px-6 py-3 bg-white/[0.03] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-zinc-400 flex items-center gap-1">
                      <Ear className="h-3.5 w-3.5" /> Detected Prospect Phrase
                    </span>
                    <span className="text-xs text-emerald-400 font-medium">
                      98.4% Confidence
                    </span>
                  </div>
                  <p className="text-sm text-white italic pl-3 bg-white/5 py-2 rounded-lg">
                    &ldquo;We already have an in-house team for this, not really
                    looking outside right now.&rdquo;
                  </p>
                  {/* waveform */}
                  <div className="flex items-center gap-1.5 h-4 px-1">
                    <span className="w-1 bg-primary h-3 animate-pulse rounded-full" />
                    <span className="w-1 bg-primary h-4 animate-pulse rounded-full" />
                    <span className="w-1 bg-primary h-2 rounded-full" />
                    <span className="w-1 bg-primary h-3.5 animate-pulse rounded-full" />
                    <span className="w-1 bg-primary h-1 rounded-full" />
                    <span className="w-1 bg-purple-300 h-4 animate-pulse rounded-full" />
                    <span className="w-1 bg-purple-300 h-2.5 rounded-full" />
                    <span className="w-1 bg-purple-300 h-3 animate-pulse rounded-full" />
                    <span className="text-zinc-500 text-[10px] ml-2">
                      Audio Stream Analyzed
                    </span>
                  </div>
                </div>

                {/* battlecard */}
                <div className="p-4 lg:p-6 bg-white text-gray-900 m-4 rounded-xl shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary-light text-primary text-[10px] font-bold uppercase">
                        Battlecard
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        In-House Team Pivot
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-semibold">
                      <TrendingUp className="h-3.5 w-3.5" /> 73% Win
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="text-xs text-primary font-bold uppercase mb-1">
                      Recommended Response Script
                    </div>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      {heroScriptText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <Mic className="h-4 w-4 text-primary" />
                      Audio Whisper Mode:{" "}
                      <strong className="text-gray-900">Armed</strong>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-semibold inline-flex items-center gap-1 transition-all"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" /> Copy
                          </>
                        )}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold inline-flex items-center gap-1 shadow-sm transition-all">
                        <Megaphone className="h-4 w-4" />
                        Whisper to Rep
                      </button>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="px-4 lg:px-6 pb-4 flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    Next alternate: <em>Cost-per-pipeline reframe</em>
                  </span>
                  <span className="flex items-center gap-1 text-white cursor-pointer hover:text-purple-300">
                    Switch variant{" "}
                    <GitBranch className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENGINE ARCHITECTURE ===== */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="section-label">Engine Architecture</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1">
                Engineered for the Split-Second Sales Cycle
              </h2>
            </div>
            <p className="text-base text-gray-500 max-w-md mt-4 md:mt-0">
              Objection handling is won or lost in half a second. Here is how
              Dialeads orchestrates sub-second intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-sm">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Instant Transcription &amp; Sentiment
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                Zero-lag streaming speech-to-text with tone and cadence
                evaluation. Captures intent before the prospect finishes their
                sentence.
              </p>
              <div className="bg-white p-3 rounded-lg flex items-center justify-between text-gray-500 text-xs font-semibold">
                <span>Average STT speed</span>
                <span className="font-bold text-primary">120ms</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-sm">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Smart Playbook Engine
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                Build bespoke battlecards mapped across industries, pricing
                models, product tiers, and named tier-1 competitors.
              </p>
              <div className="bg-white p-3 rounded-lg flex items-center justify-between text-gray-500 text-xs font-semibold">
                <span>Configurable triggers</span>
                <span className="font-bold text-primary">Unlimited</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Dynamic AI Script Adaptation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                No robotic recitations. Rebuttals dynamically re-anchor around
                specific context cues like company size, previous remarks, and
                vocal state.
              </p>
              <div className="bg-white p-3 rounded-lg flex items-center justify-between text-gray-500 text-xs font-semibold">
                <span>Personalization depth</span>
                <span className="font-bold text-primary">Real-Time LLM</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-hero-bg text-white flex items-center justify-center mb-6 shadow-sm">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Team Objection Heatmaps
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                Aggregate frequency-diagnostic dashboards identifying where deals choke,
                which objections are trending, and which reps master the turn.
              </p>
              <div className="bg-white p-3 rounded-lg flex items-center justify-between text-gray-500 text-xs font-semibold">
                <span>Reporting cadence</span>
                <span className="font-bold text-primary">Continuous</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE OBJECTION PLAYBOOK ===== */}
      <section className="w-full py-24 bg-gray-50" id="battlecards-library">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label">Battlecard Matrix</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 mb-3">
              Interactive Objection Playbook
            </h2>
            <p className="text-base text-gray-500">
              Explore how Dialeads structures objection pivots into a proven
              3-phase progression:{" "}
              <span className="text-gray-900 font-medium">Acknowledge</span>,{" "}
              <span className="text-gray-900 font-medium">Reframe</span>, and{" "}
              <span className="text-gray-900 font-medium">
                Low-Friction Ask
              </span>
              .
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {tabKeys.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === t.key
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white hover:bg-gray-100 text-gray-500 border border-gray-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Card content */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg relative">
            <div className="flex flex-col gap-8">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <span className="text-[10px] font-bold uppercase text-primary tracking-wider">
                    Objection Category
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <span className="text-xs text-gray-500 font-semibold">
                    Historical Reversal Rate:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-bold">
                    {card.rate}
                  </span>
                </div>
              </div>

              {/* 3-phase cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <span className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <span className="text-lg font-bold">Acknowledge</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-2">
                    De-escalate tension
                  </p>
                  <p className="text-sm text-gray-900 flex-1">{card.ack}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <span className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <span className="text-lg font-bold">Reframe</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-2">
                    Shift perceived cost
                  </p>
                  <p className="text-sm text-gray-900 flex-1">
                    {card.reframe}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <span className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <span className="text-lg font-bold">Low-Friction Ask</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-2">
                    Zero-risk micro commitment
                  </p>
                  <p className="text-sm text-gray-900 flex-1">{card.ask}</p>
                </div>
              </div>

              {/* AI tone bar */}
              <div className="p-4 rounded-xl bg-[#131025] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">
                      Voice AI Tone Recommendation
                    </span>
                    <span className="block text-xs text-zinc-400">
                      {card.tone}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold inline-flex items-center gap-1 transition-all whitespace-nowrap">
                  <PlayCircle className="h-4 w-4" />
                  Listen to Pro Rep Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT TELEMETRY ===== */}
      <section className="w-full py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-5">
              <span className="section-label">Quantified Impact</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 mb-4">
                Telemetry Built for Revenue Leaders
              </h2>
              <p className="text-base text-gray-500 mb-8">
                Dialeads monitors rep behavioral responses in real time, scoring
                objection turnaround velocity and turning your mid-tier sales
                reps into quota crushers.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-light text-primary flex items-center justify-center text-xl font-bold shrink-0">
                    +41%
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      Higher Objection Win-Rate
                    </h4>
                    <p className="text-sm text-gray-500">
                      Across audited sales cycles in SaaS, FinTech, and Logistics
                      outbound motions.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold shrink-0">
                    65%
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      Faster Ramp Time for SDRs
                    </h4>
                    <p className="text-sm text-gray-500">
                      New hires hit full quota within 18 days instead of the
                      standard 52-day window.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 text-gray-900 flex items-center justify-center text-xl font-bold shrink-0">
                    10k+
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">
                      Battle-Tested Dial Prompts
                    </h4>
                    <p className="text-sm text-gray-500">
                      Pre-indexed objection heuristics curated from over 5,000,000 cold
                      call transcripts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - chart */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Live Team Objection Frequency &amp; Win-Matrix
                    </h3>
                    <p className="text-sm text-gray-500">
                      Real-time team analytics for outbound SDR org
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded bg-primary-light text-primary text-xs font-semibold">
                    Past 30 Days
                  </span>
                </div>

                <div className="space-y-4">
                  {frequencyData.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-gray-900">{item.label}</span>
                        <span className="text-primary font-bold">
                          {item.rate}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${item.width}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-6 w-6 text-primary" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">
                        Automated CRM Tagging
                      </span>
                      <p className="text-sm text-gray-500">
                        Every pushback automatically logged to HubSpot &amp;
                        Salesforce opportunities.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="w-full py-32 bg-hero-bg text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#d2bbff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-4">
            Deploy in 6 Minutes
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Turn Tough Pushbacks into Booked Meetings with AI Copilot
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Arm every sales representative with conversational reflexes powered
            by millions of winning cold call data points. Plug into Zoom,
            Outreach, or dial directly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-trial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Free 14-Day Copilot Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
            >
              Schedule Leadership Demo
            </Link>
          </div>

          <p className="text-xs text-zinc-500 mt-6">
            SOC2 Type II Certified &middot; 10k+ Battle-Tested Objection Heuristics
          </p>
        </div>
      </section>
    </>
  );
}
