"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, PhoneOff, Zap, MapPin, Star, Globe, Smartphone } from "lucide-react";

const personas = [
  {
    name: "Riverside Plumbing Co.",
    category: "Plumber · Austin, TX",
    rating: 4.6,
    tag: "WEAK_SITE",
    tagColor: "from-amber-400 to-orange-500",
    checks: [
      { label: "No HTTPS", bad: true },
      { label: "Not mobile-friendly", bad: true },
      { label: "No Google Ads", bad: true },
      { label: "230 Facebook followers", bad: false },
    ],
    rebuttal:
      "Totally hear you on being busy — I noticed your site isn't mobile-friendly, and 68% of plumbing searches happen on phones. Worth 5 minutes?",
  },
  {
    name: "North Shore Realty",
    category: "Real estate · San Diego, CA",
    rating: 4.8,
    tag: "RUNS_ADS",
    tagColor: "from-emerald-400 to-teal-500",
    checks: [
      { label: "Running Google Ads", bad: false },
      { label: "HTTPS secure", bad: false },
      { label: "Mobile-friendly", bad: false },
      { label: "12k Instagram followers", bad: false },
    ],
    rebuttal:
      "You're already spending on ads — I can show you three landing pages converting 3x better for brokerages your size. 5 minutes?",
  },
  {
    name: "Mesa Dental Group",
    category: "Dentist · Phoenix, AZ",
    rating: 4.3,
    tag: "NO_SITE",
    tagColor: "from-rose-400 to-red-500",
    checks: [
      { label: "No website found", bad: true },
      { label: "Only GMB listing", bad: true },
      { label: "No ads detected", bad: true },
      { label: "480 Instagram followers", bad: false },
    ],
    rebuttal:
      "You're ranking on Maps but have no site catching that traffic. We can get you live in a week — want to see examples?",
  },
  {
    name: "Bluefield Insurance",
    category: "Insurance · Denver, CO",
    rating: 4.9,
    tag: "STRONG_SITE",
    tagColor: "from-cyan-400 to-blue-500",
    checks: [
      { label: "HTTPS secure", bad: false },
      { label: "Mobile-friendly", bad: false },
      { label: "Active on TikTok", bad: false },
      { label: "3.2k Facebook followers", bad: false },
    ],
    rebuttal:
      "Your site's solid — the gap I see is reviews. You've got 42, your top competitor has 318. Worth a quick chat?",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % personas.length), 5000);
    return () => clearInterval(t);
  }, [reduced]);

  const p = personas[idx];

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 px-4 sm:px-6">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[520px] h-[520px] rounded-full bg-indigo-600/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-5%] w-[420px] h-[420px] rounded-full bg-fuchsia-600/25 blur-[120px] animate-pulse-slower" />
        <div className="absolute bottom-[-10%] left-[30%] w-[460px] h-[460px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,1), rgba(0,0,0,0.1) 70%, transparent)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            AI-Powered Cold Calling Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95]"
          >
            Find Leads.
            <br />
            Call Them.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              Close Deals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-white/65 max-w-xl leading-relaxed"
          >
            Xovra scrapes leads from Google Maps, enriches and scores them, and lets
            you call from a browser softphone or deploy an AI qualifier. Outcomes sync
            to a Google Sheet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#early-access"
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium text-sm shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition"
            >
              Get Early Access
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm transition"
            >
              Book a Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/50"
          >
            <span>Built for</span>
            <span className="text-white/80">Sales teams</span>
            <span className="text-white/20">·</span>
            <span className="text-white/80">Agencies</span>
            <span className="text-white/20">·</span>
            <span className="text-white/80">Solo operators</span>
          </motion.div>
        </div>

        {/* Dialer mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
          style={{ perspective: "1200px" }}
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 blur-3xl -z-10" />

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WebRTC Connected · Telnyx
              </div>
            </div>

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-5 space-y-5"
            >
              {/* Lead header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] text-white/40 flex items-center gap-1">
                    <MapPin size={11} /> Lead enriched
                  </div>
                  <div className="text-base font-semibold mt-1">{p.name}</div>
                  <div className="text-xs text-white/55 mt-0.5">{p.category}</div>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-300">
                    <Star size={11} fill="currentColor" /> {p.rating}
                  </div>
                </div>
                <span
                  className={`text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full text-black bg-gradient-to-r ${p.tagColor} shadow-lg`}
                >
                  {p.tag}
                </span>
              </div>

              {/* Checks */}
              <div className="grid grid-cols-2 gap-2">
                {p.checks.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2 text-[11px] px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/5"
                  >
                    {c.bad ? (
                      <Smartphone size={12} className="text-rose-300 shrink-0" />
                    ) : (
                      <Globe size={12} className="text-emerald-300 shrink-0" />
                    )}
                    <span className={c.bad ? "text-white/70" : "text-white/80"}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rebuttal */}
              <div className="rounded-xl border border-indigo-400/20 bg-indigo-500/[0.08] p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-200">
                    <Zap size={11} /> Live rebuttal · via Claude
                  </div>
                  <span className="text-[10px] text-white/40">drafting…</span>
                </div>
                <TypingText text={p.rebuttal} key={p.rebuttal} />
              </div>

              {/* Outcome keys */}
              <div className="grid grid-cols-6 gap-1.5">
                {["Interested", "Mockup", "VM", "No ans", "Not int.", "Bad #"].map(
                  (o, i) => (
                    <button
                      key={o}
                      className="group relative text-[10px] px-2 py-2 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition text-white/75"
                    >
                      <span className="block text-[9px] text-white/35 group-hover:text-white/60">
                        {i + 1}
                      </span>
                      {o}
                    </button>
                  ),
                )}
              </div>

              {/* Call controls */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                    C
                  </kbd>
                  call ·
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                    H
                  </kbd>
                  hang up
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-rose-500/90 hover:bg-rose-500 flex items-center justify-center transition">
                    <PhoneOff size={14} />
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-emerald-500/90 hover:bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.6)] transition"
                  >
                    <Phone size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Persona selector dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {personas.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Show persona ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypingText({ text }: { text: string }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const t = setInterval(() => {
      i += 2;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [text]);
  return (
    <p className="text-[12px] leading-relaxed text-white/85">
      {out}
      <span className="inline-block w-1.5 h-3 ml-0.5 bg-indigo-300 animate-pulse align-middle" />
    </p>
  );
}
