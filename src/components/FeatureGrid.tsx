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

/* ---------- 1. AI Voice Agent ---------- */
function AIVoice() {
  return (
    <PremiumPlate id="av">
      {/* sound waves on left */}
      <g stroke="#8b2ff8" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M30 70 Q33 80 30 90" className={styles.wave0} />
        <path d="M42 60 Q48 80 42 100" className={styles.wave1} />
        <path d="M54 48 Q64 80 54 112" className={styles.wave2} />
      </g>

      {/* central AI orb */}
      <g transform="translate(96 80)">
        <circle r="36" fill="url(#halo-av)">
          <animate attributeName="r" values="32;42;32" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <g filter="url(#glow-av)">
          <circle r="26" fill="url(#grad-av)" opacity="0.2" />
          <circle r="26" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
        </g>
        <text y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="url(#grad-av)" fontFamily="system-ui">AI</text>
      </g>

      {/* chat bubble top right */}
      <g transform="translate(150 36)" className={styles.bubble0}>
        <rect x="0" y="0" width="80" height="30" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <path d="M12 30 L10 36 L20 30 Z" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <rect x="10" y="9" width="42" height="3" rx="1.5" fill="#c6b1e5" />
        <rect x="10" y="16" width="56" height="3" rx="1.5" fill="url(#grad-av)" />
        <rect x="10" y="22" width="30" height="3" rx="1.5" fill="#dcc9ef" />
      </g>

      {/* chat bubble bottom right */}
      <g transform="translate(150 94)" className={styles.bubble1}>
        <rect x="0" y="0" width="68" height="28" rx="9" fill="url(#grad-av)" opacity="0.14" />
        <rect x="0" y="0" width="68" height="28" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <circle cx="14" cy="14" r="4" fill="url(#grad-av)" />
        <rect x="24" y="10" width="34" height="3" rx="1.5" fill="#c6b1e5" />
        <rect x="24" y="16" width="22" height="3" rx="1.5" fill="#dcc9ef" />
      </g>

      {/* LIVE CALL badge */}
      <g transform="translate(96 146)">
        <circle cx="-34" cy="0" r="3.5" fill="#ec6afb">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <rect x="-26" y="-8" width="60" height="16" rx="8" fill="url(#grad-av)" />
        <text x="4" y="4" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="system-ui">LIVE CALL</text>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 2. Live Call Transfers ---------- */
function Transfer() {
  return (
    <PremiumPlate id="tr">
      {/* Prospect card left */}
      <g transform="translate(14 52)">
        <rect x="0" y="0" width="60" height="50" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <circle cx="16" cy="20" r="7" fill="url(#grad-tr)" />
        <rect x="27" y="15" width="26" height="3" rx="1.5" fill="#c6b1e5" />
        <rect x="27" y="21" width="18" height="2.8" rx="1.4" fill="#e3d2f3" />
        <rect x="8" y="33" width="44" height="3" rx="1.5" fill="#f0e2fa" />
        <rect x="8" y="39" width="30" height="3" rx="1.5" fill="#f0e2fa" />
      </g>
      <text x="44" y="118" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">PROSPECT</text>

      {/* center QUALIFIED hub */}
      <g transform="translate(120 77)">
        <circle r="26" fill="url(#halo-tr)" />
        <g filter="url(#glow-tr)">
          <circle r="20" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
        </g>
        <path d="M-7 1 L-2 6 L8 -6" stroke="url(#grad-tr)" strokeWidth="3.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(120 118)" className={styles.bubble1}>
        <rect x="-32" y="-9" width="64" height="18" rx="9" fill="url(#grad-tr)" />
        <text x="0" y="4" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff" fontFamily="system-ui">QUALIFIED</text>
      </g>

      {/* Connecting lines with dashes */}
      <g stroke="url(#grad-tr)" strokeWidth="1.8" fill="none" strokeDasharray="4 4" className={styles.dashFlow}>
        <path d="M74 77 H100" />
        <path d="M140 77 H166" />
      </g>

      {/* traveling pulses */}
      <circle r="3.5" fill="#ec6afb" className={styles.travel}>
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M74 77 H100" />
      </circle>
      <circle r="3.5" fill="#ec6afb" className={styles.travel}>
        <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M140 77 H166" />
      </circle>

      {/* Closer card right */}
      <g transform="translate(166 52)">
        <rect x="0" y="0" width="60" height="50" rx="9" fill="url(#grad-tr)" />
        <circle cx="16" cy="20" r="7" fill="#ffffff" />
        {/* headset ring */}
        <path d="M9 18 Q16 10 23 18" stroke="#ffffff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="9" cy="20" r="1.6" fill="#ffffff" />
        <circle cx="23" cy="20" r="1.6" fill="#ffffff" />
        <rect x="27" y="15" width="26" height="3" rx="1.5" fill="#ffffff" opacity="0.85" />
        <rect x="27" y="21" width="18" height="2.8" rx="1.4" fill="#ffffff" opacity="0.55" />
        <rect x="8" y="33" width="44" height="3" rx="1.5" fill="#ffffff" opacity="0.45" />
        <rect x="8" y="39" width="26" height="3" rx="1.5" fill="#ffffff" opacity="0.45" />
      </g>
      <text x="196" y="118" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">CLOSER</text>
    </PremiumPlate>
  );
}

/* ---------- 3. Auto Appointment Booking ---------- */
function Booking() {
  return (
    <PremiumPlate id="bk">
      {/* calendar card */}
      <g>
        <rect x="52" y="22" width="136" height="108" rx="12" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
        <rect x="52" y="22" width="136" height="22" rx="12" fill="url(#grad-bk)" opacity="0.14" />
        <path d="M52 44 H188" stroke="#ead9f7" strokeWidth="1" />
        <circle cx="74" cy="33" r="3.2" fill="url(#grad-bk)" />
        <circle cx="166" cy="33" r="3.2" fill="url(#grad-bk)" />
        <rect x="90" y="30" width="60" height="6" rx="3" fill="#ead9f7" />
      </g>
      {/* week columns heading */}
      {["M", "T", "W", "T", "F"].map((d, i) => (
        <text key={i} x={70 + i * 24} y="58" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8b2ff8" fontFamily="system-ui">
          {d}
        </text>
      ))}
      {/* grid cells */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={62 + c * 24}
            y={68 + r * 18}
            width="18"
            height="12"
            rx="3"
            fill="#faf5ff"
            stroke="#f0e5fa"
            strokeWidth="0.8"
          />
        )),
      )}
      {/* booked slot pulse */}
      <g className={styles.bookSlot}>
        <rect x="110" y="86" width="18" height="12" rx="3" fill="url(#grad-bk)" />
        <path d="M114 92 L117 95 L124 88" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* floating invite */}
      <g transform="translate(198 48)">
        <g className={styles.inviteFade}>
          <rect x="-4" y="-4" width="44" height="28" rx="7" fill="url(#grad-bk)" opacity="0.2" />
          <rect x="-4" y="-4" width="44" height="28" rx="7" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
          <text x="18" y="4" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#5b1fa7" fontFamily="system-ui">BOOKED</text>
          <text x="18" y="14" textAnchor="middle" fontSize="5.5" fontWeight="600" fill="#8b7aa0" fontFamily="system-ui">Tue · 2:00 PM</text>
        </g>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 4. Built-In Lead Sourcing ---------- */
