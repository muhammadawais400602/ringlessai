import ConveyorScene from "@/components/ConveyorScene";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Full-screen animated background */}
      <div className="fixed inset-0 z-0">
        <ConveyorScene />
        {/* Darken + vignette so overlay copy stays readable */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.65)_75%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Hero content */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-32 pb-24 text-center">
        <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-[88px] max-w-5xl mb-8">
          Stop Chasing Leads.
          <br />
          Start Closing Them.
        </h1>

        <p className="text-base md:text-lg text-[#c8c2d8] max-w-2xl mb-10 leading-relaxed">
          AI-powered outbound calling that works leads at scale, qualifies intent
          in real-time, and either transfers hot prospects to your closers
          instantly or books meetings directly on their calendar.
        </p>

        <a href="#start" className="cta-primary mb-14">
          <span>Try it now</span>
          <span className="arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </a>

        {/* Feature chips row */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
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

        {/* Partnered-with bar */}
        <div className="mt-20 w-full max-w-5xl">
          <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5">Partnered with</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/60">
            {["GoHighLevel", "HubSpot", "Salesforce", "Close CRM", "Zapier", "Twilio SIP"].map((p) => (
              <span key={p} className="text-sm md:text-base font-medium hover:text-white transition">{p}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
