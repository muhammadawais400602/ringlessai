"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is scraping Google Maps actually allowed?",
    a: "It violates Google's Terms of Service. The data on the result pages is public, but the automated method of access isn't sanctioned. We're explicit about this in the README, in the repo, and here. You run Xovra on your own responsibility — the same way you'd run any other scraping tool.",
  },
  {
    q: "Where do the emails come from if Maps doesn't publish them?",
    a: "Not Maps. After the Maps scrape, Xovra visits each business's own website and extracts contacts from the HTML. Nothing is purchased from a broker, nothing is guessed. If the site doesn't publish an email, that record ships without one rather than a fabricated address.",
  },
  {
    q: "Do I need a Google account, API key or Cloud project?",
    a: "No. Xovra uses Playwright to drive a headless Chromium browser directly. Install it, run the CLI with a niche and a city, get a CSV in /out. Google Sheets export is optional — that one does need a service-account JSON, but only if you want it.",
  },
  {
    q: "How do the three ad-intent sources differ?",
    a: "On-site tags are the cheapest: we read the HTML Xovra already downloads. Transparency Center confirms live creative count from Google's own public page. Live SERP captures who's bidding right now on your keyword in your city — the strongest signal, but Google blocks it fast without a residential proxy.",
  },
  {
    q: "What's the difference between the CSV and the Google Sheet?",
    a: "The CSV matches HubSpot's 14-column import schema; score, pitch angle and ad-intent metadata live in Notes. The Google Sheet uses raw field names (phone, pitch_angle, score...) because dialers read sheets by field name. Pick whichever matches your downstream workflow.",
  },
  {
    q: "Can I run many niches and cities at once?",
    a: "Yes. --batch jobs.yaml accepts any number of niche + city pairs and runs them serially with shared enrichment caching. Point it at a YAML on Sunday night, wake up Monday with a week of lists.",
  },
  {
    q: "How does Xovra handle TCPA, DNC and compliance?",
    a: "Xovra outputs leads. What you do with them is on you. We recommend running the output through a DNC scrubber (Gryphon, RealPhoneValidation, or your dialer's built-in check) before any outbound call, and documenting consent per your jurisdiction's rules.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="about-us" className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-[#5a5466]">
            Honest answers to the questions buyers always ask first.
          </p>
        </div>

        <div className="divide-y divide-[#ece6f5] border-y border-[#ece6f5]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left hover:text-[#8b2ff8] transition"
                >
                  <span className="text-base md:text-lg font-medium text-[#15101e]">{f.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#e2d2f5] flex items-center justify-center text-[#8b2ff8] transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] text-[#5a5466] leading-relaxed max-w-3xl pr-10">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
