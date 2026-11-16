"use client";

import Nav from "./Nav";
import { Footer } from "./Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  MapPin,
  Phone,
  Bot,
  MessageSquare,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  Keyboard,
  Hash,
  Target,
  Zap,
  Globe,
  TrendingUp,
  Star,
  Search,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export type UseCaseData = {
  slug: string;
  eyebrow: string;
  headline: { top: string; italic: string };
  sub: string;
  heroImage: string;
  heroBadges: string[];
  demoCard: {
    title: string;
    meta: string;
    tag: string;
    tagColor: string;
    score: number;
    angle: string;
    scriptHint: string;
    outcomes: string[];
  };
  who: { title: string; body: string; icon: LucideIcon }[];
  problems: { problem: string; solution: string }[];
  features: { icon: LucideIcon; t: string; b: string; tag?: string }[];
  angles: { tag: string; color: string; body: string }[];
  steps: { t: string; b: string }[];
  scriptSection: {
    bullets: string[];
    templateTitle: string;
    templateBody: string;
    rebuttalTitle: string;
    rebuttalBody: string;
  };
  tracking: string[];
  compliance: string[];
  pricing: { label: string; v: string }[];
  dontDo: string[];
  faqs: { q: string; a: string }[];
  closing: { headline: string; italic: string; sub: string };
};

export default function UseCaseTemplate({ data }: { data: UseCaseData }) {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero d={data} />
      <WhoItsFor d={data} />
      <Problems d={data} />
      <Features d={data} />
      <PitchAngles d={data} />
      <Steps d={data} />
      <ScriptSection d={data} />
      <TrackingComplianceStrip d={data} />
      <Pricing d={data} />
      <DontDo d={data} />
      <FAQ d={data} />
      <Closing d={data} />
      <Footer />
    </main>
  );
}

