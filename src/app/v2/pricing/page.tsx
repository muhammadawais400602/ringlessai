"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Bot,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const rates = [
  { k: "Platform fee", v: "None" },
  { k: "Contract length", v: "None" },
  { k: "Manual calling", v: "$0.02 /min" },
  { k: "AI calling", v: "$0.25 /min" },
  { k: "Outbound SMS", v: "$0.03 /part" },
];

const rateCards = [
  {
    icon: Phone,
    title: "Manual Calling",
    price: "$0.02",
    unit: "/min",
    accent: "bg-[#f0efff]",
    who: "Users who decide whom to call and do the talking themselves.",
    included: [
      "Browser WebRTC softphone over Telnyx",
      "Per-lead scripts with placeholders",
      "Pitch-angle labels",
      "Outcome tracking to a sheet",
    ],
  },
  {
    icon: Bot,
    title: "AI Qualifier Calling",
    price: "$0.25",
    unit: "/min",
    accent: "bg-[#eaf6ef]",
    who: "Teams that want the first call handled before a rep picks up.",
    included: [
      "Telnyx AI assistant placing calls",
      "AI disclosure in the opening line",
      "Live rebuttals via Claude or Gemini",
      "Server-side suppression, window, and cap checks",
    ],
  },
  {
    icon: MessageSquare,
    title: "Two-Way SMS",
    price: "$0.03",
    unit: "/part",
    accent: "bg-[#fff2e8]",
    who: "Follow-up by text, replies in one inbox.",
    included: [
      "Send and receive via Telnyx",
      "Billed per carrier-counted part",
      "STOP / UNSUBSCRIBE detection",
      "Rate limiting",
    ],
  },
];

const plans = [
  {
    name: "Early Access",
    tag: "Free to start",
    pitch: "Then pay per use.",
    for: "Solo callers, small agencies, and teams testing an outbound workflow.",
    included: [
      "Google Maps lead scraping",
      "Lead enrichment",
      "Manual and AI calling",
      "Live rebuttals",
      "Two-way SMS",
      "Campaigns",
      "Google Sheet sync + HubSpot-format CSV export",
      "Suppression lists, calling windows, attempt caps",
    ],
    cta: { label: "Get Early Access", href: "/v2/contact" },
    accent: "bg-white",
    featured: true,
  },
  {
    name: "Teams",
    tag: "Coming soon",
    pitch: "Pricing not yet set.",
    for: "Agencies and sales teams needing shared workspaces.",
    included: [
      "Owner / admin / agent roles",
      "Team invites",
      "Per-organization numbers and AI assistants",
      "Number pools with health monitoring",
    ],
    cta: { label: "Contact Us", href: "/v2/contact" },
    accent: "bg-[#f6f4ef]",
    featured: false,
  },
];

const math = [
  {
    label: "Solo caller, light week",
    rows: [
      ["5 hrs manual", "$6.00"],
      ["100 SMS parts", "$3.00"],
    ],
    total: "$9.00",
  },
  {
    label: "Agency testing AI qualifiers",
    rows: [
      ["10 hrs manual", "$12.00"],
      ["3 hrs AI", "$45.00"],
      ["400 SMS parts", "$12.00"],
    ],
    total: "$69.00",
  },
  {
    label: "Manual-only month",
    rows: [["40 hrs manual", "$48.00"]],
    total: "$48.00",
  },
];

const exclusions = [
  "Telnyx carrier charges (phone numbers, 10DLC registration fees)",
  "Legal review of scripts, lists, or consent practices",
  "Call recording or transcripts (not offered)",
  "Native CRM sync — CSV export only",
];

const faqs = [
  {
    q: "How is billing calculated?",
    a: "Per minute for manual and AI calls, per carrier-counted part for SMS. Charges post to a per-event usage ledger with balance, today's spend, and month-to-date views.",
  },
  { q: "Is there a subscription?", a: "No. Usage only — no monthly minimums, no contracts." },
  { q: "Is there a free trial or money-back guarantee?", a: "Early Access is free to start, then you pay only for what you use." },
  { q: "Do I need to register for 10DLC?", a: "Yes — SMS requires 10DLC registration. Telnyx carrier charges apply." },
  { q: "Who's the phone service provider?", a: "Telnyx handles voice, SMS, and AI assistants. You bring your Telnyx account and numbers." },
  { q: "What does AI calling cost per minute?", a: "$0.25 per minute, billed to the second." },
  { q: "Are there spending limits?", a: "Rate limits apply to spending routes — 20 AI calls and 60 SMS per 60 seconds — plus the balance display." },
  { q: "Does Xovra record calls?", a: "No. Call recording and transcripts are not offered." },
  { q: "Will pricing change in the future?", a: "Rates may change as the product evolves. Existing users will be notified ahead of any update." },
];

