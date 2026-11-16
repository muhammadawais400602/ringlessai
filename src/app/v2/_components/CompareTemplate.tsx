"use client";

import Nav from "./Nav";
import { Footer } from "./Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  MinusCircle,
  Plus,
  Minus,
  Zap,
  Scale,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export type Cell = "yes" | "no" | "partial" | string;

export type CompareData = {
  rival: string;
  rivalShort: string;
  rivalTag: string;
  xovraTag: string;
  eyebrow: string;
  headline: { top: string; italic: string };
  sub: string;
  shortAnswer: {
    them: string;
    us: string;
  };
  table: {
    feature: string;
    xovra: Cell;
    rival: Cell;
  }[];
  rivalStrong: string[];
  xovraStrong: string[];
  differences: { t: string; b: string }[];
  scenarios: { label: string; winner: "xovra" | "rival" | "either" }[];
  chooseRival: string[];
  chooseXovra: string[];
  faqs: { q: string; a: string }[];
};

export default function CompareTemplate({ data }: { data: CompareData }) {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero d={data} />
      <QuickGlance d={data} />
      <ShortAnswer d={data} />
      <Table d={data} />
      <ProsCons d={data} />
      <Differences d={data} />
      <Pricing />
      <Scenarios d={data} />
      <Choose d={data} />
      <FAQ d={data} />
      <Closing d={data} />
      <Footer />
    </main>
  );
}

