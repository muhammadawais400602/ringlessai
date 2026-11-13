"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Star, X, Bot, ArrowRight } from "lucide-react";

type Persona = {
  key: string;
  label: string;
  role: string;
  task: string;
  img: string;
  bubbleFromLead: string;
  bubbleFromAI: string;
  avatarImg: string;
};

const personas: Persona[] = [
  {
    key: "sdr",
    label: "Alex",
    role: "Agency SDR",
    task: "Alex, book a demo with the plumbing lead on line 2.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "Honestly, I'm busy this week.",
    bubbleFromAI:
      "Totally — 68% of plumbing searches happen on phones. Worth 5 minutes next week?",
    avatarImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    key: "realestate",
    label: "Priya",
    role: "Real Estate",
    task: "Priya, follow up with the North Shore lead running Google Ads.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "We're already spending a lot on ads.",
    bubbleFromAI:
      "That's exactly why I called — three pages converting 3× better for brokerages your size.",
    avatarImg:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    key: "insurance",
    label: "Sam",
    role: "Insurance Qualifier",
    task: "Sam, qualify the Bluefield lead and send the review angle.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "What do you even do differently?",
    bubbleFromAI:
      "You've got 42 reviews, your top competitor has 318. We fix that in 30 days.",
    avatarImg:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    key: "appointment",
    label: "Jordan",
    role: "Appointment Setter",
    task: "Jordan, book the Mesa Dental Group onto Thursday's calendar.",
    img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "We don't even have a website yet.",
    bubbleFromAI:
      "You're ranking on Maps but losing that traffic. We can get you live in a week.",
    avatarImg:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    key: "restaurant",
    label: "Mika",
    role: "Restaurant Orders",
    task: "Mika, pitch online ordering to Pier 9 Seafood.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "People just walk in, we don't need online orders.",
    bubbleFromAI:
      "Nearby spots take 30% of orders digital — what if you captured that too?",
    avatarImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    key: "collections",
    label: "Kai",
    role: "Collections",
    task: "Kai, follow up on the overdue invoice from Harborfront.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80",
    bubbleFromLead: "I never got that email.",
    bubbleFromAI:
      "Resent just now — should be in your inbox in under a minute. Mind checking?",
    avatarImg:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
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
    <section className="relative overflow-hidden pt-10 sm:pt-14 pb-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          {/* G2 badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[13px]"
          >
            <span className="w-5 h-5 rounded-full bg-[#ff492c] text-white font-black text-[11px] flex items-center justify-center">
              G
            </span>
            <span className="font-medium text-[#0b0b0f]">
              2,000+ five-star reviews
            </span>
            <span className="flex items-center gap-0.5 text-[#ffb300]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="xv-serif mt-6 text-[52px] sm:text-[68px] lg:text-[82px] leading-[0.95] tracking-[-0.03em] text-[#0b0b0f]"
          >
            AI voice agents
            <br />
            that find leads,
            <br />
            call them, and
            <br />
            <span className="italic text-[#0b0b0f]">close deals.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-[17px] text-[#0b0b0f]/70 max-w-xl leading-[1.55]"
          >
            Xovra scrapes leads from Google Maps, enriches and scores them, and
            lets you call from a browser softphone or deploy an AI qualifier.
            Outcomes sync to a Google Sheet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#early-access"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white font-medium text-[14px] hover:bg-black transition"
            >
              Try for free
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40 text-[#0b0b0f] font-medium text-[14px] transition"
            >
              Contact sales
            </a>
          </motion.div>
        </div>

        {/* RIGHT: photo card with chat overlays */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/5 aspect-[5/6] bg-[#e8e4de]">
            {/* Persona photo */}
            <AnimatePresence mode="wait">
              <motion.img
                key={p.key}
                src={p.img}
                alt={p.role}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Soft bottom gradient for readability */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Avatar strip top */}
            <div className="absolute top-5 left-5 flex -space-x-2">
              {personas.map((pp, i) => (
                <button
                  key={pp.key}
                  onClick={() => setIdx(i)}
                  className={`w-10 h-10 rounded-full border-2 overflow-hidden shadow transition ${
                    i === idx
                      ? "border-white scale-110 z-10"
                      : "border-white/60 hover:border-white"
                  }`}
                  aria-label={`Show ${pp.label}`}
                >
                  <img
                    src={pp.avatarImg}
                    alt={pp.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Chat bubbles */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.key + "-lead"}
                initial={{ opacity: 0, x: 20, y: -4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="absolute top-[26%] right-5 max-w-[72%]"
              >
                <div className="rounded-2xl rounded-tr-sm bg-black/70 backdrop-blur text-white px-4 py-2.5 text-[13.5px] leading-snug shadow-lg">
                  {p.bubbleFromLead}
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={p.key + "-ai"}
                initial={{ opacity: 0, x: -20, y: 4 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute top-[42%] left-5 max-w-[72%]"
              >
                <div className="flex items-start gap-2">
                  <OrbMini />
                  <div className="rounded-2xl rounded-tl-sm bg-white/95 backdrop-blur px-4 py-2.5 text-[13.5px] leading-snug text-[#0b0b0f] shadow-lg">
                    {p.bubbleFromAI}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom caption + CTA */}
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <div className="flex items-center gap-3">
                <OrbMini large />
                <div>
                  <div className="text-white text-[14px] font-semibold">
                    {p.role}
                  </div>
                  <div className="text-white/80 text-[12.5px] max-w-[260px] leading-snug">
                    {p.task}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setModal(true)}
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-[#0b0b0f] font-medium text-[13px] shadow-lg hover:shadow-xl transition"
              >
                <Phone size={13} />
                Get a call from {p.label}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <GetCallModal
        open={modal}
        onClose={() => setModal(false)}
        persona={p.label}
        role={p.role}
      />
    </section>
  );
}

function OrbMini({ large }: { large?: boolean }) {
  const size = large ? "w-9 h-9" : "w-5 h-5";
  return (
    <div
      className={`${size} relative shrink-0 rounded-full bg-gradient-to-br from-cyan-300 via-indigo-400 to-fuchsia-400 shadow-[0_0_14px_rgba(99,102,241,0.55)]`}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-indigo-400 to-fuchsia-400 blur-md"
      />
      <div className="absolute inset-[18%] rounded-full bg-white/40 backdrop-blur" />
    </div>
  );
}

function GetCallModal({
  open,
  onClose,
  persona,
  role,
}: {
  open: boolean;
  onClose: () => void;
  persona: string;
  role: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ y: 20, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black/40 hover:text-black"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-2 text-[11px] text-[#4f5bf0] uppercase tracking-[0.15em] font-semibold">
              <Bot size={13} /> AI will call you
            </div>
            <h3 className="xv-serif mt-3 text-[34px] leading-[1.05] tracking-[-0.02em] text-[#0b0b0f]">
              Get a call from{" "}
              <span className="italic text-[#0b0b0f]/70">{persona}</span>
            </h3>
            <p className="mt-2 text-[14px] text-[#0b0b0f]/60">
              Hear how Xovra&apos;s {role} sounds live. We&apos;ll ring you in
              under 30 seconds.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex gap-2">
                <div className="w-20 shrink-0 flex items-center justify-center text-sm text-[#0b0b0f]/70 rounded-lg bg-[#f6f4ef] border border-[#0b0b0f]/10">
                  +1
                </div>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#f6f4ef] border border-[#0b0b0f]/10 focus:border-[#0b0b0f]/40 outline-none text-sm placeholder:text-[#0b0b0f]/35 text-[#0b0b0f]"
                />
              </div>
              <label className="flex items-start gap-2 text-[11.5px] text-[#0b0b0f]/60">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  I consent to receive an AI-placed call from Xovra. The AI will
                  disclose it is an AI in the first sentence.
                </span>
              </label>
              <button className="w-full py-3 rounded-lg bg-[#0b0b0f] text-white font-medium text-sm hover:bg-black transition">
                Get a call
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
