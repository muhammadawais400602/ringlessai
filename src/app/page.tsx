import CaseStudies from "@/components/CaseStudies";
import ConveyorScene from "@/components/ConveyorScene";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import IntegrationStrip from "@/components/IntegrationStrip";
import Navbar from "@/components/Navbar";
import PathSteps from "@/components/PathSteps";
import WhyChoose from "@/components/WhyChoose";

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
                Prospect Lists That Actually Convert.
              </h1>

              <p className="text-base md:text-lg text-[#c8c2d8] max-w-xl leading-relaxed mb-12">
                Xovra scrapes Google Maps for every business in your niche and
                city, enriches each one with contact data from its own website,
                scores it by live Google Ads intent, and drops the result into
                your CRM or Google Sheet, ready to dial by morning.
              </p>

              <a href="https://github.com/ahmadvision345/mapleads" className="cta-primary">
                <span>Start sourcing</span>
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
              <div className="feature-chip self-start">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" fill="#c187fb" />
                  <path d="M18 3 L18.7 5.3 L21 6 L18.7 6.7 L18 9 L17.3 6.7 L15 6 L17.3 5.3 Z" fill="#c187fb" />
                  <path d="M5 15 L5.6 16.8 L7.4 17.4 L5.6 18 L5 19.8 L4.4 18 L2.6 17.4 L4.4 16.8 Z" fill="#c187fb" />
                </svg>
                <span>Google Maps + 3 ad-intent signals</span>
              </div>
              <div className="feature-chip self-end lg:mr-0 lg:ml-24">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#c187fb" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12 L10 18 L20 6" />
                </svg>
                <span>CRM-ready CSV &amp; Google Sheets</span>
              </div>
              <div className="feature-chip self-start">
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14.5 2.5 C17 4 19 6 20.5 8.5 C19 11 17 13 14.5 14.5 L12 17 L7 12 L9.5 9.5 C11 7 13 5 15 3.5 Z" fill="#c187fb" />
                  <path d="M6 14 L4 20 L10 18" fill="#8b2ff8" />
                  <circle cx="15" cy="9" r="1.4" fill="#fff" />
                </svg>
                <span>Every lead scored 0 to 100</span>
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