export default function PricingPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />

      {/* Hero */}
      <section className="px-5 sm:px-8 pt-16 pb-14 text-center">
        <motion.span
          {...fadeUp}
          className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
        >
          Early Access Pricing
        </motion.span>
        <motion.h1
          {...fadeUp}
          className="xv-serif mt-5 text-5xl sm:text-6xl lg:text-[80px] leading-[0.96] tracking-[-0.03em] max-w-4xl mx-auto"
        >
          Usage-based pricing.
          <br />
          <span className="italic text-[#0b0b0f]/55">
            Pay only for what you use.
          </span>
        </motion.h1>
        <motion.p
          {...fadeUp}
          className="mt-7 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]"
        >
          No subscription tiers. Per-minute calling, per-message SMS. No monthly
          minimums, no contracts, no hidden fees.
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

      {/* Rate summary table */}
      <section className="py-14 px-5 bg-[#f6f4ef] border-y border-black/5">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white border border-black/5 overflow-hidden">
            {rates.map((r, i) => (
              <div
                key={r.k}
                className={`flex items-center justify-between px-6 py-4 ${i < rates.length - 1 ? "border-b border-black/5" : ""}`}
              >
                <span className="text-[14px] text-[#0b0b0f]/70">{r.k}</span>
                <span className="xv-serif text-[22px] italic text-[#0b0b0f]">
                  {r.v}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rate cards */}
      <section className="py-28 px-5 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Three meters.
            <br />
            <span className="italic text-[#0b0b0f]/55">That's the bill.</span>
          </h2>
        </motion.div>
        <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          {rateCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl ${c.accent} border border-black/5 p-7 transition hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]`}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-black/5 flex items-center justify-center">
                <c.icon size={18} className="text-[#0b0b0f]/80" />
              </div>
              <div className="mt-5 text-[16px] font-semibold">{c.title}</div>
              <div className="mt-2 xv-serif text-[52px] leading-none tracking-[-0.03em]">
                {c.price}
                <span className="text-[18px] text-[#0b0b0f]/50 ml-1 italic">
                  {c.unit}
                </span>
              </div>
              <p className="mt-4 text-[13.5px] text-[#0b0b0f]/60 italic">{c.who}</p>
              <ul className="mt-5 space-y-2">
                {c.included.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-[13.5px] text-[#0b0b0f]/75"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="py-28 px-5 bg-[#f6f4ef]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Plans.
          </h2>
        </motion.div>
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-2xl ${p.accent} border ${p.featured ? "border-[#0b0b0f]" : "border-black/5"} p-7 shadow-sm`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full bg-[#0b0b0f] text-white font-semibold">
                  Available now
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <span className="text-[18px] font-semibold">{p.name}</span>
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#0b0b0f]/50 font-semibold">
                  {p.tag}
                </span>
              </div>
              <div className="mt-2 xv-serif text-[36px] italic text-[#0b0b0f]/80 leading-none">
                {p.pitch}
              </div>
              <p className="mt-4 text-[13.5px] text-[#0b0b0f]/60">{p.for}</p>
              <ul className="mt-5 space-y-2">
                {p.included.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 text-[13.5px] text-[#0b0b0f]/80"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-500 shrink-0 mt-0.5"
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={p.cta.href}
                className={`mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition ${p.featured ? "bg-[#0b0b0f] text-white hover:bg-black" : "border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40"}`}
              >
                {p.cta.label} <ArrowRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Illustrative math */}
      <section className="py-28 px-5 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            Illustrative math
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            What a month could look like.
          </h2>
          <p className="mt-4 text-[13px] text-[#0b0b0f]/55">
            Arithmetic on published rates, not customer data.
          </p>
        </motion.div>
        <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {math.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
            >
              <div className="text-[14px] font-semibold">{m.label}</div>
              <div className="mt-4 space-y-2 text-[13px]">
                {m.rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between text-[#0b0b0f]/70">
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-black/10 flex justify-between items-baseline">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#0b0b0f]/50 font-semibold">
                  Total
                </span>
                <span className="xv-serif text-[30px] italic">{m.total}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Callouts: simple + ledger */}
      <section className="py-24 px-5 bg-[#f6f4ef]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 p-6"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#4f5bf0] font-semibold">
              Simple on purpose
            </div>
            <div className="xv-serif mt-3 text-[30px] leading-tight tracking-[-0.02em]">
              No minimums, no contracts, no hidden fees.
            </div>
            <p className="mt-3 text-[13.5px] text-[#0b0b0f]/60">
              Prepaid-style balance display. Pay as you call.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/5 p-6"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#4f5bf0] font-semibold">
              See every charge as it happens
            </div>
            <div className="xv-serif mt-3 text-[30px] leading-tight tracking-[-0.02em]">
              A per-event usage ledger.
            </div>
            <p className="mt-3 text-[13.5px] text-[#0b0b0f]/60">
              Balance, today's spend, and month-to-date — voice and SMS tracked
              separately. Rate limits of 20 AI calls and 60 SMS per 60 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-24 px-5 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
            Not included
          </div>
          <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
            What's outside the meter.
          </h2>
          <ul className="mt-6 space-y-2.5">
            {exclusions.map((e) => (
              <li
                key={e}
                className="flex items-start gap-2.5 text-[14px] text-[#0b0b0f]/70"
              >
                <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                {e}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-5 bg-[#f6f4ef]">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            FAQ
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            Pricing questions, answered.
          </h2>
        </motion.div>
        <FaqList items={faqs} />
      </section>

      {/* Closing */}
      <section className="py-28 px-5 bg-white text-center">
        <motion.h2
          {...fadeUp}
          className="xv-serif text-5xl sm:text-6xl leading-[1] tracking-[-0.03em] max-w-3xl mx-auto"
        >
          Start free.
          <br />
          <span className="italic text-[#0b0b0f]/55">Pay as you call.</span>
        </motion.h2>
        <p className="mt-6 text-[#0b0b0f]/60 max-w-xl mx-auto">
          Join early access, find leads, make calls, and watch the ledger.
        </p>
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
        <p className="mt-6 text-xs text-[#0b0b0f]/50">
          No contracts. No monthly minimums.
        </p>
      </section>

      <Footer />
    </main>
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
  );
}
