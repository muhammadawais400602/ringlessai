import CaseStudies from "@/components/CaseStudies";
import ConveyorScene from "@/components/ConveyorScene";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureScroller from "@/components/FeatureScroller";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import IntegrationStrip from "@/components/IntegrationStrip";
import Navbar from "@/components/Navbar";
import PathSteps from "@/components/PathSteps";
import WhyChoose from "@/components/WhyChoose";

export default function Homepage() {
  return (
    <main className="relative bg-black text-white overflow-x-clip">
      <Navbar />

      <section className="relative overflow-hidden">
        {/* Top block: headline, subheading, CTA, chips */}
        <div className="relative z-10 px-6 md:px-14 lg:px-20 pt-32 md:pt-36 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left column */}
            <div className="max-w-2xl">
              <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] mb-8">
                AI That Dials, Qualifies, Books.
              </h1>

              <p className="text-base md:text-lg text-[#c8c2d8] max-w-xl leading-relaxed mb-12">
                Xovra is an AI outbound dialer that works leads at scale,
                qualifies intent live, and either transfers hot prospects to
                your closers in under 60 seconds or books the meeting on your
                calendar. Fresh Google Maps leads sourced and scored on every
                run, no SDR floor required.
              </p>

              <a href="#contact" className="cta-primary">
                <span>Book a demo</span>
                <span className="arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
            </div>

            {/* Right column: feature chips, staggered left/right */}
            <div className="flex flex-col gap-7 lg:gap-8 lg:pt-6 lg:pl-4">
              <div className="feature-chip chip-a self-start">
                <svg className="chip-icon-sparkles" width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 4 h3 l2 5 l-2.5 1.5 a11 11 0 0 0 6 6 l1.5-2.5 l5 2 v3 a2 2 0 0 1-2 2 A17 17 0 0 1 3 6 a2 2 0 0 1 2-2 Z" fill="#c187fb" />
                  <path d="M14 8 H21 M18 5 L21 8 L18 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span>Live transfer in under 60 seconds</span>
              </div>
              <div className="feature-chip chip-b self-end lg:mr-0 lg:ml-24">
                <svg className="chip-icon-check" width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#c187fb" />
                  <path d="M12 7 V12 L16 14" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="1.2" fill="#fff" />
                </svg>
                <span>24/7 dialing, nights &amp; weekends</span>
              </div>
              <div className="feature-chip chip-c self-start">
                <svg className="chip-icon-score" width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="4" width="13" height="16" rx="2" fill="#c187fb" />
                  <path d="M7 9 H14 M7 12 H14 M7 15 H12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M19 4 L19.8 6.5 L22.3 7.3 L19.8 8.1 L19 10.6 L18.2 8.1 L15.7 7.3 L18.2 6.5 Z" fill="#8b2ff8" />
                </svg>
                <span>Fresh leads sourced, scored, dialed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom block: animation (part of the same hero section, scrolls with the page) */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] -mt-10 md:-mt-16 lg:-mt-24">
          <ConveyorScene />
          {/* long smooth top fade so the headline block blends into the scene */}
          <div className="absolute inset-x-0 top-0 h-[55%] bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.85)_18%,rgba(0,0,0,0.6)_38%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0)_100%)] pointer-events-none" />
          {/* rounded radial vignette so the scene edges feather into black instead of looking like flat bands */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_90%_at_50%_55%,transparent_0%,transparent_45%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.75)_88%,#000_100%)]" />
        </div>
      </section>

      <IntegrationStrip />
      <FeatureScroller />
      <FeatureGrid />
      <ImpactStats />
      <PathSteps />
      <WhyChoose />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
