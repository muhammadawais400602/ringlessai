import styles from "./feature-grid.module.css";

const DASH = "#dcd1ee";
const BG = "#faf5ff";
const STROKE = "#8b2ff8";
const ACCENT = "#ec6afb";

function Infographic({ kind }: { kind: string }) {
  switch (kind) {
    case "routing":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <defs>
            <linearGradient id="r1" x1="0" x2="1">
              <stop offset="0" stopColor={ACCENT} />
              <stop offset="1" stopColor={STROKE} />
            </linearGradient>
          </defs>
          <path d="M10 25 H90 V65 H145" stroke={DASH} strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M10 105 H60 V65 H145" stroke={DASH} strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M10 25 H90 V65 H145" stroke="url(#r1)" strokeWidth="2" fill="none" className={styles.dashFlow} />
          <circle cx="145" cy="65" r="20" fill="#ffffff" stroke={STROKE} strokeWidth="1.6" />
          <g transform="translate(145 65)" stroke={ACCENT} strokeWidth="1.4" fill="none" strokeLinecap="round">
            <circle r="8" />
            <path d="M-4.5 0 L4.5 0 M0 -4.5 L0 4.5" />
          </g>
          <circle cx="10" cy="25" r="3.5" fill={ACCENT} className={styles.ping} />
          <circle cx="10" cy="105" r="3.5" fill={ACCENT} className={styles.ping2} />
          <circle cx="90" cy="25" r="2.5" fill={STROKE} />
          <circle cx="60" cy="105" r="2.5" fill={STROKE} />
        </svg>
      );
    case "cadence":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <path d="M0 40 H220" stroke={DASH} strokeWidth="1" strokeDasharray="3 5" />
          <path d="M0 90 H220" stroke={DASH} strokeWidth="1" strokeDasharray="3 5" />
          <line x1="110" y1="20" x2="110" y2="110" stroke={ACCENT} strokeWidth="2" className={styles.bar} />
          <g className={styles.pulse}>
            <circle cx="60" cy="65" r="15" fill="#ffffff" stroke={STROKE} strokeWidth="1.6" />
            <path d="M53 65 L59 71 L68 59" stroke={ACCENT} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className={styles.pulse2}>
            <circle cx="160" cy="65" r="11" fill="#ffffff" stroke={STROKE} strokeWidth="1.4" />
            <path d="M155 65 L159 69 L166 60" stroke={ACCENT} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <path d="M0 65 H220" stroke={DASH} strokeWidth="1" strokeDasharray="4 5" />
          <path d="M10 65 H170" stroke={ACCENT} strokeWidth="3" className={styles.streak} strokeLinecap="round" />
          <circle cx="178" cy="65" r="24" fill="#ffffff" stroke={STROKE} strokeWidth="1.6" />
          <path d="M180 50 L168 68 H180 L174 82 L190 62 H179 Z" fill={ACCENT} className={styles.bolt} />
        </svg>
      );
    case "booking":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <rect x="55" y="20" width="110" height="90" rx="10" fill="#ffffff" stroke={STROKE} strokeWidth="1.6" />
          <path d="M55 42 H165" stroke={STROKE} strokeWidth="1.2" />
          <circle cx="78" cy="30" r="2.8" fill={ACCENT} />
          <circle cx="142" cy="30" r="2.8" fill={ACCENT} />
          {[0, 1, 2].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect key={`${r}-${c}`} x={66 + c * 24} y={52 + r * 18} width="18" height="12" rx="2.5" fill="#f3e9ff" />
            )),
          )}
          <rect x="114" y="70" width="18" height="12" rx="2.5" fill={ACCENT} className={styles.slot} />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <path d="M0 110 H220 M0 75 H220 M0 40 H220" stroke={DASH} strokeWidth="1" strokeDasharray="3 5" />
          <g className={styles.bars}>
            <rect x="26" y="75" width="24" height="35" rx="4" fill="#c9a4f7" />
            <rect x="68" y="55" width="24" height="55" rx="4" fill="#a874f3" />
            <rect x="110" y="65" width="24" height="45" rx="4" fill="#9148e9" />
            <rect x="152" y="30" width="24" height="80" rx="4" fill="#8b2ff8" />
          </g>
          <path d="M38 92 L80 70 L122 82 L164 46" stroke={ACCENT} strokeWidth="2.4" fill="none" className={styles.line} strokeLinecap="round" />
        </svg>
      );
    case "dids":
      return (
        <svg viewBox="0 0 220 130" className={styles.graphic}>
          <g transform="translate(110 65)" className={styles.rotor}>
            <circle r="38" fill="none" stroke={DASH} strokeWidth="1.2" strokeDasharray="4 6" />
            <circle r="38" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="64 220" strokeLinecap="round" className={styles.ring} />
          </g>
          <rect x="60" y="52" width="100" height="28" rx="7" fill="#ffffff" stroke={STROKE} strokeWidth="1.4" />
          <text x="110" y="71" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={STROKE} className={styles.phone}>
            +1 415 •••
          </text>
          <g transform="translate(176 42)">
            <circle r="8" fill="#ffffff" stroke={STROKE} strokeWidth="1.4" />
            <path d="M-3 -1 L-3 2 M-1 1 L1 1 M3 -1 L3 2" stroke={ACCENT} strokeWidth="1.3" fill="none" />
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
    <section className="relative bg-white text-[#15101e] py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f3e9ff] text-[#5b1fa7] text-[11px] font-semibold tracking-[0.18em] uppercase mb-8">
            Main Features
          </span>
          <p className="text-lg md:text-xl text-[#5a5068] max-w-2xl mx-auto leading-relaxed">
            Five AI-driven tools that qualify leads, book meetings, and scale revenue — on autopilot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <article key={c.kind} className={styles.card}>
              <div className={styles.graphicWrap}>
                <Infographic kind={c.kind} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-tight text-[#15101e]">{c.title}</h3>
              <p className="text-[15px] text-[#5a5068] leading-relaxed mb-8">{c.body}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#8b2ff8] text-sm font-semibold hover:gap-3 transition-all">
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
