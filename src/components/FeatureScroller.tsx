"use client";

import { useEffect, useRef, useState } from "react";
import { CtaButton, Eyebrow } from "./ui";

const ART_W = 400;
const ART_H = 440;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);

function Bars({ n, h, color }: { n: number; h: number; color: string }) {
  return (
    <div className="flex items-center gap-[5px]" style={{ height: h }}>
      {Array.from({ length: n }).map((_, i) => (
        <span
          key={i}
          className="fs-bar block rounded-full"
          style={{
            width: 5,
            height: Math.round(h * (0.3 + Math.abs(Math.sin(i * 1.1)) * 0.7)),
            background: color,
            animationDelay: `${(i % 7) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function VoiceArt() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 top-[40%] w-0 h-0">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="fs-ripple absolute -left-[85px] -top-[85px] w-[170px] h-[170px] rounded-full border-2 border-brand/40"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </div>
      <div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at 30% 25%,#c084fc 0%,#8b2ff8 55%,#4c1d95 100%)",
          boxShadow: "0 24px 60px rgba(124,58,237,0.45)",
        }}
      >
        <Bars n={13} h={74} color="#fff" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[34px] flex gap-2 whitespace-nowrap">
        {["Budget", "Timeline", "Decision-maker"].map((l) => (
          <span
            key={l}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#4c1d95] shadow-md"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function TransferArt() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-[34px] right-[34px] top-[62px] flex items-center justify-between">
        <div
          className="w-[84px] h-[84px] rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ background: "linear-gradient(135deg,#8b2ff8,#4c1d95)", boxShadow: "0 14px 30px rgba(76,29,149,0.35)" }}
        >
          AI
        </div>
        <svg width="130" height="40" viewBox="0 0 130 40" fill="none" className="mx-2">
          <path className="fs-dash" d="M4 20 Q 34 -6 65 20 T 120 20" stroke="#2563eb" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
          <polyline points="112,11 123,20 112,29" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div
          className="w-[84px] h-[84px] rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ background: "linear-gradient(135deg,#2563eb,#1e3a8a)", boxShadow: "0 14px 30px rgba(30,58,138,0.35)" }}
        >
          REP
        </div>
      </div>
      <div className="absolute left-[40px] right-[40px] bottom-[44px] rounded-2xl bg-white p-4 shadow-xl">
        <div className="text-[11px] font-bold tracking-[0.14em] text-blue-600 mb-3">SCREEN POP</div>
        {["Name", "Pain points", "Qualification trail", "Pitch angle"].map((l, i) => (
          <div key={l} className="flex items-center justify-between py-[7px] border-t border-gray-100 first:border-t-0">
            <span className="text-[12px] font-medium text-gray-500">{l}</span>
            <span className="h-[7px] rounded-full bg-blue-100" style={{ width: 70 + ((i * 23) % 50) }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarArt() {
  const days = ["M", "T", "W", "T", "F"];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="rounded-2xl bg-white p-5 shadow-xl" style={{ width: 316 }}>
        <div className="grid grid-cols-5 gap-2 mb-2">
          {days.map((d, i) => (
            <div key={i} className="text-center text-[12px] font-bold text-gray-400">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`h-[44px] rounded-lg flex items-center justify-center text-[10px] font-bold ${
                i === 1 ? "fs-booked bg-[#65a30d] text-white" : i === 7 || i === 13 ? "bg-lime-200" : "bg-gray-100"
              }`}
            >
              {i === 1 ? "BOOKED" : ""}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-[#f7fee7] px-4 py-3">
          <span className="text-[13px] font-semibold text-gray-700">Tue · 2:00 PM</span>
          <span className="text-[11px] font-bold text-[#65a30d]">INVITE SENT</span>
        </div>
      </div>
    </div>
  );
}

function SourcingArt() {
  const pins: [number, number][] = [
    [90, 150],
    [210, 110],
    [150, 230],
    [290, 210],
    [110, 320],
    [260, 320],
  ];
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 -translate-x-1/2 top-[34px] flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-lg whitespace-nowrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.6" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="20" y1="20" x2="16" y2="16" />
        </svg>
        <span className="text-[13px] font-semibold text-gray-700">dentists · Dubai</span>
      </div>
      <svg className="absolute inset-0" viewBox="0 0 400 440" fill="none">
        <path d="M0 190 Q 120 150 220 200 T 400 190" stroke="#fff" strokeWidth="14" opacity="0.7" />
        <path d="M120 90 Q 150 220 110 440" stroke="#fff" strokeWidth="12" opacity="0.7" />
        <path d="M0 330 Q 140 290 260 340 T 400 320" stroke="#fff" strokeWidth="10" opacity="0.6" />
        <path d="M290 100 Q 270 240 310 440" stroke="#fff" strokeWidth="9" opacity="0.55" />
      </svg>
      {pins.map(([x, y], i) => (
        <div key={i} className="absolute" style={{ left: x, top: y }}>
          <span
            className="fs-ripple absolute -left-[14px] -top-[14px] w-7 h-7 rounded-full bg-red-500/40"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
          <span className="relative block w-4 h-4 rounded-full bg-[#dc2626] ring-4 ring-white shadow-md" />
        </div>
      ))}
    </div>
  );
}

function CrmArt() {
  const crms = ["HubSpot", "GoHighLevel", "Close", "Salesforce"];
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
      <div
        className="rounded-2xl px-8 py-3 text-white font-bold tracking-wide shadow-lg"
        style={{ background: "linear-gradient(135deg,#f59e0b,#b45309)" }}
      >
        LEAD
      </div>
      <svg width="40" height="62" viewBox="0 0 40 62" fill="none">
        <path className="fs-dash" d="M20 6 V56" stroke="#d97706" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
        <polyline points="11,16 20,6 29,16" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="11,46 20,56 29,46" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="grid grid-cols-2 gap-3" style={{ width: 300 }}>
        {crms.map((c) => (
          <div key={c} className="rounded-xl bg-white px-4 py-3 text-center text-[13px] font-bold text-gray-700 shadow-md">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClockArt() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      <svg width="230" height="230" viewBox="0 0 230 230">
        <defs>
          <linearGradient id="fsClock" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#164e63" />
          </linearGradient>
        </defs>
        <circle cx="115" cy="115" r="108" fill="url(#fsClock)" />
        <circle cx="115" cy="115" r="94" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.5" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={115 + Math.sin(a) * 82}
              y1={115 - Math.cos(a) * 82}
              x2={115 + Math.sin(a) * 92}
              y2={115 - Math.cos(a) * 92}
              stroke="#fff"
              strokeWidth={i % 3 === 0 ? 4 : 2}
              strokeLinecap="round"
            />
          );
        })}
        <line x1="115" y1="115" x2="115" y2="62" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <g className="fs-spin" style={{ transformOrigin: "115px 115px" }}>
          <line x1="115" y1="115" x2="115" y2="38" stroke="#a5f3fc" strokeWidth="3" strokeLinecap="round" />
        </g>
        <circle cx="115" cy="115" r="6" fill="#fff" />
      </svg>
      <div className="flex flex-col items-center gap-2">
        <span className="rounded-full bg-white px-4 py-1.5 text-[12px] font-bold tracking-[0.14em] text-[#0e7490] shadow-md">
          24/7 DIALING
        </span>
        <span className="text-[13px] font-medium text-[#155e75]">Nights · Weekends · Holidays</span>
      </div>
    </div>
  );
}

type Feature = {
  title: string;
  desc: string;
  link: string;
  caption: string;
  gradient: string;
  Art: () => React.ReactElement;
};

const FEATURES: Feature[] = [
  {
    title: "AI Voice Agent",
    desc: "Natural neural voices hold multi-turn conversations, handle objections, and qualify prospects against your rubric in real time: budget, timeline, decision-maker status. Prospects stay engaged. Closers stay closing.",
    link: "Hear the voice",
    caption: "Natural neural voices qualifying prospects in real time.",
    gradient: "linear-gradient(135deg,#f3e8ff 0%,#e9d5ff 50%,#d8b4fe 100%)",
    Art: VoiceArt,
  },
  {
    title: "Live Call Transfers",
    desc: "When a prospect qualifies, Xovra routes the call to your best-fit rep with a context-rich screen pop before they pick up: name, pain points, qualification trail, pitch angle. No clumsy handoffs, no cold opens.",
    link: "How transfers work",
    caption: "Context-rich handoffs routed to your best-fit rep.",
    gradient: "linear-gradient(135deg,#dbeafe 0%,#bfdbfe 50%,#93c5fd 100%)",
    Art: TransferArt,
  },
  {
    title: "Auto Appointment Booking",
    desc: "No rep available? Xovra books the meeting on your calendar instead, with timezone handling, dynamic availability, and instant invite delivery. Every qualified prospect becomes a calendar entry or a live transfer.",
    link: "Calendar logic",
    caption: "Every qualified prospect becomes a calendar entry.",
    gradient: "linear-gradient(135deg,#ecfccb 0%,#d9f99d 50%,#bef264 100%)",
    Art: CalendarArt,
  },
  {
    title: "Built-In Lead Sourcing",
    desc: "Every campaign ships with fresh leads. Xovra scrapes Google Maps for your niche and city, enriches each business from its own site, and scores by live Google Ads intent signals, before any number is dialed.",
    link: "Sourcing engine",
    caption: "Fresh Google Maps leads, scored by live intent signals.",
    gradient: "linear-gradient(135deg,#fee2e2 0%,#fecaca 50%,#fca5a5 100%)",
    Art: SourcingArt,
  },
  {
    title: "Two-Way CRM Sync",
    desc: "Qualified leads, call transcripts, outcomes and scheduled meetings flow directly into HubSpot, Close, GoHighLevel, Salesforce or your Google Sheet. Open formats, no vendor lock-in, no manual upload.",
    link: "Supported CRMs",
    caption: "Leads and transcripts flow straight into your CRM.",
    gradient: "linear-gradient(135deg,#fef3c7 0%,#fde68a 50%,#fcd34d 100%)",
    Art: CrmArt,
  },
  {
    title: "24/7 Coverage",
    desc: "Xovra works nights, weekends and holidays while your human reps sleep. Inbound inquiries get sub-60-second responses. Outbound campaigns keep warming the pipeline around the clock.",
    link: "Availability stats",
    caption: "Nights, weekends, holidays. The pipeline never sleeps.",
    gradient: "linear-gradient(135deg,#cffafe 0%,#a5f3fc 50%,#67e8f9 100%)",
    Art: ClockArt,
  },
];

const N = FEATURES.length;
const STEP_VH = 85;

type Slot = { cx: number; cy: number; w: number; h: number; rot: number; r: number; op: number; k: number };

// Slots for d = -2, -1, 0, 1, 2 (d = card index minus scroll progress)
function buildSlots(W: number, H: number): Slot[] {
  const mobile = W < 720;
  const circle = clamp(Math.min(H * 0.5, W * 0.25), 120, 300);
  const rw = clamp(Math.min(W * 0.28, H * 0.62), 170, 338);
  const rh = rw * 0.53;
  let ch = H * 0.97;
  let cw = ch * 0.84;
  const maxCw = mobile ? W * 0.8 : W * 0.38;
  if (cw > maxCw) {
    cw = maxCw;
    ch = cw / 0.84;
  }
  const center: Slot = { cx: mobile ? W / 2 : W * 0.485, cy: H / 2, w: cw, h: ch, rot: -6, r: 22, op: 1, k: 1 };
  const left: Slot = { cx: circle / 2, cy: H - circle / 2 - 2, w: circle, h: circle, rot: 0, r: circle / 2, op: 1, k: 0.78 };
  const right: Slot = { cx: W - rw / 2, cy: H - 64 - rh / 2, w: rw, h: rh, rot: 0, r: 16, op: 1, k: 0.95 };
  const offL: Slot = { ...left, cx: -circle / 2 - 80, op: 0 };
  const offR: Slot = { ...right, cx: W + rw / 2 + 80, op: 0 };
  if (mobile) return [offL, { ...offL }, center, { ...offR }, offR];
  return [offL, left, center, right, offR];
}

function sampleSlot(slots: Slot[], d: number): Slot {
  const x = clamp(d, -2, 2) + 2;
  const i = Math.min(3, Math.floor(x));
  const t = x - i;
  const a = slots[i];
  const b = slots[i + 1];
  return {
    cx: lerp(a.cx, b.cx, t),
    cy: lerp(a.cy, b.cy, t),
    w: lerp(a.w, b.w, t),
    h: lerp(a.h, b.h, t),
    rot: lerp(a.rot, b.rot, t),
    r: lerp(a.r, b.r, t),
    op: lerp(a.op, b.op, t),
    k: lerp(a.k, b.k, t),
  };
}

export default function FeatureScroller() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const artRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topCapRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const botCapRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let target = 0;
    let current = 0;
    let raf = 0;
    let last = 0;
    let shown = -1;

    const computeTarget = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const sc = clamp(-rect.top, 0, Math.max(total, 0));
      const x = total > 0 ? (sc / total) * (N - 1) : 0;
      const k = Math.min(Math.floor(x), N - 2);
      const f = x - k;
      // dwell: each card rests fully formed, the move happens in the middle of the step
      return k + smooth(clamp((f - 0.22) / 0.56, 0, 1));
    };

    const apply = (p: number) => {
      if (!W || !H) return;
      const slots = buildSlots(W, H);
      for (let i = 0; i < N; i++) {
        const wrap = wrapRefs.current[i];
        const shape = shapeRefs.current[i];
        const art = artRefs.current[i];
        if (!wrap || !shape || !art) continue;
        const d = i - p;
        const s = sampleSlot(slots, d);
        wrap.style.width = `${s.w}px`;
        wrap.style.height = `${s.h}px`;
        wrap.style.transform = `translate3d(${s.cx - s.w / 2}px, ${s.cy - s.h / 2}px, 0) rotate(${s.rot}deg)`;
        wrap.style.opacity = String(s.op);
        wrap.style.visibility = s.op < 0.01 ? "hidden" : "visible";
        wrap.style.zIndex = String(10 - Math.min(2, Math.round(Math.abs(d))));
        shape.style.borderRadius = `${s.r}px`;
        art.style.transform = `translate(-50%,-50%) scale(${Math.min(s.w / ART_W, s.h / ART_H) * s.k})`;
        const mobile = W < 720;
        const top = topCapRefs.current[i];
        const bot = botCapRefs.current[i];
        if (top) top.style.opacity = mobile ? "0" : String(Math.max(0, 1 - Math.abs(d + 1)));
        if (bot) bot.style.opacity = mobile ? "0" : String(Math.max(0, 1 - Math.abs(d - 1)));
      }
      const idx = clamp(Math.round(p), 0, N - 1);
      if (idx !== shown) {
        shown = idx;
        setActive(idx);
      }
    };

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - last) / 1000);
      last = ts;
      const diff = target - current;
      if (reduceMotion || Math.abs(diff) < 0.0005) {
        current = target;
        apply(current);
        raf = 0;
        return;
      }
      current += diff * (1 - Math.exp(-dt / 0.11));
      apply(current);
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      target = computeTarget();
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const measure = () => {
      W = stage.clientWidth;
      H = stage.clientHeight;
      apply(current);
    };

    target = current = computeTarget();
    measure();

    const ro = new ResizeObserver(() => {
      measure();
      kick();
    });
    ro.observe(stage);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      aria-label="Main features"
      className="relative bg-white text-ink"
      style={{ height: `${100 + (N - 1) * STEP_VH}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="shrink-0 px-6 md:px-14 lg:px-20 pt-[84px] md:pt-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-x-16 gap-y-4 lg:items-end">
            <div>
              <Eyebrow className="mb-3 md:mb-4">Main Features</Eyebrow>
              <div className="grid">
                {FEATURES.map((f, i) => (
                  <h2
                    key={f.title}
                    aria-hidden={i !== active}
                    className={`fs-swap h-section [grid-area:1/1] max-w-[640px] ${
                      i === active ? "is-on" : ""
                    }`}
                  >
                    {f.title}
                  </h2>
                ))}
              </div>
            </div>

            <div className="grid max-w-[420px] lg:pb-1">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  aria-hidden={i !== active}
                  className={`fs-swap [grid-area:1/1] flex flex-col items-start gap-4 ${i === active ? "is-on" : ""}`}
                >
                  <p className="text-[15px] leading-[1.55] text-body">{f.desc}</p>
                  <CtaButton href="#contact" tabIndex={i === active ? 0 : -1}>
                    {f.link}
                  </CtaButton>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[240px] px-6 md:px-14 lg:px-20 pt-4 pb-5 md:pb-7">
          <div ref={stageRef} className="relative h-full w-full">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                ref={(el) => {
                  wrapRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 pointer-events-none"
                style={{ visibility: "hidden", willChange: "transform, width, height, opacity" }}
              >
                <p
                  ref={(el) => {
                    topCapRefs.current[i] = el;
                  }}
                  className="absolute left-1/2 bottom-full mb-[14px] w-[250px] -translate-x-1/2 text-center text-[15px] leading-snug text-ink"
                  style={{ opacity: 0 }}
                >
                  {f.caption}
                </p>
                <div
                  ref={(el) => {
                    shapeRefs.current[i] = el;
                  }}
                  className="absolute inset-0 overflow-hidden"
                  style={{ background: f.gradient, boxShadow: "0 28px 70px rgba(20,20,40,0.16)" }}
                >
                  <div
                    ref={(el) => {
                      artRefs.current[i] = el;
                    }}
                    className="absolute left-1/2 top-1/2"
                    style={{ width: ART_W, height: ART_H }}
                  >
                    <f.Art />
                  </div>
                </div>
                <p
                  ref={(el) => {
                    botCapRefs.current[i] = el;
                  }}
                  className="absolute right-0 top-full mt-[14px] w-full min-w-[230px] text-left text-[15px] leading-snug text-ink"
                  style={{ opacity: 0 }}
                >
                  {f.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fs-swap { opacity: 0; transform: translateY(14px); pointer-events: none;
          transition: opacity var(--dur-base) ease, transform var(--dur-slow) var(--ease-out); }
        .fs-swap.is-on { opacity: 1; transform: none; pointer-events: auto;
          transition: opacity var(--dur-slow) ease .12s, transform var(--dur-slow) var(--ease-out) .12s; }
        .fs-bar { transform-origin: center; animation: fsBar 1.1s ease-in-out infinite; }
        .fs-ripple { animation: fsRipple 2.7s ease-out infinite; }
        .fs-dash { animation: fsDash 1.2s linear infinite; }
        .fs-spin { animation: fsSpin 14s linear infinite; }
        .fs-booked { animation: fsBooked 2.2s ease-in-out infinite; }
        @keyframes fsBar { 0%,100% { transform: scaleY(.45); } 50% { transform: scaleY(1); } }
        @keyframes fsRipple { from { transform: scale(1); opacity: .7; } to { transform: scale(2); opacity: 0; } }
        @keyframes fsDash { to { stroke-dashoffset: -24; } }
        @keyframes fsSpin { to { transform: rotate(360deg); } }
        @keyframes fsBooked { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @media (prefers-reduced-motion: reduce) {
          .fs-bar, .fs-ripple, .fs-dash, .fs-spin, .fs-booked { animation: none; }
        }
      `}</style>
    </section>
  );
}
