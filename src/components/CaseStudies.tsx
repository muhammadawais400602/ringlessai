import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

const cases = [
  {
    tag: "Home Services · US Southeast",
    badge: "Weekend Autopilot",
    metrics: [
      { v: "412", l: "dials / wk" },
      { v: "40", l: "weekend bookings" },
    ],
    headline: "Our two SDRs couldn't touch Saturdays.",
    body: "Xovra dials from Friday night through Sunday, and Monday morning our closers see 40 booked meetings on the calendar.",
    by: "Home-services agency · US Southeast",
  },
  {
    tag: "AI Agency · Europe",
    badge: "Live Transfer Pilot",
    metrics: [
      { v: "1,100", l: "dials / wk" },
      { v: "$8", l: "per qualified call" },
    ],
    headline: "The live-transfer handoff is seamless.",
    body: "The AI qualifies, our best closer gets a context-loaded screen pop, and the prospect never knows the handoff happened. Close rate up 31%.",
    by: "AI-build agency · Europe",
  },
  {
    tag: "Call Center · APAC",
    badge: "Replaced 20 SDRs",
    metrics: [
      { v: "4,800", l: "dials / wk" },
      { v: "31%", l: "close uplift" },
    ],
    headline: "We reassigned 20 dialers to closing roles.",
    body: "Xovra runs the top-of-funnel at 24/7 pace and transfers only qualified prospects. Payback landed inside the first quarter.",
    by: "Lead-gen call center · APAC",
  },
];

const line = "#e3e3e3";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 border border-line bg-white px-2 py-[3px] text-[14px] font-medium leading-none text-ink">
      {children}
    </span>
  );
}

export default function CaseStudies() {
  return (
    <section id="pilot-results" className="relative bg-white text-ink">
      <div className="section-shell">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Pilot Results</Eyebrow>
          </Reveal>

          <Reveal delay={1} className="w-full">
            <h2 className="mt-2 w-full font-extrabold tracking-[-0.055em] leading-[0.94] text-[clamp(2.6rem,9.2vw,8.4rem)]">
              {["Teams Already", "Letting Xovra Dial"].map((t) => (
                <span
                  key={t}
                  className="block bg-gradient-to-b from-ink from-25% to-ink/0 bg-clip-text pb-[0.04em] text-transparent"
                >
                  {t}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="lead mt-6 max-w-[500px]">
              <span className="text-ink">Results from early access AI-dialer deployments, Q3 to Q4 2026.</span> Logos withheld pending
              contracted case-study rights.
            </p>
          </Reveal>
        </div>

        <Reveal delay={3}>
          <div
            className="mt-14 md:mt-[72px] grid grid-cols-1 md:grid-cols-3 gap-px border"
            style={{ background: line, borderColor: line }}
          >
            {cases.map((c) => (
              <article key={c.badge} className="flex min-h-[320px] flex-col justify-between bg-white p-5 md:p-[21px]">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="pt-0.5 text-[13px] font-medium leading-snug text-body">{c.tag}</span>
                    <Chip>{c.badge}</Chip>
                  </div>
                  <div className="mt-7 flex gap-10">
                    {c.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-[44px] leading-none font-semibold tracking-[-0.04em]">{m.v}</div>
                        <div className="mt-1.5 text-[13px] text-subtle">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-[17px] leading-snug font-semibold">{c.headline}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.45] text-body">{c.body}</p>
                  <p className="mt-3 text-[13px] text-subtle">{c.by}</p>
                </div>
              </article>
            ))}

            <article className="flex min-h-[280px] flex-col justify-between bg-white p-5 md:col-span-2 md:p-[21px]">
              <div className="flex items-start justify-between gap-3">
                <Chip>Aggregate Benchmark</Chip>
              </div>
              <h3 className="mt-8 max-w-[720px] text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.18] font-medium tracking-[-0.03em]">
                Across pilot teams, Xovra qualified more prospects in 72 hours than human SDR floors qualified in 14 days.
              </h3>
            </article>

            <article className="flex min-h-[280px] flex-col justify-between bg-white p-5 md:p-[21px]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[52px] leading-none font-semibold tracking-[-0.04em]">72h</div>
                  <div className="mt-2 text-[13px] leading-snug text-subtle">To match a 14-day SDR qualified total</div>
                </div>
                <div>
                  <div className="text-[52px] leading-none font-semibold tracking-[-0.04em]">3×</div>
                  <div className="mt-2 text-[13px] leading-snug text-subtle">Qualified lift vs. humans-only</div>
                </div>
              </div>
              <p className="mt-8 text-[13px] leading-snug text-subtle">
                Measured across 1.4M+ AI-dialer calls in US, UK, UAE, and EU markets
              </p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
