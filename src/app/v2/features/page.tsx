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
  Keyboard,
  Users,
  ShieldCheck,
  Hash,
  Plus,
  Minus,
  Search,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const workflow = ["Source", "Call", "Handle", "Follow up"];

const features = [
  {
    icon: Bot,
    title: "AI Qualifier Calls",
    body: "An AI assistant places the call, discloses it is AI, and returns a score, interest level, and suggested next action.",
    accent: "bg-[#eaf6ef]",
  },
  {
    icon: MapPin,
    title: "Lead Sourcing & Campaigns",
    body: "Google Maps scraping with website, ads, and social audits. Lead scoring and CSV export.",
    accent: "bg-[#f0efff]",
  },
  {
    icon: Zap,
    title: "Live AI Rebuttals",
    body: "Context-aware objection handling drafted by Claude or Gemini during the call.",
    accent: "bg-[#ffecee]",
  },
  {
    icon: MessageSquare,
    title: "Follow-Up & SMS",
    body: "Two-way SMS with opt-out detection, plus email and WhatsApp drafts for follow-ups.",
    accent: "bg-[#fff2e8]",
  },
  {
    icon: FileSpreadsheet,
    title: "Outcome Tracking",
    body: "Outcomes stream into Google Sheets with AI lead scores and a per-event usage ledger.",
    accent: "bg-[#eef6ff]",
  },
  {
    icon: MessageSquare,
    title: "Messages & Conversations",
    body: "SMS threads grouped by number, with lead names matched to each conversation.",
    accent: "bg-[#faf1ff]",
  },
];

const daySteps = [
  { n: "01", t: "Source leads", b: "Pick a niche and city — Xovra pulls the Google Maps list." },
  { n: "02", t: "Build a campaign", b: "Tag leads with pitch angles and attach a script." },
  { n: "03", t: "Call", b: "Dial from the browser or hand the first call to the AI qualifier." },
  { n: "04", t: "Handle objections", b: "Live rebuttals surface mid-call using the enriched context." },
  { n: "05", t: "Log and follow up", b: "Outcomes sync to a sheet. Follow-up SMS goes out from the same screen." },
];

const callingHighlights = [
  { t: "Keyboard-shortcut dialing", b: "C to call, H to hang up, 1–6 to log outcomes." },
  { t: "Operator-first flow", b: "The operator's line rings before the lead picks up." },
  { t: "AI qualifier scoring", b: "Every AI call returns a score from 1 to 10." },
];

const intelHighlights = [
  { t: "Website audit", b: "HTTPS, mobile-friendliness, and copyright-year checks." },
  { t: "Ads detection", b: "Three methods for spotting Google Ads spend." },
  { t: "Social presence", b: "Instagram, Facebook, and TikTok with follower counts." },
];

const complianceHighlights = [
  { t: "Suppression lists", b: "Append-only, never dial a number you blacklisted." },
  { t: "Calling windows", b: "8 AM – 9 PM local time, enforced by default, with attempt caps." },
  { t: "Teams & roles", b: "Owner, admin, and agent roles with invites." },
];

const doesList = [
  "Browser dialer, one call at a time",
  "AI qualifier calls that disclose they are AI",
  "Google Maps sourcing with website, ads, and social enrichment",
  "Live rebuttals via Claude or Gemini",
  "Two-way SMS with email and WhatsApp drafts",
  "Outcome tracking to Google Sheets",
];

const doesNotList = [
  "Ringless voicemail",
  "Power or predictive dialing",
  "Call recording or transcripts",
  "Native CRM, Zapier, or Slack integrations",
  "Voice cloning or WhatsApp Business API",
];

const supportingPieces = [
  "Campaigns",
  "Call scripts",
  "Suppression lists",
  "Calling windows",
  "Teams",
  "Number pools",
];

