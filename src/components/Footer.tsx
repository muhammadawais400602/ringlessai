const cols = [
  {
    title: "Platform",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Press"],
  },
  {
    title: "Legal & Trust",
    links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#0b0618] border-t border-[#ece6f5]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2 max-w-sm">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <span className="relative w-7 h-7 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
                  <path d="M4 6 L16 26 L28 6 L22 6 L16 16 L10 6 Z" fill="url(#fx)" />
                  <defs>
                    <linearGradient id="fx" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#ec6afb" />
                      <stop offset="1" stopColor="#8b2ff8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="font-semibold text-xl tracking-wide text-[#15101e]">XOVRA AI</span>
            </a>
            <p className="text-sm text-[#5a5466] leading-relaxed">
              Frontier artificial intelligence infrastructure engineered for enterprise velocity cloud outbound workflows, built from the ground up.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b6676] mb-5">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#2a2237] hover:text-[#8b2ff8] transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-[#ece6f5]">
          <p className="text-xs text-[#6b6676]">
            © {new Date().getFullYear()} Xovra AI. All organizational rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#6b6676]">
            <a href="#" className="hover:text-[#8b2ff8] transition">Status</a>
            <a href="#" className="hover:text-[#8b2ff8] transition">Documentation</a>
            <a href="#" className="hover:text-[#8b2ff8] transition">System Index</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
