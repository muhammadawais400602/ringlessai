const steps = [
  {
    n: "01",
    title: "Pick Niche + City",
    body: "Choose a vertical and a market. Solo neighborhoods or continent-scale batches via a YAML jobs file. Both run the same way.",
  },
  {
    n: "02",
    title: "Scrape Google Maps",
    body: "A Playwright-driven headless browser pulls every matching listing: name, phone, address, rating, review count, website URL.",
  },
  {
    n: "03",
    title: "Enrich & Detect",
    body: "Each website is parsed for email, tech stack and social URLs. Three independent ad-intent sources layer on top: tags, ATC, live SERP.",
  },
  {
    n: "04",
    title: "Score & Filter",
    body: "Every row gets a 0 to 100 fit score. Filter with --min-score. Keep only advertisers with --require-ads. Drop anything without signal.",
  },
  {
    n: "05",
    title: "Export to CRM",
    body: "HubSpot-ready CSV in /out, or a Google Sheet your dialer already watches. Lifecycle stage and contact owner set automatically.",
  },
];

export default function PathSteps() {
  return (
    <section className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] max-w-2xl">
              Niche + City In. Scored CSV Out.
            </h2>
          </div>
          <p className="text-[#5a5466] max-w-md">
            One CLI command, one YAML batch file, or one Python import. Xovra does the scraping, the website visits, the ad-intent detection, the scoring, and the CRM formatting end to end.
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
