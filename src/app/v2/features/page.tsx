"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Bot,
  MapPin,
  Zap,
  MessageSquare,
  FileSpreadsheet,
  Phone,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Plus,
  Minus,
  Search,
  Star,
  Globe,
  Smartphone,
  Mic,
  TrendingUp,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ================================= HERO ================================= */
function Hero() {
  return (
    <section className="relative px-5 sm:px-8 pt-24 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>
      <motion.div
        {...fadeUp}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Features
        </span>
        <h1 className="xv-serif mt-6 text-[52px] sm:text-[80px] lg:text-[104px] leading-[0.92] tracking-[-0.03em]">
          Source. Call.
          <br />
          <span className="italic text-[#0b0b0f]/60">
            Qualify. Follow up.
          </span>
        </h1>
        <p className="mt-10 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]">
          Xovra is an AI-powered cold calling platform. Find businesses on
          Google Maps, call from the browser or send the AI qualifier in,
          handle objections with live help, and manage SMS follow-up and
          outcomes from one screen.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="/v2/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
          >
            Get Early Access <ArrowRight size={14} />
          </a>
          <a
            href="/v2/demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
          >
            Book a Demo
          </a>
        </div>
      </motion.div>

      {/* Hero widescreen mock */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative mt-16 max-w-6xl mx-auto"
      >
        <div className="absolute -inset-10 bg-gradient-to-br from-cyan-200/40 via-indigo-200/30 to-fuchsia-200/40 blur-3xl -z-10" />
        <WorkspaceMock />
      </motion.div>
    </section>
  );
}

function WorkspaceMock() {
  return (
    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-[#faf9f6] text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[#0b0b0f]/50 font-mono">xovra.ai/workspace</span>
        <span className="text-emerald-600 inline-flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>
      <div className="grid grid-cols-12 min-h-[360px]">
        {/* Sidebar */}
        <aside className="col-span-2 border-r border-black/5 p-3 bg-[#faf9f6] text-[11.5px]">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#0b0b0f]/40 font-semibold mb-2">
            Workspace
          </div>
          {[
            { label: "Leads", icon: MapPin, active: true },
            { label: "Dialer", icon: Phone },
            { label: "Conversations", icon: MessageSquare },
            { label: "AI Qualifier", icon: Bot },
            { label: "Campaigns", icon: Sparkles },
            { label: "Ledger", icon: FileSpreadsheet },
            { label: "Suppression", icon: ShieldCheck },
          ].map((it) => (
            <div
              key={it.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${it.active ? "bg-white border border-black/10 text-[#0b0b0f] font-medium" : "text-[#0b0b0f]/65"}`}
            >
              <it.icon size={12} />
              {it.label}
            </div>
          ))}
        </aside>

        {/* Leads list */}
        <section className="col-span-4 border-r border-black/5 p-3 space-y-1">
          <div className="flex items-center justify-between px-1 pb-2">
            <div className="text-[13px] font-semibold">Riverside · TX</div>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/5 text-[#0b0b0f]/60">
              48 leads
            </span>
          </div>
          {[
            { n: "Riverside Plumbing Co.", c: "Austin, TX", t: "WEAK_SITE", col: "bg-amber-500", active: true },
            { n: "Capital Pipes", c: "Austin, TX", t: "RUNS_ADS", col: "bg-emerald-500" },
            { n: "Hill Country Plumbing", c: "Austin, TX", t: "STRONG_SITE", col: "bg-cyan-500" },
            { n: "Lone Star Drain", c: "Austin, TX", t: "NO_SITE", col: "bg-rose-500" },
            { n: "Barton Springs Plumbing", c: "Austin, TX", t: "WEAK_SITE", col: "bg-amber-500" },
            { n: "Zilker Plumbers", c: "Austin, TX", t: "STRONG_SITE", col: "bg-cyan-500" },
          ].map((l) => (
            <div
              key={l.n}
              className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg ${l.active ? "bg-white border border-[#0b0b0f]/10 shadow-sm" : "hover:bg-[#faf9f6]"}`}
            >
              <div className="min-w-0">
                <div className="text-[12.5px] font-medium truncate">{l.n}</div>
                <div className="text-[10px] text-[#0b0b0f]/45">{l.c}</div>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white ${l.col}`}>
                {l.t}
              </span>
            </div>
          ))}
        </section>

        {/* Dialer pane */}
        <section className="col-span-6 p-5 bg-white space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#0b0b0f]/40 font-semibold">
                Active Call · 02:14
              </div>
              <div className="mt-1 text-[18px] font-semibold">
                Riverside Plumbing Co.
              </div>
              <div className="text-[12px] text-[#0b0b0f]/55">
                +1 (512) 555-0183 · Plumber · 4.6 ★
              </div>
            </div>
            <span className="text-[9.5px] font-bold text-white px-2 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500">
              WEAK_SITE
            </span>
          </div>

          <div className="flex items-end gap-0.5 h-10">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.span
                key={i}
                animate={{ height: [3, 18, 6, 28, 4] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.025,
                  ease: "easeInOut",
                }}
                className="flex-1 rounded-full bg-gradient-to-t from-[#4f5bf0] to-[#a855f7]"
              />
            ))}
          </div>

          <div className="rounded-xl bg-[#f0efff] border border-[#4f5bf0]/20 p-3">
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#4f5bf0] font-semibold mb-1">
              <Zap size={10} /> Live rebuttal · Claude
            </div>
            <p className="text-[12.5px] text-[#0b0b0f]/85 leading-relaxed">
              Totally hear you on busy — 68% of plumbing searches happen on
              phones. Your site isn&apos;t mobile-friendly — worth 5 minutes?
            </p>
          </div>

          <div className="grid grid-cols-6 gap-1.5">
            {["Int.", "Mock", "VM", "No ans", "No int.", "Bad #"].map((o, i) => (
              <button
                key={o}
                className="text-[9.5px] py-1.5 rounded-md bg-[#f6f4ef] border border-black/5 hover:bg-white text-[#0b0b0f]/75"
              >
                <span className="block text-[8.5px] text-[#0b0b0f]/35">
                  {i + 1}
                </span>
                {o}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center pt-1">
            <div className="flex gap-1 text-[10.5px] text-[#0b0b0f]/50">
              <kbd className="px-1.5 py-0.5 rounded bg-[#f6f4ef] border border-black/10">
                C
              </kbd>
              call ·
              <kbd className="px-1.5 py-0.5 rounded bg-[#f6f4ef] border border-black/10">
                H
              </kbd>
              hang up
            </div>
            <div className="flex gap-1.5">
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center">
                <Phone size={12} className="text-white rotate-[135deg]" />
              </div>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16,185,129,0.4)",
                    "0 0 0 10px rgba(16,185,129,0)",
                  ],
                }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
              >
                <Phone size={12} className="text-white" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ============================ WORKFLOW ============================ */
function Workflow() {
  const steps = [
    { label: "Source", icon: MapPin, color: "from-cyan-400 to-blue-500", desc: "Niche + city, pulled from Google Maps." },
    { label: "Call", icon: Phone, color: "from-indigo-400 to-fuchsia-500", desc: "Browser softphone or AI qualifier dials." },
    { label: "Handle", icon: Zap, color: "from-amber-400 to-rose-500", desc: "Live rebuttals from Claude or Gemini." },
    { label: "Follow up", icon: MessageSquare, color: "from-emerald-400 to-teal-500", desc: "Two-way SMS, email, or WhatsApp drafts." },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          The Xovra workflow
        </span>
        <h2 className="xv-serif mt-4 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Four steps,
          <br />
          <span className="italic text-[#0b0b0f]/55">one workspace.</span>
        </h2>
      </motion.div>

      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-5 relative">
        <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-500/0 via-[#4f5bf0]/50 to-fuchsia-500/0" />
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative rounded-2xl bg-white border border-black/5 shadow-sm p-5 overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mx-auto`}
            >
              <s.icon size={20} className="text-white" />
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-30`}
              />
            </motion.div>
            <div className="mt-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#0b0b0f]/40 font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[17px] font-semibold">{s.label}</div>
              <div className="mt-2 text-[12.5px] text-[#0b0b0f]/55 leading-snug">
                {s.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-10 text-center text-[13px] text-[#0b0b0f]/55">
        Voice, SMS, and AI run on Telnyx. Live help uses Claude or Gemini.
      </p>
    </section>
  );
}

/* ============================ FEATURES ============================ */
function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI Qualifier Calls",
      body: "An AI assistant places the call, discloses it is AI in the opening line, asks qualifying questions, and returns a score, interest level, and suggested next action.",
      accent: "bg-[#eaf6ef]",
      visual: <AIQualifierMock />,
    },
    {
      icon: MapPin,
      title: "Lead Sourcing & Campaigns",
      body: "Google Maps scraping with website audits, Google Ads detection, and social presence checks. Score every lead and export the list.",
      accent: "bg-[#f0efff]",
      visual: <MapsMock />,
    },
    {
      icon: Zap,
      title: "Live AI Rebuttals",
      body: "Context-aware objection handling drafted by Claude or Gemini during the call. Rebuttals use what Xovra already knows.",
      accent: "bg-[#ffecee]",
      visual: <RebuttalMock />,
    },
    {
      icon: MessageSquare,
      title: "Follow-Up & SMS",
      body: "Two-way SMS over Telnyx with STOP and UNSUBSCRIBE handled automatically. Email and WhatsApp drafts for structured follow-ups.",
      accent: "bg-[#fff2e8]",
      visual: <SMSMock />,
    },
    {
      icon: FileSpreadsheet,
      title: "Outcome Tracking",
      body: "Outcomes stream into Google Sheets. AI lead scores sit next to each row. A per-event usage ledger shows every charge as it happens.",
      accent: "bg-[#eef6ff]",
      visual: <LedgerMock />,
    },
    {
      icon: MessageSquare,
      title: "Messages & Conversations",
      body: "SMS threads grouped by phone number with lead names matched. Replies land in one inbox — no toggling between tabs.",
      accent: "bg-[#faf1ff]",
      visual: <InboxMock />,
    },
  ];

  return (
    <section className="py-32 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="xv-serif text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Six capabilities,
          <br />
          <span className="italic text-[#0b0b0f]/55">
            one tightly-looped system.
          </span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -4 }}
            className={`group rounded-2xl ${f.accent} border border-black/5 p-7 overflow-hidden transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-black/5 flex items-center justify-center">
              <f.icon size={18} className="text-[#0b0b0f]/80" />
            </div>
            <h3 className="mt-5 xv-serif text-[30px] leading-tight tracking-[-0.02em]">
              {f.title}
            </h3>
            <p className="mt-3 text-[14px] text-[#0b0b0f]/60 leading-relaxed max-w-md">
              {f.body}
            </p>
            <div className="mt-6 relative h-[220px]">{f.visual}</div>
            <div className="mt-5 inline-flex items-center gap-1 text-[13px] text-[#0b0b0f]/75 group-hover:text-[#0b0b0f] transition">
              Explore
              <ArrowRight
                size={13}
                className="transition group-hover:translate-x-0.5"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ MOCK VISUALS ============================ */
function AIQualifierMock() {
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 overflow-hidden shadow-sm">
      <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        LIVE
      </div>
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg"
        >
          <Mic size={18} className="text-white" />
        </motion.div>
      </div>
      <div className="mt-4 space-y-1.5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="self-start text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-[#f6f4ef] border border-black/5 max-w-[80%] text-[#0b0b0f]/80"
        >
          Hi — I&apos;m an AI calling on behalf of Xovra.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="ml-auto text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-br-none bg-emerald-500/15 border border-emerald-500/20 max-w-[60%] text-[#0b0b0f]/85"
        >
          Wait, you&apos;re an AI?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="self-start text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-[#f6f4ef] border border-black/5 max-w-[85%] text-[#0b0b0f]/80"
        >
          Yes — quick question about your website…
        </motion.div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-[#0b0b0f]/50">
        <span>Score · 7/10</span>
        <span>Interest · warm</span>
        <span>Next · demo</span>
      </div>
    </div>
  );
}

function MapsMock() {
  const pins = [
    { x: "18%", y: "25%" },
    { x: "52%", y: "15%" },
    { x: "72%", y: "48%" },
    { x: "30%", y: "60%" },
    { x: "60%", y: "72%" },
    { x: "82%", y: "22%" },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 overflow-hidden shadow-sm">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(79,91,240,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,91,240,0.1) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <motion.div
        animate={{ y: ["-5%", "105%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f5bf0] to-transparent"
        style={{ boxShadow: "0 0 10px rgba(79,91,240,0.8)" }}
      />
      {pins.map((p, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring" }}
          style={{ left: p.x, top: p.y }}
          className="absolute"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.18 }}
              className="absolute inset-0 rounded-full bg-[#4f5bf0]/40"
            />
            <MapPin
              size={14}
              className="relative text-[#4f5bf0]"
              fill="currentColor"
            />
          </div>
        </motion.div>
      ))}
      <div className="absolute left-3 bottom-3 rounded-lg bg-white/90 backdrop-blur border border-black/5 px-2.5 py-1.5 text-[10.5px] text-[#0b0b0f]/80 shadow">
        <span className="font-semibold text-[#4f5bf0]">6</span> businesses
        enriched
      </div>
    </div>
  );
}

function RebuttalMock() {
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 overflow-hidden flex flex-col justify-center gap-2.5 shadow-sm">
      <div className="flex items-center justify-between text-[10.5px]">
        <div className="flex items-center gap-1 text-rose-600 font-semibold">
          <Zap size={11} /> Rebuttal drafting
        </div>
        <span className="text-[#0b0b0f]/40">0.4s</span>
      </div>
      <div className="rounded-lg p-3 bg-rose-50 border border-rose-200 text-[11px] text-[#0b0b0f]/80 leading-relaxed">
        <div className="font-mono text-rose-500 text-[10px]">
          // context: WEAK_SITE, no HTTPS, 230 FB followers
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          &quot;Totally hear you on being busy — 68% of plumbing searches happen
          on phones, and your site isn&apos;t mobile-friendly. Worth 5 minutes
          this week?&quot;
        </motion.span>
      </div>
      <div className="flex gap-1.5">
        {["Claude", "Gemini"].map((p) => (
          <span
            key={p}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[#f6f4ef] border border-black/10 text-[#0b0b0f]/70"
          >
            {p}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-[#0b0b0f]/50">
          Shown on rep&apos;s screen
        </span>
      </div>
    </div>
  );
}

function SMSMock() {
  const msgs = [
    { from: "me", t: "Hey Josh — following up from our call. Mind if I send the mobile audit?" },
    { from: "them", t: "Sure — email it over." },
    { from: "me", t: "Sent. The whole thing takes 5 min — let me know what sticks." },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between text-[10.5px] mb-3">
        <div>
          <div className="font-semibold text-[#0b0b0f]">Josh · Riverside</div>
          <div className="text-[#0b0b0f]/50">+1 (512) 555-0183</div>
        </div>
        <span className="text-[10px] text-emerald-600 font-semibold">
          2-way · opt-out OK
        </span>
      </div>
      <div className="space-y-1.5">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18 }}
            className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-[10.5px] leading-snug ${m.from === "me" ? "ml-auto bg-[#4f5bf0] text-white rounded-br-sm" : "bg-[#f6f4ef] text-[#0b0b0f]/85 rounded-bl-sm"}`}
          >
            {m.t}
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-[#0b0b0f]/50 pt-2 border-t border-black/5 mt-2">
        <span>STOP · UNSUBSCRIBE auto-handled</span>
        <span>Telnyx</span>
      </div>
    </div>
  );
}

function LedgerMock() {
  const rows = [
    { t: "09:12", e: "Manual call", q: "4.6 min", c: "$0.09" },
    { t: "09:18", e: "AI qualifier", q: "3.2 min", c: "$0.80" },
    { t: "09:22", e: "SMS sent", q: "1 part", c: "$0.03" },
    { t: "09:35", e: "AI qualifier", q: "5.4 min", c: "$1.35" },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-[#0b1324] text-white p-4 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between text-[10.5px]">
        <div>
          <div className="text-white/50 uppercase tracking-[0.15em] font-semibold text-[9.5px]">
            Today
          </div>
          <div className="xv-serif text-[26px] italic leading-none mt-1">
            $2.27
          </div>
        </div>
        <TrendingUp size={14} className="text-cyan-300" />
      </div>
      <div className="mt-3 space-y-1">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-[auto_1fr_auto_auto] gap-2 text-[10.5px] py-1.5 px-2 rounded-md hover:bg-white/5"
          >
            <span className="text-white/40">{r.t}</span>
            <span className="text-white/90">{r.e}</span>
            <span className="text-white/55">{r.q}</span>
            <span className="text-white font-medium text-right">{r.c}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InboxMock() {
  const threads = [
    { n: "Josh · Riverside", t: "Sent. The whole thing takes 5 min…", unread: true },
    { n: "Priya · North Shore", t: "Can you share those landing pages?", unread: true },
    { n: "Sam · Bluefield Ins.", t: "Review angle makes sense. Let's book Thu." },
    { n: "Jordan · Mesa Dental", t: "Site live in a week? Confirming." },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 overflow-hidden shadow-sm">
      <div className="px-3 py-2 border-b border-black/5 bg-[#faf9f6] flex items-center justify-between text-[11px]">
        <span className="font-semibold">Inbox</span>
        <span className="text-[#0b0b0f]/50">2 unread</span>
      </div>
      <div className="p-2 space-y-1">
        {threads.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#faf9f6]"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
              {t.n.split(" ")[0][0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12px] font-semibold truncate">
                  {t.n}
                </span>
                {t.unread && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4f5bf0] shrink-0" />
                )}
              </div>
              <div className="text-[10.5px] text-[#0b0b0f]/55 truncate">
                {t.t}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============================ DAY FLOW ============================ */
function DayFlow() {
  const steps = [
    { t: "Source leads", b: "Pick a niche and city. Xovra pulls the Google Maps list, enriched with website, ads, and social signals." },
    { t: "Build a campaign", b: "Tag leads with pitch angles. Attach a script, choose a number, set a window." },
    { t: "Call", b: "Dial from the browser, or hand the first call to the AI qualifier." },
    { t: "Handle objections", b: "Live rebuttals surface mid-call using what Xovra already knows." },
    { t: "Log and follow up", b: "Outcomes sync to the sheet. Follow-up SMS goes out from the same screen." },
  ];
  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          A day in the Xovra workflow
        </span>
        <h2 className="xv-serif mt-4 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Five steps,
          <br />
          <span className="italic text-[#0b0b0f]/55">start to log.</span>
        </h2>
      </motion.div>
      <div className="mt-16 max-w-4xl mx-auto relative">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#4f5bf0]/60 via-[#a855f7]/50 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className="relative flex items-start gap-5 pb-6 last:pb-0"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="shrink-0 w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm text-[#4f5bf0] font-semibold text-[15px] z-10"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.div>
            <div className="flex-1 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
              <div className="text-[17px] font-semibold">{s.t}</div>
              <div className="mt-1 text-[14px] text-[#0b0b0f]/60 leading-relaxed">
                {s.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ TRIPTYCH ============================ */
function Triptych() {
  const cols = [
    {
      icon: Phone,
      title: "Calling",
      items: [
        { t: "Keyboard-shortcut dialing", b: "C to call, H to hang up, 1–6 to log outcomes." },
        { t: "Operator-first flow", b: "The operator's line rings before the lead picks up." },
        { t: "AI qualifier scoring", b: "Every AI call returns a score from 1 to 10." },
      ],
      color: "from-[#4f5bf0] to-[#4338ca]",
    },
    {
      icon: Search,
      title: "Lead intelligence",
      items: [
        { t: "Website audit", b: "HTTPS, mobile-friendliness, copyright-year checks." },
        { t: "Ads detection", b: "Three methods for spotting Google Ads spend." },
        { t: "Social presence", b: "Instagram, Facebook, TikTok with follower counts." },
      ],
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & teams",
      items: [
        { t: "Suppression lists", b: "Append-only. A blacklisted number never dials again." },
        { t: "Calling windows", b: "8 AM – 9 PM local, enforced by default, with caps." },
        { t: "Teams & roles", b: "Owner, admin, and agent roles with invites." },
      ],
      color: "from-amber-400 to-orange-500",
    },
  ];
  return (
    <section className="py-32 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {cols.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-[#f6f4ef] border border-black/5 p-6 overflow-hidden"
          >
            <div
              className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-3xl`}
            />
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md`}
              >
                <c.icon size={18} className="text-white" />
              </div>
              <div className="mt-5 text-[22px] font-semibold">{c.title}</div>
              <ul className="mt-5 space-y-4">
                {c.items.map((it) => (
                  <li key={it.t}>
                    <div className="text-[14px] font-medium">{it.t}</div>
                    <div className="text-[12.5px] text-[#0b0b0f]/55 mt-0.5">
                      {it.b}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ DOES / DOES NOT ============================ */
function DoesDoesNot() {
  const does = [
    "Browser dialer, one call at a time",
    "AI qualifier calls that disclose they are AI",
    "Google Maps sourcing with website, ads, and social enrichment",
    "Live rebuttals via Claude or Gemini",
    "Two-way SMS with email and WhatsApp drafts",
    "Outcome tracking to Google Sheets",
  ];
  const doesnt = [
    "Ringless voicemail",
    "Power or predictive dialing",
    "Call recording or transcripts",
    "Native CRM, Zapier, or Slack integrations",
    "Voice cloning or WhatsApp Business API",
  ];
  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Straight answers
        </span>
        <h2 className="xv-serif mt-4 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          What Xovra is,
          <br />
          <span className="italic text-[#0b0b0f]/55">and is not.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-white border border-black/5 p-7"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-emerald-600 font-semibold">
            Does
          </div>
          <ul className="mt-5 space-y-3">
            {does.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14.5px] text-[#0b0b0f]/85"
              >
                <CheckCircle2
                  size={17}
                  className="text-emerald-500 shrink-0 mt-0.5"
                />
                {d}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-white border border-black/5 p-7"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
            Does not
          </div>
          <ul className="mt-5 space-y-3">
            {doesnt.map((d, i) => (
              <motion.li
                key={d}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14.5px] text-[#0b0b0f]/70"
              >
                <XCircle size={17} className="text-rose-400 shrink-0 mt-0.5" />
                {d}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================ SUPPORTING ============================ */
function Supporting() {
  const pieces = [
    { label: "Campaigns", icon: Sparkles },
    { label: "Call scripts", icon: FileSpreadsheet },
    { label: "Suppression lists", icon: ShieldCheck },
    { label: "Calling windows", icon: Clock },
    { label: "Teams", icon: Users },
    { label: "Number pools", icon: Phone },
  ];
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Supporting pieces.
        </h2>
      </motion.div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {pieces.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl bg-[#f6f4ef] border border-black/5 py-5 text-center transition hover:bg-white hover:shadow-sm"
          >
            <p.icon size={18} className="mx-auto text-[#0b0b0f]/70" />
            <div className="mt-2.5 text-[13px] font-medium text-[#0b0b0f]">
              {p.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ FAQ ============================ */
function FAQ() {
  const faqs = [
    { q: "What is Xovra?", a: "An AI-powered cold calling platform that sources leads from Google Maps, dials from the browser or with an AI qualifier, helps handle objections, and tracks outcomes." },
    { q: "Is it a power dialer?", a: "No. Xovra is a single-line browser dialer with an optional AI qualifier — not a power or predictive dialer." },
    { q: "Does it do ringless voicemail?", a: "No. Xovra is live, two-way outbound only." },
    { q: "What do I need to bring?", a: "A Telnyx account for voice, SMS, and AI. A Google Sheet to sync outcomes to. That's the setup." },
    { q: "Which integrations exist?", a: "Google Sheets sync and a HubSpot-compatible CSV export. No native CRM, Zapier, or Slack integrations." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Questions, answered.
        </h2>
      </motion.div>
      <div className="mt-12 max-w-3xl mx-auto space-y-2">
        {faqs.map((f, i) => {
          const open = openIdx === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-xl bg-white border border-black/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#faf9f6] transition"
              >
                <span className="text-[14.5px] font-medium">{f.q}</span>
                <span className="shrink-0 text-[#0b0b0f]/50">
                  {open ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[13.5px] text-[#0b0b0f]/65 leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================ CLOSING ============================ */
function Closing() {
  return (
    <section className="py-32 px-5 bg-white text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-7xl lg:text-[90px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        See the full workflow
        <br />
        <span className="italic text-[#0b0b0f]/55">on your own leads.</span>
      </motion.h2>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="/v2/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Get Early Access <ArrowRight size={14} />
        </a>
        <a
          href="/v2/demo"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}

/* ============================= PAGE ============================= */
export default function FeaturesPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <Workflow />
      <Features />
      <DayFlow />
      <Triptych />
      <DoesDoesNot />
      <Supporting />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
