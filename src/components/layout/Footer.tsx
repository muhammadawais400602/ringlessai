import Link from "next/link";
import { Share2, Network, Code, MonitorPlay, Activity } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "#" },
  { label: "Changelog", href: "#" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "#", badge: "Hiring" },
  { label: "Contact", href: "/contact" },
  { label: "Partners", href: "#" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "API Docs", href: "#" },
  { label: "Case Studies", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const socialIcons = [
  { icon: Share2, label: "Share" },
  { icon: Network, label: "Network" },
  { icon: Code, label: "Code" },
  { icon: MonitorPlay, label: "Media" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#213145] text-[#eaf1ff] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.8)]" />

      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#630ed4] flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-white">
                Dialeads
              </span>
            </Link>
            <p className="text-base text-[#cbdbf5] mb-6 max-w-sm leading-relaxed">
              Dialeads -- AI-powered outbound calling for revenue teams that refuse to lose.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[#676577]/40 flex items-center justify-center hover:bg-[#630ed4] text-[#cbdbf5] hover:text-white transition-all"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Product</span>
            <ul className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Company</span>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {link.badge && (
                    <span className="text-[11px] bg-[#630ed4]/30 text-[#eaddff] px-2 py-0.5 rounded-full font-semibold">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Resources</span>
            <ul className="flex flex-col gap-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Legal</span>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#676577]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#cbdbf5]">© 2025 Dialeads.io. All rights reserved. Built for closers. Powered by AI.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#676577]/30">
            <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse" />
            <span className="text-xs font-semibold text-[#eaddff]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
