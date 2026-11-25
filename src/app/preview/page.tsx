import Link from "next/link";

const themes = [
  {
    slug: "",
    name: "Current",
    tag: "Live",
    desc: "Neon purple and pink on black. The scheme the live homepage uses today.",
    swatch: ["#ec6afb", "#8b2ff8", "#0b0618"],
    href: "/",
  },
  {
    slug: "blue",
    name: "Electric Blue",
    tag: "Tech / Trust",
    desc: "Shifts the palette toward a classic SaaS blue-cyan. Think Stripe, Linear, Vercel.",
    swatch: ["#6ac6fb", "#2f7af8", "#06101e"],
    href: "/preview/blue",
  },
  {
    slug: "emerald",
    name: "Emerald",
    tag: "Growth / Finance",
    desc: "Money-green with a mint accent. Reads as high-growth and confident.",
    swatch: ["#6afb9c", "#2ff891", "#06180e"],
    href: "/preview/emerald",
  },
  {
    slug: "sunset",
    name: "Sunset",
    tag: "Bold / Energetic",
    desc: "Warm orange and coral. Agency and performance-marketing energy.",
    swatch: ["#fb8f6a", "#f85d2f", "#1e0c06"],
    href: "/preview/sunset",
  },
  {
    slug: "mono",
    name: "Monochrome",
    tag: "Understated",
    desc: "Desaturated grayscale. Minimal, enterprise, serious.",
    swatch: ["#c8c2d8", "#80788c", "#0b0b0e"],
    href: "/preview/mono",
  },
];

export default function PreviewGallery() {
  return (
    <main className="min-h-screen bg-[#0b0618] text-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-14 lg:px-20 py-24">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#c187fb] mb-4">
          Color Scheme Previews
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Pick a palette to review.
        </h1>
        <p className="text-[#b8b0c8] max-w-2xl mb-14">
          Each preview renders the full homepage with a different accent palette.
          The current live site stays untouched at <code className="px-1.5 py-0.5 rounded bg-white/10 text-xs">/</code>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {themes.map((t) => (
            <Link
              key={t.slug || "current"}
              href={t.href}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                    {t.name}
                  </h2>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#c187fb]">
                    {t.tag}
                  </span>
                </div>
                <div className="flex -space-x-2">
                  {t.swatch.map((c, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0b0618]"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-[#b8b0c8] leading-relaxed mb-6">{t.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ec6afb] group-hover:gap-3 transition-all">
                Open preview
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-xs text-[#8a7fa3]">
          Preview routes are gated by filter-based color transforms. Final adoption of a scheme requires swapping the baked gradient stops in SVG, which is a follow-up step once a palette is chosen.
        </p>
      </div>
    </main>
  );
}
