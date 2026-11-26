"use client";

import { useEffect, useRef, useState } from "react";

type Feature = {
  tag: string;
  title: string;
  desc: string;
  link: string;
  shortDesc: string;
  gradient: string;
  accent: string;
  art: (size: "big" | "mid" | "small") => React.ReactNode;
};

function waveBars(count: number, accent: string) {
  return (
    <div className="flex items-end gap-[6px] h-full">
      {Array.from({ length: count }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.9)) * 70;
        return (
          <span
            key={i}
            style={{
              height: `${h}%`,
              background: accent,
              width: 6,
              borderRadius: 4,
              opacity: 0.85,
            }}
          />
        );
      })}
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    tag: "AI · LIVE CALL",
    title: "AI Voice Agent",
    desc: "Natural neural voices hold multi-turn conversations, handle objections, and qualify prospects against your rubric in real time: budget, timeline, decision-maker status. Prospects stay engaged. Closers stay closing.",
    shortDesc: "Natural neural voices qualifying prospects in real time.",
    link: "Hear the voice",
    gradient: "linear-gradient(135deg,#f3e8ff 0%,#e9d5ff 50%,#d8b4fe 100%)",
    accent: "#7c3aed",
    art: (size) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute rounded-full"
          style={{
            width: size === "big" ? 180 : 80,
            height: size === "big" ? 180 : 80,
            background: "radial-gradient(circle,#a855f7 0%,#7c3aed 60%,#4c1d95 100%)",
            boxShadow: "0 20px 60px rgba(124,58,237,0.45)",
          }}
        />
        <div
          className="relative z-10"
          style={{
            width: size === "big" ? "55%" : "60%",
            height: size === "big" ? 90 : 36,
          }}
        >
          {waveBars(size === "big" ? 14 : 8, "#fff")}
        </div>
      </div>
    ),
  },
  {
    tag: "PROSPECT · CLOSER",
    title: "Live Call Transfers",
    desc: "When a prospect qualifies, Xovra routes the call to your best-fit rep with a context-rich screen pop before they pick up: name, pain points, qualification trail, pitch angle. No clumsy handoffs, no cold opens.",
    shortDesc: "Context-rich handoffs routed to the best-fit closer.",
    link: "How transfers work",
    gradient: "linear-gradient(135deg,#dbeafe 0%,#bfdbfe 50%,#93c5fd 100%)",
    accent: "#2563eb",
    art: (size) => (
      <div className="relative w-full h-full flex items-center justify-center gap-6">
        <div
          className="rounded-full flex items-center justify-center text-white font-semibold"
          style={{
            width: size === "big" ? 92 : 44,
            height: size === "big" ? 92 : 44,
            background: "linear-gradient(135deg,#7c3aed,#4c1d95)",
            fontSize: size === "big" ? 14 : 10,
          }}
        >
          AI
        </div>
        <svg width={size === "big" ? 120 : 60} height="30" viewBox="0 0 120 30" fill="none">
          <path d="M5 15 Q 40 -10 60 15 T 115 15" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
          <polygon points="110,10 118,15 110,20" fill="#2563eb" />
        </svg>
        <div
          className="rounded-full flex items-center justify-center text-white font-semibold"
          style={{
            width: size === "big" ? 92 : 44,
            height: size === "big" ? 92 : 44,
            background: "linear-gradient(135deg,#2563eb,#1e3a8a)",
            fontSize: size === "big" ? 14 : 10,
          }}
        >
          REP
        </div>
      </div>
    ),
  },
  {
    tag: "M T W T F · BOOKED",
    title: "Auto Appointment Booking",
    desc: "No rep available? Xovra books the meeting on your calendar instead, with timezone handling, dynamic availability, and instant invite delivery. Every qualified prospect becomes a calendar entry or a live transfer.",
    shortDesc: "Every qualified prospect becomes a calendar entry.",
    link: "Calendar logic",
    gradient: "linear-gradient(135deg,#ecfccb 0%,#d9f99d 50%,#bef264 100%)",
    accent: "#65a30d",
    art: (size) => {
      const cell = size === "big" ? 36 : 18;
      const days = ["M", "T", "W", "T", "F"];
      return (
        <div
          className="bg-white rounded-xl p-3 shadow-lg"
          style={{ transform: size === "big" ? "rotate(-4deg)" : "rotate(-6deg)" }}
        >
          <div className="flex gap-1 mb-2 justify-center">
            {days.map((d, i) => (
              <div
                key={i}
                style={{ width: cell, height: cell, fontSize: size === "big" ? 12 : 8 }}
                className="flex items-center justify-center text-gray-500 font-semibold"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="flex gap-1 justify-center">
            {days.map((_, i) => (
              <div
                key={i}
                style={{ width: cell, height: cell }}
                className={`rounded-md ${i === 2 ? "bg-lime-500" : "bg-gray-100"}`}
              />
            ))}
          </div>
          {size === "big" && (
            <div className="mt-3 text-center">
              <div className="text-xs text-gray-400 font-semibold">BOOKED</div>
              <div className="text-sm font-bold text-gray-800">Wed · 2:00 PM</div>
            </div>
          )}
        </div>
      );
    },
  },
  {
    tag: "dentists · Dubai",
    title: "Built-In Lead Sourcing",
    desc: "Every campaign ships with fresh leads. Xovra scrapes Google Maps for your niche and city, enriches each business from its own site, and scores by live Google Ads intent signals, before any number is dialed.",
    shortDesc: "Fresh Google Maps leads, scored by intent signals.",
    link: "Sourcing engine",
    gradient: "linear-gradient(135deg,#fee2e2 0%,#fecaca 50%,#fca5a5 100%)",
    accent: "#dc2626",
    art: (size) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg
          viewBox="0 0 200 140"
          width={size === "big" ? 240 : 100}
          height={size === "big" ? 170 : 72}
          fill="none"
        >
          <rect x="0" y="0" width="200" height="140" rx="12" fill="#fff" opacity="0.6" />
          <path d="M10 40 Q 50 20 100 50 T 190 70" stroke="#fca5a5" strokeWidth="2" fill="none" />
          <path d="M10 90 Q 60 70 120 100 T 190 110" stroke="#fca5a5" strokeWidth="2" fill="none" />
          {[
            [40, 30],
            [120, 55],
            [80, 90],
            [160, 100],
            [50, 115],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="8" fill="#dc2626" />
              <circle cx={x} cy={y} r="3" fill="#fff" />
            </g>
          ))}
        </svg>
      </div>
    ),
  },
  {
    tag: "LEAD → CRM",
    title: "Two-Way CRM Sync",
    desc: "Qualified leads, call transcripts, outcomes and scheduled meetings flow directly into HubSpot, Close, GoHighLevel, Salesforce or your Google Sheet. Open formats, no vendor lock-in, no manual upload.",
    shortDesc: "Leads and transcripts flow into HubSpot, Close, more.",
    link: "Supported CRMs",
    gradient: "linear-gradient(135deg,#fef3c7 0%,#fde68a 50%,#fcd34d 100%)",
    accent: "#d97706",
    art: (size) => {
      const logos = ["HubSpot", "Close", "GHL", "Salesforce"];
      return (
        <div className="flex flex-col items-center gap-2">
          <div
            className="rounded-xl px-4 py-2 text-white font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg,#d97706,#b45309)",
              fontSize: size === "big" ? 16 : 10,
            }}
          >
            LEAD
          </div>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
            <path d="M12 4 V30" stroke="#d97706" strokeWidth="2" />
            <polyline points="6,24 12,30 18,24" stroke="#d97706" strokeWidth="2" fill="none" />
            <polyline points="6,10 12,4 18,10" stroke="#d97706" strokeWidth="2" fill="none" />
          </svg>
          <div className={`grid gap-2 ${size === "big" ? "grid-cols-2" : "grid-cols-4"}`}>
            {logos.map((l) => (
              <div
                key={l}
                className="bg-white rounded-lg px-3 py-2 shadow text-gray-700 font-semibold"
                style={{ fontSize: size === "big" ? 12 : 8 }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
  {
    tag: "24/7 DIALING",
    title: "24/7 Coverage",
    desc: "Xovra works nights, weekends and holidays while your human reps sleep. Inbound inquiries get sub-60-second responses. Outbound campaigns keep warming the pipeline around the clock.",
    shortDesc: "Nights, weekends, holidays. The pipeline never sleeps.",
    link: "Availability stats",
    gradient: "linear-gradient(135deg,#cffafe 0%,#a5f3fc 50%,#67e8f9 100%)",
    accent: "#0891b2",
    art: (size) => {
      const r = size === "big" ? 68 : 32;
      const cx = size === "big" ? 90 : 40;
      const cy = size === "big" ? 90 : 40;
      return (
        <svg
          width={size === "big" ? 180 : 80}
          height={size === "big" ? 180 : 80}
          viewBox={`0 0 ${cx * 2} ${cy * 2}`}
        >
          <defs>
            <linearGradient id="clockGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#164e63" />
            </linearGradient>
          </defs>
          <circle cx={cx} cy={cy} r={r} fill="url(#clockGrad)" />
          <circle cx={cx} cy={cy} r={r - 8} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x1 = cx + Math.cos(a) * (r - 6);
            const y1 = cy + Math.sin(a) * (r - 6);
            const x2 = cx + Math.cos(a) * (r - 14);
            const y2 = cy + Math.sin(a) * (r - 14);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="2" />;
          })}
          <line x1={cx} y1={cy} x2={cx} y2={cy - r + 20} stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={cx + r - 28} y2={cy} stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="4" fill="#fff" />
          {size === "big" && (
            <text x={cx} y={cy * 2 - 10} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">
              24 / 7
            </text>
          )}
        </svg>
      );
    },
  },
];

export default function FeatureScroller() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      // 6 features, each gets equal slice. Use smoother centre on slice.
      const idx = Math.min(FEATURES.length - 1, Math.floor(progress * FEATURES.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prev = (active - 1 + FEATURES.length) % FEATURES.length;
  const next = (active + 1) % FEATURES.length;

  return (
    <section
      ref={outerRef}
      className="relative bg-white text-gray-900"
      style={{ height: `${FEATURES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 md:px-14 lg:px-20 pt-14 md:pt-16">
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 mb-6"
          >
            Main Features
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-gray-900 max-w-3xl">
              An AI Dialer That Sources Its Own Leads
            </h2>
            <div className="max-w-sm">
              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Six engines that turn &ldquo;launch a campaign&rdquo; into qualified meetings on your calendar. No SDR headcount required.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition"
              >
                Explore Our Features
              </a>
            </div>
          </div>
        </div>

        {/* Cards stage */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 grid grid-cols-12 items-center px-6 md:px-14 lg:px-20 pb-10">
            {/* LEFT slot (previous feature, small circular) */}
            <div className="col-span-3 flex flex-col items-start gap-4">
              <p
                key={`left-text-${prev}`}
                className="text-sm md:text-[15px] text-gray-700 leading-snug max-w-[220px] slot-fade"
              >
                {FEATURES[prev].shortDesc}
              </p>
              <div
                key={`left-art-${prev}`}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center overflow-hidden slot-pop shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{ background: FEATURES[prev].gradient }}
              >
                {FEATURES[prev].art("small")}
              </div>
            </div>

            {/* CENTER slot (current, big tilted) */}
            <div className="col-span-6 flex flex-col items-center">
              <div
                key={`center-head-${active}`}
                className="text-center mb-5 slot-fade"
              >
                <div
                  className="inline-block text-[11px] tracking-[0.18em] font-semibold px-3 py-1 rounded-full mb-3"
                  style={{
                    color: FEATURES[active].accent,
                    background: `${FEATURES[active].accent}15`,
                  }}
                >
                  {FEATURES[active].tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {FEATURES[active].title}
                </h3>
              </div>
              <div
                key={`center-art-${active}`}
                className="relative w-[320px] h-[380px] md:w-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] slot-tilt"
                style={{ background: FEATURES[active].gradient }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {FEATURES[active].art("big")}
                </div>
              </div>
            </div>

            {/* RIGHT slot (next feature, small rectangular) */}
            <div className="col-span-3 flex flex-col items-end gap-4">
              <div
                key={`right-art-${next}`}
                className="w-56 h-44 md:w-64 md:h-48 rounded-2xl flex items-center justify-center overflow-hidden slot-pop shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{ background: FEATURES[next].gradient }}
              >
                {FEATURES[next].art("mid")}
              </div>
              <p
                key={`right-text-${next}`}
                className="text-sm md:text-[15px] text-gray-700 leading-snug max-w-[240px] text-right slot-fade"
              >
                {FEATURES[next].shortDesc}
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {FEATURES.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 28 : 10,
                  background: i === active ? FEATURES[active].accent : "#e5e7eb",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slot-fade {
          animation: slotFade 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .slot-pop {
          animation: slotPop 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .slot-tilt {
          animation: slotTilt 750ms cubic-bezier(0.22, 1, 0.36, 1) both;
          transform: rotate(-3deg);
        }
        @keyframes slotFade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slotPop {
          from {
            opacity: 0;
            transform: scale(0.82);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slotTilt {
          from {
            opacity: 0;
            transform: rotate(6deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(-3deg) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
