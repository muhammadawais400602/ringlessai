import type { Metadata } from "next";
import { Check, Minus, ArrowRight, Scale, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";

export type Row = { label: string; competitor: React.ReactNode | boolean; xovra: React.ReactNode | boolean };
export type WinCard = { badge: string; title: string; body: string };
export type PriceRow = { label: string; competitor: string; xovra: string };
export type Faq = { q: string; a: string };
export type RelatedLink = { title: string; sub: string; href: string };

export type VsPageContent = {
  slug: string;
  competitorName: string;
  // Hero
  h1Prefix: string; // "Xovra vs Apollo —"
  h1Accent: string; // "pick the one that fits your ICP."
  lede: string;
  verdictPickCompetitor: string;
  verdictPickXovra: string;
  trustStrip?: string[];
  // Verdict section
  pickCompetitorBullets: string[];
  pickXovraBullets: string[];
  xovraBadge?: string; // "Recommended for SMB outbound"
  // Comparison table
  tableRows: Row[];
  // Wins sections
  competitorWins: WinCard[];
  xovraWins: WinCard[];
  // Pricing
  pricingRows: PriceRow[];
  pricingDisclaimer: string;
  // Migration
  migrationQuote: string;
  migrationCtaLabel: string;
  // FAQ
  faqs: Faq[];
  // Related
  related: RelatedLink[];
  // Final CTA
  finalCtaH2Prefix: string;
  finalCtaH2Accent: string;
};

export function buildMetadata(c: VsPageContent, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/vs/${c.slug}` },
    openGraph: {
      title,
      description,
      url: `/vs/${c.slug}`,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function Yes() {
  return <Check className="inline-block text-brand" size={18} strokeWidth={2.4} aria-label="Included" />;
}
function No() {
  return <Minus className="inline-block text-line" size={18} strokeWidth={2} aria-label="Not included" />;
}
function cell(v: React.ReactNode | boolean) {
  if (v === true) return <Yes />;
  if (v === false) return <No />;
  return <span className="text-[14px] text-body">{v}</span>;
}

export default function VsPageLayout({ c }: { c: VsPageContent }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Xovra vs ${c.competitorName} ${c.h1Accent}`,
    author: { "@type": "Organization", name: "Xovra AI" },
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://xovra.ai/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://xovra.ai/vs" },
      { "@type": "ListItem", position: 3, name: c.competitorName, item: `https://xovra.ai/vs/${c.slug}` },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative bg-white text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Reveal>
                <Eyebrow dark>Compare</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[72px]">
                  {c.h1Prefix} <span className="accent-text">{c.h1Accent}</span>
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="max-w-xl text-[17px] leading-relaxed text-white/70">{c.lede}</p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <CtaButton href="#comparison" variant="light">
                    See the full comparison
                  </CtaButton>
                  <a
                    href="#pricing-side-by-side"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                  >
                    Jump to pricing
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </a>
                </div>
              </Reveal>
              {c.trustStrip && (
                <Reveal delay={3}>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/60">
                    {c.trustStrip.map((item, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        {i === 0 && <Scale size={14} strokeWidth={2.2} className="text-[#c187fb]" />}
                        {i === 1 && <ShieldCheck size={14} strokeWidth={2.2} className="text-[#c187fb]" />}
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {/* Quick verdict card */}
            <Reveal delay={2} className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c187fb]">
                  Quick verdict
                </p>
                <div className="pb-4 border-b border-white/10">
                  <p className="mb-1 text-[15px] font-semibold text-white">Pick {c.competitorName} if &rarr;</p>
                  <p className="text-[13px] leading-relaxed text-white/60">{c.verdictPickCompetitor}</p>
                </div>
                <div className="pt-4">
                  <p className="mb-1 text-[15px] font-semibold text-[#c187fb]">Pick Xovra if &rarr;</p>
                  <p className="text-[13px] leading-relaxed text-white/80">{c.verdictPickXovra}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== Verdict two-column ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-12 md:mb-16">
            <Reveal>
              <h2 className="h-section">
                Pick in <span className="accent-text">30 seconds.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
            <Reveal>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-white p-7 md:p-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-body">
                    {c.competitorName}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-ink">Pick {c.competitorName} if</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {c.pickCompetitorBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-body">
                      <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-body" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article className="relative flex h-full flex-col gap-5 rounded-2xl border border-brand bg-white p-7 shadow-[0_24px_80px_rgba(139,47,248,0.18)] md:p-8">
                {c.xovraBadge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {c.xovraBadge}
                  </span>
                )}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">Xovra</p>
                  <h3 className="mt-1 text-2xl font-semibold text-brand">Pick Xovra if</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {c.pickXovraBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <Check size={18} strokeWidth={2.4} className="mt-0.5 shrink-0 text-brand" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== Comparison table ========== */}
      <section id="comparison" className="relative bg-white">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl md:mb-14">
            <Reveal>
              <Eyebrow className="mb-3">Side by side</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                The full <span className="accent-text">comparison.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">
                  Feature comparison between {c.competitorName} and Xovra.
                </caption>
                <thead>
                  <tr className="border-b border-line bg-surface">
                    <th className="w-[38%] px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-body">
                      Capability
                    </th>
                    <th className="px-5 py-4 text-left text-[15px] font-semibold text-ink">
                      {c.competitorName}
                    </th>
                    <th className="bg-white/60 px-5 py-4 text-left text-[15px] font-semibold text-brand">
                      Xovra
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.tableRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-surface/40" : ""}>
                      <th scope="row" className="px-5 py-4 text-left text-[14px] font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="px-5 py-4">{cell(row.competitor)}</td>
                      <td className="bg-brand/[0.03] px-5 py-4">{cell(row.xovra)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== Where Competitor wins (light) ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-10 md:mb-14">
            <Reveal>
              <Eyebrow className="mb-3">Honest strengths</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">Where {c.competitorName} wins</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6">
            {c.competitorWins.map((w, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 md:p-7">
                  <span className="inline-flex w-fit items-center rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-body">
                    {w.badge}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{w.title}</h3>
                  <p className="text-[15px] leading-relaxed text-body">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Where Xovra wins (dark) ========== */}
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
          <div className="mb-10 md:mb-14">
            <Reveal>
              <Eyebrow dark className="mb-3">
                Where Xovra leads
              </Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Where <span className="accent-text">Xovra wins</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {c.xovraWins.map((w, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                  <span className="inline-flex w-fit items-center rounded-full bg-white/[0.08] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c187fb]">
                    {w.badge}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{w.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/70">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Pricing side-by-side ========== */}
      <section id="pricing-side-by-side" className="relative bg-white">
        <div className="section-shell">
          <div className="mb-10 md:mb-14">
            <Reveal>
              <Eyebrow className="mb-3">Pricing side by side</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                How the <span className="accent-text">numbers line up.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
            <Reveal>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface p-7 md:p-8">
                <h3 className="text-xl font-semibold text-ink">{c.competitorName}</h3>
                <dl className="divide-y divide-line text-[15px]">
                  {c.pricingRows.map((p, i) => (
                    <div key={i} className="flex justify-between gap-4 py-3">
                      <dt className="text-body">{p.label}</dt>
                      <dd className="text-right text-ink">{p.competitor}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-brand bg-white p-7 shadow-[0_24px_80px_rgba(139,47,248,0.18)] md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand">Xovra</h3>
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    Most flexible
                  </span>
                </div>
                <dl className="divide-y divide-line text-[15px]">
                  {c.pricingRows.map((p, i) => (
                    <div key={i} className="flex justify-between gap-4 py-3">
                      <dt className="text-body">{p.label}</dt>
                      <dd className="text-right text-ink">{p.xovra}</dd>
                    </div>
                  ))}
                </dl>
                <CtaButton href="/pricing" className="mt-auto w-full justify-between">
                  See full Xovra pricing
                </CtaButton>
              </article>
            </Reveal>
          </div>

          <p className="mt-6 text-[13px] leading-relaxed text-body">{c.pricingDisclaimer}</p>
        </div>
      </section>

      {/* ========== Migration quote ========== */}
      <section className="relative bg-night text-white">
        <div className="section-shell">
          <Reveal>
            <div className="mx-auto max-w-4xl border-l-4 border-brand pl-6 md:pl-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c187fb]">
                Migration playbook
              </p>
              <blockquote className="text-2xl font-medium leading-snug text-white/90 md:text-3xl">
                &ldquo;{c.migrationQuote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <CtaButton href="/contact" variant="light">
                  {c.migrationCtaLabel}
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="relative bg-white">
        <div className="section-shell">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Pricing and fit FAQ</Eyebrow>
              <h2 className="h-section">
                Direct answers on <span className="accent-text">{c.competitorName}.</span>
              </h2>
              <p className="lead mt-4">
                Clear answers on billing, AI dialing, and when each tool is the right pick.
              </p>
              <CtaButton href="/contact" className="mt-6">
                Book an intro call
              </CtaButton>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-col gap-3">
                {c.faqs.map((f, i) => (
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

      {/* ========== Related + Final CTA ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-10">
            <Reveal>
              <Eyebrow className="mb-3">Related comparisons</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Benchmark Xovra against <span className="accent-text">other tools.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {c.related.map((r, i) => (
              <Reveal key={r.href} delay={(i + 1) as 1 | 2 | 3}>
                <a
                  href={r.href}
                  className="group block rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_rgba(139,47,248,0.12)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                    <ArrowRight
                      size={16}
                      strokeWidth={2.4}
                      className="text-brand transition-transform group-hover:translate-x-1"
                    />
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-body">{r.sub}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                  {c.finalCtaH2Prefix} <span className="accent-text">{c.finalCtaH2Accent}</span>
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  Launch your first campaign this week on Pay As You Go. Upgrade to Enterprise when you hit volume. Lead sourcing and CRM sync included.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="/pricing" variant="light">
                    Start dialing
                  </CtaButton>
                  <CtaButton href="/contact">Talk to sales</CtaButton>
                </div>
                <p className="mt-8 text-xs text-white/45">
                  No per-seat pricing &middot; No monthly minimum &middot; DNC + TCPA compliant
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