function Hero({ d }: { d: UseCaseData }) {
  return (
    <section className="relative px-5 sm:px-8 pt-20 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-140px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <motion.span
            {...fadeUp}
            className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
          >
            {d.eyebrow}
          </motion.span>
          <motion.h1
            {...fadeUp}
            className="xv-serif mt-5 text-[46px] sm:text-[64px] lg:text-[84px] leading-[0.95] tracking-[-0.03em]"
          >
            {d.headline.top}
            <br />
            <span className="italic text-[#0b0b0f]/55">{d.headline.italic}</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="mt-7 text-[16.5px] text-[#0b0b0f]/65 max-w-xl leading-[1.55]"
          >
            {d.sub}
          </motion.p>
          <motion.div {...fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/v2/pricing"
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
            className="mt-8 flex flex-wrap gap-2"
          >
            {d.heroBadges.map((b) => (
              <span
                key={b}
                className="text-[12px] px-3 py-1.5 rounded-full bg-[#f6f4ef] border border-black/5 text-[#0b0b0f]/70"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <HeroDemo d={d} />
        </motion.div>
      </div>
    </section>
  );
}

function HeroDemo({ d }: { d: UseCaseData }) {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-gradient-to-br from-cyan-200/40 via-indigo-200/30 to-fuchsia-200/40 blur-3xl -z-10" />
      <div className="relative rounded-3xl bg-white border border-black/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
        <div className="relative aspect-[5/3] overflow-hidden">
          <img src={d.heroImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[11px]"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {d.eyebrow}
            </span>
            <span className="text-white/70 font-mono">xovra.ai</span>
          </motion.div>
        </div>

        <div className="p-5 space-y-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#0b0b0f]/40 font-semibold">
                Lead enriched
              </div>
              <div className="mt-1 text-[16px] font-semibold truncate">
                {d.demoCard.title}
              </div>
              <div className="text-[11.5px] text-[#0b0b0f]/55">
                {d.demoCard.meta}
              </div>
            </div>
            <span
              className={`shrink-0 text-[9.5px] font-bold text-white px-2 py-1 rounded-full bg-gradient-to-r ${d.demoCard.tagColor}`}
            >
              {d.demoCard.tag}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-[#f6f4ef] border border-black/5 px-3 py-2.5">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4f5bf0] to-[#a855f7] flex items-center justify-center shadow"
            >
              <Sparkles size={13} className="text-white" />
            </motion.div>
            <div className="flex-1">
              <div className="text-[10.5px] uppercase tracking-[0.15em] text-[#0b0b0f]/50 font-semibold">
                Score · pitch angle {d.demoCard.angle}
              </div>
              <div className="xv-serif text-[22px] italic leading-none mt-0.5">
                {d.demoCard.score} / 100
              </div>
            </div>
            <div className="w-16 h-1.5 rounded-full bg-black/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${d.demoCard.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.4 }}
                className="h-full bg-gradient-to-r from-[#4f5bf0] to-[#a855f7]"
              />
            </div>
          </div>

          <div className="rounded-xl bg-[#f0efff] border border-[#4f5bf0]/20 p-3">
            <div className="flex items-center gap-1.5 text-[10.5px] text-[#4f5bf0] font-semibold mb-1">
              <Zap size={11} /> Script hint
            </div>
            <p className="text-[12px] text-[#0b0b0f]/80 leading-relaxed">
              {d.demoCard.scriptHint}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {d.demoCard.outcomes.map((o, i) => (
              <motion.button
                key={o}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-[10.5px] py-2 rounded-lg bg-[#f6f4ef] border border-black/5 hover:bg-white text-[#0b0b0f]/80 font-medium"
              >
                {o}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoItsFor({ d }: { d: UseCaseData }) {
  return (
    <section className="py-24 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Who it&apos;s for
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Built for the people
          <br />
          <span className="italic text-[#0b0b0f]/55">closest to the call.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {d.who.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl bg-white border border-black/5 p-5 transition hover:shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f5bf0] to-[#a855f7] flex items-center justify-center shadow"
            >
              <w.icon size={16} className="text-white" />
            </motion.div>
            <h3 className="mt-5 xv-serif text-[22px] leading-tight tracking-[-0.015em]">
              {w.title}
            </h3>
            <p className="mt-2 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
              {w.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Problems({ d }: { d: UseCaseData }) {
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-rose-600 font-semibold">
          The problem
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[0.98] tracking-[-0.02em]">
          Four friction points,
          <br />
          <span className="italic text-[#0b0b0f]/55">four Xovra answers.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {d.problems.map((p, i) => (
          <motion.div
            key={p.problem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-6 transition hover:shadow-md"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
              Problem {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 xv-serif text-[26px] leading-tight tracking-[-0.015em]">
              {p.problem}
            </h3>
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-white border border-black/5 p-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0"
              >
                <CheckCircle2 size={13} className="text-white" />
              </motion.div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-emerald-700 font-semibold">
                  How Xovra helps
                </div>
                <p className="mt-1 text-[13.5px] text-[#0b0b0f]/75 leading-relaxed">
                  {p.solution}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Features({ d }: { d: UseCaseData }) {
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          In the product
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[0.98] tracking-[-0.02em]">
          Everything you need,
          <br />
          <span className="italic text-[#0b0b0f]/55">nothing bolted on.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {d.features.map((f, i) => (
          <motion.div
            key={f.t}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="relative group rounded-2xl bg-white border border-black/5 p-6 overflow-hidden transition hover:shadow-md"
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f5bf0] to-[#a855f7] flex items-center justify-center shadow"
            >
              <f.icon size={16} className="text-white" />
            </motion.div>
            <div className="mt-4 text-[16px] font-semibold">{f.t}</div>
            <p className="mt-2 text-[13px] text-[#0b0b0f]/60 leading-relaxed">
              {f.b}
            </p>
            {f.tag && (
              <span className="mt-4 inline-block text-[10.5px] font-semibold px-2 py-1 rounded-full bg-[#f6f4ef] border border-black/10 text-[#0b0b0f]/70">
                {f.tag}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PitchAngles({ d }: { d: UseCaseData }) {
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-amber-600 font-semibold">
          Read the business
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Four pitch angles,
          <br />
          <span className="italic text-[#0b0b0f]/55">assigned for you.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
        {d.angles.map((a, i) => (
          <motion.div
            key={a.tag}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl bg-[#f6f4ef] border border-black/5 p-6 overflow-hidden group"
          >
            <div
              className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${a.color} opacity-15 blur-3xl group-hover:opacity-30 transition`}
            />
            <span
              className={`inline-block text-[10px] font-bold text-white tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${a.color}`}
            >
              {a.tag}
            </span>
            <p className="relative mt-4 text-[14.5px] text-[#0b0b0f]/80 leading-relaxed">
              {a.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Steps({ d }: { d: UseCaseData }) {
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          How it runs
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Six steps,
          <span className="italic text-[#0b0b0f]/55"> one sitting.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-4xl mx-auto relative">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#4f5bf0]/60 via-[#a855f7]/40 to-transparent" />
        {d.steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex items-start gap-5 pb-5 last:pb-0"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="shrink-0 w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm text-[#4f5bf0] font-semibold text-[15px] z-10"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.div>
            <div className="flex-1 rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
              <div className="text-[17px] font-semibold">{s.t}</div>
              <div className="mt-1 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
                {s.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ScriptSection({ d }: { d: UseCaseData }) {
  return (
    <section className="py-32 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <motion.div {...fadeUp}>
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            Scripts & rebuttals
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
            One template,
            <br />
            <span className="italic text-[#0b0b0f]/55">
              filled in per lead.
            </span>
          </h2>
          <ul className="mt-8 space-y-3">
            {d.scriptSection.bullets.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[14.5px] text-[#0b0b0f]/80">
                <CheckCircle2 size={16} className="text-[#4f5bf0] shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              {d.scriptSection.templateTitle}
            </div>
            <pre className="mt-3 text-[12.5px] font-mono text-[#0b0b0f]/80 whitespace-pre-wrap leading-relaxed">
{d.scriptSection.templateBody}
            </pre>
          </div>
          <div className="rounded-2xl bg-[#0b1324] text-white p-5 overflow-hidden relative">
            <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
              {d.scriptSection.rebuttalTitle}
            </div>
            <p className="relative mt-3 text-[13px] leading-relaxed text-white/90">
              &ldquo;{d.scriptSection.rebuttalBody}&rdquo;
            </p>
            <div className="relative mt-4 flex gap-1.5 text-[10px]">
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                Claude
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                Gemini
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrackingComplianceStrip({ d }: { d: UseCaseData }) {
  return (
    <section className="py-24 px-5 bg-[#f6f4ef]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-white border border-black/5 p-6"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#4f5bf0] font-semibold">
            Tracking
          </div>
          <h3 className="xv-serif mt-3 text-[26px] leading-tight tracking-[-0.015em]">
            Outcomes land where
            <span className="italic text-[#0b0b0f]/55"> you already work.</span>
          </h3>
          <ul className="mt-5 space-y-2.5">
            {d.tracking.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-[13.5px] text-[#0b0b0f]/75"
              >
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          {...fadeUp}
          className="relative rounded-2xl bg-[#0b1324] text-white p-6 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-cyan-500/25 blur-3xl" />
          <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
            Guardrails
          </div>
          <h3 className="xv-serif mt-3 text-[26px] leading-tight tracking-[-0.015em]">
            Compliance built in,
            <span className="italic text-white/55"> not bolted on.</span>
          </h3>
          <ul className="relative mt-5 space-y-2.5">
            {d.compliance.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-[13.5px] text-white/80"
              >
                <ShieldCheck size={15} className="text-cyan-300 shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing({ d }: { d: UseCaseData }) {
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Pay-as-you-use
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Three meters,
          <span className="italic text-[#0b0b0f]/55"> no seats.</span>
        </h2>
      </motion.div>
      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-3">
        {d.pricing.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-5 text-center transition hover:bg-white hover:shadow-md"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/45 font-semibold">
              {p.label}
            </div>
            <div className="xv-serif mt-2 text-[34px] italic leading-none">
              {p.v}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/v2/pricing"
          className="inline-flex items-center gap-1.5 text-sm text-[#0b0b0f] hover:underline"
        >
          See full pricing <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}

function DontDo({ d }: { d: UseCaseData }) {
  return (
    <section className="py-24 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
          What Xovra does not do
        </div>
        <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
          Honest about the gaps.
        </h2>
        <ul className="mt-6 space-y-2.5">
          {d.dontDo.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-xl bg-white border border-black/5 px-4 py-3 text-[14px] text-[#0b0b0f]/75"
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

function FAQ({ d }: { d: UseCaseData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Questions, answered.
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
              className="rounded-xl bg-[#f6f4ef] border border-black/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white transition"
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

function Closing({ d }: { d: UseCaseData }) {
  return (
    <section className="py-28 px-5 bg-[#f6f4ef] text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-6xl lg:text-[76px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        {d.closing.headline}
        <br />
        <span className="italic text-[#0b0b0f]/55">{d.closing.italic}</span>
      </motion.h2>
      <p className="mt-6 text-[#0b0b0f]/60 max-w-xl mx-auto">
        {d.closing.sub}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="/v2/pricing"
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

// Re-export icons to simplify imports in each page file
export const icons = {
  MapPin,
  Phone,
  Bot,
  MessageSquare,
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  Keyboard,
  Hash,
  Target,
  Zap,
  Globe,
  TrendingUp,
  Star,
  Search,
};
