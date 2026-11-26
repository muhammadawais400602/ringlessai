import Reveal from "./Reveal";

const platform = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Changelog", href: "#" },
];
const company = [
  { label: "About", href: "#about-us" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];
const legal = ["Privacy Policy", "Terms of Service", "Security", "Compliance"];
const bottomLinks = ["Status", "Documentation", "System Index"];

function Pills({ title, links, dot = "#0a0a0a" }: { title: string; links: { label: string; href: string }[]; dot?: string }) {
  return (
    <div>
      <p className="mb-4 flex items-center gap-1.5 text-[17px] font-semibold text-ink">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
        {title}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="rounded-full bg-surface-2 px-4 py-2.5 text-[11px] font-medium uppercase leading-none tracking-[0.02em] text-ink transition-colors duration-200 hover:bg-brand hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-ink">
      <div className="mx-auto max-w-[1500px] px-6 pt-16 md:px-14 md:pt-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_1.5fr_0.7fr] lg:gap-16">
          <div className="max-w-[360px]">
            <p className="text-[clamp(1.35rem,2vw,1.7rem)] font-medium leading-[1.25] tracking-[-0.025em]">
              AI outbound dialer with built-in Google Maps lead sourcing.
            </p>
            <p className="mt-4 text-[15px] leading-[1.55] text-body">
              For agencies, SDR teams and solo operators who want qualified meetings without an SDR floor.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <Pills title="Platform" links={platform} />
            <Pills title="Company" links={company} />
          </div>

          <div>
            <p className="mb-4 flex items-center gap-1.5 text-[17px] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Legal &amp; Trust
            </p>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[15px] text-body transition-colors hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal>
          <div
            aria-hidden
            className="mt-14 flex select-none items-center justify-center gap-[2.2vw] md:mt-20 lg:gap-6"
          >
            <svg viewBox="0 0 32 32" className="h-[14.5vw] w-[14.5vw] max-h-[225px] max-w-[225px] shrink-0" fill="none">
              <defs>
                <linearGradient id="ftMark" x1="0" y1="6" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#3b3b3b" />
                  <stop offset="1" stopColor="#3b3b3b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M2 4 L16 28 L30 4 L23 4 L16 16 L9 4 Z" fill="url(#ftMark)" />
            </svg>
            <span className="bg-gradient-to-b from-[#3b3b3b] from-10% to-[#3b3b3b]/0 bg-clip-text text-[clamp(4rem,19.5vw,18rem)] pr-[0.07em] font-extrabold leading-[0.9] tracking-[-0.05em] text-transparent">
              XOVRA
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-6 sm:flex-row sm:items-center">
          <p className="text-[14px] text-body">© {new Date().getFullYear()} Xovra AI. All organizational rights reserved.</p>
          <div className="flex items-center gap-6 text-[14px] text-body">
            {bottomLinks.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-brand">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
