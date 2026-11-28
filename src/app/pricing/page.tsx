import type { Metadata } from "next";
import { Check, Minus, ArrowRight, Bot, PhoneCall, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI Dialer Pricing | Xovra",
  description:
    "Transparent per-minute pricing. $0.06/min for AI-handled calls, $0.002/min for raw dial. No per-seat, no monthly minimum, no annual lock-in.",
  keywords: [
    "ai dialer pricing",
    "ai outbound dialer pricing",
    "ai sdr pricing",
    "ai voice agent pricing",
    "per minute dialer pricing",
    "ai cold calling cost",
    "pay as you go ai dialer",
    "ai dialer no monthly fee",
    "apollo alternative pricing",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "AI Dialer Pricing | Xovra",
    description:
      "$0.06/min with the AI voice agent. $0.002/min raw dial. No seats, no annual lock-in.",
    url: "/pricing",
    type: "website",
  },
};

const RATE_AI = "$0.06";
const RATE_RAW = "$0.002";

type FeatureRow = { label: string; payg: string | boolean; ent: string | boolean };

const comparison: FeatureRow[] = [
  { label: "Google Maps lead sourcing", payg: "Weekly scheduled pulls", ent: "Custom niche × city batching" },
  { label: "Website enrichment (email, tech, social)", payg: true, ent: true },
  { label: "Ad-intent scoring (tags / ATC / SERP)", payg: true, ent: "Custom scoring weights" },
  { label: "0–100 lead fit score", payg: true, ent: true },
  { label: "CSV + Google Sheet export", payg: true, ent: true },
  { label: "CRM sync (HubSpot, Close, GoHighLevel, Salesforce)", payg: true, ent: "Two-way + custom fields" },
  { label: "AI voice agent (outbound)", payg: `${RATE_AI}/min`, ent: "Volume rate" },
  { label: "Raw outbound dial (bring your own voice)", payg: `${RATE_RAW}/min`, ent: "Volume rate" },
  { label: "Live call transfers", payg: true, ent: true },
  { label: "Auto appointment booking", payg: true, ent: true },
  { label: "DNC + TCPA scrubbing", payg: true, ent: "Built-in + audit logs" },
  { label: "STIR/SHAKEN attestation", payg: true, ent: "Per-pool" },
  { label: "Support", payg: "Email + shared Slack", ent: "Named CSM, 4h SLA" },
  { label: "Contract", payg: "No contract, usage-based", ent: "Annual" },
];

function Yes() {
  return <Check className="inline-block text-brand" size={18} strokeWidth={2.4} aria-label="Included" />;
}
function No() {
  return <Minus className="inline-block text-line" size={18} strokeWidth={2} aria-label="Not included" />;
}
function cell(v: string | boolean) {
  if (v === true) return <Yes />;
  if (v === false) return <No />;
  return <span className="text-[14px] text-body">{v}</span>;
}

