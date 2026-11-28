import type { Metadata } from "next";
import { Compass, HandCoins, LineChart, ShieldCheck, Zap, Puzzle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Xovra | AI Outbound Dialer Built for Sales Floors",
  description:
    "Xovra is an AI outbound dialer with built-in Google Maps lead sourcing. Transparent per-minute pricing, no annual lock-in, honest about what ships and what's roadmap.",
  keywords: [
    "about xovra",
    "xovra ai company",
    "ai outbound dialer company",
    "xovra story",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Xovra | AI Outbound Dialer Built for Sales Floors",
    description:
      "An AI outbound dialer built for operators, not procurement. Honest pricing, bundled compliance, no vendor sprawl.",
    url: "/about",
    type: "website",
  },
};

type Principle = { icon: React.ElementType; title: string; body: string };

const principles: Principle[] = [
  {
    icon: HandCoins,
    title: "Transparent pricing wins trust.",
    body: "Our rate card is on the pricing page — $0.06/min AI, $0.002/min raw. No RFP, no sales dance to learn what it costs. If a vendor hides the number, they're hiding something else too.",
  },
  {
    icon: Puzzle,
    title: "Bundles beat stitching.",
    body: "Separate vendors for sourcing, dialing, scrubbing, and CRM sync mean you own the integration tax. We ship the whole loop in one subscription so your sales ops team can focus on the funnel, not the plumbing.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance isn't an upsell.",
    body: "DNC scrubbing, TCPA consent logging, and STIR/SHAKEN attestation are included on every dial. Tools that charge separately for compliance treat it like an edge case. We treat it like oxygen.",
  },
  {
    icon: Zap,
    title: "Operators ship faster than procurement.",
    body: "Pay As You Go is self-serve. You can be live this week. Enterprise is for teams dialing six-figure monthly minutes — only sign a contract when the volume justifies it, not before.",
  },
  {
    icon: Compass,
    title: "Honest about ToS, honest about roadmap.",
    body: "Scraping Google Maps violates Google's Terms of Service. We say so in the FAQ, in the compliance page, and here. We also label \"coming soon\" explicitly when it applies, and we don't ship marketing promises as present-tense features.",
  },
  {
    icon: LineChart,
    title: "Measure booked meetings, not activations.",
    body: "The metric that matters is qualified meetings on your calendar. Vanity metrics (minutes dialed, prospects contacted) look good on a slide and don't move revenue. Our dashboards lead with outcomes.",
  },
];

type Milestone = { label: string; title: string; body: string };
const milestones: Milestone[] = [
  {
    label: "Shipping now",
    title: "Google Maps lead sourcing engine",
    body: "Niche + city scrape, website enrichment (email, tech, social), and three-source ad-intent scoring. Output as HubSpot-formatted CSV or Google Sheet.",
  },
  {
    label: "Shipping now",
    title: "Managed cloud + CRM sync",
    body: "Two-way sync with HubSpot, Close, GoHighLevel, and Salesforce. Transcripts, outcomes, and scheduled meetings flow in without manual upload.",
  },
  {
    label: "Rolling out",
    title: "AI voice agent at $0.06/min",
    body: "Multi-turn qualification, live transfers with context screen pop, auto appointment booking. Pay As You Go customers get first access as campaigns go live.",
  },
  {
    label: "On the roadmap",
    title: "Vertical templates and custom scoring",
    body: "Pre-tuned scoring weights and qualification rubrics for the top verticals (home services, SaaS, agencies). Enterprise customers get custom weights built with their data.",
  },
];

