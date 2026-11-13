"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Phone,
  PhoneOff,
  MapPin,
  Star,
  Globe,
  Smartphone,
  Zap,
  Mic,
  X,
  ArrowRight,
  Bot,
} from "lucide-react";

const personas = [
  {
    key: "sdr",
    label: "Agency SDR",
    name: "Riverside Plumbing Co.",
    category: "Plumber · Austin, TX",
    rating: 4.6,
    tag: "WEAK_SITE",
    tagColor: "from-amber-400 to-orange-500",
    orbColor: "from-amber-400 via-orange-500 to-rose-500",
    checks: [
      { label: "No HTTPS", bad: true },
      { label: "Not mobile-friendly", bad: true },
      { label: "No Google Ads", bad: true },
      { label: "230 Facebook followers", bad: false },
    ],
    rebuttal:
      "Hey — noticed your site isn't mobile-friendly. 68% of plumbing searches happen on phones. Worth 5 minutes?",
  },
  {
    key: "realestate",
    label: "Real Estate",
    name: "North Shore Realty",
    category: "Real estate · San Diego, CA",
    rating: 4.8,
    tag: "RUNS_ADS",
    tagColor: "from-emerald-400 to-teal-500",
    orbColor: "from-emerald-400 via-teal-500 to-cyan-500",
    checks: [
      { label: "Running Google Ads", bad: false },
      { label: "HTTPS secure", bad: false },
      { label: "Mobile-friendly", bad: false },
      { label: "12k Instagram followers", bad: false },
    ],
    rebuttal:
      "You're already spending on ads — I can show three landing pages converting 3x better for brokerages your size.",
  },
  {
    key: "insurance",
    label: "Insurance Qualifier",
    name: "Bluefield Insurance",
    category: "Insurance · Denver, CO",
    rating: 4.9,
    tag: "STRONG_SITE",
    tagColor: "from-cyan-400 to-blue-500",
    orbColor: "from-cyan-400 via-blue-500 to-indigo-500",
    checks: [
      { label: "HTTPS secure", bad: false },
      { label: "Mobile-friendly", bad: false },
      { label: "Active on TikTok", bad: false },
      { label: "3.2k Facebook followers", bad: false },
    ],
    rebuttal:
      "Your site's solid — the gap is reviews. You've got 42, your top competitor has 318. Worth a quick chat?",
  },
  {
    key: "appointment",
    label: "Appointment Setter",
    name: "Mesa Dental Group",
    category: "Dentist · Phoenix, AZ",
    rating: 4.3,
    tag: "NO_SITE",
    tagColor: "from-rose-400 to-red-500",
    orbColor: "from-rose-400 via-pink-500 to-fuchsia-500",
    checks: [
      { label: "No website found", bad: true },
      { label: "Only GMB listing", bad: true },
      { label: "No ads detected", bad: true },
      { label: "480 Instagram followers", bad: false },
    ],
    rebuttal:
      "You're ranking on Maps but have no site catching that traffic. We can get you live in a week — want examples?",
  },
  {
    key: "restaurant",
    label: "Restaurant Orders",
    name: "Pier 9 Seafood",
    category: "Restaurant · Seattle, WA",
    rating: 4.7,
    tag: "WEAK_SITE",
    tagColor: "from-amber-400 to-orange-500",
    orbColor: "from-amber-400 via-orange-500 to-pink-500",
    checks: [
      { label: "No online ordering", bad: true },
      { label: "Mobile-friendly", bad: false },
      { label: "No Google Ads", bad: true },
      { label: "6.8k Instagram followers", bad: false },
    ],
    rebuttal:
      "Your socials are strong but there's no online ordering. Nearby spots take 30% of orders digital — worth a look?",
  },
  {
    key: "collections",
    label: "Collections",
    name: "Harborfront Accounts",
    category: "B2B services · Miami, FL",
    rating: 4.1,
    tag: "RUNS_ADS",
    tagColor: "from-emerald-400 to-teal-500",
    orbColor: "from-emerald-400 via-cyan-500 to-blue-500",
    checks: [
      { label: "Running LinkedIn Ads", bad: false },
      { label: "HTTPS secure", bad: false },
      { label: "Weak mobile UX", bad: true },
      { label: "1.9k LinkedIn followers", bad: false },
    ],
    rebuttal:
      "You're paying for LinkedIn traffic but losing it on mobile. I can show you a fix that takes 48 hours.",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [modal, setModal] = useState(false);
  const reduced = useReducedMotion();
  const p = personas[idx];

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % personas.length), 5500);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 pb-20 px-4 sm:px-6">
      <BackgroundOrbs />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center relative">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[11.5px] font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            AI-POWERED COLD CALLING PLATFORM
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] leading-[0.94]"
          >
            Find Leads.
            <br />
            Call Them.
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
                Close Deals.
              </span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                style={{ transformOrigin: "left" }}
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400/50 via-indigo-400/50 to-fuchsia-400/50"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 text-[17px] text-white/65 max-w-xl leading-[1.55]"
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
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium text-sm shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.3)] transition"
            >
              Get Early Access
              <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
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
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50"
          >
            <span className="uppercase tracking-[0.14em]">Built for</span>
            <span className="text-white/85">Sales teams</span>
            <span className="text-white/15">·</span>
            <span className="text-white/85">Agencies</span>
            <span className="text-white/15">·</span>
            <span className="text-white/85">Solo operators</span>
          </motion.div>
        </div>

        {/* RIGHT: Persona rotator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-fuchsia-500/15 blur-3xl -z-10" />

          {/* Orb + dialer card */}
          <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            {/* Top status */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WebRTC · Telnyx
              </div>
            </div>

            {/* Orb header */}
            <div className="relative px-6 pt-8 pb-5 flex flex-col items-center">
              <PersonaOrb colors={p.orbColor} key={p.key} />
              <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/40">
                {p.label}
              </div>
            </div>

            {/* Lead card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="px-5 pb-5 space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-white/40 flex items-center gap-1">
                      <MapPin size={11} /> Lead enriched
                    </div>
                    <div className="text-[15px] font-semibold mt-1">{p.name}</div>
                    <div className="text-xs text-white/55 mt-0.5">{p.category}</div>
                    <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-300">
                      <Star size={11} fill="currentColor" /> {p.rating}
                    </div>
                  </div>
                  <span
                    className={`text-[9.5px] font-bold tracking-wide px-2.5 py-1 rounded-full text-black bg-gradient-to-r ${p.tagColor} shadow-lg`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {p.checks.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-2 text-[10.5px] px-2.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5"
                    >
                      {c.bad ? (
                        <Smartphone size={11} className="text-rose-300 shrink-0" />
                      ) : (
                        <Globe size={11} className="text-emerald-300 shrink-0" />
                      )}
                      <span className="text-white/75">{c.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-indigo-400/20 bg-indigo-500/[0.08] p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-200">
                      <Zap size={10} /> Live rebuttal · via Claude
                    </div>
                    <span className="text-[10px] text-white/40">drafting…</span>
                  </div>
                  <TypingText text={p.rebuttal} />
                </div>

                <button
                  onClick={() => setModal(true)}
                  className="group relative w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black text-[13px] font-medium hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] transition"
                >
                  <Phone size={14} />
                  Get a call from {p.label}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Persona chips */}
          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {personas.map((pp, i) => (
              <button
                key={pp.key}
                onClick={() => setIdx(i)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition ${
                  i === idx
                    ? "bg-white text-black border-white"
                    : "text-white/55 border-white/10 hover:text-white hover:border-white/25"
                }`}
              >
                {pp.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <GetCallModal open={modal} onClose={() => setModal(false)} persona={p.label} />
    </section>
  );
}

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-[-12%] left-[8%] w-[560px] h-[560px] rounded-full bg-indigo-600/30 blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[18%] right-[-6%] w-[460px] h-[460px] rounded-full bg-fuchsia-600/25 blur-[130px] animate-pulse-slower" />
      <div className="absolute bottom-[-14%] left-[28%] w-[520px] h-[520px] rounded-full bg-cyan-500/20 blur-[130px] animate-pulse-slow" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1), rgba(0,0,0,0.1) 70%, transparent)",
        }}
      />
    </div>
  );
}

function PersonaOrb({ colors }: { colors: string }) {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors} blur-2xl`}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-white/10"
        style={{ borderTopColor: "rgba(255,255,255,0.35)" }}
      />
      <div
        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${colors} shadow-[0_0_40px_rgba(99,102,241,0.6)] flex items-center justify-center`}
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center"
        >
          <Mic size={14} />
        </motion.div>
      </div>
      {/* Mini equalizer */}
      <div className="absolute -bottom-3 flex items-end gap-0.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [3, 12, 5, 16, 3] }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            className="w-0.5 rounded-full bg-white/60"
          />
        ))}
      </div>
    </div>
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
    }, 22);
    return () => clearInterval(t);
  }, [text]);
  return (
    <p className="text-[12px] leading-relaxed text-white/85 min-h-[48px]">
      {out}
      <span className="inline-block w-1.5 h-3 ml-0.5 bg-indigo-300 animate-pulse align-middle" />
    </p>
  );
}

function GetCallModal({
  open,
  onClose,
  persona,
}: {
  open: boolean;
  onClose: () => void;
  persona: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ y: 20, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-[#0e0e18] to-[#07070c] p-7"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-2 text-[11px] text-cyan-300 uppercase tracking-[0.15em]">
              <Bot size={13} /> AI will call you
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Get a call from the <span className="text-white/60">{persona}</span>
            </h3>
            <p className="mt-2 text-sm text-white/55">
              Hear how Xovra&apos;s AI qualifier sounds live. We&apos;ll ring you in
              under 30 seconds.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex gap-2">
                <div className="w-20 shrink-0 flex items-center justify-center text-sm text-white/70 rounded-lg bg-white/[0.04] border border-white/10">
                  +1
                </div>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:border-white/30 outline-none text-sm placeholder:text-white/30"
                />
              </div>
              <label className="flex items-start gap-2 text-[11px] text-white/55">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  I consent to receive an AI-placed call from Xovra. The AI will
                  disclose it is an AI in the first sentence.
                </span>
              </label>
              <button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition">
                Get a call
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Re-exported for dialer fallback usage
export { PhoneOff };
