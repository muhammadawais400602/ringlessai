import styles from "./preview.module.css";

const DASH = "#dcd1ee";
const STROKE = "#8b2ff8";
const ACCENT = "#ec6afb";
const DEEP = "#5b1fa7";

/* ---------- Smart Routing variants ---------- */
const RoutingA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <defs>
      <linearGradient id="ra" x1="0" x2="1"><stop offset="0" stopColor={ACCENT}/><stop offset="1" stopColor={STROKE}/></linearGradient>
    </defs>
    <path d="M10 25 H90 V65 H145" stroke={DASH} strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
    <path d="M10 105 H60 V65 H145" stroke={DASH} strokeWidth="1.5" strokeDasharray="4 4" fill="none"/>
    <path d="M10 25 H90 V65 H145" stroke="url(#ra)" strokeWidth="2.2" fill="none" className={styles.flow}/>
    <circle cx="145" cy="65" r="20" fill="#fff" stroke={STROKE} strokeWidth="1.6"/>
    <g transform="translate(145 65)" stroke={ACCENT} strokeWidth="1.4" fill="none"><circle r="8"/><path d="M-4.5 0 L4.5 0 M0 -4.5 L0 4.5"/></g>
    <circle cx="10" cy="25" r="3.5" fill={ACCENT} className={styles.ping}/>
    <circle cx="10" cy="105" r="3.5" fill={ACCENT} className={styles.ping2}/>
  </svg>
);

const RoutingB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* three reps at right, one lead on left, routing choice */}
    <circle cx="25" cy="65" r="12" fill="#fff" stroke={STROKE} strokeWidth="1.6"/>
    <path d="M22 65 Q25 58 28 65" stroke={STROKE} strokeWidth="1.3" fill="none"/>
    <path d="M37 65 H 110" stroke={DASH} strokeWidth="1.5" strokeDasharray="5 5"/>
    <path d="M37 65 H 110" stroke={STROKE} strokeWidth="2" className={styles.flow}/>
    {[25, 65, 105].map((y, i) => (
      <g key={i} transform={`translate(160 ${y})`}>
        <rect x="-18" y="-13" width="42" height="26" rx="5" fill="#fff" stroke={DASH} strokeWidth="1.3"/>
        <circle cx="-9" cy="0" r="5" fill="#f3e9ff"/>
        <rect x="-2" y="-4" width="20" height="3" rx="1.5" fill={DASH}/>
        <rect x="-2" y="2" width="14" height="3" rx="1.5" fill={DASH}/>
      </g>
    ))}
    <path d="M110 65 L142 65" stroke={ACCENT} strokeWidth="2.4" className={styles.laserA}/>
    <circle cx="160" cy="65" r="22" fill="none" stroke={ACCENT} strokeWidth="1.5" className={styles.ringPulse}/>
  </svg>
);

const RoutingC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* decision tree / branching */}
    <g>
      <circle cx="30" cy="65" r="10" fill={ACCENT} className={styles.ping}/>
      <path d="M40 65 Q75 35 110 30" stroke={DASH} strokeDasharray="4 4" fill="none"/>
      <path d="M40 65 Q75 65 110 65" stroke={DASH} strokeDasharray="4 4" fill="none"/>
      <path d="M40 65 Q75 95 110 100" stroke={DASH} strokeDasharray="4 4" fill="none"/>
      <path d="M40 65 Q75 65 110 65" stroke={STROKE} strokeWidth="2.2" fill="none" className={styles.pickOne}/>
      {[{cx:120,cy:30,on:false},{cx:120,cy:65,on:true},{cx:120,cy:100,on:false}].map((p,i)=>(
        <g key={i}>
          <rect x={p.cx} y={p.cy-10} width="80" height="20" rx="10" fill="#fff" stroke={p.on?STROKE:DASH} strokeWidth="1.5"/>
          <circle cx={p.cx+12} cy={p.cy} r="4" fill={p.on?ACCENT:DASH}/>
          <rect x={p.cx+22} y={p.cy-3} width="48" height="2.5" rx="1" fill={p.on?STROKE:DASH}/>
          <rect x={p.cx+22} y={p.cy+2} width="30" height="2.5" rx="1" fill={DASH}/>
        </g>
      ))}
    </g>
  </svg>
);

