"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Keyboard,
  Timer,
  PlayCircle,
  Star,
  Send,
  Voicemail,
  PhoneMissed,
  PhoneOff,
  AlarmClock,
  RefreshCw,
  CalendarPlus,
  MessageSquare,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  ChevronDown,
  GitFork,
  Network,
  MessageCircle,
  Calendar,
  Bell,
  CheckCheck,
  CalendarCheck,
  Eye,
  Mail,
  RotateCw,
  PhoneCall,
  History,
  Search,
  Smartphone,
  ShieldCheck,
  Gavel,
  Mic,
  CircleDot,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface DispositionOption {
  label: string;
  shortLabel?: string;
  key: string;
  icon: React.ReactNode;
  hotkey: number;
}

interface ExecutionAction {
  time: string;
  icon: React.ReactNode;
  text: React.ReactNode;
}

const dispositions: DispositionOption[] = [
  {
    label: "Interested",
    key: "Interested",
    icon: <Star className="h-4 w-4" />,
    hotkey: 1,
  },
  {
    label: "Sent Mockup",
    key: "Sent Mockup",
    icon: <Send className="h-4 w-4" />,
    hotkey: 2,
  },
  {
    label: "VM Drop",
    shortLabel: "VM Drop",
    key: "Voicemail Drop",
    icon: <Voicemail className="h-4 w-4" />,
    hotkey: 3,
  },
  {
    label: "No Answer",
    key: "No Answer",
    icon: <PhoneMissed className="h-4 w-4" />,
    hotkey: 4,
  },
  {
    label: "Bad Number",
    key: "Bad Number",
    icon: <PhoneOff className="h-4 w-4" />,
    hotkey: 5,
  },
  {
    label: "Callback",
    key: "Callback",
    icon: <AlarmClock className="h-4 w-4" />,
    hotkey: 6,
  },
];

