import ConveyorScene from "@/components/ConveyorScene";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Navbar />

      <section className="relative">
        {/* Top block: headline, subheading, CTA, chips */}
        <div className="relative z-10 px-6 md:px-14 lg:px-20 pt-32 md:pt-36 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column */}
            <div className="max-w-2xl">
              <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] mb-8">
                Stop Chasing Leads. Start Closing Them.
              </h1>

              <p className="text-base md:text-lg text-[#c8c2d8] max-w-xl leading-relaxed mb-12">
                AI-powered outbound calling that works leads at scale, qualifies
                intent in real-time, and either transfers hot prospects to your
                closers instantly or books meetings directly on their calendar.
              </p>

              <a href="#start" className="cta-primary">
                <span>Try it now</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            {/* Right column: feature chips stacked */}
            <div className="flex flex-col items-start lg:items-end gap-4 lg:pt-10">
              <div className="feature-chip">
                <span className="text-[#ec6afb]">✦</span>
                <span>Your smart scheduling assistant</span>
              </div>
              <div className="feature-chip">
                <span className="text-[#ec6afb]">✓</span>
                <span>Qualified appointment only</span>
              </div>
              <div className="feature-chip">
                <span>🚀</span>
                <span>Increases efficiency by 80%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom block: animation (part of the same hero section, scrolls with the page) */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <ConveyorScene />
          {/* soft top fade so headline block blends into the scene */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
          {/* Partnered-with bar over the right side of the scene */}
          <div className="absolute right-6 md:right-14 lg:right-20 bottom-8 text-right z-10">
            <p className="text-sm font-semibold text-white mb-4">Partnered with:</p>
            <div className="flex items-center gap-8 text-white/80">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold tracking-tight flex items-center gap-1">
                  <span className="text-[#76b900]">◆</span>
                  NVIDIA<span className="text-xs align-top">®</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-white/60 mt-0.5">INCEPTION PROGRAM</span>
              </div>
              <span className="text-xl font-semibold">ElevenLabs</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
