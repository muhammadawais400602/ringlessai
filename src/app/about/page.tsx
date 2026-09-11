import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck,
  Target,
  MapPin,
  Flag,
  Users,
  Globe,
  PhoneCall,
  TrendingUp,
  Quote,
  Briefcase,
  Terminal,
  Brain,
  Link2,
  Share2,
  Code,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Dialeads – AI Calling Platform Built for Sales Teams",
  description:
    "Dialeads is an AI-powered calling and voicemail drop platform built to help sales teams, agencies, and businesses book more meetings without manual dialing.",
};

const stats = [
  {
    icon: Flag,
    tag: "Origin",
    value: "2022",
    label: "Founded in San Francisco & New York",
  },
  {
    icon: Users,
    tag: "Talent",
    value: "42",
    label: "Engineers, Ex-SDRs, & Telecom Specialists",
  },
  {
    icon: Globe,
    tag: "Footprint",
    value: "18",
    label: "Countries with Active Dialing Infrastructure",
  },
  {
    icon: PhoneCall,
    tag: "Volume",
    value: "14.8M",
    label: "Cold Calls Successfully Dispatched",
    highlight: true,
  },
];

const values = [
  {
    icon: Zap,
    title: "Speed First",
    desc: "Every millisecond matters in cold outreach. From sub-25ms call latency to 1-click dispositions, every workflow is optimized for sales velocity.",
    footnote: "Benchmarked daily against Tier-1 SIP carriers",
  },
  {
    icon: Layers,
    title: "Radical Simplicity",
    desc: "No bloated dashboards. No 20-field forms. Dialeads shows reps exactly what they need — lead info, live rebuttals, and one-tap follow-up — nothing else.",
    footnote: "Zero context-switching design",
  },
  {
    icon: ShieldCheck,
    title: "Full Transparency",
    desc: "Straightforward pricing. No hidden carrier markups. Clear compliance tooling. What you see is what you get.",
    footnote: "Direct-to-SIP bypass without markups",
  },
  {
    icon: Target,
    title: "Results Only",
    desc: "We measure success one way: booked meetings and closed revenue for our customers. Not time-on-platform. Not feature usage. Pipeline.",
    footnote: "Measured strictly in booked pipeline ($ARR)",
  },
];

const nodes = [
  {
    id: "01",
    title: "Telnyx SIP Trunking",
    desc: "Carrier-grade SIP trunking with global points of presence for crystal-clear audio.",
    metric: "Sub-25ms latency",
  },
  {
    id: "02",
    title: "Platform Uptime",
    desc: "Redundant infrastructure with automatic failover across multiple regions.",
    metric: "99.98% uptime",
  },
  {
    id: "03",
    title: "Caller ID Verification",
    desc: "STIR/SHAKEN A-level attestation on all outbound caller IDs to prevent spam flags.",
    metric: "A-attestation",
  },
  {
    id: "04",
    title: "Security & Compliance",
    desc: "SOC2 Type II certified with DNC scrubbing on every number before it dials.",
    metric: "SOC2 Type II",
  },
];

