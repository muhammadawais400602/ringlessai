const cases = [
  {
    industry: "Home Services",
    size: "Solo",
    tag: "Menu Reboot",
    stats: [
      { k: "0", v: "+60d" },
      { k: "3x", v: "+21%" },
    ],
    quote:
      "Facebook leads were costing us $35 and honestly, we wasted most of them. Now every lead gets 2 real attempts and we are writing records with folks we would have written off.",
    name: "Apex Solar Solutions",
  },
  {
    industry: "B2B SaaS",
    size: "Mid-Market",
    tag: "TV Spikes",
    stats: [
      { k: "61%", v: "+9%" },
      { k: "$10", v: "+30%" },
    ],
    quote:
      "We were wasting thousands in ad spend on mixed calls during television spikes. Now every caller gets reached live or within 90 seconds. ROI was transformative.",
    name: "OmniDirect Media",
  },
  {
    industry: "Financial Services",
    size: "Lead Gen",
    tag: "Live Transfers",
    stats: [
      { k: "$75", v: "" },
      { k: "$10", v: "11+" },
    ],
    quote:
      "Before, we sold leads for $75 and fought refund disputes. Now we sell qualified live transfers at $75. Prospects are ready and buyers love us.",
    name: "ClearPath Capital",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
          Case Studies
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-14 md:mb-16">
          Conversations That Become <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Revenue</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {cases.map((c) => (
            <div
              key={c.name}
              className="p-7 md:p-8 rounded-2xl border border-[#ece6f5] bg-[#fbf7ff]"
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
          ))}
        </div>

        <div className="rounded-2xl border border-[#ece6f5] bg-gradient-to-br from-[#fbf7ff] via-white to-[#f3eafb] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#8b2ff8] mb-3">
              Featured Outcome
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#15101e] mb-3 leading-snug">
              &ldquo;First week live: 70 validated appointments. Meetings keep landing on our calendar overnight without adding a single SDR. Truly exceptional.&rdquo;
            </p>
            <p className="text-sm text-[#5a5466]">
              Proven across 300+ enterprise rollouts
            </p>
          </div>
          <div className="flex md:flex-col gap-8 md:gap-4 md:text-right">
            <div>
              <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                +41%
              </div>
              <div className="text-xs text-[#5a5466] mt-1">Qualified Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                32%
              </div>
              <div className="text-xs text-[#5a5466] mt-1">Close-rate lift</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
