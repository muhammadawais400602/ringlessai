import ConveyorScene from "@/components/ConveyorScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative w-full min-h-screen">
        {/* Right-side animation */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none">
          <ConveyorScene />
          {/* Soft fade from the left so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent" />
        </div>

        {/* Feature chips floating over the animation */}
        <div className="hidden md:flex absolute right-[6%] top-[24%] flex-col items-end gap-4 z-10">
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

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20">
          <div className="max-w-2xl">
            <div className="pill-chip mb-8">
              <span className="dot"></span>
              <span>Autonomous Outbound Telephony v2.8</span>
            </div>

            <h1 className="hero-headline text-5xl md:text-7xl mb-6">
              Stop Chasing Leads.
              <br />
              Start Closing Them.
            </h1>

            <p className="text-lg md:text-xl text-[#a8a4b8] max-w-xl mb-10 leading-relaxed">
              AI-powered outbound calling that works leads at scale, qualifies intent
              in real-time, and either transfers hot prospects to your closers
              instantly or books meetings directly on their calendar.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#start" className="cta-primary">
                <span>Try it now</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a href="#demo" className="cta-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
                </svg>
                <span>Watch Interactive Demo</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-[#a0a0b0]">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec6afb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>99.8% Carrier Uptime</span>
              </div>
              <span className="w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec6afb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>TCPA & DNC Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