const faqs = [
  {
    q: "How does per-minute billing actually work?",
    a: `AI-handled outbound calls are ${RATE_AI} per minute of connected talk time (dropped calls and voicemails aren't billed). Raw outbound dials where your team or a human handles the voice are ${RATE_RAW} per minute. Billing rounds to the second after a 30-second minimum per connected call. There's no monthly base fee and no per-seat charge on Pay As You Go.`,
  },
  {
    q: "Why is there such a difference between AI and raw outbound?",
    a: `${RATE_AI}/min covers the AI voice agent, real-time LLM inference, text-to-speech, speech-to-text, qualification logic, and the call itself. ${RATE_RAW}/min is essentially telephony pass-through: we provision the number, route the call, scrub DNC, log the transcript, and sync to your CRM, but you (or your rep) talk. Big difference in infrastructure cost, big difference in price.`,
  },
  {
    q: "Is there a free trial?",
    a: "New Pay As You Go accounts get credit to try the AI voice agent and the raw dialer on real campaigns before committing. Contact us if you need more than the standard trial allowance for a proof of concept.",
  },
  {
    q: "Do you charge per seat or per user?",
    a: "No. Add as many teammates as you want. Pricing scales only with usage (minutes dialed). On Enterprise, we agree a volume rate and you pay against that.",
  },
  {
    q: "Can I mix AI-handled and raw outbound in the same campaign?",
    a: "Yes. A common pattern: AI handles the first-dial qualification pass, qualified prospects get live-transferred to your closer. You pay the AI rate on the qualifying portion and the raw rate on the transferred talk time.",
  },
  {
    q: "What about DNC, TCPA, and STIR/SHAKEN?",
    a: "Every number is scrubbed against federal and state DNC lists before dial. TCPA consent is logged per call. STIR/SHAKEN attestation is configured per outbound pool (A-level on Enterprise). Enterprise adds full audit logs. See /compliance for the full posture.",
  },
  {
    q: "Is there a minimum spend?",
    a: "No minimum on Pay As You Go. Load credits, dial as little or as much as you want. Enterprise has an annual volume commitment agreed in your contract.",
  },
  {
    q: "What happens if my AI dialer hits a voicemail?",
    a: "Voicemails and unanswered rings don't count toward billed AI minutes. We only bill on connected, two-way talk time. Voicemail drops (pre-recorded message delivery) are billed at the raw rate.",
  },
];

