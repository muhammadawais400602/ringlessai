"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Reveal from "./Reveal";
import { CtaButton, Eyebrow } from "./ui";

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
    <section id="about-us" className="relative bg-surface text-ink">
      <div className="section-shell">
        <Reveal>
          <Eyebrow className="mb-4">FAQ</Eyebrow>
          <h2 className="h-section border-l-[5px] border-brand pl-4 [border-radius:2px]">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:gap-16">
          <Reveal delay={1} className="lg:sticky lg:top-28 lg:self-start">
            <p className="lead max-w-[420px]">Honest answers to the questions buyers always ask first.</p>
            <CtaButton href="#contact" className="mt-6">
              Book a demo
            </CtaButton>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`rounded-2xl transition-[background-color,box-shadow] duration-[var(--dur-base)] ${
                      isOpen ? "bg-white shadow-[0_12px_36px_rgba(10,10,10,0.06)]" : "bg-white/70 hover:bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left md:px-6"
                    >
                      <span className={`text-[16px] leading-[1.4] transition-colors duration-[var(--dur-base)] ${isOpen ? "text-ink" : "text-body"}`}>
                        {f.q}
                      </span>
                      <span className="shrink-0">
                        {isOpen ? (
                          <ArrowUp size={18} strokeWidth={1.8} className="text-brand" />
                        ) : (
                          <ArrowDown size={18} strokeWidth={1.8} className="text-body" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-[var(--dur-base)] ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={`px-5 pb-6 text-[15px] leading-[1.65] text-body transition-opacity duration-[var(--dur-base)] md:px-6 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
