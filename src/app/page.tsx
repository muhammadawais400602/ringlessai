import Link from "next/link";
import {
  Phone,
  Upload,
  Zap,
  BarChart3,
  MessageSquare,
  Inbox,
  ArrowRight,
  Play,
  Star,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  PhoneCall,
  Clock,
  Target,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Autonomous AI Calling & Voicemail Drops",
    href: "/features/ai-calling",
    description:
      "Deploy AI-powered voice agents that dial, qualify, and leave personalized voicemails at scale -- without lifting a finger.",
  },
  {
    icon: Users,
    title: "High-Capacity Lead Management",
    href: "/features/lead-management",
    description:
      "Import thousands of leads, segment by ICP, and let the dialer prioritize the hottest prospects automatically.",
  },
  {
    icon: Shield,
    title: "Live Objection Rebuttals",
    href: "/features/objection-rebuttals",
    description:
      "Real-time AI coaching surfaces battle-tested rebuttals the moment a prospect pushes back on your reps.",
  },
  {
    icon: BarChart3,
    title: "Granular Outcome Tracking",
    href: "/features/outcome-tracking",
    description:
      "Track every call disposition, conversion event, and pipeline impact with dashboards built for revenue teams.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Follow-up",
    href: "/features/omnichannel",
    description:
      "Trigger SMS, email, and ringless voicemail sequences based on call outcomes to keep deals moving forward.",
  },
  {
    icon: Inbox,
    title: "Unified Operator Inbox",
    href: "/features/unified-inbox",
    description:
      "Centralize every conversation -- calls, texts, voicemails -- into a single inbox your team actually uses.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Leads",
    description:
      "Import your prospect list via CSV, CRM sync, or API. Our engine enriches each record with intent signals and prioritizes by close probability.",
  },
  {
    number: "02",
    title: "Start Dialing",
    description:
      "Launch autonomous calling campaigns with local presence, AI voicemail drops, and live transfer to your reps when a prospect picks up.",
  },
  {
    number: "03",
    title: "Close & Follow Up",
    description:
      "Every outcome triggers the right next step -- SMS follow-up, calendar booking, or nurture sequence -- so no lead slips through the cracks.",
  },
];

const testimonials = [
  {
    quote:
      "Vocalis replaced our entire SDR tech stack. We went from 80 dials a day to 800 -- and our pipeline tripled in the first month.",
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "ScaleOps",
  },
  {
    quote:
      "The AI voicemail drops alone are worth the subscription. Our callback rate jumped 4x and reps spend zero time leaving messages.",
    name: "Marcus Thompson",
    title: "Revenue Operations Lead",
    company: "DataForge",
  },
  {
    quote:
      "We onboarded in 20 minutes and booked 14 meetings in the first week. This is the future of outbound.",
    name: "Emily Rodriguez",
    title: "Head of Growth",
    company: "NexGen SaaS",
  },
];

const stats = [
  { value: "2.4M+", label: "Calls Dialed" },
  { value: "3x", label: "Pipeline Velocity" },
  { value: "85%", label: "Local Answer Rate" },
  { value: "4.9/5", label: "Operator CSAT" },
];

