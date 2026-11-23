const items = [
  {
    name: "GoHighLevel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" />
        <path d="M12 7 V17 M8 10 H16" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="14" r="4" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="12" cy="4" r="1.5" />
        <path d="M12 5.5 V10 M7 7 L9.5 12 M17 7 L14.5 12" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16 a4 4 0 0 1 1-7.8 A4.5 4.5 0 0 1 15.5 7 a3.5 3.5 0 0 1 4.2 5.5 A3 3 0 0 1 17 17 H8 a2.5 2.5 0 0 1-2-1 Z" />
      </svg>
    ),
  },
  {
    name: "Close CRM",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4 h3 l2 5 l-2.5 1.5 a11 11 0 0 0 6 6 l1.5-2.5 l5 2 v3 a2 2 0 0 1-2 2 A17 17 0 0 1 3 6 a2 2 0 0 1 2-2 Z" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 L5 13 h7 l-1 9 l8-11 h-7 Z" />
      </svg>
    ),
  },
  {
    name: "Google Sheets",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 h8 l4 4 v14 a2 2 0 0 1 -2 2 H6 a2 2 0 0 1 -2 -2 V4 a2 2 0 0 1 2 -2 Z" />
        <path d="M14 2 V6 H18" />
        <path d="M7 12 H17 M7 15 H17 M7 18 H17 M10 10 V20 M14 10 V20" />
      </svg>
    ),
  },
  {
    name: "Pipedrive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3 h6 a5 5 0 0 1 0 10 h-4 V21 H7 V3 Z" />
      </svg>
    ),
  },
  {
    name: "Monday",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="12" cy="12" r="2.4" />
        <circle cx="18" cy="12" r="2.4" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10 H21 M9 4 V20 M15 4 V20" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7 V17 M8 7 L16 17 V7" />
      </svg>
    ),
  },
];

export default function IntegrationStrip() {
  const row = (
    <>
      {items.map((item, i) => (
        <div key={`${item.name}-${i}`} className="flex items-center gap-2.5 text-[#15101e] shrink-0">
          <span className="w-5 h-5 text-[#8b2ff8]">{item.icon}</span>
          <span className="text-[15px] font-medium whitespace-nowrap">{item.name}</span>
        </div>
      ))}
    </>
  );

  return (
    <section className="relative bg-white text-[#0b0618] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 pt-10 md:pt-12 pb-2">
        <div className="text-center mb-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-2">
            Exports Natively Into
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-[#15101e]">
            The CRMs and sheets your team already uses
          </h3>
        </div>
      </div>

      <div className="marquee-mask py-8">
        <div className="marquee-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}
