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
    tag: "Simplicity",
    title: "Outbound-First Platform",
    body: "When a lead qualifies, with live routing, then use the same voice AI core to handle inbound queries with identical context.",
    foot: "One system for every voice motion.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92V20a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Speed",
    title: "Contextual Live Transfers",
    body: "When a lead qualifies, AI-based routing hands them to your top sales closer with instantaneous screen pop context.",
    foot: "Zero handoff friction. 40%+ more closes.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Deployment",
    title: "Self-Managing Numbers",
    body: "Xovra AI automatically provisions local DIDs and rotates outbound lines to circumvent 'Spam Likely' telecom labels.",
    foot: "Protects domain and connect rates proactively.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Leverage",
    title: "Scale Without Headcount",
    body: "Handle weekend peaks and thousands of parallel touches with AI capacity equivalent to a 50-person SDR team, zero onboarding effort.",
    foot: "4x pipeline output at current operating costs.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 4 4 5-6" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Speed",
    title: "Deploy in 48 Hours",
    body: "Go live quickly with turnkey vertical blueprints, then branch out to fresh marketing channels without enterprise red tape.",
    foot: "Immediate time-to-value, zero dev required.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </Icon>
    ),
  },
  {
    tag: "Visibility",
    title: "Revenue-Grade Analytics",
    body: "Examine true acquisition cost per validated meeting, attribution channels, and close velocity with deterministic attribution.",
    foot: "Total focus on booked revenue, not vanity calls.",
    icon: (
      <Icon>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
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
            Strategic Advantages
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#15101e] mb-4">
            Why Top Teams Choose <span className="bg-gradient-to-r from-[#ec6afb] to-[#8b2ff8] bg-clip-text text-transparent">Xovra AI</span>
          </h2>
          <p className="text-[#5a5466] max-w-2xl mx-auto">
            Traditional cold calling and legacy outbound software are dead. Here&apos;s how our architecture wins.
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
