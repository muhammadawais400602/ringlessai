import Reveal from "./Reveal";
import { CtaButton, Eyebrow } from "./ui";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-white text-ink">
      <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-14 md:py-20 lg:px-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-night px-6 py-20 text-center text-white md:px-16 md:py-28 lg:px-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(139,47,248,0.45) 0%, rgba(139,47,248,0.1) 40%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236,106,251,0.2) 0%, transparent 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent 80%)",
              }}
            />

            <div className="relative flex flex-col items-center">
              <Eyebrow dark>Instant Deployment</Eyebrow>
              <h2 className="h-section mt-4 max-w-3xl">
                Let AI Run Your <span className="accent-text">Outbound This Week.</span>
              </h2>
              <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                Set your rubric, point at a niche and a city, watch qualified meetings land on your calendar. Nights and weekends included. First campaign live in 48 hours.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaButton href="#contact" variant="light">
                  Book a demo
                </CtaButton>
                <a href="#features" className="cta-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Hear a live transfer
                </a>
              </div>

              <p className="mt-8 text-xs text-white/45">
                No long-term contracts &middot; fresh leads included &middot; DNC and TCPA compliant
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
