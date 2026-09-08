import Link from "next/link";

const productLinks = [
  { label: "AI Cold Calling", href: "/features" },
  { label: "Power Dialer", href: "/features" },
  { label: "Live Rebuttals", href: "/features" },
  { label: "Omnichannel Follow-up", href: "/features" },
  { label: "Telephony & SIP", href: "/features" },
  { label: "Changelog", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "#", badge: "Hiring" },
  { label: "Press Kit", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Blog", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "10DLC & TCPA Compliance", href: "#" },
  { label: "Security (SOC2 Type II)", href: "#" },
  { label: "Status", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0A1C] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 2L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 10L8 14L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white font-bold text-lg">Vocalis<span className="text-purple-300">AI</span></span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs mb-6">
              The autonomous cold-calling engine that books qualified meetings while you sleep.
            </p>
            <div className="flex items-center gap-3">
              {["share", "sun", "code", "monitor"].map((icon) => (
                <div key={icon} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {link.badge && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2025 Vocalis AI, Inc. Built for closers.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
