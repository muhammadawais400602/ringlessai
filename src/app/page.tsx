"use client";

import Link from "next/link";
import {
  Phone,
  PhoneCall,
  MapPin,
  Globe,
  Bot,
  Zap,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Hash,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Keyboard,
  Users,
  Search,
  Sparkles,
  Building2,
  Briefcase,
  User,
  Headphones,
  PhoneIncoming,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: MapPin,
    title: "Google Maps Lead Scraping",
    description:
      "Enter a niche and city. Xovra pulls business listings and enriches them with website audits, Google Ads detection, and social media presence.",
    href: "/features/lead-management",
    linkText: "See lead sourcing",
  },
  {
    icon: Phone,
    title: "Browser-Based Softphone",
    description:
      "A WebRTC dialer powered by Xovra. Call from your browser with keyboard shortcuts — C to call, H to hang up, 1–6 to log outcomes.",
    href: "/features/ai-calling",
    linkText: "See the dialer",
  },
  {
    icon: Bot,
    title: "AI Qualifier Calls",
    description:
      "A Xovra AI assistant calls your leads, discloses it is an AI in the first sentence, asks qualifying questions, and returns a scored result.",
    href: "/features/ai-calling",
    linkText: "See AI calling",
  },
  {
    icon: Zap,
    title: "Live AI Rebuttals",
    description:
      "Claude or Gemini drafts objection handling mid-call, using what Xovra already knows about the lead — website issues, ad spend, social signals.",
    href: "/features/objection-rebuttals",
    linkText: "See rebuttals",
  },
  {
    icon: MessageSquare,
    title: "Two-Way SMS",
    description:
      "Send and receive texts over Xovra, threaded by phone number. Opt-out keywords are handled automatically for compliance.",
    href: "/features/omnichannel",
    linkText: "See SMS",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Controls",
    description:
      "Suppression lists, 8 AM–9 PM calling windows, per-contact attempt caps, and mandatory AI disclosure on every AI-placed call.",
    href: "/compliance",
    linkText: "See compliance",
  },
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Scrape Leads from Google Maps",
    description:
      "Enter a niche and city. Xovra pulls business listings and enriches each one with a website audit, Google Ads check, and social media scan.",
  },
  {
    number: "02",
    icon: Search,
    title: "Enrich and Score",
    description:
      "Every lead gets a pitch angle — RUNS_ADS, NO_SITE, WEAK_SITE, or STRONG_SITE — so you know your opening line before you dial.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Call or Deploy AI",
    description:
      "Dial manually from the WebRTC softphone, or let a Xovra AI assistant make the qualifier call and report back with a score and next action.",
  },
  {
    number: "04",
    icon: FileSpreadsheet,
    title: "Track Outcomes",
    description:
      "Call outcomes go back to your Google Sheet, and you can export to CSV in a HubSpot-compatible format when you need it elsewhere.",
  },
];

const enrichmentChecks = [
  "Website audit: HTTPS, mobile-friendly, copyright year",
  "Google Ads detection via three methods",
  "Social media: Instagram, Facebook, TikTok with follower counts",
  "Pitch angle assigned automatically to every lead",
];

const aiBullets = [
  "Discloses it is an AI in the first sentence of every call",
  "Receives dynamic context per lead: name, category, website issues, and pitch angle",
  "Sends a follow-up SMS after connected calls to capture an email address",
  "Returns a lead score, interest level, qualified status, and suggested next action",
];

const pitchAngles = [
  {
    tag: "RUNS_ADS",
    tagClass: "bg-[#eaddff] text-[#630ed4]",
    description:
      "Already paying for Google Ads. Lead with conversion and landing page improvements.",
  },
  {
    tag: "NO_SITE",
    tagClass: "bg-[#e3e0f1] text-[#0b1c30]",
    description:
      "No website found. Lead with getting them online and showing up in search.",
  },
  {
    tag: "WEAK_SITE",
    tagClass: "bg-[#e5eeff] text-[#0b1c30]",
    description:
      "Site has issues — no HTTPS, not mobile-friendly, or an old copyright year.",
  },
  {
    tag: "STRONG_SITE",
    tagClass: "bg-[#eff4ff] text-[#4a4455]",
    description:
      "Site looks solid. Lead with a different angle — reviews, social presence, or ad gaps.",
  },
];