function Sourcing() {
  const pins = [
    { x: 56, y: 82 },
    { x: 102, y: 60 },
    { x: 86, y: 122 },
    { x: 158, y: 104 },
    { x: 188, y: 68 },
  ];
  return (
    <PremiumPlate id="sr">
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
          <path d="M0 -12 C 6 -12 10 -8 10 -2 C 10 6 0 16 0 16 C 0 16 -10 6 -10 -2 C -10 -8 -6 -12 0 -12 Z" fill="url(#grad-sr)" />
          <circle cx="0" cy="-2" r="3.2" fill="#ffffff" />
        </g>
      ))}
      <g transform="translate(126 88)">
        <circle r="28" fill="url(#halo-sr)" />
        <circle r="18" fill="none" stroke="#ec6afb" strokeOpacity="0.5">
          <animate attributeName="r" values="12;26;12" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <path d="M0 -15 C 8 -15 13 -10 13 -2 C 13 8 0 22 0 22 C 0 22 -13 8 -13 -2 C -13 -10 -8 -15 0 -15 Z" fill="url(#grad-sr)" />
        <circle cx="0" cy="-3" r="4.5" fill="#ffffff" />
      </g>
    </PremiumPlate>
  );
}

/* ---------- 5. Two-Way CRM Sync ---------- */
function CRMSync() {
  return (
    <PremiumPlate id="cs">
      {/* Lead card left */}
      <g>
        <rect x="14" y="36" width="88" height="88" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.4" />
        <rect x="14" y="36" width="88" height="20" rx="9" fill="url(#grad-cs)" opacity="0.14" />
        <path d="M14 56 H102" stroke="#ead9f7" strokeWidth="1" />
        <text x="24" y="49" fontSize="7" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">LEAD</text>
        <circle cx="90" cy="46" r="3" fill="url(#grad-cs)" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} className={styles[`row${i}`]}>
            <rect x="20" y={68 + i * 12} width="34" height="3" rx="1.5" fill="#c7b2e8" />
            <rect x="58" y={68 + i * 12} width="38" height="3" rx="1.5" fill="url(#grad-cs)" opacity="0.6" />
          </g>
        ))}
      </g>

      {/* bidirectional arrows */}
      <g>
        <path d="M110 70 H150" stroke="url(#grad-cs)" strokeWidth="2.2" fill="none" className={styles.dashFlow} />
        <path d="M145 65 L152 70 L145 75" stroke="url(#grad-cs)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M150 92 H110" stroke="url(#grad-cs)" strokeWidth="2.2" fill="none" className={styles.dashFlow} />
        <path d="M115 87 L108 92 L115 97" stroke="url(#grad-cs)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle r="3.5" fill="#ec6afb" className={styles.travel}>
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M110 70 H150" />
      </circle>
      <circle r="3.5" fill="#ec6afb" className={styles.travel}>
        <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M150 92 H110" />
      </circle>

      {/* CRM stack right */}
      <g transform="translate(192 80)">
        <circle r="46" fill="url(#halo-cs)" />
        <g transform="translate(0 -28)" className={styles.sp0}>
          <rect x="-30" y="-9" width="60" height="18" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
          <circle cx="-20" cy="0" r="3.5" fill="url(#grad-cs)" />
          <text x="4" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">HubSpot</text>
        </g>
        <g transform="translate(0 0)" className={styles.sp1}>
          <rect x="-34" y="-9" width="68" height="18" rx="9" fill="url(#grad-cs)" />
          <circle cx="-24" cy="0" r="3.5" fill="#ffffff" />
          <text x="4" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#ffffff" fontFamily="system-ui">GoHighLevel</text>
        </g>
        <g transform="translate(0 28)" className={styles.sp2}>
          <rect x="-24" y="-9" width="48" height="18" rx="9" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
          <circle cx="-16" cy="0" r="3.5" fill="url(#grad-cs)" />
          <text x="4" y="3" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#5b1fa7" fontFamily="system-ui">Close</text>
        </g>
      </g>
    </PremiumPlate>
  );
}

