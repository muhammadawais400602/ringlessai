"use client";

import Nav from "../_components/Nav";
import { Footer } from "../_components/Sections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Bot,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Plus,
  Minus,
  Users,
  Briefcase,
  User,
  Zap,
  Star,
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
        Live Platform Demo
      </motion.span>
      <motion.h1
        {...fadeUp}
        className="xv-serif mt-6 text-[48px] sm:text-[68px] lg:text-[92px] leading-[0.94] tracking-[-0.03em] max-w-5xl mx-auto"
      >
        See Xovra find and call
        <br />
        <span className="italic text-[#0b0b0f]/60">a real lead — live.</span>
      </motion.h1>
      <motion.p
        {...fadeUp}
        className="mt-8 text-[17px] text-[#0b0b0f]/65 max-w-2xl mx-auto leading-[1.55]"
      >
        In 20 minutes we scrape Google Maps leads, enrich and score them, place
        a manual browser call, run an AI qualifier call, and send a follow-up
        SMS — all on your niche, your city.
      </motion.p>
      <motion.div {...fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href="#scheduler"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Book Your Demo Below <ArrowRight size={14} />
        </a>
        <a
          href="/v2/contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
        >
          Have a Question First?
        </a>
      </motion.div>
      <motion.div
        {...fadeUp}
        className="mt-10 flex flex-wrap justify-center gap-2 text-[12.5px]"
      >
        {["20-minute walkthrough", "No slides, no pitch deck", "Your leads, your niche"].map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-black/5 text-[#0b0b0f]/70"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {b}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ============================== AGENDA ============================== */
function Agenda() {
  const steps = [
    {
      icon: MapPin,
      t: "Live Google Maps scrape",
      b: "Pick a niche and city. Leads fill in with name, phone, website, rating, reviews. Enrichment scores every lead and assigns a pitch angle.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Phone,
      t: "Manual call from the browser",
      b: "Telnyx WebRTC softphone, lead card, and live AI rebuttal panel. No downloads.",
      color: "from-indigo-400 to-fuchsia-500",
    },
    {
      icon: Bot,
      t: "AI qualifier call",
      b: "Telnyx AI assistant dials, discloses it is AI, pitches using lead context, scores interest, logs the outcome.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: MessageSquare,
      t: "Two-way SMS follow-up",
      b: "A follow-up text after a connected call. STOP / UNSUBSCRIBE opt-out detection. Replies land in the lead timeline.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Sparkles,
      t: "Campaign setup",
      b: "Manual or AI mode, brief and greeting, calling windows, suppression. You leave with a working campaign.",
      color: "from-rose-400 to-pink-500",
    },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef] border-y border-black/5">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          The 20-minute agenda
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-[-0.03em]">
          Five live moments.
          <br />
          <span className="italic text-[#0b0b0f]/55">No slides.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-5xl mx-auto relative">
        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#4f5bf0]/60 via-[#a855f7]/40 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex items-start gap-5 pb-5 last:pb-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`relative shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg z-10`}
            >
              <s.icon size={18} className="text-white" />
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-30`}
              />
            </motion.div>
            <div className="flex-1 rounded-2xl bg-white border border-black/5 shadow-sm p-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#0b0b0f]/40 font-semibold">
                Minute {String(i * 4 + 1).padStart(2, "0")} – {String((i + 1) * 4).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[20px] font-semibold xv-serif tracking-[-0.015em]">
                {s.t}
              </div>
              <div className="mt-2 text-[14px] text-[#0b0b0f]/60 leading-relaxed">
                {s.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================= SCHEDULER MOCK ============================= */
function Scheduler() {
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  const times = ["9:00 AM", "9:30 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  const days = Array.from({ length: 30 }).map((_, i) => i + 1);

  return (
    <section
      id="scheduler"
      className="py-32 px-5 bg-white relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-[#eef0ff] via-transparent to-[#ffeef7] blur-3xl -z-10 opacity-60" />

      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Pick a time that works
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl lg:text-[60px] leading-[0.98] tracking-[-0.03em]">
          20-minute live demo.
          <br />
          <span className="italic text-[#0b0b0f]/55">No commitment.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-14 max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-5"
      >
        <div className="rounded-3xl bg-white border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="text-[14px] font-semibold">November 2026</div>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-full hover:bg-black/5 text-[#0b0b0f]/60 flex items-center justify-center">
                ‹
              </button>
              <button className="w-7 h-7 rounded-full hover:bg-black/5 text-[#0b0b0f]/60 flex items-center justify-center">
                ›
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1 text-[10.5px] text-[#0b0b0f]/40 uppercase tracking-[0.1em] font-semibold text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-1">
            {days.map((d) => {
              const active = d === selectedDate;
              const past = d < 16;
              return (
                <motion.button
                  key={d}
                  whileHover={!past ? { scale: 1.08 } : {}}
                  disabled={past}
                  onClick={() => setSelectedDate(d)}
                  className={`aspect-square rounded-lg text-[13px] font-medium transition flex items-center justify-center ${
                    active
                      ? "bg-[#0b0b0f] text-white shadow"
                      : past
                        ? "text-[#0b0b0f]/25 cursor-not-allowed"
                        : "text-[#0b0b0f] hover:bg-[#f6f4ef]"
                  }`}
                >
                  {d}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl bg-[#0b1324] text-white p-6 sm:p-7 overflow-hidden relative">
          <div className="pointer-events-none absolute -top-16 -right-16 w-60 h-60 rounded-full bg-gradient-to-br from-[#4f5bf0]/30 to-fuchsia-500/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold">
              <Clock size={13} /> Available · EST
            </div>
            <div className="mt-2 xv-serif text-[28px] italic leading-none">
              Nov {selectedDate}
            </div>
          </div>
          <div className="relative mt-5 grid grid-cols-2 gap-2">
            {times.map((t, i) => {
              const active = selectedTime === t;
              return (
                <motion.button
                  key={t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedTime(t)}
                  className={`py-3 rounded-xl text-[13px] font-medium transition ${
                    active
                      ? "bg-white text-[#0b0b0f] shadow"
                      : "bg-white/[0.06] border border-white/10 hover:bg-white/[0.12]"
                  }`}
                >
                  {t}
                </motion.button>
              );
            })}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative mt-5 w-full py-3.5 rounded-xl bg-[#4f5bf0] text-white font-medium text-[14px] inline-flex items-center justify-center gap-2 hover:bg-[#3f4ad9] transition"
          >
            Confirm {selectedTime} on Nov {selectedDate}
            <ArrowRight size={14} />
          </motion.button>
          <div className="relative mt-3 flex items-center justify-between text-[11px] text-white/50">
            <span>20 min · no commitment</span>
            <span className="inline-flex items-center gap-1 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Live rep
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================== WHO BOOKS ============================== */
function WhoBooks() {
  const roles = [
    {
      icon: User,
      t: "Solo operators and small teams",
      b: "Find and call leads with less manual work.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Briefcase,
      t: "Agency owners",
      b: "Multi-client outbound, per-org separation, dedicated numbers, campaign control.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Sparkles,
      t: "Founders testing outbound",
      b: "See a real AI call before spending budget.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Users,
      t: "Sales team leads",
      b: "Lead context and live rebuttals during calls.",
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Who books a demo
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Four shapes
          <span className="italic text-[#0b0b0f]/55"> of outbound.</span>
        </h2>
      </motion.div>
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((r, i) => (
          <motion.div
            key={r.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition bg-white"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={r.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center">
                <r.icon size={14} />
              </div>
              <div className="mt-2.5 xv-serif text-[22px] leading-tight tracking-[-0.015em]">
                {r.t}
              </div>
              <div className="mt-1 text-[12px] text-white/80 leading-snug">
                {r.b}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================= PREP ============================= */
function Prep() {
  const items = [
    "Pick a niche and city (any Google Maps category)",
    "Optionally bring a lead list — CSV or Google Sheet import",
    "Questions on compliance, AI calling costs, SMS setup, or multi-tenant orgs",
  ];
  return (
    <section className="py-24 px-5 bg-white">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          How to prepare
        </span>
        <h2 className="xv-serif mt-3 text-3xl sm:text-4xl leading-tight tracking-[-0.02em]">
          All optional,
          <span className="italic text-[#0b0b0f]/55"> all helpful.</span>
        </h2>
        <ul className="mt-7 space-y-2.5">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-xl bg-[#f6f4ef] border border-black/5 px-5 py-3.5 text-[14px] text-[#0b0b0f]/80"
            >
              <CheckCircle2
                size={16}
                className="text-[#4f5bf0] shrink-0 mt-0.5"
              />
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
    { q: "How long is the demo?", a: "20 minutes. We can run short on time if your questions wrap up early." },
    { q: "Is this a sales call?", a: "No. It's a hands-on walkthrough of the platform on your niche and city. Pricing is on the pricing page — we won't push a plan." },
    { q: "Do I need to prepare anything?", a: "No. Pick a niche and city ahead if you want, or we'll pick one together on the call." },
    { q: "What does it cost after the demo?", a: "Usage-based — $0.02/min manual, $0.25/min AI, $0.03/SMS. No seat fee, no contracts." },
    { q: "Do you integrate with my CRM?", a: "No native CRM sync today — Google Sheets integration plus HubSpot-format CSV export. Zapier and CRM sync are on the roadmap." },
    { q: "Can I bring my team?", a: "Yes. Share the calendar invite with as many teammates as you want." },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 px-5 bg-[#f6f4ef]">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold">
          Demo FAQ
        </span>
        <h2 className="xv-serif mt-4 text-4xl sm:text-5xl leading-[1] tracking-[-0.02em]">
          Common questions.
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
        Ready to see
        <br />
        <span className="italic text-[#0b0b0f]/55">it live?</span>
      </motion.h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="#scheduler"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0b0b0f] text-white text-sm font-medium hover:bg-black transition"
        >
          Book a Demo <ArrowRight size={14} />
        </a>
        <a
          href="/v2/pricing"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#0b0b0f]/15 bg-white text-sm hover:border-[#0b0b0f]/40 transition"
        >
          Get Early Access
        </a>
      </div>
    </section>
  );
}

/* ============================= PAGE ============================= */
export default function DemoPage() {
  return (
    <main className="relative bg-white text-[#0b0b0f]">
      <Nav />
      <Hero />
      <Agenda />
      <Scheduler />
      <WhoBooks />
      <Prep />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
}
