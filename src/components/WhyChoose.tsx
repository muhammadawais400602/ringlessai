type Item = {
  tag: string;
  title: string;
  body: string;
  foot: string;
  icon: React.ReactNode;
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2a1545] to-[#0b0618] border border-[#3a2160] flex items-center justify-center text-[#ec6afb]">
    {children}
  </div>
);

const items: Item[] = [
  {
    tag: "Freshness",
    title: "Not a Database. A Scraper.",
    body: "Every list is built live, the day you run it. No stale 2022 records, no duplicate burn with the vendor's other customers, no decayed phone numbers.",
    foot: "Zero overlap with Apollo / ZoomInfo buyers.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <polyline points="21 3 21 9 15 9" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Intent",
    title: "Advertisers Close 4× Better.",
    body: "Businesses already paying for Google Ads have budget approved and a CPL number they already watch. Xovra proves it from three independent sources before you spend a dial.",
    foot: "Target buyers, not window-shoppers.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Depth",
    title: "Beyond the Google Maps Row.",
    body: "We visit each business's own website for the data Maps itself doesn't expose: email, tech stack, Instagram, Facebook, TikTok, follower counts, review signal.",
    foot: "The full picture, not a phone number.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h4l3-9 4 18 3-9h4" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Honesty",
    title: "No Hidden ToS Risk.",
    body: "Scraping Google Maps violates Google's Terms of Service. We say so in the README, the FAQ, and here. You operate with full awareness. No buried disclosure, no silent takedown risk.",
    foot: "Documented, not whitewashed.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Portability",
    title: "CSV, Sheets, or Pipe It.",
    body: "Open formats only. 14-column HubSpot-shaped CSV, or a Google Sheet field-mapped so any dialer can watch it. No proprietary export, no vendor lock-in.",
    foot: "Your data, your workflow, your dialer.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3 H5 a2 2 0 0 0-2 2 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2-2 V10" />
          <polyline points="17 3 21 3 21 7" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Cost",
    title: "No Per-Lead Markup.",
    body: "Pay for the engine, not the row. Re-run the same niche + city every week. Scale from one city to a continent without a bill that scales with you.",
    foot: "Fixed-cost outbound sourcing.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5 H9.5 a3.5 3.5 0 0 0 0 7 h5 a3.5 3.5 0 0 1 0 7 H6" />
        </svg>
      </Icon>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="features" className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-24 md:py-28">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-4">
            Why Agencies Pick Xovra
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            Six Reasons to Stop Buying <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Dead Lists</span>
          </h2>
          <p className="text-[#5a5466] max-w-2xl mx-auto">
            Apollo and ZoomInfo sell you data their last customer already burned through. Xovra builds yours fresh, from signals those databases can&apos;t see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="relative p-7 md:p-8 rounded-2xl bg-[#0b0618] text-white border border-[#231538] overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(236,106,251,0.18) 0%, transparent 70%)",
                }}
              />
              <div className="relative flex items-start justify-between mb-6">
                {it.icon}
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c187fb] px-2.5 py-1 rounded-full border border-[#3a2160] bg-[#1a0b2e]">
                  {it.tag}
                </span>
              </div>
              <h3 className="relative text-lg font-semibold mb-3">{it.title}</h3>
              <p className="relative text-sm text-[#b8b0c8] leading-relaxed mb-5">{it.body}</p>
              <p className="relative text-sm text-[#c187fb] font-medium">{it.foot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
