type Item = {
  tag: string;
  title: string;
  body: string;
  foot: string;
  icon: React.ReactNode;
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2a1545] to-[#0b0618] border border-[#3a2160] flex items-center justify-center text-[#ec6afb]">
    {children}
  </div>
);

const items: Item[] = [
  {
    tag: "Speed",
    title: "Dials in Under 60 Seconds.",
    body: "Inbound leads get a live AI conversation before they finish typing. Outbound campaigns fire the moment a list drops. Human SDRs can't match the clock.",
    foot: "Speed-to-lead that converts.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <polyline points="21 3 21 9 15 9" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Scale",
    title: "Weekend Pipeline, No Weekend Staff.",
    body: "Xovra dials nights, weekends, and holidays at full volume. While your human team sleeps, your AI SDR keeps warming the pipeline and booking meetings on their Monday calendar.",
    foot: "24/7 coverage, zero overtime.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Quality",
    title: "Qualified Before Transfer.",
    body: "Three-dimensional qualification (budget, timeline, decision-maker) happens during the call. Only transfers reach your closers. They never pick up a cold row again.",
    foot: "Closers only talk to closers-ready prospects.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h4l3-9 4 18 3-9h4" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Perk",
    title: "Fresh Leads, Built In.",
    body: "Every campaign ships with a scored, enriched prospect list. No buying Apollo seats, no manual CSV sanding, no stale ZoomInfo pulls. Xovra sources from Google Maps and scores by live Google Ads intent.",
    foot: "Dialer and lead list, one tool.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Compliance",
    title: "DNC and TCPA, Done Right.",
    body: "Every number is scrubbed against federal and state DNC lists before dial. TCPA consent is logged per call. STIR/SHAKEN attestation is configurable per outbound pool. Documented, not buried.",
    foot: "Enterprise-grade, open posture.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3 H5 a2 2 0 0 0-2 2 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2-2 V10" />
          <polyline points="17 3 21 3 21 7" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Economics",
    title: "No Per-Dial Markup.",
    body: "Pay for the engine, not the attempt. Run the same pipeline every week. Scale from one market to a continent without an SDR bill that scales with you.",
    foot: "Fixed-cost outbound.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5 H9.5 a3.5 3.5 0 0 0 0 7 h5 a3.5 3.5 0 0 1 0 7 H6" />
        </svg>
      </Icon>
    ),
  },
];

import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <section id="features" className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="bg-blob bg-blob-purple w-[520px] h-[520px] top-10 -left-40 opacity-50" />
      <div className="bg-blob bg-blob-pink w-[460px] h-[460px] bottom-10 -right-32 opacity-45" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="text-center mb-14 md:mb-16">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
              Why Sales Teams Pick Xovra
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
              Six Reasons Teams Switch to <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">AI Dialing</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[#5a5466] max-w-2xl mx-auto">
              Traditional SDR floors are expensive, slow, and sleep eight hours a night. Here&apos;s how an AI dialer wins on every dimension that matters.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative p-7 md:p-8 rounded-2xl bg-[#0b0618] text-white border border-[#231538] overflow-hidden group hover:border-[#8b2ff8]/60 hover:-translate-y-1 transition-all duration-300 h-full">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(236,106,251,0.22) 0%, transparent 70%)",
                  }}
                />
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] group-hover:w-full transition-all duration-500" />
                <div className="relative flex items-start justify-between mb-6">
                  {it.icon}
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c187fb] px-2.5 py-1 rounded-full border border-[#3a2160] bg-[#1a0b2e]">
                    {it.tag}
                  </span>
                </div>
                <h3 className="relative text-lg font-semibold mb-3">{it.title}</h3>
                <p className="relative text-sm text-[#b8b0c8] leading-relaxed mb-5">{it.body}</p>
                <p className="relative text-sm text-[#c187fb] font-medium">{it.foot}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
