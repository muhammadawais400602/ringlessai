import type { Metadata } from "next";
import {
  MapPin,
  Database,
  Sparkles,
  PhoneCall,
  CalendarCheck,
  RefreshCw,
  ShieldCheck,
  Gauge,
  Clock,
  Zap,
  LineChart,
  Workflow,
  Lock,
  Headphones,
  Bot,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features | Xovra AI Outbound Dialer",
  description:
    "The full feature list: Google Maps lead sourcing, ad-intent scoring, AI voice qualification, live transfers, auto appointment booking, CRM sync, and built-in DNC + TCPA compliance.",
  keywords: [
    "ai outbound dialer features",
    "ai voice agent features",
    "google maps lead sourcing",
    "ad intent scoring",
    "live call transfer",
    "ai appointment setter",
    "dnc compliant dialer",
    "two way crm sync",
  ],
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features | Xovra AI Outbound Dialer",
    description:
      "Everything in one subscription: sourcing, scoring, AI voice qualification, transfers, booking, CRM sync, DNC + TCPA compliance.",
    url: "/features",
    type: "website",
  },
};

type Pillar = { icon: React.ElementType; title: string; body: string; sub: string[] };

const pillars: Pillar[] = [
  {
    icon: MapPin,
    title: "Google Maps lead sourcing",
    body: "Point Xovra at a niche and a city. We scrape every matching business, visit each one's website, and enrich with email, tech stack, and social presence. No API keys, no quotas, no Google Cloud project.",
    sub: [
      "Niche + city batch mode via YAML",
      "Website email + contact extraction",
      "Tech stack and framework detection",
      "Instagram, Facebook, TikTok with follower counts",
    ],
  },
  {
    icon: Database,
    title: "Ad-intent scoring (three sources)",
    body: "We prove a business actually buys leads before you dial. Three layered signals: on-site Google Ads tags, Ads Transparency Center creative counts, and live SERP capture. Advertisers close 4× better than cold Maps rows.",
    sub: [
      "On-site AW-tag and GTM container detection",
      "Ads Transparency Center creative count",
      "Live SERP capture via residential proxy",
      "Combined 0–100 fit score per lead",
    ],
  },
  {
    icon: Bot,
    title: "AI voice agent",
    body: "Natural multi-turn voice qualification. The AI opens, handles objections, qualifies against your rubric (budget, timeline, decision-maker), and decides to transfer live or book — all at $0.06 per connected minute.",
    sub: [
      "Pre-tuned production voice stack",
      "Rubric-based qualification flows",
      "Multi-turn objection handling",
      "Transcripts logged per call",
    ],
  },
  {
    icon: PhoneCall,
    title: "Live call transfers",
    body: "When a prospect qualifies, Xovra routes the call to the best-fit rep with a context-rich screen pop before they pick up. Your rep opens on a warm prospect, not a cold handoff.",
    sub: [
      "Rule-based routing by skill, territory, product",
      "Screen pop: name, pain points, trail, pitch",
      "Fallback to auto-booking if no rep available",
      "Real-time transfer latency under 60 seconds",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Auto appointment booking",
    body: "No rep available? The AI books the meeting on your calendar instead — with timezone handling, dynamic availability, and an instant invite delivered mid-call. Every qualified prospect becomes a calendar entry or a live transfer.",
    sub: [
      "Google Calendar + Microsoft Outlook",
      "Timezone-aware slot selection",
      "Buffer rules per rep calendar",
      "Invite delivery before the call ends",
    ],
  },
  {
    icon: RefreshCw,
    title: "Two-way CRM sync",
    body: "Qualified leads, transcripts, outcomes, and scheduled meetings flow directly into HubSpot, Close, GoHighLevel, or Salesforce. No manual CSV uploads, no end-of-day reconciliation.",
    sub: [
      "HubSpot, Close, GoHighLevel, Salesforce native",
      "Custom-field mapping",
      "Transcript stored as activity",
      "Outcome routing to pipeline stages",
    ],
  },
];

type Spec = { icon: React.ElementType; title: string; body: string };
const specs: Spec[] = [
  { icon: ShieldCheck, title: "DNC + TCPA scrubbing", body: "Federal and state DNC lists checked before every dial. TCPA consent logged per call. Audit trail retained per your retention policy." },
  { icon: Lock, title: "STIR/SHAKEN", body: "Attestation level configurable per outbound pool. A-level attestation available on Enterprise with your own carrier relationships." },
  { icon: Clock, title: "24/7 coverage", body: "AI runs nights, weekends, and holidays. Inbound inquiries receive sub-60-second responses. Outbound campaigns stay warm around the clock." },
  { icon: Zap, title: "Speed to lead", body: "Inbound form fills get a live AI conversation under 60 seconds. Outbound prospects reached within the hour of list drop." },
  { icon: LineChart, title: "Operator analytics", body: "Dashboards built for sales ops, not engineers. Cost per qualified meeting, connect rate by niche, transfer success rate — all in one view." },
  { icon: Workflow, title: "Rubric configuration", body: "Define budget, timeline, and decision-maker thresholds in a simple UI. No prompt engineering, no model fine-tuning." },
  { icon: Headphones, title: "Local DID pool", body: "Automatic local number provisioning with spam-flag rotation. Connect rates protected without manual pool management." },
  { icon: Gauge, title: "Flat per-minute pricing", body: "$0.06/min AI-handled, $0.002/min raw dial. No per-seat charge, no monthly minimum. Voicemails and dropped calls free." },
];

type FlowStep = { n: string; title: string; body: string };
const flow: FlowStep[] = [
  { n: "01", title: "Set your rubric", body: "Define ICP, qualification questions, pitch, routing rules. Pick a voice. Done in a sitting." },
  { n: "02", title: "Leads are sourced", body: "Weekly Google Maps pulls for your niches. Enriched from each business's own site. Scored by ad intent." },
  { n: "03", title: "AI dials and qualifies", body: "Natural voice agent opens, handles objections, qualifies against your rubric. Nights and weekends included." },
  { n: "04", title: "Transfer or book", body: "Qualified prospects go live to your rep. Everyone else gets a meeting on your calendar automatically." },
  { n: "05", title: "CRM sync", body: "Transcript, outcome, and meeting flow into HubSpot, Close, GoHighLevel, or Salesforce without an upload step." },
];

export default function FeaturesPage() {
  return (
    <main className="relative bg-white text-ink">
      <Navbar />

      {/* Hero */}
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
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow dark>Features</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[80px]">
                Everything your outbound team needs. <span className="accent-text">One bill.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
                Xovra ships sourcing, scoring, AI qualification, live transfers, auto booking, CRM sync, and built-in compliance in a single per-minute subscription. No stitching, no vendor sprawl, no per-seat charges.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton href="/pricing" variant="light">
                  See pricing
                </CtaButton>
                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                >
                  Browse the features
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8">
            {[
              { k: "$0.06", v: "per AI minute" },
              { k: "$0.002", v: "per raw dial minute" },
              { k: "< 60s", v: "live transfer handoff" },
              { k: "24/7", v: "nights and weekends" },
            ].map((s, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div>
                  <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section id="pillars" className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">Six engines</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                From &ldquo;niche + city&rdquo; to a <span className="accent-text">booked meeting.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4">
                Each engine is a feature your team would otherwise buy from a separate vendor. On Xovra they ship together in the per-minute price.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-white p-7 md:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-ink">{p.title}</h3>
                      <p className="text-[15px] leading-relaxed text-body">{p.body}</p>
                    </div>
                    <ul className="mt-auto flex flex-col gap-2 border-t border-line pt-5 text-[14px] text-ink">
                      {p.sub.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How the pieces work together */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">How it runs</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                The whole loop, <span className="accent-text">one subscription.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-5 md:gap-4">
            {flow.map((s, i) => (
              <Reveal key={s.n} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="group relative flex h-full flex-col justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-[0_24px_60px_rgba(139,47,248,0.1)]">
                  <div className="text-3xl font-semibold tracking-tight bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs grid */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">Under the hood</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Compliance and ops, <span className="accent-text">handled.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4">
                The infrastructure details that usually become their own vendor line items. Included here.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {specs.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                    <p className="text-[14px] leading-relaxed text-body">{s.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CRM integrations strip */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="mb-10 grid grid-cols-1 items-end gap-6 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <Eyebrow className="mb-3">Integrations</Eyebrow>
              <h2 className="h-section">
                Ships directly into <span className="accent-text">the tools you use.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="lead">
                Two-way sync with the CRMs your team already lives in. Custom fields, activity logs, pipeline stages.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {["HubSpot", "Close", "GoHighLevel", "Salesforce", "Pipedrive", "Zapier", "Google Sheets", "Webhook"].map((n) => (
                <div key={n} className="rounded-2xl border border-line bg-surface px-5 py-6 text-center">
                  <p className="text-[15px] font-semibold text-ink">{n}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-brand">Two-way sync</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benchmarks */}
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
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow dark className="mb-3">
                Numbers from the field
              </Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Why teams replace their <span className="accent-text">SDR floor.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {[
              { k: "< 60s", v: "Live-transfer handoff time", hint: "Transfer speed" },
              { k: "3×", v: "Qualified-conversation lift vs. humans-only", hint: "Qualified lift" },
              { k: "24/7", v: "Coverage with no overtime bill", hint: "Coverage" },
              { k: "0", v: "SDR seats required for a weekend campaign", hint: "Headcount" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="border-t-2 border-white/10 pt-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c187fb]">
                    {s.hint}
                  </p>
                  <div className="text-4xl font-semibold tracking-tight md:text-5xl">{s.k}</div>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/60">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-white">
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
                  See the features live. <span className="accent-text">Dial this week.</span>
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  Set your rubric, point at a niche and a city, watch qualified meetings land on your calendar. Nights and weekends included.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="/pricing" variant="light">
                    Start dialing
                  </CtaButton>
                  <CtaButton href="/contact">Book a demo</CtaButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
