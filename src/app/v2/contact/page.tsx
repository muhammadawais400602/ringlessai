"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  LifeBuoy,
  Megaphone,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Server,
  Phone,
  Zap,
  Sparkles,
  ChevronDown,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
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
    <section className="relative px-5 sm:px-8 pt-24 pb-16 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-160px] w-[1100px] h-[700px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
      </div>

      <motion.span
        {...fadeUp}
        className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
      >
        Contact Us
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-6 text-[52px] sm:text-[76px] lg:text-[100px] leading-[0.94] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        Talk to a real person
        <br />
        <span className="italic text-[#0b0b0f]/60">
          about your outbound goals.
        </span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-8 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]"
      >
        First-time cold campaign or 50-seat call center — we&apos;ll help you
        set up, scale, and stay compliant.
      </motion.p>

      {/* Floating badges */}
      <motion.div
        {...fadeUp}
        className="mt-9 flex flex-wrap items-center justify-center gap-2"
      >
        {[
          { icon: Phone, label: "Direct Routing" },
          { icon: Clock, label: "Avg Response < 8m" },
        ].map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-black/5 text-[12.5px] text-[#0b0b0f]/80 shadow-sm"
          >
            <b.icon size={13} className="text-[#4f5bf0]" />
            {b.label}
          </span>
        ))}
      </motion.div>

      {/* Animated orbit decorator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto mt-14 w-[320px] h-[160px]"
      >
        <OrbitWave />
      </motion.div>
    </section>
  );
}

function OrbitWave() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-[#4f5bf0]/15"
        style={{
          WebkitMask: "radial-gradient(circle, transparent 42%, black 44%)",
          mask: "radial-gradient(circle, transparent 42%, black 44%)",
        }}
      />
      <div className="absolute inset-x-6 top-1/2 flex items-end justify-between gap-1">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [4, 22, 8, 32, 4] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            className="w-1 rounded-full bg-gradient-to-t from-[#4f5bf0] to-[#a855f7]"
          />
        ))}
      </div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)]"
      >
        <MessageSquare size={18} className="text-white" />
      </motion.div>
    </div>
  );
}

/* ============================== EMAIL CARDS ============================== */
function EmailCards() {
  const cards = [
    {
      icon: Mail,
      label: "Sales & Enterprise",
      email: "sales@xovra.ai",
      sub: "Multi-seat demos, custom SIP setup",
      color: "from-indigo-400 to-fuchsia-500",
      accent: "bg-[#f0efff]",
    },
    {
      icon: LifeBuoy,
      label: "Technical Support & 10DLC",
      email: "support@xovra.ai",
      sub: "A2P registration, carrier issues, API questions",
      color: "from-emerald-400 to-teal-500",
      accent: "bg-[#eaf6ef]",
    },
    {
      icon: Megaphone,
      label: "Press & Partnerships",
      email: "press@xovra.ai",
      sub: "Media, integrations, co-marketing",
      color: "from-amber-400 to-orange-500",
      accent: "bg-[#fff2e8]",
    },
  ];
  return (
    <section className="py-24 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Direct email
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Three inboxes,
          <span className="italic text-[#0b0b0f]/55"> the right one.</span>
        </h2>
      </motion.div>

      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.a
            key={c.email}
            href={`mailto:${c.email}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative rounded-2xl ${c.accent} border border-black/5 p-6 overflow-hidden transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
          >
            <div
              className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${c.color} opacity-10 blur-2xl group-hover:opacity-25 transition`}
            />
            <motion.div
              whileHover={{ rotate: 8 }}
              className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-md`}
            >
              <c.icon size={17} className="text-white" />
            </motion.div>
            <div className="relative mt-5 text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/50 font-semibold">
              {c.label}
            </div>
            <div className="relative mt-1 xv-serif text-[24px] italic text-[#0b0b0f]">
              {c.email}
            </div>
            <div className="relative mt-2 text-[13px] text-[#0b0b0f]/60 leading-snug">
              {c.sub}
            </div>
            <div className="relative mt-5 inline-flex items-center gap-1 text-[12.5px] text-[#0b0b0f] group-hover:translate-x-0.5 transition font-medium">
              Compose <ArrowRight size={12} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ================================ FORM ================================ */
const inquiries = [
  "Book an Enterprise Demo (Multi-Seat)",
  "High-Volume Minutes & Custom SIP Setup",
  "A2P 10DLC Registration Help",
  "AI Voice Agent Configuration",
  "General Integration & API Questions",
];
const countries = [
  { c: "+1", flag: "🇺🇸" },
  { c: "+44", flag: "🇬🇧" },
  { c: "+61", flag: "🇦🇺" },
  { c: "+49", flag: "🇩🇪" },
];

function FormSection() {
  const [country, setCountry] = useState("+1");
  const [inquiry, setInquiry] = useState(inquiries[0]);
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <section className="py-32 px-5 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-[#eef0ff] via-transparent to-[#ffeef7] blur-3xl -z-10 opacity-60" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-white border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8 sm:p-10"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
                Tell us what you&apos;re working on
              </div>
              <h2 className="xv-serif mt-3 text-[40px] leading-[1.02] tracking-[-0.02em]">
                A real reply.
                <span className="italic text-[#0b0b0f]/55"> From a real person.</span>
              </h2>
            </div>
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Rep available
            </motion.span>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid sm:grid-cols-2 gap-4"
          >
            <Field
              id="name"
              label="Full Name"
              required
              focus={focus}
              setFocus={setFocus}
            >
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] text-[#0b0b0f] placeholder:text-[#0b0b0f]/35 transition"
                onFocus={() => setFocus("name")}
                onBlur={() => setFocus(null)}
              />
            </Field>

            <Field id="email" label="Work Email" required focus={focus} setFocus={setFocus}>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] placeholder:text-[#0b0b0f]/35 transition"
                onFocus={() => setFocus("email")}
                onBlur={() => setFocus(null)}
              />
            </Field>

            <Field id="company" label="Company & SDR Team Size" focus={focus} setFocus={setFocus}>
              <input
                type="text"
                placeholder="Acme Co. · 8 reps"
                className="w-full px-4 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] placeholder:text-[#0b0b0f]/35 transition"
                onFocus={() => setFocus("company")}
                onBlur={() => setFocus(null)}
              />
            </Field>

            <Field id="phone" label="Phone Number" focus={focus} setFocus={setFocus}>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 text-[14px] outline-none focus:border-[#0b0b0f]/50 transition"
                  >
                    {countries.map((c) => (
                      <option key={c.c} value={c.c}>
                        {c.flag} {c.c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={13}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0b0b0f]/50 pointer-events-none"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] placeholder:text-[#0b0b0f]/35 transition"
                  onFocus={() => setFocus("phone")}
                  onBlur={() => setFocus(null)}
                />
              </div>
            </Field>

            <Field
              id="inquiry"
              label="Inquiry Focus"
              required
              full
              focus={focus}
              setFocus={setFocus}
            >
              <div className="flex flex-wrap gap-2">
                {inquiries.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setInquiry(opt)}
                    className={`text-[12.5px] px-3 py-2 rounded-full border transition ${inquiry === opt ? "bg-[#0b0b0f] text-white border-[#0b0b0f]" : "bg-[#f6f4ef] text-[#0b0b0f]/75 border-black/10 hover:border-black/30"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Field>

            <Field
              id="project"
              label="Project Details & Volume Target"
              required
              full
              focus={focus}
              setFocus={setFocus}
            >
              <textarea
                rows={4}
                placeholder="Niche + city, rough volume, stack you already use…"
                className="w-full px-4 py-3 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] placeholder:text-[#0b0b0f]/35 transition resize-none"
                onFocus={() => setFocus("project")}
                onBlur={() => setFocus(null)}
              />
            </Field>

            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-[11.5px] text-[#0b0b0f]/50">
                Your data stays private · No spam, ever.
              </span>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b0b0f] text-white text-[14px] font-medium hover:bg-black transition"
              >
                Send Message <ArrowRight size={14} />
              </motion.button>
            </div>
          </form>

          {/* Trust strip */}
          <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-3 gap-4">
            {[
              { icon: Sparkles, t: "Usage-Based", s: "Pay only for what you use" },
              { icon: ShieldCheck, t: "Compliant", s: "Suppression + windows" },
              { icon: FileSpreadsheet, t: "Exports", s: "Google Sheets + CSV" },
            ].map((n) => (
              <div
                key={n.t}
                className="flex items-start gap-2.5"
              >
                <n.icon size={14} className="text-[#4f5bf0] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[12.5px] font-semibold">{n.t}</div>
                  <div className="text-[11px] text-[#0b0b0f]/50">{n.s}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Side cards */}
        <div className="space-y-5">
          {/* NOC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl bg-[#0b1324] text-white p-6 overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 blur-3xl" />
            <div className="relative flex items-center gap-2 text-cyan-300 text-[11px] uppercase tracking-[0.18em] font-semibold">
              <Server size={13} />
              Telecom NOC · 99.99% SLA
            </div>
            <h3 className="xv-serif mt-4 text-[26px] leading-tight tracking-[-0.015em]">
              24/7/365 active monitoring.
              <span className="italic text-white/60">
                {" "}
                Auto-failover across 14 carrier routes.
              </span>
            </h3>
            <div className="relative mt-5 flex items-center gap-1 h-9">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.03,
                  }}
                  className="w-0.5 h-full rounded-full bg-cyan-400"
                  style={{ height: `${30 + (i % 7) * 10}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Engineering walkthrough */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative rounded-2xl bg-white border border-black/5 shadow-sm p-6"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#4f5bf0] font-semibold">
              <Zap size={13} /> Live walkthrough
            </div>
            <h3 className="xv-serif mt-3 text-[24px] leading-tight tracking-[-0.015em]">
              15 min with our Head of Solutions
            </h3>
            <p className="mt-3 text-[13.5px] text-[#0b0b0f]/60 leading-relaxed">
              See the AI rebuttal engine and Telnyx setup live. Bring one real
              niche and we&apos;ll run a Maps scrape with you on the call.
            </p>
            <a
              href="/v2/demo"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0b0b0f] text-white text-[13px] font-medium hover:bg-black transition"
            >
              Book a Live Demo <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Remote-first */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative rounded-2xl bg-[#f6f4ef] border border-black/5 p-6"
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-semibold">
              <Globe2 size={13} /> Remote-first
            </div>
            <div className="mt-3 xv-serif text-[22px] leading-tight tracking-[-0.015em]">
              We respond fast
              <span className="italic text-[#0b0b0f]/55"> wherever you are.</span>
            </div>
            <div className="mt-5 flex items-center gap-2 text-[11px] text-[#0b0b0f]/55">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  full,
  focus,
  setFocus: _setFocus,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  full?: boolean;
  focus: string | null;
  setFocus: (s: string | null) => void;
  children: React.ReactNode;
}) {
  const active = focus === id;
  return (
    <motion.div
      animate={{ y: active ? -2 : 0 }}
      transition={{ duration: 0.2 }}
      className={`${full ? "sm:col-span-2" : ""}`}
    >
      <label
        htmlFor={id}
        className="block text-[11.5px] uppercase tracking-[0.15em] text-[#0b0b0f]/55 font-semibold mb-2"
      >
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      {children}
    </motion.div>
  );
}

/* ============================= CLOSING ============================= */
function Closing() {
  return (
    <section className="py-32 px-5 bg-[#f6f4ef] text-center relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-[#eef0ff] via-[#f5edff] to-[#ffeef7] blur-3xl -z-10" />
      <motion.div
        {...fadeUp}
        className="relative max-w-3xl mx-auto"
      >
        <h2 className="xv-serif text-5xl sm:text-7xl leading-[0.95] tracking-[-0.03em]">
          Or just
          <span className="italic text-[#0b0b0f]/55"> start dialing.</span>
        </h2>
        <p className="mt-7 text-[#0b0b0f]/60 max-w-xl mx-auto">
          Join early access. Find leads, make calls, watch the ledger.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/v2/pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
          >
            Start Free Trial <ArrowRight size={14} />
          </a>
          <a
            href="/v2/demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
          >
            Book a Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================= PAGE ============================= */
export default function ContactPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <EmailCards />
      <FormSection />
      <Closing />
      <Footer />
    </main>
  );
}
