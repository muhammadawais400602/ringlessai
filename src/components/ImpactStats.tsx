import Reveal from "./Reveal";

const stats = [
  {
    value: "70%+",
    label: "Of Google Maps results carry a reachable website, so email enrichment actually works",
    hint: "Website reachability",
  },
  {
    value: "3×",
    label: "Qualified-conversation lift vs. untargeted Apollo-style purchased lists",
    hint: "Conversion lift",
  },
  {
    value: "0",
    label: "API keys, Google Cloud projects or paid data tiers required to source",
    hint: "Setup friction",
  },
  {
    value: "< 2 min",
    label: "From niche + city input to a scored CSV in your downloads folder",
    hint: "Time to first list",
  },
];

export default function ImpactStats() {
  return (
    <section className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="bg-blob bg-blob-purple w-[520px] h-[520px] -top-40 -right-40" />
      <div className="bg-blob bg-blob-pink w-[380px] h-[380px] bottom-0 -left-32 opacity-40" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
            Benchmarks
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            Why Scraped Lists <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Outperform</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-[#5a5466] max-w-2xl mb-14 md:mb-16">
            Measured across pilot runs covering over 1.4 million Google Maps businesses enriched in US, UK, UAE and EU markets.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="group relative pt-6 border-t-2 border-[#ece6f5] hover:border-[#8b2ff8] transition-colors duration-300">
                <span className="absolute -top-px left-0 h-0.5 w-0 bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] group-hover:w-full transition-all duration-500" />
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#8b2ff8] mb-3">
                  {s.hint}
                </p>
                <div className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-br from-[#15101e] via-[#2a1545] to-[#8b2ff8] bg-clip-text text-transparent mb-4">
                  {s.value}
                </div>
                <p className="text-sm md:text-[15px] text-[#5a5466] leading-relaxed">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
