"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Hash,
  Bot,
  Lock,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Server,
  FileCheck,
  MessageSquare,
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
    <section className="relative px-5 sm:px-8 pt-24 pb-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>

      <motion.span
        {...fadeUp}
        className="block text-center text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
      >
        Compliance
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-5 text-center text-[46px] sm:text-[68px] lg:text-[92px] leading-[0.94] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        Guardrails built into
        <br />
        <span className="italic text-[#0b0b0f]/60">every outbound attempt.</span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-8 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto text-center leading-[1.55]"
      >
        Xovra checks suppression, calling hours, and attempt limits on the
        server before any call or text goes out — and draws a clear line
        between what the product does and what stays your responsibility.
      </motion.p>
      <motion.div {...fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
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

      <motion.div
        {...fadeUp}
        className="mt-10 max-w-3xl mx-auto rounded-2xl bg-amber-50 border border-amber-200 p-5 flex items-start gap-4"
      >
        <AlertTriangle size={20} className="text-amber-700 shrink-0 mt-0.5" />
        <div>
          <div className="text-[11.5px] uppercase tracking-[0.15em] text-amber-800 font-semibold">
            Not legal advice
          </div>
          <p className="mt-1.5 text-[13.5px] text-amber-900/85 leading-relaxed">
            This page describes product features and general background. Laws
            vary by jurisdiction and change over time — consult an attorney for
            advice on your specific situation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================ ENFORCED CONTROLS ============================ */
function Controls() {
  const items = [
    {
      icon: Lock,
      t: "Suppression lists",
      b: "Opt-outs go to an append-only JSONL log and never get contacted again. STOP and UNSUBSCRIBE are detected automatically. Checked before every call and text.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Clock,
      t: "Calling window",
      b: "Default 8 AM – 9 PM, configurable timezone, enforced on the server.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Hash,
      t: "Attempt caps",
      b: "Default 6 attempts per contact. Changeable per campaign.",
      color: "from-indigo-400 to-fuchsia-500",
    },
    {
      icon: Bot,
      t: "AI disclosure",
      b: "AI qualifier calls open by disclosing the caller is an AI in the first sentence. Applies to every call placed by the Telnyx AI assistant.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Server,
      t: "Server-side enforcement",
      b: "All checks run on every attempt. A tampered browser cannot skip them. Blocked attempts stop before any spend.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Gauge,
      t: "Rate limits",
      b: "20 AI calls and 60 SMS per 60 seconds on spending routes. Usage recorded per event in a ledger.",
      color: "from-fuchsia-400 to-rose-500",
    },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          What Xovra enforces
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[60px] leading-[0.98] tracking-[-0.03em]">
          Six checks.
          <br />
          <span className="italic text-[#0b0b0f]/55">On every attempt.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl bg-white border border-black/5 p-6 overflow-hidden transition hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
          >
            <div
              className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${it.color} opacity-10 blur-2xl group-hover:opacity-25 transition`}
            />
            <motion.div
              whileHover={{ rotate: 8 }}
              className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center shadow-md`}
            >
              <it.icon size={17} className="text-white" />
            </motion.div>
            <div className="relative mt-5 text-[18px] font-semibold">{it.t}</div>
            <p className="relative mt-2 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
              {it.b}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ PRE-SEND CHECKS ============================ */
function PreSendChecks() {
  const checks = [
    { q: "On suppression list?", ok: "Blocked.", color: "bg-rose-500" },
    { q: "Inside the calling window?", ok: "If not, blocked.", color: "bg-amber-500" },
    { q: "Attempt cap reached?", ok: "Blocked.", color: "bg-indigo-500" },
    { q: "Rate limit exceeded?", ok: "Blocked.", color: "bg-fuchsia-500" },
    { q: "All clear.", ok: "Call or text goes out.", color: "bg-emerald-500", pass: true },
  ];
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Pre-send order
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[0.98] tracking-[-0.03em]">
          What happens before
          <br />
          <span className="italic text-[#0b0b0f]/55">a call goes out.</span>
        </h2>
      </motion.div>

      <div className="mt-14 max-w-3xl mx-auto relative">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-rose-300 via-amber-300 to-emerald-400" />
        {checks.map((c, i) => (
          <motion.div
            key={c.q}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-start gap-5 pb-4 last:pb-0"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className={`relative shrink-0 w-14 h-14 rounded-full ${c.color} flex items-center justify-center shadow-lg z-10 text-white font-semibold text-[14px]`}
            >
              {String(i + 1).padStart(2, "0")}
              {c.pass && (
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full ${c.color} opacity-25`}
                />
              )}
            </motion.div>
            <div
              className={`flex-1 rounded-2xl border p-4 flex items-center justify-between gap-4 ${c.pass ? "bg-emerald-50 border-emerald-200" : "bg-[#f6f4ef] border-black/5"}`}
            >
              <div>
                <div className="text-[15px] font-semibold">{c.q}</div>
                <div className={`mt-0.5 text-[13px] ${c.pass ? "text-emerald-700" : "text-[#0b0b0f]/60"}`}>
                  {c.ok}
                </div>
              </div>
              {c.pass ? (
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0" />
              ) : (
                <XCircle size={22} className="text-[#0b0b0f]/25 shrink-0" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ SMS 10DLC ============================ */
function Sms10DLC() {
  const points = [
    "10DLC (10-digit long code) is the US carrier vetting system for application-to-person texts from standard local numbers.",
    "You register directly with Telnyx under your own brand and campaign. Xovra does not handle registration and has no wizard for it.",
    "Required before sending SMS to US numbers at any scale. Unregistered traffic is likely to be filtered or blocked.",
    "Does not affect voice calls.",
  ];
  return (
    <section className="py-28 px-5 bg-[#0b1324] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/20 blur-3xl" />
      <motion.div {...fadeUp} className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-cyan-300 font-semibold">
          SMS · 10DLC
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[60px] leading-[0.98] tracking-[-0.03em]">
          Registered on Telnyx.
          <br />
          <span className="italic text-white/55">Before you send.</span>
        </h2>
      </motion.div>
      <div className="relative mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-3">
        {points.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3 }}
            className="relative rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10 p-5"
          >
            <MessageSquare size={16} className="text-cyan-300" />
            <p className="mt-3 text-[13.5px] text-white/80 leading-relaxed">
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================ RESPONSIBILITY SPLIT ============================ */
function Responsibility() {
  const xovra = [
    "Suppression list enforcement + STOP detection",
    "Calling window enforcement",
    "Attempt cap enforcement",
    "AI self-identification on AI calls",
    "Server-side rate limits on spending routes",
  ];
  const you = [
    "Lawful basis + consent for every contact",
    "Do Not Call registry scrubbing (Xovra does not check it)",
    "10DLC registration with Telnyx before SMS at scale",
    "Truthful scripts and claims",
    "Your own legal advice — this page is not it",
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Responsibility split
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Who does what,
          <br />
          <span className="italic text-[#0b0b0f]/55">written down.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-white border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-semibold">
            Xovra enforces
          </div>
          <ul className="mt-5 space-y-3">
            {xovra.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-[#0b0b0f]/85"
              >
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-white border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
            You handle
          </div>
          <ul className="mt-5 space-y-3">
            {you.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-[#0b0b0f]/85"
              >
                <FileCheck size={16} className="text-rose-500 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================ NOT PROVIDED ============================ */
function NotProvided() {
  const items = [
    "Do Not Call registry lookups",
    "STIR/SHAKEN controls",
    "SOC 2, HIPAA, or GDPR certification",
    "Call recording or transcripts",
    "A 10DLC registration wizard",
    "Answering machine detection",
  ];
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
          What Xovra does not provide
        </div>
        <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
          Honest about the gaps.
        </h2>
        <ul className="mt-7 grid sm:grid-cols-2 gap-2.5">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl bg-[#f6f4ef] border border-black/5 px-4 py-3 text-[13.5px] text-[#0b0b0f]/75"
            >
              <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
              {t}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* ================================ FAQ ================================ */
function FAQ() {
  const faqs = [
    { q: "Does using Xovra make my outreach TCPA-compliant?", a: "No. No tool alone makes outreach TCPA-compliant. The lawfulness of your outreach also depends on your lists, your consent model, and your content — not just the dialer." },
    { q: "What happens when someone replies STOP?", a: "STOP and UNSUBSCRIBE are detected automatically on inbound SMS. The number is added to your append-only suppression list and never contacted again — by call or by text." },
    { q: "Can I change the 8 AM – 9 PM calling window?", a: "Yes, per campaign. Timezone and window hours are configurable. The check still runs on the server." },
    { q: "Can I raise the attempt cap above 6?", a: "Yes. The default is 6 attempts per contact — change it per campaign to fit your motion." },
    { q: "Does Xovra check the Do Not Call registry?", a: "No. DNC scrubbing is your responsibility. We do not look up or filter against the DNC registry today." },
    { q: "Is 10DLC registration included?", a: "No. You register directly with Telnyx under your own brand and campaign. Xovra does not handle registration." },
    { q: "Do AI calls say they are AI?", a: "Yes. Every AI qualifier call opens with disclosure in the first sentence — not buried later in the call." },
    { q: "Can the browser override the checks?", a: "No. Suppression, window, cap, and rate-limit checks run on the server. A tampered browser cannot skip them." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Compliance questions.
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
              transition={{ duration: 0.4, delay: i * 0.03 }}
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

/* ============================== CLOSING ============================== */
function Closing() {
  return (
    <section className="py-28 px-5 bg-white text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-7xl leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        Calling with
        <br />
        <span className="italic text-[#0b0b0f]/55">guardrails on.</span>
      </motion.h2>
      <p className="mt-7 text-[#0b0b0f]/60 max-w-xl mx-auto">
        Get early access and see the suppression, window, and cap checks
        working on your own campaigns.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
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
export default function CompliancePage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <Controls />
      <PreSendChecks />
      <Sms10DLC />
      <Responsibility />
      <NotProvided />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
