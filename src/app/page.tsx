import Link from "next/link";
import {
  Phone,
  Users,
  Shield,
  BarChart3,
  MessageSquare,
  Inbox,
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  PhoneCall,
  Headphones,
  Zap,
  MoreVertical,
  BadgeCheck,
  Headset,
  Check,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Auto-Detect, Dial, and Drop — Hands Free",
    href: "/features/ai-calling",
    description:
      "Dialeads detects live answers vs voicemail automatically. When nobody picks up, it drops your pre-recorded message instantly. Your reps skip the hold music and talk to humans only.",
    linkText: "Explore Voice & Drop Models",
  },
  {
    icon: Users,
    title: "Import 10,000 Leads. Start Dialing in 2 Minutes.",
    href: "/features/lead-management",
    description:
      "Upload any CSV, auto-clean numbers against DNC lists, and segment leads by campaign, industry, or region. Dialeads keeps your queue organized so your team stays focused.",
    linkText: "View Queue Engine",
  },
  {
    icon: Shield,
    title: "Never Freeze on an Objection Again",
    href: "/features/objection-rebuttals",
    description:
      "When a prospect pushes back, Dialeads transcribes their reply in real time and shows your rep the exact rebuttal to use — trained on high-converting scripts.",
    linkText: "See Live Prompts",
  },
  {
    icon: BarChart3,
    title: "Know What's Working. Cut What's Not.",
    href: "/features/outcome-tracking",
    description:
      "Log every call result in one click — Connected, Voicemail Left, No Answer, Callback Scheduled. Build reports by rep, campaign, or date range.",
    linkText: "Review Dispositions",
  },
  {
    icon: MessageSquare,
    title: "SMS, Email, and Ring-Back — Triggered Automatically",
    href: "/features/omnichannel",
    description:
      "One call rarely closes a deal. Dialeads fires follow-up sequences by SMS, email, or callback timer the moment a call ends — no manual action needed.",
    linkText: "Learn Automations",
  },
  {
    icon: Inbox,
    title: "Every Call, Note, and Message in One Place",
    href: "/features/unified-inbox",
    description:
      "Managers see every active rep conversation. Call recordings, AI transcripts, and SMS threads live in one clean view — no tab switching.",
    linkText: "Inspect Workspace",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Your Leads",
    description:
      "CSV import with auto phone validation, DNC scrub, and local area code matching. Ready in under 2 minutes.",
  },
  {
    number: "02",
    title: "Start Dialing",
    description:
      "AI detects live answers vs voicemail. Drops pre-recorded messages instantly. Reps connect only with live prospects.",
  },
  {
    number: "03",
    title: "Follow Up and Close",
    description:
      "One-click SMS, calendar invite, or email dispatch the moment the call ends. CRM updates automatically.",
  },
];

const testimonials = [
  {
    quote:
      "We started booking 3x more demos per rep per week after switching to Dialeads. The voicemail drop alone saves us 2 hours a day.",
    name: "Sales Manager",
    title: "B2B SaaS Company",
  },
  {
    quote:
      "As a one-person agency, I needed something that could dial my client's leads without me babysitting it. Dialeads does exactly that.",
    name: "Founder",
    title: "Lead Generation Agency",
  },
  {
    quote:
      "The live objection prompts are a game changer for junior reps who used to freeze on cold calls.",
    name: "SDR Team Lead",
    title: "Financial Services",
  },
];

const stats = [
  {
    value: "5M+",
    label: "Calls Processed",
    description: "Autonomous & agent-assisted outbound calls this quarter alone.",
  },
  {
    value: "87%",
    label: "Average Answer Rate with Local ID",
    description: "Dynamic local caller ID presence with zero SPAM likelihood flags.",
  },
  {
    value: "4x",
    label: "More Dials Per Rep Per Day",
    description: "Faster lead qualification compared to manual SDR dialing.",
  },
  {
    value: "1-Click",
    label: "Voicemail Drop — Under 2 Seconds",
    description: "Verified feedback from over 1,200 commercial sales reps.",
  },
];

