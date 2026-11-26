"use client";

import { useEffect, useRef, useState } from "react";
import { CornerUpRight } from "lucide-react";

const stats = [
  {
    value: "< 60s",
    label: "Live-transfer handoff time, from qualified prospect to rep on the line",
  },
  {
    value: "3×",
    label: "Qualified conversations lifted vs. a humans-only outbound SDR floor",
  },
  {
    value: "24/7",
    label: "Nights, weekends, holidays. Your AI dialer never stops warming pipeline",
  },
  {
    value: "0",
    label: "SDR seats required to run a weekend campaign at full volume",
  },
];

// Fan geometry in a 1200 x 540 design space: each card is a rotated rectangle
// anchored by its top-left corner; one shared circular mask carves the arc.
const DESIGN_W = 1200;
const DESIGN_H = 540;
const CARD_W = 249;
const CARD_H = 330;
const ARC = { cx: 600, cy: 930, r: 740 };
const CARDS = [
  { x: 0, y: 145, rot: -15.7 },
  { x: 310, y: 53, rot: -7.7 },
  { x: 643, y: 20, rot: 7.7 },
  { x: 960, y: 78, rot: 15.7 },
];

function Heading() {
  return (
    <>
      <span className="inline-flex items-center gap-1.5 text-[17px] font-medium text-[#8b2ff8]">
        Benchmarks
        <CornerUpRight size={16} strokeWidth={2.2} />
      </span>
      <h2 className="mt-4 max-w-[560px] text-balance text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.1] font-medium tracking-[-0.035em] text-[#0a0a0a]">
        Why Teams Replace Their{" "}
        <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">SDR Floor</span>
      </h2>
      <p className="mt-5 max-w-[520px] text-[15px] leading-[1.6] text-[#555]">
        Measured across live AI-dialer campaigns dialing 1.4M+ enriched leads in US, UK, UAE and EU markets.
      </p>
    </>
  );
}

export default function ImpactStats() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1.2, el.clientWidth / DESIGN_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <section id="benchmarks" className="relative bg-white text-[#0a0a0a]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
        {/* Desktop / tablet: tilted arc */}
        <div ref={wrapRef} className="hidden md:block w-full" style={{ height: DESIGN_H * (scale || 1) }}>
          <div
            className="relative origin-top-left"
            style={{
              width: DESIGN_W,
              height: DESIGN_H,
              transform: `scale(${scale || 1})`,
              visibility: scale ? "visible" : "hidden",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage: `radial-gradient(circle at ${ARC.cx}px ${ARC.cy}px, transparent ${ARC.r - 0.5}px, #000 ${ARC.r + 0.5}px)`,
                maskImage: `radial-gradient(circle at ${ARC.cx}px ${ARC.cy}px, transparent ${ARC.r - 0.5}px, #000 ${ARC.r + 0.5}px)`,
              }}
            >
              {CARDS.map((c, i) => (
                <div
                  key={stats[i].value}
                  className="absolute left-0 top-0 bg-[#f4f4f4] px-[27px] pt-[26px]"
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    transformOrigin: "0 0",
                    transform: shown
                      ? `translate(${c.x}px, ${c.y}px) rotate(${c.rot}deg)`
                      : `translate(${c.x}px, ${c.y + 70}px) rotate(${c.rot * 0.25}deg)`,
                    opacity: shown ? 1 : 0,
                    transition: `transform 1.1s cubic-bezier(.22,1,.36,1) ${i * 110}ms, opacity .8s ease ${i * 110}ms`,
                  }}
                >
                  <div className="text-[40px] leading-none font-medium tracking-[-0.03em] text-[#0a0a0a]">{stats[i].value}</div>
                  <p className="mt-3 text-[14px] leading-[1.45] text-[#666]">{stats[i].label}</p>
                </div>
              ))}
            </div>

            <div className="absolute left-0 right-0 flex flex-col items-center text-center" style={{ top: 312 }}>
              <Heading />
            </div>
          </div>
        </div>

        {/* Mobile: heading then 2x2 grid */}
        <div className="md:hidden">
          <div className="flex flex-col items-center text-center">
            <Heading />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.value} className="rounded-2xl bg-[#f4f4f4] p-5">
                <div className="text-[32px] leading-none font-medium tracking-[-0.03em]">{s.value}</div>
                <p className="mt-3 text-[13px] leading-[1.45] text-[#666]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
