"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Phone,
  FileSpreadsheet,
  Sparkles,
  Bot,
  Download,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Clock,
  MessageSquare,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ============================= HERO ============================= */
function Hero() {
  return (
    <section className="relative px-5 sm:px-8 pt-24 pb-16 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>
      <motion.span
        {...fadeUp}
        className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
      >
        Integrations
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-6 text-[48px] sm:text-[68px] lg:text-[96px] leading-[0.94] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        A small stack,
        <br />
        <span className="italic text-[#0b0b0f]/60">honestly described.</span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-8 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]"
      >
        Xovra connects to Telnyx, Google Sheets, Claude, Gemini, and a
        HubSpot-compatible CSV export. That is the full list today.
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
    </section>
  );
}

/* ============================= STACK ============================= */
function Stack() {
  const items = [
    {
      name: "Telnyx",
      role: "Telephony backbone",
      req: "Required",
      reqColor: "bg-rose-50 text-rose-700 border-rose-200",
      body: "Powers the browser WebRTC softphone, the AI qualifier assistant, two-way SMS, and per-org phone numbers with number pools and health monitoring.",
      note: "You bring your own Telnyx account and numbers. 10DLC registration happens with Telnyx directly.",
      icon: Phone,
      color: "from-indigo-400 to-fuchsia-500",
      accent: "bg-[#f0efff]",
    },
    {
      name: "Google Sheets",
      role: "Lead source + outcome log",
      req: "Optional",
      reqColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      body: "Reads leads from a connected Sheet, writes call outcomes back in real time, and lets spreadsheet-based teammates see results as they happen.",
      note: "It's a sync, not a two-way CRM. The Sheet is yours — you own the data.",
      icon: FileSpreadsheet,
      color: "from-emerald-400 to-teal-500",
      accent: "bg-[#eaf6ef]",
    },
    {
      name: "Claude · Anthropic",
      role: "AI backend option",
      req: "AI mode",
      reqColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      body: "Suggests live rebuttals when a prospect objects, and drafts follow-up SMS from the call context. Produces text only — no voice placement.",
      note: "Switchable per campaign. Try Claude and Gemini on the same script and keep the one you prefer.",
      icon: Sparkles,
      color: "from-amber-400 to-orange-500",
      accent: "bg-[#fff2e8]",
    },
    {
      name: "Gemini · Google",
      role: "Alternative AI backend",
      req: "AI mode",
      reqColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      body: "Same role as Claude — live rebuttals and follow-up drafts. Selectable by the user per campaign.",
      note: "Different voice, same wiring. Rebuttals and drafts cite lead context.",
      icon: Bot,
      color: "from-cyan-400 to-blue-500",
      accent: "bg-[#eef6ff]",
    },
    {
      name: "CSV export · HubSpot format",
      role: "Manual import",
      req: "Optional",
      reqColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      body: "Exports enriched, scored leads and outcomes as a CSV laid out for HubSpot's import tool. Also opens cleanly in Salesforce, Pipedrive, Close, or Excel.",
      note: "A file export, not a live sync. There's no native CRM connection today.",
      icon: Download,
      color: "from-rose-400 to-pink-500",
      accent: "bg-[#ffecee]",
    },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Everything we connect to
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-[-0.03em]">
          Five pieces.
          <br />
          <span className="italic text-[#0b0b0f]/55">No more, no less.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -4 }}
            className={`group relative rounded-2xl ${it.accent} border border-black/5 p-6 overflow-hidden transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
          >
            <div
              className={`absolute -top-24 -right-24 w-52 h-52 rounded-full bg-gradient-to-br ${it.color} opacity-15 blur-3xl group-hover:opacity-30 transition`}
            />
            <div className="relative flex items-start justify-between gap-3">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center shadow-md`}
              >
                <it.icon size={19} className="text-white" />
              </motion.div>
              <span
                className={`text-[10.5px] uppercase tracking-[0.15em] px-2 py-1 rounded-full border font-semibold ${it.reqColor}`}
              >
                {it.req}
              </span>
            </div>
            <div className="relative mt-5 flex items-baseline gap-2">
              <h3 className="xv-serif text-[28px] leading-tight tracking-[-0.015em]">
                {it.name}
              </h3>
              <span className="text-[11.5px] text-[#0b0b0f]/50">
                · {it.role}
              </span>
            </div>
            <p className="relative mt-3 text-[14px] text-[#0b0b0f]/70 leading-relaxed">
              {it.body}
            </p>
            <div className="relative mt-4 pt-4 border-t border-black/5 text-[12.5px] text-[#0b0b0f]/55 italic">
              {it.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================= HOW IT FITS ============================= */
function HowItFits() {
  const steps = [
    { icon: Phone, t: "Leads arrive", b: "Google Maps scrape inside Xovra, or an import from a Google Sheet.", color: "from-cyan-400 to-blue-500" },
    { icon: MessageSquare, t: "Telnyx carries the call", b: "Calls and texts route through your Telnyx account and numbers.", color: "from-indigo-400 to-fuchsia-500" },
    { icon: Sparkles, t: "Claude or Gemini helps", b: "Live rebuttals and follow-up drafts, selected per campaign.", color: "from-amber-400 to-orange-500" },
    { icon: Download, t: "Outcomes go out", b: "To the Google Sheet in real time, or as a HubSpot-format CSV export.", color: "from-emerald-400 to-teal-500" },
  ];
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          How the pieces fit together
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[60px] leading-[0.98] tracking-[-0.03em]">
          One short pipeline.
          <br />
          <span className="italic text-[#0b0b0f]/55">Four steps.</span>
        </h2>
      </motion.div>
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-4 gap-5 relative">
        <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-500/0 via-[#4f5bf0]/50 to-emerald-500/0" />
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl bg-[#f6f4ef] border border-black/5 p-5 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className={`relative w-14 h-14 mx-auto rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}
            >
              <s.icon size={18} className="text-white" />
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-25`}
              />
            </motion.div>
            <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#0b0b0f]/40 font-semibold">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[17px] font-semibold">{s.t}</div>
            <div className="mt-2 text-[12.5px] text-[#0b0b0f]/55 leading-snug">
              {s.b}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================= ROADMAP ============================= */
function Roadmap() {
  const items = [
    { t: "CRM sync", b: "Native connectors for the common CRMs. No release date." },
    { t: "Zapier", b: "Trigger Zaps from outcomes, SMS replies, and scrape completions." },
    { t: "Webhooks + API", b: "Public REST + outbound webhooks for events." },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-amber-700 font-semibold">
          Coming soon
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Planned.
          <span className="italic text-[#0b0b0f]/55"> Not shipped.</span>
        </h2>
        <p className="mt-5 text-[13.5px] text-[#0b0b0f]/60">
          Tell us which one matters most for your workflow.
        </p>
      </motion.div>
      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-white border border-dashed border-[#0b0b0f]/15 p-5 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <Clock size={16} className="text-amber-600" />
              <span className="text-[10.5px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold">
                Planned
              </span>
            </div>
            <div className="mt-4 text-[17px] font-semibold">{it.t}</div>
            <div className="mt-1 text-[13px] text-[#0b0b0f]/60 leading-relaxed">
              {it.b}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/v2/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Tell us <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}

/* ============================= NOT CONNECTED ============================= */
function NotConnected() {
  const items = [
    "No native CRM integrations (Salesforce, HubSpot, Pipedrive, Close, GoHighLevel)",
    "No Zapier, Make, or Slack connections",
    "No call recording or transcript export",
    "No WhatsApp or email channels",
  ];
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
          What is not connected
        </div>
        <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
          Honest about the gaps.
        </h2>
        <ul className="mt-7 space-y-2.5">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl bg-[#f6f4ef] border border-black/5 px-5 py-3.5 text-[14px] text-[#0b0b0f]/75"
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

/* ================================= FAQ ================================= */
function FAQ() {
  const faqs = [
    { q: "Does Xovra integrate with Salesforce, Pipedrive, Close, or GoHighLevel?", a: "Not natively today. The only CRM-facing feature is the HubSpot-format CSV export. Native CRM sync is on the roadmap, with no release date." },
    { q: "Is there a native HubSpot integration?", a: "No. Export a HubSpot-formatted CSV from Xovra and import it with HubSpot's own tool." },
    { q: "Can I use my own telephony provider?", a: "No. Voice, SMS, and AI assistants are built on Telnyx. There's no option to switch carriers today." },
    { q: "Which AI model should I pick, Claude or Gemini?", a: "Both fill the same role. Try each on your own script and keep the one whose rebuttals and drafts you prefer." },
    { q: "Do you support Zapier, Make, or Slack?", a: "Not yet. Zapier is on the coming-soon list. No plans to claim Make or Slack until they actually exist." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Integration questions.
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
        Connect Telnyx
        <br />
        <span className="italic text-[#0b0b0f]/55">and start calling.</span>
      </motion.h2>
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
export default function IntegrationsPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <Stack />
      <HowItFits />
      <Roadmap />
      <NotConnected />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
