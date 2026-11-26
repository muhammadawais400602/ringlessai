import { Box, CornerUpRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Set Your Rubric",
    body: "Define ICP, qualification questions, pitch script, and routing rules. Pick a voice. Xovra configures the rest in your tenant.",
  },
  {
    n: "02",
    title: "Leads Sourced",
    body: "Xovra pulls fresh Google Maps leads for the niche and city, enriches each from its own website, and scores by live Google Ads intent.",
  },
  {
    n: "03",
    title: "AI Dials & Qualifies",
    body: "Natural voice agents open conversations, handle objections, and qualify prospects against your rubric. Nights and weekends included.",
  },
  {
    n: "04",
    title: "Transfer or Book",
    body: "Hot prospects get live-transferred to your rep with full context. Everyone else gets a meeting booked directly on your calendar.",
  },
  {
    n: "05",
    title: "CRM Sync",
    body: "Call transcripts, qualification outcomes, and scheduled meetings sync to HubSpot, Close, GoHighLevel, Salesforce, or your Google Sheet.",
  },
];

export default function PathSteps() {
  return (
    <section id="how-it-works" className="relative bg-[#f5f5f5] text-[#0a0a0a]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-x-16 gap-y-8 lg:items-end mb-12 md:mb-[72px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[17px] font-medium text-[#8b2ff8] mb-3">
              How It Works
              <CornerUpRight size={16} strokeWidth={2.2} />
            </span>
            <h2 className="text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.04] tracking-[-0.04em]">
              <span className="block font-normal">Your Path from Launch</span>
              <span className="block font-semibold">to Booked Meetings</span>
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="max-w-[420px] lg:ml-auto lg:pb-1">
              <p className="text-[15px] leading-[1.55] text-[#111]">
                Set your rubric once. Xovra sources, dials, qualifies, transfers hot prospects, and books the rest. You review the calendar.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center rounded-xl bg-[#111] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Book a demo
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
              <article className="group relative h-[280px] md:h-[300px] overflow-hidden rounded-2xl bg-white p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-[#202020]">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#1c1c1c] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#111]">
                  <Box size={19} color="currentColor" strokeWidth={2} />
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-2 select-none text-[104px] md:text-[112px] leading-none font-medium tracking-[-0.05em] text-[#ececec] transition-colors duration-300 [-webkit-text-stroke:1.5px_#dcdcdc] group-hover:text-[#2b2b2b] group-hover:[-webkit-text-stroke-color:#3d3d3d]"
                >
                  {s.n}
                </span>
                <div className="relative">
                  <h3 className="text-[22px] leading-tight font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-white">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.45] text-[#555] transition-colors duration-300 group-hover:text-[#b5b5b5]">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={6}>
            <article className="relative h-[280px] md:h-[300px] overflow-hidden rounded-2xl bg-[#202020] p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-[22px] leading-tight font-medium tracking-[-0.02em]">Let AI Run Your Outbound This Week.</h3>
                <p className="mt-2 text-[15px] leading-[1.45] text-[#b5b5b5]">
                  Set your rubric, point at a niche and a city, watch qualified meetings land on your calendar.
                </p>
              </div>
              <a
                href="#contact"
                className="flex h-[41px] items-center justify-center rounded-full bg-white text-[14px] font-medium text-[#111] transition-transform hover:-translate-y-0.5"
              >
                Book a demo
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
