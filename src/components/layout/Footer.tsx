import Link from "next/link";
import { Activity } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Compliance", href: "/compliance" },
];

const useCaseLinks = [
  { label: "Small Business", href: "/use-cases/small-business" },
  { label: "Sales Teams", href: "/use-cases/sales-teams" },
  { label: "Lead Gen Agencies", href: "/use-cases/lead-gen-agencies" },
  { label: "Real Estate", href: "/use-cases/real-estate" },
  { label: "Insurance Agents", href: "/use-cases/insurance" },
];

const compareLinks = [
  { label: "vs Drop Cowboy", href: "/compare/dialeads-vs-drop-cowboy" },
  { label: "vs Mojo Dialer", href: "/compare/dialeads-vs-mojo-dialer" },
  { label: "vs CallTools", href: "/compare/dialeads-vs-calltools" },
  { label: "vs Slybroadcast", href: "/compare/dialeads-vs-slybroadcast" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Demo", href: "/demo" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#213145] text-[#eaf1ff] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#7c3aed] shadow-[0_0_12px_rgba(124,58,237,0.8)]" />

      <div className="max-w-[75rem] mx-auto px-4 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#630ed4] flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-white">
                Dialeads
              </span>
            </Link>
            <p className="text-base text-[#cbdbf5] mb-6 max-w-sm leading-relaxed">
              AI-powered outbound calling for revenue teams that refuse to lose.
            </p>
          </div>

          <div className="flex flex-col">
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

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Use Cases</span>
            <ul className="flex flex-col gap-2">
              {useCaseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Compare</span>
            <ul className="flex flex-col gap-2">
              {compareLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4">Company</span>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#cbdbf5] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d2bbff] mb-4 mt-6">Legal</span>
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