/* ---------- Cadence variants ---------- */
const CadenceA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <path d="M0 40 H220 M0 90 H220" stroke={DASH} strokeWidth="1" strokeDasharray="3 5"/>
    <line x1="110" y1="20" x2="110" y2="110" stroke={ACCENT} strokeWidth="2" className={styles.swipe}/>
    <g className={styles.pulse}>
      <circle cx="60" cy="65" r="15" fill="#fff" stroke={STROKE} strokeWidth="1.6"/>
      <path d="M53 65 L59 71 L68 59" stroke={ACCENT} strokeWidth="2.2" fill="none"/>
    </g>
    <g className={styles.pulse2}>
      <circle cx="160" cy="65" r="11" fill="#fff" stroke={STROKE} strokeWidth="1.4"/>
      <path d="M155 65 L159 69 L166 60" stroke={ACCENT} strokeWidth="1.8" fill="none"/>
    </g>
  </svg>
);

const CadenceB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* waveform heartbeat line across */}
    <path d="M0 65 H60 L70 40 L82 90 L95 30 L108 95 L120 55 L140 65 H220" stroke={DASH} strokeWidth="1.5" fill="none"/>
    <path d="M0 65 H60 L70 40 L82 90 L95 30 L108 95 L120 55 L140 65 H220" stroke={ACCENT} strokeWidth="2.2" fill="none" className={styles.beatDraw}/>
    <circle cx="140" cy="65" r="4" fill={STROKE} className={styles.walker}/>
  </svg>
);

const CadenceC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* three touch icons animating into checkmark */}
    {[{x:30,label:"📞"},{x:85,label:"💬"},{x:140,label:"📧"}].map((p,i)=>(
      <g key={i} transform={`translate(${p.x} 55)`} className={styles[`seq${i}`]}>
        <circle r="18" fill="#fff" stroke={STROKE} strokeWidth="1.5"/>
        <text x="0" y="6" textAnchor="middle" fontSize="18">{p.label}</text>
      </g>
    ))}
    <g transform="translate(195 55)" className={styles.seq3}>
      <circle r="18" fill={ACCENT}/>
      <path d="M-7 0 L-1 6 L8 -4" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <path d="M48 55 H67 M103 55 H122 M158 55 H177" stroke={DASH} strokeWidth="1.5" strokeDasharray="3 4"/>
  </svg>
);

/* ---------- Speed variants ---------- */
const SpeedA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <path d="M10 65 H175" stroke={DASH} strokeWidth="1.5" strokeDasharray="4 5"/>
    <path d="M10 65 H175" stroke={ACCENT} strokeWidth="3" className={styles.streak} strokeLinecap="round"/>
    <circle cx="180" cy="65" r="22" fill="#fff" stroke={STROKE} strokeWidth="1.6"/>
    <path d="M182 50 L170 68 H182 L176 82 L192 62 H181 Z" fill={ACCENT} className={styles.bolt}/>
  </svg>
);

const SpeedB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* stopwatch counting down */}
    <circle cx="110" cy="70" r="36" fill="#fff" stroke={STROKE} strokeWidth="1.8"/>
    <rect x="102" y="24" width="16" height="8" rx="2" fill={STROKE}/>
    <circle cx="110" cy="70" r="36" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="226" strokeLinecap="round" transform="rotate(-90 110 70)" className={styles.countdown}/>
    <text x="110" y="76" textAnchor="middle" fontSize="18" fontWeight="700" fill={STROKE} className={styles.counter}>60s</text>
  </svg>
);

const SpeedC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* rocket shooting up */}
    <path d="M25 115 Q40 105 55 100" stroke={DASH} strokeDasharray="4 4" fill="none"/>
    <path d="M55 100 Q90 90 125 65" stroke={DASH} strokeDasharray="4 4" fill="none"/>
    <path d="M125 65 Q160 40 195 20" stroke={DASH} strokeDasharray="4 4" fill="none"/>
    <path d="M25 115 Q90 90 195 20" stroke={ACCENT} strokeWidth="2.5" fill="none" className={styles.rocketTrail}/>
    <g className={styles.rocket}>
      <path d="M-6 6 L0 -10 L6 6 L0 2 Z" fill={STROKE} transform="translate(195 20) rotate(45)"/>
    </g>
  </svg>
);

/* ---------- Booking variants ---------- */
const BookingA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <rect x="55" y="20" width="110" height="90" rx="10" fill="#fff" stroke={STROKE} strokeWidth="1.6"/>
    <path d="M55 42 H165" stroke={STROKE} strokeWidth="1.2"/>
    <circle cx="78" cy="30" r="2.8" fill={ACCENT}/>
    <circle cx="142" cy="30" r="2.8" fill={ACCENT}/>
    {[0,1,2].map(r => [0,1,2,3].map(c => (
      <rect key={`${r}-${c}`} x={66+c*24} y={52+r*18} width="18" height="12" rx="2.5" fill="#f3e9ff"/>
    )))}
    <rect x="114" y="70" width="18" height="12" rx="2.5" fill={ACCENT} className={styles.slot}/>
  </svg>
);

