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
  BarChart3,
  FileText,
  Clock,
  Headphones,
  Search,
  Download,
  Sparkles,
  Building2,
  Briefcase,
  User,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const audiences = [
  { icon: Briefcase, label: "Sales teams" },
  { icon: Building2, label: "Agencies" },
  { icon: User, label: "Solo operators" },
];

const heroBullets = [
  "Scrape Google Maps listings by niche and city",
  "Call one lead at a time from your browser",
  "Let an AI assistant make qualifier calls for you",
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Scrape leads from Google Maps",
    description:
      "Enter a niche and a city. Xovra pulls business listings from Google Maps so you have a fresh, local call list without buying a database.",
  },
  {
    number: "02",
    icon: Search,
    title: "Enrich and score",
    description:
      "Each lead gets a website audit, a Google Ads check, and a look at social presence. Leads are sorted into a pitch angle so you know what to say before you dial.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Call from the browser or deploy AI",
    description:
      "Dial manually from the WebRTC softphone, or let a Telnyx AI assistant make the qualifier call and report back with a score and a next action.",
  },
  {
    number: "04",
    icon: FileSpreadsheet,
    title: "Track outcomes in Sheets",
    description:
      "Call outcomes are written back to your Google Sheet, and you can export to CSV in a HubSpot-compatible format when you need it elsewhere.",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Google Maps Lead Scraping",
    description:
      "Pull business listings by niche and city, then enrich them with website, ads, and social signals.",
    href: "/features/lead-management",
    linkText: "See lead sourcing",
  },
  {
    icon: Phone,
    title: "Browser Dialer",
    description:
      "A WebRTC softphone powered by Telnyx. Calls go out one at a time, with keyboard shortcuts for one-handed operation.",
    href: "/features/ai-calling",
    linkText: "See the dialer",
  },
  {
    icon: Bot,
    title: "AI Qualifier Calls",
    description:
      "A Telnyx AI assistant calls your leads, says it is an AI in the first sentence, and returns a score and next action.",
    href: "/features/ai-calling",
    linkText: "See AI calling",
  },
  {
    icon: Zap,
    title: "Live AI Rebuttals",
    description:
      "Claude or Gemini drafts objection handling during a call, using what Xovra already knows about the lead.",
    href: "/features/objection-rebuttals",
    linkText: "See rebuttals",
  },
  {
    icon: Megaphone,
    title: "Campaigns",
    description:
      "Load leads from a Google Sheet or paste numbers, choose manual or AI calling, and set retries and briefs.",
    href: "/features/outcome-tracking",
    linkText: "See campaigns",
  },
  {
    icon: MessageSquare,
    title: "Two-Way SMS",
    description:
      "Send and receive texts over Telnyx, threaded by phone number, with opt-out keywords handled for you.",
    href: "/features/omnichannel",
    linkText: "See SMS",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Controls",
    description:
      "Suppression lists, an 8am to 9pm calling window, per-contact attempt caps, and AI disclosure on every AI call.",
    href: "/compliance",
    linkText: "See compliance",
  },
  {
    icon: Hash,
    title: "Number Pools",
    description:
      "Run several numbers per organization, watch answer rates, and keep each lead tied to the same number.",
    href: "/features",
    linkText: "See all features",
  },
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
      "Site has issues such as no HTTPS, not mobile-friendly, or an old copyright year.",
  },
  {
    tag: "STRONG_SITE",
    tagClass: "bg-[#eff4ff] text-[#4a4455]",
    description:
      "Site looks solid. Lead with a different angle, such as reviews or social presence.",
  },
];

const enrichmentChecks = [
  "Website audit: HTTPS, mobile-friendly, copyright year",
  "Google Ads detection",
  "Social presence: Instagram, Facebook, TikTok",
  "Export to Google Sheet or HubSpot-compatible CSV",
];

const aiOutputs = [
  { label: "Lead score", value: "1 to 10" },
  { label: "Interest level", value: "Captured per call" },
  { label: "Qualified status", value: "Yes or no" },
  { label: "Next action", value: "Suggested follow-up" },
];

const aiBullets = [
  "Discloses it is an AI in the first sentence of every call",
  "Receives dynamic context per lead: name, category, website issues, and pitch angle",
  "Sends a follow-up SMS after connected calls to capture an email address",
  "Runs on a per-organization Telnyx AI assistant and phone number",
];

const dialerShortcuts = [
  { key: "C", action: "Call" },
  { key: "H", action: "Hang up" },
  { key: "1-6", action: "Log outcome" },
];

