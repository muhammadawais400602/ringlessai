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
    description:
      "Deploy AI-powered voice agents that dial, qualify, and leave personalized voicemails at scale -- without lifting a finger.",
  },
  {
    icon: Users,
    title: "High-Capacity Lead Management",
    description:
      "Import thousands of leads, segment by ICP, and let the dialer prioritize the hottest prospects automatically.",
  },
  {
    icon: Shield,
    title: "Live Objection Rebuttals",
    description:
      "Real-time AI coaching surfaces battle-tested rebuttals the moment a prospect pushes back on your reps.",
  },
  {
    icon: BarChart3,
    title: "Granular Outcome Tracking",
    description:
      "Track every call disposition, conversion event, and pipeline impact with dashboards built for revenue teams.",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Follow-up",
    description:
      "Trigger SMS, email, and ringless voicemail sequences based on call outcomes to keep deals moving forward.",
  },
  {
    icon: Inbox,
    title: "Unified Operator Inbox",
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
      <section className="hero-gradient relative overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Close More Deals With{" "}
              <span className="gradient-text">Every Call</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              The autonomous cold-calling engine that dials, qualifies, and
              drops personalized voicemails at scale -- so your reps focus on
              closing, not dialing.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#7C3AED] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:bg-[#6D28D9]"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
              >
                <Play className="h-4 w-4" />
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
                    className={`h-8 w-8 rounded-full border-2 border-[#0D0A1C] ${bg} flex items-center justify-center text-[10px] font-bold text-white`}
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
                <span className="text-sm font-medium text-gray-300">
                  4.9/5 from 1,200+ teams
                </span>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="rounded-xl border border-gray-700/50 bg-[#13102a] p-1 shadow-2xl purple-glow">
              <div className="rounded-lg bg-[#1a1540] p-6">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-gray-700/40 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <div className="h-3 w-3 rounded-full bg-green-400/80" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">
                      Vocalis AI Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded bg-[#7C3AED]/20 px-3 py-1 text-xs font-medium text-purple-300">
                      Live Session
                    </div>
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {/* Contact card */}
                  <div className="rounded-lg border border-gray-700/30 bg-[#13102a] p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                        MV
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Marcus Vance
                        </p>
                        <p className="text-xs text-gray-500">
                          VP Sales -- Acme Corp
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Status</span>
                        <span className="text-green-400">Connected</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Duration</span>
                        <span className="text-gray-300">02:34</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Sentiment</span>
                        <span className="text-purple-400">Positive</span>
                      </div>
                    </div>
                  </div>

                  {/* Queue panel */}
                  <div className="rounded-lg border border-gray-700/30 bg-[#13102a] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">
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
                            <div className="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center text-[9px] text-gray-300 font-medium">
                              {lead.name[0]}
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-200">
                                {lead.name}
                              </p>
                              <p className="text-[10px] text-gray-500">
                                {lead.co}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-medium ${i === 0 ? "text-green-400" : "text-gray-500"}`}
                          >
                            {lead.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics panel */}
                  <div className="rounded-lg border border-gray-700/30 bg-[#13102a] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">
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
                          <span className="text-xs text-gray-500">
                            {m.label}
                          </span>
                          <span className="text-sm font-semibold text-white">
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
        </div>
      </section>

      {/* ===== LOGO STRIP ===== */}
      <section className="border-b border-[#E5E7EB] bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
            AI Powered Cold Calling &amp; Enterprise Grade
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-wide text-gray-300 transition hover:text-gray-500"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1a1040 100%)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm"
            >
              <span className="text-3xl font-extrabold text-white lg:text-4xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-medium text-purple-200/80">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Complete Capabilities</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything Your Team Needs to Dominate the Phones
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-xl border border-[#E5E7EB] bg-white p-7 transition hover:border-purple-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EDE9FE]">
                    <Icon className="h-6 w-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {f.description}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#7C3AED] transition group-hover:gap-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THREE STEPS ===== */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">
              Three Steps to Cold Outbound Success
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Three Steps to 10x Cold Outbound
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.number}
                className="relative rounded-xl border border-[#E5E7EB] bg-white p-8"
              >
                <span className="text-5xl font-extrabold text-[#EDE9FE]">
                  {s.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OBJECTION HANDLING ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div>
            <p className="section-label">AI Objection Handling</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Handle Every Objection Like Your Top Closer
            </h2>
            <p className="mt-6 text-base leading-7 text-[#6B7280]">
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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#7C3AED]" />
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right mockup */}
          <div className="rounded-xl border border-[#E5E7EB] bg-gray-50 p-6 shadow-lg">
            <div className="rounded-lg bg-white p-5 shadow-sm">
              {/* Call header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDE9FE]">
                    <PhoneCall className="h-4 w-4 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Live Call -- Alex Rivera
                    </p>
                    <p className="text-xs text-gray-400">
                      VP Engineering, Bolt.io
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-xs font-medium text-red-400">
                    Recording
                  </span>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-500">
                    AR
                  </div>
                  <div className="rounded-lg bg-gray-100 px-4 py-2.5">
                    <p className="text-xs text-gray-700">
                      &quot;We&apos;re already locked into a contract with your
                      competitor through Q2.&quot;
                    </p>
                  </div>
                </div>

                <div className="ml-9 rounded-lg border border-purple-200 bg-[#EDE9FE] px-4 py-2.5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#7C3AED]">
                    AI Suggested Rebuttal
                  </p>
                  <p className="text-xs text-gray-700">
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
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold text-[#7C3AED]">
                    Objection: Competitor Lock-in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEADS SECTION ===== */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div>
            <p className="section-label">Lead Management</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              3,670 Leads. Zero Workflow Chaos.
            </h2>
            <p className="mt-6 text-base leading-7 text-[#6B7280]">
              Import, enrich, prioritize, and dial -- all from one screen. No
              more juggling spreadsheets, CRMs, and dialers. Vocalis keeps
              every lead organized so your reps always know who to call next.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">89.6%</p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Lead Qualification Rate
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#7C3AED]">
                  +5.3%
                </p>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Week-over-Week Growth
                </p>
              </div>
            </div>
          </div>

          {/* Right table mockup */}
          <div className="rounded-xl border border-[#E5E7EB] bg-white shadow-lg overflow-hidden">
            {/* Table header */}
            <div className="border-b border-gray-100 bg-gray-50 px-6 py-3">
              <div className="grid grid-cols-4 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
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
                className="grid grid-cols-4 items-center border-b border-gray-50 px-6 py-3.5 text-sm transition hover:bg-gray-50/60"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDE9FE] text-[10px] font-bold text-[#7C3AED]">
                    {row.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <span className="font-medium text-gray-900 text-xs">
                    {row.name}
                  </span>
                </div>
                <span className="text-xs text-[#6B7280]">{row.co}</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-[#7C3AED]"
                      style={{ width: `${row.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">
              Trusted by High-Velocity Revenue Leaders
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-8"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-6 text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDE9FE] text-xs font-bold text-[#7C3AED]">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-gradient py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to Dial Smarter and 3x Your Pipeline?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-purple-200/80">
            Join 1,200+ revenue teams already using Vocalis to book more
            qualified meetings on autopilot.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#7C3AED] shadow-lg transition hover:bg-gray-100"
            >
              Start Free 14-Day Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Book a Custom Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