const BookingB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* calendar day view with event appearing */}
    <rect x="30" y="20" width="160" height="90" rx="10" fill="#fff" stroke={STROKE} strokeWidth="1.5"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <text x="40" y={38+i*16} fontSize="8" fill={DASH}>{9+i}:00</text>
        <path d={`M62 ${35+i*16} H180`} stroke={DASH} strokeWidth="1" strokeDasharray="2 3"/>
      </g>
    ))}
    <rect x="66" y="48" width="110" height="14" rx="3" fill={DASH} opacity="0.5"/>
    <rect x="66" y="80" width="110" height="14" rx="3" fill={ACCENT} className={styles.bookSlide}/>
    <text x="72" y="90" fontSize="8" fontWeight="700" fill="#fff" className={styles.bookSlide}>MEETING BOOKED</text>
  </svg>
);

const BookingC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* clock + calendar + checkmark morph */}
    <circle cx="70" cy="65" r="30" fill="#fff" stroke={STROKE} strokeWidth="1.8"/>
    <line x1="70" y1="65" x2="70" y2="45" stroke={STROKE} strokeWidth="2.2" strokeLinecap="round" className={styles.hourHand}/>
    <line x1="70" y1="65" x2="85" y2="65" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" className={styles.minHand}/>
    <circle cx="70" cy="65" r="3" fill={STROKE}/>
    <path d="M110 65 H145" stroke={DASH} strokeDasharray="4 4"/>
    <path d="M110 65 H145" stroke={ACCENT} strokeWidth="2" className={styles.flow}/>
    <g transform="translate(170 65)" className={styles.pulse}>
      <circle r="20" fill={ACCENT}/>
      <path d="M-8 0 L-2 7 L10 -6" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

/* ---------- Analytics variants ---------- */
const AnalyticsA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <path d="M0 110 H220 M0 75 H220 M0 40 H220" stroke={DASH} strokeWidth="1" strokeDasharray="3 5"/>
    <g className={styles.bars}>
      <rect x="26" y="75" width="24" height="35" rx="4" fill="#c9a4f7"/>
      <rect x="68" y="55" width="24" height="55" rx="4" fill="#a874f3"/>
      <rect x="110" y="65" width="24" height="45" rx="4" fill="#9148e9"/>
      <rect x="152" y="30" width="24" height="80" rx="4" fill={STROKE}/>
    </g>
    <path d="M38 92 L80 70 L122 82 L164 46" stroke={ACCENT} strokeWidth="2.4" fill="none" className={styles.line}/>
  </svg>
);

const AnalyticsB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* animated donut with numbers */}
    <g transform="translate(70 65)">
      <circle r="38" fill="none" stroke="#f3e9ff" strokeWidth="10"/>
      <circle r="38" fill="none" stroke={ACCENT} strokeWidth="10" strokeDasharray="238" strokeLinecap="round" className={styles.donutFill} transform="rotate(-90)"/>
      <text x="0" y="6" textAnchor="middle" fontSize="18" fontWeight="700" fill={STROKE} className={styles.counter}>72%</text>
    </g>
    {[{y:35,label:"CPL",v:"42%"},{y:65,label:"Pickup",v:"68%"},{y:95,label:"Conv",v:"31%"}].map((r,i)=>(
      <g key={i} transform={`translate(140 ${r.y})`}>
        <text x="0" y="0" fontSize="10" fill={DASH}>{r.label}</text>
        <rect x="32" y="-6" width="40" height="8" rx="4" fill="#f3e9ff"/>
        <rect x="32" y="-6" width="40" height="8" rx="4" fill={STROKE} className={styles[`fill${i}`]}/>
      </g>
    ))}
  </svg>
);

const AnalyticsC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* live chart with moving data point */}
    <path d="M0 110 H220 M0 80 H220 M0 50 H220 M0 20 H220" stroke={DASH} strokeWidth="1" strokeDasharray="2 4"/>
    <path d="M10 95 L40 80 L70 85 L100 50 L130 65 L160 30 L190 40 L210 25" stroke={ACCENT} strokeWidth="2.6" fill="none" className={styles.liveLine} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 95 L40 80 L70 85 L100 50 L130 65 L160 30 L190 40 L210 25 L210 115 L10 115 Z" fill="url(#areaFill)" opacity="0.4"/>
    <defs>
      <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor={ACCENT} stopOpacity="0.6"/>
        <stop offset="1" stopColor={ACCENT} stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle cx="210" cy="25" r="5" fill={STROKE} className={styles.ping}/>
    <circle cx="210" cy="25" r="10" fill={STROKE} fillOpacity="0.2" className={styles.pingRing}/>
  </svg>
);

