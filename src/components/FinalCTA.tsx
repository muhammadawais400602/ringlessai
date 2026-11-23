export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-16 md:py-20">
        <div className="relative rounded-3xl overflow-hidden bg-[#0b0618] text-white px-6 md:px-16 lg:px-24 py-20 md:py-28 text-center">
          {/* purple ambient background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(139,47,248,0.45) 0%, rgba(139,47,248,0.1) 40%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236,106,251,0.2) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 80%)",
            }}
          />

          <div className="relative">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#c187fb] mb-5">
              Open Source
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Start Building Your{" "}
              <span className="bg-gradient-to-r from-[#ec6afb] to-[#c187fb] bg-clip-text text-transparent">List Tonight.</span>
            </h2>
            <p className="text-[#b8b0c8] max-w-xl mx-auto mb-10">
              Clone the repo, pick a niche and a city, and have a scored CSV before you finish your coffee. No signup, no credit card, no API quota.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://github.com/ahmadvision345/mapleads" className="cta-primary">
                <span>View on GitHub</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a
                href="https://github.com/ahmadvision345/mapleads#readme"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-sm font-medium text-white hover:bg-white/[0.1] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2 H6 a2 2 0 0 0 -2 2 v16 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2 -2 V8 Z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
                Read the README
              </a>
            </div>

            <p className="text-xs text-[#8a7fa3] mt-8">
              Open-source core on GitHub &middot; managed cloud tier in early access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
