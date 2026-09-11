"use client";

import { useState } from "react";
import {
  Check,
  Minus,
  ChevronDown,
  Zap,
  ArrowRight,
  Shield,
  BadgeCheck,
  CheckCircle2,
  Radio,
  Gauge,
  Ear,
  Lock,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    badge: "Solo / Early-Stage",
    badgeColor: "bg-[#e5eeff] text-[#4a4455]",
    monthlyPrice: 29,
    annualPrice: 23,
    subtitle:
      "For solo founders, small agencies, and SDRs testing outbound campaigns.",
    annualBillingNote: "billed $276 annually",
    monthlyBillingNote: "billed month-to-month",
    features: [
      "1,000 outbound minutes included",
      "Manual click-to-call with WebRTC softphone",
      "Up to 500 active leads",
      "1-click pre-recorded voicemail drop",
      "Basic SMS and email follow-up templates",
      "Local caller ID matching",
      "Email support (24h response)",
    ],
    icon: "check" as const,
    cta: "Get Started with Starter",
    ctaStyle: "surface" as const,
    highlighted: false,
  },
  {
    name: "Pro Cadence",
    badge: "Most Popular",
    badgeColor: "bg-[#e3e0f1] text-[#630ed4]",
    monthlyPrice: 49,
    annualPrice: 39,
    subtitle:
      "For growing sales teams and agencies running high-volume outbound campaigns.",
    annualBillingNote: "billed $468 annually",
    monthlyBillingNote: "billed month-to-month",
    features: [
      "Unlimited outbound calling + voicemail drops",
      "AI voice agent for autonomous first-touch calls",
      "Power dialer with local presence (85%+ answer rate)",
      "Live objection rebuttals (AI Copilot)",
      "1-click call dispositions + outcome tracking",
      "Unified inbox with SMS, call recordings, and AI transcripts",
      "Automated follow-up via SMS, email, and WhatsApp",
      "10DLC guided campaign registration",
      "Priority support (Slack + phone)",
    ],
    icon: "verified" as const,
    cta: "Start 14-Day Free Pro Trial",
    ctaStyle: "primary" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    badge: "High Capacity",
    badgeColor: "bg-[#e5eeff] text-[#0b1c30]",
    monthlyPrice: null,
    annualPrice: null,
    subtitle:
      "For large call centers, multi-team agencies, and high-volume lead generation operations.",
    annualBillingNote: null,
    monthlyBillingNote: null,
    pricingSubtitle: "Tiered volume discounts & multi-seat pools",
    features: [
      "Everything in Pro with no volume limits",
      "Custom AI voice cloning for your brand",
      "Dedicated SIP trunks and private carrier routes",
      "Full A2P 10DLC setup and compliance management",
      "White-label branding and custom domain",
      "Salesforce, HubSpot, and Close.io bi-directional sync",
      "Dedicated account manager",
      "99.99% uptime SLA",
    ],
    icon: "shield" as const,
    cta: "Contact Sales / Custom Plan",
    ctaStyle: "dark" as const,
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
    starter: "1,000 Included",
    pro: "Unlimited (Fair Use)",
    enterprise: "Custom Pool Volume",
  },
  {
    label: "Overage Cost / Minute",
    starter: "$0.018/min",
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
    label: "Voicemail Drops (Automated & 1-Click)",
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
    q: "Do I need a registered business to start?",
    a: "No. For outbound voice calls, you can start immediately as an individual. If you plan to send SMS campaigns under your brand name, FCC regulations require an EIN for A2P 10DLC registration. Dialeads walks you through this in under 3 minutes inside your account settings.",
  },
  {
    q: "What powers the voice calls?",
    a: "Dialeads uses Telnyx carrier-grade infrastructure with Opus HD voice over WebRTC, delivering sub-25ms latency with global points of presence. Every call sounds crystal clear.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The Pro plan includes a full 14-day free trial with 250 calling minutes and complete access to the AI voice agent and live objection copilot. No credit card required.",
  },
  {
    q: "How does CSV lead import work?",
    a: "Import up to 250,000 leads per file. Dialeads auto-formats phone numbers, scrubs against DNC databases, and maps custom columns like Prospect Title or Target Pain Point. Ready to dial in minutes.",
  },
  {
    q: "What happens if I go over my included minutes?",
    a: "You'll never get cut off. Overages bill at a flat rate — $0.018/min on Starter, $0.012/min on Pro. You can set a hard spending cap inside your billing dashboard.",
  },
  {
    q: "How does Dialeads handle TCPA compliance?",
    a: "Built-in compliance tools include: time-zone-based calling windows (8am–9pm local), instant SMS opt-out handling, automatic DNC suppression, and STIR/SHAKEN A-level caller ID signing.",
  },
];

