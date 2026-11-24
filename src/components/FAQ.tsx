"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast can we launch our first AI dialing campaign?",
    a: "Most teams go live within 48 hours. Connect your CRM, pick a voice and a script template for your vertical, and Xovra handles number provisioning, warmup, and DNC compliance mapping. No in-house AI team required.",
  },
  {
    q: "Where do the leads come from?",
    a: "Built in. Xovra scrapes Google Maps for your niche and city, enriches each business from its own website, and scores every lead by three independent Google Ads intent signals. You never pay for an external Apollo or ZoomInfo seat again. If you prefer to upload your own list, you can skip the sourcing step and dial your CSV directly.",
  },
  {
    q: "How does a live call transfer actually work?",
    a: "When a prospect qualifies against your rubric, Xovra picks the best-fit rep from your routing rules and transfers the call with a context-rich screen pop: name, pain points, qualification trail, pitch angle. Your rep picks up a warm, pre-qualified conversation, not a cold handoff.",
  },
  {
    q: "Won't prospects hang up as soon as they realize it's an AI?",
    a: "Our voices are natural and multi-turn. The AI handles objections, pauses, and dynamic follow-ups the way a trained SDR does. Most prospects don't recognize the AI until after they've agreed to a transfer or a meeting, and by then they're already engaged. We publish the technology plainly on the live call if asked.",
  },
  {
    q: "What about TCPA, DNC, and STIR/SHAKEN compliance?",
    a: "Every number is scrubbed against federal and state Do Not Call lists before dial. TCPA consent is logged per call. STIR/SHAKEN attestation is configurable per outbound pool. Call recordings follow your retention policy. Enterprise-grade posture, documented, not buried.",
  },
  {
    q: "Can Xovra handle inbound calls too?",
    a: "Yes. The same AI voice core answers inbound inquiries with full CRM context, routes hot prospects to live reps in under 60 seconds, and books meetings for the rest. Nights, weekends and holidays included.",
  },
  {
    q: "How does Xovra protect against spam-flagged numbers?",
    a: "Xovra auto-provisions local DIDs, rotates outbound pools to avoid carrier spam thresholds, monitors connect rates per number, and retires any line that starts getting flagged before it hurts your deliverability.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="about-us" className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="bg-blob bg-blob-purple w-[460px] h-[460px] top-10 -left-40 opacity-40" />
      <div className="bg-blob bg-blob-pink w-[420px] h-[420px] bottom-0 -right-32 opacity-40" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
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
