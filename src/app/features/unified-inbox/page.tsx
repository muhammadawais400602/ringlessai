"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Inbox,
  FolderOpen,
  Search,
  Phone,
  PhoneForwarded,
  Share,
  Paperclip,
  Mic,
  Send,
  Play,
  Pause,
  CheckCircle,
  CheckCheck,
  ArrowDown,
  Zap,
  Activity,
  AudioLines,
  PhoneCall,
  Sparkles,
  Brain,
  ListChecks,
  RefreshCw,
  Gauge,
  Network,
  Headset,
  Settings2,
  MoreHorizontal,
  EyeOff,
  BadgeCheck,
  Voicemail,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Cable,
  AtSign,
  LockOpen,
  CalendarPlus,
  FileText,
  Bot,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Audio Player State Hook                                            */
/* ------------------------------------------------------------------ */

function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(94); // starts at 01:34
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const formatTime = useCallback((s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }, []);

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => (prev >= 252 ? 94 : prev + 1));
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return { isPlaying, seconds, formatTime, toggle };
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function UnifiedInboxPage() {
  const { isPlaying, seconds, formatTime, toggle } = useAudioPlayer();

  return (
    <div className="flex flex-col w-full">
      {/* ── Breadcrumb & Live Ticker ── */}
      <div className="w-full bg-gray-50 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-gray-500 text-xs font-semibold">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link
              href="/features"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <FolderOpen className="h-4 w-4" />
              Features
            </Link>
            <span className="text-gray-300 font-bold">/</span>
            <span className="text-primary font-semibold">
              Unified Operator Inbox
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-primary-light/60 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              TELNYX WEBRTC ACTIVE
            </span>
            <span className="text-gray-500 text-sm">
              Zero Latency Global Gateway
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Header Block ── */}
      <section className="relative w-full bg-white pt-16 pb-24 px-4 lg:px-8 overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute -right-32 top-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -bottom-24 w-80 h-80 rounded-full bg-gray-200/40 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Inbox className="h-4 w-4" />
            CONSOLIDATED COMMS &amp; CALL HISTORY
          </div>

          {/* Main Headline */}
          <h1 className="font-extrabold text-3xl lg:text-[56px] lg:leading-[60px] text-gray-900 tracking-tight max-w-4xl mx-auto mb-6">
            Unified Operator Inbox. All Calls, Texts, and Notes in One Stream.
          </h1>

          {/* Subtitle */}
          <p className="text-lg leading-7 text-gray-600 max-w-3xl mx-auto mb-12">
            Eliminate tab fatigue. Review call recordings with audio scrubbers,
            read AI-generated transcripts, manage SMS &amp; WhatsApp replies, and
            view CRM contact details without leaving a single screen.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/free-trial"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all"
            >
              Try Unified Inbox
              <Zap className="h-[18px] w-[18px]" />
            </Link>
            <a
              href="#core-capabilities"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-sm transition-colors"
            >
              Explore Features
              <ArrowDown className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* ── High-Fidelity 3-Column Operator Inbox Mockup ── */}
          <div className="w-full max-w-6xl text-left bg-white rounded-2xl shadow-2xl p-1 sm:p-2">
            {/* App Window Header Bar */}
            <div className="w-full bg-gray-100 rounded-t-xl px-4 py-2 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Operator Station — Session #US-8841-B
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <span className="flex items-center gap-1 text-primary text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  Live Audio Channel Active
                </span>
                <div className="h-4 w-px bg-gray-300" />
                <Headset className="h-[18px] w-[18px]" />
                <Settings2 className="h-[18px] w-[18px]" />
              </div>
            </div>

            {/* 3-Column Inner Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-gray-50 rounded-b-xl overflow-hidden min-h-[620px]">
              {/* Column 1: Queue Stream (Left) */}
              <div className="lg:col-span-3 bg-white flex flex-col p-3">
                <div className="flex items-center justify-between mb-3 px-1 pt-1">
                  <h2 className="font-bold text-xl text-gray-900">
                    Queue Stream
                  </h2>
                  <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                    14 New
                  </span>
                </div>
                {/* Search */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-2.5 h-[18px] w-[18px] text-gray-400" />
                  <input
                    className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    placeholder="Search accounts, dials..."
                    readOnly
                    type="text"
                  />
                </div>
                {/* Thread Items */}
                <div className="flex flex-col gap-1 overflow-y-auto">
                  {/* Active Item */}
                  <div className="p-3 rounded-xl bg-gray-100 shadow-sm cursor-pointer">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                          LB
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                            Carlos Ortiz
                            <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div className="text-xs text-gray-500">
                            La Barca Restaurant
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-xs font-semibold">
                        10:42 AM
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold bg-primary-light px-2 py-0.5 rounded">
                        <PhoneCall className="h-3.5 w-3.5" /> 04:12
                      </span>
                      <span className="text-gray-500 text-xs truncate">
                        &ldquo;Interested in zero-commission...&rdquo;
                      </span>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-bold">
                          NW
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            Nadine Wu
                          </div>
                          <div className="text-xs text-gray-500">
                            Apex Capital Corp
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-xs font-semibold">
                        09:18 AM
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="inline-flex items-center gap-1 text-gray-500 text-xs font-semibold">
                        <MessageSquare className="h-3.5 w-3.5" /> SMS inbound
                      </span>
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold">
                          TK
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            Tariq Khan
                          </div>
                          <div className="text-xs text-gray-500">
                            LogiCore Transport
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-500 text-xs font-semibold">
                        Yesterday
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-purple-600 text-xs font-semibold">
                        <Voicemail className="h-3.5 w-3.5" /> Voicemail 0:48
                      </span>
                    </div>
                  </div>
                </div>
                {/* Bottom Dialer Quick Trigger */}
                <div className="mt-auto pt-3">
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm">
                    <Phone className="h-[18px] w-[18px]" />
                    Launch WebRTC Pad
                  </button>
                </div>
              </div>

              {/* Column 2: Active Stream Timeline (Center) */}
              <div className="lg:col-span-6 bg-gray-50 flex flex-col p-4">
                {/* Active Thread Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      CO
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900 flex items-center gap-2">
                        Carlos Ortiz — Owner &amp; GM
                      </div>
                      <div className="text-gray-500 text-xs flex items-center gap-2">
                        <Phone className="h-3.5 w-3.5" /> +1 (512) 809-3321
                        <span>&bull;</span> Austin, TX
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-primary transition-colors"
                      title="Trigger Instant WebRTC Call"
                    >
                      <PhoneForwarded className="h-5 w-5" />
                    </button>
                    <button
                      className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
                      title="Export Thread"
                    >
                      <Share className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Conversation Stream Log */}
                <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                  {/* Call Event Card with Scrubber */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center">
                          <Phone className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          Completed Inbound Call (Telnyx High-Definition)
                        </span>
                      </div>
                      <span className="text-gray-500 text-xs font-semibold">
                        10:42 AM
                      </span>
                    </div>
                    {/* Interactive Audio Player Module */}
                    <div className="bg-gray-100 rounded-lg p-3 my-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggle}
                            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-transform active:scale-95 shadow-sm"
                          >
                            {isPlaying ? (
                              <Pause className="h-[18px] w-[18px]" />
                            ) : (
                              <Play className="h-[18px] w-[18px]" />
                            )}
                          </button>
                          <span className="text-xs font-semibold text-gray-900">
                            {formatTime(seconds)} / 04:12
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="px-2 py-0.5 rounded bg-white text-gray-900 text-[10px] font-bold uppercase hover:bg-primary hover:text-white transition-colors">
                            1.0x
                          </button>
                          <button className="px-2 py-0.5 rounded bg-white text-primary font-bold text-[10px] uppercase">
                            1.5x
                          </button>
                          <button className="px-2 py-0.5 rounded bg-white text-gray-900 text-[10px] font-bold uppercase hover:bg-primary hover:text-white transition-colors">
                            2.0x
                          </button>
                        </div>
                      </div>
                      {/* Waveform Bars */}
                      <div className="w-full flex items-center gap-0.5 py-1">
                        {[3, 5, 8, 4, 9, 10, 7, 5, 11, 12, 8, 6, 10].map(
                          (h, i) => (
                            <div
                              key={`played-${i}`}
                              className="w-1 bg-primary rounded-full"
                              style={{ height: `${h * 3}px` }}
                            />
                          )
                        )}
                        {/* Current Position */}
                        <div className="w-1.5 bg-primary-dark rounded-full ring-2 ring-primary/20 h-9" />
                        {/* Remaining */}
                        {[8, 6, 11, 7, 4, 9, 5, 8, 3, 6].map((h, i) => (
                          <div
                            key={`unplayed-${i}`}
                            className="w-1 bg-gray-300/60 rounded-full"
                            style={{ height: `${h * 3}px` }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Synced Transcript Excerpt */}
                    <div className="text-xs text-gray-500 space-y-1 pt-1">
                      <p>
                        <span className="text-xs font-semibold text-primary">
                          AI Agent [01:28]:
                        </span>{" "}
                        &ldquo;Carlos, our platform bypasses aggregator fees
                        entirely. You keep 100% of order totals.&rdquo;
                      </p>
                      <p className="bg-primary-light/40 p-2 rounded">
                        <span className="text-xs font-semibold text-gray-900">
                          Carlos [01:34]:
                        </span>{" "}
                        &ldquo;That&apos;s huge for us. We&apos;re spending
                        $3,400 monthly just in third-party dispatch fees. Send
                        me the pilot proposal.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* AI Conversation Summary Card */}
                  <div className="bg-primary-light/50 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-1 text-primary text-sm font-semibold">
                      <Sparkles className="h-[18px] w-[18px]" />
                      AI Executive Takeaway
                    </div>
                    <p className="text-xs text-gray-900 mb-2">
                      Prospect highly motivated by zero-commission model.
                      Operating 2 dining locations with current commission bleed
                      of ~$3.4k/mo.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-gray-500 text-xs font-semibold">
                      <span className="bg-white px-2 py-0.5 rounded shadow-sm text-primary font-semibold">
                        Action: Send custom deck
                      </span>
                      <span className="bg-white px-2 py-0.5 rounded shadow-sm text-gray-900">
                        Scheduled: Tomorrow @ 10:00 AM CST
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Chat Bubble */}
                  <div className="flex flex-col gap-1 items-end">
                    <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-md shadow-sm">
                      <p className="text-xs">
                        Hi Carlos! Just sent the demo link and fee comparisons
                        to your email. Talk tomorrow at 10 AM!
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mr-1">
                      <CheckCheck className="h-3.5 w-3.5 text-primary" />{" "}
                      Delivered via WhatsApp &bull; 10:48 AM
                    </span>
                  </div>
                </div>

                {/* Quick Reply Composer */}
                <div className="mt-4 pt-2 bg-white rounded-xl p-2 shadow-sm flex items-center gap-2">
                  <button className="p-2 rounded-lg text-gray-400 hover:text-primary transition-colors">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg text-gray-400 hover:text-primary transition-colors">
                    <Mic className="h-5 w-5" />
                  </button>
                  <input
                    className="flex-1 bg-transparent px-2 py-2 text-sm text-gray-900 focus:outline-none"
                    placeholder="Type SMS, WhatsApp, or internal @whisper note..."
                    type="text"
                  />
                  <button className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-colors flex items-center gap-1">
                    Send
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Column 3: CRM Profile (Right) */}
              <div className="lg:col-span-3 bg-white flex flex-col p-4">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <h2 className="font-bold text-xl text-gray-900">
                    CRM Profile
                  </h2>
                  <MoreHorizontal className="h-5 w-5 text-gray-400 cursor-pointer" />
                </div>
                {/* Profile Overview Card */}
                <div className="flex flex-col items-center text-center pb-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 text-primary flex items-center justify-center mb-2 text-2xl font-bold shadow-sm">
                    CO
                  </div>
                  <div className="font-bold text-xl text-gray-900">
                    Carlos Ortiz
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    Operating Partner &bull; La Barca LLC
                  </div>
                  <span className="bg-primary-light text-primary text-[10px] font-bold uppercase px-3 py-0.5 rounded-full">
                    Stage: Negotiation ($28k ARR)
                  </span>
                </div>
                {/* Quick Data Points */}
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Direct Line</span>
                    <span className="text-gray-900 font-semibold">
                      +1 (512) 809-3321
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Email</span>
                    <span className="text-gray-900 font-semibold truncate max-w-[140px]">
                      carlos@labarca.io
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Locations</span>
                    <span className="text-gray-900 font-semibold">
                      2 Active Stores
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Owner Rep</span>
                    <span className="text-primary font-semibold">
                      Alex V. (AI Outbound)
                    </span>
                  </div>
                </div>
                {/* Internal Team Whisper Notes */}
                <div className="bg-gray-100 p-3 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase text-primary flex items-center gap-1 tracking-widest">
                      <EyeOff className="h-3.5 w-3.5" /> Whisper Note
                    </span>
                    <span className="text-gray-500 text-xs font-semibold">
                      Just now
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    <strong className="text-gray-900">@sarah</strong> Carlos is
                    looking for POS hardware compatibility. Make sure to attach
                    the Clover and Toast specs before the 10 AM touchpoint
                    tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Metrics Bar ── */}
      <section className="w-full bg-gray-100 py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-[56px] leading-[60px] text-primary font-bold mb-1">
              70%
            </div>
            <div className="font-bold text-xl text-gray-900 mb-1">
              Context Switch Reduction
            </div>
            <p className="text-sm text-gray-500">
              Sales teams save an average of 1.6 hours daily by consolidating
              dials, SMS, and notes onto a zero-hop operator desk.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-[56px] leading-[60px] text-primary font-bold mb-1">
              100%
            </div>
            <div className="font-bold text-xl text-gray-900 mb-1">
              Conversation Capture Rate
            </div>
            <p className="text-sm text-gray-500">
              Every call recording, voicemail payload, and messaging exchange
              auto-indexes into your CRM with zero manual data entry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-[56px] leading-[60px] text-primary font-bold mb-1">
              0
            </div>
            <div className="font-bold text-xl text-gray-900 mb-1">
              Missed Callbacks
            </div>
            <p className="text-sm text-gray-500">
              Intelligent queue monitoring flags unanswered inbound touches and
              triggers automated multi-channel follow-up sequences.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Features Bento Grid ── */}
      <section
        className="w-full bg-white py-24 px-4 lg:px-8"
        id="core-capabilities"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
              Engineered for Extreme Velocity
            </div>
            <h2 className="font-extrabold text-3xl lg:text-[40px] lg:leading-[44px] text-gray-900 mb-3">
              Three Architectural Pillars of the Operator Inbox
            </h2>
            <p className="text-lg text-gray-600">
              Everything an SDR or enterprise closer needs to navigate 500+
              daily contact touchpoints without breaking stride.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 shadow-sm">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-gray-900 mb-3">
                  Consolidated 360-Degree Conversation Timeline
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Seamlessly alternates between high-fidelity voice calls, AI
                  voicemail drops, SMS messages, and verified WhatsApp chats in
                  true chronological sequence.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                  <RefreshCw className="h-4 w-4" />
                  Continuous Synchronisation
                </div>
                <p className="text-xs text-gray-500">
                  No asynchronous silos. If a customer texts during a live call,
                  the bubble updates on your screen in real time.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 shadow-sm">
                  <AudioLines className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-gray-900 mb-3">
                  Integrated Audio Player &amp; Scrubbers
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Listen to recordings at 1.0x, 1.5x, or 2.0x speeds. Real-time
                  audio scrubbers allow clicking any phrase in the transcript to
                  jump right to that exact millisecond.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                  <Gauge className="h-4 w-4" />
                  Awaiting Transcript Sync
                </div>
                <p className="text-xs text-gray-500">
                  Audio waveforms synchronize with natural language processing
                  models to highlight dialogue as it streams.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 shadow-sm">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-gray-900 mb-3">
                  Telnyx WebRTC Dialer Integration
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Click any phone number, CRM field, or conversation header to
                  instantly initiate crystal-clear WebRTC voice sessions directly
                  within your browser window.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                  <Network className="h-4 w-4" />
                  Global PSTN Routing
                </div>
                <p className="text-xs text-gray-500">
                  Automated caller ID localization and zero carrier relay keeps industry-leading content and pickup metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI Productivity Tools & Action Automation ── */}
      <section className="w-full bg-gray-50 py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Presentation Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Bot className="h-[22px] w-[22px] text-primary" />
                    <span className="font-bold text-xl text-gray-900">
                      Dialeads Cognitive Summarizer
                    </span>
                  </div>
                  <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                    Automated
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50">
                    <div className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-1">
                      <Brain className="h-4 w-4 text-primary" />
                      Detected Intent &amp; Objection Analysis
                    </div>
                    <p className="text-xs text-gray-500">
                      &ldquo;Pricing sensitivity overcome via guaranteed ROI
                      clause. Carlos expressed willingness to execute 12-month
                      annual contract upon reviewing legal disclosure.&rdquo;
                    </p>
                  </div>
                  {/* Suggested Next Actions Box */}
                  <div className="p-4 rounded-xl bg-white shadow-sm">
                    <div className="text-[10px] font-bold uppercase text-primary tracking-widest mb-2 flex items-center gap-1">
                      <ListChecks className="h-4 w-4" /> Suggested Next Actions
                    </div>
                    <ul className="space-y-2 text-xs text-gray-900">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-[18px] w-[18px] text-primary flex-shrink-0" />
                        Create Salesforce Opportunity: &ldquo;La Barca — 2
                        Locations&rdquo;
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-[18px] w-[18px] text-primary flex-shrink-0" />
                        Lock Calendar Invites for Demo walkthrough tomorrow at
                        10:00 AM
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-[18px] w-[18px] text-primary flex-shrink-0" />
                        Dispatch custom zero-commission onboarding PDF through
                        WhatsApp
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Narrative */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                Intelligent Workflow Streams
              </div>
              <h2 className="font-extrabold text-3xl lg:text-[40px] lg:leading-[44px] text-gray-900 mb-4">
                Zero Notes Taken. Total Accuracy Guaranteed.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Operators should be building pipeline and closing revenue, not
                manually typing notes into CRM fields. Dialeads actively structures conversation payloads so you never miss a detail.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex-shrink-0 flex items-center justify-center shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-1">
                      AI Conversation Summaries
                    </h4>
                    <p className="text-base text-gray-600">
                      Get concise, structured bullet takeaways immediately upon
                      call wrap-up. Key agreements, competitor mentions, and
                      pricing points are tagged and indexed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-dark text-white flex-shrink-0 flex items-center justify-center shadow-sm">
                    <CalendarPlus className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-1">
                      Suggested Actions &amp; Task Automation
                    </h4>
                    <p className="text-base text-gray-600">
                      One-click or automated creation of calendar invites, CRM
                      opportunity status transitions, and follow-up reminders
                      right from your active stream.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Collaboration & Team Handoffs ── */}
      <section className="w-full bg-white py-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
              Dialeads Team Aggregate
            </div>
            <h2 className="font-extrabold text-3xl lg:text-[40px] lg:leading-[44px] text-gray-900 mb-3">
              Close Deals Together Without Leaving the Stream
            </h2>
            <p className="text-lg text-gray-600">
              Empower managers, SDRs, and Account Executives to collaborate with
              zero lead friction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collab Point 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <Inbox className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Shared Inboxes
              </h3>
              <p className="text-base text-gray-600">
                Route team phone numbers and inbound queues to round-robin
                squads. Claim, reassign, or monitor thread ownership with
                absolute clarity.
              </p>
            </div>
            {/* Collab Point 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <AtSign className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Team Mentions (@rep)
              </h3>
              <p className="text-base text-gray-600">
                Tag technical leads, sales engineers, or enterprise VPs straight
                in the call stream for immediate input on contract nuances or
                objections.
              </p>
            </div>
            {/* Collab Point 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                <LockOpen className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                Private Whisper Notes
              </h3>
              <p className="text-base text-gray-600">
                Store internal conversation notes and coaching feedback inside
                the active timeline without exposing them to prospect-facing
                channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="w-full bg-white py-24 px-4 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-3xl p-8 lg:p-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-lg">
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-2">
              Ready for Operator Supercharge
            </span>
            <h2 className="font-extrabold text-3xl lg:text-[40px] lg:leading-[44px] text-gray-900 mb-4">
              Bring Clarity to Your Sales Communication.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get your revenue team set up on the Unified Operator Inbox today.
              Connect your existing Telnyx numbers or spin up new localized DIDs
              in seconds.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/free-trial"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-md transition-all"
              >
                Start Free 16-Day Trial
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-gray-200 text-gray-900 font-semibold text-sm transition-colors"
              >
                Book Live Operator Demo
              </Link>
            </div>
          </div>
          {/* Visual Feature Badge Card */}
          <div className="w-full md:w-auto flex-shrink-0 bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  100% TCPA
                </div>
                <div className="text-xs text-gray-500">
                  Carrier-level insurance
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold">
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  &lt; 150ms
                </div>
                <div className="text-xs text-gray-500">
                  Global Audio Latency
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center font-bold">
                <Cable className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">
                  Native Sync
                </div>
                <div className="text-xs text-gray-500">
                  Salesforce, HubSpot &amp; Zoho
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