/* ---------- 6. 24/7 Coverage ---------- */
function Coverage() {
  const dots = [20, 60, 100, 140, 180, 220, 260, 300, 340];
  return (
    <PremiumPlate id="cv">
      <g transform="translate(120 82)">
        <circle r="58" fill="url(#halo-cv)" />
        <circle r="52" fill="none" stroke="#ead9f7" strokeWidth="1.8" strokeDasharray="2 4" />
        {/* day arc (top half) */}
        <path d="M-52 0 A 52 52 0 0 1 52 0" fill="none" stroke="url(#grad-cv)" strokeWidth="7" strokeLinecap="round" />
        {/* night arc (bottom half) */}
        <path d="M52 0 A 52 52 0 0 1 -52 0" fill="none" stroke="#2a1545" strokeWidth="7" strokeLinecap="round" opacity="0.7" />

        {/* sun top */}
        <g transform="translate(0 -52)" className={styles.sp0}>
          <circle r="11" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
          <circle r="5.5" fill="url(#grad-cv)" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
            const r1 = 7.5;
            const r2 = 10;
            const rad = (a * Math.PI) / 180;
            return (
              <line
                key={a}
                x1={Math.cos(rad) * r1}
                y1={Math.sin(rad) * r1}
                x2={Math.cos(rad) * r2}
                y2={Math.sin(rad) * r2}
                stroke="url(#grad-cv)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* moon bottom */}
        <g transform="translate(0 52)" className={styles.sp2}>
          <circle r="11" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
          <path d="M-2 -5 A 6 6 0 1 0 -2 5 A 5 5 0 1 1 -2 -5 Z" fill="url(#grad-cv)" />
        </g>

        {/* center 24/7 */}
        <text y="-4" textAnchor="middle" fontSize="22" fontWeight="800" fill="url(#grad-cv)" fontFamily="system-ui">24/7</text>
        <text y="10" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#8b7aa0" fontFamily="system-ui" letterSpacing="2">DIALING</text>
      </g>

      {/* activity pulse dots around the ring */}
      {dots.map((a, i) => {
        const rad = ((a - 90) * Math.PI) / 180;
        const x = 120 + Math.cos(rad) * 52;
        const y = 82 + Math.sin(rad) * 52;
        return <circle key={i} cx={x} cy={y} r="2.6" fill="#ec6afb" className={styles[`actDot${i % 3}`]} />;
      })}
    </PremiumPlate>
  );
}

function Infographic({ kind }: { kind: string }) {
  switch (kind) {
    case "aivoice": return <AIVoice />;
    case "transfer": return <Transfer />;
    case "booking": return <Booking />;
    case "sourcing": return <Sourcing />;
    case "crmsync": return <CRMSync />;
    case "coverage": return <Coverage />;
    default: return null;
  }
}

const cards = [
  {
    kind: "aivoice",
    title: "AI Voice Agent",
    body: "Natural neural voices hold multi-turn conversations, handle objections, and qualify prospects against your rubric in real time: budget, timeline, decision-maker status. Prospects stay engaged. Closers stay closing.",
    cta: "Hear the voice",
  },
  {
    kind: "transfer",
    title: "Live Call Transfers",
    body: "When a prospect qualifies, Xovra routes the call to your best-fit rep with a context-rich screen pop before they pick up: name, pain points, qualification trail, pitch angle. No clumsy handoffs, no cold opens.",
    cta: "How transfers work",
  },
  {
    kind: "booking",
    title: "Auto Appointment Booking",
    body: "No rep available? Xovra books the meeting on your calendar instead, with timezone handling, dynamic availability, and instant invite delivery. Every qualified prospect becomes a calendar entry or a live transfer.",
    cta: "Calendar logic",
  },
  {
    kind: "sourcing",
    title: "Built-In Lead Sourcing",
    body: "Every campaign ships with fresh leads. Xovra scrapes Google Maps for your niche and city, enriches each business from its own site, and scores by live Google Ads intent signals, before any number is dialed.",
    cta: "Sourcing engine",
  },
  {
    kind: "crmsync",
    title: "Two-Way CRM Sync",
    body: "Qualified leads, call transcripts, outcomes and scheduled meetings flow directly into HubSpot, Close, GoHighLevel, Salesforce or your Google Sheet. Open formats, no vendor lock-in, no manual upload.",
    cta: "Supported CRMs",
  },
  {
    kind: "coverage",
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
