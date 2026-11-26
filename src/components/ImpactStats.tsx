"use client";

import { useEffect, useRef } from "react";
import { PhoneCall, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

type Stat = {
  value: string;
  label: string;
  tone: "brand" | "ink";
  tint: string;
  chips?: boolean;
  // position + size in the 1440-wide design space, and parallax speed
  x: number;
  y: number;
  w: number;
  rate: number;
};

// Order = the four floating cards around the giant word
const stats: Stat[] = [
  {
    value: "3×",
    label: "Qualified conversations lifted vs. a humans-only outbound SDR floor",
    tone: "brand",
    tint: "linear-gradient(rgba(139,47,248,0), rgba(139,47,248,0.15)), var(--surface)",
    chips: true,
    x: 518,
    y: 514,
    w: 389,
    rate: 0.48,
  },
  {
    value: "0",
    label: "SDR seats required to run a weekend campaign at full volume",
    tone: "brand",
    tint: "linear-gradient(rgba(139,47,248,0), rgba(139,47,248,0.06)), var(--surface)",
    x: 64,
    y: 132,
    w: 236,
    rate: 0.1,
  },
  {
    value: "24/7",
    label: "Nights, weekends, holidays. Your AI dialer never stops warming pipeline",
    tone: "ink",
    tint: "linear-gradient(#fff, rgba(139,47,248,0.06)), var(--surface)",
    x: 1091,
    y: 6,
    w: 285,
    rate: 0.24,
  },
  {
    value: "< 60s",
    label: "Live-transfer handoff time, from qualified prospect to rep on the line",
    tone: "ink",
    tint: "linear-gradient(#fff, rgba(139,47,248,0.06)), var(--surface)",
    x: 927,
    y: 513,
    w: 285,
    rate: 0.24,
  },
];

const DESIGN_W = 1440;
const DESIGN_H = 740;

function StatCard({ s, fluid = false }: { s: Stat; fluid?: boolean }) {
  return (
    <div
      className="flex h-full flex-col justify-between gap-4 rounded-[20px] border border-brand/10 p-6"
      style={{ background: s.tint, width: fluid ? "100%" : undefined }}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[clamp(2.6rem,6vw,4rem)] font-medium leading-none tracking-[-0.03em] ${s.tone === "brand" ? "text-brand" : "text-ink"}`}>
          {s.value}
        </span>
        {s.chips && (
          <span className="flex items-center">
            <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand/15 text-brand">
              <PhoneCall size={24} strokeWidth={1.8} />
            </span>
            <span className="-ml-2 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand text-white">
              <Sparkles size={24} strokeWidth={1.8} />
            </span>
          </span>
        )}
      </div>
      <p className="text-[16px] leading-[1.5] text-ink/70">{s.label}</p>
    </div>
  );
}

function Heading({ stacked = false }: { stacked?: boolean }) {
  return (
    <h2 className="relative text-center">
      <span
        className={
          stacked
            ? "mb-2 block text-[clamp(1.25rem,5vw,1.9rem)] font-medium tracking-[-0.02em] text-ink"
            : "absolute z-10 whitespace-nowrap text-[30px] font-medium tracking-[-0.02em] text-ink"
        }
        style={stacked ? undefined : { left: "calc(50% + 176px)", top: "47px", fontSize: 26 }}
      >
        Why Teams Replace Their
      </span>
      <span
        className="giant block font-normal leading-[1.05]"
        style={{
          fontSize: stacked ? "clamp(4.4rem,23vw,11rem)" : "250px",
          letterSpacing: "-0.06em",
          backgroundImage: "linear-gradient(var(--ink), color-mix(in srgb, var(--brand) 72%, #000) 78%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          paddingBottom: "0.08em",
        }}
      >
        SDR Floor
      </span>
    </h2>
  );
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!section || !wrap || !stage) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let scale = 1;
    let target = 0;
    let current = 0;
    let raf = 0;
    let last = 0;

    const apply = () => {
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translate3d(0, ${(-stats[i].rate * current) / scale}px, 0)`;
      });
    };

    const measure = () => {
      scale = Math.min(1.25, wrap.clientWidth / DESIGN_W);
      stage.style.transform = `scale(${scale})`;
      wrap.style.height = `${DESIGN_H * scale}px`;
      stage.style.marginLeft = `${(wrap.clientWidth - DESIGN_W * scale) / 2}px`;
      apply();
    };

    const computeTarget = () => {
      const top = section.getBoundingClientRect().top;
      return Math.max(0, Math.min(window.innerHeight * 0.15 - top, section.offsetHeight * 1.1));
    };

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      const diff = target - current;
      if (reduce || Math.abs(diff) < 0.3) {
        current = target;
        apply();
        raf = 0;
        return;
      }
      current += diff * (1 - Math.exp(-dt / 0.09));
      apply();
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      target = computeTarget();
      if (reduce) {
        current = 0;
        return;
      }
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    measure();
    target = current = reduce ? 0 : computeTarget();
    apply();

    const ro = new ResizeObserver(() => {
      measure();
      kick();
    });
    ro.observe(wrap);
    window.addEventListener("scroll", kick, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="benchmarks" ref={sectionRef} className="relative bg-white text-ink" style={{ overflowX: "clip" }}>
      {/* Desktop: giant word with floating parallax cards */}
      <div className="hidden pt-24 min-[1200px]:block md:pt-28">
        <div ref={wrapRef} className="relative w-full">
          <div ref={stageRef} className="absolute left-0 top-0 origin-top-left" style={{ width: DESIGN_W, height: DESIGN_H }}>
            <div className="absolute left-0 right-0 flex flex-col items-center text-center" style={{ top: 160 }}>
              <Reveal>
                <Eyebrow>Benchmarks</Eyebrow>
              </Reveal>
              <Reveal delay={1}>
                <p className="lead mt-3 max-w-[520px] !text-[15px]">
                  Measured across live AI-dialer campaigns dialing 1.4M+ enriched leads in US, UK, UAE and EU markets.
                </p>
              </Reveal>
            </div>

            <div className="absolute left-0 right-0" style={{ top: 262 }}>
              <Reveal delay={1}>
                <Heading />
              </Reveal>
            </div>

            {stats.map((s, i) => (
              <div
                key={s.value}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute will-change-transform"
                style={{ left: s.x, top: s.y, width: s.w }}
              >
                <Reveal delay={Math.min(i + 2, 6) as 2 | 3 | 4 | 5 | 6}>
                  <StatCard s={s} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Below 1200px: stacked heading and a card grid */}
      <div className="section-shell min-[1200px]:hidden">
        <div className="flex flex-col items-center text-center">
          <Eyebrow className="mb-4">Benchmarks</Eyebrow>
          <Heading stacked />
          <p className="lead mt-4 max-w-[520px]">
            Measured across live AI-dialer campaigns dialing 1.4M+ enriched leads in US, UK, UAE and EU markets.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((s) => (
            <StatCard key={s.value} s={s} fluid />
          ))}
        </div>
      </div>
    </section>
  );
}
