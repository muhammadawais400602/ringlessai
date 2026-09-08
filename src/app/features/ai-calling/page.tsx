"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Activity,
  ChevronRight,
  ShieldCheck,
  Zap,
  Shield,
  PlayCircle,
  PauseCircle,
  Timer,
  Voicemail,
  Cpu,
  Send,
  Database,
  Phone,
  Brain,
  GitFork,
  RefreshCw,
  ArrowRight,
  XCircle,
  X,
  CheckCircle,
  Check,
  Star,
  Play,
  Pause,
  Contact,
  Calendar,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Voice profile data                                                */
/* ------------------------------------------------------------------ */
const voiceProfiles = [
  {
    initials: "AE",
    name: "Adam",
    style: "Executive · Deep Pitch",
    region: "North American",
    desc: "Calm, authoritative cadence tailored for enterprise VP & C-Suite outbound conversations.",
    pitch: { label: "Pitch Baseline", value: "88 Hz", pct: 45 },
    cadence: { label: "Cadence Rate", value: "148 wpm", pct: 62 },
    avatarBg: "bg-primary",
  },
  {
    initials: "SC",
    name: "Sarah",
    style: "Conversational · Warm",
    region: "Mid-Atlantic",
    desc: "Natural, empathetic tone designed for mid-market relationship building and discovery calls.",
    pitch: { label: "Pitch Baseline", value: "210 Hz", pct: 72 },
    cadence: { label: "Cadence Rate", value: "155 wpm", pct: 68 },
    avatarBg: "bg-primary-dark",
  },
  {
    initials: "MD",
    name: "Marcus",
    style: "Direct · High Precision",
    region: "British Crisp",
    desc: "Pithy, clear diction for fintech, cybersecurity, and engineering leadership qualification.",
    pitch: { label: "Pitch Baseline", value: "105 Hz", pct: 52 },
    cadence: { label: "Cadence Rate", value: "162 wpm", pct: 76 },
    avatarBg: "bg-gray-900",
  },
  {
    initials: "EH",
    name: "Elena",
    style: "High-Energy · Fast Closer",
    region: "West Coast US",
    desc: "Dynamic, cheerful momentum perfect for high-velocity SMB and transactional sales cadences.",
    pitch: { label: "Pitch Baseline", value: "235 Hz", pct: 82 },
    cadence: { label: "Cadence Rate", value: "170 wpm", pct: 85 },
    avatarBg: "bg-primary",
  },
];

