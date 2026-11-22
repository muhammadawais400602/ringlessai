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
              Instant Deployment
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.05]">
              Stop Losing Business.
              <br />
              Work Leads Harder, Faster,{" "}
              <span className="bg-gradient-to-r from-[#ec6afb] to-[#c187fb] bg-clip-text text-transparent">Smarter.</span>
            </h2>
            <p className="text-[#b8b0c8] max-w-xl mx-auto mb-10">
              Launch your first campaign this week. See qualified conversations hitting your calendar in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#start" className="cta-primary">
                <span>Start Growth</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-sm font-medium text-white hover:bg-white/[0.1] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Strategy Discovery Call
              </a>
            </div>

            <p className="text-xs text-[#8a7fa3] mt-8">
              No long-term contracts. Deployed as a managed service · 72-day performance guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