const faqs = [
  {
    q: "What is Xovra?",
    a: "An AI-powered cold calling platform that sources leads from Google Maps, dials from the browser or with an AI qualifier, helps handle objections, and tracks outcomes.",
  },
  {
    q: "Is it a power dialer?",
    a: "No. Xovra is a single-line browser dialer with an optional AI qualifier — not a power or predictive dialer.",
  },
  {
    q: "Does it do ringless voicemail?",
    a: "No. Xovra is live, two-way outbound only.",
  },
  {
    q: "What do I need to bring?",
    a: "A Telnyx account for voice, SMS, and AI. A Google Sheet to sync outcomes to. That's the setup.",
  },
  {
    q: "Which integrations exist?",
    a: "Google Sheets sync and a HubSpot-compatible CSV export. No native CRM, Zapier, or Slack integrations.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 sm:px-8 pt-16 pb-16">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            Features
          </span>
          <h1 className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[80px] leading-[0.96] tracking-[-0.03em]">
            Source leads, call them,
            <br />
            <span className="italic text-[#0b0b0f]/55">
              qualify with AI, and follow up — in one place.
            </span>
          </h1>
          <p className="mt-7 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]">
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
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white text-sm text-[#0b0b0f] hover:border-[#0b0b0f]/40 transition"
            >
              Book a Demo
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-[12px]">
            {[
              "Browser dialer, one call at a time",
              "AI disclosure + suppression lists",
              "Google Sheets + CSV export",
            ].map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-full bg-[#f6f4ef] border border-black/5 text-[#0b0b0f]/70"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Workflow overview */}
      <section className="py-24 px-5 bg-[#f6f4ef] border-y border-black/5">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            The Xovra workflow
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Four steps,
            <span className="italic text-[#0b0b0f]/55"> one workspace.</span>
          </h2>
        </motion.div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#4f5bf0]/40 to-transparent" />
          {workflow.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm text-[#0b0b0f]/70 text-[13px] font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-[16px] font-semibold">{w}</div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-[13px] text-[#0b0b0f]/55">
          Voice, SMS, and AI run on Telnyx. Live help uses Claude or Gemini.
        </p>
      </section>

      {/* Features grid */}
      <section className="py-28 px-5 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Six capabilities,
            <br />
            <span className="italic text-[#0b0b0f]/55">
              one tightly-looped system.
            </span>
          </h2>
        </motion.div>

        <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`group rounded-2xl ${f.accent} border border-black/5 p-6 transition hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]`}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-black/5 flex items-center justify-center">
                <f.icon size={18} className="text-[#0b0b0f]/80" />
              </div>
              <h3 className="mt-5 xv-serif text-[26px] leading-tight tracking-[-0.015em]">
                {f.title}
              </h3>
              <p className="mt-3 text-[14px] text-[#0b0b0f]/60 leading-relaxed">
                {f.body}
              </p>
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

      {/* Day in the workflow */}
      <section className="py-28 px-5 bg-[#f6f4ef]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            A day in the Xovra workflow
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Five steps,
            <span className="italic text-[#0b0b0f]/55"> start to log.</span>
          </h2>
        </motion.div>
        <div className="mt-14 max-w-4xl mx-auto space-y-3">
          {daySteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-5 rounded-2xl bg-white border border-black/5 p-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#0b0b0f] text-white flex items-center justify-center text-[13px] font-semibold">
                {s.n}
              </div>
              <div>
                <div className="text-[17px] font-semibold">{s.t}</div>
                <div className="mt-1 text-[14px] text-[#0b0b0f]/60">{s.b}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calling + Lead intel + Compliance triptych */}
      <section className="py-28 px-5 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          <HighlightCol icon={Phone} title="Calling" items={callingHighlights} />
          <HighlightCol
            icon={Search}
            title="Lead intelligence"
            items={intelHighlights}
          />
          <HighlightCol
            icon={ShieldCheck}
            title="Compliance & teams"
            items={complianceHighlights}
          />
        </div>
      </section>

      {/* Does / Does not */}
      <section className="py-28 px-5 bg-[#f6f4ef]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            Straight answers
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            What Xovra is,
            <br />
            <span className="italic text-[#0b0b0f]/55">and is not.</span>
          </h2>
        </motion.div>
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 p-6"
          >
            <div className="text-[12px] uppercase tracking-[0.18em] text-emerald-600 font-semibold">
              Does
            </div>
            <ul className="mt-4 space-y-2.5">
              {doesList.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 text-[14px] text-[#0b0b0f]/80"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 p-6"
          >
            <div className="text-[12px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
              Does not
            </div>
            <ul className="mt-4 space-y-2.5">
              {doesNotList.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 text-[14px] text-[#0b0b0f]/70"
                >
                  <XCircle
                    size={16}
                    className="text-rose-400 shrink-0 mt-0.5"
                  />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Supporting pieces */}
      <section className="py-24 px-5 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Supporting pieces.
          </h2>
        </motion.div>
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {supportingPieces.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-[#f6f4ef] border border-black/5 py-5 text-center text-[13px] font-medium text-[#0b0b0f]"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-5 bg-[#f6f4ef]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            FAQ
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Questions, answered.
          </h2>
        </motion.div>
        <FaqList items={faqs} />
      </section>

      {/* Closing CTA */}
      <section className="py-28 px-5 bg-white text-center">
        <motion.h2
          {...fadeUp}
          className="xv-serif text-5xl sm:text-6xl leading-[1] tracking-[-0.03em] max-w-3xl mx-auto"
        >
          See the full workflow
          <br />
          <span className="italic text-[#0b0b0f]/55">on your own leads.</span>
        </motion.h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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

      <Footer />
    </main>
  );
}

function HighlightCol({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Phone;
  title: string;
  items: { t: string; b: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
    >
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-white border border-black/5 flex items-center justify-center">
          <Icon size={16} />
        </div>
        <span className="text-[16px] font-semibold">{title}</span>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.t}>
            <div className="text-[14px] font-medium">{it.t}</div>
            <div className="text-[13px] text-[#0b0b0f]/60 mt-0.5">{it.b}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mt-12 max-w-3xl mx-auto space-y-2">
      {items.map((f, i) => {
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
  );
}
