"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Bot,
  Zap,
  MessageSquare,
  ShieldCheck,
  Search,
  Target,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Mic,
  PhoneCall,
  Keyboard,
  FileSpreadsheet,
  Lock,
  Server,
  FileCheck,
  Hash,
  Plus,
  Minus,
  Star,
  Brain,
  Waves,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ============ LOGO STRIP ============ */
export function LogoStrip() {
  const names = [
    "Riverside",
    "NorthShore",
    "MesaDental",
    "Bluefield",
    "HarborOps",
    "Pinecrest",
    "Sunline",
    "Grandview",
    "Pier 9",
    "Oakridge",
  ];
  return (
    <section className="py-16 px-5 border-y border-black/5 bg-[#f6f4ef]">
      <motion.p
        {...fadeUp}
        className="text-center text-[11.5px] uppercase tracking-[0.22em] text-[#0b0b0f]/50 font-medium"
      >
        In production at 300+ agencies and sales teams
      </motion.p>
      <div className="mt-8 max-w-6xl mx-auto overflow-hidden mask-fade">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex gap-14 whitespace-nowrap"
        >
          {[...names, ...names, ...names].map((n, i) => (
            <span
              key={i}
              className="text-[24px] font-semibold tracking-tight text-[#0b0b0f]/35 hover:text-[#0b0b0f]/70 transition"
            >
              {n}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ============ FEATURE GRID ============ */
export function Features() {
  return (
    <section id="features" className="py-32 px-5 relative bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Platform
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Outbound complexity,
          <br />
          <span className="italic text-[#0b0b0f]/50">handled.</span>
        </h2>
        <p className="mt-6 text-[#0b0b0f]/60 text-[16px] max-w-xl mx-auto">
          Any dialer can place a call. Xovra enriches, scores, pitches, logs, and
          reports — all in one workspace.
        </p>
      </motion.div>

      {/* 4 big cards */}
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        <BigCard
          title="Google Maps Lead Scraping"
          body="Enter a niche and city. Xovra pulls business listings and enriches each with a website audit, Google Ads check, and social media scan — before you dial."
          accent="bg-[#f0efff]"
          visual={<ScraperVisual />}
        />
        <BigCard
          title="Browser-Based Softphone"
          body="A WebRTC dialer powered by Telnyx. Call from the browser with keyboard shortcuts — C to call, H to hang up, 1–6 to log outcomes."
          accent="bg-[#fff2e8]"
          visual={<DialerVisual />}
        />
      </div>

      <div className="mt-5 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        <BigCard
          title="AI Qualifier Calls"
          body="A Telnyx AI assistant calls your leads, discloses it is AI in the first sentence, asks qualifying questions, and returns a lead score."
          accent="bg-[#eaf6ef]"
          visual={<QualifierVisual />}
        />
        <BigCard
          title="Live AI Rebuttals"
          body="Claude drafts objection handling mid-call, using what Xovra already knows — website issues, ad spend, social signals."
          accent="bg-[#ffecee]"
          visual={<RebuttalVisual />}
        />
      </div>

      {/* Wide memory card */}
      <div className="mt-5 max-w-6xl mx-auto">
        <BigCard
          wide
          title="A memory of every lead, every call, every outcome"
          body="Xovra remembers each conversation. The next rep picks up right where the last call ended — same pitch angle, same objections handled, same next step."
          accent="bg-[#eef6ff]"
          visual={<MemoryVisual />}
        />
      </div>

      {/* 5 tiles */}
      <div className="mt-5 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          {
            icon: MessageSquare,
            label: "Two-Way SMS",
            detail: "Threaded by number",
            color: "from-amber-400 to-orange-500",
            iconAnim: { rotate: [0, -10, 10, 0] },
          },
          {
            icon: FileSpreadsheet,
            label: "Sheet Sync",
            detail: "Live to Google Sheets",
            color: "from-emerald-400 to-teal-500",
            iconAnim: { y: [0, -3, 0] },
          },
          {
            icon: Keyboard,
            label: "Shortcuts",
            detail: "C · H · 1–6",
            color: "from-indigo-400 to-fuchsia-500",
            iconAnim: { scale: [1, 1.12, 1] },
          },
          {
            icon: Hash,
            label: "6 Outcomes",
            detail: "One keystroke each",
            color: "from-rose-400 to-pink-500",
            iconAnim: { rotate: [0, 360] },
          },
          {
            icon: ShieldCheck,
            label: "Compliance",
            detail: "Windows + caps",
            color: "from-cyan-400 to-blue-500",
            iconAnim: { scale: [1, 1.08, 1] },
          },
        ].map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              type: "spring",
              stiffness: 180,
            }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl bg-[#f6f4ef] border border-black/[0.06] px-3 py-6 text-center overflow-hidden transition-shadow hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            {/* Soft colored wash on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-[0.09] transition-opacity duration-500`}
            />
            {/* Top accent bar wipes in */}
            <motion.div
              className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${t.color} origin-left`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 + 0.3 }}
            />
            {/* Icon tile */}
            <div className="relative mx-auto w-11 h-11 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center overflow-hidden">
              <motion.span
                aria-hidden
                animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-40 blur-md transition`}
              />
              <motion.span
                animate={t.iconAnim}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="relative"
              >
                <t.icon size={18} className="text-[#0b0b0f]/80" />
              </motion.span>
            </div>

            <div className="relative mt-3 text-[13px] font-semibold text-[#0b0b0f]">
              {t.label}
            </div>
            <div className="relative mt-1 text-[10.5px] text-[#0b0b0f]/50 leading-snug px-1">
              {t.detail}
            </div>

            {/* Hover arrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#0b0b0f] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
            >
              <ArrowRight size={11} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BigCard({
  title,
  body,
  accent,
  visual,
  wide,
}: {
  title: string;
  body: string;
  accent: string;
  visual: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl overflow-hidden ${accent} border border-black/5 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]`}
    >
      <div
        className={`relative p-7 ${wide ? "md:grid md:grid-cols-[1fr_1.4fr] md:gap-8 md:items-center" : ""}`}
      >
        <div>
          <h3 className="xv-serif text-[30px] leading-tight tracking-[-0.02em] text-[#0b0b0f] max-w-md">
            {title}
          </h3>
          <p className="mt-4 text-[14.5px] text-[#0b0b0f]/60 leading-relaxed max-w-md">
            {body}
          </p>
        </div>
        <div className={`${wide ? "mt-6 md:mt-0" : "mt-7"} relative h-[190px]`}>
          {visual}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Mock visuals ---------- */
function ScraperVisual() {
  const pins = [
    { x: "20%", y: "30%" },
    { x: "55%", y: "20%" },
    { x: "75%", y: "55%" },
    { x: "35%", y: "65%" },
    { x: "62%", y: "78%" },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 overflow-hidden shadow-sm">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(79,91,240,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,91,240,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f5bf0] to-transparent"
      />
      {pins.map((p, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, type: "spring" }}
          style={{ left: p.x, top: p.y }}
          className="absolute"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
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
    </div>
  );
}

function DialerVisual() {
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 flex flex-col justify-between overflow-hidden shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          On call · 02:14
        </div>
        <div className="text-[10.5px] text-[#0b0b0f]/50">+1 (555) 013-4489</div>
      </div>
      <div className="flex items-end gap-0.5 h-10">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [4, 20, 8, 28, 6] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.03,
              ease: "easeInOut",
            }}
            className="flex-1 rounded-full bg-gradient-to-t from-[#4f5bf0] to-[#a855f7]"
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-1">
          {["C", "H", "1-6"].map((k) => (
            <kbd
              key={k}
              className="px-1.5 py-0.5 rounded bg-[#f6f4ef] text-[9.5px] text-[#0b0b0f]/70 border border-black/10"
            >
              {k}
            </kbd>
          ))}
        </div>
        <div className="flex gap-1.5">
          <div className="w-7 h-7 rounded-full bg-rose-500 flex items-center justify-center">
            <Phone size={11} className="rotate-[135deg] text-white" />
          </div>
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16,185,129,0.4)",
                "0 0 0 10px rgba(16,185,129,0)",
              ],
            }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center"
          >
            <Phone size={11} className="text-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function QualifierVisual() {
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 overflow-hidden shadow-sm">
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 blur-lg opacity-60"
          />
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-1.5 pt-10">
        <div className="self-start text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-[#f6f4ef] border border-black/5 max-w-[70%] text-[#0b0b0f]/80">
          Hi — I&apos;m an AI calling on behalf of Xovra.
        </div>
        <div className="self-end text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-br-none bg-emerald-500/15 border border-emerald-500/20 max-w-[55%] text-[#0b0b0f]/85">
          Wait, you&apos;re an AI?
        </div>
        <div className="self-start text-[10.5px] px-2.5 py-1.5 rounded-lg rounded-bl-none bg-[#f6f4ef] border border-black/5 max-w-[70%] text-[#0b0b0f]/80">
          Yes — quick question about your website…
        </div>
      </div>
    </div>
  );
}