function PriceCard({
  tier,
  featured,
  price,
  priceSub,
  blurb,
  features,
  ctaLabel,
  ctaHref,
}: {
  tier: string;
  featured?: boolean;
  price: React.ReactNode;
  priceSub?: string;
  blurb: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 md:p-8 ${
        featured
          ? "border-brand bg-white shadow-[0_24px_80px_rgba(139,47,248,0.18)]"
          : "border-line bg-white"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          <Sparkles size={12} strokeWidth={2.4} aria-hidden /> Most flexible
        </span>
      )}
      <div className="mb-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand">{tier}</p>
      </div>
      <div className="mb-3 flex items-baseline gap-2">
        <span className="text-5xl font-semibold tracking-tight text-ink">{price}</span>
        {priceSub && <span className="text-[13px] text-body">{priceSub}</span>}
      </div>
      <p className="mb-6 text-[15px] leading-relaxed text-body">{blurb}</p>
      <ul className="mb-8 flex flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
            <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <CtaButton href={ctaHref} variant={featured ? "dark" : "dark"} className="w-full justify-between">
          {ctaLabel}
        </CtaButton>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Xovra AI Outbound Dialer",
    description: "AI outbound dialer with built-in Google Maps lead sourcing, per-minute usage-based pricing.",
    brand: { "@type": "Brand", name: "Xovra" },
    offers: [
      {
        "@type": "Offer",
        name: "AI-handled outbound (Pay As You Go)",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "0.06",
          priceCurrency: "USD",
          unitText: "minute",
        },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Raw outbound (Pay As You Go)",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "0.002",
          priceCurrency: "USD",
          unitText: "minute",
        },
        availability: "https://schema.org/InStock",
      },
      { "@type": "Offer", name: "Enterprise", availability: "https://schema.org/InStock" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative bg-white text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      {/* ========== Hero ========== */}
      <section className="relative overflow-hidden bg-night text-white" data-nav-theme="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 20% 20%, rgba(236,106,251,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 80% 90%, rgba(139,47,248,0.22) 0%, transparent 60%)",
          }}
        />
        <div className="section-shell relative pt-32 md:pt-40">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Reveal>
                <Eyebrow dark>Pricing</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[80px]">
                  Pay only for the minutes you <span className="accent-text">actually talk.</span>
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="max-w-xl text-[17px] leading-relaxed text-white/70">
                  Transparent per-minute pricing with no seats, no monthly minimum, and no annual contract until you want one. Fresh Google Maps leads and CRM sync are included in every tier.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <CtaButton href="#plans" variant="light">
                    See the plans
                  </CtaButton>
                  <a
                    href="#rate-card"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                  >
                    Jump to the rate card
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2} className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c187fb]">
                  Per-minute rates
                </p>
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-[13px] text-white/60">
                      <Bot size={14} strokeWidth={2.2} /> AI voice agent handles the call
                    </div>
                    <div className="text-3xl font-semibold tracking-tight">{RATE_AI}</div>
                  </div>
                  <span className="shrink-0 text-[13px] text-white/50">/ min</span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-[13px] text-white/60">
                      <PhoneCall size={14} strokeWidth={2.2} /> Raw dial (you or your rep talks)
                    </div>
                    <div className="text-3xl font-semibold tracking-tight">{RATE_RAW}</div>
                  </div>
                  <span className="shrink-0 text-[13px] text-white/50">/ min</span>
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-white/50">
                  Only billed on connected talk time. Voicemails and dropped calls are free.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/10 pt-6 text-[12.5px] text-white/50">
            <span>No per-seat pricing</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>No monthly minimum</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>DNC + TCPA compliant</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Lead sourcing included</span>
          </div>
        </div>
      </section>

      {/* ========== Tier cards ========== */}
      <section id="plans" className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Plans</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Two ways to use Xovra. <span className="accent-text">Pick what fits.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4">
                Start usage-based on Pay As You Go, upgrade to Enterprise when you need volume rates and a named CSM. Lead sourcing, CRM sync, and DNC scrubbing are included in both.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto grid grid-cols-1 items-stretch gap-5 md:gap-6 lg:max-w-5xl lg:grid-cols-2">
            <Reveal delay={1}>
              <PriceCard
                tier="Pay As You Go"
                featured
                price={<span className="tracking-tight">{RATE_AI}<span className="text-2xl text-body">/min</span></span>}
                priceSub={`or ${RATE_RAW}/min for raw dial`}
                blurb="Managed cloud. No monthly base, no per-seat. You get sourcing + the AI dialer + CRM sync and pay only for minutes of connected talk time."
                features={[
                  "Managed Google Maps lead sourcing with scheduled pulls",
                  "AI voice agent handles multi-turn qualification",
                  "Live call transfers with context screen pops",
                  "Auto appointment booking on your calendar",
                  "Two-way CRM sync (HubSpot, Close, GoHighLevel, Salesforce)",
                  "DNC scrubbing + TCPA consent logging per call",
                  "STIR/SHAKEN attestation on every outbound pool",
                  "Email + shared Slack support",
                ]}
                ctaLabel="Start dialing"
                ctaHref="#contact"
              />
            </Reveal>

            <Reveal delay={2}>
              <PriceCard
                tier="Enterprise"
                price="Custom"
                priceSub="volume rates"
                blurb="For lead-gen call centers, multi-location sales orgs, and anyone dialing six-figure monthly volume. Annual commitment, dedicated infrastructure."
                features={[
                  "Everything in Pay As You Go",
                  "Volume-discounted per-minute rates",
                  "Custom niche × city batching tuned to your territories",
                  "Custom scoring weights per vertical",
                  "Two-way CRM sync into custom fields and workflows",
                  "Full TCPA audit logs, SOC 2 preparation",
                  "Per-pool STIR/SHAKEN attestation level config",
                  "Named CSM, 4-hour response SLA",
                ]}
                ctaLabel="Book a call"
                ctaHref="#contact"
              />
            </Reveal>
          </div>

          <p className="mt-10 text-center text-[13px] text-body">
            All plans are billed in USD. Pay As You Go charges minutes only on connected talk time; voicemails and dropped calls are free.
          </p>
        </div>
      </section>

      {/* ========== Rate card ========== */}
      <section id="rate-card" className="relative bg-white">
        <div className="section-shell">
          <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.4fr_1fr] md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">The rate card</Eyebrow>
              <h2 className="h-section">
                Two rates. <span className="accent-text">That's the whole menu.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                Everything else — sourcing, enrichment, CRM sync, scrubbing — is included. You only pay for talk time.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-2xl border border-brand/40 bg-night p-8 text-white">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 50% at 10% 0%, rgba(236,106,251,0.3) 0%, transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c187fb]">
                    <Bot size={14} strokeWidth={2.2} /> AI-handled outbound
                  </div>
                  <div className="mb-3 flex items-baseline gap-2">
                    <span className="text-6xl font-semibold tracking-tight">{RATE_AI}</span>
                    <span className="text-lg text-white/60">/ minute</span>
                  </div>
                  <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-white/70">
                    AI voice agent dials, qualifies, and either transfers the prospect to your rep or books a meeting. You never pick up a cold call again.
                  </p>
                  <ul className="flex flex-col gap-2 text-[14px] text-white/80">
                    <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-[#c187fb]" /> Real-time LLM qualification</li>
                    <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-[#c187fb]" /> Multi-turn objection handling</li>
                    <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-[#c187fb]" /> Live transfer with context screen pop</li>
                    <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-[#c187fb]" /> Auto-booking on your calendar</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  <PhoneCall size={14} strokeWidth={2.2} /> Raw outbound dial
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span className="text-6xl font-semibold tracking-tight text-ink">{RATE_RAW}</span>
                  <span className="text-lg text-body">/ minute</span>
                </div>
                <p className="mb-6 max-w-sm text-[15px] leading-relaxed text-body">
                  Bring your own voice. We handle sourcing, routing, number provisioning, DNC scrub, recording, and CRM sync. You or your rep talks.
                </p>
                <ul className="flex flex-col gap-2 text-[14px] text-ink">
                  <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" /> Local DIDs with spam-flag rotation</li>
                  <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" /> DNC + TCPA scrubbing per call</li>
                  <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" /> Recording and transcript log</li>
                  <li className="flex gap-2"><Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" /> Two-way CRM sync</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 rounded-xl border border-line bg-surface px-6 py-5">
            <p className="text-[14px] leading-relaxed text-body">
              <strong className="text-ink">Mix freely.</strong> A common flow: the AI runs the first-dial qualification pass at {RATE_AI}/min, then transfers qualified prospects to your closer at {RATE_RAW}/min for the live conversation. You pay each phase at its real cost.
            </p>
          </div>
        </div>
      </section>

      {/* ========== Comparison table ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Compare plans</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                What's in <span className="accent-text">every tier.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="w-[46%] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-body">
                      Capability
                    </th>
                    <th className="bg-white/60 px-5 py-4 text-left text-[14px] font-semibold text-brand">
                      Pay As You Go
                    </th>
                    <th className="px-5 py-4 text-left text-[14px] font-semibold text-ink">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {comparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface/40" : ""}>
                      <th scope="row" className="px-5 py-4 text-left text-[14px] font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="bg-white/60 px-5 py-4">{cell(row.payg)}</td>
                      <td className="px-5 py-4">{cell(row.ent)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== What you replace ========== */}
      <section className="relative overflow-hidden bg-night text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 100% 0%, rgba(236,106,251,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="section-shell relative">
          <div className="mb-12 max-w-2xl md:mb-16">
            <Reveal>
              <Eyebrow dark className="mb-3">
                Replacing the stack
              </Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                One subscription replaces <span className="accent-text">five vendors.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4 text-white/70">
                A typical team dialing 50,000 minutes a month with the AI agent spends about $3,000 on Xovra. Here's the stack that bill replaces.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead className="border-b border-white/10 bg-white/[0.04]">
                  <tr>
                    <th className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Tool
                    </th>
                    <th className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Typical cost
                    </th>
                    <th className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#c187fb]">
                      Replaced by Xovra
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-[14px]">
                  <tr>
                    <td className="px-5 py-4 font-medium text-white">Apollo seat</td>
                    <td className="px-5 py-4 font-mono tabular-nums text-white/60">~$2,400 / mo</td>
                    <td className="px-5 py-4 text-white/80">Built-in lead sourcing</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-white">ZoomInfo contract</td>
                    <td className="px-5 py-4 font-mono tabular-nums text-white/60">$15k+ / yr</td>
                    <td className="px-5 py-4 text-white/80">Built-in sourcing + enrichment</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-white">Stand-alone AI dialer</td>
                    <td className="px-5 py-4 font-mono tabular-nums text-white/60">$0.10–$0.25 / min + base</td>
                    <td className="px-5 py-4 text-white/80">Managed dialer at {RATE_AI}/min</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-white">Appointment setter contractor</td>
                    <td className="px-5 py-4 font-mono tabular-nums text-white/60">$3k–$8k / mo</td>
                    <td className="px-5 py-4 text-white/80">Auto appointment booking</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-medium text-white">DNC scrubbing service</td>
                    <td className="px-5 py-4 font-mono tabular-nums text-white/60">$300–$900 / mo</td>
                    <td className="px-5 py-4 text-white/80">Built-in</td>
                  </tr>
                  <tr className="bg-white/[0.04]">
                    <th scope="row" className="px-5 py-5 text-[16px] font-semibold text-white">
                      Total replaced
                    </th>
                    <td className="px-5 py-5 font-mono tabular-nums text-xl font-semibold text-[#c187fb]">
                      $5k–$10k+ / mo
                    </td>
                    <td className="px-5 py-5 text-[16px] font-semibold text-white">
                      Usage-based, no base
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-white/50">
            Illustrative numbers from public pricing pages for comparable tools. Your actual replaced spend depends on volume and vertical.
          </p>
        </div>
      </section>

      {/* ========== Compare anchor ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">Alternatives</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                How Xovra pricing <span className="accent-text">compares.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {[
              { title: "Xovra vs Apollo", sub: "Database vs live scrape, with ad-intent built in.", href: "/vs/apollo" },
              { title: "Xovra vs ZoomInfo", sub: "SMB-native alternative without the $15k contract.", href: "/vs/zoominfo" },
              { title: "Xovra vs D7 Lead Finder", sub: "Open-source alternative to a closed scraper.", href: "/vs/d7-leadfinder" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={(i + 1) as 1 | 2 | 3}>
                <a
                  href={c.href}
                  className="group block rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_rgba(139,47,248,0.12)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
                    <ArrowRight size={16} strokeWidth={2.4} className="text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-body">{c.sub}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Pricing FAQ</Eyebrow>
              <h2 className="h-section">
                Clear answers on <span className="accent-text">billing.</span>
              </h2>
              <p className="lead mt-4">
                Per-minute billing, trials, DNC posture, and everything you'd ask on an intro call.
              </p>
              <CtaButton href="#contact" className="mt-6">
                Book an intro call
              </CtaButton>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-line bg-surface px-5 py-4 open:bg-white open:shadow-[0_12px_40px_rgba(139,47,248,0.06)]"
                    open={i === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-[15.5px] font-semibold text-ink">{f.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-transform group-open:rotate-45">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-body">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== Final CTA ========== */}
      <section id="contact" className="relative bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-14 md:py-20 lg:px-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-night px-6 py-20 text-center text-white md:px-16 md:py-28 lg:px-24">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(139,47,248,0.45) 0%, rgba(139,47,248,0.1) 40%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236,106,251,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative flex flex-col items-center">
                <Eyebrow dark>Start today</Eyebrow>
                <h2 className="h-section mt-4 max-w-3xl">
                  No seats. No contracts. <span className="accent-text">Just minutes.</span>
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  Launch your first campaign this week on Pay As You Go. Upgrade to Enterprise when you hit volume. Lead sourcing, CRM sync, and DNC scrubbing are included either way.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="#plans" variant="light">
                    Start dialing
                  </CtaButton>
                  <CtaButton href="/contact">Talk to sales</CtaButton>
                </div>
                <p className="mt-8 text-xs text-white/45">
                  No per-seat pricing · No monthly minimum · No annual contract until Enterprise · DNC + TCPA compliant
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
