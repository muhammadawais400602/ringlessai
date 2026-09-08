"use client";

import { useState } from "react";
import {
  Check,
  Minus,
  ChevronDown,
  Phone,
  Bot,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const plans = [
  {
    name: "Starter",
    badge: "Solo / Trial",
    badgeColor: "bg-[#e5eeff] text-[#0b1c30]",
    monthlyPrice: 29,
    annualPrice: 20,
    subtitle: "For solo founders and early SDRs testing cold outreach cadence.",
    billingNote: null,
    features: [
      "1,000 Outbound Minutes Included",
      "Manual click-to-call & WebRTC dialer",
      "500 Active Leads management",
      "SMS & Email basic follow-up templates",
      "Standard audio codecs & local caller ID",
      "Email support (24h SLA)",
      "1-Click Voicemail Drop templates",
    ],
    cta: "Get Started with Starter",
    ctaStyle: "outlined" as const,
    highlighted: false,
  },
  {
    name: "Pro Cadence",
    badge: "High Velocity",
    badgeColor: "bg-[#eaddff] text-purple-700",
    monthlyPrice: 49,
    annualPrice: 34,
    subtitle:
      "For aggressive growth teams and high-velocity SDR pods scaling cold volume.",
    billingNote: "billed month-to-month",
    features: [
      "Unlimited Outbound Calling & Smart Voicemail",
      "High-velocity Power & Predictive Dialer",
      "Autonomous AI Voice Calling & Assistant",
      "Live Objection Rebuttals & Real-time AI Copilot",
      "1-Click Outcome Tracking & Dispositions",
      "3-Column Unified Inbox & 1-click SMS",
      "Custom Pitch Assets & Demo Link Dispatch",
      "Priority Slack & Phone Support",
      "Automated AI Voicemail Drop & Detection",
    ],
    cta: "Start 14-Day Free Pro Trial",
    ctaStyle: "filled" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: null,
    badgeColor: "",
    monthlyPrice: null,
    annualPrice: null,
    subtitle:
      "For large outbound call centers and multi-team lead generation agencies.",
    billingNote: null,
    features: [
      "Everything in Pro with no volume caps",
      "Custom Voice Cloning & Fine-tuned Scripts",
      "Dedicated SIP Trunks & Private Carrier Routes",
      "Full A2P 10DLC Campaign & Dedicated DIDs",
      "White-label Domain & Custom Branding",
      "Dedicated 10ms & 99.99% Uptime SLA",
      "Salesforce, HubSpot & Close bi-directional sync",
    ],
    cta: "Contact Sales / Custom Plan",
    ctaStyle: "outlined" as const,
    highlighted: false,
  },
];

const comparisonRows: {
  label: string;
  starter: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}[] = [
  {
    label: "Monthly Outbound Minutes",
    starter: "1000 Included",
    pro: "Unlimited (Fair Use)",
    enterprise: "Custom Pool Volume",
  },
  {
    label: "Overage Cost / Minute",
    starter: "$0.08/min",
    pro: "$0.012/min",
    enterprise: "Volume Negotiated",
  },
  {
    label: "Autonomous AI Voice Calling",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    label: "Voicemail Drops",
    starter: "1-Click Pre-recorded",
    pro: "Automated AI Drops & Detection",
    enterprise: "Custom AI Cloned Voice Drops",
  },
  {
    label: "Real-time Objection Rebuttals",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    label: "Concurrent Outbound Channels",
    starter: "1 Line",
    pro: "3 Lines / Seat",
    enterprise: "Up to 20 Lines / Seat",
  },
  {
    label: "Dedicated SIP Trunks",
    starter: "Shared WebRTC",
    pro: "Telnyx Premium Pooled",
    enterprise: "Private Dedicated Trunks",
  },
  {
    label: "A2P 10DLC Campaign Concierge",
    starter: "Self-Service Portal",
    pro: "Guided Fast-Track",
    enterprise: "Fully Managed Legal Setup",
  },
  {
    label: "Call Recording & Transcript Storage",
    starter: "30 Days",
    pro: "1 Year",
    enterprise: "Unlimited Vault (HIPAA/SOC2)",
  },
  {
    label: "REST API & Webhook Triggers",
    starter: "Zapier Only",
    pro: true,
    enterprise: true,
  },
];

const faqs = [
  {
    q: "Do I need an LLC or registered business to make calls?",
    a: "No, you can start with a personal account. However, for A2P 10DLC compliance and higher throughput, we recommend registering your business. Our compliance team can guide you through the process during onboarding.",
  },
  {
    q: "What SIP provider powers the voice infrastructure?",
    a: "We partner with Telnyx for carrier-grade SIP infrastructure, providing HD voice quality, STIR/SHAKEN attestation, and sub-25ms latency across all tiers. Enterprise customers can bring their own SIP trunks or use dedicated private carrier routes.",
  },
  {
    q: "Is there a free trial, and do I need a credit card?",
    a: "Yes! Pro Cadence includes a 14-day free trial with no credit card required. You get full access to all Pro features including the AI voice assistant, power dialer, and real-time objection rebuttals.",
  },
  {
    q: "How does the CSV lead import work?",
    a: "Upload any CSV file with your lead data and our smart mapper will automatically detect columns like name, phone, email, and company. You can map custom fields, set tags, and assign leads to campaigns in one step.",
  },
  {
    q: "What happens if I exceed my included minutes?",
    a: "Starter plans are charged $0.08/min for overages, while Pro plans enjoy a reduced rate of $0.012/min. Enterprise customers negotiate custom volume pricing. You will receive alerts at 80% and 100% usage thresholds.",
  },
  {
    q: "How do you handle A2P 10DLC and TCPA compliance?",
    a: "We offer tiered compliance support: Starter users access our self-service portal, Pro users get guided fast-track registration, and Enterprise clients receive fully managed legal setup including campaign registration, brand verification, and ongoing compliance monitoring.",
  },
];

const transcriptLines = [
  { speaker: "Prospect", text: "Hello?" },
  {
    speaker: "Vocalis",
    text: "Hi, this is Sarah from Vocalis. I noticed your team is scaling outbound - do you have 30 seconds?",
  },
  {
    speaker: "Prospect",
    text: "We're actually pretty happy with our current setup.",
  },
  {
    speaker: "Vocalis",
    text: "Totally understand. Quick question though - are your reps hitting voicemail on 60-70% of dials? Our clients cut that dead time by 80% with predictive routing.",
  },
  { speaker: "Prospect", text: "That's... actually a huge pain point for us." },
];

/* ------------------------------------------------------------------ */
/*  Helper Components                                                  */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#eaddff]">
        <Check className="w-4 h-4 text-[#630ed4]" />
      </span>
    );
  if (value === false)
    return <Minus className="w-4 h-4 text-[#cbdbf5] mx-auto" />;
  return <span className="text-sm text-[#0b1c30]">{value}</span>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#ccc3d8]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-base font-medium text-[#0b1c30] pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#4a4455] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-[#5e5d6b]">{a}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #213145 0%, #213145 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-purple-400 mb-4">
            Transparent Plans
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Simple, Transparent
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 gradient-text">
            Pricing
          </h1>
          <p className="text-[#cbdbf5] max-w-xl mx-auto mb-10 text-base leading-relaxed">
            Choose the dialer cadence that fits your outbound motion. Scale up
            or down anytime — no contracts, no hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                !annual
                  ? "bg-white text-[#0b1c30] shadow-sm"
                  : "text-[#cbdbf5] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                annual
                  ? "bg-white text-[#0b1c30] shadow-sm"
                  : "text-[#cbdbf5] hover:text-white"
              }`}
            >
              Annual Billing
              <span className="text-[10px] font-bold uppercase tracking-wide bg-[#630ed4] text-white px-2 py-0.5 rounded-full">
                Save 30% + 3 Mo Free
              </span>
            </button>
          </div>
        </div>

        {/* Decorative blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 -mt-6 relative z-20">
        {/* "Most Popular / Best Value" label above middle card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.highlighted && (
                <div className="text-center mb-3">
                  <span className="inline-block text-xs font-bold tracking-[0.1em] uppercase text-[#630ed4] bg-[#eaddff] border border-purple-200 px-4 py-1.5 rounded-full">
                    Most Popular / Best Value
                  </span>
                </div>
              )}
              <div
                className={`rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-purple-500 border-t-4 border-t-[#630ed4] shadow-xl shadow-purple-500/10 bg-white scale-[1.02]"
                    : "border-[#ccc3d8] bg-white hover:shadow-lg"
                }`}
              >
                {/* Plan name & badge */}
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-[#0b1c30]">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${plan.badgeColor}`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-1">
                  {plan.monthlyPrice !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#0b1c30]">
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-[#5e5d6b] text-base">/month</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-extrabold text-[#0b1c30]">
                      Custom
                    </span>
                  )}
                </div>

                {plan.billingNote && !annual && (
                  <p className="text-xs text-[#4a4455] mb-3">
                    {plan.billingNote}
                  </p>
                )}
                {annual && plan.monthlyPrice !== null && (
                  <p className="text-xs text-[#630ed4] font-medium mb-3">
                    billed annually + 3 months free
                  </p>
                )}

                {/* Subtitle */}
                <p className="text-sm text-[#5e5d6b] leading-relaxed mb-6 min-h-[40px]">
                  {plan.subtitle}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#630ed4] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#0b1c30]">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaStyle === "filled" ? (
                  <button className="w-full py-3 px-6 rounded-xl bg-[#630ed4] hover:bg-purple-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="w-full py-3 px-6 rounded-xl border-2 border-[#ccc3d8] hover:border-[#630ed4] text-[#0b1c30] hover:text-[#630ed4] font-semibold text-sm transition-colors cursor-pointer">
                    {plan.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Voice Engine ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #213145, #213145)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-purple-400">
                  Opus HD Voice Engine
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Experience the Opus HD
                <br />
                Voice Engine
              </h2>
              <p className="text-[#cbdbf5] text-sm leading-relaxed mb-8">
                Sub-25ms latency powered by dedicated SIP trunks and edge
                compute. Every call is crystal-clear with STIR/SHAKEN
                attestation, adaptive jitter buffering, and AI-powered noise
                cancellation.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xl font-bold text-white">
                      &lt;25ms
                    </span>
                  </div>
                  <span className="text-[11px] text-[#cbdbf5] uppercase tracking-wide">
                    Response
                  </span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-xl font-bold text-white">99.4%</span>
                  </div>
                  <span className="text-[11px] text-[#cbdbf5] uppercase tracking-wide">
                    VM Detection
                  </span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-xl font-bold text-white">
                      STIR/SHAKEN
                    </span>
                  </div>
                  <span className="text-[11px] text-[#cbdbf5] uppercase tracking-wide">
                    A-Attestation
                  </span>
                </div>
              </div>
            </div>

            {/* Right - Transcript mockup */}
            <div className="bg-black/30 p-10 lg:p-14 flex items-center">
              <div className="w-full space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <Bot className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-medium text-[#cbdbf5] uppercase tracking-wide">
                    Live Call Transcript
                  </span>
                  <span className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[11px] text-green-400">LIVE</span>
                  </span>
                </div>
                {transcriptLines.map((line, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${
                      line.speaker === "Vocalis" ? "pl-6" : ""
                    }`}
                  >
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wide mt-1 shrink-0 w-16 ${
                        line.speaker === "Vocalis"
                          ? "text-purple-400"
                          : "text-[#cbdbf5]"
                      }`}
                    >
                      {line.speaker}
                    </span>
                    <p
                      className={`text-sm leading-relaxed ${
                        line.speaker === "Vocalis"
                          ? "text-white bg-purple-900/30 border border-purple-800/30 rounded-xl px-4 py-2.5"
                          : "text-[#cbdbf5]"
                      }`}
                    >
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <span className="section-label mb-3 inline-block">
            Deep Feature Matrix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30]">
            Compare Platform Capabilities
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#ccc3d8]">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[#ccc3d8] bg-[#eff4ff]">
                <th className="text-left py-4 px-6 text-sm font-semibold text-[#0b1c30]">
                  Core Capabilities
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-[#0b1c30]">
                  Starter
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-[#630ed4] bg-[#eaddff]/50">
                  Pro
                </th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-[#0b1c30]">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#ccc3d8] ${
                    i % 2 === 1 ? "bg-[#eff4ff]/50" : ""
                  }`}
                >
                  <td className="py-4 px-6 text-sm font-medium text-[#0b1c30]">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="py-4 px-6 text-center bg-[#eaddff]/20">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-[#eff4ff] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-block">
              Any Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c30]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#ccc3d8] px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #213145, #213145)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Risk-free. Cancel with 1-click at any time.
          </h2>
          <p className="text-[#cbdbf5] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Start your 14-day free trial today. No credit card required, no
            setup fees, no long-term contracts. Scale your outbound the moment
            you sign up.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#630ed4] hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm cursor-pointer">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