function RebuttalVisual() {
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-4 overflow-hidden flex flex-col justify-center gap-2 shadow-sm">
      <div className="flex items-center justify-between text-[10.5px]">
        <div className="flex items-center gap-1 text-rose-600">
          <Zap size={10} /> Rebuttal drafting
        </div>
        <span className="text-[#0b0b0f]/40">0.4s</span>
      </div>
      <div className="rounded-lg p-2.5 bg-rose-50 border border-rose-200 text-[10.5px] text-[#0b0b0f]/80 leading-relaxed">
        <span className="text-rose-500 font-mono">
          // context: WEAK_SITE, no HTTPS
        </span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          &quot;68% of plumbing searches happen on phones. Your site isn&apos;t
          mobile-friendly — worth 5 minutes?&quot;
        </motion.span>
      </div>
      <div className="flex gap-1.5">
        {["Claude", "Gemini"].map((p) => (
          <span
            key={p}
            className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#f6f4ef] border border-black/10 text-[#0b0b0f]/70"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function MemoryVisual() {
  const rows = [
    {
      time: "Mon 10:12",
      who: "Rep · Alex",
      note: "Connected · interested in mobile audit",
    },
    {
      time: "Wed 14:03",
      who: "AI Qualifier",
      note: "Follow-up SMS sent · email captured",
    },
    {
      time: "Fri 09:41",
      who: "Rep · Jamie",
      note: "Demo booked · angle: WEAK_SITE",
    },
  ];
  return (
    <div className="relative w-full h-full rounded-xl bg-white border border-black/5 p-3 overflow-hidden shadow-sm">
      <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#4f5bf0]/60 via-[#4f5bf0]/30 to-transparent" />
      <div className="relative space-y-2 pl-8">
        {rows.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative rounded-lg bg-[#f6f4ef] border border-black/5 p-2.5"
          >
            <div className="absolute -left-[22px] top-3 w-2.5 h-2.5 rounded-full bg-[#4f5bf0] shadow-[0_0_8px_rgba(79,91,240,0.5)]" />
            <div className="text-[10px] text-[#0b0b0f]/45">{r.time}</div>
            <div className="text-[11.5px] text-[#0b0b0f] font-medium">{r.who}</div>
            <div className="text-[10.5px] text-[#0b0b0f]/60">{r.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============ TECH STACK ============ */
export function TechStack() {
  const stages = [
    {
      step: "01",
      title: "Perception",
      body: "Scrape Google Maps, audit sites, detect ads, scan socials — in real time.",
      icon: Search,
      color: "from-cyan-500 to-blue-600",
    },
    {
      step: "02",
      title: "Reasoning",
      body: "Score every lead, pick a pitch angle, draft rebuttals mid-call with Claude or Gemini.",
      icon: Brain,
      color: "from-indigo-500 to-fuchsia-600",
    },
    {
      step: "03",
      title: "Response",
      body: "Dial via WebRTC, send SMS, log the outcome to a sheet. All in under a second.",
      icon: Waves,
      color: "from-fuchsia-500 to-rose-600",
    },
  ];

  return (
    <section className="py-32 px-5 relative bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          <Sparkles size={12} /> Built by Xovra Labs
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          The intelligence behind
          <br />
          <span className="italic text-[#0b0b0f]/50">every conversation.</span>
        </h2>
        <p className="mt-6 text-[#0b0b0f]/60 max-w-xl mx-auto">
          A three-stage pipeline that turns a Maps search into a logged outcome —{" "}
          <span className="text-[#0b0b0f] font-medium">in under two minutes.</span>
        </p>
      </motion.div>

      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-5 relative">
        <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-500/0 via-[#4f5bf0]/40 to-fuchsia-500/0" />
        {stages.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative rounded-2xl bg-white border border-black/5 p-7 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0b0b0f]/40 font-semibold">
                {s.step}
              </span>
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}
              >
                <s.icon size={18} className="text-white" />
              </div>
            </div>
            <h3 className="xv-serif mt-6 text-[26px] leading-tight tracking-[-0.02em]">
              {s.title}
            </h3>
            <p className="mt-3 text-[14px] text-[#0b0b0f]/60 leading-relaxed">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Latency stat */}
      <motion.div
        {...fadeUp}
        className="mt-8 max-w-5xl mx-auto rounded-2xl bg-white border border-black/5 shadow-sm px-6 py-5 flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              End-to-end latency
            </div>
            <div className="xv-serif text-[32px] leading-none tracking-[-0.02em]">
              <span className="italic">&lt; 1.9s</span>{" "}
              <span className="text-[#0b0b0f]/50 text-[20px]">per rebuttal</span>
            </div>
          </div>
        </div>
        <div className="flex gap-7 text-[13px] text-[#0b0b0f]/60">
          <div>
            <div className="text-[#0b0b0f] text-xl font-semibold">&lt;2min</div>
            Maps → dial
          </div>
          <div>
            <div className="text-[#0b0b0f] text-xl font-semibold">1 key</div>
            per outcome
          </div>
          <div>
            <div className="text-[#0b0b0f] text-xl font-semibold">24/7</div>
            AI qualifier
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============ TEAM / OPERATORS ============ */
export function TeamSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80",
  ];
  return (
    <section className="py-32 px-5 relative bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          {...fadeUp}
          className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
        >
          Dialer Operators
        </motion.span>
        <motion.h2
          {...fadeUp}
          className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[70px] leading-[0.98] tracking-[-0.03em]"
        >
          Don&apos;t just buy a dialer.
          <br />
          <span className="italic text-[#0b0b0f]/50">
            Build a team around it.
          </span>
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="mt-6 text-[#0b0b0f]/60 max-w-xl mx-auto text-[16px]"
        >
          Xovra gives your reps the context, the angle, and the next action — so
          every dial sounds researched, not scripted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-center -space-x-3"
        >
          {avatars.map((a, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring" }}
              className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-lg"
            >
              <img src={a} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white font-medium text-sm hover:bg-black transition"
          >
            Try for free <ArrowRight size={14} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40 text-sm text-[#0b0b0f] transition"
          >
            Talk to an outbound architect
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ IMPROVEMENT LOOP ============ */
export function ImprovementLoop() {
  const stages = [
    { label: "Scrape", desc: "Pull niche + city", icon: MapPin, angle: 0 },
    { label: "Score", desc: "Pitch angle assigned", icon: Target, angle: 90 },
    { label: "Call", desc: "Rep or AI qualifier", icon: PhoneCall, angle: 180 },
    { label: "Log", desc: "Outcome → Sheet", icon: FileSpreadsheet, angle: 270 },
  ];
  return (
    <section className="py-32 px-5 relative bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          The Xovra loop
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Every outcome
          <br />
          <span className="italic text-[#0b0b0f]/50">
            improves the next call.
          </span>
        </h2>
      </motion.div>

      <div className="mt-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Ring */}
        <div className="relative w-full aspect-square max-w-[460px] mx-auto">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(79,91,240,0.5), rgba(168,85,247,0.5), rgba(236,72,153,0.5), rgba(34,211,238,0.5), rgba(79,91,240,0.5))",
              WebkitMask:
                "radial-gradient(circle, transparent 54%, black 55%, black 60%, transparent 61%)",
              mask: "radial-gradient(circle, transparent 54%, black 55%, black 60%, transparent 61%)",
            }}
          />
          <div className="absolute inset-0 rounded-full border border-black/10" />
          <div className="absolute inset-[18%] rounded-full border border-black/10" />
          <div className="absolute inset-[36%] rounded-full border border-dashed border-black/10" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-[0_15px_50px_rgba(99,102,241,0.4)] flex items-center justify-center"
            >
              <span className="xv-serif text-white text-4xl italic">X</span>
            </motion.div>
          </div>

          {stages.map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            const r = 46;
            const x = 50 + r * Math.cos(rad - Math.PI / 2);
            const y = 50 + r * Math.sin(rad - Math.PI / 2);
            return (
              <motion.div
                key={s.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-14 h-14 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-md">
                    <s.icon size={18} className="text-[#0b0b0f]/85" />
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-semibold text-[#0b0b0f]">
                      {s.label}
                    </div>
                    <div className="text-[10.5px] text-[#0b0b0f]/50">
                      {s.desc}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: build chat + flow */}
        <div className="space-y-4">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 shadow-sm p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
              <span className="text-[13px] font-medium">Build with Xovra</span>
            </div>
            <div className="space-y-2 text-[13px]">
              <div className="rounded-lg px-3 py-2 bg-[#f6f4ef] border border-black/5 text-[#0b0b0f]/80">
                Add a pitch angle for leads with no mobile site.
              </div>
              <div className="rounded-lg px-3 py-2 bg-[#4f5bf0]/10 border border-[#4f5bf0]/20 text-[#0b0b0f]/85">
                Added angle{" "}
                <span className="font-mono text-[#4f5bf0]">WEAK_SITE</span>.
                Rebuttals updated for 847 leads.
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 shadow-sm p-5"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold mb-4">
              Conversation flow
            </div>
            <div className="flex flex-col gap-2 text-[13px]">
              <FlowNode label="Lead picks up" good />
              <FlowArrow />
              <FlowNode label="AI discloses + qualifies" />
              <FlowArrow />
              <div className="grid grid-cols-3 gap-2">
                <FlowNode label="Interested" tone="emerald" small />
                <FlowNode label="Objection" tone="amber" small />
                <FlowNode label="Not fit" tone="rose" small />
              </div>
              <FlowArrow />
              <FlowNode label="Logged · sheet synced" good />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  label,
  good,
  tone,
  small,
}: {
  label: string;
  good?: boolean;
  tone?: "emerald" | "amber" | "rose";
  small?: boolean;
}) {
  const toneMap = {
    emerald: "border-emerald-500/30 bg-emerald-50 text-emerald-900",
    amber: "border-amber-500/30 bg-amber-50 text-amber-900",
    rose: "border-rose-500/30 bg-rose-50 text-rose-900",
  };
  const cls = tone
    ? toneMap[tone]
    : good
      ? "border-[#4f5bf0]/25 bg-[#4f5bf0]/10 text-[#0b0b0f]"
      : "border-black/10 bg-[#f6f4ef] text-[#0b0b0f]";
  return (
    <div
      className={`rounded-lg border px-3 ${small ? "py-1.5 text-[11px]" : "py-2"} text-center ${cls}`}
    >
      {label}
    </div>
  );
}
function FlowArrow() {
  return (
    <div className="mx-auto h-5 w-px bg-gradient-to-b from-black/30 to-transparent relative">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 border-x-4 border-t-4 border-x-transparent border-t-black/30" />
    </div>
  );
}

/* ============ TESTIMONIALS ============ */
const testimonials = [
  {
    quote:
      "We used to build call lists by hand. Now the website and ads check shows us the opening line before we ever dial.",
    author: "Jordan M.",
    role: "Agency Owner",
    org: "Digital Marketing Agency",
    initials: "JM",
    stats: [
      { k: "3×", v: "faster list build" },
      { k: "42%", v: "connect rate" },
      { k: "6", v: "reps live day 1" },
    ],
  },
  {
    quote:
      "Keyboard shortcuts and instant logging to the sheet. That's the whole reason I stopped using my old dialer.",
    author: "Sam K.",
    role: "Sales Rep",
    org: "Insurance Lead Gen",
    initials: "SK",
    stats: [
      { k: "1 key", v: "per outcome" },
      { k: "<2m", v: "to first dial" },
      { k: "24/7", v: "AI backup" },
    ],
  },
  {
    quote:
      "AI disclosure on every call and the ability to review qualifier scores afterward — exactly the compliance posture we needed.",
    author: "Priya R.",
    role: "Sales Manager",
    org: "Real Estate Brokerage",
    initials: "PR",
    stats: [
      { k: "100%", v: "AI disclosure" },
      { k: "4", v: "pitch angles" },
      { k: "0", v: "manual logs" },
    ],
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-5 relative bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Real talk
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Real talk,
          <br />
          <span className="italic text-[#0b0b0f]/50">real impact.</span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6 flex flex-col hover:bg-white hover:shadow-md transition"
          >
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={13} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-[#0b0b0f] text-[15.5px] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t border-black/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-[11px] font-bold">
                {t.initials}
              </div>
              <div>
                <div className="text-[13.5px] font-medium">{t.author}</div>
                <div className="text-[11.5px] text-[#0b0b0f]/55">
                  {t.role} · {t.org}
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {t.stats.map((s) => (
                <div
                  key={s.v}
                  className="rounded-lg bg-white border border-black/5 p-2.5 text-center"
                >
                  <div className="xv-serif text-[22px] italic leading-none text-[#0b0b0f]">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[9.5px] text-[#0b0b0f]/55 leading-tight">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ PLATFORM LIST ============ */
export function PlatformList() {
  const items = [
    {
      icon: MapPin,
      title: "Google Maps Scraping",
      body: "Niche + city → enriched leads with pitch angles.",
    },
    {
      icon: Phone,
      title: "Browser Softphone",
      body: "WebRTC dialer with keyboard shortcuts and outcome keys.",
    },
    {
      icon: Bot,
      title: "AI Qualifier",
      body: "Discloses, qualifies, scores — then hands off to your rep.",
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets Sync",
      body: "Every outcome logs to a sheet. HubSpot-ready CSV export.",
    },
  ];

  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          The complete stack
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          The complete outbound,
          <br />
          <span className="italic text-[#0b0b0f]/50">built around AI.</span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <div className="space-y-2">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-black/5 hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f6f4ef] border border-black/5 flex items-center justify-center">
                <it.icon size={16} className="text-[#0b0b0f]/85" />
              </div>
              <div className="flex-1">
                <div className="text-[14.5px] font-semibold text-[#0b0b0f]">
                  {it.title}
                </div>
                <div className="text-[12.5px] text-[#0b0b0f]/55">{it.body}</div>
              </div>
              <ArrowRight
                size={15}
                className="text-[#0b0b0f]/35 group-hover:text-[#0b0b0f] group-hover:translate-x-1 transition"
              />
            </motion.a>
          ))}
        </div>

        <DialerScreenshot />
      </div>
    </section>
  );
}

function DialerScreenshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="rounded-2xl bg-white border border-black/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-black/5 bg-[#f6f4ef] text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[#0b0b0f]/50">xovra.ai/dialer</span>
          <span className="text-emerald-600">● live</span>
        </div>

        <div className="grid grid-cols-[1fr_1.4fr]">
          <div className="border-r border-black/5 p-3 space-y-1.5 bg-[#faf9f6]">
            {[
              {
                n: "Riverside Plumbing",
                t: "WEAK_SITE",
                c: "bg-amber-500",
                active: true,
              },
              { n: "North Shore Realty", t: "RUNS_ADS", c: "bg-emerald-500" },
              { n: "Bluefield Insurance", t: "STRONG_SITE", c: "bg-cyan-500" },
              { n: "Mesa Dental Group", t: "NO_SITE", c: "bg-rose-500" },
              { n: "Pier 9 Seafood", t: "WEAK_SITE", c: "bg-amber-500" },
            ].map((l) => (
              <div
                key={l.n}
                className={`flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg ${l.active ? "bg-white border border-black/10 shadow-sm" : "hover:bg-white/60"}`}
              >
                <span className="text-[11px] text-[#0b0b0f]/85 truncate">
                  {l.n}
                </span>
                <span
                  className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded-full text-white ${l.c}`}
                >
                  {l.t}
                </span>
              </div>
            ))}
          </div>

          <div className="p-5 space-y-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#0b0b0f]/40 font-semibold">
                Active Call · 02:14
              </div>
              <div className="mt-1 text-[16px] font-semibold text-[#0b0b0f]">
                Riverside Plumbing Co.
              </div>
              <div className="text-[11px] text-[#0b0b0f]/55">
                +1 (512) 555-0183
              </div>
            </div>
            <div className="flex items-end gap-0.5 h-10">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [3, 18, 6, 26, 4] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.03,
                    ease: "easeInOut",
                  }}
                  className="flex-1 rounded-full bg-gradient-to-t from-[#4f5bf0] to-[#a855f7]"
                />
              ))}
            </div>
            <div className="rounded-lg bg-[#4f5bf0]/8 border border-[#4f5bf0]/20 p-3">
              <div className="flex items-center gap-1.5 text-[10px] text-[#4f5bf0] font-semibold mb-1">
                <Zap size={10} /> Claude rebuttal
              </div>
              <p className="text-[12px] text-[#0b0b0f]/85">
                68% of plumbing searches happen on phones — worth 5 minutes?
              </p>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {["Int.", "Mock", "VM", "No ans", "No int.", "Bad #"].map(
                (o, i) => (
                  <button
                    key={o}
                    className="text-[9.5px] py-1.5 rounded bg-[#f6f4ef] border border-black/5 hover:bg-white text-[#0b0b0f]/75"
                  >
                    <span className="block text-[8.5px] text-[#0b0b0f]/35">
                      {i + 1}
                    </span>
                    {o}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============ SECURITY ============ */
export function Security() {
  const tiles = [
    {
      icon: ShieldCheck,
      title: "AI disclosure first",
      body: "Every AI call discloses it is an AI in the first sentence.",
    },
    {
      icon: Lock,
      title: "Suppression lists",
      body: "Numbers you blacklist never get dialed again — across the whole team.",
    },
    {
      icon: FileCheck,
      title: "Calling windows",
      body: "8 AM – 9 PM local time enforced by default, with per-contact caps.",
    },
    {
      icon: Server,
      title: "Audit trail",
      body: "Every call, outcome, and rebuttal is logged and exportable.",
    },
  ];
  return (
    <section className="py-32 px-5 relative overflow-hidden bg-[#172131] text-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 50%, rgba(236,72,153,0.1), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-cyan-300 font-semibold">
          Security & compliance
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Enterprise-grade security
          <br />
          <span className="italic text-white/55">& reliability.</span>
        </h2>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="relative mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {["TCPA", "10DLC", "GDPR", "SOC 2"].map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring" }}
            className="relative rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur py-5 text-center"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/40 font-semibold">
              Aligned with
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight">{b}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-6 max-w-5xl mx-auto grid sm:grid-cols-2 gap-3">
        {tiles.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-5"
          >
            <div className="flex items-center gap-2 mb-2 text-cyan-300">
              <t.icon size={16} />
              <span className="text-[13.5px] font-semibold text-white">
                {t.title}
              </span>
            </div>
            <p className="text-[12.5px] text-white/65 leading-relaxed">{t.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ CLOSING CTA ============ */
export function ClosingCTA() {
  return (
    <section
      id="early-access"
      className="py-32 px-5 relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-cyan-200/40 via-indigo-200/40 to-fuchsia-200/40 blur-[120px]" />
      </div>
      <motion.div
        {...fadeUp}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="xv-serif text-5xl sm:text-7xl lg:text-[90px] leading-[0.95] tracking-[-0.035em]">
          Ready to start
          <br />
          <span className="italic text-[#0b0b0f]/60">calling smarter?</span>
        </h2>
        <p className="mt-6 text-[#0b0b0f]/60">
          Usage-based pricing. No contracts. Cancel anytime.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0b0b0f] text-white font-medium text-sm hover:bg-black transition"
          >
            Try for free <ArrowRight size={14} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40 text-sm text-[#0b0b0f] transition"
          >
            Contact sales
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ============ FAQ ============ */
const faqs = [
  {
    q: "What exactly does Xovra do?",
    a: "Xovra scrapes business listings from Google Maps, enriches each lead with a website audit, Google Ads check and social media scan, assigns a pitch angle, and lets you call from a browser softphone — or lets an AI qualifier make the first call for you. Every outcome syncs to a Google Sheet.",
  },
  {
    q: "How is the browser softphone different from a regular dialer?",
    a: "No downloads. The dialer runs in-tab over WebRTC via Telnyx, with keyboard shortcuts — C to call, H to hang up, 1–6 to log outcomes — so a rep can work through a list without lifting their hand off the keyboard.",
  },
  {
    q: "What is a pitch angle?",
    a: "An auto-assigned tag — RUNS_ADS, NO_SITE, WEAK_SITE, or STRONG_SITE — that tells your rep the opening line before they dial. Each angle is backed by the actual signals Xovra found about the business.",
  },
  {
    q: "What does the AI qualifier actually say on a call?",
    a: "It discloses it is an AI in the first sentence, introduces the business you’re calling on behalf of, asks qualifying questions tied to the lead’s enrichment data, and reports back a score from 1–10 with a suggested next action.",
  },
  {
    q: "How do Live AI Rebuttals work?",
    a: "Mid-call, Claude or Gemini drafts an objection-handling line using what Xovra already knows about the lead — website issues, ad spend, social signals. It surfaces on the rep’s screen in under two seconds.",
  },
  {
    q: "Does Xovra handle SMS?",
    a: "Yes — two-way SMS over Telnyx, threaded by phone number, with opt-out keywords handled automatically. You are still responsible for 10DLC registration and local rules.",
  },
  {
    q: "What compliance controls are built in?",
    a: "Suppression lists, 8 AM – 9 PM calling windows, per-contact attempt caps, and mandatory AI disclosure on every AI-placed call.",
  },
  {
    q: "Where do the outcomes go?",
    a: "Every call outcome syncs to a Google Sheet in real time. You can export a HubSpot-compatible CSV with one click.",
  },
  {
    q: "What does it cost?",
    a: "Usage-based pricing — pay for what you dial, scrape and qualify. No contracts, no minimums, cancel anytime.",
  },
  {
    q: "How long does setup take?",
    a: "Under 10 minutes. Connect a Telnyx number, point at a Google Sheet, and run your first Maps search.",
  },
  {
    q: "Can I bring my own number?",
    a: "Yes — Xovra uses your Telnyx account, so your numbers, your reputation, your carrier relationships.",
  },
  {
    q: "Is there a team plan?",
    a: "Yes. Shared suppression lists, shared sheets, shared pitch-angle rules — so your whole team stays in sync.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[72px] leading-[0.98] tracking-[-0.03em]">
          Everything you want
          <br />
          <span className="italic text-[#0b0b0f]/50">to ask first.</span>
        </h2>
      </motion.div>

      <div className="mt-14 max-w-3xl mx-auto space-y-2">
        {visible.map((f, i) => {
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
                <span className="text-[14.5px] font-medium text-[#0b0b0f]">
                  {f.q}
                </span>
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

      {!showAll && faqs.length > 6 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40 text-sm transition"
          >
            Show more <ArrowRight size={14} />
          </button>
        </div>
      )}
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="relative border-t border-black/5 bg-white px-5 pt-20 pb-10 overflow-hidden">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-6 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_6px_18px_rgba(99,102,241,0.35)]">
              <span className="text-white font-black text-[13px]">X</span>
            </div>
            <span className="font-semibold tracking-tight text-[#0b0b0f]">
              Xovra
            </span>
          </div>
          <p className="mt-4 text-sm text-[#0b0b0f]/60 max-w-xs leading-relaxed">
            AI-powered outbound calling for revenue teams that refuse to lose.
          </p>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              Stay in the loop
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-2 flex gap-2 max-w-xs"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-[#f6f4ef] border border-black/10 focus:border-black/40 outline-none placeholder:text-[#0b0b0f]/35 text-[#0b0b0f]"
              />
              <button className="px-3 py-2 rounded-lg bg-[#0b0b0f] text-white text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs text-[#0b0b0f]/55">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>

        <FooterCol
          title="Product"
          links={[
            "Lead Scraping",
            "Softphone",
            "AI Qualifier",
            "Rebuttals",
            "SMS",
            "Compliance",
          ]}
        />
        <FooterCol
          title="Solutions"
          links={[
            "Small Business",
            "Sales Teams",
            "Lead Gen Agencies",
            "Real Estate",
            "Insurance",
          ]}
        />
        <FooterCol
          title="Resources"
          links={[
            "Documentation",
            "Changelog",
            "Customer Stories",
            "Pricing",
            "Status",
          ]}
        />
        <FooterCol
          title="Company"
          links={["About", "Contact", "Demo", "Privacy", "Terms"]}
        />
      </div>

      <div className="relative mt-16 pt-6 border-t border-black/5 max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3 text-xs text-[#0b0b0f]/50">
        <span>© 2026 Xovra. All rights reserved.</span>
        <span className="text-[#0b0b0f]/70 xv-serif italic">
          Find Leads. Call Them. Close Deals.
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-[#0b0b0f]/70 hover:text-[#0b0b0f] transition"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