const logos = ["Stripe", "Twilio", "HubSpot", "Salesforce", "Zapier", "Slack"];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden bg-dot-pattern pt-12 pb-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-[#630ed4]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[75rem] px-4 lg:px-8 flex flex-col items-center text-center pt-24 lg:pt-32">
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1.5 shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <span className="text-sm">&#10024;</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
              AI Calling &amp; Ringless Voicemail Drop Platform
            </span>
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#630ed4]" />
          </div>

          {/* Massive H1 */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-[#0b1c30] sm:text-5xl lg:text-[72px] lg:leading-[76px] max-w-4xl mx-auto mb-6">
            Turn Your Lead List Into Booked Meetings —{" "}
            <span className="relative inline-block text-[#630ed4]">
              On Autopilot
              <svg
                className="absolute -bottom-3 left-0 w-full overflow-visible"
                fill="none"
                viewBox="0 0 300 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-[#630ed4]"
                  d="M4 14C75 4 165 4 296 14"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="4.5"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#5e5d6b] max-w-[620px] mx-auto mb-12 leading-relaxed">
            Dialeads runs AI-powered outbound calls and drops ringless voicemails
            for small businesses, agencies, and sales teams. Your reps only talk
            to people who are ready to respond.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#630ed4] text-white text-sm font-semibold shadow-[0_12px_28px_rgba(99,14,212,0.32)] hover:bg-[#7c3aed] hover:shadow-[0_16px_36px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Start Free Trial
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0b1c30] text-sm font-semibold shadow-sm hover:bg-[#e3e0f1] transition-all"
            >
              <Play className="h-5 w-5 text-[#630ed4] fill-[#630ed4]" />
              Watch 2-Min Demo
            </a>
          </div>

          {/* Social Proof Badge Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#5e5d6b] text-left mb-24">
            <div className="flex -space-x-2 items-center">
              {[
                "bg-purple-500",
                "bg-indigo-500",
                "bg-violet-400",
                "bg-fuchsia-500",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ring-2 ring-white ${bg} flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-[#eaddff] flex items-center justify-center text-[10px] font-bold text-[#25005a] ring-2 ring-white">
                +500
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-[18px] w-[18px] fill-amber-500 text-amber-500"
                  />
                ))}
                <span className="text-xl font-semibold text-[#0b1c30] ml-1">
                  4.9/5
                </span>
              </div>
              <span className="text-sm text-[#5e5d6b]">
                Trusted by 500+ teams on G2 &amp; Capterra
              </span>
            </div>
          </div>

          {/* ===== HERO VISUAL: Operator Cockpit ===== */}
          <div className="relative w-full max-w-5xl mx-auto pt-4">
            {/* Glow Aura */}
            <div className="absolute inset-x-8 top-12 bottom-0 bg-[#630ed4]/20 blur-[80px] rounded-3xl -z-10 scale-95" />

            {/* Tilted Cockpit Container */}
            <div className="relative rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] lg:-rotate-1 hover:rotate-0 transition-transform duration-700 ease-out overflow-hidden">
              {/* Window Chrome */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#eff4ff]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-3 text-xs text-[#5e5d6b] font-mono">
                    dialeads-operator-cockpit // session-live-9481
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    SIP Connected
                  </span>
                  <MoreVertical className="h-4 w-4 text-[#5e5d6b]" />
                </div>
              </div>

              {/* Inside App Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f8f9ff]">
                {/* Left Panel: Dialing Operator Stream */}
                <div className="lg:col-span-7 p-6 flex flex-col bg-white">
                  <div className="flex items-center justify-between pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#630ed4]/10 flex items-center justify-center text-[#630ed4]">
                        <Headset className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="text-xl font-semibold text-[#0b1c30] block">
                          Marcus Vance
                        </span>
                        <span className="text-sm text-[#5e5d6b]">
                          VP of Operations @ Northwind Logistics
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase">
                      LIVE CALL 02:47
                    </div>
                  </div>

                  {/* Audio Waveform */}
                  <div className="rounded-xl bg-[#0f0f1a] p-4 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#7c3aed]" />
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-[#d2bbff] font-bold">
                        Neural Audio Stream
                      </span>
                      <span className="text-[11px] font-mono text-[#cbdbf5]">
                        Latency: 14ms
                      </span>
                    </div>
                    {/* Animated Waveform Bars */}
                    <div className="h-10 flex items-center gap-1 px-1 my-2">
                      {[3, 6, 8, 4, 9, 7, 5, 8, 4, 9, 6, 3].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full animate-pulse ${i % 3 === 0 ? "bg-[#d2bbff]" : "bg-[#7c3aed]"}`}
                          style={{
                            height: `${h * 4}px`,
                            animationDelay: `${i * 70}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-left text-sm text-[#f8f9ff]/90 italic pt-1">
                      <span className="text-[#d2bbff] font-bold not-italic">
                        Prospect:
                      </span>{" "}
                      &quot;We already have an in-house dispatch team for this,
                      what makes your SLA different?&quot;
                    </div>
                  </div>

                  {/* AI Copilot Rebuttal */}
                  <div className="rounded-xl bg-[#eff4ff] p-4 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Zap className="h-[18px] w-[18px] text-[#630ed4]" />
                        <span className="text-xs uppercase font-bold text-[#630ed4]">
                          Auto-Generated Rebuttal
                        </span>
                      </div>
                      <span className="text-xs text-[#5e5d6b]">
                        94% Confidence
                      </span>
                    </div>
                    <p className="text-sm text-[#0b1c30] leading-snug">
                      &quot;Totally understand Marcus. Most dispatch teams use
                      Dialeads as a high-density triage filter — we absorb 70% of
                      repetitive status inquiries so your dispatchers focus
                      strictly on driver routing. Worth a 7-minute look?&quot;
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="px-3 py-1 rounded-full bg-[#630ed4] text-white text-xs font-medium hover:bg-[#7c3aed]">
                        Speak Verbatim (AI)
                      </button>
                      <button className="px-3 py-1 rounded-full bg-[#d3e4fe] text-[#4a4455] text-xs font-medium hover:bg-[#e3e0f1]">
                        Modify
                      </button>
                      <button className="px-3 py-1 rounded-full bg-[#d3e4fe] text-[#4a4455] text-xs font-medium">
                        Send SMS Link
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Leads Queue & Dispositions */}
                <div className="lg:col-span-5 p-6 bg-[#eff4ff]/50 flex flex-col text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-semibold text-[#0b1c30]">
                      Queue: High Priority ICP
                    </span>
                    <span className="text-xs font-bold text-[#630ed4]">
                      3,670 Leads
                    </span>
                  </div>
                  {/* Lead Rows */}
                  <div className="space-y-2">
                    {[
                      {
                        name: "Elena Rostova",
                        co: "Apex Freight • Dallas, TX",
                        status: "Calling Now",
                        statusClass:
                          "bg-emerald-100 text-emerald-800",
                      },
                      {
                        name: "David Sterling",
                        co: "Horizon Logistics • Chicago, IL",
                        status: "Next up",
                        statusClass:
                          "bg-[#dce9ff] text-[#5e5d6b]",
                      },
                      {
                        name: "Sophia Chen",
                        co: "Pacific Cargo • Seattle, WA",
                        status: "Queued",
                        statusClass:
                          "bg-[#dce9ff] text-[#5e5d6b]",
                      },
                    ].map((lead) => (
                      <div
                        key={lead.name}
                        className="p-3 rounded-lg bg-white shadow-sm flex items-center justify-between"
                      >
                        <div>
                          <span className="text-sm font-semibold text-[#0b1c30] block">
                            {lead.name}
                          </span>
                          <span className="text-xs text-[#5e5d6b]">
                            {lead.co}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold ${lead.statusClass}`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Disposition Grid */}
                  <div className="mt-4 pt-3">
                    <span className="text-xs font-bold uppercase text-[#5e5d6b] block mb-2">
                      One-Click Dispositions
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "✅ Demo Scheduled",
                        "✉️ Sent Mockup",
                        "🎙️ Left Voicemail",
                        "🛑 Gatekeeper Block",
                      ].map((d) => (
                        <div
                          key={d}
                          className="p-2 rounded-lg bg-white text-center text-xs font-medium text-[#0b1c30] hover:bg-[#eaddff] hover:text-[#630ed4] cursor-pointer transition-colors"
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Stat Chips */}
            {/* Chip 1: Top-Left */}
            <div className="absolute -top-6 -left-4 lg:-left-10 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <span className="text-xs font-bold text-[#0b1c30] block">
                  HD Dialing Active
                </span>
                <span className="text-[11px] text-[#5e5d6b] font-mono">
                  18ms Latency • 0.00% Packet Loss
                </span>
              </div>
            </div>

            {/* Chip 2: Bottom-Left */}
            <div className="absolute -bottom-8 -left-4 lg:-left-6 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20 max-w-sm">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-[18px] w-[18px]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0b1c30] block">
                  Autonomous Objection Handled
                </span>
                <span className="text-[11px] text-[#5e5d6b] leading-tight block">
                  &quot;Send an email&quot; → 30-sec custom demo dispatched
                </span>
              </div>
            </div>

            {/* Chip 3: Top-Right */}
            <div className="absolute -top-8 -right-4 lg:-right-8 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20">
              <div className="w-7 h-7 rounded-lg bg-[#630ed4]/10 text-[#630ed4] flex items-center justify-center shrink-0">
                <PhoneCall className="h-[18px] w-[18px]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0b1c30] block">
                  Connected: Apex Corp
                </span>
                <span className="text-[11px] text-[#5e5d6b] font-mono">
                  Duration: 04:12 min • 4.6 ★ High Intent
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO MARQUEE BAR ===== */}
      <section className="w-full bg-white py-8 overflow-hidden">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5e5d6b]">
            Integrates with your existing stack
          </span>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-12 md:gap-16 py-3 opacity-60 hover:opacity-100 transition-opacity animate-marquee md:animate-none md:justify-around md:w-full w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-[28px] md:text-[32px] leading-[36px] font-bold tracking-tight text-[#0b1c30] hover:text-[#630ed4] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY STATS SECTION ===== */}
      <section className="w-full bg-[#eff4ff] py-16">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-8 rounded-2xl bg-white shadow-sm flex flex-col hover:-translate-y-1 transition-transform"
              >
                <span className="text-[56px] leading-[60px] font-bold text-[#630ed4] tracking-tight mb-2">
                  {s.value}
                </span>
                <span className="text-xl font-semibold text-[#0b1c30] mb-1">
                  {s.label}
                </span>
                <span className="text-sm text-[#5e5d6b]">
                  {s.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID (3x2) ===== */}
      <section className="w-full bg-[#f8f9ff] py-24 relative">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#1b1a26] mb-4">
            <span className="text-xs font-bold uppercase">
              Unrivaled Capabilities
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-[56px] sm:leading-[60px] max-w-2xl mx-auto mb-16">
            Everything You Need to Run High-Volume Outbound
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#630ed4]/10 text-[#630ed4] flex items-center justify-center mb-6 group-hover:bg-[#630ed4] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0b1c30] mb-2">
                      {f.title}
                    </h3>
                    <p className="text-base text-[#5e5d6b] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 flex items-center gap-2 text-[#630ed4] text-sm font-semibold">
                    <Link href={f.href}>
                      {f.linkText}
                    </Link>
                    <ArrowRight className="h-[18px] w-[18px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE STEPS ===== */}
      <section className="w-full bg-[#eff4ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
              AI Calling &amp; Ringless Voicemail Drop Platform
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-[56px] sm:leading-[60px]">
              Three Steps to More Meetings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((s) => (
              <div
                key={s.number}
                className="p-8 rounded-2xl bg-white shadow-sm relative z-10 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#eaddff] text-[#630ed4] text-xl font-bold flex items-center justify-center mb-4">
                  {s.number}
                </div>
                <h3 className="text-2xl font-semibold text-[#0b1c30] mb-2">
                  {s.title}
                </h3>
                <p className="text-base text-[#5e5d6b] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OBJECTION HANDLING (Deep Dive Row 1) ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mockup — Left on desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-white shadow-xl p-6">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-xs font-bold uppercase text-[#630ed4]">
                    Objection Playbook Detected
                  </span>
                  <span className="text-xs text-[#5e5d6b] font-mono">
                    Confidence: 99.2%
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff4ff] mb-4">
                  <span className="text-xs font-bold text-[#5e5d6b] uppercase block mb-1">
                    PROSPECT PHRASE
                  </span>
                  <p className="text-base text-[#0b1c30] font-medium italic">
                    &quot;Look, we just signed an annual agreement with another
                    dialer vendor last month.&quot;
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#eaddff] text-[#25005a] mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BadgeCheck className="h-[18px] w-[18px]" />
                    <span className="text-xs font-bold">
                      Recommended Pivot Script
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    &quot;Totally respect that commitment! Most teams who switch
                    to Dialeads keep their existing carrier seats for inbound, but
                    use our AI engine exclusively for high-volume cold outreach to
                    cut cost per connection by 60%. Can I shoot over the
                    comparative SLA analysis?&quot;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 text-[#5e5d6b] text-xs">
                  <span>
                    Average Conversion on this pivot:{" "}
                    <strong className="text-[#0b1c30]">41.8%</strong>
                  </span>
                  <button className="px-4 py-1.5 rounded-full bg-[#630ed4] text-white text-xs font-medium">
                    Dispatch via SMS
                  </button>
                </div>
              </div>
            </div>

            {/* Editorial Copy — Right on desktop */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                Real-Time Intelligence
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-[56px] sm:leading-[60px] mb-4">
                Handle Every Objection Like Your Top Closer
              </h2>
              <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
                Eliminate hesitation from newer reps. As soon as a lead pushes
                back on price, timing, or existing tech solutions, Dialeads
                transcribes the hesitation in real-time and flashes actionable,
                context-aware rebuttals directly inside their viewport.
              </p>
              <ul className="space-y-2 text-[#0b1c30] text-base mb-8">
                {[
                  "Sub-200ms real-time audio transcription and intent detection",
                  "Proprietary objection repositories trained on 10,000+ booked calls",
                  "Configurable playbooks by vertical, competitor, and deal size",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#630ed4] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features/objection-rebuttals"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed]"
              >
                Explore Live Coaching Capabilities
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADS SECTION (Deep Dive Row 2) ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Copy — Left */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                High-Density Velocity
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-[56px] sm:leading-[60px] mb-4">
                10,000 Leads.
                <br />
                Zero Workflow Chaos.
              </h2>
              <p className="text-lg text-[#5e5d6b] mb-6 leading-relaxed">
                Keep your sales engines revving at maximum torque. Dialeads
                orchestrates dialing queues automatically based on response
                probability, historical pickup times, and time-zone rules so reps
                spend zero minutes organizing spreadsheets and 100% of their day
                having revenue conversations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#eff4ff]">
                  <span className="text-xl font-bold text-[#630ed4] block mb-1">
                    98.3%
                  </span>
                  <span className="text-sm text-[#5e5d6b]">
                    Uptime SLA Guaranteed
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff4ff]">
                  <span className="text-xl font-bold text-[#630ed4] block mb-1">
                    +420%
                  </span>
                  <span className="text-sm text-[#5e5d6b]">
                    Avg. Dials Per Rep Per Day
                  </span>
                </div>
              </div>
              <Link
                href="/features/lead-management"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed]"
              >
                View Lead Engine Benchmarks
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>

            {/* Visual Mockup — Right */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white shadow-xl p-6">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-xs font-bold uppercase text-[#0b1c30]">
                    Active Campaign: Enterprise SaaS Tier 1
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    RUNNING
                  </span>
                </div>
                {/* Mini Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[13px]">
                    <thead>
                      <tr className="text-[#5e5d6b] text-[11px] font-bold uppercase">
                        <th className="pb-2 font-semibold">Contact / Company</th>
                        <th className="pb-2 font-semibold">Status</th>
                        <th className="pb-2 font-semibold">Local Time</th>
                        <th className="pb-2 font-semibold text-right">
                          Cadence Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eff4ff]">
                      {[
                        {
                          name: "Alex Mercer",
                          co: "Apex Dynamics",
                          status: "Meeting Booked",
                          statusClass: "bg-emerald-100 text-emerald-800",
                          time: "02:14 PM CST",
                          action: "Calendar Sent",
                          actionClass: "text-[#630ed4]",
                        },
                        {
                          name: "Jessica Taylor",
                          co: "Vertex Cloud",
                          status: "Re-dial @ 3:30",
                          statusClass: "bg-[#eaddff] text-[#630ed4]",
                          time: "12:14 PM PST",
                          action: "Queued",
                          actionClass: "text-[#5e5d6b]",
                        },
                        {
                          name: "Brian O'Connor",
                          co: "FastTrack Global",
                          status: "Voicemail Left",
                          statusClass: "bg-[#e3e0f1] text-[#1b1a26]",
                          time: "03:14 PM EST",
                          action: "SMS Delivered",
                          actionClass: "text-[#5e5d6b]",
                        },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td className="py-2.5">
                            <div className="font-semibold text-[#0b1c30]">
                              {row.name}
                            </div>
                            <div className="text-[#5e5d6b] text-[11px]">
                              {row.co}
                            </div>
                          </td>
                          <td className="py-2.5">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.statusClass}`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="py-2.5 text-[#5e5d6b]">{row.time}</td>
                          <td
                            className={`py-2.5 text-right font-medium ${row.actionClass}`}
                          >
                            {row.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Queue Progress */}
                <div className="mt-4 pt-3 bg-[#eff4ff] rounded-xl p-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#0b1c30]">
                      Queue Progress (8,010 of 10,000 processed)
                    </span>
                    <span className="font-bold text-[#630ed4]">80.1%</span>
                  </div>
                  <div className="w-full bg-[#d3e4fe] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#630ed4] h-2 rounded-full w-[80.1%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="w-full bg-[#eff4ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
            AI Calling &amp; Ringless Voicemail Drop Platform
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-[56px] sm:leading-[60px] mb-16">
            What Sales Teams Say About Dialeads
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative pl-8"
              >
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#630ed4] rounded-r" />
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-[18px] w-[18px] fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-base text-[#0b1c30] italic mb-6 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <span className="text-xl font-semibold text-[#0b1c30] block">
                    {t.name}
                  </span>
                  <span className="text-sm text-[#5e5d6b]">{t.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#630ed4] via-[#7c3aed] to-[#7c3aed] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(99,14,212,0.35)]">
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#eaddff] mb-3">
                AI Calling &amp; Ringless Voicemail Drop Platform
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-[56px] sm:leading-[60px] mb-4">
                Ready to Dial Smarter?
              </h2>
              <p className="text-lg text-[#d2bbff] mb-12 leading-relaxed">
                Start your free trial in under 5 minutes. No credit card
                required. Connect your lead list and launch your first campaign
                today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#630ed4] text-sm font-bold shadow-xl hover:bg-[#f8f9ff] hover:scale-105 active:scale-95 transition-all"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#7c3aed] text-white text-sm font-semibold shadow-sm hover:bg-[#7c3aed]/80 transition-all"
                >
                  <Headphones className="h-[18px] w-[18px]" />
                  Book a Custom Demo
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-12 text-xs text-[#d2bbff]">
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  No credit card
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  SOC2 Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
