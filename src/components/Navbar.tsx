export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ec6afb] to-[#8b2ff8] shadow-[0_0_24px_rgba(236,106,251,0.6)]" />
          <span className="text-white font-semibold text-lg tracking-tight">Xovra</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl px-2 py-1.5">
          {["Features", "Pricing", "About Us"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="px-4 py-2 text-sm text-white/80 hover:text-white rounded-full hover:bg-white/5 transition">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#login" className="hidden md:inline text-sm text-white/80 hover:text-white">Login</a>
          <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">Contact us</a>
        </div>
      </div>
    </header>
  );
}
