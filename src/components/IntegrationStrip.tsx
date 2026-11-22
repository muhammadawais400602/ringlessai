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
    name: "Twilio SIP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 11 a12 12 0 0 1 20 0" />
        <path d="M5 14 a8 8 0 0 1 14 0" />
        <path d="M8 17 a4 4 0 0 1 8 0" />
        <circle cx="12" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function IntegrationStrip() {
  return (
    <section className="relative bg-white text-[#0b0618]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="min-w-[280px]">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-2">
              Integration Ecosystem
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-[#15101e]">
              Partnered with high-growth stacks
            </h3>
          </div>

          <div className="flex-1 flex flex-wrap items-center gap-x-10 gap-y-5 lg:justify-end">
            {items.map((item) => (
              <div key={item.name} className="flex items-center gap-2.5 text-[#15101e]">
                <span className="w-5 h-5 text-[#8b2ff8]">{item.icon}</span>
                <span className="text-[15px] font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
