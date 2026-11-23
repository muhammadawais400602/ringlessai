import styles from "./feature-grid.module.css";

/* ---------- Shared premium defs: gradients, filters, soft layers ---------- */
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ec6afb" />
        <stop offset="1" stopColor="#8b2ff8" />
      </linearGradient>
      <linearGradient id={`soft-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f9efff" />
        <stop offset="1" stopColor="#ffffff" />
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
      {/* soft back halo */}
      <ellipse cx="120" cy="140" rx="110" ry="40" fill={`url(#halo-${id})`} />
      {children}
    </svg>
  );
}

/* ---------- Infographics ---------- */
function Routing() {
  return (
    <PremiumPlate id="rt">
      {/* subtle grid */}
      <g opacity="0.35">
        <path d="M0 40 H240 M0 80 H240 M0 120 H240" stroke="#efe6fa" strokeWidth="1" />
      </g>
      {/* lead nodes on left */}
      {[40, 80, 120].map((y, i) => (
        <g key={i} className={styles[`lead${i}`]}>
          <circle cx="24" cy={y} r="10" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
          <circle cx="24" cy={y} r="4" fill="url(#grad-rt)" />
        </g>
      ))}
      {/* dashed back routes */}
      <path d="M38 40 Q80 40 90 80 H140" stroke="#e4d4f4" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
      <path d="M38 80 H140" stroke="#e4d4f4" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
      <path d="M38 120 Q80 120 90 80 H140" stroke="#e4d4f4" strokeWidth="1.5" strokeDasharray="4 5" fill="none" />
      {/* solid chosen flow */}
      <path d="M38 80 H140" stroke="url(#grad-rt)" strokeWidth="2.5" fill="none" className={styles.dashFlow} />
      {/* travelling pulse */}
      <circle r="5" fill="#ec6afb" className={styles.travel}>
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M38 80 H140" />
      </circle>
      {/* central hub */}
      <g filter="url(#glow-rt)">
        <circle cx="168" cy="80" r="26" fill="url(#grad-rt)" opacity="0.18" />
        <circle cx="168" cy="80" r="22" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
      </g>
      <g transform="translate(168 80)" stroke="#8b2ff8" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <circle r="6" fill="url(#grad-rt)" stroke="none" />
        <path d="M-10 0 h4 M10 0 h-4 M0 -10 v4 M0 10 v-4" />
      </g>
      {/* outbound to rep */}
      <g className={styles.outbound}>
        <path d="M190 80 H214" stroke="#8b2ff8" strokeWidth="1.5" strokeDasharray="3 4" fill="none" />
        <rect x="214" y="68" width="24" height="24" rx="6" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <circle cx="226" cy="76" r="3.5" fill="#ec6afb" />
        <rect x="219" y="82" width="14" height="2.4" rx="1.2" fill="#d6c2ed" />
        <rect x="219" y="86" width="10" height="2.4" rx="1.2" fill="#d6c2ed" />
      </g>
    </PremiumPlate>
  );
}

