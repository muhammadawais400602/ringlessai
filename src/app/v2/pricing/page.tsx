"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Phone,
  Bot,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Sparkles,
  Gauge,
  Clock,
  Infinity as InfinityIcon,
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-120px] w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>

      <motion.span
        {...fadeUp}
        className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
      >
        Early Access Pricing
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-6 text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.92] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        True pay-as-you-go.
        <br />
        <span className="italic text-[#0b0b0f]/70">
          Pay only for the minutes you use.
        </span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-10 text-[17px] text-[#0b0b0f]/65 max-w-xl mx-auto leading-[1.55]"
      >
        Most outbound platforms require annual contracts before you write a
        single line of code. Xovra starts at $0 — pay only for what you use.
      </motion.p>

      <motion.div
        {...fadeUp}
        className="mt-10 flex flex-wrap justify-center gap-3"
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

      {/* Floating pill stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {[
          { icon: InfinityIcon, k: "None", v: "Platform fee" },
          { icon: Clock, k: "None", v: "Contract length" },
          { icon: Gauge, k: "$0.02/min", v: "Manual calling" },
          { icon: Sparkles, k: "$0.25/min", v: "AI calling" },
        ].map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm px-4 py-4"
          >
            <s.icon size={16} className="mx-auto text-[#4f5bf0]" />
            <div className="xv-serif mt-2 text-[24px] italic leading-none">
              {s.k}
            </div>
            <div className="mt-1 text-[11px] text-[#0b0b0f]/55 uppercase tracking-[0.12em]">
              {s.v}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ============================= PLANS ============================= */
function Plans() {
  return (
    <section className="py-24 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Plans
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Built to scale
          <span className="italic text-[#0b0b0f]/55"> with you.</span>
        </h2>
      </motion.div>

      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
        {/* Early Access — light */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -3 }}
          className="relative rounded-2xl bg-white border border-black/10 p-8 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="xv-serif text-[38px] leading-none tracking-[-0.02em]">
                Pay as you go
              </h3>
              <p className="mt-4 text-[14px] text-[#0b0b0f]/60 max-w-md leading-relaxed">
                Go live in minutes with free early access. Full platform access,
                no commitments. Just build, test, and pay as you scale.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
              Available
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-5">
            <div>
              <div className="xv-serif text-[34px] leading-none">$0.02</div>
              <div className="text-[11.5px] text-[#0b0b0f]/55 mt-1">
                /min · manual calling
              </div>
            </div>
            <div>
              <div className="xv-serif text-[34px] leading-none">$0.25</div>
              <div className="text-[11.5px] text-[#0b0b0f]/55 mt-1">
                /min · AI calling
              </div>
            </div>
            <div>
              <div className="xv-serif text-[34px] leading-none">$0.03</div>
              <div className="text-[11.5px] text-[#0b0b0f]/55 mt-1">
                /part · SMS
              </div>
            </div>
          </div>

          <a
            href="/v2/contact"
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
          >
            Get Early Access <ArrowRight size={13} />
          </a>

          <div className="mt-8 pt-6 border-t border-black/5">
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
              Key features include
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                "Google Maps lead scraping",
                "Lead enrichment",
                "Manual + AI calling",
                "Live AI rebuttals",
                "Two-way SMS",
                "Campaigns",
                "Google Sheet sync",
                "HubSpot-compatible CSV",
                "Suppression lists",
                "Calling windows + caps",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13.5px] text-[#0b0b0f]/80"
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#4f5bf0] shrink-0 mt-0.5"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Teams — dark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{ y: -3 }}
          className="relative rounded-2xl bg-[#0b1324] text-white border border-white/10 p-8 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 blur-3xl" />
          <div className="relative flex items-start justify-between">
            <div>
              <h3 className="xv-serif text-[38px] leading-none tracking-[-0.02em]">
                Teams Plan
              </h3>
              <p className="mt-4 text-[14px] text-white/60 max-w-md leading-relaxed">
                Built for agencies and sales teams needing shared workspaces,
                roles, and per-organization numbers. Volume pricing as you grow.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full bg-white/10 text-white/80 font-semibold">
              Coming soon
            </span>
          </div>

          <div className="relative mt-6 flex items-baseline gap-10">
            <div>
              <div className="xv-serif text-[34px] leading-none">Custom</div>
              <div className="text-[11.5px] text-white/50 mt-1">
                Pricing for teams
              </div>
            </div>
            <div>
              <div className="xv-serif text-[34px] leading-none">Custom</div>
              <div className="text-[11.5px] text-white/50 mt-1">
                Number pools
              </div>
            </div>
          </div>

          <a
            href="/v2/contact"
            className="relative mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4f5bf0] text-white text-sm font-medium hover:bg-[#3f4ad9] transition"
          >
            Contact Us <ArrowRight size={13} />
          </a>

          <div className="relative mt-8 pt-6 border-t border-white/10">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/50 font-semibold">
              Everything from pay as you go, plus
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[
                "Owner / admin / agent roles",
                "Team invites",
                "Per-organization AI assistants",
                "Per-organization numbers",
                "Number pools",
                "Number health monitoring",
                "Shared suppression lists",
                "Shared pitch-angle rules",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13.5px] text-white/85"
                >
                  <CheckCircle2
                    size={14}
                    className="text-cyan-300 shrink-0 mt-0.5"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ====================== INTERACTIVE ESTIMATOR ====================== */
function Estimator() {
  const [manual, setManual] = useState(300); // minutes
  const [ai, setAi] = useState(60); // minutes
  const [sms, setSms] = useState(250); // parts

  const manualCost = useMemo(() => manual * 0.02, [manual]);
  const aiCost = useMemo(() => ai * 0.25, [ai]);
  const smsCost = useMemo(() => sms * 0.03, [sms]);
  const total = manualCost + aiCost + smsCost;
  const perMin = manual + ai > 0 ? (manualCost + aiCost) / (manual + ai) : 0;

  return (
    <section className="py-28 px-5 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-transparent blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
            Estimate your cost
          </span>
          <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-[-0.03em]">
            How much will
            <br />
            <span className="italic text-[#0b0b0f]/55">
              this month cost?
            </span>
          </h2>
          <p className="mt-5 text-[14.5px] text-[#0b0b0f]/60">
            Drag the sliders. The ledger updates live — no sign-up needed.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-5 items-start">
          {/* Sliders */}
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-white border border-black/10 p-7 shadow-sm"
          >
            <SliderRow
              label="Manual calling"
              unit="minutes"
              icon={Phone}
              rate="$0.02 /min"
              value={manual}
              onChange={setManual}
              min={0}
              max={3000}
              step={30}
              cost={manualCost}
              color="from-[#4f5bf0] to-[#4338ca]"
            />
            <SliderRow
              label="AI qualifier calling"
              unit="minutes"
              icon={Bot}
              rate="$0.25 /min"
              value={ai}
              onChange={setAi}
              min={0}
              max={600}
              step={10}
              cost={aiCost}
              color="from-emerald-400 to-teal-500"
            />
            <SliderRow
              label="Outbound SMS"
              unit="parts"
              icon={MessageSquare}
              rate="$0.03 /part"
              value={sms}
              onChange={setSms}
              min={0}
              max={5000}
              step={50}
              cost={smsCost}
              color="from-amber-400 to-orange-500"
              last
            />
          </motion.div>

          {/* Live total card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-[#0b1324] text-white p-7 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-gradient-to-br from-[#4f5bf0]/40 to-fuchsia-500/20 blur-3xl" />

            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                  This month's total
                </div>
                <motion.div
                  key={total.toFixed(2)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="xv-serif mt-2 text-[72px] leading-none"
                >
                  <span className="text-white/60 text-[36px] mr-1">$</span>
                  {total.toFixed(2)}
                </motion.div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
                Live
              </span>
            </div>

            <div className="relative mt-6 space-y-2.5 text-[13.5px]">
              <Row
                label="Manual calling"
                sub={`${manual} min @ $0.02/min`}
                v={manualCost}
              />
              <Row
                label="AI qualifier"
                sub={`${ai} min @ $0.25/min`}
                v={aiCost}
              />
              <Row
                label="Outbound SMS"
                sub={`${sms} parts @ $0.03/part`}
                v={smsCost}
              />
              <div className="my-2 h-px bg-white/10" />
              <Row
                label="Platform fee"
                sub="Always included"
                v={0}
                dim
              />
              <Row
                label="Contract commitment"
                sub="None"
                v={0}
                dim
                dash
              />
            </div>

            <div className="relative mt-6 pt-5 border-t border-white/10 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 font-semibold">
                  Blended cost / connected minute
                </div>
                <div className="xv-serif text-[28px] italic mt-1">
                  ${perMin.toFixed(3)}
                </div>
              </div>
              <a
                href="/v2/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0b0b0f] text-[13px] font-medium hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition"
              >
                Start free <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SliderRow({
  label,
  unit,
  icon: Icon,
  rate,
  value,
  onChange,
  min,
  max,
  step,
  cost,
  color,
  last,
}: {
  label: string;
  unit: string;
  icon: typeof Phone;
  rate: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  cost: number;
  color: string;
  last?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={last ? "" : "pb-6 mb-6 border-b border-black/5"}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-md`}
          >
            <Icon size={16} />
          </div>
          <div>
            <div className="text-[15px] font-semibold">{label}</div>
            <div className="text-[11.5px] text-[#0b0b0f]/50">{rate}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="xv-serif text-[24px] leading-none italic">
            ${cost.toFixed(2)}
          </div>
          <div className="text-[11px] text-[#0b0b0f]/50 mt-0.5">
            {value.toLocaleString()} {unit}
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <div className="h-2 rounded-full bg-black/5 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color} transition-[width] duration-100`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          aria-label={label}
        />
        <div
          className="absolute -top-1 w-4 h-4 rounded-full bg-white border-2 border-[#0b0b0f] shadow-md pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

function Row({
  label,
  sub,
  v,
  dim,
  dash,
}: {
  label: string;
  sub: string;
  v: number;
  dim?: boolean;
  dash?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={dim ? "text-white/70" : "text-white"}>{label}</div>
        <div className="text-[11px] text-white/45 mt-0.5">{sub}</div>
      </div>
      <div className={dim ? "text-white/60" : "text-white font-medium"}>
        {dash ? "—" : `$${v.toFixed(2)}`}
      </div>
    </div>
  );
}

/* ============================= MATH ============================= */
function Math() {
  const math = [
    {
      label: "Solo caller, light week",
      rows: [
        ["5 hrs manual", "$6.00"],
        ["100 SMS parts", "$3.00"],
      ],
      total: "$9.00",
      tone: "bg-[#f0efff]",
    },
    {
      label: "Agency testing AI qualifiers",
      rows: [
        ["10 hrs manual", "$12.00"],
        ["3 hrs AI", "$45.00"],
        ["400 SMS parts", "$12.00"],
      ],
      total: "$69.00",
      tone: "bg-[#eaf6ef]",
    },
    {
      label: "Manual-only month",
      rows: [["40 hrs manual", "$48.00"]],
      total: "$48.00",
      tone: "bg-[#fff2e8]",
    },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Illustrative math
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          What a month
          <span className="italic text-[#0b0b0f]/55"> could look like.</span>
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
            whileHover={{ y: -4 }}
            className={`rounded-2xl ${m.tone} border border-black/5 p-6 transition hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]`}
          >
            <div className="text-[14px] font-semibold">{m.label}</div>
            <div className="mt-4 space-y-2 text-[13px]">
              {m.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between text-[#0b0b0f]/70"
                >
                  <span>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-black/10 flex justify-between items-baseline">
              <span className="text-[11px] uppercase tracking-[0.15em] text-[#0b0b0f]/50 font-semibold">
                Total
              </span>
              <span className="xv-serif text-[34px] italic">{m.total}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ====================== LEDGER / CALLOUTS ====================== */
function Callouts() {
  return (
    <section className="py-28 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-5 items-stretch">
        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-[#0b1324] text-white p-7 overflow-hidden relative"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="relative text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
            See every charge as it happens
          </div>
          <h3 className="relative xv-serif mt-4 text-[36px] leading-tight tracking-[-0.02em]">
            A per-event
            <span className="italic text-white/70"> usage ledger.</span>
          </h3>
          <div className="relative mt-7 rounded-xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-4 py-3 border-b border-white/10 bg-white/[0.03] text-[11px] uppercase tracking-[0.14em] text-white/50 font-semibold">
              <span>Event</span>
              <span>Qty</span>
              <span className="text-right">Charge</span>
            </div>
            {[
              { e: "AI qualifier · Riverside Plumbing", q: "3.2 min", c: "$0.80" },
              { e: "SMS sent · (512) 555-0183", q: "1 part", c: "$0.03" },
              { e: "Manual call · North Shore Realty", q: "4.6 min", c: "$0.09" },
              { e: "Manual call · Mesa Dental", q: "1.9 min", c: "$0.04" },
              { e: "AI qualifier · Bluefield Ins.", q: "5.4 min", c: "$1.35" },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-4 py-2.5 text-[12.5px] border-b border-white/5 last:border-0"
              >
                <span className="text-white/85 truncate">{r.e}</span>
                <span className="text-white/55">{r.q}</span>
                <span className="text-white text-right font-medium">{r.c}</span>
              </motion.div>
            ))}
          </div>
          <div className="relative mt-5 text-[12px] text-white/50">
            Balance, today's spend, and month-to-date. Voice and SMS tracked
            separately. Rate limits: 20 AI calls and 60 SMS per 60 seconds.
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-2xl bg-[#f6f4ef] border border-black/5 p-7"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#4f5bf0] font-semibold">
            Simple on purpose
          </div>
          <h3 className="xv-serif mt-4 text-[36px] leading-tight tracking-[-0.02em]">
            No minimums.
            <br />
            <span className="italic text-[#0b0b0f]/55">No contracts.</span>
            <br />
            No hidden fees.
          </h3>
          <ul className="mt-7 space-y-3">
            {[
              "Prepaid-style balance display",
              "Pay only for minutes and messages you send",
              "Cancel anytime — top up on your schedule",
              "Billing explained per event, not per invoice",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 text-[14px] text-[#0b0b0f]/80"
              >
                <CheckCircle2
                  size={16}
                  className="text-emerald-500 shrink-0 mt-0.5"
                />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================= EXCLUSIONS ============================= */
function Exclusions() {
  const items = [
    "Telnyx carrier charges (phone numbers, 10DLC registration fees)",
    "Legal review of scripts, lists, or consent practices",
    "Call recording or transcripts — not offered",
    "Native CRM sync — CSV export only",
  ];
  return (
    <section className="py-24 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <div className="text-[11px] uppercase tracking-[0.18em] text-rose-600 font-semibold">
          Not included
        </div>
        <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
          What's outside the meter.
        </h2>
        <ul className="mt-7 space-y-2.5">
          {items.map((e) => (
            <li
              key={e}
              className="flex items-start gap-2.5 text-[14px] text-[#0b0b0f]/70 rounded-xl bg-white border border-black/5 px-4 py-3"
            >
              <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
              {e}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

/* ============================= FAQ ============================= */
function FAQ() {
  const faqs = [
    {
      q: "How is billing calculated?",
      a: "Per minute for manual and AI calls, per carrier-counted part for SMS. Charges post to a per-event usage ledger with balance, today's spend, and month-to-date views.",
    },
    {
      q: "Is there a subscription?",
      a: "No. Usage only — no monthly minimums, no contracts.",
    },
    {
      q: "Is there a free trial or money-back guarantee?",
      a: "Early Access is free to start. You pay only for what you use after that.",
    },
    {
      q: "Do I need to register for 10DLC?",
      a: "Yes — SMS requires 10DLC registration. Telnyx carrier charges apply separately.",
    },
    {
      q: "Who's the phone service provider?",
      a: "Telnyx handles voice, SMS, and AI assistants. You bring your Telnyx account and numbers.",
    },
    {
      q: "What does AI calling cost per minute?",
      a: "$0.25 per minute, billed to the second.",
    },
    {
      q: "Are there spending limits?",
      a: "Rate limits apply to spending routes — 20 AI calls and 60 SMS per 60 seconds — plus the balance display.",
    },
    {
      q: "Does Xovra record calls?",
      a: "No. Call recording and transcripts are not offered.",
    },
    {
      q: "Will pricing change in the future?",
      a: "Rates may change as the product evolves. Existing users will be notified ahead of any update.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Pricing questions,
          <span className="italic text-[#0b0b0f]/55"> answered.</span>
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

/* ============================= CLOSING ============================= */
function Closing() {
  return (
    <section className="py-32 px-5 bg-[#f6f4ef] text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.h2
        {...fadeUp}
        className="xv-serif text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] tracking-[-0.03em] max-w-4xl mx-auto"
      >
        Start free.
        <br />
        <span className="italic text-[#0b0b0f]/55">Pay as you call.</span>
      </motion.h2>
      <p className="mt-7 text-[#0b0b0f]/60 max-w-xl mx-auto">
        Join early access, find leads, make calls, and watch the ledger.
      </p>
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
      <p className="mt-6 text-xs text-[#0b0b0f]/50">
        No contracts. No monthly minimums.
      </p>
    </section>
  );
}

/* ============================= PAGE ============================= */
export default function PricingPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <Plans />
      <Estimator />
      <Math />
      <Callouts />
      <Exclusions />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