const leaders = [
  {
    initials: "CF",
    name: "Co-Founder",
    role: "Operations & Strategy",
    prevIcon: Briefcase,
    prev: "Background in outbound sales and revenue operations",
    desc: "Background in outbound sales and revenue operations.",
    location: "Remote",
    links: [
      { icon: Share2, label: "LinkedIn" },
      { icon: Link2, label: "Personal site" },
    ],
    gradient: "from-[#630ed4] to-[#7c3aed]",
  },
  {
    initials: "CF",
    name: "Co-Founder",
    role: "Engineering & Infrastructure",
    prevIcon: Terminal,
    prev: "Background in enterprise telephony and WebRTC",
    desc: "Background in enterprise telephony and WebRTC.",
    location: "Remote",
    links: [
      { icon: Code, label: "GitHub" },
      { icon: Share2, label: "Network" },
    ],
    gradient: "from-[#7c3aed] to-[#d2bbff]",
  },
  {
    initials: "CF",
    name: "Co-Founder",
    role: "Product & AI",
    prevIcon: Brain,
    prev: "Background in AI engineering and voice systems",
    desc: "Background in AI engineering and voice systems.",
    location: "Remote",
    links: [
      { icon: GraduationCap, label: "Research" },
      { icon: Share2, label: "Network" },
    ],
    gradient: "from-[#630ed4] to-[#25005a]",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[48rem] h-96 bg-[#630ed4]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-72 right-10 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* ── Hero ── */}
        <section className="max-w-[75rem] mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-12 flex flex-col items-center text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eaddff] text-[#25005a] shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#630ed4] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#630ed4]">
              Our Story
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[72px] lg:leading-[76px] font-extrabold tracking-tight text-[#0b1c30] max-w-4xl mx-auto mb-6">
            Built to Replace the Manual Work{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#7c3aed]">That Kills Sales Momentum</span>
          </h1>

          <p className="text-lg text-[#4a4455] max-w-2xl mx-auto mb-12">
            Every hour a sales rep spends dialing busy signals, leaving
            voicemails manually, or forgetting to follow up is an hour not spent
            closing. Dialeads was built to fix that.
          </p>

          {/* Visual Collage */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 max-w-5xl mx-auto mt-4">
            {/* Large image */}
            <div className="md:col-span-8 rounded-xl overflow-hidden shadow-md relative h-72 md:h-96 bg-[#213145] group">
              <img
                src="https://res.cloudinary.com/fgjqafs0/image/upload/v1789031026/Overlay_Shadow.png"
                alt="Mission Control: SF Outbound Floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center gap-3 text-white">
                  <PhoneCall className="h-6 w-6 text-[#d2bbff]" />
                  <span className="text-sm font-bold tracking-tight">
                    Mission Control: SF Outbound Floor
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              {/* Small image */}
              <div className="rounded-xl overflow-hidden shadow-md flex-1 relative min-h-[10rem] bg-[#213145]">
                <img
                  src="https://res.cloudinary.com/fgjqafs0/image/upload/v1789031159/about_us_image.png"
                  alt="Voice Latency Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white font-medium">
                    &lt;25ms Voice Latency Lab
                  </span>
                </div>
              </div>

              {/* Stat card */}
              <div className="rounded-xl bg-[#eff4ff] p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#630ed4]">
                  <TrendingUp className="h-7 w-7" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Real-Time
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-4xl font-bold text-[#0b1c30]">99.98%</div>
                  <div className="text-sm text-[#4a4455]">
                    SIP Carrier Route Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Mission Quote ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-12 w-full">
        <div className="relative bg-[#eff4ff] rounded-xl p-8 lg:p-16 shadow-sm overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute -right-8 -bottom-10 opacity-10 select-none pointer-events-none text-[#630ed4]">
            <Quote className="w-60 h-60" />
          </div>
          <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#630ed4]/10 flex items-center justify-center text-[#630ed4] mb-6">
              <Quote className="h-7 w-7" />
            </div>
            <blockquote className="text-2xl lg:text-[32px] lg:leading-[38px] font-extrabold text-[#0b1c30] tracking-tight leading-snug mb-8">
              &ldquo;Sales teams have had the same problem for 20 years — too
              many leads, not enough time, and tools that make reps do the grunt
              work instead of eliminating it. CRMs don&rsquo;t dial. Auto-dialers
              don&rsquo;t handle objections. Voicemail drop tools don&rsquo;t
              follow up. Dialeads combines everything into one platform: AI
              calling, ringless voicemail drop, live objection rebuttals, and
              automated follow-up — so reps spend 100% of their time on
              conversations that matter.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#630ed4] to-[#7c3aed] text-white flex items-center justify-center font-bold text-sm shadow-md">
                AV
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-[#0b1c30]">
                  Alex Vance
                </div>
                <div className="text-sm text-[#4a4455]">
                  Co-Founder &amp; CEO, Dialeads
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.tag}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-full bg-[#eaddff] flex items-center justify-center text-[#25005a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7c3aed]">
                    {s.tag}
                  </span>
                </div>
                <div>
                  <div
                    className={`text-[56px] leading-[60px] font-black tracking-tight mb-2 ${s.highlight ? "text-[#7c3aed]" : "text-[#0b1c30]"}`}
                  >
                    {s.value}
                  </div>
                  <p className="text-base text-[#4a4455]">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c3aed] block mb-2">
              Engineering Standard
            </span>
            <h2 className="text-3xl lg:text-[56px] lg:leading-[60px] font-extrabold text-[#0b1c30] tracking-tight">
              How We Build
            </h2>
          </div>
          <p className="text-base text-[#4a4455] max-w-md">
            How we make architectural decisions, design real-time telephony state
            machines, and support outbound sales engines globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#630ed4] group-hover:bg-[#630ed4] group-hover:text-white transition-colors mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0b1c30] tracking-tight mb-3">
                    {v.title}
                  </h3>
                  <p className="text-base text-[#4a4455] leading-relaxed mb-6">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#630ed4] text-sm font-semibold">
                  <span>{v.footnote}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Telephony Pipeline ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-8 w-full">
        <div className="bg-[#0b1c30] text-white rounded-xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#7c3aed]" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] block mb-1">
                Internal Infrastructure
              </span>
              <h3 className="text-[32px] leading-[38px] font-bold">
                Enterprise Infrastructure. Startup Simplicity.
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d2bbff] animate-ping" />
              <span className="text-xs text-[#d2bbff]">
                Global POPs Active • 19 Edge Nodes
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-[#cbdbf5]">
            {nodes.map((n) => (
              <div
                key={n.id}
                className="bg-white/5 rounded-lg p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase text-[#d2bbff] mb-2">
                    Node {n.id}
                  </div>
                  <div className="text-xl font-semibold text-white mb-1">
                    {n.title}
                  </div>
                  <p className="text-sm">{n.desc}</p>
                </div>
                <div className="mt-4 text-xs font-mono text-[#d2bbff]">
                  {n.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7c3aed] block mb-2">
            Executive Leadership
          </span>
          <h2 className="text-3xl lg:text-[56px] lg:leading-[60px] font-extrabold text-[#0b1c30] tracking-tight mb-3">
            Built by Operators Who&apos;ve Been in the Trenches
          </h2>
          <p className="text-base text-[#4a4455]">
            Our founding team brings experience from enterprise telephony,
            outbound sales, and AI engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((m) => {
            const PrevIcon = m.prevIcon;
            return (
              <div
                key={m.initials}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-tr ${m.gradient} text-white flex items-center justify-center font-bold text-2xl shadow-md`}
                    >
                      {m.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b1c30]">
                        {m.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#7c3aed]">
                        {m.role}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#1b1a26] text-xs font-medium mb-4">
                    <PrevIcon className="h-4 w-4" />
                    <span>{m.prev}</span>
                  </div>
                  <p className="text-base text-[#4a4455] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-[#4a4455]">
                  <span className="text-sm font-medium flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {m.location}
                  </span>
                  <div className="flex items-center gap-2">
                    {m.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href="#"
                          aria-label={link.label}
                          className="hover:text-[#630ed4] transition-colors p-1"
                        >
                          <LinkIcon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Investors + Hiring CTA ── */}
      <section className="max-w-[75rem] mx-auto px-4 lg:px-8 py-16 mb-24 w-full">
        {/* Investors */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4a4455] block mb-6">
            Backed by investors who believe in the future of AI-powered sales.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-80">
            <div className="flex items-center gap-2 text-xl font-bold text-[#0b1c30]">
              Seed-funded. Building for the long term.
            </div>
          </div>
        </div>

        {/* Hiring Banner */}
        <div className="relative bg-gradient-to-br from-[#630ed4] via-[#630ed4] to-[#25005a] text-white rounded-xl p-8 lg:p-16 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-dot-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                14 Open Roles in Engineering, Design, &amp; Sales
              </div>
              <h3 className="text-3xl lg:text-[56px] lg:leading-[60px] font-extrabold tracking-tight leading-tight mb-3">
                Start Calling Smarter Today
              </h3>
              <p className="text-lg text-[#eaddff] max-w-xl">
                No long onboarding. No sales calls required. Load your first
                lead list and launch a campaign in 15 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#630ed4] text-sm font-bold shadow-lg hover:bg-[#eff4ff] transition-all"
              >
                View Open Positions
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-all"
              >
                Talk to Founders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