function Cadence() {
  return (
    <PremiumPlate id="cd">
      {/* timeline rail */}
      <path d="M12 80 H228" stroke="#ece0f8" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 80 H228" stroke="url(#grad-cd)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="220" className={styles.railDraw} />
      {/* ticks */}
      {[40, 90, 140, 190].map((x, i) => (
        <circle key={i} cx={x} cy="80" r="2.5" fill="#b795e0" />
      ))}
      {/* touchpoints */}
      {[
        { x: 42, kind: "call", d: 0 },
        { x: 94, kind: "sms", d: 0.4 },
        { x: 146, kind: "mail", d: 0.8 },
        { x: 198, kind: "check", d: 1.2 },
      ].map((t, i) => (
        <g key={i} transform={`translate(${t.x} 80)`} className={styles[`seq${i}`]}>
          <circle r="22" fill="url(#halo-cd)" />
          <circle r="16" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
          {t.kind === "call" && (
            <path d="M-5 -5 l3 -2 l3 4 l-2 2 c1 3 3 5 6 6 l2 -2 l4 3 l-2 3 c-6 1 -13 -6 -14 -14 Z" fill="url(#grad-cd)" transform="translate(-2 -2)" />
          )}
          {t.kind === "sms" && (
            <>
              <path d="M-9 -5 h18 a2 2 0 0 1 2 2 v8 a2 2 0 0 1 -2 2 h-14 l-4 4 v-14 a2 2 0 0 1 2 -2 z" fill="url(#grad-cd)" />
              <circle cx="-3" cy="2" r="1.3" fill="#fff" />
              <circle cx="2" cy="2" r="1.3" fill="#fff" />
              <circle cx="7" cy="2" r="1.3" fill="#fff" />
            </>
          )}
          {t.kind === "mail" && (
            <>
              <rect x="-9" y="-6" width="18" height="12" rx="2" fill="url(#grad-cd)" />
              <path d="M-9 -4 L0 3 L9 -4" stroke="#fff" strokeWidth="1.4" fill="none" />
            </>
          )}
          {t.kind === "check" && (
            <>
              <circle r="16" fill="url(#grad-cd)" />
              <path d="M-7 1 L-2 6 L7 -4" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </g>
      ))}
      {/* pulse ring on head */}
      <circle cx="198" cy="80" r="16" fill="none" stroke="#ec6afb" strokeOpacity="0.4" className={styles.headPulse} />
    </PremiumPlate>
  );
}

function Speed() {
  return (
    <PremiumPlate id="sp">
      {/* motion streaks */}
      <g opacity="0.7">
        <path d="M0 50 H120" stroke="#f0e2ff" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 110 H140" stroke="#f0e2ff" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path d="M-20 80 H160" stroke="url(#grad-sp)" strokeWidth="4" strokeLinecap="round" className={styles.streakLong} />
      <path d="M-20 60 H100" stroke="url(#grad-sp)" strokeWidth="2.5" strokeLinecap="round" className={styles.streakShort} opacity="0.6" />
      <path d="M-20 100 H80" stroke="url(#grad-sp)" strokeWidth="2.5" strokeLinecap="round" className={styles.streakShort2} opacity="0.5" />
      {/* badge */}
      <g filter="url(#glow-sp)">
        <circle cx="186" cy="80" r="40" fill="url(#halo-sp)" />
        <circle cx="186" cy="80" r="30" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.8" />
      </g>
      {/* bolt */}
      <g className={styles.bolt}>
        <path d="M190 58 L172 86 H186 L180 104 L202 72 H188 Z" fill="url(#grad-sp)" />
        <path d="M190 58 L172 86 H186 L180 104 L202 72 H188 Z" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="0.6" />
      </g>
      {/* timer tag */}
      <g transform="translate(186 128)">
        <rect x="-26" y="-11" width="52" height="22" rx="11" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b1fa7" fontFamily="monospace">&lt; 60s</text>
      </g>
    </PremiumPlate>
  );
}

function Booking() {
  return (
    <PremiumPlate id="bk">
      {/* calendar card */}
      <g>
        <rect x="52" y="22" width="136" height="110" rx="14" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.6" />
        <rect x="52" y="22" width="136" height="24" rx="14" fill="url(#grad-bk)" opacity="0.14" />
        <path d="M52 46 H188" stroke="#ead9f7" strokeWidth="1.2" />
        {/* header dots */}
        <circle cx="74" cy="34" r="3.5" fill="url(#grad-bk)" />
        <circle cx="166" cy="34" r="3.5" fill="url(#grad-bk)" />
        <rect x="90" y="30" width="60" height="8" rx="4" fill="#ead9f7" />
      </g>
      {/* week columns heading */}
      {["M", "T", "W", "T", "F"].map((d, i) => (
        <text key={i} x={70 + i * 24} y="60" textAnchor="middle" fontSize="8" fontWeight="600" fill="#8b2ff8">
          {d}
        </text>
      ))}
      {/* grid cells */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={62 + c * 24}
            y={70 + r * 18}
            width="18"
            height="12"
            rx="3"
            fill="#faf5ff"
            stroke="#f0e5fa"
            strokeWidth="0.8"
          />
        )),
      )}
      {/* booked slot */}
      <g className={styles.slot}>
        <rect x="110" y="88" width="18" height="12" rx="3" fill="url(#grad-bk)" />
        <path d="M114 94 L117 97 L124 90" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* glowing invite card popping out */}
      <g transform="translate(196 44)" className={styles.invite}>
        <rect x="-4" y="-4" width="40" height="26" rx="7" fill="url(#grad-bk)" opacity="0.18" />
        <rect x="-4" y="-4" width="40" height="26" rx="7" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.3" />
        <text x="16" y="4" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#5b1fa7">BOOKED</text>
        <text x="16" y="14" textAnchor="middle" fontSize="5.5" fill="#8b7aa0">Tue · 2:00 PM</text>
      </g>
    </PremiumPlate>
  );
}

function Analytics() {
  return (
    <PremiumPlate id="an">
      {/* axes */}
      <g opacity="0.9">
        <path d="M18 128 H230 M18 128 V22" stroke="#ead9f7" strokeWidth="1.2" />
        {[128, 100, 72, 44].map((y, i) => (
          <path key={i} d={`M18 ${y} H230`} stroke="#f3e7fb" strokeWidth="1" strokeDasharray="2 4" />
        ))}
      </g>
      {/* glossy bars */}
      <g className={styles.bars}>
        {[
          { x: 34, h: 40, c: "#d7b4f6" },
          { x: 70, h: 62, c: "#c391f0" },
          { x: 106, h: 50, c: "#b172ea" },
          { x: 142, h: 84, c: "#9b4ce3" },
          { x: 178, h: 100, c: "#8b2ff8" },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={128 - b.h} width="22" height={b.h} rx="5" fill={b.c} />
            <rect x={b.x} y={128 - b.h} width="22" height="8" rx="4" fill="#ffffff" opacity="0.28" />
          </g>
        ))}
      </g>
      {/* trend area */}
      <path
        d="M34 108 Q70 76 106 90 T178 48 L214 36 L214 128 L34 128 Z"
        fill="url(#grad-an)"
        opacity="0.16"
      />
      {/* trend line with moving dot */}
      <path
        d="M34 108 Q70 76 106 90 T178 48 L214 36"
        stroke="url(#grad-an)"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        className={styles.trend}
      />
      <circle r="5" fill="#ec6afb" className={styles.trendDot}>
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M34 108 Q70 76 106 90 T178 48 L214 36" />
      </circle>
      {/* floating metric */}
      <g transform="translate(192 22)" className={styles.metric}>
        <rect x="-2" y="-2" width="50" height="20" rx="10" fill="url(#grad-an)" opacity="0.18" />
        <rect x="-2" y="-2" width="50" height="20" rx="10" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.2" />
        <text x="22" y="12" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b1fa7">+41%</text>
      </g>
    </PremiumPlate>
  );
}

