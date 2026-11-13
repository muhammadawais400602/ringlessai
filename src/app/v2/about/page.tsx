"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Bot,
  MessageSquare,
  FileSpreadsheet,
  ShieldCheck,
  Building2,
  Users,
  User,
  Search,
  TrendingUp,
  Clock,
  XCircle,
  CheckCircle2,
  Scale,
  Hand,
  Sparkles,
  Target,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ================================ HERO ================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-8 pt-24 pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-160px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <motion.span
            {...fadeUp}
            className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
          >
            About Xovra
          </motion.span>
          <motion.h1
            {...fadeUp}
            className="xv-serif mt-6 text-[52px] sm:text-[72px] lg:text-[92px] leading-[0.94] tracking-[-0.03em]"
          >
            Smarter outbound,
            <br />
            <span className="italic text-[#0b0b0f]/60">
              built on data and AI.
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="mt-7 text-[17px] text-[#0b0b0f]/65 max-w-xl leading-[1.55]"
          >
            Xovra is an AI-powered cold calling platform for finding local
            business leads, deciding which to call and why, and handling calls,
            texts, and tracking in one place.
          </motion.p>
          <motion.div
            {...fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>
        </div>

        {/* Right: animated collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <Collage />
        </motion.div>
      </div>
    </section>
  );
}

function Collage() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      {/* Big image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="absolute inset-y-0 left-0 w-[70%] rounded-3xl overflow-hidden border border-black/5 shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
          alt="Operator on a call"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-5 left-5 right-5 text-white"
        >
          <div className="text-[10.5px] uppercase tracking-[0.18em] text-white/70 font-semibold">
            Day one
          </div>
          <div className="text-[18px] font-semibold leading-tight mt-1">
            Make outbound calling smarter with AI and data.
          </div>
        </motion.div>
      </motion.div>

      {/* Small image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="absolute top-6 right-0 w-[48%] aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating mini-card: live stat */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        animate={{ y: [0, -6, 0] }}
        className="absolute bottom-10 right-6 rounded-2xl bg-white border border-black/5 shadow-xl p-3.5 w-48"
        style={{ animationDuration: "4s" }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
          >
            <Phone size={14} className="text-white" />
          </motion.div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-[#0b0b0f]/50 font-semibold">
              On call now
            </div>
            <div className="xv-serif text-[22px] italic leading-none mt-0.5">
              247
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating mini-card: enriched */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-4 left-4 rounded-2xl bg-white/90 backdrop-blur border border-black/5 shadow-xl px-3 py-2 text-[10.5px] flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
          <Sparkles size={11} className="text-white" />
        </div>
        <div>
          <div className="text-[#0b0b0f]/60">Leads enriched today</div>
          <div className="xv-serif text-[17px] italic text-[#0b0b0f]">
            1,284
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================== KEY FACTS ============================== */
function KeyFacts() {
  const facts = [
    { k: "Stage", v: "Early access", icon: Sparkles, color: "from-indigo-400 to-fuchsia-500" },
    { k: "Team", v: "Small, building with first users", icon: Users, color: "from-rose-400 to-pink-500" },
    { k: "Pricing", v: "Usage-based · per minute / per SMS", icon: Scale, color: "from-amber-400 to-orange-500" },
    { k: "Telephony", v: "Voice, SMS, and AI on Telnyx", icon: Phone, color: "from-emerald-400 to-teal-500" },
  ];
  return (
    <section className="py-14 px-5 bg-[#f6f4ef] border-y border-black/5">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {facts.map((f, i) => (
          <motion.div
            key={f.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-white border border-black/5 p-5 overflow-hidden group transition hover:shadow-md"
          >
            <div
              className={`absolute -top-14 -right-14 w-36 h-36 rounded-full bg-gradient-to-br ${f.color} opacity-10 blur-2xl group-hover:opacity-25 transition`}
            />
            <div
              className={`relative w-9 h-9 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center shadow`}
            >
              <f.icon size={15} className="text-white" />
            </div>
            <div className="relative mt-4 text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              {f.k}
            </div>
            <div className="relative mt-1 text-[15px] font-semibold text-[#0b0b0f]">
              {f.v}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================================ MISSION ================================ */
function Mission() {
  return (
    <section className="py-32 px-5 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-[#eef0ff] via-transparent to-[#fef3ec] blur-3xl -z-10 opacity-60" />
      <motion.div
        {...fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Mission
        </span>
        <h2 className="xv-serif mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-[-0.03em]">
          Cold calling still works —
          <br />
          <span className="italic text-[#0b0b0f]/55">
            the work around it shouldn&apos;t eat the day.
          </span>
        </h2>
        <p className="mt-7 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]">
          Most time goes to the work around each call. Xovra aims to let reps
          spend that time on the right prospects with the right opener.
        </p>
      </motion.div>
    </section>
  );
}

/* ================================ PROBLEM ================================ */
function Problem() {
  const problems = [
    {
      t: "Finding leads takes hours",
      b: "Building lists means manual map searches and copying data into spreadsheets.",
      icon: Search,
      viz: <ProblemViz1 />,
    },
    {
      t: "Nobody knows who to call first",
      b: "Raw lists don't show which businesses run ads, lack websites, or have sites worth pitching.",
      icon: Target,
      viz: <ProblemViz2 />,
    },
    {
      t: "Calling is slow and repetitive",
      b: "Dialing, repeating openers, logging results, and sending follow-ups eat the day.",
      icon: Clock,
      viz: <ProblemViz3 />,
    },
    {
      t: "Compliance is easy to forget",
      b: "Calling windows, opt-outs, and attempt counts are easy to miss under pressure.",
      icon: ShieldCheck,
      viz: <ProblemViz4 />,
    },
  ];
  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-rose-600 font-semibold">
          The problem
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Four reasons
          <br />
          <span className="italic text-[#0b0b0f]/55">a dialer isn&apos;t enough.</span>
        </h2>
      </motion.div>
      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white border border-black/5 p-6 transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                <p.icon size={17} className="text-rose-600" />
              </div>
              <div>
                <h3 className="xv-serif text-[26px] leading-tight tracking-[-0.02em]">
                  {p.t}
                </h3>
                <p className="mt-2 text-[14px] text-[#0b0b0f]/60 leading-relaxed">
                  {p.b}
                </p>
              </div>
            </div>
            <div className="mt-5 relative h-[140px] rounded-xl bg-[#faf9f6] border border-black/5 overflow-hidden">
              {p.viz}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProblemViz1() {
  // typing/copying rows
  return (
    <div className="p-3 h-full flex flex-col gap-1.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.3 }}
          className="h-3 rounded bg-black/10"
        />
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        className="block w-0.5 h-3 bg-rose-500"
      />
    </div>
  );
}
function ProblemViz2() {
  return (
    <div className="h-full flex items-center justify-around px-3">
      {[0.3, 0.6, 0.35, 0.9, 0.2].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.12 }}
          className={`w-6 rounded-t-md ${i === 3 ? "bg-[#4f5bf0]" : "bg-black/15"}`}
        />
      ))}
    </div>
  );
}
function ProblemViz3() {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="relative w-20 h-20 rounded-full border-2 border-dashed border-rose-300"
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 origin-left h-0.5 w-10 bg-rose-500" />
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rose-500" />
      </motion.div>
    </div>
  );
}
function ProblemViz4() {
  return (
    <div className="h-full flex items-center justify-center gap-4 px-4">
      {[
        { label: "8 AM" },
        { label: "12 PM" },
        { label: "9 PM" },
      ].map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="text-center"
        >
          <div className="w-10 h-10 rounded-full border-2 border-dashed border-rose-300 flex items-center justify-center text-rose-500 text-[10px] font-semibold">
            !
          </div>
          <div className="mt-1 text-[10px] text-[#0b0b0f]/55">{p.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ============================== HOW IT WORKS ============================== */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Scrape", b: "Pick a niche and city to pull matching businesses from Google Maps.", icon: MapPin, color: "from-cyan-400 to-blue-500" },
    { n: "02", t: "Enrich", b: "Add a website audit, Google Ads detection, and social presence checks.", icon: Search, color: "from-indigo-400 to-fuchsia-500" },
    { n: "03", t: "Score", b: "Tag leads with a pitch angle — RUNS_ADS, NO_SITE, WEAK_SITE, STRONG_SITE.", icon: Target, color: "from-amber-400 to-orange-500" },
    { n: "04", t: "Call", b: "Dial from the browser, or have the AI assistant run qualifier calls, then send texts.", icon: Phone, color: "from-rose-400 to-pink-500" },
    { n: "05", t: "Track", b: "Outcomes sync to Google Sheets with HubSpot-compatible CSV export.", icon: FileSpreadsheet, color: "from-emerald-400 to-teal-500" },
  ];
  return (
    <section className="py-32 px-5 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 w-[900px] h-[400px] rounded-full bg-gradient-to-br from-[#eef0ff] to-[#ffeef7] blur-3xl -z-10 opacity-60" />
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          How it works
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Five steps,
          <br />
          <span className="italic text-[#0b0b0f]/55">one path.</span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-5xl mx-auto relative">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#4f5bf0]/60 via-[#a855f7]/40 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex items-start gap-5 pb-6 last:pb-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg z-10`}
            >
              <s.icon size={18} className="text-white" />
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-30`}
              />
            </motion.div>
            <div className="flex-1 rounded-2xl bg-white border border-black/5 shadow-sm p-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#0b0b0f]/40 font-semibold">
                {s.n}
              </div>
              <div className="mt-1 text-[22px] font-semibold xv-serif tracking-[-0.015em]">
                {s.t}
              </div>
              <div className="mt-2 text-[14.5px] text-[#0b0b0f]/60 leading-relaxed">
                {s.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================= CURRENT PRODUCT ============================= */
function CurrentProduct() {
  const items = [
    { icon: Phone, t: "Browser softphone", b: "WebRTC calling over Telnyx, no desk phone needed.", color: "from-cyan-400 to-blue-500" },
    { icon: Bot, t: "AI qualifier calls", b: "Places calls and discloses it is AI in the first sentence.", color: "from-emerald-400 to-teal-500" },
    { icon: Sparkles, t: "Live AI rebuttals", b: "Claude or Gemini suggests responses during calls.", color: "from-fuchsia-400 to-rose-500" },
    { icon: MessageSquare, t: "Two-way SMS", b: "Send and read texts, STOP and UNSUBSCRIBE handled automatically.", color: "from-amber-400 to-orange-500" },
    { icon: Users, t: "Teams & organizations", b: "Owner, admin, and agent roles with invites and number pools.", color: "from-indigo-400 to-fuchsia-500" },
    { icon: ShieldCheck, t: "Outbound guardrails", b: "Server-side checks for suppression, windows, and attempt caps.", color: "from-rose-400 to-pink-500" },
  ];
  return (
    <section className="py-32 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Current product
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          What ships today.
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl bg-white border border-black/5 p-6 overflow-hidden transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div
              className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${it.color} opacity-10 blur-2xl group-hover:opacity-25 transition`}
            />
            <motion.div
              whileHover={{ rotate: 8 }}
              className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center shadow-lg`}
            >
              <it.icon size={17} className="text-white" />
            </motion.div>
            <div className="relative mt-5 text-[18px] font-semibold">{it.t}</div>
            <div className="relative mt-2 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
              {it.b}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================== WHO IT'S FOR ============================== */
function WhoItsFor() {
  const groups = [
    {
      t: "Agencies",
      b: "Web, marketing, and ads agencies prospecting local businesses.",
      icon: Building2,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      t: "Sales teams",
      b: "Small outbound teams wanting shared workspaces and roles.",
      icon: Users,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      t: "Solo operators",
      b: "Freelancers and founders working through their own lists.",
      icon: User,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section className="py-32 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Who it&apos;s for
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Built for the people
          <br />
          <span className="italic text-[#0b0b0f]/55">
            who live on the dialer.
          </span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={g.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center">
                <g.icon size={16} />
              </div>
              <div className="mt-3 xv-serif text-[28px] leading-tight tracking-[-0.015em]">
                {g.t}
              </div>
              <div className="mt-2 text-[13px] text-white/80 leading-relaxed">
                {g.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================================ VALUES ================================ */
function Values() {
  const values = [
    { t: "Say what it is", b: "AI calls disclose themselves, and the product is described only as it exists today.", icon: CheckCircle2 },
    { t: "Practical over flashy", b: "Built for working through a list quickly.", icon: Target },
    { t: "Fair, usage-based pricing", b: "Pay per minute and message, with no contracts or platform fee.", icon: Scale },
    { t: "Respect the person on the line", b: "Honor opt-outs, calling hours, and contact limits.", icon: Hand },
  ];
  return (
    <section className="py-32 px-5 bg-[#0b1324] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
      <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-cyan-300 font-semibold">
          How we think about building this
        </span>
        <h2 className="xv-serif mt-5 text-5xl sm:text-6xl leading-[0.98] tracking-[-0.03em]">
          Four values,
          <br />
          <span className="italic text-white/55">kept on the wall.</span>
        </h2>
      </motion.div>
      <div className="relative mt-16 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10 p-6"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 font-semibold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <v.icon size={18} className="mt-4 text-cyan-300" />
            <div className="mt-3 xv-serif text-[22px] leading-tight">{v.t}</div>
            <div className="mt-2 text-[13.5px] text-white/65 leading-relaxed">
              {v.b}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ LIMITATIONS ============================ */
function Limitations() {
  const items = [
    "No native CRM sync — HubSpot-compatible CSV export only",
    "No call recording or transcripts",
    "No power or predictive dialer",
    "No subscription plans or billing dashboard",
  ];
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-rose-600 font-semibold">
          What Xovra does not do yet
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Honest about
          <span className="italic text-[#0b0b0f]/55"> what&apos;s not there.</span>
        </h2>
        <ul className="mt-8 space-y-2.5">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl bg-[#f6f4ef] border border-black/5 px-5 py-3.5 text-[14px] text-[#0b0b0f]/75"
            >
              <XCircle size={17} className="text-rose-400 shrink-0 mt-0.5" />
              {t}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* ============================= CLOSING ============================= */
function Closing() {
  return (
    <section className="py-32 px-5 bg-[#f6f4ef] text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        See it on
        <br />
        <span className="italic text-[#0b0b0f]/55">your own leads.</span>
      </motion.h2>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="/v2/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Get Early Access <ArrowRight size={14} />
        </a>
        <a
          href="/v2/demo"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
}

/* ============================= PAGE ============================= */
export default function AboutPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <KeyFacts />
      <Mission />
      <Problem />
      <HowItWorks />
      <CurrentProduct />
      <WhoItsFor />
      <Values />
      <Limitations />
      <Closing />
      <Footer />
    </main>
  );
}