/* ------------------------------------------------------------------ */
/*  Waveform bar heights                                              */
/* ------------------------------------------------------------------ */
const waveHeights = [
  "h-3", "h-7", "h-10", "h-5", "h-11", "h-8", "h-4", "h-12",
  "h-9", "h-6", "h-10", "h-4", "h-7", "h-11", "h-5", "h-3",
];
const waveColors = [
  "bg-primary", "bg-primary", "bg-purple-300", "bg-primary",
  "bg-purple-300", "bg-primary", "bg-primary", "bg-purple-300",
  "bg-primary", "bg-primary", "bg-purple-300", "bg-primary",
  "bg-primary", "bg-purple-300", "bg-primary", "bg-primary",
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */
export default function AiCallingPage() {
  /* Hero sample button */
  const [heroPlaying, setHeroPlaying] = useState(false);

  useEffect(() => {
    if (!heroPlaying) return;
    const t = setTimeout(() => setHeroPlaying(false), 8000);
    return () => clearTimeout(t);
  }, [heroPlaying]);

  /* Voice studio – which card is playing */
  const [activeVoice, setActiveVoice] = useState<number | null>(null);

  useEffect(() => {
    if (activeVoice === null) return;
    const t = setTimeout(() => setActiveVoice(null), 4000);
    return () => clearTimeout(t);
  }, [activeVoice]);

  const toggleVoice = useCallback(
    (idx: number) => {
      setActiveVoice((prev) => (prev === idx ? null : idx));
    },
    []
  );

  /* 1-Click drop simulation */
  const [dropState, setDropState] = useState<"idle" | "dropping" | "done">("idle");

  const handleDrop = useCallback(() => {
    if (dropState !== "idle") return;
    setDropState("dropping");
    setTimeout(() => {
      setDropState("done");
      setTimeout(() => setDropState("idle"), 2500);
    }, 1200);
  }, [dropState]);

  return (
    <div className="flex flex-col w-full">
      {/* ============================================================ */}
      {/* HERO SECTION                                                  */}
      {/* ============================================================ */}
      <section className="relative w-full overflow-hidden bg-gray-50 pb-24">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-primary-dark/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 pt-8 text-gray-600 text-xs font-semibold tracking-wide">
            <Link href="/features" className="transition-colors hover:text-primary">
              Features
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-semibold">
              Autonomous AI Cold Calling &amp; Voicemail Drop
            </span>
          </nav>

          {/* Hero grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-center">
            {/* Copy column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1 mb-6 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                  Voice Agent &amp; Voicemail Infrastructure
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[56px] leading-[1.08] font-bold tracking-tight text-gray-900 mb-6">
                Autonomous AI Cold Calling &amp; Instant{" "}
                <span className="text-primary">Voicemail Drop</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-2xl mb-12 leading-relaxed">
                Deploy ultra-realistic conversational voice agents that dial
                thousands of leads, converse naturally with human-like sub-500ms
                latency, handle objections, and drop personalized voicemails in
                one click.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                >
                  Start Free 14-Day Trial
                  <Zap className="h-[18px] w-[18px]" />
                </Link>

                <button
                  onClick={() => setHeroPlaying((p) => !p)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-gray-900 shadow-sm transition-all ${
                    heroPlaying
                      ? "bg-primary-light"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {heroPlaying ? (
                    <PauseCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <PlayCircle className="h-5 w-5 text-primary" />
                  )}
                  {heroPlaying
                    ? "Playing Sarah Sample (00:08)..."
                    : "Listen to Sample Audio (12s)"}
                </button>
              </div>

              {/* Micro badges */}
              <div className="flex flex-wrap items-center gap-6 pt-12 mt-6 text-gray-600 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-[18px] w-[18px] text-primary" />
                  <span>STIR/SHAKEN Tier-A Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-[18px] w-[18px] text-primary" />
                  <span>Sub-500ms Audio Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-[18px] w-[18px] text-primary" />
                  <span>100% TCPA Compliant</span>
                </div>
              </div>
            </div>

            {/* Hero visual mockup (right column) */}
            <div className="lg:col-span-5 relative">
              {/* Glass glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/20 to-primary-light/30 blur-xl" />

              <div className="relative rounded-2xl bg-[#213145] text-gray-100 p-6 shadow-xl overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-purple-300 to-primary-dark" />

                {/* Call top bar */}
                <div className="flex items-center justify-between pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-xl font-semibold tracking-tight text-white">
                      Live Dial Session
                    </span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                      Node #042
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/30 px-3 py-1 text-purple-300 text-xs font-semibold">
                    <Timer className="h-3.5 w-3.5" />
                    <span>00:41</span>
                  </div>
                </div>

                {/* Lead banner */}
                <div className="flex items-center justify-between bg-white/5 rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
                      DW
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] leading-tight text-white">
                        David Wright
                      </h4>
                      <p className="text-xs text-gray-400">
                        VP Sales Ops · FinScale Technologies
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-md bg-emerald-950/70 text-emerald-300 text-xs font-semibold px-2 py-0.5">
                      High Intent
                    </span>
                    <p className="text-[11px] text-gray-500 pt-0.5">
                      SFDC Record #90214
                    </p>
                  </div>
                </div>

                {/* Waveform & telemetry */}
                <div className="rounded-xl bg-white/5 p-4 mb-4">
                  <div className="flex items-center justify-between mb-2 text-[11px] text-gray-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Cpu className="h-3.5 w-3.5 text-purple-300" />
                      ElevenLabs Turbo v2.5
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      <Zap className="h-3.5 w-3.5" />
                      &lt; 24ms Synth Latency
                    </span>
                  </div>
                  {/* Animated waveform bars */}
                  <div className="flex items-end justify-between gap-1 h-12 py-1 px-2 bg-white/5 rounded-lg">
                    {waveHeights.map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 ${waveColors[i]} rounded-full ${h} animate-pulse`}
                        style={{ animationDelay: `${i * 120}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcript feed */}
                <div className="space-y-2 text-[13px] mb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    <span className="text-gray-400 font-bold block text-[11px] uppercase tracking-wider mb-0.5">
                      Prospect (00:27):
                    </span>
                    <p className="text-white text-sm leading-snug">
                      &ldquo;We use Outreach right now. How does this fit into
                      our current sales sequences?&rdquo;
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-primary/20">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-purple-300 font-bold text-[11px] uppercase tracking-wider">
                        AI Voice Agent (Elena High-Energy):
                      </span>
                      <span className="text-[10px] text-gray-500">
                        Context Match: 99.1%
                      </span>
                    </div>
                    <p className="text-white text-sm leading-snug">
                      &ldquo;Totally get that, David. Vocalis integrates
                      natively into Outreach steps—we trigger direct branch
                      calling, auto-log dispositions, and sync recording links
                      instantly.&rdquo;
                    </p>
                  </div>
                </div>

                {/* AMD & Drop trigger */}
                <div className="rounded-xl bg-white/10 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                      <Voicemail className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[13px] text-white">
                          Auto-AMD Engine
                        </span>
                        <span className="rounded bg-primary/40 text-[10px] text-purple-300 px-1 font-semibold">
                          99.4% Accurate
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Voicemail beep detected via audio cadence analysis
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleDrop}
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm transition-colors ${
                      dropState !== "idle"
                        ? "bg-primary text-white"
                        : "bg-white text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <Send className="h-3.5 w-3.5 text-primary" />
                    <span>
                      {dropState === "idle" && "1-Click Drop"}
                      {dropState === "dropping" && "Dropping Audio Note..."}
                      {dropState === "done" && "Voicemail Delivered ✓"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* KEY CAPABILITIES (3 columns)                                  */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Unfair Speed Advantage
            </span>
            <h2 className="text-[40px] leading-[44px] font-bold tracking-tight text-gray-900">
              Architected for Extreme Conversation Realism
            </h2>
            <p className="text-base text-gray-600 mt-3">
              Eliminate the robotic pause that reveals synthetic callers. Vocalis
              speaks, interrupts, and listens like a top-performing enterprise
              BDR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6 shadow-sm">
                <Zap className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                Instant Voice Synthesis
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sub-500ms Latency Pipeline
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Proprietary WebSockets audio streaming routed over a dedicated
                Telnyx SIP backbone. Conversational turn-taking occurs within
                human latency bounds—eradicating silence and awkward caller
                overlaps.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <span>Learn about audio routing</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6 shadow-sm">
                <Activity className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                Acoustic Machine Intelligence
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Intelligent AMD &amp; Beep Sniffer
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                99.4% precision Answering Machine Detection. Vocalis calculates
                millisecond tone frequencies, waits for the tone to terminate
                completely, and cleanly injects tailored voicemail notes.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <span>Review AMD benchmarks</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6 shadow-sm">
                <Contact className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                Hyper-Contextual AI
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Dynamic CRM Lead Synthesis
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                The agent speaks prospect first names, tech stacks, latest
                funding rounds, or recent job changes sourced live from HubSpot,
                Salesforce, and Apollo right as the connection rings.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <span>Explore data injection specs</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ARCHITECTURE DEEP DIVE                                        */}
      {/* ============================================================ */}
      <section className="w-full bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
                Engineered For Zero Jitter
              </span>
              <h2 className="text-[40px] leading-[44px] font-bold tracking-tight text-gray-900">
                End-to-End Autonomous Calling Architecture
              </h2>
            </div>
            <p className="text-base text-gray-600 max-w-md">
              How Vocalis processes high-volume outbound queues from lead
              injection to disposition sync in sub-second round trips.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="rounded-2xl bg-white p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <div className="rounded-xl bg-gray-50 p-6 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 01
                  </span>
                  <Database className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    CRM Lead Queue
                  </h4>
                  <p className="text-sm text-gray-600">
                    Batched contact records stream from HubSpot, Salesforce, or
                    CSV with full firmographic metadata.
                  </p>
                </div>
                <div className="mt-4 pt-3 text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 10k
                  Records/Min
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl bg-gray-50 p-6 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 02
                  </span>
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Telnyx SIP Trunk
                  </h4>
                  <p className="text-sm text-gray-600">
                    Global carrier connectivity with Tier-A local caller ID
                    rotation, 10DLC compliance, and auto-carrier failover.
                  </p>
                </div>
                <div className="mt-4 pt-3 text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />{" "}
                  99.99% Uptime
                </div>
              </div>

              {/* Step 3 – highlighted */}
              <div className="rounded-xl bg-primary p-6 text-white flex flex-col justify-between shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                    Step 03
                  </span>
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    LLM + ElevenLabs
                  </h4>
                  <p className="text-sm text-purple-200">
                    Low-latency acoustic tokenizer evaluates prospect reply and
                    synthesizes adaptive human tone in &lt;180ms.
                  </p>
                </div>
                <div className="mt-4 pt-3 text-[11px] font-semibold text-white flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />{" "}
                  Active Inference
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl bg-gray-50 p-6 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 04
                  </span>
                  <GitFork className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Dual Path Branch
                  </h4>
                  <p className="text-sm text-gray-600">
                    Routes immediately: Live 2-way qualification conversation OR
                    instant voicemail drop upon machine beep detection.
                  </p>
                </div>
                <div className="mt-4 pt-3 text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />{" "}
                  Dynamic Routing
                </div>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl bg-gray-50 p-6 flex flex-col justify-between group hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Step 05
                  </span>
                  <RefreshCw className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Instant Logging
                  </h4>
                  <p className="text-sm text-gray-600">
                    Call audio, time-stamped transcription, sentiment markers,
                    and meeting bookings write back into CRM.
                  </p>
                </div>
                <div className="mt-4 pt-3 text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{" "}
                  0-Latency Sync
                </div>
              </div>
            </div>

            {/* Telemetry stat strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 bg-gray-50/50 rounded-xl p-6">
              <div>
                <span className="text-gray-600 text-xs font-semibold block mb-1">
                  WebSocket Protocol
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  Dual Full-Duplex
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-xs font-semibold block mb-1">
                  Packet Jitter Buffering
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  &lt; 1.2ms Avg
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-xs font-semibold block mb-1">
                  Caller ID Health Pool
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  Spam Shield 100%
                </span>
              </div>
              <div>
                <span className="text-gray-600 text-xs font-semibold block mb-1">
                  Audio Codec Standard
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  Opus 48kHz HD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VOICE STUDIO                                                  */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Voice Studio
            </span>
            <h2 className="text-[40px] leading-[44px] font-bold tracking-tight text-gray-900">
              Engineered Voice Profiles Built For High Trust
            </h2>
            <p className="text-base text-gray-600 mt-3">
              Select from tested neural profiles tuned for executive objection
              handling, warm consultative outreach, or fast-paced transactional
              sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voiceProfiles.map((v, idx) => (
              <div
                key={v.name}
                className="rounded-2xl bg-gray-50 p-6 flex flex-col justify-between hover:bg-gray-100 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${v.avatarBg} text-white flex items-center justify-center font-semibold text-lg`}
                    >
                      {v.initials}
                    </div>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-gray-600">
                      {v.region}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{v.name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3">
                    {v.style}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">{v.desc}</p>

                  {/* Meters */}
                  <div className="space-y-2 mb-6 text-xs font-semibold">
                    <div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>{v.pitch.label}</span>
                        <span className="font-semibold text-gray-900">
                          {v.pitch.value}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-dark rounded-full"
                          style={{ width: `${v.pitch.pct}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-600 mb-1">
                        <span>{v.cadence.label}</span>
                        <span className="font-semibold text-gray-900">
                          {v.cadence.value}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${v.cadence.pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleVoice(idx)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-gray-900 text-sm font-semibold hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  {activeVoice === idx ? (
                    <>
                      <Pause className="h-[18px] w-[18px]" />
                      <span>Playing Audio...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-[18px] w-[18px]" />
                      <span>Sample {v.name}</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VOICEMAIL COMPARISON MATRIX                                    */}
      {/* ============================================================ */}
      <section className="w-full bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Voicemail Intelligence
            </span>
            <h2 className="text-[40px] leading-[44px] font-bold tracking-tight text-gray-900">
              Generic Audio Drops vs. AI Dynamic Voicemail
            </h2>
            <p className="text-base text-gray-600 mt-3">
              Traditional autodialers blast robotic audio files that get deleted
              in 2 seconds. Vocalis drops customized voice notes in your exact
              cloned tone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old way */}
            <div className="rounded-2xl bg-gray-100 p-12">
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <XCircle className="h-6 w-6" />
                <span className="text-xl font-semibold">
                  Standard Pre-Recorded Drops
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-8">
                Legacy dialers playing static pre-uploaded MP3 files when
                answering machines pick up.
              </p>
              <ul className="space-y-4 text-base text-gray-600">
                {[
                  {
                    bold: "Zero personal context:",
                    text: 'Uses generic greetings like "Hey there!" without lead name, company name, or relevance.',
                  },
                  {
                    bold: "Premature audio cutoff:",
                    text: "Plays over the voicemail greeting because legacy AMD cannot accurately identify the end tone.",
                  },
                  {
                    bold: "3-5% Callback Rates:",
                    text: "Leads instantly recognize mass-blast voicemails and flag caller ID as spam.",
                  },
                  {
                    bold: "Rep mismatch:",
                    text: "Audio sounds radically different if the prospect unexpectedly answers the phone live.",
                  },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-gray-900">{item.bold}</strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vocalis way */}
            <div className="rounded-2xl bg-primary/10 p-12 shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-4">
                <CheckCircle className="h-6 w-6" />
                <span className="text-xl font-semibold">
                  Vocalis Dynamic Voicemail Drops
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-8">
                Real-time synthesized voice clips created on-the-fly
                specifically for the individual prospect.
              </p>
              <ul className="space-y-4 text-base text-gray-900">
                {[
                  {
                    bold: "Dynamic firmographic injection:",
                    text: '"Hey David, saw FinScale just raised Series B—wanted to check your sales tooling..."',
                  },
                  {
                    bold: "Cadence-locked beep detection:",
                    text: "Pauses cleanly, waits for the tone drop, and injects voice note with 99.4% precision.",
                  },
                  {
                    bold: "34% Verified Callback Rate:",
                    text: "Prospects believe the rep spent 60 seconds personally crafting the message.",
                  },
                  {
                    bold: "Voice cloning parity:",
                    text: "Uses the exact cloned vocal signature whether dropped on voicemail or conversing live.",
                  },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>
                      <strong className="text-gray-900">{item.bold}</strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CUSTOMER RESULTS & SOCIAL PROOF                               */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Metrics */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                Proven Conversion Metrics
              </span>
              <h2 className="text-[40px] leading-[44px] font-bold tracking-tight text-gray-900">
                Cold Calling Scaled Without Hiring 20 Extra SDRs
              </h2>
              <p className="text-base text-gray-600">
                Revenue teams deploy Vocalis to conduct 200+ intelligent live
                conversations daily per rep, automating top-of-funnel outreach
                without losing authenticity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    stat: "4.8x",
                    desc: "More live conversations per outbound rep per week",
                  },
                  {
                    stat: "89%",
                    desc: "Answering machine accuracy with zero false-hangup drops",
                  },
                  {
                    stat: "34%",
                    desc: "Average voicemail callback and direct email reply rate",
                  },
                ].map((m) => (
                  <div key={m.stat} className="rounded-xl bg-gray-50 p-4">
                    <div className="text-4xl font-bold text-primary tracking-tight">
                      {m.stat}
                    </div>
                    <p className="text-xs font-semibold text-gray-600 mt-1">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-gray-50 p-12 relative shadow-md">
                <div className="flex items-center gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-xl font-semibold text-gray-900 leading-snug mb-8">
                  &ldquo;We ran a side-by-side test with 5 BDRs dialing
                  manually versus 1 Vocalis Autonomous Agent. In 10 days, the AI
                  voice agent held 1,420 live conversations and booked 68
                  qualified demos. Prospects had no idea it wasn&rsquo;t a human
                  calling.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  {/* Placeholder avatar with initials */}
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shadow-sm">
                    JV
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-900">
                      Julian Vance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Head of Global Outbound · CloudScale Analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA BOTTOM BANNER                                             */}
      {/* ============================================================ */}
      <section className="w-full bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="relative rounded-3xl bg-primary text-white p-12 md:p-24 overflow-hidden shadow-xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-200 block mb-3">
                Zero Setup Overhead
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
                Ready to let AI handle your first 5,000 cold calls?
              </h2>
              <p className="text-lg text-purple-200 max-w-2xl mb-12">
                Integrate your CRM in 4 minutes, clone your top closer&apos;s
                voice, and begin streaming intelligent outbound campaigns today
                with full 10DLC compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-8 py-4 text-sm font-semibold shadow-md hover:bg-gray-100 transition-all"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-dark/60 text-white px-6 py-4 text-sm font-semibold hover:bg-primary-dark/80 transition-all"
                >
                  <Calendar className="h-[18px] w-[18px]" />
                  Book Architecture Demo
                </Link>
              </div>

              <p className="mt-6 text-[13px] text-purple-200/80 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                No credit card required · 50 free dialed minutes included ·
                Pre-configured voice templates
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
