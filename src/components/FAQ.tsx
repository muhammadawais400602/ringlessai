"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast can we launch our first calling campaign?",
    a: "Most teams go live within 48 hours. Connect your CRM, pick a voice and script template for your vertical, and we handle number provisioning, warmup, and compliance mapping for you.",
  },
  {
    q: "Won't AI calling create more buyer remorse for my closers?",
    a: "The opposite. Xovra AI only passes live-transfers once budget, timeline, and decision-maker status are confirmed. Your closers spend time on prospects who already want to talk.",
  },
  {
    q: "How do live transfers actually work in practice?",
    a: "When a prospect is qualified and eager to talk, Xovra identifies the best-fit available rep based on your routing rules (skills, territory, product line). The call transfers seamlessly with full context visible to your rep before they pick up — prospect name, pain points, budget, and qualification logs. No clumsy handoffs.",
  },
  {
    q: "How do you prevent numbers from getting spam-flagged?",
    a: "We provision local DIDs, rotate pools automatically, monitor connect rates per number, and retire any line approaching telecom spam thresholds before it hurts your deliverability.",
  },
  {
    q: "What about TCPA and DNC regulatory compliance?",
    a: "Xovra checks every number against federal and state DNC lists, honors opt-outs in real time, and logs consent trails per call. All calls record with TCPA-grade retention policies.",
  },
  {
    q: "Can we use this for inbound calls as well as outbound?",
    a: "Yes. The same voice core answers inbound inquiries with full context from your CRM, routes hot prospects to closers instantly, and books meetings for the rest — nights and weekends included.",
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
            Everything you need to know about implementing autonomous voice AI in your sales workflow.
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
