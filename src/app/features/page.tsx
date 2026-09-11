import {
  Check,
  ArrowRight,
  Settings2,
  MicOff,
  Pause,
  Voicemail,
  Filter,
  Upload,
  Copy,
  Play,
  Headphones,
  ShieldCheck,
  Radio,
  CheckCircle2,
  Smile,
  Send,
  PhoneOff,
  PhoneMissed,
  Clock,
  Terminal,
  Mic,
  Zap,
  Link,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads Features – AI Calling, Voicemail Drop, Power Dialer & More",
  description:
    "Explore every Dialeads feature: AI voice agents, ringless voicemail drops, power dialer, live objection rebuttals, 10DLC SMS, and team analytics. Built for outbound.",
};

function FeatureCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-base text-[#0b1c30]">
      <span className="w-6 h-6 rounded-full bg-[#e3e0f1] flex items-center justify-center text-[#630ed4] font-bold text-xs shrink-0">
        <Check className="h-3.5 w-3.5" />
      </span>
      {children}
    </li>
  );
}

function LeadRow({
  name,
  role,
  angle,
  status,
  statusColor,
}: {
  name: string;
  role: string;
  angle: string;
  status: string;
  statusColor: string;
}) {
  return (
    <div className="p-3 rounded-xl bg-white shadow-sm flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[#0b1c30]">{name}</span>
        <span className="text-xs text-[#5e5d6b]">{role}</span>
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#630ed4]">
          Pitch Angle
        </span>
        <span className="text-xs text-[#0b1c30]">{angle}</span>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}

function RepRow({
  initials,
  name,
  detail,
  badge,
  badgeColor,
  dotColor,
  bgColor,
  action,
}: {
  initials: string;
  name: string;
  detail: string;
  badge: string;
  badgeColor: string;
  dotColor: string;
  bgColor: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="p-3 rounded-xl bg-white shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className={`w-9 h-9 rounded-full ${bgColor} text-white flex items-center justify-center font-bold text-xs`}
          >
            {initials}
          </div>
          <span
            className={`w-3 h-3 rounded-full ${dotColor} absolute bottom-0 right-0 border-2 border-white`}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#0b1c30]">{name}</span>
          <span className="text-xs text-[#5e5d6b]">{detail}</span>
        </div>
      </div>
      {action || (
        <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColor}`}>
          {badge}
        </span>
      )}
    </div>
  );
}

const pillTabs = [
  { label: "Autonomous Agent", href: "#feature-ai-agent" },
  { label: "Power Dialer", href: "#feature-power-dialer" },
  { label: "Lead Engine", href: "#feature-leads" },
  { label: "Copilot Rebuttals", href: "#feature-rebuttals" },
  { label: "Dispositions", href: "#feature-dispositions" },
  { label: "10DLC & SIP", href: "#feature-compliance" },
];

export default function FeaturesPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[#f8f9ff] bg-dot-pattern pt-28 pb-20 lg:pb-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-tr from-[#630ed4]/10 via-[#7c3aed]/15 to-transparent blur-[80px] rounded-full" />
        <div className="relative mx-auto max-w-[75rem] px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e3e0f1]/80 text-[#630ed4] text-[12px] font-bold uppercase tracking-[0.08em] shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            Built for Outbound Sales Teams
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[68px] lg:leading-[72px] font-black tracking-tight text-[#0b1c30] max-w-4xl mb-4">
            Every Feature Built to Get Your Prospect{" "}
            <span className="text-[#630ed4]">on the Phone</span>
          </h1>

          <p className="text-lg text-[#5e5d6b] max-w-2xl mb-8 leading-relaxed">
            From solo founders to 50-seat call centers — Dialeads gives every
            team the tools to dial more, connect more, and close more.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-[#eff4ff] rounded-full shadow-sm max-w-3xl">
            {pillTabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#4a4455] hover:text-[#630ed4] hover:bg-white transition-all"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 01: AI Cold Calling [Text L / Visual R] ---- */}
      <section className="py-20 lg:py-24 bg-white" id="feature-ai-agent">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              01 &bull; AUTONOMOUS PROSPECTING
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              Live AI Calls and Ringless Voicemail Drop — In One Platform
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Configure realistic AI voice agents that handle first-touch cold
              calls. When no one answers, Dialeads drops a pre-recorded ringless
              voicemail instantly — no dial tone, no hang-up, no wasted time.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>
                Auto answering machine detection (AMD)
              </FeatureCheck>
              <FeatureCheck>
                1-click pre-recorded voicemail drop
              </FeatureCheck>
              <FeatureCheck>
                AI voice agent for full autonomous first-touch calls
              </FeatureCheck>
            </ul>
            <div>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#630ed4] text-white text-sm font-semibold shadow-md hover:bg-[#7c3aed] transition-all">
                Configure AI Persona
                <Settings2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Visual: AI Voice Engine */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#213145] text-[#eaf1ff] shadow-xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#630ed4]" />
              {/* Window header */}
              <div className="flex items-center justify-between pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#c7c5d5]" />
                  <span className="w-3 h-3 rounded-full bg-[#eaddff]" />
                  <span className="text-[12px] font-semibold text-[#cbdbf5] ml-2">
                    dialeads-texml-stream.v1
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#630ed4]/20 text-[#d2bbff] text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d2bbff] animate-ping" />
                  412ms LATENCY
                </div>
              </div>

              {/* Persona card */}
              <div className="rounded-xl bg-white/10 p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#630ed4] flex items-center justify-center">
                      <Mic className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#f8f9ff]">
                        Elena Vance (Executive SDR)
                      </h4>
                      <span className="text-[12px] text-[#cbdbf5]">
                        ElevenLabs Turbo v2.5 &bull; Multilingual Cold Dial
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#7c3aed]/40 text-[#eaddff] text-xs font-semibold">
                    Ready
                  </span>
                </div>

                {/* Waveform */}
                <div className="flex items-end gap-1 h-12 py-1 px-2 bg-[#213145]/80 rounded-lg">
                  {[3, 8, 11, 6, 9, 4, 10, 7, 2, 6, 10, 5, 8, 3].map(
                    (h, i) => (
                      <span
                        key={i}
                        className={`w-1.5 rounded-full animate-pulse ${
                          i % 3 === 0
                            ? "bg-[#630ed4]"
                            : i % 3 === 1
                              ? "bg-[#7c3aed]"
                              : "bg-[#eaddff]"
                        }`}
                        style={{ height: `${h * 4}px` }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* TeXML console */}
              <div className="rounded-xl bg-white/5 p-4 font-mono text-xs text-[#cbdbf5] space-y-1">
                <div className="text-[#eaddff] flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>
                    &lt;Response
                    stream=&quot;wss://telephony.dialeads.io/v1/stream&quot;&gt;
                  </span>
                </div>
                <div className="pl-4 text-[#f8f9ff]">
                  &lt;Say voice=&quot;eleven_turbo_elena&quot;
                  interruption_sensitivity=&quot;0.82&quot;&gt;
                </div>
                <div className="pl-8 text-[#d2bbff]">
                  &quot;Hi Marcus, saw you lead Ops at TechCorp. Quick
                  question...&quot;
                </div>
                <div className="pl-4 text-[#f8f9ff]">&lt;/Say&gt;</div>
                <div className="text-[#eaddff]">&lt;/Response&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 02: Power Dialer [Visual L / Text R] ---- */}
      <section className="py-20 lg:py-24 bg-[#f8f9ff]" id="feature-power-dialer">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: WebRTC Softphone */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-white shadow-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#630ed4] animate-ping" />
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#630ed4]">
                    LIVE WEBRTC SIP CALL
                  </span>
                </div>
                <span className="text-xl font-semibold text-[#0b1c30] font-mono">
                  00:43
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#eff4ff] mb-4">
                <div className="w-12 h-12 rounded-full bg-[#e3e0f1] flex items-center justify-center text-[#5e5d6b] font-bold text-sm">
                  JD
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#0b1c30]">
                    Jordan Davis
                  </span>
                  <span className="text-sm text-[#5e5d6b]">
                    VP Revenue &bull; CloudSprint (+1 415-890-2134)
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="px-2 py-0.5 rounded bg-[#630ed4] text-white text-[10px] uppercase font-bold">
                    Local CID
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                {[
                  { icon: MicOff, label: "Mute" },
                  { icon: Pause, label: "Hold" },
                  { icon: Voicemail, label: "Drop VM" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="p-3 rounded-xl bg-[#e5eeff] flex flex-col items-center hover:bg-[#e3e0f1] transition cursor-pointer"
                  >
                    <c.icon className="h-5 w-5 text-[#630ed4] mb-1" />
                    <span className="text-xs font-semibold text-[#0b1c30]">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#dce9ff] text-[#0b1c30]">
                <span className="text-sm">Next Prospect Dial</span>
                <span className="px-3 py-0.5 rounded bg-white shadow-sm font-mono text-xs font-bold text-[#630ed4]">
                  SPACEBAR
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              02 &bull; DIALING VELOCITY
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              3x More Calls Per Day Without the Manual Work
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Stop dialing numbers by hand. Dialeads cycles through your lead
              queue automatically with local caller ID matching for higher pickup
              rates. Your reps focus on conversations, not keypads.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>WebRTC in-browser softphone — no hardware needed</FeatureCheck>
              <FeatureCheck>
                Local presence caller ID for 85%+ answer rates
              </FeatureCheck>
              <FeatureCheck>
                Keyboard shortcuts to move between leads instantly
              </FeatureCheck>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- 03: Lead Management [Text L / Visual R] ---- */}
      <section className="py-20 lg:py-24 bg-white" id="feature-leads">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              03 &bull; ORGANIZED PIPELINE
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              10,000 Leads Organized and Ready to Dial
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Import leads via CSV, auto-validate phone numbers, and segment by
              campaign, territory, or deal size. Filter uncalled contacts
              instantly. Search across thousands of records in milliseconds.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>Bulk CSV import up to 250,000 rows</FeatureCheck>
              <FeatureCheck>
                Automatic DNC scrub and phone number formatting
              </FeatureCheck>
              <FeatureCheck>Custom lead tags and status badges</FeatureCheck>
            </ul>
          </div>

          {/* Visual: Lead dispatch table */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#e5eeff] shadow-xl overflow-hidden p-4">
              <div className="flex items-center justify-between pb-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-[#0b1c30]">
                    Queue (3,670)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#eaddff] text-[#25005a] text-xs font-semibold">
                    Uncalled Only
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 rounded bg-white text-[#0b1c30] shadow-sm">
                    <Filter className="h-4 w-4" />
                  </button>
                  <button className="p-1 rounded bg-[#630ed4] text-white shadow-sm">
                    <Upload className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <LeadRow
                  name="Sarah Lin"
                  role="Director @ Apex Growth"
                  angle="SDR Ramp Velocity"
                  status="New"
                  statusColor="bg-[#e3e0f1] text-[#464552]"
                />
                <LeadRow
                  name="Michael Vance"
                  role="VP Ops @ NorthScale"
                  angle="Voicemail Elimination"
                  status="Follow Up"
                  statusColor="bg-[#e3e0f1] text-[#464552]"
                />
                <LeadRow
                  name="Kareem Al-Sayed"
                  role="CRO @ FinEdge Group"
                  angle="10DLC Delivery Protection"
                  status="Hot Lead"
                  statusColor="bg-[#eaddff] text-[#25005a]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 04: Objection Rebuttals [Visual L / Text R] ---- */}
      <section className="py-20 lg:py-24 bg-[#f8f9ff]" id="feature-rebuttals">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Copilot UI */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-white shadow-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#630ed4]">
                  Live Objection Copilot
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-[#5e5d6b]">
                  <span className="w-2 h-2 rounded-full bg-[#630ed4]" />
                  Instant AI Generation
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { label: '"We have an internal guy"', active: true },
                  { label: '"Too expensive"', active: false },
                  { label: '"Overseas team handles"', active: false },
                  { label: '"Just email me info"', active: false },
                ].map((pill) => (
                  <button
                    key={pill.label}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      pill.active
                        ? "bg-[#630ed4] text-white shadow-sm"
                        : "bg-[#e5eeff] text-[#0b1c30] hover:bg-[#e3e0f1]"
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              <div className="rounded-xl bg-[#eff4ff] p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a4455]">
                    Recommended Pivot Script
                  </span>
                  <button className="inline-flex items-center gap-1 text-xs font-semibold text-[#630ed4] hover:underline">
                    <Copy className="h-3 w-3" /> Copy Script
                  </button>
                </div>
                <p className="text-sm text-[#0b1c30] leading-relaxed italic">
                  &ldquo;Totally get that, and most VPs we onboard already have
                  2-3 SDRs. The difference is Dialeads handles the first 2,000
                  cold touches so your internal rep only speaks with warmed
                  accounts ready to see a demo. What if we just ran 500 leads
                  alongside him?&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#e5eeff] rounded-xl p-2">
                <input
                  className="bg-transparent flex-1 px-3 text-sm outline-none text-[#0b1c30] placeholder:text-[#7b7487]"
                  placeholder="Type prospect objection or custom pushback..."
                  type="text"
                  readOnly
                />
                <button className="px-4 py-2 rounded-lg bg-[#630ed4] text-white text-xs font-semibold shadow">
                  Pivot
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              04 &bull; REAL-TIME COPILOT
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              The Right Rebuttal — Before Your Rep Even Thinks
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Dialeads transcribes prospect speech in real time. The moment an
              objection lands — price, timing, competition — the right rebuttal
              appears on screen. No scripts to memorize. No freezing up.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>
                Pre-built objection playbooks for common pushbacks
              </FeatureCheck>
              <FeatureCheck>Custom rebuttal decks by vertical or competitor</FeatureCheck>
              <FeatureCheck>1-click copy to paste verbatim or modify</FeatureCheck>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- 05: Dispositions [Text L / Visual R] ---- */}
      <section className="py-20 lg:py-24 bg-white" id="feature-dispositions">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              05 &bull; DISPOSITION INTELLIGENCE
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              Log Every Call Result in One Second
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              After each call, reps tap one button — Interested, Voicemail, No
              Answer, Callback, Bad Number. Queue advances automatically. CRM
              updates in real time. Zero manual entry.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>
                1-click disposition system
              </FeatureCheck>
              <FeatureCheck>
                Automatic next-step triggers per disposition
              </FeatureCheck>
              <FeatureCheck>
                Call recording + AI transcript for every call
              </FeatureCheck>
            </ul>
          </div>

          {/* Visual: Disposition buttons */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#e5eeff] shadow-xl p-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4a4455] mb-3 block">
                1-Click Fast Disposition
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  {
                    icon: Smile,
                    label: "Interested",
                    active: true,
                  },
                  { icon: Send, label: "Sent Mockup", active: false },
                  { icon: Voicemail, label: "Voicemail", active: false },
                  {
                    icon: PhoneMissed,
                    label: "No Answer",
                    active: false,
                  },
                  { icon: PhoneOff, label: "Bad Number", active: false },
                  { icon: Clock, label: "Callback", active: false },
                ].map((d) => (
                  <button
                    key={d.label}
                    className={`p-3 rounded-xl text-xs font-semibold shadow-sm flex items-center justify-center gap-1 ${
                      d.active
                        ? "bg-[#630ed4] text-white shadow-md"
                        : "bg-white text-[#0b1c30] hover:bg-[#e3e0f1]"
                    }`}
                  >
                    <d.icon className="h-3.5 w-3.5" /> {d.label}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Voicemail className="h-5 w-5 text-[#630ed4]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#0b1c30]">
                      Voicemail Dropped &bull; Queue Auto-Advanced
                    </span>
                    <span className="text-xs text-[#5e5d6b]">
                      1-click drop custom voicemail and auto-advance queue
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#630ed4]">
                  AUTO-ADVANCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 06: Omnichannel [Visual L / Text R] ---- */}
      <section className="py-20 lg:py-24 bg-[#f8f9ff]" id="feature-omnichannel">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: SMS template */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-white shadow-xl p-8">
              <div className="flex items-center justify-between pb-3 mb-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#630ed4]">
                  Fast Follow-Up Dispatcher
                </span>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="px-2 py-0.5 rounded bg-[#e3e0f1] text-[#464552]">
                    SMS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0b1c30]">
                    WhatsApp
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#e5eeff] text-[#0b1c30]">
                    Email
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-[#eff4ff] p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0b1c30]">
                    Template: Executive Demo Recap
                  </span>
                  <span className="text-xs text-[#630ed4] font-semibold">
                    Telnyx SMS Delivery
                  </span>
                </div>
                <p className="text-sm text-[#0b1c30] mb-3">
                  Hey{" "}
                  <span className="bg-[#eaddff] px-1 rounded text-[#25005a]">
                    {"{prospect_first_name}"}
                  </span>
                  ! Great catching you just now. Here is that customized ROI
                  model we touched on:{" "}
                  <span className="text-[#630ed4] underline">
                    https://dialeads.io/m/davis-49
                  </span>
                  . Talk Thursday at 2pm!
                </p>
                <div className="flex items-center gap-2 text-xs text-[#5e5d6b] font-mono">
                  <span>Tokens: 142 / 160</span>
                  <span>&bull;</span>
                  <span>1 Segment</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-[#630ed4] text-white text-sm font-semibold shadow-md hover:bg-[#7c3aed] flex items-center justify-center gap-2 transition">
                <Zap className="h-4 w-4" /> Send In 10 Seconds
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              06 &bull; MULTI-CHANNEL VELOCITY
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              Follow Up via SMS, Email, or WhatsApp — Right After the Call
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Timing is everything. Dialeads triggers pre-written follow-up
              messages the moment a call ends — personalized with the
              prospect&apos;s name, company, and next step. No copy-paste.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>Personalized SMS with dynamic placeholders</FeatureCheck>
              <FeatureCheck>Email and WhatsApp dispatch in 10 seconds</FeatureCheck>
              <FeatureCheck>
                Pre-built executive proposal and calendar link templates
              </FeatureCheck>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- 07: Unified Inbox [Text L / Visual R] ---- */}
      <section className="py-20 lg:py-24 bg-white" id="feature-inbox">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              07 &bull; CENTRALIZED COMMS
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              Every Call, SMS, and Note in One View
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              No more switching between 5 tools. Dialeads combines call
              recordings, AI transcripts, inbound/outbound SMS, and notes into
              one clean per-contact timeline.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>Audio player with waveform scrubber</FeatureCheck>
              <FeatureCheck>Inbound/outbound SMS chat view</FeatureCheck>
              <FeatureCheck>Live conversation tags for context</FeatureCheck>
            </ul>
          </div>

          {/* Visual: Conversation cockpit */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#e5eeff] shadow-xl p-6">
              {/* Audio player */}
              <div className="p-4 rounded-xl bg-white shadow-sm mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#630ed4]">
                    Call Recording &bull; 03:14
                  </span>
                  <span className="font-mono text-xs text-[#5e5d6b]">
                    Today, 11:24 AM
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-[#630ed4] text-white flex items-center justify-center shadow">
                    <Play className="h-4 w-4" />
                  </button>
                  <div className="flex-1 h-2 bg-[#e5eeff] rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-[#630ed4] rounded-full" />
                  </div>
                  <span className="font-mono text-xs text-[#0b1c30]">
                    01:18
                  </span>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-col items-end">
                  <div className="max-w-xs p-3 rounded-2xl rounded-br-none bg-[#630ed4] text-white text-sm shadow-sm">
                    Sent proposal link for tomorrow&apos;s demo review. Let me
                    know if that works!
                  </div>
                  <span className="text-[11px] font-mono text-[#c7c5d5] mt-0.5 flex items-center gap-1">
                    Delivered{" "}
                    <CheckCircle2 className="h-3 w-3 text-[#630ed4]" />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="max-w-xs p-3 rounded-2xl rounded-bl-none bg-white text-[#0b1c30] text-sm shadow-sm">
                    Looks solid. Added our VP of Sales to the invite. See you at
                    2pm.
                  </div>
                  <span className="text-[11px] font-mono text-[#5e5d6b] mt-0.5">
                    Prospect &bull; 11:29 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 08: 10DLC & SIP [Visual L / Text R] ---- */}
      <section className="py-20 lg:py-24 bg-[#f8f9ff]" id="feature-compliance">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Compliance panel */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-2xl bg-white shadow-xl p-8">
              <div className="flex items-center justify-between pb-3 mb-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#630ed4]">
                  Telephony &amp; Regulatory Compliance
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#e3e0f1] text-[#630ed4] font-bold text-xs">
                  SOC-2 TYPE II
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="p-4 rounded-xl bg-[#eff4ff] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#630ed4]" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#0b1c30]">
                        10DLC Campaign Registry
                      </span>
                      <span className="text-xs text-[#5e5d6b]">
                        A2P Verified &bull; TCR-ID: CMP-899201
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#630ed4] text-white text-xs font-semibold">
                    Approved
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#eff4ff] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Radio className="h-5 w-5 text-[#630ed4]" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#0b1c30]">
                        Direct SIP Trunk Balance
                      </span>
                      <span className="text-xs text-[#5e5d6b]">
                        Telnyx Global Ingress &bull; DID 48 Numbers
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#0b1c30]">
                    $1,438.20
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#e5eeff] rounded-xl text-xs text-[#0b1c30]">
                <span>Audio Device Routing</span>
                <span className="font-semibold text-[#630ed4]">
                  Jabra Engage 75 Stereo (Split)
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              08 &bull; ENTERPRISE TELEPHONY
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              Carrier-Grade Compliance Built In
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Dialeads handles A2P 10DLC brand registration, STIR/SHAKEN caller
              ID verification, and time-zone calling window enforcement
              automatically — so you stay compliant without a legal team.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>
                10DLC campaign registration wizard
              </FeatureCheck>
              <FeatureCheck>
                Automatic time-zone call window enforcement (8am–9pm local)
              </FeatureCheck>
              <FeatureCheck>STIR/SHAKEN A-attestation for all outbound caller IDs</FeatureCheck>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- 09: Team Management [Text L / Visual R] ---- */}
      <section className="py-20 lg:py-24 bg-white" id="feature-team">
        <div className="mx-auto max-w-[75rem] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2">
              09 &bull; OPERATOR VISIBILITY
            </span>
            <h2 className="text-3xl sm:text-[40px] sm:leading-[44px] font-extrabold tracking-tight text-[#0b1c30] mb-4">
              See Every Rep&apos;s Performance in Real Time
            </h2>
            <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
              Live presence dashboard shows who&apos;s on a call, who&apos;s
              idle, and who&apos;s closing. Managers can listen in, whisper
              coaching, and pull rep-level performance reports.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureCheck>Real-time rep availability and call status</FeatureCheck>
              <FeatureCheck>Call monitoring and live whisper mode</FeatureCheck>
              <FeatureCheck>Leaderboards and daily dial targets</FeatureCheck>
            </ul>
          </div>

          {/* Visual: Floor telemetry */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#e5eeff] shadow-xl p-6">
              <div className="flex items-center justify-between pb-3 mb-3">
                <span className="text-base font-semibold text-[#0b1c30]">
                  Floor Telemetry (8 Reps)
                </span>
                <span className="font-mono text-xs font-semibold text-[#630ed4]">
                  284 CALLS / HR
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <RepRow
                  initials="DR"
                  name="Danielle Rivera"
                  detail="On Call (04:12) • CloudCorp"
                  badge="Listen"
                  badgeColor=""
                  dotColor="bg-[#630ed4]"
                  bgColor="bg-[#630ed4]"
                  action={
                    <button className="px-2 py-1 rounded bg-[#e3e0f1] text-[#464552] text-xs font-semibold hover:bg-[#630ed4] hover:text-white transition flex items-center gap-1">
                      <Headphones className="h-3 w-3" /> Listen
                    </button>
                  }
                />
                <RepRow
                  initials="TK"
                  name="Tomás Keller"
                  detail="Queue Dialing (48 completed)"
                  badge="Dialing"
                  badgeColor="bg-[#e5eeff] text-[#0b1c30]"
                  dotColor="bg-[#eaddff]"
                  bgColor="bg-[#5e5d6b]"
                />
                <RepRow
                  initials="AJ"
                  name="Amina Jackson"
                  detail="Booked Meeting #4 Today"
                  badge="Top Closer"
                  badgeColor="bg-[#eaddff] text-[#25005a]"
                  dotColor="bg-[#630ed4]"
                  bgColor="bg-[#4f4d5e]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="relative py-24 bg-[#630ed4] text-white overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#7c3aed]/40 blur-[80px] pointer-events-none" />
        <div className="relative mx-auto max-w-[75rem] px-4 lg:px-8 text-center flex flex-col items-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#eaddff] mb-3">
            ZERO FRICTION ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-[60px] font-black tracking-tight text-white mb-4 max-w-3xl">
            Try All Features Free for 14 Days
          </h2>
          <p className="text-lg text-[#eaddff] max-w-2xl mb-8 leading-relaxed">
            Load your lead list, pick a campaign, and launch your first AI dial
            session in under 15 minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="px-10 py-4 rounded-full bg-white text-[#630ed4] font-semibold text-base shadow-xl hover:bg-[#f8f9ff] transition-transform hover:scale-105"
            >
              Start Your 14-Day Free Trial
            </a>
            <a
              href="#"
              className="px-6 py-4 rounded-full text-white text-sm font-semibold hover:underline flex items-center gap-1"
            >
              Book a Custom Live Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-[#eaddff] text-xs">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Instant setup
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Pre-configured numbers
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Cancel anytime
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
