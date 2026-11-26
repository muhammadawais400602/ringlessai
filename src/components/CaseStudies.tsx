"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

const cases = [
  {
    tag: "Home Services · US Southeast",
    badge: "Weekend Autopilot",
    metrics: [
      { v: "412", l: "dials / wk" },
      { v: "40", l: "weekend bookings" },
    ],
    headline: "Our two SDRs couldn't touch Saturdays.",
    body: "Xovra dials from Friday night through Sunday, and Monday morning our closers see 40 booked meetings on the calendar.",
    by: "Home-services agency · US Southeast",
  },
  {
    tag: "AI Agency · Europe",
    badge: "Live Transfer Pilot",
    metrics: [
      { v: "1,100", l: "dials / wk" },
      { v: "$8", l: "per qualified call" },
    ],
    headline: "The live-transfer handoff is seamless.",
    body: "The AI qualifies, our best closer gets a context-loaded screen pop, and the prospect never knows the handoff happened. Close rate up 31%.",
    by: "AI-build agency · Europe",
  },
  {
    tag: "Call Center · APAC",
    badge: "Replaced 20 SDRs",
    metrics: [
      { v: "4,800", l: "dials / wk" },
      { v: "31%", l: "close uplift" },
    ],
    headline: "We reassigned 20 dialers to closing roles.",
    body: "Xovra runs the top-of-funnel at 24/7 pace and transfers only qualified prospects. Payback landed inside the first quarter.",
    by: "Lead-gen call center · APAC",
  },
];

const CYCLE_MS = 7000;

function parse(v: string) {
  const m = v.match(/^(\D*)([\d,]+(?:\.\d+)?)(\D*)$/);
  if (!m) return null;
  return { prefix: m[1], num: parseFloat(m[2].replace(/,/g, "")), suffix: m[3], commas: m[2].includes(",") };
}