/* ---------- DIDs variants ---------- */
const DidsA = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    <g transform="translate(110 65)" className={styles.rotor}>
      <circle r="38" fill="none" stroke={DASH} strokeWidth="1.2" strokeDasharray="4 6"/>
      <circle r="38" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="64 220" strokeLinecap="round" className={styles.ring}/>
    </g>
    <rect x="60" y="52" width="100" height="28" rx="7" fill="#fff" stroke={STROKE} strokeWidth="1.4"/>
    <text x="110" y="71" textAnchor="middle" fontFamily="monospace" fontSize="13" fill={STROKE} className={styles.phoneFlip}>+1 415 •••</text>
  </svg>
);

const DidsB = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* map of US with pins pulsing in different cities */}
    <path d="M30 60 Q60 30 110 40 Q165 32 195 60 Q195 100 160 105 Q110 115 70 100 Q35 90 30 60 Z" fill="#faf5ff" stroke={STROKE} strokeWidth="1.3"/>
    {[{x:65,y:72,d:0},{x:95,y:55,d:0.4},{x:130,y:75,d:0.8},{x:170,y:60,d:1.2}].map((p,i)=>(
      <g key={i} transform={`translate(${p.x} ${p.y})`} style={{animationDelay:`${p.d}s`}} className={styles.pinWrap}>
        <circle r="10" fill={ACCENT} opacity="0.25" className={styles.pinRing}/>
        <circle r="4" fill={ACCENT}/>
      </g>
    ))}
  </svg>
);

const DidsC = () => (
  <svg viewBox="0 0 220 130" className={styles.g}>
    {/* phone numbers rolling like a slot machine */}
    <rect x="30" y="35" width="160" height="60" rx="10" fill="#fff" stroke={STROKE} strokeWidth="1.5"/>
    <g className={styles.roll}>
      <text x="110" y="60" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={STROKE}>+1 415 827 2910</text>
      <text x="110" y="82" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={STROKE}>+1 310 445 1182</text>
      <text x="110" y="104" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={STROKE}>+1 646 220 8809</text>
    </g>
    <rect x="30" y="35" width="160" height="22" fill="#fff"/>
    <rect x="30" y="80" width="160" height="22" fill="#fff"/>
    <path d="M30 60 H190 M30 78 H190" stroke={ACCENT} strokeWidth="1" strokeDasharray="4 4"/>
  </svg>
);

const SECTIONS: { title: string; options: { label: string; comp: React.ComponentType }[] }[] = [
  {
    title: "Smart Routing",
    options: [
      { label: "A · Dashed route + target", comp: RoutingA },
      { label: "B · Lead → reps laser pick", comp: RoutingB },
      { label: "C · Decision tree pick", comp: RoutingC },
    ],
  },
  {
    title: "Multi-Touch Cadence",
    options: [
      { label: "A · Pulsing checkpoints", comp: CadenceA },
      { label: "B · Heartbeat line draw", comp: CadenceB },
      { label: "C · Channel chain → check", comp: CadenceC },
    ],
  },
  {
    title: "Speed to Lead (<60s)",
    options: [
      { label: "A · Streak + bolt flash", comp: SpeedA },
      { label: "B · Stopwatch countdown", comp: SpeedB },
      { label: "C · Rocket trajectory", comp: SpeedC },
    ],
  },
  {
    title: "Auto Booking",
    options: [
      { label: "A · Month grid filling slot", comp: BookingA },
      { label: "B · Day view meeting slide-in", comp: BookingB },
      { label: "C · Clock → arrow → check", comp: BookingC },
    ],
  },
  {
    title: "Revenue Analytics",
    options: [
      { label: "A · Bars + trend overlay", comp: AnalyticsA },
      { label: "B · Donut + metric bars", comp: AnalyticsB },
      { label: "C · Live area chart", comp: AnalyticsC },
    ],
  },
  {
    title: "Self-Managing Local DIDs",
    options: [
      { label: "A · Rotating ring + number", comp: DidsA },
      { label: "B · Map with city pulses", comp: DidsB },
      { label: "C · Rolling number slot", comp: DidsC },
    ],
  },
];

export default function InfographicsPreview() {
  return (
    <main className="min-h-screen bg-white text-[#15101e] py-20 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">Infographic options</h1>
        <p className="text-[#5a5068] mb-12">Pick an option (A, B, or C) per feature. All animated.</p>

        {SECTIONS.map(({ title, options }) => (
          <section key={title} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 tracking-tight">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {options.map(({ label, comp: C }) => (
                <div key={label} className={styles.card}>
                  <div className={styles.graphicWrap}><C /></div>
                  <p className={styles.label}>{label}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