const outcomes = [
  "Interested",
  "Sent mockup",
  "Voicemail",
  "No answer",
  "Not interested",
  "Bad number",
];

const campaignBullets = [
  "Load leads from a Google Sheet or paste a list of numbers",
  "Choose manual calling or AI calling for each campaign",
  "Write a per-campaign brief, greeting, and qualification criteria",
  "Set retry attempts and the timing between them",
  "Filter the worklist, for example no website or has socials",
  "Use per-campaign call scripts or fall back to the org default",
];

const scriptPlaceholders = [
  "{name}",
  "{category}",
  "{city}",
  "{rating}",
  "{website}",
  "{evidence}",
];

const teamPoints = [
  {
    icon: Users,
    title: "Owner, admin, and agent roles",
    description:
      "Organizations support three roles, plus team invites so you can bring reps on without sharing logins.",
  },
  {
    icon: Hash,
    title: "Per-org numbers and assistants",
    description:
      "Each organization keeps its own phone numbers and its own AI assistants, so accounts stay separate.",
  },
  {
    icon: BarChart3,
    title: "Usage ledger",
    description:
      "Every billable event is recorded. See voice minutes, SMS costs, your balance, and where the spend went.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in guardrails",
    description:
      "Do Not Contact lists, calling window enforcement, and attempt caps are part of the product, not an add-on.",
  },
];

const integrations = [
  {
    icon: Phone,
    name: "Telnyx",
    description: "Browser calling, SMS, and the AI assistant.",
  },
  {
    icon: FileSpreadsheet,
    name: "Google Sheets",
    description: "Lead source and outcome tracking.",
  },
  {
    icon: Sparkles,
    name: "Claude and Gemini",
    description: "Live rebuttals and follow-up drafts.",
  },
  {
    icon: Download,
    name: "CSV export",
    description: "HubSpot-compatible column format.",
  },
];

