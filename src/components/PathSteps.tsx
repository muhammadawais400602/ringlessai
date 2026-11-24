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
    <section className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-pink w-[480px] h-[480px] top-20 -right-32 opacity-45" />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] max-w-2xl">
              Your Path from Launch to Booked Meetings
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[#5a5466] max-w-md">
              Set your rubric once. Xovra sources, dials, qualifies, transfers hot prospects, and books the rest. You review the calendar.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {/* connector line between cards on desktop */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#e2d2f5] to-transparent pointer-events-none" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="group relative p-6 md:p-7 rounded-2xl border border-[#ece6f5] bg-white/90 backdrop-blur-sm hover:shadow-[0_24px_60px_rgba(139,47,248,0.12)] hover:border-[#c6a5ea] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="relative mb-5">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-[#ec6afb]/10 to-[#8b2ff8]/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                  <div className="relative text-3xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">
                    {s.n}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#15101e] mb-3">{s.title}</h3>
                <p className="text-sm text-[#5a5466] leading-relaxed">{s.body}</p>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
