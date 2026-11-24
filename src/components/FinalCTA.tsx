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
              Let AI Run Your{" "}
              <span className="bg-gradient-to-r from-[#ec6afb] to-[#c187fb] bg-clip-text text-transparent">Outbound This Week.</span>
            </h2>
            <p className="text-[#b8b0c8] max-w-xl mx-auto mb-10">
              Set your rubric, point at a niche and a city, watch qualified meetings land on your calendar. Nights and weekends included. First campaign live in 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#contact" className="cta-primary">
                <span>Book a demo</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-sm font-medium text-white hover:bg-white/[0.1] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Hear a live transfer
              </a>
            </div>

            <p className="text-xs text-[#8a7fa3] mt-8">
              No long-term contracts &middot; fresh leads included &middot; DNC and TCPA compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
