import {
  Check,
  Phone,
  Zap,
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Send,
  ArrowRight,
  Activity,
  Headphones,
  Bot,
  Timer,
  Filter,
  Brain,
  MousePointerClick,
  Mail,
  Inbox,
  Server,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Vocalis AI",
  description:
    "Every feature built for closers. Autonomous AI voice agents, power dialer, lead engine, caller records, integrations, and omnichannel follow-up.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pillTabs = [
  { label: "Autonomous Agent", href: "#autonomous-agent" },
  { label: "Power Dialer", href: "#power-dialer" },
  { label: "Lead Engine", href: "#lead-engine" },
  { label: "Caller Records", href: "#caller-records" },
  { label: "Integrations", href: "#integrations" },
  { label: "SMS & IM", href: "#sms-im" },
];

interface Feature {
  id: string;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  learnMoreHref: string;
  mockup: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Mockup components                                                  */
/* ------------------------------------------------------------------ */

function DialerMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
          <Bot className="h-5 w-5 text-[#7C3AED]" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">AI Agent - Active</div>
          <div className="text-xs text-zinc-400">Live call in progress</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">Connected</span>
        </div>
      </div>
      <div className="rounded-lg bg-white/5 p-4 space-y-3">
        <div className="flex justify-between text-xs text-zinc-400">
          <span>Sarah Mitchell</span>
          <span className="text-[#7C3AED]">00:42</span>
        </div>
        <div className="h-8 rounded bg-[#7C3AED]/10 flex items-center px-3">
          <div className="flex gap-0.5">
            {[3, 5, 8, 4, 7, 6, 3, 5, 8, 4, 7, 2, 6, 4, 8, 5].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-[#7C3AED]"
                style={{ height: `${h * 3}px` }}
              />
            ))}
          </div>
        </div>
        <div className="text-xs text-zinc-500">Voicemail drop queued if no answer...</div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-white font-semibold">127</div>
          <div className="text-zinc-500">Calls</div>
        </div>
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-white font-semibold">34</div>
          <div className="text-zinc-500">Connected</div>
        </div>
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-white font-semibold">8</div>
          <div className="text-zinc-500">Meetings</div>
        </div>
      </div>
    </div>
  );
}

function CallStatsMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Power Dialer</div>
        <div className="flex items-center gap-1.5 rounded-full bg-green-400/10 px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          <span className="text-xs text-green-400">3 lines active</span>
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
        <div className="text-center">
          <div className="text-5xl font-bold text-white tracking-tight">06:43</div>
          <div className="text-sm text-zinc-400 mt-1">avg. talk time per lead</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/5 p-3">
          <div className="text-xs text-zinc-400">Dial Rate</div>
          <div className="text-lg font-bold text-white">142/hr</div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="text-xs text-zinc-400">Connect Rate</div>
          <div className="text-lg font-bold text-[#7C3AED]">28.4%</div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="text-xs text-zinc-400">Conversations</div>
          <div className="text-lg font-bold text-white">47</div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="text-xs text-zinc-400">Meetings Set</div>
          <div className="text-lg font-bold text-green-400">12</div>
        </div>
      </div>
    </div>
  );
}

