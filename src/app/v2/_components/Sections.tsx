"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Bot,
  Zap,
  MessageSquare,
  ShieldCheck,
  Search,
  Target,
  LineChart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ---------------- LOGO STRIP ---------------- */
export function LogoStrip() {
  const names = [
    "Riverside",
    "NorthShore",
    "MesaDental",
    "Bluefield",
    "HarborOps",
    "Pinecrest",
    "Sunline",
    "GrandviewCo",
  ];
  return (
    <section className="py-16 px-4 border-y border-white/5 bg-black/20">
      <motion.p
        {...fadeUp}
        className="text-center text-xs uppercase tracking-[0.2em] text-white/40"
      >
        In production at agencies, sales teams, and solos across the US
      </motion.p>
      <div className="mt-8 max-w-6xl mx-auto overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...names, ...names, ...names].map((n, i) => (
            <span
              key={i}
              className="text-xl font-semibold tracking-tight text-white/35 hover:text-white/70 transition"
            >
              {n}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE GRID ---------------- */
const features = [
  {
    icon: MapPin,
    title: "Google Maps Lead Scraping",
    body: "Enter a niche and city. Xovra pulls listings, audits each website, detects Google Ads, and scans social presence — all before you dial.",
    big: true,
    accent: "from-cyan-500/20 to-indigo-500/0",
  },
  {
    icon: Phone,
    title: "Browser-Based Softphone",
    body: "A WebRTC dialer powered by Telnyx. Call from the browser with keyboard shortcuts — C to call, H to hang up, 1–6 to log outcomes.",
    big: true,
    accent: "from-indigo-500/20 to-fuchsia-500/0",
  },
  {
    icon: Bot,
    title: "AI Qualifier Calls",
    body: "A Telnyx AI assistant calls your leads, discloses it's AI in the first sentence, asks qualifying questions, and returns a scored result.",
    accent: "from-fuchsia-500/20 to-rose-500/0",
  },
  {
    icon: Zap,
    title: "Live AI Rebuttals",
    body: "Claude drafts objection handling mid-call using what Xovra already knows — website issues, ad spend, social signals.",
    accent: "from-amber-500/20 to-orange-500/0",
  },
  {
    icon: MessageSquare,
    title: "Two-Way SMS",
    body: "Send and receive texts over Telnyx, threaded by phone number. Opt-out keywords handled automatically.",
    accent: "from-emerald-500/20 to-teal-500/0",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Controls",
    body: "Suppression lists, 8 AM–9 PM calling windows, per-contact attempt caps, and mandatory AI disclosure.",
    accent: "from-cyan-500/20 to-blue-500/0",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28 px-4">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-cyan-300/80">
          Platform
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
          Outbound complexity,
          <br />
          <span className="text-white/50">handled.</span>
        </h2>
        <p className="mt-5 text-white/60 text-base">
          Everything a revenue team needs to go from a Google Maps search to a logged
          outcome — in one workspace.
        </p>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
        {features.map((f, i) => {
          const span = f.big ? "md:col-span-3" : "md:col-span-2";
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group relative ${span} rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden p-6 hover:border-white/20 transition`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-100 transition duration-500`}
              />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition">
                  <f.icon size={18} className="text-white/90" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed max-w-md">
                  {f.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- PIPELINE (How it works) ---------------- */
const pipeline = [
  {
    icon: MapPin,
    step: "01",
    title: "Scrape Leads from Google Maps",
    body: "Enter a niche and city. Xovra pulls business listings and enriches each with a website audit, Google Ads check, and social media scan.",
  },
  {
    icon: Search,
    step: "02",
    title: "Enrich & Score",
    body: "Every lead gets a pitch angle — RUNS_ADS, NO_SITE, WEAK_SITE, or STRONG_SITE — so you know your opening line before you dial.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Call or Deploy AI",
    body: "Dial from the browser softphone, or let a Telnyx AI qualifier do the first call and surface only interested leads.",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Track Outcomes",
    body: "Outcomes sync to Google Sheets in real time. Export a HubSpot-compatible CSV with one click.",
  },
];

export function Pipeline() {
  return (
    <section id="how" className="py-28 px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-40 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[140px] -z-10" />

      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-fuchsia-300/80">
          How it works
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
          From a Maps search
          <br />
          <span className="text-white/50">to a logged outcome.</span>
        </h2>
        <p className="mt-5 text-white/60">Under two minutes, end to end.</p>
      </motion.div>

      <div className="mt-20 max-w-6xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-9 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="grid md:grid-cols-4 gap-6">
          {pipeline.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[72px] h-[72px] mx-auto rounded-full border border-white/15 bg-black/60 backdrop-blur flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-xl" />
                <p.icon size={22} className="relative text-white" />
              </motion.div>
              <div className="mt-5 text-center">
                <div className="text-[11px] tracking-[0.2em] text-white/40">
                  {p.step}
                </div>
                <h3 className="mt-1.5 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PITCH ANGLES ---------------- */
const angles = [
  {
    tag: "RUNS_ADS",
    color: "from-emerald-400 to-teal-500",
    body: "Already runs Google Ads — lead with conversion and landing pages.",
  },
  {
    tag: "NO_SITE",
    color: "from-rose-400 to-red-500",
    body: "No website found — lead with getting online.",
  },
  {
    tag: "WEAK_SITE",
    color: "from-amber-400 to-orange-500",
    body: "Site has HTTPS, mobile, or copyright-year issues.",
  },
  {
    tag: "STRONG_SITE",
    color: "from-cyan-400 to-blue-500",
    body: "Solid site — lead with reviews, social, or ad gaps.",
  },
];

export function Angles() {
  return (
    <section className="py-28 px-4">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-amber-300/80">
          Pitch angles
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
          Know the opening line
          <br />
          <span className="text-white/50">before you dial.</span>
        </h2>
        <p className="mt-5 text-white/60">
          Every lead is auto-tagged with one of four angles, so your rep opens with
          relevance, not a script.
        </p>
      </motion.div>

      <div className="mt-16 max-w-5xl mx-auto grid sm:grid-cols-2 gap-4">
        {angles.map((a, i) => (
          <motion.div
            key={a.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 overflow-hidden group"
          >
            <div
              className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${a.color} opacity-10 blur-3xl group-hover:opacity-25 transition`}
            />
            <span
              className={`inline-block text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full text-black bg-gradient-to-r ${a.color}`}
            >
              {a.tag}
            </span>
            <p className="mt-4 text-white/75 text-[15px] leading-relaxed">{a.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- AI CALLING SPOTLIGHT ---------------- */
export function AISpotlight() {
  return (
    <section className="py-28 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp}>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-cyan-300/80">
            AI Qualifier
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
            24/7 qualifier that
            <br />
            <span className="text-white/50">sounds human.</span>
          </h2>
          <p className="mt-6 text-white/65 text-lg leading-relaxed">
            A Telnyx AI assistant makes the first call, asks qualifying questions, and
            returns a lead score, interest level, and suggested next action.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Discloses it is an AI in the first sentence",
              "Gets per-lead context: name, category, website issues, pitch angle",
              "Sends a follow-up SMS to capture email on connected calls",
              "Reports score 1–10, qualified yes/no, next action",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-white/75">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400 shrink-0 mt-0.5"
                />
                {t}
              </li>
            ))}
          </ul>

          <a
            href="#demo"
            className="mt-9 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-sm transition"
          >
            Hear it in action
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <Orb />
        </motion.div>
      </div>
    </section>
  );
}

function Orb() {
  return (
    <div className="relative w-[360px] h-[360px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-indigo-500 to-fuchsia-500 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-white/10"
        style={{ borderTopColor: "rgba(255,255,255,0.4)" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-14 rounded-full border border-white/10"
        style={{ borderLeftColor: "rgba(168,85,247,0.4)" }}
      />
      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-[0_0_80px_rgba(99,102,241,0.6)] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-black/30 backdrop-blur flex items-center justify-center"
        >
          <Sparkles size={28} />
        </motion.div>
      </div>

      {/* Equalizer bars around orb */}
      <div className="absolute -bottom-2 flex items-end gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [6, 24, 10, 32, 6] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
            className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-fuchsia-400"
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    quote:
      "We used to build call lists by hand. Now the website and ads check shows us the opening line before we ever dial.",
    author: "Agency Owner",
    org: "Digital Marketing Agency",
    stats: [
      { k: "3×", v: "faster list build" },
      { k: "42%", v: "connect rate" },
      { k: "6", v: "reps live on day 1" },
    ],
  },
  {
    quote:
      "The keyboard shortcuts and instant logging to the sheet are the whole reason I stopped using my old dialer.",
    author: "Sales Rep",
    org: "Insurance Lead Gen Team",
    stats: [
      { k: "1 key", v: "per outcome" },
      { k: "<2m", v: "search to first dial" },
      { k: "24/7", v: "AI qualifier backup" },
    ],
  },
  {
    quote:
      "AI disclosure on every call and the ability to review qualifier scores afterward — exactly the compliance posture we needed.",
    author: "Sales Manager",
    org: "Real Estate Brokerage",
    stats: [
      { k: "100%", v: "AI disclosure" },
      { k: "4", v: "pitch angles" },
      { k: "0", v: "manual logs" },
    ],
  },
];

export function Testimonials() {
  return (
    <section id="compare" className="py-28 px-4">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Real talk
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
          Real talk,
          <br />
          <span className="text-white/50">real impact.</span>
        </h2>
      </motion.div>

      <div className="mt-16 max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col"
          >
            <p className="text-white/85 text-[15px] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-sm font-medium">{t.author}</div>
              <div className="text-xs text-white/50">{t.org}</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {t.stats.map((s) => (
                <div
                  key={s.v}
                  className="rounded-lg bg-white/[0.03] border border-white/5 p-2.5 text-center"
                >
                  <div className="text-base font-semibold bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                    {s.k}
                  </div>
                  <div className="mt-0.5 text-[10px] text-white/50 leading-tight">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- USE CASES ---------------- */
const useCases = [
  { label: "Small Business", icon: Target },
  { label: "Sales Teams", icon: Phone },
  { label: "Lead Gen Agencies", icon: LineChart },
  { label: "Real Estate", icon: MapPin },
  { label: "Insurance Agents", icon: ShieldCheck },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 border-y border-white/5 bg-black/20">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
          Built for the teams
          <span className="text-white/50"> that live on the dialer.</span>
        </h2>
      </motion.div>
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-3">
        {useCases.map((u, i) => (
          <motion.a
            key={u.label}
            href="#"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="group flex flex-col items-center gap-2 py-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition"
          >
            <u.icon size={18} className="text-white/60 group-hover:text-white transition" />
            <span className="text-xs font-medium text-white/80">{u.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- COMPLIANCE ---------------- */
export function Compliance() {
  const items = [
    "8 AM – 9 PM calling windows",
    "Per-contact attempt caps",
    "Suppression lists",
    "Mandatory AI disclosure",
  ];
  return (
    <section className="py-28 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(34,211,238,0.12), transparent 60%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <ShieldCheck size={24} className="mx-auto text-cyan-300" />
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em]">
          Compliance built-in,
          <br />
          <span className="text-white/50">not bolted on.</span>
        </h2>
        <p className="mt-5 text-white/60">
          Xovra enforces the controls your legal team already asked about. You stay
          responsible for SMS registration (10DLC) and local rules.
        </p>
      </motion.div>

      <div className="mt-14 max-w-4xl mx-auto grid sm:grid-cols-2 gap-3">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
          >
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span className="text-sm text-white/85">{t}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CLOSING CTA ---------------- */
export function ClosingCTA() {
  return (
    <section id="early-access" className="py-32 px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-fuchsia-500/20 blur-[140px]" />
      </div>
      <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1]">
          Ready to start
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            calling smarter?
          </span>
        </h2>
        <p className="mt-6 text-white/60">
          Usage-based pricing. No contracts. Cancel anytime.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium text-sm hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition"
          >
            Get Early Access <ArrowRight size={14} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-sm transition"
          >
            Book a Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 px-4 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]">
              <span className="text-black font-black text-[13px]">X</span>
            </div>
            <span className="font-semibold tracking-tight">Xovra</span>
          </div>
          <p className="mt-4 text-sm text-white/55 max-w-xs leading-relaxed">
            AI-powered outbound calling for revenue teams that refuse to lose.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>

        <FooterCol
          title="Product"
          links={["Features", "Pricing", "Integrations", "Compliance"]}
        />
        <FooterCol
          title="Use Cases"
          links={[
            "Small Business",
            "Sales Teams",
            "Lead Gen Agencies",
            "Real Estate",
            "Insurance Agents",
          ]}
        />
        <FooterCol
          title="Company"
          links={["About", "Contact", "Demo", "Privacy", "Terms"]}
        />
      </div>

      <div className="mt-16 pt-6 border-t border-white/5 max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3 text-xs text-white/40">
        <span>© 2026 Xovra. All rights reserved.</span>
        <span>Find Leads. Call Them. Close Deals.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.18em] text-white/40">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
