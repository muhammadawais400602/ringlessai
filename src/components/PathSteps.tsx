const steps = [
  {
    n: "01",
    title: "Connect Tools",
    body: "Connect Xovra AI to your CRM. Use GoHighLevel for quickest fit — or syncs natively with HubSpot, Salesforce and Close.",
  },
  {
    n: "02",
    title: "Define Prospect",
    body: "Set your qualification rubric — budget, decision maker status, timeline. Xovra AI filters out the tire kickers on the fly.",
  },
  {
    n: "03",
    title: "Build Script",
    body: "Pick natural neural voices and customize your conversational blueprint — tone, objections, dynamic re-routing, cost-per-reach reset.",
  },
  {
    n: "04",
    title: "Launch & Qualify",
    body: "Our AI handles cold dials, warm leads and work-the-list. Qualified leads get patched immediately to available closers.",
  },
  {
    n: "05",
    title: "Scale Revenue",
    body: "Review sentiment metrics, analyze drop-off moments, A/B test cold openers, and double down on your most profitable audiences.",
  },
];

export default function PathSteps() {
  return (
    <section className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
              Execution Pathway
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] max-w-2xl">
              Your Path from Leads to Live Conversations
            </h2>
          </div>
          <p className="text-[#5a5466] max-w-md">
            Convert leads from your CRM, lists, or paid ads into qualified prospects eager to engage with your sales team or book appointments instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-6 md:p-7 rounded-2xl border border-[#ece6f5] bg-[#fbf7ff] hover:bg-white hover:shadow-[0_24px_60px_rgba(139,47,248,0.1)] hover:border-[#e2d2f5] transition"
            >
              <div className="text-3xl font-semibold bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent mb-5">
                {s.n}
              </div>
              <h3 className="text-base font-semibold text-[#15101e] mb-3">{s.title}</h3>
              <p className="text-sm text-[#5a5466] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
