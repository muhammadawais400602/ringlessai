import styles from "./feature-grid.module.css";

function Infographic({ kind }: { kind: string }) {
  switch (kind) {
    case "routing":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <defs>
            <linearGradient id="r1" x1="0" x2="1">
              <stop offset="0" stopColor="#ec6afb" />
              <stop offset="1" stopColor="#8b2ff8" />
            </linearGradient>
          </defs>
          <path d="M10 20 H90 V55 H140" stroke="#3a2a4a" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M10 90 H60 V55" stroke="#3a2a4a" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M10 20 H90 V55 H140" stroke="url(#r1)" strokeWidth="2" fill="none" className={styles.dashFlow} />
          <circle cx="140" cy="55" r="18" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.5" />
          <g transform="translate(140 55)" stroke="#ec6afb" strokeWidth="1.3" fill="none" strokeLinecap="round">
            <circle r="7" />
            <path d="M-4 0 L4 0 M0 -4 L0 4" />
          </g>
          <circle cx="10" cy="20" r="3" fill="#ec6afb" className={styles.ping} />
          <circle cx="10" cy="90" r="3" fill="#ec6afb" className={styles.ping2} />
        </svg>
      );
    case "cadence":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <path d="M0 30 H220" stroke="#3a2a4a" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M0 80 H220" stroke="#3a2a4a" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="110" y1="10" x2="110" y2="100" stroke="#ec6afb" strokeWidth="2" className={styles.bar} />
          <g className={styles.pulse}>
            <circle cx="60" cy="55" r="14" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.5" />
            <path d="M54 55 L59 60 L68 50" stroke="#ec6afb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className={styles.pulse2}>
            <circle cx="160" cy="55" r="10" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.3" />
            <path d="M155 55 L159 59 L166 51" stroke="#ec6afb" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <path d="M0 55 H220" stroke="#3a2a4a" strokeWidth="1" strokeDasharray="4 5" />
          <path d="M10 55 H170" stroke="#ec6afb" strokeWidth="2.5" className={styles.streak} strokeLinecap="round" />
          <circle cx="178" cy="55" r="22" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.5" />
          <path d="M180 42 L170 58 H180 L175 70 L188 52 H178 Z" fill="#ec6afb" className={styles.bolt} />
        </svg>
      );
    case "booking":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <rect x="60" y="18" width="100" height="78" rx="8" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.5" />
          <path d="M60 36 H160" stroke="#8b2ff8" strokeWidth="1.2" />
          <circle cx="80" cy="27" r="2.5" fill="#ec6afb" />
          <circle cx="140" cy="27" r="2.5" fill="#ec6afb" />
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={70 + c * 22}
                y={46 + r * 16}
                width="16"
                height="10"
                rx="2"
                fill="#2a1540"
              />
            )),
          )}
          <rect x="114" y="62" width="16" height="10" rx="2" fill="#ec6afb" className={styles.slot} />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <path d="M0 95 H220 M0 65 H220 M0 35 H220" stroke="#2a1540" strokeWidth="1" strokeDasharray="3 5" />
          <g className={styles.bars}>
            <rect x="30" y="65" width="22" height="30" rx="3" fill="#8b2ff8" />
            <rect x="70" y="45" width="22" height="50" rx="3" fill="#a74cf7" />
            <rect x="110" y="55" width="22" height="40" rx="3" fill="#c76efb" />
            <rect x="150" y="25" width="22" height="70" rx="3" fill="#ec6afb" />
          </g>
          <path d="M40 80 L80 60 L120 70 L160 40" stroke="#ec6afb" strokeWidth="2" fill="none" className={styles.line} strokeLinecap="round" />
        </svg>
      );
    case "dids":
      return (
        <svg viewBox="0 0 220 110" className={styles.graphic}>
          <g transform="translate(110 55)" className={styles.rotor}>
            <circle r="34" fill="none" stroke="#3a2a4a" strokeWidth="1.2" strokeDasharray="4 6" />
            <circle r="34" fill="none" stroke="#ec6afb" strokeWidth="1.5" strokeDasharray="60 200" strokeLinecap="round" className={styles.ring} />
          </g>
          <rect x="68" y="42" width="84" height="26" rx="6" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.3" />
          <text x="110" y="60" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#ec6afb" className={styles.phone}>
            +1 415 •••
          </text>
          <g transform="translate(176 36)">
            <circle r="7" fill="#1b0e26" stroke="#8b2ff8" strokeWidth="1.3" />
            <path d="M-3 -1 L-3 2 M-1 1 L1 1 M3 -1 L3 2" stroke="#ec6afb" strokeWidth="1.2" fill="none" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

const cards = [
  {
    kind: "routing",
    title: "Smart Routing",
    body: "Qualified prospects route to the right rep in real time with full context — so top closers handle the hottest leads fast.",
    cta: "Explore routing logic",
  },
  {
    kind: "cadence",
    title: "Multi-Touch Cadence",
    body: "Route warm leads to live calendars in seconds, confirming time, intent, and details without cumbersome back-and-forth emails.",
    cta: "Cadence architecture",
  },
  {
    kind: "speed",
    title: "Speed to Lead (<60s)",
    body: "Contact new leads within 60 seconds and prioritize inventory automatically — work the pipeline faster than any human SDR floor.",
    cta: "Latency statistics",
  },
  {
    kind: "booking",
    title: "Auto Booking",
    body: "If no rep is available, Xovra books directly on your calendar with timezone checks and instant invites — no missed opportunities.",
    cta: "Calendar sync",
  },
  {
    kind: "analytics",
    title: "Revenue Analytics",
    body: "Track CPL, pickup rates by segment, convo-to-meeting conversion, and pipeline created: see what drives revenue in real time.",
    cta: "View reporting telemetry",
  },
  {
    kind: "dids",
    title: "Self-Managing Local DIDs",
    body: "Auto-buy local numbers, rotate DIDs to avoid carrier spam flags, and retire risky numbers early — protecting connect rates.",
    cta: "Carrier protection info",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#eaddff] text-[#5b1fa7] text-[11px] font-semibold tracking-[0.18em] uppercase mb-8">
            Main Features
          </span>
          <p className="text-lg md:text-xl text-[#9a95aa] max-w-2xl mx-auto leading-relaxed">
            Five AI-driven tools that qualify leads, book meetings, and scale revenue — on autopilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <article key={c.kind} className={styles.card}>
              <div className={styles.graphicWrap}>
                <Infographic kind={c.kind} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{c.title}</h3>
              <p className="text-[15px] text-[#a09aab] leading-relaxed mb-8">{c.body}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#ec6afb] text-sm font-medium hover:gap-3 transition-all">
                {c.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