const outcomeData: Record<string, ExecutionAction[]> = {
  Interested: [
    {
      time: "0.08s",
      icon: <RefreshCw className="h-4 w-4 text-purple-300" />,
      text: (
        <>
          Deal Stage &rarr;{" "}
          <strong className="text-purple-300">Qualified Lead (HubSpot)</strong>
        </>
      ),
    },
    {
      time: "0.19s",
      icon: <CalendarPlus className="h-4 w-4 text-purple-300" />,
      text: "Calendar placeholder invite automatically dispatched",
    },
    {
      time: "0.32s",
      icon: <MessageSquare className="h-4 w-4 text-purple-300" />,
      text: "Follow-up executive recap SMS queued for 2:15 PM",
    },
  ],
  "Sent Mockup": [
    {
      time: "0.05s",
      icon: <Mail className="h-4 w-4 text-purple-300" />,
      text: "Email cadence trigger: Interactive Figma prototype link",
    },
    {
      time: "0.14s",
      icon: <Eye className="h-4 w-4 text-purple-300" />,
      text: "Lead tracking beacon enabled with page-view alerts",
    },
    {
      time: "0.28s",
      icon: <Clock className="h-4 w-4 text-purple-300" />,
      text: "Follow-up check task scheduled for +24 hours",
    },
  ],
  "Voicemail Drop": [
    {
      time: "0.04s",
      icon: <Voicemail className="h-4 w-4 text-purple-300" />,
      text: 'Pre-recorded 18s studio voicemail drop executing...',
    },
    {
      time: "0.12s",
      icon: <MessageSquare className="h-4 w-4 text-purple-300" />,
      text: 'Automated SMS sent: "Just tried you, Sarah - check link"',
    },
    {
      time: "0.21s",
      icon: <RotateCw className="h-4 w-4 text-purple-300" />,
      text: "Contact re-queued in dialer pool for 48 hours later",
    },
  ],
  "No Answer": [
    {
      time: "0.03s",
      icon: <PhoneCall className="h-4 w-4 text-purple-300" />,
      text: "Call attempt recorded; attempt count updated (2/5)",
    },
    {
      time: "0.10s",
      icon: <History className="h-4 w-4 text-purple-300" />,
      text: "Rotated to alternative evening time block",
    },
  ],
  "Bad Number": [
    {
      time: "0.06s",
      icon: <PhoneOff className="h-4 w-4 text-purple-300" />,
      text: "Number tagged as disconnected in CRM database",
    },
    {
      time: "0.15s",
      icon: <Search className="h-4 w-4 text-purple-300" />,
      text: "Auto-enrichment queue triggered for secondary mobile",
    },
  ],
  Callback: [
    {
      time: "0.09s",
      icon: <AlarmClock className="h-4 w-4 text-purple-300" />,
      text: "Callback alarm anchored for Tomorrow @ 10:00 AM",
    },
    {
      time: "0.18s",
      icon: <Bell className="h-4 w-4 text-purple-300" />,
      text: "Rep calendar block reserved for Sarah Reynolds",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function OutcomeTrackingPage() {
  const [activeDisposition, setActiveDisposition] = useState("Interested");
  const [executionStream, setExecutionStream] = useState<ExecutionAction[]>(
    outcomeData["Interested"]
  );
  const speedRunRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const triggerOutcome = useCallback((name: string) => {
    setActiveDisposition(name);
    setExecutionStream(outcomeData[name] || outcomeData["Interested"]);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 6) {
        const disp = dispositions[num - 1];
        if (disp) triggerOutcome(disp.key);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [triggerOutcome]);

  const runSpeedDemo = () => {
    if (speedRunRef.current) return;
    const sequence = [
      "Interested",
      "Sent Mockup",
      "Voicemail Drop",
      "Callback",
      "Interested",
    ];
    let step = 0;
    speedRunRef.current = setInterval(() => {
      if (step >= sequence.length) {
        clearInterval(speedRunRef.current!);
        speedRunRef.current = null;
        return;
      }
      triggerOutcome(sequence[step]);
      step++;
    }, 650);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ---- Breadcrumb ---- */}
      <section className="w-full pt-8 pb-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-muted text-xs font-semibold tracking-wide">
            <Link
              href="/features"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Features</span>
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-semibold">
              Granular Outcome Tracking &amp; Dispositions
            </span>
          </div>
        </div>
      </section>

      {/* ---- Hero Section ---- */}
      <section className="relative w-full py-16 overflow-hidden">
        {/* Ambient blurs */}
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary-light/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -left-32 w-80 h-80 bg-gray-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-light text-primary text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span>SPEED-LOGGING &amp; AUTOMATION</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
                One-Click Dispositions &amp; Granular Outcome Tracking
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Log call results in less than one second. Trigger automated next
                actions, CRM stage updates, multi-channel cadences, and smart
                voicemail drops with a single keystroke.
              </p>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="#builder-preview"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-md hover:bg-primary-dark transition-all"
                >
                  <span>Explore Workflow Automation</span>
                  <Zap className="h-4 w-4" />
                </a>
                <button
                  onClick={runSpeedDemo}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-all"
                >
                  <PlayCircle className="h-5 w-5 text-primary" />
                  <span>Watch Speed Run</span>
                  <span className="text-gray-500 text-xs px-1.5 py-0.5 rounded bg-white font-mono">
                    0:42
                  </span>
                </button>
              </div>

              <div className="mt-8 pt-4 flex items-center gap-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold">
                    <strong className="text-gray-900">0.4 sec</strong> average
                    log latency
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Keyboard className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold">
                    <strong className="text-gray-900">100%</strong> keyboard
                    navigable
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Visual */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-xl p-6 bg-[#131025] text-white shadow-xl relative overflow-hidden border border-white/10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-gray-500" />
                    <span className="w-3 h-3 rounded-full bg-purple-300" />
                    <span className="ml-2 text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      DISPOSITION TERMINAL v4.12
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-300 text-xs font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
                    </span>
                    <span>LIVE CALL (01:42)</span>
                  </div>
                </div>

                {/* Active Contact */}
                <div className="p-4 rounded-lg bg-white/5 mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      SR
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Sarah Reynolds
                      </div>
                      <div className="text-xs text-gray-400">
                        VP of Revenue Ops &bull; FinEdge Global
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-purple-500/40 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">
                    <Zap className="h-3.5 w-3.5" />
                    <span>High Propensity Match</span>
                  </div>
                </div>

                {/* Disposition Hotkeys */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      Instant Log Keyboard Row
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      Press [1-6]
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {dispositions.map((d) => (
                      <button
                        key={d.key}
                        onClick={() => triggerOutcome(d.key)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold transition-all active:scale-95 ${
                          activeDisposition === d.key
                            ? "bg-primary text-white shadow-sm"
                            : "bg-white/10 hover:bg-white/15 text-white"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 truncate">
                          {d.icon}
                          {d.shortLabel || d.label}
                        </span>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded font-mono ${
                            activeDisposition === d.key
                              ? "bg-white/20"
                              : "bg-white/5"
                          }`}
                        >
                          {d.hotkey}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Execution Stream */}
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="flex items-center justify-between mb-2 text-[10px] font-bold tracking-widest uppercase text-gray-500">
                    <span>Autonomous Trigger Stream</span>
                    <span className="text-purple-300 flex items-center gap-1">
                      <RefreshCw className="h-3.5 w-3.5" />
                      Realtime Execution
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    {executionStream.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-white bg-white/5 p-2 rounded transition-all"
                      >
                        {act.icon}
                        <span className="font-mono text-xs text-purple-300">
                          [{act.time}]
                        </span>
                        <span>{act.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3 Core Highlights ---- */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="section-label mb-1">
                Zero Administrative Friction
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Architected for Speed &amp; Total Pipeline Truth
              </h2>
            </div>
            <p className="text-base text-gray-600 max-w-md">
              Every dial disposition removes manual data entry entirely while
              ensuring no opportunity leaks through administrative cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight Card 1 */}
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Keyboard className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Keyboard-Shortcut Dispositions
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Hit Spacebar to bridge or advance to the next record. Press
                  numeric keys 1 through 9 for instantaneous one-touch call
                  logging without leaving your dialing posture.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-900">
                  Hotkey Mapping
                </span>
                <div className="flex items-center gap-1 font-mono text-xs text-primary font-bold">
                  <span className="px-2 py-0.5 rounded bg-white shadow-xs">
                    SPACE
                  </span>
                  <span>+</span>
                  <span className="px-2 py-0.5 rounded bg-white shadow-xs">
                    [1-9]
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Card 2 */}
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GitFork className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Conditional Post-Call Automations
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Set deterministic workflows. For example: If Voicemail &rarr;
                  Auto-drop studio voice clip + SMS intro card + reschedule
                  retry cadence strictly in 48 hours.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-900">
                  Dynamic Branches
                </span>
                <span className="text-xs font-semibold text-primary">
                  14+ Pre-built Recipes
                </span>
              </div>
            </div>

            {/* Highlight Card 3 */}
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mic className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Precision Transcripts &amp; AI Summaries
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Crystal-clear dual-channel recordings with real-time
                  word-level alignment attached directly to your Salesforce,
                  HubSpot, or Close CRM records with bulleted action points.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-900">
                  CRM Record Sync
                </span>
                <span className="text-xs font-semibold text-primary">
                  &lt; 1.2s Latency
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Workflow Automation Builder Preview ---- */}
      <section className="w-full py-24 bg-white" id="builder-preview">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="section-label mb-2">
              Interactive Architecture Flow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
              Workflow Automation Builder Preview
            </h2>
            <p className="text-lg text-gray-600">
              Watch what happens when a rep marks an interaction as{" "}
              <span className="text-primary font-semibold">Interested</span>.
              Four asynchronous systems sync simultaneously without rep
              intervention.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="rounded-2xl bg-white p-8 shadow-lg relative overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Trigger Node */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <div className="w-full p-6 rounded-xl bg-primary-dark text-white shadow-md relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-purple-200">
                      Root Disposition Trigger
                    </span>
                    <CircleDot className="h-4 w-4" />
                  </div>
                  <div className="text-2xl font-bold mb-1 flex items-center gap-2">
                    <span>[Interested]</span>
                    <span className="text-xs bg-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      0.00s
                    </span>
                  </div>
                  <p className="text-sm text-white/80">
                    Outbound call outcome captured by rep via key-press or
                    automated sentiment detection.
                  </p>
                </div>
                <div className="mt-4 hidden lg:flex items-center gap-2 text-gray-600 text-xs font-semibold">
                  <GitFork className="h-4 w-4 text-primary" />
                  <span>Propagating across 4 parallel branches</span>
                </div>
              </div>

              {/* Branches */}
              <div className="lg:col-span-8 flex flex-col gap-3">
                {/* Branch A */}
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-primary flex items-center justify-center font-bold">
                      <Network className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-primary">
                        Branch A &bull; CRM Pipeline
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Update CRM Stage &rarr; Qualified Pipeline
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-gray-700 text-xs font-semibold font-mono flex items-center gap-1 shrink-0">
                    <CheckCheck className="h-3.5 w-3.5" /> HubSpot &amp; SFDC
                  </span>
                </div>

                {/* Branch B */}
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-primary flex items-center justify-center font-bold">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-primary">
                        Branch B &bull; Outbound Messaging
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Send WhatsApp / SMS Deck Link
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-gray-700 text-xs font-semibold font-mono flex items-center gap-1 shrink-0">
                    <Send className="h-3.5 w-3.5" /> Latency 400ms
                  </span>
                </div>

                {/* Branch C */}
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-primary flex items-center justify-center font-bold">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-primary">
                        Branch C &bull; Meeting Scheduling
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Generate Calendar Hold Placeholder
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-gray-700 text-xs font-semibold font-mono flex items-center gap-1 shrink-0">
                    <CalendarCheck className="h-3.5 w-3.5" /> Cal.com / Google
                    Cal
                  </span>
                </div>

                {/* Branch D */}
                <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 text-primary flex items-center justify-center font-bold">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-primary">
                        Branch D &bull; Internal Alerting
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Notify Account Exec on Dedicated Slack Channel
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary-light text-gray-700 text-xs font-semibold font-mono flex items-center gap-1 shrink-0">
                    <Zap className="h-3.5 w-3.5" /> #rev-wins-live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Performance Analytics ---- */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-5">
              <div className="section-label mb-1">
                Telephony Intelligence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Live Funnel Reports &amp; Conversion Velocity
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Aggregated disposition analytics show exactly where conversation
                bottlenecks occur. Filter rep performance by list segment,
                time-of-day cadence, or audio script variant.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-900 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>
                    Automated attribution tracking back to marketing source
                    lists
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>
                    Sub-minute rep performance recalibration based on connect
                    velocity
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>
                    Comprehensive CSV and webhook exports for custom BI stacks
                  </span>
                </div>
              </div>
            </div>

            {/* Analytics Grid */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-white shadow-md">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      Weekly Dial Funnel Health
                    </div>
                    <div className="text-sm text-gray-500">
                      Live telemetry aggregated across 12,480 outbound attempts
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-900 text-xs font-semibold">
                    <span>Last 7 Days</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

                {/* KPI Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-gray-50 flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      Contact Rate
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      28.4%
                    </span>
                    <span className="text-xs font-semibold text-primary mt-1 flex items-center">
                      <TrendingUp className="h-3.5 w-3.5 mr-0.5" /> +4.6% vs
                      benchmark
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      Conversion / Demo
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-primary mt-1">
                      14.2%
                    </span>
                    <span className="text-xs font-semibold text-primary mt-1 flex items-center">
                      <TrendingUp className="h-3.5 w-3.5 mr-0.5" /> +2.1% net
                      lift
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      Drop Rate
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      2.1%
                    </span>
                    <span className="text-xs font-semibold text-gray-600 mt-1 flex items-center">
                      <Shield className="h-3.5 w-3.5 mr-0.5" /> Under FCC cap
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 flex flex-col">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
                      Avg Duration
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                      2m 44s
                    </span>
                    <span className="text-xs font-semibold text-gray-500 mt-1 flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-0.5" /> High engage
                    </span>
                  </div>
                </div>

                {/* Funnel Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-semibold text-gray-900">
                    <span>Disposition Breakdown</span>
                    <span className="text-gray-500">
                      Total Calls Handled: 12,480
                    </span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-gray-100 flex overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: "28.4%" }}
                      title="Interested & Demo Booked (28.4%)"
                    />
                    <div
                      className="bg-purple-300 h-full"
                      style={{ width: "32.1%" }}
                      title="Voicemail Drop (32.1%)"
                    />
                    <div
                      className="bg-primary-light h-full"
                      style={{ width: "24.5%" }}
                      title="Callback Requested (24.5%)"
                    />
                    <div
                      className="bg-gray-300 h-full"
                      style={{ width: "15%" }}
                      title="Unreachable / Bad (15%)"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
                      <span>Qualified / Demo (28.4%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-purple-300" />
                      <span>VM Drop (32.1%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-primary-light" />
                      <span>Callback (24.5%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-gray-300" />
                      <span>Bad # / DNC (15.0%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Compliance & Call Hygiene ---- */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-2xl p-8 md:p-12 bg-gray-50 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 section-label mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Reputation Engine &amp; Carrier Health</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                  Automated Bad Number Scrubbing &amp; Instant DNC Inoculation
                </h2>
                <p className="text-base text-gray-600 max-w-2xl">
                  One single click on{" "}
                  <strong className="text-gray-900 font-semibold">
                    &apos;Bad Number&apos;
                  </strong>{" "}
                  or{" "}
                  <strong className="text-gray-900 font-semibold">
                    &apos;DNC / Not Interested&apos;
                  </strong>{" "}
                  triggers a system-wide lock. It immediately purges
                  disconnected numbers, flags invalid carrier tags, and adds the
                  contact to your global Do-Not-Call compliance list across all
                  rep teams instantly.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-white shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Carrier Spam Flag Shield
                    </div>
                    <div className="text-xs text-gray-500">
                      Keeps Caller ID &amp; 10DLC trust scores green
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <Gavel className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Instant TCPA Defense
                    </div>
                    <div className="text-xs text-gray-500">
                      Deterministic timestamped opt-out registry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA Block ---- */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="rounded-3xl p-8 md:p-16 bg-primary text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background flares */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-purple-800/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 text-purple-200 text-xs font-bold tracking-widest uppercase mb-4">
                <span>Productivity Multiplier</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Automate your post-call admin and double your dials per hour
              </h2>
              <p className="text-lg text-purple-200 mb-12">
                Give your sales team 30+ extra hours per rep each month by
                replacing spreadsheet updates and manual CRM notes with instant
                one-key dispositions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/free-trial"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-primary text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all"
                >
                  <span>Start Free 14-Day Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/20 text-white text-sm font-semibold hover:bg-white/30 transition-all"
                >
                  <span>Book Architecture Demo</span>
                </Link>
              </div>
              <div className="mt-8 text-purple-200 text-sm flex items-center justify-center gap-4 flex-wrap">
                <span>No credit card required</span>
                <span>&bull;</span>
                <span>HubSpot &amp; Salesforce native</span>
                <span>&bull;</span>
                <span>SOC2 Type II verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