const testimonials = [
  {
    quote:
      "I used to build call lists by hand from Maps. Having the website and ads check next to each business means I know my opening line before I dial.",
    role: "Agency Owner",
  },
  {
    quote:
      "The keyboard shortcuts are what I notice most. I can log an outcome without leaving the call screen, and it lands in the sheet.",
    role: "Sales Rep",
  },
  {
    quote:
      "I like that the AI says it is an AI right away. I can hand off qualifier calls and review the scores afterward.",
    role: "Sales Manager",
  },
];

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-12 pb-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -left-48 h-[420px] w-[420px] rounded-full bg-[#630ed4]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-[75rem] px-4 lg:px-8 flex flex-col items-center text-center pt-24 lg:pt-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#630ed4]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4]">
              AI-Powered Cold Calling Platform for Revenue Teams
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tighter text-[#0b1c30] sm:text-5xl lg:text-[72px] lg:leading-[76px] max-w-4xl mx-auto mb-6">
            AI-Powered Cold Calling Platform
            <span className="block text-[#630ed4]">Find, Call, Qualify</span>
          </h1>

          <p className="text-lg text-[#4a4455] max-w-[680px] mx-auto mb-8 leading-relaxed">
            Xovra finds leads on Google Maps, lets you call them from your
            browser, and can send an AI assistant to qualify prospects for you.
            Outcomes go straight back to your Google Sheet.
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-x-6 gap-y-2 mb-10 text-left">
            {heroBullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-sm text-[#0b1c30]"
              >
                <CheckCircle2 className="h-[18px] w-[18px] text-[#630ed4] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-20">
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

          {/* Hero visual: illustrative product mock */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="absolute inset-x-8 top-12 bottom-0 bg-[#630ed4]/20 blur-[80px] rounded-3xl -z-10 scale-95" />

            <div className="relative rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(124,58,237,0.25)] overflow-hidden text-left">
              <div className="flex items-center justify-between px-4 py-2 bg-[#eff4ff]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#e3e0f1] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#e3e0f1] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#e3e0f1] inline-block" />
                  <span className="ml-3 text-xs text-[#4a4455] font-mono">
                    dialer // example lead
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase text-[#4a4455]">
                  Illustrative mockup
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#f8f9ff]">
                {/* Lead card */}
                <div className="lg:col-span-7 p-6 bg-white">
                  <div className="flex items-center justify-between pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#eaddff] flex items-center justify-center text-[#630ed4]">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xl font-semibold text-[#0b1c30] block">
                          Example Plumbing Co.
                        </span>
                        <span className="text-sm text-[#4a4455]">
                          Plumber, Austin
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-lg bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase">
                      WEAK_SITE
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#eff4ff] p-4 mb-4">
                    <span className="text-xs font-bold uppercase text-[#4a4455] block mb-2">
                      Enrichment
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#0b1c30]">
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-[#630ed4]" />
                        No HTTPS
                      </li>
                      <li className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-[#630ed4]" />
                        Not mobile-friendly
                      </li>
                      <li className="flex items-center gap-2">
                        <Megaphone className="h-4 w-4 text-[#630ed4]" />
                        No Google Ads detected
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#630ed4]" />
                        Facebook page found
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl bg-[#213145] p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Zap className="h-[18px] w-[18px] text-[#d2bbff]" />
                      <span className="text-xs uppercase font-bold text-[#d2bbff]">
                        AI rebuttal draft
                      </span>
                    </div>
                    <p className="text-sm text-[#eaf1ff] leading-snug">
                      &quot;Totally fair. I only noticed because your site does
                      not load well on a phone, and most people searching for a
                      plumber are on one. Would a quick mockup be useful?&quot;
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="lg:col-span-5 p-6 bg-[#eff4ff]/50 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-semibold text-[#0b1c30]">
                      Log outcome
                    </span>
                    <Keyboard className="h-5 w-5 text-[#630ed4]" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {outcomes.map((o, i) => (
                      <div
                        key={o}
                        className="p-2.5 rounded-lg bg-white text-xs font-medium text-[#0b1c30] flex items-center justify-between"
                      >
                        <span>{o}</span>
                        <span className="ml-2 px-1.5 py-0.5 rounded bg-[#e3e0f1] text-[10px] font-bold text-[#4a4455]">
                          {i + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    {dialerShortcuts.map((s) => (
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
          </div>
        </div>
      </section>

      {/* ===== BUILT FOR ===== */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4a4455] mb-6">
            Built for sales teams, agencies, and solo operators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eff4ff] text-[#0b1c30] text-sm font-semibold"
                >
                  <Icon className="h-[18px] w-[18px] text-[#630ed4]" />
                  {a.label}
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
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px]">
              From a Maps search to a logged outcome
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
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#eaddff] text-[#630ed4] flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-[#e3e0f1]">
                      {s.number}
                    </span>
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

      {/* ===== FEATURES GRID ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#0b1c30] mb-4">
            <span className="text-xs font-bold uppercase">Features</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] max-w-2xl mx-auto mb-4">
            Everything for outbound, in one workspace
          </h2>
          <p className="text-lg text-[#4a4455] max-w-2xl mx-auto mb-16">
            Sourcing, calling, texting, and tracking, with the compliance
            controls built in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center mb-5 group-hover:bg-[#630ed4] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0b1c30] mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#4a4455] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                  <Link
                    href={f.href}
                    className="mt-5 inline-flex items-center gap-2 text-[#630ed4] hover:text-[#7c3aed] text-sm font-semibold"
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

      {/* ===== SPOTLIGHT 1: LEAD SOURCING ===== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                Lead sourcing
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] mb-4">
                Know the pitch before you dial
              </h2>
              <p className="text-lg text-[#4a4455] mb-6 leading-relaxed">
                Search Google Maps by niche and city, and Xovra builds the
                list. Every business is checked for the things that shape a
                cold call: how good its website is, whether it runs Google Ads,
                and where it shows up on social media.
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

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#f8f9ff] shadow-xl p-6">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-xs font-bold uppercase text-[#0b1c30]">
                    Pitch angles
                  </span>
                  <span className="text-xs text-[#4a4455]">
                    Assigned to every lead
                  </span>
                </div>
                <div className="space-y-3">
                  {pitchAngles.map((p) => (
                    <div
                      key={p.tag}
                      className="p-4 rounded-xl bg-white flex flex-col sm:flex-row sm:items-center gap-3"
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
          </div>
        </div>
      </section>

      {/* ===== SPOTLIGHT 2: AI CALLING ===== */}
      <section className="w-full bg-[#213145] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl bg-white/5 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Bot className="h-5 w-5 text-[#d2bbff]" />
                  <span className="text-xs font-bold uppercase text-[#d2bbff]">
                    What the AI qualifier reports back
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {aiOutputs.map((o) => (
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

            <div className="lg:col-span-6 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                AI calling
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#eaf1ff] sm:text-5xl sm:leading-[56px] mb-4">
                Let an AI assistant make the first call
              </h2>
              <p className="text-lg text-[#eaf1ff]/80 mb-6 leading-relaxed">
                A Telnyx AI assistant calls on your behalf, asks your
                qualifying questions, and hands you a scored result. You spend
                your time on the leads worth a real conversation.
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
          </div>
        </div>
      </section>

      {/* ===== SPOTLIGHT 3: CAMPAIGNS ===== */}
      <section className="w-full bg-[#f8f9ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-bold uppercase mb-4">
                Campaign management
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] mb-4">
                Organize every list as a campaign
              </h2>
              <p className="text-lg text-[#4a4455] mb-6 leading-relaxed">
                A campaign keeps the leads, the script, the calling mode, and
                the retry rules in one place, so each niche or client gets its
                own approach.
              </p>
              <ul className="space-y-3 text-[#0b1c30] text-base mb-8">
                {campaignBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#630ed4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/features/outcome-tracking"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed]"
              >
                Explore campaigns
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white shadow-xl p-6">
                <div className="flex items-center gap-2 pb-3 mb-4">
                  <FileText className="h-5 w-5 text-[#630ed4]" />
                  <span className="text-xs font-bold uppercase text-[#0b1c30]">
                    Call script template
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff4ff] mb-4">
                  <p className="text-sm text-[#0b1c30] leading-relaxed">
                    &quot;Hi, is this {"{name}"}? I was looking at{" "}
                    {"{category}"} businesses in {"{city}"} and noticed{" "}
                    {"{evidence}"} on {"{website}"}. You have a {"{rating}"}{" "}
                    rating, so I thought it was worth a quick call.&quot;
                  </p>
                </div>
                <span className="text-xs font-bold uppercase text-[#4a4455] block mb-2">
                  Placeholders filled from lead data
                </span>
                <div className="flex flex-wrap gap-2 mb-5">
                  {scriptPlaceholders.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-full bg-[#eaddff] text-[#630ed4] text-xs font-mono font-bold"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#e5eeff] flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#630ed4]" />
                    <span className="text-xs text-[#0b1c30] font-medium">
                      Configurable retries
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#e5eeff] flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#630ed4]" />
                    <span className="text-xs text-[#0b1c30] font-medium">
                      Manual or AI mode
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM, NUMBERS, USAGE ===== */}
      <section className="w-full bg-[#eff4ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
              Teams and operations
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] mb-4">
              Set up for more than one person
            </h2>
            <p className="text-lg text-[#4a4455]">
              Roles, number pools, and a usage ledger keep a growing team
              organized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="p-8 rounded-2xl bg-white shadow-sm flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0b1c30] mb-2">
                      {t.title}
                    </h3>
                    <p className="text-base text-[#4a4455] leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-8 rounded-2xl bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="h-5 w-5 text-[#630ed4]" />
              <h3 className="text-xl font-semibold text-[#0b1c30]">
                Number pools
              </h3>
            </div>
            <p className="text-base text-[#4a4455] leading-relaxed max-w-3xl">
              Add several phone numbers to an organization and Xovra tracks
              the answer rate on each one. A lead always gets called from the
              same number, so the prospect sees a consistent caller ID.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
              Integrations
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] mb-4">
              Works with the tools you already use
            </h2>
            <p className="text-lg text-[#4a4455]">
              A short list, and every item on it is something that works today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((i) => {
              const Icon = i.icon;
              return (
                <div
                  key={i.name}
                  className="p-6 rounded-2xl bg-[#f8f9ff] flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e3e0f1] text-[#630ed4] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0b1c30] mb-1">
                    {i.name}
                  </h3>
                  <p className="text-sm text-[#4a4455] leading-relaxed">
                    {i.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#630ed4] hover:text-[#7c3aed]"
            >
              View integrations
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="w-full bg-[#eff4ff] py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#630ed4] block mb-2">
            Early feedback
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1c30] sm:text-5xl sm:leading-[56px] mb-16">
            What early users say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <div
                key={t.role}
                className="p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative"
              >
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-[#630ed4] rounded-r" />
                <p className="text-base text-[#0b1c30] italic mb-6 leading-relaxed pl-3">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="text-lg font-semibold text-[#0b1c30] pl-3">
                  {t.role}
                </span>
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
                Xovra enforces calling windows, attempt caps, suppression
                lists, and AI disclosure. Registering your numbers for SMS
                (10DLC) and following the rules for your market remain your
                responsibility.
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

      {/* ===== CTA ===== */}
      <section className="w-full bg-[#f8f9ff] pb-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#630ed4] via-[#7c3aed] to-[#7c3aed] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(99,14,212,0.35)]">
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#eaddff] mb-3">
                Xovra
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[56px] mb-4">
                Get Early Access
              </h2>
              <p className="text-lg text-[#d2bbff] mb-10 leading-relaxed">
                Find leads on Google Maps, call them from your browser, and let
                AI handle the first qualifying conversation. Tell us about your
                team and we will get you set up.
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