function LeadListMockup() {
  const leads = [
    { name: "Jason Park", company: "Meridian Corp", score: 92, status: "Hot" },
    { name: "Lisa Chen", company: "Apex Solutions", score: 87, status: "Warm" },
    { name: "David Kim", company: "NovaTech Inc", score: 84, status: "Hot" },
    { name: "Rachel Torres", company: "Summit Group", score: 79, status: "Warm" },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Lead Pipeline</div>
        <div className="text-xs text-[#7C3AED] font-medium">3,670 leads</div>
      </div>
      <div className="flex gap-2">
        {["All", "Hot", "Warm", "New"].map((f) => (
          <span
            key={f}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              f === "All"
                ? "bg-[#7C3AED] text-white"
                : "bg-white/5 text-zinc-400"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {leads.map((l) => (
          <div
            key={l.name}
            className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5"
          >
            <div>
              <div className="text-sm text-white font-medium">{l.name}</div>
              <div className="text-xs text-zinc-500">{l.company}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">{l.score}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  l.status === "Hot"
                    ? "bg-red-500/10 text-red-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {l.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ObjectionMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Brain className="h-4 w-4 text-[#7C3AED]" />
        <div className="text-sm font-semibold text-white">AI Objection Coach</div>
      </div>
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="shrink-0 h-7 w-7 rounded-full bg-zinc-700 flex items-center justify-center text-xs text-zinc-300">
            L
          </div>
          <div className="rounded-lg rounded-tl-none bg-white/5 px-3 py-2 text-sm text-zinc-300">
            &ldquo;We already have a provider and we&apos;re locked into a contract.&rdquo;
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <div className="rounded-lg rounded-tr-none bg-[#7C3AED]/20 px-3 py-2 text-sm text-zinc-200 max-w-[80%]">
            <div className="text-[10px] uppercase text-[#7C3AED] font-semibold mb-1">
              Suggested Response
            </div>
            &ldquo;That makes sense &mdash; most of our best clients felt the same way. Mind if I show you what they found when they compared side-by-side?&rdquo;
          </div>
        </div>
        <div className="rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/5 p-3">
          <div className="text-[10px] uppercase text-[#7C3AED] font-semibold mb-1">
            Strategy
          </div>
          <div className="text-xs text-zinc-400">
            Acknowledge &rarr; Relate &rarr; Pivot to comparison. Success rate: 64%
          </div>
        </div>
      </div>
    </div>
  );
}

function DispositionMockup() {
  const dispositions = [
    { label: "Meeting Set", color: "bg-green-400", active: true },
    { label: "Call Back", color: "bg-yellow-400", active: false },
    { label: "Not Interested", color: "bg-red-400", active: false },
    { label: "Wrong Number", color: "bg-zinc-400", active: false },
    { label: "Voicemail", color: "bg-blue-400", active: false },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="text-sm font-semibold text-white">Quick Disposition</div>
      <div className="rounded-lg bg-white/5 p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-white font-medium">Marcus Johnson</div>
            <div className="text-xs text-zinc-500">BluePeak Ventures &middot; 2:34 call</div>
          </div>
          <div className="text-xs text-green-400">Completed</div>
        </div>
        <div className="space-y-2">
          {dispositions.map((d) => (
            <button
              key={d.label}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-left transition ${
                d.active
                  ? "bg-[#7C3AED]/20 text-white border border-[#7C3AED]/50"
                  : "bg-white/5 text-zinc-400 border border-transparent hover:bg-white/10"
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${d.color}`} />
              {d.label}
              {d.active && <Check className="h-4 w-4 ml-auto text-[#7C3AED]" />}
            </button>
          ))}
        </div>
      </div>
      <div className="text-xs text-zinc-500 text-center">
        Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-300">1-5</kbd> for keyboard shortcut
      </div>
    </div>
  );
}

function MessagingMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="text-sm font-semibold text-white">Quick Follow-Up</div>
      <div className="flex gap-2">
        {[
          { icon: MessageSquare, label: "WhatsApp", active: true },
          { icon: Mail, label: "Email", active: false },
          { icon: Send, label: "SMS", active: false },
        ].map((ch) => (
          <button
            key={ch.label}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition ${
              ch.active
                ? "bg-[#7C3AED] text-white"
                : "bg-white/5 text-zinc-400"
            }`}
          >
            <ch.icon className="h-3.5 w-3.5" />
            {ch.label}
          </button>
        ))}
      </div>
      <div className="rounded-lg bg-white/5 p-4 space-y-3">
        <div className="text-xs text-zinc-400">To: Sarah Mitchell</div>
        <div className="rounded-lg bg-white/5 p-3 text-sm text-zinc-300">
          Hi Sarah! Great speaking with you. As discussed, here&apos;s the link to book your demo:
          <span className="text-[#7C3AED]"> calendly.com/vocalis/demo</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400">
              AI Generated
            </span>
            <span className="rounded bg-white/5 px-2 py-1 text-[10px] text-zinc-400">
              Personalized
            </span>
          </div>
          <button className="rounded-lg bg-[#7C3AED] px-3 py-1.5 text-xs text-white font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function UnifiedInboxMockup() {
  const records = [
    { type: "call", icon: Phone, label: "Inbound Call", time: "2m ago", detail: "3:42 duration" },
    { type: "sms", icon: MessageSquare, label: "SMS Received", time: "5m ago", detail: '"Yes, I\'m interested"' },
    { type: "note", icon: Brain, label: "AI Summary", time: "5m ago", detail: "Lead qualified - budget confirmed" },
    { type: "recording", icon: Headphones, label: "Call Recording", time: "8m ago", detail: "Recording available" },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Unified Timeline</div>
        <div className="text-xs text-zinc-500">Jason Park</div>
      </div>
      <div className="space-y-1">
        {records.map((r, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg bg-white/5 px-3 py-2.5">
            <div className="mt-0.5 h-7 w-7 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
              <r.icon className="h-3.5 w-3.5 text-[#7C3AED]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white font-medium">{r.label}</span>
                <span className="text-[10px] text-zinc-500">{r.time}</span>
              </div>
              <div className="text-xs text-zinc-400 truncate">{r.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfrastructureMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-[#7C3AED]" />
        <div className="text-sm font-semibold text-white">Infrastructure Status</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Uptime", value: "99.97%", sub: "Last 90 days" },
          { label: "10DLC Trust Score", value: "A+", sub: "Verified" },
          { label: "Latency", value: "38ms", sub: "Avg. response" },
          { label: "Caller ID", value: "100%", sub: "STIR/SHAKEN" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-white/5 p-3">
            <div className="text-xs text-zinc-400">{s.label}</div>
            <div className="text-lg font-bold text-white">{s.value}</div>
            <div className="text-[10px] text-zinc-500">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-green-400/20 bg-green-400/5 p-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="text-xs text-green-400">All systems operational</span>
        <span className="ml-auto text-[10px] text-zinc-500">Powered by Telnyx</span>
      </div>
    </div>
  );
}

function MonitoringMockup() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#131025] p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Live Dashboard</div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Queue", value: "342", color: "text-white" },
          { label: "Active", value: "8", color: "text-green-400" },
          { label: "Idle", value: "2", color: "text-yellow-400" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg bg-white/5 p-3 text-center">
            <div className={`text-xl font-bold ${m.color}`}>{m.value}</div>
            <div className="text-[10px] text-zinc-500">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { name: "Alex R.", status: "On Call", time: "4:12", color: "bg-green-400" },
          { name: "Jordan M.", status: "Wrapping", time: "0:38", color: "bg-yellow-400" },
          { name: "Taylor S.", status: "Available", time: "--", color: "bg-blue-400" },
        ].map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${agent.color}`} />
              <span className="text-sm text-white">{agent.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">{agent.status}</span>
              <span className="text-xs text-zinc-500 tabular-nums w-8 text-right">
                {agent.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-16 flex items-end gap-1 px-1">
        {[40, 55, 35, 65, 80, 60, 75, 90, 70, 85, 50, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-[#7C3AED]/40"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-zinc-500">
        <span>8am</span>
        <span>Queue velocity (calls/hr)</span>
        <span>Now</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

const features: Feature[] = [
  {
    id: "autonomous-agent",
    label: "Autonomous Agent",
    headline: "Live AI Voice Agents & Instant Smart Voicemail Drops",
    description:
      "Deploy AI agents that handle live conversations with natural, human-like speech. When a lead doesn't pick up, the system drops a personalized voicemail in under a second -- no awkward pauses, no wasted reps.",
    bullets: [
      "Natural-sounding AI voice handles objections and qualifies leads in real time",
      "Instant voicemail drops with dynamic personalization per contact",
      "Seamless handoff to a live rep the moment a prospect is ready",
    ],
    learnMoreHref: "#",
    mockup: <DialerMockup />,
  },
  {
    id: "power-dialer",
    label: "Power Dialer",
    headline: "3x More Conversations with Zero Wasted Downtime",
    description:
      "Multi-line parallel dialing burns through your list while intelligent call routing connects you only to live answers. No more listening to rings, busy signals, or disconnected numbers.",
    bullets: [
      "Up to 3 simultaneous lines dialing so you never wait between calls",
      "Smart detection skips voicemails, fax machines, and dead numbers automatically",
      "Real-time connect-rate analytics so you can optimize as you go",
    ],
    learnMoreHref: "#",
    mockup: <CallStatsMockup />,
  },
  {
    id: "lead-engine",
    label: "Lead Engine",
    headline: "3,670 Leads. Filtered, Segmented, and Ready to Dial",
    description:
      "Import, score, and segment thousands of leads with AI-driven filtering. Every contact in your queue is pre-qualified and prioritized so your team is always working the highest-value opportunities first.",
    bullets: [
      "AI lead scoring ranks contacts by likelihood to convert",
      "Dynamic segmentation filters by industry, geography, behavior, and intent signals",
      "One-click import from CSV, CRM, or API with automatic deduplication",
    ],
    learnMoreHref: "#",
    mockup: <LeadListMockup />,
  },
  {
    id: "objection-handling",
    label: "AI Coaching",
    headline: "Never Freeze on an Objection Again",
    description:
      "Real-time AI coaching whispers the perfect rebuttal into your ear the moment a prospect pushes back. Trained on thousands of winning call patterns, it turns every rep into your top closer.",
    bullets: [
      "Live objection detection identifies resistance patterns as they happen",
      "Context-aware rebuttals generated from your winning playbook data",
      "Post-call coaching scorecards highlight what worked and what to improve",
    ],
    learnMoreHref: "#",
    mockup: <ObjectionMockup />,
  },
  {
    id: "dispositions",
    label: "Caller Records",
    headline: "One-Click Dispositions That Advance the Queue Instantly",
    description:
      "Tag outcomes in a single click or keystroke. Disposition data flows straight into your CRM, triggers the right follow-up sequence, and moves the dialer to the next contact without missing a beat.",
    bullets: [
      "Keyboard shortcuts for lightning-fast call tagging between conversations",
      "Auto-triggered follow-up sequences based on disposition type",
      "Full disposition analytics to track conversion funnel performance",
    ],
    learnMoreHref: "#",
    mockup: <DispositionMockup />,
  },
  {
    id: "sms-im",
    label: "Omnichannel",
    headline: "Follow Up in 10 Seconds via WhatsApp, Email, or SMS",
    description:
      "Strike while the iron is hot. Send AI-personalized follow-ups through any channel the moment a call ends. Templates auto-populate with call context so every message feels handwritten.",
    bullets: [
      "One-click multi-channel follow-up from WhatsApp, email, and SMS in one view",
      "AI-generated message drafts personalized with call context and lead data",
      "Scheduled sequences that drip across channels on autopilot",
    ],
    learnMoreHref: "#",
    mockup: <MessagingMockup />,
  },
  {
    id: "caller-records",
    label: "Unified Records",
    headline: "SMS, Call Recordings, and AI Notes in One Clean Stream",
    description:
      "Every interaction with a contact lives on a single timeline. Recordings, transcripts, AI-generated summaries, texts, and emails -- all searchable, all in one place so nothing slips through the cracks.",
    bullets: [
      "Chronological timeline merges calls, messages, and notes per contact",
      "AI-generated call summaries with key moments and action items highlighted",
      "Full-text search across recordings, transcripts, and message history",
    ],
    learnMoreHref: "#",
    mockup: <UnifiedInboxMockup />,
  },
  {
    id: "integrations",
    label: "Infrastructure",
    headline: "Carrier-Grade Telnyx Infrastructure & 10DLC Trust",
    description:
      "Built on Telnyx carrier-grade SIP trunking with full STIR/SHAKEN attestation and 10DLC compliance. Your calls reach real people with verified caller ID, and your messages land in the primary inbox.",
    bullets: [
      "99.97% uptime SLA with geo-redundant failover across Telnyx data centers",
      "Full 10DLC registration and STIR/SHAKEN A-level attestation out of the box",
      "Real-time call quality monitoring with automatic route optimization",
    ],
    learnMoreHref: "#",
    mockup: <InfrastructureMockup />,
  },
  {
    id: "monitoring",
    label: "Live Monitoring",
    headline: "Monitor Live Queue Velocity and SDR Availability",
    description:
      "See every rep, every call, and every metric in real time from a single dashboard. Managers can whisper-coach, barge into calls, or reassign leads on the fly to maximize team throughput.",
    bullets: [
      "Real-time queue velocity, connect rates, and agent status at a glance",
      "Whisper, barge, and listen modes for live coaching without disrupting calls",
      "Automatic workload balancing redistributes leads when reps go idle",
    ],
    learnMoreHref: "#",
    mockup: <MonitoringMockup />,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#213145] via-[#213145] to-[#213145] py-24 sm:py-32">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#7C3AED]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="inline-block rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
            Built for Top Producers
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every Feature.{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Built for Closers.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            The end-to-end cold calling system that combines autonomous AI voice
            agents, a multi-line power dialer, intelligent lead management, and
            omnichannel follow-up into one relentless revenue engine.
          </p>

          {/* Pill tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {pillTabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300 transition hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10 hover:text-white"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Feature Sections ---- */}
      {features.map((feature, index) => {
        const isEven = index % 2 === 1;
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-20 sm:py-28 ${
              index % 2 === 0 ? "bg-white" : "bg-[#eff4ff]"
            }`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 ${
                isEven ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Text */}
              <div className={isEven ? "lg:[direction:ltr]" : ""}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                  {feature.label}
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#0b1c30] sm:text-4xl">
                  {feature.headline}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#5e5d6b]">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/10">
                        <Check className="h-3 w-3 text-[#7C3AED]" />
                      </span>
                      <span className="text-[#5e5d6b]">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={feature.learnMoreHref}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] transition hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Mockup */}
              <div className={isEven ? "lg:[direction:ltr]" : ""}>
                {feature.mockup}
              </div>
            </div>
          </section>
        );
      })}

      {/* ---- CTA ---- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#213145] via-[#213145] to-[#213145] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#7C3AED]/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience All 9 Capabilities{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">
              Free for 14 Days
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            No credit card required. Get full access to the autonomous calling
            engine, power dialer, AI coaching, and every integration -- then
            decide if Vocalis is right for your team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#7C3AED] px-8 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/25 transition hover:bg-[#630ed4]"
            >
              Start Your 14 Day Free Trial
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Book a Custom Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