function Dids() {
  return (
    <PremiumPlate id="di">
      {/* orbit rings */}
      <g transform="translate(120 85)">
        <ellipse cx="0" cy="0" rx="90" ry="34" fill="none" stroke="#ead9f7" strokeWidth="1.2" strokeDasharray="4 6" />
        <ellipse cx="0" cy="0" rx="90" ry="34" fill="none" stroke="url(#grad-di)" strokeWidth="2" strokeDasharray="60 260" strokeLinecap="round" className={styles.orbit} />
      </g>
      {/* orbiting phone dots */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className={styles[`orbitDot${i}`]}>
          <circle cx="0" cy="0" r="5" fill="url(#grad-di)">
            <animateMotion
              dur="6s"
              begin={`-${i * 1.5}s`}
              repeatCount="indefinite"
              path="M30 85 A90 34 0 1 0 210 85 A90 34 0 1 0 30 85"
            />
          </circle>
        </g>
      ))}
      {/* central phone card */}
      <g>
        <rect x="58" y="68" width="124" height="34" rx="10" fill="url(#grad-di)" opacity="0.18" />
        <rect x="58" y="68" width="124" height="34" rx="10" fill="#ffffff" stroke="#8b2ff8" strokeWidth="1.5" />
        <text x="120" y="90" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#5b1fa7" className={styles.phoneFlip}>
          +1 415 · · ·
        </text>
      </g>
      {/* shield badge */}
      <g transform="translate(196 44)" className={styles.shield}>
        <path d="M0 -10 L10 -6 V2 C10 8 5 12 0 14 C-5 12 -10 8 -10 2 V-6 Z" fill="url(#grad-di)" />
        <path d="M-4 2 L-1 5 L5 -2" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </PremiumPlate>
  );
}

function Infographic({ kind }: { kind: string }) {
  switch (kind) {
    case "routing": return <Routing />;
    case "cadence": return <Cadence />;
    case "speed": return <Speed />;
    case "booking": return <Booking />;
    case "analytics": return <Analytics />;
    case "dids": return <Dids />;
    default: return null;
  }
}

const cards = [
  {
    kind: "routing",
    title: "Niche + City Targeting",
    body: "Give Xovra a vertical and a market. It scrapes every matching Google Maps listing, then follows each business to its own website for deeper enrichment. No API key, no quota, no Google Cloud project.",
    cta: "How targeting works",
  },
  {
    kind: "cadence",
    title: "Multi-Source Enrichment",
    body: "Each lead is enriched from the business's own site: email, phone, tech stack, Instagram, Facebook, TikTok, follower counts, review counts. The full picture, never guessed, never purchased.",
    cta: "What's in each record",
  },
  {
    kind: "speed",
    title: "Ad-Intent Detection",
    body: "Three layered signals prove a business is actively buying leads: on-site Google Ads tags, Ads Transparency Center creatives, and live SERP capture. Advertisers close 4× better than cold Maps rows.",
    cta: "The three signals",
  },
  {
    kind: "booking",
    title: "CRM-Ready Export",
    body: "Two shapes, on purpose. HubSpot-formatted CSV with the standard 14 columns, or a Google Sheet your dialer reads by field name. Pitch angle, score and notes included in both.",
    cta: "CSV + Sheet schemas",
  },
  {
    kind: "analytics",
    title: "Lead Scoring (0–100)",
    body: "Every record gets a defensible fit score from web presence, ad signals, social presence and review signals. Filter with --min-score 50 and stop paying for dials on dead rows.",
    cta: "Scoring model",
  },
  {
    kind: "dids",
    title: "Social Presence Signals",
    body: "instagram_url, instagram_followers, facebook_url, tiktok_url, has_social — extracted from each business's homepage. Perfect opener data for cold-call personalization or DM outreach.",
    cta: "Social fields reference",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            From Google Maps to a Scored List
          </h2>
          <p className="text-lg md:text-xl text-[#5a5068] max-w-2xl mx-auto leading-relaxed">
            Six engines that turn &ldquo;niche + city&rdquo; into a sales-ready prospect list &mdash; with proof the lead has budget before you dial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <article key={c.kind} className={styles.card}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
