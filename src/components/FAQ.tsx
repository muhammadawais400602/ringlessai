"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, CornerUpRight } from "lucide-react";
import Reveal from "./Reveal";

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

function Item({ i, open, onToggle }: { i: number; open: boolean; onToggle: (i: number) => void }) {
  const f = faqs[i];
  return (
    <div
      className={`rounded-[14px] border border-[#8b2ff8] transition-colors duration-300 ${
        open ? "bg-white" : "bg-white/60 hover:bg-white"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => onToggle(i)}
        className="flex w-full items-start justify-between gap-3 p-5 text-left"
      >
        <span className={`text-[15.5px] leading-[1.4] transition-colors duration-300 ${open ? "text-[#0a0a0a]" : "text-[#444]"}`}>
          {f.q}
        </span>
        <span className="mt-0.5 shrink-0">
          {open ? (
            <ArrowUp size={17} strokeWidth={1.8} className="text-[#8b2ff8]" />
          ) : (
            <ArrowDown size={17} strokeWidth={1.8} className="text-[#444]" />
          )}
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <p
              className={`rounded-xl border border-[#e8e8e8] bg-[#f4f4f4] p-3.5 text-[13.5px] leading-[1.5] text-[#666] transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0"
              }`}
            >
              {f.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fixed column assignment so opening a card only moves cards in its own column
function columns(count: number) {
  const cols: number[][] = Array.from({ length: count }, () => []);
  faqs.forEach((_, i) => cols[i % count].push(i));
  return cols;
}

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set([0, 2, 3, 5]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const layout = (count: number, cls: string) => (
    <div className={cls}>
      {columns(count).map((col, c) => (
        <div key={c} className="flex flex-1 flex-col gap-4">
          {col.map((i) => (
            <Item key={i} i={i} open={open.has(i)} onToggle={toggle} />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section id="about-us" className="relative bg-[#f5f5f5] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
        <div className="mb-12 grid grid-cols-1 gap-y-6 md:mb-[72px] lg:grid-cols-[44.8%_1fr] lg:items-end">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-1.5 text-[17px] font-medium text-[#8b2ff8]">
              FAQ
              <CornerUpRight size={16} strokeWidth={2.2} />
            </span>
            <h2 className="text-[clamp(2.1rem,4.2vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.04em]">
              Frequently
              <br />
              Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-[560px] lg:pb-1">
              <p className="text-[16px] leading-[1.55] text-[#111]">Honest answers to the questions buyers always ask first.</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center rounded-xl bg-[#7a1fd6] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_22px_rgba(122,31,214,0.3)] transition-transform hover:-translate-y-0.5"
              >
                Book a demo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          {layout(4, "hidden items-start gap-4 lg:flex")}
          {layout(2, "hidden items-start gap-4 md:flex lg:hidden")}
          {layout(1, "flex flex-col gap-4 md:hidden")}
        </Reveal>
      </div>
    </section>
  );
}