const logos = ["stripe", "twilio", "retool", "ramp", "brex", "vercel", "supabase"];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-dot-pattern pt-12 pb-20">
        {/* Ambient Radial Glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-[#630ed4]/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1.5 shadow-sm">
              <span className="text-sm">&#10024;</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
                AI-Powered Cold Calling &amp; Voicemail Drops
              </span>
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#630ed4]" />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl lg:text-6xl">
              Close More Deals With{" "}
              <span className="text-[#630ed4]">Every Call</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5e5d6b]">
              The autonomous cold-calling engine that dials, qualifies, and
              drops personalized voicemails at scale -- so your reps focus on
              closing, not dialing.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-[#630ed4] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(99,14,212,0.32)] transition hover:bg-[#7c3aed]"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#0b1c30] shadow-sm transition hover:bg-[#e3e0f1]"
              >
                <Play className="h-4 w-4 text-[#630ed4]" />
                Watch 2 Min Demo
              </a>
            </div>

            {/* Rating + Avatars */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex -space-x-2">
                {[
                  "bg-purple-500",
                  "bg-indigo-500",
                  "bg-violet-400",
                  "bg-fuchsia-500",
                  "bg-purple-600",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ring-2 ring-white ${bg} flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-[#0b1c30]">
                  4.9/5
                </span>
                <span className="text-sm text-[#5e5d6b]">
                  from 1,200+ teams
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative rounded-2xl bg-white p-1 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)]">
              {/* Simulated Window Chrome */}
              <div className="flex items-center justify-between rounded-t-xl bg-[#eff4ff] px-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-medium text-[#5e5d6b]">
                    Vocalis AI Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded bg-[#eaddff] px-3 py-1 text-xs font-medium text-[#630ed4]">
                    Live Session
                  </div>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid gap-6 rounded-b-xl bg-[#f8f9ff] p-6 lg:grid-cols-3">
                {/* Contact card */}
                <div className="rounded-lg border border-[#ccc3d8] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#630ed4] text-sm font-bold text-white">
                      MV
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0b1c30]">
                        Marcus Vance
                      </p>
                      <p className="text-xs text-[#5e5d6b]">
                        VP Sales -- Acme Corp
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#5e5d6b]">Status</span>
                      <span className="text-green-600">Connected</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#5e5d6b]">Duration</span>
                      <span className="text-[#0b1c30]">02:34</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#5e5d6b]">Sentiment</span>
                      <span className="text-[#7c3aed]">Positive</span>
                    </div>
                  </div>
                </div>

                {/* Queue panel */}
                <div className="rounded-lg border border-[#ccc3d8] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#630ed4]">
                    Queue: High Priority ICP
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: "J. Rivera", co: "Apex Inc", status: "Next" },
                      { name: "L. Park", co: "Bolt.io", status: "Queued" },
                      { name: "R. Kim", co: "Sora Labs", status: "Queued" },
                    ].map((lead, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e5eeff] text-[9px] font-medium text-[#4a4455]">
                            {lead.name[0]}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#0b1c30]">
                              {lead.name}
                            </p>
                            <p className="text-[10px] text-[#5e5d6b]">
                              {lead.co}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-medium ${i === 0 ? "text-green-600" : "text-[#5e5d6b]"}`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics panel */}
                <div className="rounded-lg border border-[#ccc3d8] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#630ed4]">
                    Today&apos;s Metrics
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Calls Made", val: "247" },
                      { label: "Connections", val: "68" },
                      { label: "Meetings Set", val: "12" },
                      { label: "Avg Duration", val: "1:48" },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-xs text-[#5e5d6b]">
                          {m.label}
                        </span>
                        <span className="text-sm font-semibold text-[#0b1c30]">
                          {m.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO STRIP ===== */}
      <section className="border-b border-[#ccc3d8] bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#5e5d6b]">
            AI Powered Cold Calling &amp; Enterprise Grade
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-wide text-[#0b1c30]/40 transition hover:text-[#0b1c30]/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#eff4ff] py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 shadow-sm transition hover:-translate-y-1"
            >
              <span className="text-3xl font-extrabold text-[#630ed4] lg:text-4xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-[#0b1c30]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="bg-[#f8f9ff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#e3e0f1] px-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4a4455]">
                Unrivaled Capabilities
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">
              Everything Your Team Needs to Dominate the Phones
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group flex flex-col rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c3aed]/10 transition group-hover:bg-[#7c3aed] group-hover:text-white">
                    <Icon className="h-6 w-6 text-[#7c3aed] group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b1c30]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5e5d6b]">
                    {f.description}
                  </p>
                  <Link
                    href={f.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#630ed4] transition group-hover:gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE STEPS ===== */}
      <section className="bg-[#eff4ff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">
              Three Steps to Cold Outbound Success
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">
              Three Steps to 10x Cold Outbound
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.number}
                className="relative rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaddff] text-lg font-bold text-[#630ed4]">
                  {s.number}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0b1c30]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5e5d6b]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OBJECTION HANDLING ===== */}
      <section className="bg-[#f8f9ff] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#eaddff] px-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
                Real-Time Intelligence
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">
              Handle Every Objection Like Your Top Closer
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5e5d6b]">
              Vocalis listens in real time and surfaces proven rebuttals the
              instant a prospect raises a concern -- pricing, timing,
              competition, or &quot;just send me an email.&quot;
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Real-time sentiment analysis on every call",
                "Battle-tested rebuttal library trained on 2M+ calls",
                "Automatic coaching tips for junior reps",
                "Post-call scoring with win/loss breakdown",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#630ed4]" />
                  <span className="text-sm text-[#0b1c30]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right mockup */}
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <div className="rounded-xl bg-white p-5">
              {/* Call header */}
              <div className="flex items-center justify-between border-b border-[#eff4ff] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c3aed]/10">
                    <PhoneCall className="h-4 w-4 text-[#7c3aed]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0b1c30]">
                      Live Call -- Alex Rivera
                    </p>
                    <p className="text-xs text-[#5e5d6b]">
                      VP Engineering, Bolt.io
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                  <span className="text-xs font-medium text-red-400">
                    Recording
                  </span>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#e5eeff] text-[9px] font-bold text-[#4a4455]">
                    AR
                  </div>
                  <div className="rounded-lg bg-[#eff4ff] px-4 py-2.5">
                    <p className="text-xs text-[#0b1c30]">
                      &quot;We&apos;re already locked into a contract with your
                      competitor through Q2.&quot;
                    </p>
                  </div>
                </div>

                <div className="ml-9 rounded-lg border border-[#d2bbff] bg-[#eaddff] px-4 py-2.5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#630ed4]">
                    AI Suggested Rebuttal
                  </p>
                  <p className="text-xs text-[#0b1c30]">
                    &quot;Totally understand, Alex. A lot of our best customers
                    ran parallel pilots before their renewal came up -- we can
                    have you live in 48 hours with zero disruption. Would a
                    side-by-side comparison before Q2 be useful?&quot;
                  </p>
                </div>

                <div className="ml-9 flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    Sentiment: Warming
                  </span>
                  <span className="rounded-full bg-[#eaddff] px-2 py-0.5 text-[10px] font-semibold text-[#630ed4]">
                    Objection: Competitor Lock-in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADS SECTION ===== */}
      <section className="bg-[#eff4ff] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#eaddff] px-4 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
                High-Density Velocity
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">
              3,670 Leads. Zero Workflow Chaos.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#5e5d6b]">
              Import, enrich, prioritize, and dial -- all from one screen. No
              more juggling spreadsheets, CRMs, and dialers. Vocalis keeps
              every lead organized so your reps always know who to call next.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-extrabold text-[#0b1c30]">89.6%</p>
                <p className="mt-1 text-sm text-[#5e5d6b]">
                  Lead Qualification Rate
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#630ed4]">
                  +5.3%
                </p>
                <p className="mt-1 text-sm text-[#5e5d6b]">
                  Week-over-Week Growth
                </p>
              </div>
            </div>
          </div>

          {/* Right table mockup */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* Table header */}
            <div className="border-b border-[#eff4ff] bg-[#eff4ff] px-6 py-3">
              <div className="grid grid-cols-4 text-[10px] font-semibold uppercase tracking-wider text-[#5e5d6b]">
                <span>Lead</span>
                <span>Company</span>
                <span>Score</span>
                <span>Status</span>
              </div>
            </div>
            {/* Table rows */}
            {[
              {
                name: "Olivia Park",
                co: "Zenith Labs",
                score: 94,
                status: "Hot",
                color: "text-red-500",
              },
              {
                name: "James Chen",
                co: "DataMesh",
                score: 88,
                status: "Warm",
                color: "text-orange-500",
              },
              {
                name: "Priya Sharma",
                co: "FlowStack",
                score: 82,
                status: "Warm",
                color: "text-orange-500",
              },
              {
                name: "David Kim",
                co: "NovaTech",
                score: 79,
                status: "Nurture",
                color: "text-blue-500",
              },
              {
                name: "Ana Costa",
                co: "Vertex AI",
                score: 91,
                status: "Hot",
                color: "text-red-500",
              },
              {
                name: "Raj Patel",
                co: "Syncro",
                score: 73,
                status: "Nurture",
                color: "text-blue-500",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 items-center border-b border-[#eff4ff] px-6 py-3.5 text-sm transition hover:bg-[#f8f9ff]"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed]/10 text-[10px] font-bold text-[#7c3aed]">
                    {row.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <span className="text-xs font-medium text-[#0b1c30]">
                    {row.name}
                  </span>
                </div>
                <span className="text-xs text-[#5e5d6b]">{row.co}</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#eff4ff]">
                    <div
                      className="h-full rounded-full bg-[#7c3aed]"
                      style={{ width: `${row.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-[#0b1c30]">
                    {row.score}
                  </span>
                </div>
                <span className={`text-xs font-semibold ${row.color}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-[#eff4ff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">
              Trusted by High-Velocity Revenue Leaders
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative flex flex-col rounded-2xl bg-white p-8 pl-8 shadow-sm"
              >
                <div className="absolute bottom-6 left-0 top-6 w-1.5 rounded-r bg-[#630ed4]" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm italic leading-6 text-[#0b1c30]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-[#eff4ff] pt-6">
                  <p className="text-sm font-semibold text-[#0b1c30]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#5e5d6b]">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#f8f9ff] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#630ed4] via-[#7c3aed] to-[#7c3aed] p-12 text-center shadow-[0_20px_50px_rgba(99,14,212,0.35)] lg:p-16">
            {/* Background Ambient Circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-black/10 blur-2xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-[#eaddff]">
                AI-Powered Cold Calling &amp; Voicemail Drops
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to Dial Smarter and 3x Your Pipeline?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#d2bbff]">
                Join 1,200+ revenue teams already using Vocalis to book more
                qualified meetings on autopilot.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#630ed4] shadow-xl transition hover:scale-105"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-[#7c3aed] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7c3aed]/80"
                >
                  Book a Custom Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
