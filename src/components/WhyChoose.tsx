"use client";

import { useCallback } from "react";
import { ArrowRight, Check, CornerUpRight } from "lucide-react";
import Reveal from "./Reveal";

function SpeedViz() {
  return (
    <div className="relative flex items-center justify-center">
      <svg width="124" height="124" viewBox="0 0 124 124" className="-rotate-90">
        <defs>
          <linearGradient id="wcRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ec6afb" />
            <stop offset="100%" stopColor="#8b2ff8" />
          </linearGradient>
        </defs>
        <circle cx="62" cy="62" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle
          className="wc-ring"
          cx="62"
          cy="62"
          r="52"
          fill="none"
          stroke="url(#wcRing)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="327"
          strokeDashoffset="327"
        />
      </svg>
      <span className="absolute text-[26px] font-semibold tracking-[-0.03em] text-white">&lt; 60s</span>
    </div>
  );
}

function ScaleViz() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const heights = [46, 58, 52, 64, 56, 84, 92];
  return (
    <div className="flex h-full items-end gap-2.5 pb-1">
      {days.map((d, i) => {
        const weekend = i >= 5;
        return (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className={`w-7 rounded-md ${weekend ? "wc-bar-glow" : ""}`}
              style={{
                height: heights[i] * 0.95,
                background: weekend
                  ? "linear-gradient(to top,#8b2ff8,#ec6afb)"
                  : "linear-gradient(to top,rgba(139,47,248,0.35),rgba(139,47,248,0.12))",
                animationDelay: `${i * 0.15}s`,
              }}
            />
            <span className={`text-[10px] font-semibold ${weekend ? "text-[#ec6afb]" : "text-white/40"}`}>{d}</span>
          </div>
        );
      })}
    </div>
  );
}

function QualityViz() {
  const items = ["Budget", "Timeline", "Decision-maker"];
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((l, i) => (
          <span
            key={l}
            className="wc-pop inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/90"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <Check size={12} strokeWidth={3} className="text-[#34d399]" />
            {l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#ec6afb]" />
        <ArrowRight size={14} className="text-[#ec6afb]" />
        <span className="rounded-full bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-[0_0_24px_rgba(236,106,251,0.45)]">
          Closer
        </span>
      </div>
    </div>
  );
}

function PerkViz() {
  const rows = [92, 74, 58];
  return (
    <div className="flex w-full max-w-[300px] flex-col gap-2">
      {rows.map((w, i) => (
        <div
          key={i}
          className={`wc-slide flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
            i === 0 ? "border-[#8b2ff8]/50 bg-[#8b2ff8]/15" : "border-white/[0.07] bg-white/[0.03]"
          }`}
          style={{ animationDelay: `${i * 0.25}s` }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={i === 0 ? "#ec6afb" : "rgba(255,255,255,0.35)"}>
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span className="h-1.5 flex-1 rounded-full bg-white/15" />
          <span className="h-1.5 rounded-full bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8]" style={{ width: `${w * 0.4}px` }} />
        </div>
      ))}
    </div>
  );
}

function ComplianceViz() {
  const rows = ["DNC lists scrubbed", "TCPA consent logged", "STIR/SHAKEN attestation"];
  return (
    <div className="flex w-full max-w-[300px] flex-col gap-2">
      {rows.map((l, i) => (
        <div
          key={l}
          className="wc-slide flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2.5"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#34d399]/15">
            <Check size={12} strokeWidth={3} className="text-[#34d399]" />
          </span>
          <span className="text-[13px] font-medium text-white/85">{l}</span>
        </div>
      ))}
    </div>
  );
}

function EconomicsViz() {
  return (
    <div className="w-full max-w-[300px]">
      <svg viewBox="0 0 300 120" className="w-full" fill="none">
        <defs>
          <linearGradient id="wcLine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="300" y2="0">
            <stop offset="0%" stopColor="#ec6afb" />
            <stop offset="100%" stopColor="#8b2ff8" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
        ))}
        <path
          className="wc-draw"
          d="M0 96 C60 92 110 78 160 58 S250 20 300 8"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="2.5"
          strokeDasharray="5 6"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="wc-draw"
          d="M0 66 L300 66"
          stroke="url(#wcLine)"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="1"
          style={{ filter: "drop-shadow(0 0 8px rgba(236,106,251,0.7))" }}
        />
        <circle cx="300" cy="66" r="5" fill="#ec6afb" />
      </svg>
      <div className="mt-1 flex justify-between text-[11px] font-medium">
        <span className="text-white/45">Per-dial markup</span>
        <span className="text-[#ec6afb]">Fixed cost</span>
      </div>
    </div>
  );
}

type Item = {
  tag: string;
  title: string;
  body: string;
  foot: string;
  span: string;
  Viz: () => React.ReactElement;
};

