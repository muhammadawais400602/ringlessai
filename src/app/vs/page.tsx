import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Compare Xovra | Apollo, ZoomInfo, D7, Vapi, Retell, Bland, Air.ai",
  description:
    "Honest head-to-head comparisons: Xovra vs Apollo, ZoomInfo, D7 Lead Finder, Vapi, Retell, Bland, and Air.ai. Features, pricing, and when each one wins.",
  alternates: { canonical: "/vs" },
  openGraph: {
    title: "Compare Xovra against every alternative",
    description:
      "Side-by-side comparisons with Apollo, ZoomInfo, D7 Lead Finder, Vapi, Retell, Bland, and Air.ai.",
    url: "/vs",
    type: "website",
  },
};

type Compare = {
  slug: string;
  name: string;
  group: "data" | "dialer" | "scraper";
  tag: string;
  blurb: string;
};

const items: Compare[] = [
  {
    slug: "apollo",
    name: "Xovra vs Apollo",
    group: "data",
    tag: "B2B database",
    blurb: "Licensed enterprise data with sequencing vs per-minute AI dialer with Google Maps sourcing. Honest trade-offs for SMB vs enterprise ICPs.",
  },
  {
    slug: "zoominfo",
    name: "Xovra vs ZoomInfo",
    group: "data",
    tag: "B2B database",
    blurb: "Enterprise B2B gold standard vs SMB-native AI dialer. When $15k+/yr contracts don't fit your motion.",
  },
  {
    slug: "d7-leadfinder",
    name: "Xovra vs D7 Lead Finder",
    group: "scraper",
    tag: "Scraper SaaS",
    blurb: "Closed-source Google Maps scraper at $29–$97/mo vs end-to-end dialer with sourcing bundled. When pure scraping isn't enough.",
  },
  {
    slug: "vapi",
    name: "Xovra vs Vapi",
    group: "dialer",
    tag: "AI voice platform",
    blurb: "Developer AI voice platform you stitch yourself vs opinionated end-to-end dialer at $0.06/min flat.",
  },
  {
    slug: "retell",
    name: "Xovra vs Retell",
    group: "dialer",
    tag: "AI voice SaaS",
    blurb: "Focused AI voice agent product vs full sourcing-to-sync outbound engine. Where each shape wins.",
  },
  {
    slug: "bland",
    name: "Xovra vs Bland",
    group: "dialer",
    tag: "Enterprise AI voice",
    blurb: "Enterprise-contracted AI voice vs transparent per-minute dialer. When procurement fits vs when it blocks you.",
  },
  {
    slug: "air-ai",
    name: "Xovra vs Air.ai",
    group: "dialer",
    tag: "AI voice (sales-led)",
    blurb: "Marketing-forward enterprise AI voice vs product-forward usage-based dialer. Transparent rate card vs custom quote.",
  },
];

const groups: { key: Compare["group"]; title: string; sub: string }[] = [
  { key: "dialer", title: "AI dialers", sub: "Head-to-head against the other AI voice outbound tools." },
  { key: "data", title: "B2B data vendors", sub: "How a per-minute dialer compares with database-first B2B vendors." },
  { key: "scraper", title: "Google Maps scrapers", sub: "When a scraper tool alone is enough, and when it isn't." },
];

export default function VsIndexPage() {
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
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow dark>Compare</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[72px]">
                Benchmark Xovra against <span className="accent-text">every alternative.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
                Honest head-to-head comparisons on features, pricing, and the tradeoffs that actually matter. We never trash the competitor — we tell you when they're the right call.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton href="/pricing" variant="light">
                  See Xovra pricing
                </CtaButton>
                <a
                  href="#dialer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.1]"
                >
                  Browse comparisons
                  <ArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Groups */}
      {groups.map((g) => {
        const rows = items.filter((i) => i.group === g.key);
        return (
          <section key={g.key} id={g.key} className="relative bg-white odd:bg-surface">
            <div className="section-shell">
              <div className="mb-10 max-w-2xl md:mb-14">
                <Reveal>
                  <Eyebrow className="mb-3">{g.sub}</Eyebrow>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="h-section">
                    {g.title}
                  </h2>
                </Reveal>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {rows.map((r, i) => (
                  <Reveal key={r.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <a
                      href={`/vs/${r.slug}`}
                      className="group relative block h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_rgba(139,47,248,0.12)] md:p-8"
                    >
                      <span className="mb-4 inline-flex items-center rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-body">
                        {r.tag}
                      </span>
                      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-ink">{r.name}</h3>
                      <p className="mb-6 text-[15px] leading-relaxed text-body">{r.blurb}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                        Read comparison
                        <ArrowRight
                          size={14}
                          strokeWidth={2.4}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
                  See the <span className="accent-text">rate card</span> directly.
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  Transparent per-minute pricing. No seats, no annual commitment, no sales call required.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="/pricing" variant="light">
                    Open pricing
                  </CtaButton>
                  <CtaButton href="/contact">Talk to sales</CtaButton>
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