function Hero({ d }: { d: CompareData }) {
  return (
    <section className="relative px-5 sm:px-8 pt-20 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>
      <motion.span
        {...fadeUp}
        className="block text-center text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
      >
        Xovra vs {d.rival}
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-5 text-center text-[42px] sm:text-[60px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        {d.headline.top}
        <br />
        <span className="italic text-[#0b0b0f]/55">{d.headline.italic}</span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-8 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto text-center leading-[1.55]"
      >
        {d.sub}
      </motion.p>
      <motion.div {...fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="/v2/demo"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Get Early Access <ArrowRight size={14} />
        </a>
        <a
          href="#comparison-table"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
        >
          Jump to the Feature Table
        </a>
      </motion.div>
      <motion.p
        {...fadeUp}
        className="mt-6 text-center text-[12px] text-[#0b0b0f]/55"
      >
        Usage-based pricing from $0.02/min. No subscription tiers.
      </motion.p>
    </section>
  );
}

function QuickGlance({ d }: { d: CompareData }) {
  const cards = [
    {
      label: d.rival,
      tag: d.rivalTag,
      color: "from-slate-300 to-slate-400",
      items: ["Established vendor", "Different product category", "Vendor confirmation needed for latest details"],
      tone: "light",
    },
    {
      label: "Xovra",
      tag: d.xovraTag,
      color: "from-[#4f5bf0] to-[#a855f7]",
      items: [
        "Browser WebRTC softphone via Telnyx",
        "Google Maps lead scraper + enrichment",
        "AI qualifier with disclosure, Claude/Gemini rebuttals",
      ],
      tone: "dark",
    },
  ] as const;
  return (
    <section className="py-16 px-5 bg-[#f6f4ef] border-y border-black/5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`relative rounded-2xl p-6 overflow-hidden border ${c.tone === "dark" ? "bg-[#0b1324] text-white border-white/10" : "bg-white border-black/5"}`}
          >
            <div
              className={`absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br ${c.color} opacity-25 blur-3xl`}
            />
            <div className="relative text-[11px] uppercase tracking-[0.18em] font-semibold opacity-60">
              {c.tag}
            </div>
            <div className="relative xv-serif text-[36px] italic leading-none mt-2">
              {c.label}
            </div>
            <ul className="relative mt-6 space-y-2">
              {c.items.map((it) => (
                <li
                  key={it}
                  className={`flex items-start gap-2 text-[13.5px] ${c.tone === "dark" ? "text-white/85" : "text-[#0b0b0f]/75"}`}
                >
                  <CheckCircle2
                    size={14}
                    className={
                      c.tone === "dark"
                        ? "text-cyan-300 shrink-0 mt-0.5"
                        : "text-emerald-500 shrink-0 mt-0.5"
                    }
                  />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ShortAnswer({ d }: { d: CompareData }) {
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Short answer
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Two tools,
          <span className="italic text-[#0b0b0f]/55"> two jobs.</span>
        </h2>
      </motion.div>
      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
            {d.rival} is for
          </div>
          <p className="mt-3 text-[14.5px] text-[#0b0b0f]/80 leading-relaxed">
            {d.shortAnswer.them}
          </p>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="relative rounded-2xl bg-[#0b1324] text-white p-6 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#4f5bf0]/35 to-fuchsia-500/20 blur-3xl" />
          <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
            Xovra is for
          </div>
          <p className="relative mt-3 text-[14.5px] text-white/85 leading-relaxed">
            {d.shortAnswer.us}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function renderCell(c: Cell, tone: "us" | "them") {
  if (c === "yes") {
    return (
      <div className="flex items-center justify-center">
        <CheckCircle2
          size={18}
          className={tone === "us" ? "text-emerald-500" : "text-emerald-500"}
        />
      </div>
    );
  }
  if (c === "no") {
    return (
      <div className="flex items-center justify-center">
        <XCircle size={18} className="text-rose-400" />
      </div>
    );
  }
  if (c === "partial") {
    return (
      <div className="flex items-center justify-center">
        <MinusCircle size={18} className="text-amber-400" />
      </div>
    );
  }
  return (
    <span className="text-[12.5px] text-[#0b0b0f]/70">{c}</span>
  );
}

function Table({ d }: { d: CompareData }) {
  const [showAll, setShowAll] = useState(false);
  const rows = showAll ? d.table : d.table.slice(0, 10);
  return (
    <section id="comparison-table" className="py-24 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Feature comparison
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Side by side,
          <span className="italic text-[#0b0b0f]/55"> row by row.</span>
        </h2>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white border border-black/10 overflow-hidden shadow-sm"
      >
        <div className="grid grid-cols-[1.4fr_1fr_1fr] px-5 py-3 border-b border-black/10 bg-[#faf9f6] text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
          <span>Feature</span>
          <span className="text-center text-[#4f5bf0]">Xovra</span>
          <span className="text-center">{d.rival}</span>
        </div>
        {rows.map((r, i) => (
          <motion.div
            key={r.feature}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className={`grid grid-cols-[1.4fr_1fr_1fr] px-5 py-3 text-[13.5px] ${i < rows.length - 1 ? "border-b border-black/5" : ""} ${i % 2 === 1 ? "bg-[#faf9f6]" : ""}`}
          >
            <span className="text-[#0b0b0f]/85">{r.feature}</span>
            <div className="flex items-center justify-center">
              {renderCell(r.xovra, "us")}
            </div>
            <div className="flex items-center justify-center">
              {renderCell(r.rival, "them")}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {!showAll && d.table.length > 10 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0b0b0f]/15 bg-white hover:border-[#0b0b0f]/40 text-sm transition"
          >
            Show all {d.table.length} rows <ArrowRight size={14} />
          </button>
        </div>
      )}
      <p className="mt-6 text-center text-[12px] text-[#0b0b0f]/50 max-w-xl mx-auto">
        {d.rival} details reflect general public positioning and may change. Confirm with the vendor.
      </p>
    </section>
  );
}

function ProsCons({ d }: { d: CompareData }) {
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Where each
          <span className="italic text-[#0b0b0f]/55"> is stronger.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
            {d.rival} is stronger when
          </div>
          <ul className="mt-5 space-y-3">
            {d.rivalStrong.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-[#0b0b0f]/80"
              >
                <CheckCircle2 size={15} className="text-slate-500 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="relative rounded-2xl bg-[#0b1324] text-white p-6 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#4f5bf0]/30 to-fuchsia-500/20 blur-3xl" />
          <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
            Xovra is stronger when
          </div>
          <ul className="relative mt-5 space-y-3">
            {d.xovraStrong.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-white/85"
              >
                <Sparkles size={15} className="text-cyan-300 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Differences({ d }: { d: CompareData }) {
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Key differences
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Five places
          <span className="italic text-[#0b0b0f]/55"> they diverge.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto space-y-3">
        {d.differences.map((df, i) => (
          <motion.div
            key={df.t}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -2 }}
            className="rounded-2xl bg-white border border-black/5 p-5 flex items-start gap-5"
          >
            <div className="shrink-0 xv-serif text-[40px] italic text-[#4f5bf0] leading-none">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="text-[17px] font-semibold">{df.t}</div>
              <div className="mt-1 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
                {df.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Pricing
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Xovra is
          <span className="italic text-[#0b0b0f]/55"> pay-as-you-use.</span>
        </h2>
      </motion.div>
      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-3">
        {[
          { l: "Manual calling", v: "$0.02 /min" },
          { l: "AI qualifier", v: "$0.25 /min" },
          { l: "Outbound SMS", v: "$0.03 /part" },
        ].map((p, i) => (
          <motion.div
            key={p.l}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-5 text-center hover:bg-white hover:shadow-md transition"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              {p.l}
            </div>
            <div className="xv-serif mt-2 text-[34px] italic leading-none">
              {p.v}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href="/v2/pricing"
          className="inline-flex items-center gap-1.5 text-sm text-[#0b0b0f] hover:underline"
        >
          See the full pricing page <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}

function Scenarios({ d }: { d: CompareData }) {
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Scenario fit
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Which one
          <span className="italic text-[#0b0b0f]/55"> fits which job.</span>
        </h2>
      </motion.div>
      <div className="mt-12 max-w-4xl mx-auto space-y-2.5">
        {d.scenarios.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between gap-4 rounded-xl bg-white border border-black/5 px-5 py-3.5"
          >
            <span className="text-[14px] text-[#0b0b0f]/85">{s.label}</span>
            {s.winner === "xovra" && (
              <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white bg-[#4f5bf0] rounded-full px-3 py-1">
                Xovra
              </span>
            )}
            {s.winner === "rival" && (
              <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#0b0b0f] bg-slate-200 rounded-full px-3 py-1">
                {d.rivalShort}
              </span>
            )}
            {s.winner === "either" && (
              <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#0b0b0f]/60 bg-black/5 rounded-full px-3 py-1">
                Either
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Choose({ d }: { d: CompareData }) {
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="xv-serif text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          How to decide.
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
            Choose {d.rival} if
          </div>
          <ul className="mt-5 space-y-3">
            {d.chooseRival.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-[#0b0b0f]/80"
              >
                <CheckCircle2 size={15} className="text-slate-500 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="relative rounded-2xl bg-[#0b1324] text-white p-6 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br from-[#4f5bf0]/30 to-cyan-500/20 blur-3xl" />
          <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
            Choose Xovra if
          </div>
          <ul className="relative mt-5 space-y-3">
            {d.chooseXovra.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[14px] text-white/85"
              >
                <Zap size={15} className="text-cyan-300 shrink-0 mt-0.5" />
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function FAQ({ d }: { d: CompareData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Common questions.
        </h2>
      </motion.div>
      <div className="mt-12 max-w-3xl mx-auto space-y-2">
        {d.faqs.map((f, i) => {
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

function Closing({ d }: { d: CompareData }) {
  return (
    <section className="py-28 px-5 bg-white text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-6xl lg:text-[76px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        Want to try Xovra
        <br />
        <span className="italic text-[#0b0b0f]/55">
          alongside {d.rival}?
        </span>
      </motion.h2>
      <p className="mt-6 text-[#0b0b0f]/60 max-w-xl mx-auto">
        Early access is free to start. Run one niche, one city, one afternoon.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="/v2/demo"
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