const outcomes = [
  "Interested",
  "Sent mockup",
  "Voicemail",
  "No answer",
  "Not interested",
  "Bad number",
];

const testimonials = [
  {
    quote:
      "I used to build call lists by hand from Google Maps. Having the website and ads check next to each business means I know my opening line before I dial.",
    name: "Agency Owner",
    subtitle: "Digital Marketing Agency",
  },
  {
    quote:
      "The keyboard shortcuts are what I notice most. I can log an outcome without leaving the call screen, and it lands in the sheet instantly.",
    name: "Sales Rep",
    subtitle: "Insurance Lead Gen Team",
  },
  {
    quote:
      "I like that the AI says it is an AI right away. I can hand off qualifier calls and review the scores afterward without worrying about compliance.",
    name: "Sales Manager",
    subtitle: "Real Estate Brokerage",
  },
];

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden bg-dot-pattern pt-12 pb-24">
        {/* Ambient Radial Glows */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-[#630ed4]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[75rem] px-4 lg:px-8 flex flex-col items-center text-center pt-24 lg:pt-32">
          {/* Eyebrow Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1.5 shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <span className="text-[14px]">✨</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
              AI-Powered Cold Calling Platform
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#630ed4] animate-ping" />
          </div>

          {/* Massive H1 */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-[#0b1c30] sm:text-5xl lg:text-[72px] lg:leading-[76px] max-w-4xl mx-auto mb-6">
            Find Leads. Call Them.{" "}
            <span className="relative inline-block text-[#630ed4]">
              Close Deals.
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
          <p className="text-lg text-[#4a4455] max-w-[620px] mx-auto mb-10 leading-relaxed">
            Xovra scrapes leads from Google Maps, enriches and scores them, then
            lets you call from a browser-based softphone or deploy an AI qualifier.
            Outcomes go straight to your Google Sheet.
          </p>

          {/* CTA Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#630ed4] text-white text-sm font-semibold shadow-[0_12px_28px_rgba(99,14,212,0.32)] hover:bg-[#7c3aed] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Get Early Access
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#0b1c30] text-sm font-semibold shadow-sm hover:bg-[#e3e0f1] transition-all"
            >
              <Headphones className="h-5 w-5 text-[#630ed4]" />
              Book a Demo
            </Link>
          </div>

          {/* Social Proof Badge Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#4a4455] mb-20">
            {[
              { icon: Briefcase, label: "Sales teams" },
              { icon: Building2, label: "Agencies" },
              { icon: User, label: "Solo operators" },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-sm font-medium text-[#0b1c30]"
                >
                  <Icon className="h-[18px] w-[18px] text-[#630ed4]" />
                  {a.label}
                </div>
              );
            })}
          </div>

          {/* HERO VISUAL: Angled Browser Frame with Floating Glass Chips */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Glow Aura */}
            <div className="absolute inset-x-8 top-12 bottom-0 bg-[#630ed4]/20 blur-[80px] rounded-3xl -z-10 scale-95" />

            {/* Tilted Browser Container */}
            <div className="relative rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] lg:-rotate-1 hover:rotate-0 transition-transform duration-700 ease-out overflow-hidden">
              {/* Window Chrome */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#eff4ff]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="ml-3 text-[11px] text-[#4a4455] font-mono">
                    xovra-dialer // live-session
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    WebRTC Connected
                  </span>
                </div>
              </div>

              {/* Inside App Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f8f9ff]">
                {/* Left Panel: Lead Card */}
                <div className="lg:col-span-7 p-6 bg-white">
                  <div className="flex items-center justify-between pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#eaddff] flex items-center justify-center text-[#630ed4]">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="text-lg font-semibold text-[#0b1c30] block">
                          Riverside Plumbing Co.
                        </span>
                        <span className="text-sm text-[#4a4455]">
                          Plumber &bull; Austin, TX &bull; 4.6 ★
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase">
                      WEAK_SITE
                    </span>
                  </div>

                  {/* Enrichment Details */}
                  <div className="rounded-xl bg-[#eff4ff] p-4 mb-4">
                    <span className="text-xs font-bold uppercase text-[#4a4455] block mb-2">
                      Enrichment
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#0b1c30] text-left">
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-[#630ed4]" />
                        No HTTPS detected
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-[#630ed4]" />
                        Not mobile-friendly
                      </li>
                      <li className="flex items-center gap-2">
                        <Megaphone className="h-4 w-4 text-[#630ed4]" />
                        No Google Ads found
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#630ed4]" />
                        Facebook — 230 followers
                      </li>
                    </ul>
                  </div>

                  {/* AI Rebuttal */}
                  <div className="rounded-xl bg-[#213145] p-4 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Zap className="h-[18px] w-[18px] text-[#d2bbff]" />
                        <span className="text-xs uppercase font-bold text-[#d2bbff]">
                          AI Rebuttal Draft
                        </span>
                      </div>
                      <span className="text-[11px] text-[#eaf1ff]/60">
                        via Claude
                      </span>
                    </div>
                    <p className="text-sm text-[#eaf1ff] leading-snug">
                      &quot;Totally fair. I noticed your site doesn&apos;t load
                      well on a phone, and most people searching for a plumber
                      are on one. Would a quick mockup be useful?&quot;
                    </p>
                  </div>
                </div>

                {/* Right Panel: Outcomes & Shortcuts */}
                <div className="lg:col-span-5 p-6 bg-[#eff4ff]/50 flex flex-col text-left">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-[#0b1c30]">
                      Log Outcome
                    </span>
                    <Keyboard className="h-5 w-5 text-[#630ed4]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {outcomes.map((o, i) => (
                      <div
                        key={o}
                        className="p-2.5 rounded-lg bg-white text-xs font-medium text-[#0b1c30] flex items-center justify-between hover:bg-[#eaddff] hover:text-[#630ed4] cursor-pointer transition-colors"
                      >
                        <span>{o}</span>
                        <span className="ml-2 px-1.5 py-0.5 rounded bg-[#e3e0f1] text-[10px] font-bold text-[#4a4455]">
                          {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Keyboard Shortcuts */}
                  <span className="text-xs font-bold uppercase text-[#4a4455] block mb-2">
                    Keyboard shortcuts
                  </span>
                  <div className="flex items-center gap-3 mt-auto">
                    {[
                      { key: "C", action: "Call" },
                      { key: "H", action: "Hang up" },
                      { key: "1-6", action: "Outcome" },
                    ].map((s) => (
                      <div
                        key={s.key}
                        className="flex items-center gap-1.5 text-xs text-[#4a4455]"
                      >
                        <span className="px-2 py-1 rounded bg-white font-mono font-bold text-[#630ed4] shadow-sm">
                          {s.key}
                        </span>
                        {s.action}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Floating Glassmorphism Stat Chips */}
            <div className="absolute -top-6 -left-4 lg:-left-10 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <span className="text-xs text-[#0b1c30] block font-bold">
                  Xovra WebRTC
                </span>
                <span className="text-[11px] text-[#4a4455] font-mono">
                  Browser softphone connected
                </span>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 lg:-left-6 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20 max-w-sm">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-[18px] w-[18px]" />
              </div>
              <div>
                <span className="text-xs text-[#0b1c30] font-bold block">
                  Lead Enriched
                </span>
                <span className="text-[11px] text-[#4a4455] leading-tight block">
                  Website audit + ads check + social scan complete
                </span>
              </div>
            </div>

            <div className="absolute -top-8 -right-4 lg:-right-8 hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-left z-20">
              <div className="w-7 h-7 rounded-lg bg-[#eaddff] text-[#630ed4] flex items-center justify-center shrink-0">
                <PhoneIncoming className="h-[18px] w-[18px]" />
              </div>
              <div>
                <span className="text-xs text-[#0b1c30] font-bold block">
                  Inbound Callback
                </span>
                <span className="text-[11px] text-[#4a4455] font-mono">
                  Rings in browser automatically
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES SECTION ===== */}
      <section className="w-full bg-[#eff4ff] py-16">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-4xl font-bold text-[#630ed4] tracking-tight mb-2">
                4
              </span>
              <span className="text-lg font-semibold text-[#0b1c30] mb-1">
                Pitch Angles
              </span>
              <span className="text-sm text-[#4a4455]">
                Every lead gets a pitch angle based on its website, ads, and social
                presence.
              </span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-4xl font-bold text-[#630ed4] tracking-tight mb-2">
                &lt; 2 min
              </span>
              <span className="text-lg font-semibold text-[#0b1c30] mb-1">
                Maps to First Call
              </span>
              <span className="text-sm text-[#4a4455]">
                From a Google Maps search to dialing your first lead, in under two
                minutes.
              </span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-4xl font-bold text-[#630ed4] tracking-tight mb-2">
                1 key
              </span>
              <span className="text-lg font-semibold text-[#0b1c30] mb-1">
                Outcome Logging
              </span>
              <span className="text-sm text-[#4a4455]">
                Log call outcomes with a single keystroke. Six dispositions, zero
                friction.
              </span>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-4xl font-bold text-[#630ed4] tracking-tight mb-2">
                24/7
              </span>
              <span className="text-lg font-semibold text-[#0b1c30] mb-1">
                AI Qualifier
              </span>
              <span className="text-sm text-[#4a4455]">
                Deploy a Xovra AI assistant to qualify leads while you focus on
                closing.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID (3×2) ===== */}
      <section className="w-full bg-[#f8f9ff] py-24 relative">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#0b1c30] mb-4">
            <span className="text-xs font-bold uppercase">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[60px] max-w-2xl mx-auto mb-16">
            Everything for Outbound, in One Workspace
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
                    <div className="w-12 h-12 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center mb-6 group-hover:bg-[#630ed4] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0b1c30] mb-2">
                      {f.title}
                    </h3>
                    <p className="text-base text-[#4a4455] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                  <Link
                    href={f.href}
                    className="mt-6 pt-3 inline-flex items-center gap-2 text-[#630ed4] hover:text-[#7c3aed] text-sm font-semibold"
                  >
                    {f.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="w-full bg-[#eff4ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
              How it works
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[60px]">
              From a Maps Search to a Logged Outcome
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.number}
                  className="p-8 rounded-2xl bg-white shadow-sm flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-[#eaddff] text-[#630ed4] font-bold text-lg flex items-center justify-center mb-6">
                    {s.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1c30] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-base text-[#4a4455] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DEEP-DIVE 1: LEAD SOURCING ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-white shadow-xl p-6">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-xs font-bold uppercase text-[#0b1c30]">
                    Pitch Angles
                  </span>
                  <span className="text-xs text-[#4a4455]">
                    Assigned to every lead
                  </span>
                </div>
                <div className="space-y-3">
                  {pitchAngles.map((p) => (
                    <div
                      key={p.tag}
                      className="p-4 rounded-xl bg-[#f8f9ff] flex flex-col sm:flex-row sm:items-center gap-3"
                    >
                      <span
                        className={`self-start shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold font-mono ${p.tagClass}`}
                      >
                        {p.tag}
                      </span>
                      <p className="text-sm text-[#4a4455] leading-snug">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                Lead Sourcing
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[60px] mb-4">
                Know the Pitch Before You Dial
              </h2>
              <p className="text-lg text-[#4a4455] mb-6 leading-relaxed">
                Search Google Maps by niche and city, and Xovra builds the list.
                Every business is checked for the things that shape a cold call:
                how good its website is, whether it runs Google Ads, and where it
                shows up on social media.
              </p>
              <ul className="space-y-3 text-[#0b1c30] text-base mb-8">
                {enrichmentChecks.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#630ed4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features/lead-management"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed]"
              >
                Explore lead sourcing
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEEP-DIVE 2: AI CALLING ===== */}
      <section className="w-full bg-[#213145] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Editorial Copy */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                AI Calling
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#eaf1ff] sm:text-5xl sm:leading-[60px] mb-4">
                Let an AI Assistant Make the First Call
              </h2>
              <p className="text-lg text-[#eaf1ff]/80 mb-6 leading-relaxed">
                A Xovra AI assistant calls on your behalf, asks your qualifying
                questions, and hands you a scored result. You spend your time on
                the leads worth a real conversation.
              </p>
              <ul className="space-y-3 text-[#eaf1ff] text-base mb-8">
                {aiBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#d2bbff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features/ai-calling"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#d2bbff] hover:text-white"
              >
                Explore AI calling
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>

            {/* Visual Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white/5 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Bot className="h-5 w-5 text-[#d2bbff]" />
                  <span className="text-xs font-bold uppercase text-[#d2bbff]">
                    What the AI qualifier reports back
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Lead score", value: "1 to 10" },
                    { label: "Interest level", value: "Captured per call" },
                    { label: "Qualified status", value: "Yes or no" },
                    { label: "Next action", value: "Suggested follow-up" },
                  ].map((o) => (
                    <div key={o.label} className="p-4 rounded-xl bg-white/10">
                      <span className="text-xs uppercase font-bold text-[#d2bbff] block mb-1">
                        {o.label}
                      </span>
                      <span className="text-base font-semibold text-[#eaf1ff]">
                        {o.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-white/10 flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-[#d2bbff] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#eaf1ff] leading-snug">
                    After a connected call, a follow-up SMS goes out to ask for
                    the prospect&apos;s email address.
                  </p>
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
            Early feedback
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[60px] mb-16">
            What Early Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative pl-8"
              >
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#630ed4] rounded-r" />
                <p className="text-base text-[#0b1c30] italic mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <span className="text-lg font-semibold text-[#0b1c30] block">
                    {t.name}
                  </span>
                  <span className="text-sm text-[#4a4455]">{t.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE NOTE ===== */}
      <section className="w-full bg-[#f8f9ff] py-16">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="p-8 rounded-2xl bg-[#e5eeff] flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-white text-[#630ed4] flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#0b1c30] mb-1">
                Compliance is partly yours
              </h3>
              <p className="text-base text-[#4a4455] leading-relaxed">
                Xovra enforces calling windows, attempt caps, suppression lists,
                and AI disclosure. Registering your numbers for SMS (10DLC) and
                following the rules for your market remain your responsibility.
              </p>
            </div>
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed] shrink-0"
            >
              Read more
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="w-full bg-[#f8f9ff] pb-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#630ed4] via-[#7c3aed] to-[#7c3aed] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(99,14,212,0.35)]">
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#eaddff] mb-3">
                Xovra
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[60px] mb-4">
                Ready to Start Calling Smarter?
              </h2>
              <p className="text-lg text-[#d2bbff] mb-10 leading-relaxed">
                Find leads on Google Maps, call them from your browser, and let
                AI handle the first qualifying conversation. Tell us about your
                team and we&apos;ll get you set up.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#630ed4] text-sm font-bold shadow-xl hover:bg-[#f8f9ff] hover:scale-105 active:scale-95 transition-all"
                >
                  Get Early Access
                  <ArrowRight className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#7c3aed] text-white text-sm font-semibold shadow-sm hover:bg-[#7c3aed]/80 transition-all"
                >
                  <Headphones className="h-[18px] w-[18px]" />
                  Book a Demo
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 text-xs text-[#d2bbff]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Usage-based pricing
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  No contracts
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
