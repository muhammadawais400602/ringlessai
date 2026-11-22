export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-[1500px] mx-auto px-6 md:px-14 lg:px-20 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <span className="relative w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
              <path d="M4 6 L16 26 L28 6 L22 6 L16 16 L10 6 Z" fill="url(#xg)" />
              <defs>
                <linearGradient id="xg" x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#ec6afb" />
                  <stop offset="1" stopColor="#8b2ff8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-white font-semibold text-xl tracking-wide">XOVRA AI</span>
        </a>

        <nav className="hidden lg:flex items-center gap-12">
          {["Features", "Pricing", "About Us"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-[15px] text-white/90 hover:text-white transition">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/[0.1] transition"
          >
            Contact us
          </a>
          <a href="#login" className="cta-primary py-2.5 pr-2.5 pl-6 text-sm">
            <span>Login</span>
            <span className="arrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