const items: Item[] = [
  {
    tag: "Speed",
    title: "Dials in Under 60 Seconds.",
    body: "Inbound leads get a live AI conversation before they finish typing. Outbound campaigns fire the moment a list drops. Human SDRs can't match the clock.",
    foot: "Speed-to-lead that converts.",
    span: "md:col-span-3 lg:col-span-2",
    Viz: SpeedViz,
  },
  {
    tag: "Scale",
    title: "Weekend Pipeline, No Weekend Staff.",
    body: "Xovra dials nights, weekends, and holidays at full volume. While your human team sleeps, your AI SDR keeps warming the pipeline and booking meetings on their Monday calendar.",
    foot: "24/7 coverage, zero overtime.",
    span: "md:col-span-3 lg:col-span-4",
    Viz: ScaleViz,
  },
  {
    tag: "Quality",
    title: "Qualified Before Transfer.",
    body: "Three-dimensional qualification (budget, timeline, decision-maker) happens during the call. Only transfers reach your closers. They never pick up a cold row again.",
    foot: "Closers only talk to closers-ready prospects.",
    span: "md:col-span-3 lg:col-span-3",
    Viz: QualityViz,
  },
  {
    tag: "Perk",
    title: "Fresh Leads, Built In.",
    body: "Every campaign ships with a scored, enriched prospect list. No buying Apollo seats, no manual CSV sanding, no stale ZoomInfo pulls. Xovra sources from Google Maps and scores by live Google Ads intent.",
    foot: "Dialer and lead list, one tool.",
    span: "md:col-span-3 lg:col-span-3",
    Viz: PerkViz,
  },
  {
    tag: "Compliance",
    title: "DNC and TCPA, Done Right.",
    body: "Every number is scrubbed against federal and state DNC lists before dial. TCPA consent is logged per call. STIR/SHAKEN attestation is configurable per outbound pool. Documented, not buried.",
    foot: "Enterprise-grade, open posture.",
    span: "md:col-span-3 lg:col-span-4",
    Viz: ComplianceViz,
  },
  {
    tag: "Economics",
    title: "No Per-Dial Markup.",
    body: "Pay for the engine, not the attempt. Run the same pipeline every week. Scale from one market to a continent without an SDR bill that scales with you.",
    foot: "Fixed-cost outbound.",
    span: "md:col-span-3 lg:col-span-2",
    Viz: EconomicsViz,
  },
];

function Card({ it, children }: { it: Item; children: React.ReactNode }) {
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <article
      onMouseMove={onMove}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0817]/80 p-6 md:p-7 backdrop-blur transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#8b2ff8]/60 ${it.span}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(236,106,251,0.16), transparent 60%)",
        }}
      />
      <span className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] transition-all duration-500 group-hover:w-full" />
      {children}
    </article>
  );
}

export default function WhyChoose() {
  return (
    <section id="why-xovra" className="relative overflow-hidden bg-[#07040d] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(139,47,248,0.28), transparent 70%), radial-gradient(ellipse 45% 35% at 90% 100%, rgba(236,106,251,0.14), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-20 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center md:mb-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ec6afb] shadow-[0_0_10px_#ec6afb]" />
              Why Sales Teams Pick Xovra
              <CornerUpRight size={13} strokeWidth={2.2} className="text-[#ec6afb]" />
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
              Six Reasons Teams Switch to{" "}
              <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">AI Dialing</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.6] text-white/60">
              Traditional SDR floors are expensive, slow, and sleep eight hours a night. Here&apos;s how an AI dialer wins on every dimension that matters.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={((i % 3) + 1) as 1 | 2 | 3} className={`h-full ${it.span}`}>
              <Card it={{ ...it, span: "" }}>
                <div className="relative mb-6 flex h-[168px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <it.Viz />
                </div>
                <div className="relative flex flex-1 flex-col">
                  <span className="inline-block self-start rounded-full border border-[#8b2ff8]/40 bg-[#8b2ff8]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8a8ff]">
                    {it.tag}
                  </span>
                  <h3 className="mt-4 text-[21px] font-semibold leading-tight tracking-[-0.025em]">{it.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-white/60">{it.body}</p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-[14px] font-medium text-[#ec6afb]">
                    {it.foot}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .wc-ring { animation: wcRing 3.2s cubic-bezier(.4,0,.2,1) infinite; }
        .wc-bar-glow { animation: wcGlow 2.4s ease-in-out infinite; box-shadow: 0 0 22px rgba(236,106,251,.45); }
        .wc-pop { animation: wcPop 3s ease-in-out infinite; }
        .wc-slide { animation: wcSlide 3.2s ease-in-out infinite; }
        .wc-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: wcDraw 2.6s ease-out infinite; }
        @keyframes wcRing { 0% { stroke-dashoffset: 327; } 55%,100% { stroke-dashoffset: 24; } }
        @keyframes wcGlow { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.35); } }
        @keyframes wcPop { 0%,10% { opacity: .35; transform: scale(.92); } 25%,85% { opacity: 1; transform: scale(1); } 100% { opacity: .35; transform: scale(.92); } }
        @keyframes wcSlide { 0%,8% { opacity: 0; transform: translateX(-10px); } 25%,85% { opacity: 1; transform: none; } 100% { opacity: 0; transform: translateX(10px); } }
        @keyframes wcDraw { 0% { stroke-dashoffset: 1; } 60%,100% { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .wc-ring { animation: none; stroke-dashoffset: 24; }
          .wc-bar-glow, .wc-pop, .wc-slide { animation: none; }
          .wc-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