export default function AboutPage() {
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
              <Eyebrow dark>About Xovra</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[80px]">
                Built for the <span className="accent-text">sales floor.</span> Not for procurement.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
                Xovra is an AI outbound dialer with built-in Google Maps lead sourcing. We publish our rates, bundle the compliance, and let you dial this week without a sales cycle. Operators ship it. Procurement isn&rsquo;t required.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton href="/pricing" variant="light">
                  See the rate card
                </CtaButton>
                <a
                  href="#principles"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                >
                  What we believe
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <Eyebrow className="mb-3">Why Xovra exists</Eyebrow>
              <h2 className="h-section">
                SMB outbound is broken.{" "}
                <span className="accent-text">We&rsquo;re fixing the stack.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col gap-5 text-[16.5px] leading-relaxed text-body">
                <p>
                  Teams selling to local businesses &mdash; agencies, lead-gen companies, SDR floors at SMB SaaS &mdash; are stuck between two bad options. Buy a $2,400/month Apollo seat and dial recycled contacts. Or stitch together a scraper, a dialer, a CRM uploader, and a DNC scrubber, each with its own vendor, bill, and bugs.
                </p>
                <p>
                  Both paths bury sales ops in integration work that doesn&rsquo;t move pipeline. Both charge more in aggregate than the outbound revenue justifies. Both treat compliance as an upsell instead of a default.
                </p>
                <p>
                  We built Xovra to be the one subscription that replaces that stack. One rate. One dashboard. One compliance posture. Launch this week, not next quarter.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">Principles</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Six things we <span className="accent-text">believe.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4">
                Not slogans. Decisions we make every release when we have to pick between two choices.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 md:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                    <p className="text-[15px] leading-relaxed text-body">{p.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones / what ships */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Eyebrow className="mb-3">Honest timeline</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                What ships today. <span className="accent-text">What&rsquo;s next.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead mt-4">
                If something isn&rsquo;t shipping yet, we say so. Here&rsquo;s the honest state of the product.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="group flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white hover:shadow-[0_18px_50px_rgba(139,47,248,0.08)] md:flex-row md:items-center md:gap-6 md:p-7">
                  <div className="md:w-48 md:shrink-0">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                        m.label === "Shipping now"
                          ? "bg-brand/10 text-brand"
                          : m.label === "Rolling out"
                            ? "bg-amber-500/15 text-amber-700"
                            : "bg-surface-2 text-body"
                      }`}
                    >
                      {m.label}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{m.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">{m.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <Eyebrow dark className="mb-3">
                Who we serve
              </Eyebrow>
              <h2 className="h-section">
                Operators. Not <span className="accent-text">RFPs.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-col gap-5 text-[16.5px] leading-relaxed text-white/70">
                <p>
                  Agencies prospecting SMBs. Lead-gen companies and call centers running volume outbound. SDR teams tired of babysitting a list vendor plus a dialer plus a CRM uploader plus a DNC scrubber.
                </p>
                <p>
                  If you&rsquo;re an enterprise with a 90-day procurement cycle and a signed master agreement requirement, we have an Enterprise tier for that &mdash; but only engage it when your volume clearly earns it. Everyone else gets a transparent rate card and a self-serve path.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compare / where next */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-10">
            <Reveal>
              <Eyebrow className="mb-3">Still deciding?</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Benchmark Xovra against <span className="accent-text">the alternatives.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {[
              { title: "Xovra Pricing", sub: "Per-minute rate card, no commit required.", href: "/pricing" },
              { title: "Compare vs AI dialers", sub: "Vapi, Retell, Bland, Air.ai — honest tradeoffs.", href: "/vs" },
              { title: "Features", sub: "The full six-engine loop end to end.", href: "/features" },
            ].map((c, i) => (
              <Reveal key={c.href} delay={(i + 1) as 1 | 2 | 3}>
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
                <Eyebrow dark>Talk to us</Eyebrow>
                <h2 className="h-section mt-4 max-w-3xl">
                  Have a question? <span className="accent-text">Ask directly.</span>
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  No gatekeeper, no qualification form. Book a 30-minute call or email us for anything deeper than the docs cover.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="/contact" variant="light">
                    Book a call
                  </CtaButton>
                  <CtaButton href="/pricing">See pricing</CtaButton>
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
