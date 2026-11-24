const cases = [
  {
    industry: "Home Services",
    size: "US Southeast",
    tag: "Weekend Autopilot",
    stats: [
      { k: "412", v: "dials / wk" },
      { k: "40", v: "weekend bookings" },
    ],
    quote:
      "Our two SDRs couldn't touch Saturdays. Xovra dials from Friday night through Sunday, and Monday morning our closers see 40 booked meetings on the calendar.",
    name: "Home-services agency · US Southeast",
  },
  {
    industry: "AI Agency",
    size: "Europe",
    tag: "Live Transfer Pilot",
    stats: [
      { k: "1,100", v: "dials / wk" },
      { k: "$8", v: "per qualified call" },
    ],
    quote:
      "The live-transfer handoff is seamless. The AI qualifies, our best closer gets a context-loaded screen pop, and the prospect never knows the handoff happened. Close rate up 31%.",
    name: "AI-build agency · Europe",
  },
  {
    industry: "Call Center",
    size: "APAC",
    tag: "Replaced 20 SDRs",
    stats: [
      { k: "4,800", v: "dials / wk" },
      { k: "31%", v: "close uplift" },
    ],
    quote:
      "We reassigned 20 dialers to closing roles. Xovra runs the top-of-funnel at 24/7 pace and transfers only qualified prospects. Payback landed inside the first quarter.",
    name: "Lead-gen call center · APAC",
  },
];

import Reveal from "./Reveal";

export default function CaseStudies() {
  return (
    <section className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="bg-blob bg-blob-pink w-[460px] h-[460px] top-20 -right-32 opacity-45" />
      <div className="bg-blob bg-blob-purple w-[420px] h-[420px] bottom-10 -left-28 opacity-45" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
            Pilot Results
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            Teams Already Letting <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Xovra Dial</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-[#5a5466] max-w-2xl mb-14 md:mb-16">
            Results from early access AI-dialer deployments, Q3 to Q4 2026. Logos withheld pending contracted case-study rights.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={(i + 1) as 1 | 2 | 3}>
            <div
              className="group h-full p-7 md:p-8 rounded-2xl border border-[#ece6f5] bg-white/85 backdrop-blur-sm hover:border-[#c6a5ea] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(139,47,248,0.12)] transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#5a5466] px-2.5 py-1 rounded-full bg-white border border-[#ece6f5]">
                  {c.industry}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#5a5466] px-2.5 py-1 rounded-full bg-white border border-[#ece6f5]">
                  {c.size}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#8b2ff8] px-2.5 py-1 rounded-full bg-[#f3eafb] border border-[#e2d2f5]">
                  {c.tag}
                </span>
              </div>

              <div className="flex gap-6 mb-6">
                {c.stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-3xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                      {s.k}
                    </div>
                    <div className="text-xs text-[#5a5466] mt-1">{s.v}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#2a2237] leading-relaxed mb-5">
                &ldquo;{c.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#15101e]">{c.name}</p>
            </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <div className="rounded-2xl border border-[#ece6f5] bg-gradient-to-br from-[#fbf7ff] via-white to-[#f3eafb] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8b2ff8] mb-3">
              Aggregate Benchmark
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#15101e] mb-3 leading-snug">
              &ldquo;Across pilot teams, Xovra qualified more prospects in 72 hours than human SDR floors qualified in 14 days.&rdquo;
            </p>
            <p className="text-sm text-[#5a5466]">
              Measured across 1.4M+ AI-dialer calls in US, UK, UAE, and EU markets
            </p>
          </div>
          <div className="flex md:flex-col gap-8 md:gap-4 md:text-right">
            <div>
              <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                72h
              </div>
              <div className="text-xs text-[#5a5466] mt-1">To match a 14-day SDR qualified total</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                3&times;
              </div>
              <div className="text-xs text-[#5a5466] mt-1">Qualified lift vs. humans-only</div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