function FeatureIcon({ type }: { type: "check" | "verified" | "shield" }) {
  if (type === "verified")
    return <BadgeCheck className="w-5 h-5 text-[#630ed4] shrink-0 mt-0.5" />;
  if (type === "shield")
    return <Shield className="w-5 h-5 text-[#630ed4] shrink-0 mt-0.5" />;
  return <CheckCircle2 className="w-5 h-5 text-[#630ed4] shrink-0 mt-0.5" />;
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#eaddff]">
        <Check className="w-4 h-4 text-[#630ed4]" />
      </span>
    );
  if (value === false)
    return <Minus className="w-4 h-4 text-[#ccc3d8] mx-auto" />;
  return <span className="text-sm text-[#0b1c30]">{value}</span>;
}

const waveHeights = [
  "h-4",
  "h-8",
  "h-12",
  "h-6",
  "h-10",
  "h-14",
  "h-8",
  "h-5",
  "h-11",
  "h-7",
  "h-3",
  "h-9",
];
const waveColors = [
  "bg-[#d2bbff]",
  "bg-[#7c3aed]",
  "bg-[#630ed4]",
  "bg-[#d2bbff]",
  "bg-[#7c3aed]",
  "bg-[#630ed4]",
  "bg-[#7c3aed]",
  "bg-[#d2bbff]",
  "bg-[#630ed4]",
  "bg-[#7c3aed]",
  "bg-[#d2bbff]",
  "bg-[#630ed4]",
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f9ff]">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[22rem] bg-[#7c3aed]/10 rounded-full blur-[90px] -z-10" />
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold tracking-[0.08em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#630ed4] animate-ping" />
            <span>Transparent Pricing. No Surprises.</span>
          </div>

          <h1 className="text-4xl md:text-[72px] md:leading-[76px] font-bold tracking-tight text-[#0b1c30] mb-4 max-w-4xl mx-auto">
            Pick the Plan That Matches Your{" "}
            <span className="text-[#630ed4]">Dial Volume</span>
          </h1>

          <p className="text-[#4a4455] max-w-2xl mx-auto mb-10 text-lg leading-7">
            Whether you&apos;re a solo agency owner or running a 50-seat call
            center — Dialeads has a plan that scales with your outbound volume.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#dce9ff] shadow-inner select-none">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                !annual
                  ? "bg-white text-[#0b1c30] shadow-sm"
                  : "text-[#4a4455] hover:text-[#0b1c30]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                annual
                  ? "bg-white text-[#0b1c30] shadow-sm"
                  : "text-[#4a4455] hover:text-[#0b1c30]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#630ed4] text-white text-[11px] font-bold tracking-wide shadow-sm">
                Save 20% + 2 Mo Free
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-[75rem] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? "bg-white shadow-[0_12px_40px_rgba(99,14,212,0.14)] lg:-translate-y-2"
                  : "bg-white shadow-sm hover:shadow-md"
              }`}
            >
              {/* Most Popular label */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#630ed4] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                  <Zap className="w-4 h-4" />
                  <span>MOST POPULAR / BEST VALUE</span>
                </div>
              )}

              <div>
                {/* Name & badge */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#0b1c30]">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className={`text-[11px] font-semibold px-3 py-0.5 rounded-full ${plan.badgeColor}`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6 min-h-[40px]">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div
                  className={`mb-6 pb-6 ${
                    plan.highlighted
                      ? "bg-[#eff4ff] p-4 rounded-xl"
                      : ""
                  }`}
                >
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-5xl font-bold ${
                            plan.highlighted
                              ? "text-[#630ed4]"
                              : "text-[#0b1c30]"
                          }`}
                        >
                          ${annual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm font-semibold text-[#4a4455]">
                          / month
                        </span>
                      </div>
                      <p className="text-xs text-[#4f4d5e] mt-1">
                        {annual
                          ? plan.annualBillingNote
                          : plan.monthlyBillingNote}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-[#0b1c30]">
                        Custom
                      </span>
                      {"pricingSubtitle" in plan && (
                        <p className="text-xs text-[#4f4d5e] mt-1">
                          {plan.pricingSubtitle}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <FeatureIcon type={plan.icon} />
                      <span className="text-sm text-[#0b1c30]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {plan.ctaStyle === "primary" ? (
                <button className="w-full py-3 px-6 rounded-xl bg-[#630ed4] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(99,14,212,0.35)] hover:bg-[#7c3aed] transition-all flex items-center justify-center gap-1 cursor-pointer">
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : plan.ctaStyle === "dark" ? (
                <button className="w-full py-3 px-6 rounded-xl bg-[#213145] text-[#eaf1ff] font-semibold text-sm hover:bg-[#0b1c30] transition-all cursor-pointer">
                  {plan.cta}
                </button>
              ) : (
                <button className="w-full py-3 px-6 rounded-xl bg-[#eff4ff] text-[#630ed4] font-semibold text-sm hover:bg-[#e3e0f1] transition-all cursor-pointer">
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Live Audio Dialer Demo */}
      <section className="max-w-[75rem] mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-[#213145] text-[#eaf1ff] rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#630ed4] via-[#7c3aed] to-[#d2bbff]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#676577]/40 text-[#d2bbff] text-[11px] font-bold tracking-[0.08em] uppercase mb-4">
                <Radio className="w-4 h-4" />
                <span>REAL-TIME STREAMING TELEPHONY</span>
              </div>

              <h2 className="text-2xl md:text-[40px] md:leading-[44px] font-bold text-white mb-4">
                Experience the Opus HD Voice Engine
              </h2>

              <p className="text-[#cbdbf5] text-base leading-relaxed mb-8">
                Sub-25ms latency enables true human interruption detection. Our
                carrier integrations filter voicemail, IVR switches, and
                gatekeepers automatically.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Gauge className="w-5 h-5 text-[#d2bbff]" />
                  <span>&lt;25ms Response</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Ear className="w-5 h-5 text-[#d2bbff]" />
                  <span>99.4% Voicemail Detection</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Lock className="w-5 h-5 text-[#d2bbff]" />
                  <span>STIR/SHAKEN A-Attestation</span>
                </div>
              </div>
            </div>

            {/* Right - Live call demo */}
            <div className="lg:col-span-6 bg-[#1a2636] rounded-xl p-6 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a] animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-wide text-[#cbdbf5]">
                    LIVE CALL DEMO &bull; 00:42
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#676577]/30 text-white text-[11px] font-mono">
                  10DLC VERIFIED
                </span>
              </div>

              {/* Waveform */}
              <div className="flex items-center justify-between h-14 gap-1 px-2 mb-4 bg-[#213145]/60 rounded-lg">
                {waveHeights.map((h, i) => (
                  <div
                    key={i}
                    className={`w-1.5 ${waveColors[i]} rounded-full ${h} animate-pulse`}
                  />
                ))}
              </div>

              {/* Transcript */}
              <div className="bg-[#213145]/40 p-4 rounded-lg space-y-2 text-sm">
                <p className="text-[#cbdbf5]">
                  <strong className="text-[#d2bbff]">Prospect:</strong>{" "}
                  &ldquo;We already use a dialer, what makes your AI integration
                  different?&rdquo;
                </p>
                <p className="text-white">
                  <strong className="text-[#7c3aed]">Dialeads Bot:</strong>{" "}
                  &ldquo;Great question. Most dialers still require manual
                  qualification. Dialeads handles the full first touch, navigates
                  the gatekeeper, and books the calendar link autonomously.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-[75rem] mx-auto px-6 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.08em] uppercase text-[#630ed4]">
            Deep Feature Matrix
          </span>
          <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold text-[#0b1c30] mt-1 mb-3">
            Compare Platform Capabilities
          </h2>
          <p className="text-base text-[#4a4455]">
            Review all technical allowances, carrier connections, and compliance
            tooling across each tier.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-2xl shadow-sm p-4">
          <table className="w-full text-left text-[#0b1c30]">
            <thead>
              <tr className="bg-[#eff4ff]">
                <th className="py-4 px-6 text-sm font-bold">
                  Core Capabilities
                </th>
                <th className="py-4 px-4 text-sm font-bold text-center">
                  Starter
                </th>
                <th className="py-4 px-4 text-sm font-bold text-center text-[#630ed4]">
                  Pro
                </th>
                <th className="py-4 px-4 text-sm font-bold text-center">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 1 ? "bg-[#eff4ff]/40" : ""}
                >
                  <td className="py-4 px-6 text-sm font-bold">{row.label}</td>
                  <td className="py-4 px-4 text-center text-[#4a4455]">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="py-4 px-4 text-center bg-[#630ed4]/5 font-bold text-[#630ed4]">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              <h4 className="text-sm font-bold text-[#0b1c30] mb-3">
                {row.label}
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#4a4455] block mb-1">
                    Starter
                  </span>
                  <CellValue value={row.starter} />
                </div>
                <div className="bg-[#630ed4]/5 rounded-lg py-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#630ed4] block mb-1">
                    Pro
                  </span>
                  <span className="font-bold text-[#630ed4]">
                    <CellValue value={row.pro} />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#4a4455] block mb-1">
                    Enterprise
                  </span>
                  <CellValue value={row.enterprise} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[56rem] mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.08em] uppercase text-[#630ed4]">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-[40px] md:leading-[44px] font-bold text-[#0b1c30] mt-1 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#4a4455]">
            Everything you need to know about billing, carrier lines, and
            regulatory compliance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white rounded-xl shadow-sm p-4 cursor-pointer transition-all"
            >
              <summary className="flex items-center justify-between text-lg font-bold text-[#0b1c30] [&::-webkit-details-marker]:hidden list-none">
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-[#4a4455] shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-base text-[#4a4455] mt-3 pt-1 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom Reassurance */}
      <section className="bg-[#eff4ff] py-12">
        <div className="max-w-[75rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#630ed4]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#630ed4]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0b1c30]">
                  Risk-free. Cancel anytime. 14-day money-back guarantee.
                </h3>
                <p className="text-sm text-[#4a4455]">
                  SOC-2 Type II certified. No hidden fees. No long-term
                  contracts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="inline-flex items-center gap-1 px-8 py-3 rounded-full bg-[#630ed4] text-white font-semibold text-sm shadow-md hover:bg-[#7c3aed] transition-all cursor-pointer">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
