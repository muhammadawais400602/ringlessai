import Reveal from "./Reveal";
import styles from "./feature-grid.module.css";

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ec6afb" />
        <stop offset="1" stopColor="#8b2ff8" />
      </linearGradient>
      <radialGradient id={`halo-${id}`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#ec6afb" stopOpacity="0.4" />
        <stop offset="0.5" stopColor="#ec6afb" stopOpacity="0.14" />
        <stop offset="1" stopColor="#ec6afb" stopOpacity="0" />
      </radialGradient>
      <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );
}

function PremiumPlate({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 240 160" className={styles.graphic} preserveAspectRatio="xMidYMid meet">
      <Defs id={id} />
      <ellipse cx="120" cy="140" rx="110" ry="40" fill={`url(#halo-${id})`} />
      {children}
    </svg>
  );
}

/* ---------- 1. Niche + City Targeting ---------- */
function Targeting() {
  const pins = [
    { x: 56, y: 82 },
    { x: 102, y: 60 },
    { x: 86, y: 122 },
    { x: 158, y: 104 },
    { x: 188, y: 68 },
  ];
  return (
    <PremiumPlate id="tg">
      <g opacity="0.3">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={24 + i * 30} y1="30" x2={24 + i * 30} y2="150" stroke="#d6c2ed" strokeDasharray="2 4" strokeWidth="0.8" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1="24" y1={46 + i * 28} x2="216" y2={46 + i * 28} stroke="#d6c2ed" strokeDasharray="2 4" strokeWidth="0.8" />
        ))}
      </g>
      <g>
        <rect x="18" y="12" width="120" height="22" rx="11" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
        <circle cx="30" cy="23" r="4" fill="none" stroke="#8b2ff8" strokeWidth="1.4" />
        <line x1="33" y1="26" x2="36" y2="29" stroke="#8b2ff8" strokeWidth="1.4" strokeLinecap="round" />
        <text x="44" y="27" fontSize="9" fontWeight="600" fill="#5b1fa7" fontFamily="system-ui">dentists &middot; Dubai</text>
      </g>
      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`} className={styles[`pin${i}`]}>
          <path d="M0 -12 C 6 -12 10 -8 10 -2 C 10 6 0 16 0 16 C 0 16 -10 6 -10 -2 C -10 -8 -6 -12 0 -12 Z" fill="url(#grad-tg)" />
          <circle cx="0" cy="-2" r="3.2" fill="#ffffff" />
        </g>
      ))}
      <g transform="translate(126 88)">
        <circle r="28" fill="url(#halo-tg)" />
        <circle r="18" fill="none" stroke="#ec6afb" strokeOpacity="0.5">
          <animate attributeName="r" values="12;26;12" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <path d="M0 -15 C 8 -15 13 -10 13 -2 C 13 8 0 22 0 22 C 0 22 -13 8 -13 -2 C -13 -10 -8 -15 0 -15 Z" fill="url(#grad-tg)" />
        <circle cx="0" cy="-3" r="4.5" fill="#ffffff" />
      </g>
    </PremiumPlate>
  );
}

/* ---------- 2. Multi-Source Enrichment ---------- */
function Enrichment() {
  const chips = [
    { x: 32, y: 40, k: "globe" },
    { x: 208, y: 40, k: "mail" },
    { x: 32, y: 120, k: "ig" },
    { x: 208, y: 120, k: "fb" },
  ];
  return (
    <PremiumPlate id="en">
      <g stroke="#d6c2ed" strokeWidth="1" strokeDasharray="3 3" fill="none">
        <path d="M46 48 L80 62" />
        <path d="M194 48 L160 62" />
        <path d="M46 112 L80 98" />
        <path d="M194 112 L160 98" />
      </g>
      <g>
        <rect x="80" y="48" width="80" height="64" rx="9" fill="url(#grad-en)" opacity="0.14" />
        <rect x="80" y="48" width="80" height="64" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <circle cx="96" cy="66" r="6" fill="url(#grad-en)" />
        <rect x="108" y="62" width="44" height="3.5" rx="1.7" fill="#c6b1e5" />
        <rect x="108" y="68" width="30" height="2.8" rx="1.4" fill="#e3d2f3" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="86" y={82 + i * 9} width="68" height="5" rx="2.5" fill="url(#grad-en)" opacity="0.14" />
            <rect x="86" y={82 + i * 9} width={28 + i * 14} height="5" rx="2.5" fill="url(#grad-en)" className={styles[`enrich${i}`]} />
          </g>
        ))}
      </g>
      {chips.map((it, i) => (
        <g key={i} transform={`translate(${it.x} ${it.y})`} className={styles[`chip${i}`]}>
          <circle r="16" fill="url(#halo-en)" />
          <circle r="12" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
          {it.k === "globe" && (
            <g stroke="#8b2ff8" strokeWidth="1.2" fill="none">
              <circle r="7" />
              <ellipse rx="3.4" ry="7" />
              <line x1="-7" x2="7" y1="0" y2="0" />
            </g>
          )}
          {it.k === "mail" && (
            <g>
              <rect x="-7" y="-5" width="14" height="10" rx="1.6" fill="url(#grad-en)" />
              <path d="M-7 -4 L0 2 L7 -4" stroke="#fff" strokeWidth="1.1" fill="none" />
            </g>
          )}
          {it.k === "ig" && (
            <g>
              <rect x="-6" y="-6" width="12" height="12" rx="3" fill="none" stroke="#8b2ff8" strokeWidth="1.4" />
              <circle r="3.2" fill="none" stroke="#8b2ff8" strokeWidth="1.4" />
              <circle cx="3.6" cy="-3.6" r="1.1" fill="#8b2ff8" />
            </g>
          )}
          {it.k === "fb" && (
            <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#8b2ff8" fontFamily="system-ui">f</text>
          )}
        </g>
      ))}
    </PremiumPlate>
  );
}

/* ---------- 3. Ad-Intent Detection ---------- */
function AdIntent() {
  const sources = [
    { y: 40, label: "TAG" },
    { y: 80, label: "ATC" },
    { y: 120, label: "SERP" },
  ];
  return (
    <PremiumPlate id="ai">
      {sources.map((s, i) => (
        <g key={i} transform={`translate(18 ${s.y})`} className={styles[`src${i}`]}>
          <rect x="0" y="-13" width="78" height="26" rx="13" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
          <circle cx="15" cy="0" r="8" fill="url(#grad-ai)" />
          <path d="M10 0 L13.5 3.5 L19 -3" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">{s.label}</text>
        </g>
      ))}
      <g stroke="url(#grad-ai)" strokeWidth="1.8" fill="none" strokeDasharray="4 4" className={styles.dashFlow}>
        <path d="M100 40 Q148 60 172 80" />
        <path d="M100 80 H172" />
        <path d="M100 120 Q148 100 172 80" />
      </g>
      <g transform="translate(198 80)">
        <circle r="34" fill="url(#halo-ai)">
          <animate attributeName="r" values="30;36;30" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <g filter="url(#glow-ai)">
          <circle r="24" fill="url(#grad-ai)" opacity="0.2" />
          <circle r="24" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        </g>
        <path d="M-10 1 L-3 8 L11 -7" stroke="url(#grad-ai)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(198 136)">
        <rect x="-36" y="-9" width="72" height="18" rx="9" fill="url(#grad-ai)" />
        <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="system-ui">AD-INTENT</text>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 4. CRM-Ready Export ---------- */
function ExportCRM() {
  return (
    <PremiumPlate id="ex">
      <g>
        <rect x="18" y="28" width="90" height="104" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <rect x="18" y="28" width="90" height="18" rx="9" fill="url(#grad-ex)" opacity="0.18" />
        <path d="M18 46 H108" stroke="#ead9f7" strokeWidth="1" />
        <text x="32" y="41" fontSize="6.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">Name</text>
        <text x="60" y="41" fontSize="6.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">Phone</text>
        <text x="90" y="41" fontSize="6.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">Score</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} className={styles[`row${i}`]}>
            <rect x="22" y={54 + i * 14} width="24" height="4" rx="2" fill="#c7b2e8" />
            <rect x="52" y={54 + i * 14} width="24" height="4" rx="2" fill="#dcc9ef" />
            <rect x="82" y={52 + i * 14} width="20" height="8" rx="4" fill="url(#grad-ex)" />
          </g>
        ))}
      </g>
      <g>
        <path d="M114 80 H158" stroke="url(#grad-ex)" strokeWidth="2.5" fill="none" className={styles.dashFlow} />
        <path d="M153 74 L162 80 L153 86" stroke="url(#grad-ex)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle r="4" fill="#ec6afb" className={styles.travel}>
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M114 80 H158" />
        </circle>
      </g>
      <g transform="translate(194 80)">
        <circle r="34" fill="url(#halo-ex)" />
        <circle r="26" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <circle r="18" fill="url(#grad-ex)" opacity="0.14" stroke="#8b2ff8" strokeWidth="1.1" strokeDasharray="2 4" />
        <circle r="10" fill="url(#grad-ex)" />
        <path d="M-3.5 1 L-0.5 4 L5 -3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(194 136)">
        <rect x="-24" y="-9" width="48" height="18" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.2" />
        <text x="0" y="4" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">HubSpot</text>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 5. Lead Scoring (0 to 100) ---------- */
function Scoring() {
  return (
    <PremiumPlate id="sc">
      <g transform="translate(120 108)">
        <path d="M-72 0 A 72 72 0 0 1 72 0" fill="none" stroke="#ead9f7" strokeWidth="14" strokeLinecap="round" />
        <path
          d="M-72 0 A 72 72 0 0 1 72 0"
          fill="none"
          stroke="url(#grad-sc)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray="226"
          strokeDashoffset="34"
        >
          <animate attributeName="stroke-dashoffset" values="226;34;34" keyTimes="0;0.6;1" dur="2.8s" repeatCount="indefinite" />
        </path>
        <text x="-72" y="18" textAnchor="middle" fontSize="8" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">0</text>
        <text x="0" y="-82" textAnchor="middle" fontSize="8" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">50</text>
        <text x="72" y="18" textAnchor="middle" fontSize="8" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">100</text>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-90;66;66"
            keyTimes="0;0.6;1"
            dur="2.8s"
            repeatCount="indefinite"
          />
          <line x1="0" y1="0" x2="0" y2="-56" stroke="#15101e" strokeWidth="2.4" strokeLinecap="round" />
          <circle r="6" fill="#15101e" />
          <circle r="2.8" fill="#ec6afb" />
        </g>
        <text y="-20" textAnchor="middle" fontSize="30" fontWeight="800" fill="url(#grad-sc)" fontFamily="system-ui">87</text>
        <text y="-4" textAnchor="middle" fontSize="7" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">FIT SCORE</text>
      </g>
      <g transform="translate(120 150)" className={styles.qualChip}>
        <rect x="-36" y="-9" width="72" height="18" rx="9" fill="url(#grad-sc)" />
        <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="system-ui">QUALIFIED</text>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 6. Social Presence Signals ---------- */
function Social() {
  return (
    <PremiumPlate id="so">
      <g stroke="#d6c2ed" strokeWidth="1" strokeDasharray="3 3" fill="none">
        <path d="M74 44 L96 60" />
        <path d="M166 44 L144 60" />
        <path d="M120 120 V106" />
      </g>
      <g>
        <rect x="80" y="58" width="80" height="48" rx="10" fill="url(#grad-so)" opacity="0.14" />
        <rect x="80" y="58" width="80" height="48" rx="10" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <text x="120" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15101e" fontFamily="system-ui">@acme_co</text>
        <text x="120" y="92" textAnchor="middle" fontSize="7" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">22.8K followers</text>
      </g>
      <g transform="translate(58 30)" className={styles.sp0}>
        <circle r="18" fill="url(#halo-so)" />
        <circle r="14" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <rect x="-7" y="-7" width="14" height="14" rx="4" fill="none" stroke="#8b2ff8" strokeWidth="1.6" />
        <circle r="3.6" fill="none" stroke="#8b2ff8" strokeWidth="1.6" />
        <circle cx="4" cy="-4" r="1.1" fill="#8b2ff8" />
        <g transform="translate(0 28)">
          <rect x="-18" y="-7" width="36" height="14" rx="7" fill="url(#grad-so)" />
          <text x="0" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="system-ui">12.4K</text>
        </g>
      </g>
      <g transform="translate(182 30)" className={styles.sp1}>
        <circle r="18" fill="url(#halo-so)" />
        <circle r="14" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <text x="0" y="5" textAnchor="middle" fontSize="15" fontWeight="800" fill="#8b2ff8" fontFamily="system-ui">f</text>
        <g transform="translate(0 28)">
          <rect x="-16" y="-7" width="32" height="14" rx="7" fill="url(#grad-so)" />
          <text x="0" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="system-ui">8.1K</text>
        </g>
      </g>
      <g transform="translate(120 138)" className={styles.sp2}>
        <circle r="18" fill="url(#halo-so)" />
        <circle r="14" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <path d="M-3 -6 V5 A5 5 0 1 1 -8 0" stroke="#8b2ff8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M-3 -6 Q 2 -6 6 -2" stroke="#8b2ff8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(0 -24)">
          <rect x="-16" y="-7" width="32" height="14" rx="7" fill="url(#grad-so)" />
          <text x="0" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="system-ui">2.3K</text>
        </g>
      </g>
    </PremiumPlate>
  );
}

function Infographic({ kind }: { kind: string }) {
  switch (kind) {
    case "targeting": return <Targeting />;
    case "enrichment": return <Enrichment />;
    case "adintent": return <AdIntent />;
    case "exportcrm": return <ExportCRM />;
    case "scoring": return <Scoring />;
    case "social": return <Social />;
    default: return null;
  }
}

const cards = [
  {
    kind: "adintent",
    title: "AI Voice Agent",
    body: "Natural neural voices hold multi-turn conversations, handle objections, and qualify prospects against your rubric in real time: budget, timeline, decision-maker status. Prospects stay engaged. Closers stay closing.",
    cta: "Hear the voice",
  },
  {
    kind: "enrichment",
    title: "Live Call Transfers",
    body: "When a prospect qualifies, Xovra routes the call to your best-fit rep with a context-rich screen pop before they pick up: name, pain points, qualification trail, pitch angle. No clumsy handoffs, no cold opens.",
    cta: "How transfers work",
  },
  {
    kind: "scoring",
    title: "Auto Appointment Booking",
    body: "No rep available? Xovra books the meeting on your calendar instead, with timezone handling, dynamic availability, and instant invite delivery. Every qualified prospect becomes a calendar entry or a live transfer.",
    cta: "Calendar logic",
  },
  {
    kind: "targeting",
    title: "Built-In Lead Sourcing",
    body: "Every campaign ships with fresh leads. Xovra scrapes Google Maps for your niche and city, enriches each business from its own site, and scores by live Google Ads intent signals, before any number is dialed.",
    cta: "Sourcing engine",
  },
  {
    kind: "exportcrm",
    title: "Two-Way CRM Sync",
    body: "Qualified leads, call transcripts, outcomes and scheduled meetings flow directly into HubSpot, Close, GoHighLevel, Salesforce or your Google Sheet. Open formats, no vendor lock-in, no manual upload.",
    cta: "Supported CRMs",
  },
  {
    kind: "social",
    title: "24/7 Coverage",
    body: "Xovra works nights, weekends and holidays while your human reps sleep. Inbound inquiries get sub-60-second responses. Outbound campaigns keep warming the pipeline around the clock.",
    cta: "Availability stats",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative bg-white text-[#15101e] py-24 md:py-32 overflow-hidden">
      <div className="bg-blob bg-blob-pink w-[520px] h-[520px] -top-24 left-1/2 -translate-x-1/2 opacity-40" />
      <div className="bg-grid" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20">
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f3e9ff] text-[#5b1fa7] text-[11px] font-semibold tracking-[0.18em] uppercase mb-8">
              Main Features
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
              An AI Dialer That Sources Its Own Leads
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg md:text-xl text-[#5a5068] max-w-2xl mx-auto leading-relaxed">
              Six engines that turn &ldquo;launch a campaign&rdquo; into qualified meetings on your calendar. No SDR headcount required.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.kind} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className={styles.card}>
                <div className={styles.graphicWrap}><Infographic kind={c.kind} /></div>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