function CountUp({ value, play }: { value: string; play: boolean }) {
  const parsed = parse(value);
  const [n, setN] = useState(parsed ? parsed.num : 0);

  useEffect(() => {
    if (!parsed || !play) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(parsed.num * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, play]);

  if (!parsed) return <>{value}</>;
  const shown = Math.round(n);
  return (
    <>
      {parsed.prefix}
      {parsed.commas ? shown.toLocaleString("en-US") : shown}
      {parsed.suffix}
    </>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const aggRef = useRef<HTMLDivElement | null>(null);
  const [aggIn, setAggIn] = useState(false);

  useEffect(() => {
    const el = showcaseRef.current;
    const agg = aggRef.current;
    if (!el || !agg) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    const io2 = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAggIn(true);
          io2.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    io2.observe(agg);
    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!inView || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % cases.length), CYCLE_MS);
    return () => window.clearTimeout(id);
  }, [active, inView, paused]);

  const c = cases[active];

  return (
    <section id="pilot-results" className="relative bg-white text-ink">
      <div className="section-shell">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Pilot Results</Eyebrow>
          </Reveal>

          <Reveal delay={1} className="w-full">
            <h2 className="mt-2 w-full font-extrabold leading-[0.94] tracking-[-0.055em] text-[clamp(2.6rem,9.2vw,8.4rem)]">
              {["Teams Already", "Letting Xovra Dial"].map((t) => (
                <span key={t} className="block bg-gradient-to-b from-ink from-25% to-ink/0 bg-clip-text pb-[0.04em] text-transparent">
                  {t}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="lead mt-6 max-w-[500px]">
              <span className="text-ink">Results from early access AI-dialer deployments, Q3 to Q4 2026.</span> Logos withheld pending
              contracted case-study rights.
            </p>
          </Reveal>
        </div>

        {/* Case-study showcase */}
        <Reveal delay={3}>
          <div
            ref={showcaseRef}
            className="mt-14 grid grid-cols-1 gap-4 md:mt-[72px] lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div role="tablist" aria-label="Pilot case studies" className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {cases.map((k, i) => {
                const on = i === active;
                return (
                  <button
                    key={k.badge}
                    role="tab"
                    id={`case-tab-${i}`}
                    aria-selected={on}
                    aria-controls="case-panel"
                    onClick={() => setActive(i)}
                    className={`group relative min-w-[250px] shrink-0 overflow-hidden rounded-2xl border p-5 text-left transition-[background-color,border-color,box-shadow] duration-[var(--dur-base)] lg:min-w-0 ${
                      on ? "border-brand/30 bg-white shadow-[0_14px_40px_rgba(139,47,248,0.12)]" : "border-line bg-surface hover:bg-white"
                    }`}
                  >
                    <span className="block text-[13px] font-medium text-subtle">{k.tag}</span>
                    <span className={`mt-1.5 block text-[19px] font-semibold tracking-[-0.02em] transition-colors ${on ? "text-ink" : "text-body"}`}>
                      {k.badge}
                    </span>
                    <span className="mt-3 flex items-baseline gap-2">
                      <span className={`text-[26px] font-semibold leading-none tracking-[-0.04em] ${on ? "accent-text" : "text-ink/40"}`}>{k.metrics[0].v}</span>
                      <span className="text-[12px] text-subtle">{k.metrics[0].l}</span>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-transparent">
                      {on && (
                        <span
                          key={`bar-${active}`}
                          className="cs-bar block h-full origin-left bg-gradient-to-r from-neon to-brand"
                          style={{ animationDuration: `${CYCLE_MS}ms`, animationPlayState: paused || !inView ? "paused" : "running" }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="case-panel"
              role="tabpanel"
              aria-labelledby={`case-tab-${active}`}
              className="relative overflow-hidden rounded-3xl bg-night text-white"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 70% at 100% 0%, rgba(139,47,248,0.4), transparent 70%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(236,106,251,0.18), transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                  maskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, #000 20%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, #000 20%, transparent 75%)",
                }}
              />

              <div key={active} className="cs-swap relative flex min-h-[440px] flex-col justify-between gap-10 p-7 md:min-h-[480px] md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[14px] font-medium text-white/60">{c.tag}</span>
                  <span className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur">
                    {c.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 md:gap-10">
                  {c.metrics.map((m, i) => (
                    <div key={m.l}>
                      <div
                        className={`text-[clamp(2.8rem,7.4vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.05em] ${i === 0 ? "accent-text" : "text-white"}`}
                      >
                        <CountUp value={m.v} play={inView} />
                      </div>
                      <div className="mt-3 text-[14px] text-white/55">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="max-w-[640px]">
                  <h3 className="text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em]">{c.headline}</h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-white/65">{c.body}</p>
                  <p className="mt-5 flex items-center gap-2 text-[13px] text-white/45">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                    {c.by}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Aggregate benchmark as a comparison */}
        <Reveal delay={1}>
          <div ref={aggRef} className="mt-4 grid grid-cols-1 gap-8 rounded-3xl bg-surface p-7 md:p-10 lg:mt-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="flex flex-col justify-between gap-8">
              <span className="w-fit rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium">Aggregate Benchmark</span>
              <h3 className="max-w-[600px] text-balance text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
                Across pilot teams, Xovra qualified more prospects in 72 hours than human SDR floors qualified in 14 days.
              </h3>
              <div className="flex gap-10">
                <div>
                  <div className="accent-text text-[clamp(2.6rem,5vw,3.8rem)] font-semibold leading-none tracking-[-0.05em]">72h</div>
                  <div className="mt-2 max-w-[170px] text-[13px] leading-snug text-subtle">To match a 14-day SDR qualified total</div>
                </div>
                <div>
                  <div className="text-[clamp(2.6rem,5vw,3.8rem)] font-semibold leading-none tracking-[-0.05em]">3×</div>
                  <div className="mt-2 max-w-[210px] text-[13px] leading-snug text-subtle">Qualified lift vs. humans-only</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-7 rounded-2xl bg-white p-6 md:p-8">
              <div>
                <div className="mb-2.5 flex items-baseline justify-between text-[14px]">
                  <span className="font-semibold">Xovra</span>
                  <span className="text-body">72 hours</span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon to-brand shadow-[0_0_24px_rgba(139,47,248,0.45)]"
                    style={{
                      width: aggIn ? "21.4%" : "0%",
                      transition: "width 1.4s var(--ease-out) 0.2s",
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2.5 flex items-baseline justify-between text-[14px]">
                  <span className="font-semibold">Human SDR floors</span>
                  <span className="text-body">14 days</span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full rounded-full bg-[#cfcfcf]"
                    style={{
                      width: aggIn ? "100%" : "0%",
                      transition: "width 1.6s var(--ease-out) 0.35s",
                    }}
                  />
                </div>
              </div>
              <p className="text-[13px] leading-snug text-subtle">
                Measured across 1.4M+ AI-dialer calls in US, UK, UAE, and EU markets
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .cs-bar { animation-name: csBar; animation-timing-function: linear; animation-fill-mode: forwards; }
        .cs-swap { animation: csSwap var(--dur-slow) var(--ease-out) both; }
        @keyframes csBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes csSwap { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .cs-bar { animation: none; transform: scaleX(1); }
          .cs-swap { animation: none; }
        }
      `}</style>
    </section>
  );
}
