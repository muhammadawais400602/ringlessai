"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Bot,
  MapPin,
  Zap,
  MessageSquare,
  ShieldCheck,
  Briefcase,
  Users,
  Building2,
  Headphones,
  BookOpen,
  Code2,
  LineChart,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const megaMenus = {
  Features: [
    { icon: MapPin, label: "Lead Scraping", sub: "Google Maps + enrichment", href: "/v2/features" },
    { icon: Phone, label: "Browser Softphone", sub: "WebRTC via Telnyx", href: "/v2/features" },
    { icon: Bot, label: "AI Qualifier", sub: "24/7 outbound AI", href: "/v2/features" },
    { icon: Zap, label: "Live Rebuttals", sub: "Claude mid-call", href: "/v2/features" },
    { icon: MessageSquare, label: "Two-Way SMS", sub: "Threaded by number", href: "/v2/features" },
    { icon: ShieldCheck, label: "Compliance", sub: "Windows, caps, disclosure", href: "/v2/features" },
  ],
  "Use Cases": [
    { icon: Building2, label: "Small Business", sub: "One operator, one sheet", href: "/v2/use-cases/small-business" },
    { icon: Users, label: "Sales Teams", sub: "Shared pipeline + shortcuts", href: "/v2/use-cases/sales-teams" },
    { icon: Briefcase, label: "Lead Gen Agencies", sub: "Sell outbound as a service", href: "/v2/use-cases/lead-gen-agencies" },
    { icon: Headphones, label: "Insurance", sub: "Qualifier + AI disclosure", href: "/v2/use-cases/insurance" },
    { icon: MapPin, label: "Real Estate", sub: "Geographic niches at scale", href: "/v2/use-cases/real-estate" },
  ],
  Compare: [
    { icon: LineChart, label: "vs Drop Cowboy", sub: "Ringless voicemail vs live dialer", href: "/v2/compare/drop-cowboy" },
    { icon: LineChart, label: "vs Mojo Dialer", sub: "Legacy multi-line vs browser", href: "/v2/compare/mojo-dialer" },
    { icon: LineChart, label: "vs CallTools", sub: "Call center vs AI-first", href: "/v2/compare/calltools" },
    { icon: LineChart, label: "vs Slybroadcast", sub: "RVM vs 2-way outbound", href: "/v2/compare/slybroadcast" },
  ],
  Company: [
    { icon: BookOpen, label: "About", sub: "Mission + how we build", href: "/v2/about" },
    { icon: MessageSquare, label: "Contact", sub: "Sales, support, press", href: "/v2/contact" },
    { icon: Sparkles, label: "Demo", sub: "Live walkthrough", href: "/v2/demo" },
    { icon: Code2, label: "Documentation", sub: "Start here", href: "#" },
  ],
} as const;

type MenuKey = keyof typeof megaMenus;
const menuKeys = Object.keys(megaMenus) as MenuKey[];

export default function Nav() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const [bannerShown, setBannerShown] = useState(true);

  return (
    <>
      {/* Blue announcement bar */}
      <AnimatePresence>
        {bannerShown && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="relative overflow-hidden bg-[#4f5bf0] text-white"
          >
            <div className="flex items-center justify-center py-2.5 px-6 text-[13px]">
              <span>Xovra helped agencies book 12,400+ demos last quarter.</span>
              <a
                href="#"
                className="ml-3 font-semibold underline underline-offset-2 inline-flex items-center gap-1 hover:opacity-90"
              >
                Read our story <ArrowRight size={12} />
              </a>
            </div>
            <button
              aria-label="Dismiss"
              onClick={() => setBannerShown(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            >
              <X size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav — floating pill */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseLeave={() => setOpen(null)}
        className="sticky top-3 sm:top-4 z-40 mx-3 sm:mx-6 lg:mx-10 mt-3 sm:mt-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <Link href="/v2" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold tracking-tight text-[18px] text-[#0b0b0f]">
              Xovra
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuKeys.map((k) => (
              <button
                key={k}
                onMouseEnter={() => setOpen(k)}
                className="group px-3.5 py-2 text-[14px] text-[#0b0b0f]/85 hover:text-[#0b0b0f] rounded-md transition inline-flex items-center gap-1"
              >
                {k}
                <ChevronDown
                  size={13}
                  className="opacity-60 transition group-hover:translate-y-0.5"
                />
              </button>
            ))}
            <Link
              href="/v2/pricing"
              className="px-3.5 py-2 text-[14px] text-[#0b0b0f]/85 hover:text-[#0b0b0f] rounded-md transition"
              onMouseEnter={() => setOpen(null)}
            >
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/v2/contact"
              className="text-[14px] text-[#0b0b0f]/85 hover:text-[#0b0b0f] px-2 py-2"
            >
              Login
            </Link>
            <Link
              href="/v2/demo"
              className="text-[14px] text-[#0b0b0f] px-4 py-2 rounded-full border border-[#0b0b0f]/15 hover:border-[#0b0b0f]/40 bg-white transition"
            >
              Book a demo
            </Link>
            <Link
              href="/v2/pricing"
              className="group text-[14px] font-medium px-4 py-2 rounded-full text-white bg-[#0b0b0f] hover:bg-black transition inline-flex items-center gap-1.5"
            >
              Try for free
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden text-black"
            aria-label="Menu"
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mega menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-full"
            >
              <div className="max-w-5xl mx-auto mt-1 p-4 rounded-2xl border border-[#0b0b0f]/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {megaMenus[open].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#f6f4ef] transition"
                    >
                      <div className="w-9 h-9 rounded-lg border border-[#0b0b0f]/10 bg-[#f6f4ef] flex items-center justify-center group-hover:bg-white transition">
                        <item.icon size={16} className="text-[#0b0b0f]/80" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-medium text-[#0b0b0f]">
                          {item.label}
                        </div>
                        <div className="text-[11.5px] text-[#0b0b0f]/55">{item.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile */}
        <AnimatePresence>
          {mobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden mx-4 mb-3 rounded-2xl border border-[#0b0b0f]/10 bg-white shadow"
            >
              <div className="p-4 flex flex-col gap-1">
                {[...menuKeys, "Pricing"].map((k) => (
                  <a
                    key={k}
                    href="#"
                    className="px-3 py-2.5 text-sm text-[#0b0b0f]/85 rounded-lg hover:bg-[#f6f4ef]"
                  >
                    {k}
                  </a>
                ))}
                <div className="flex gap-2 pt-3 mt-2 border-t border-[#0b0b0f]/10">
                  <a
                    href="#"
                    className="flex-1 text-center px-3 py-2.5 text-sm rounded-lg bg-[#f6f4ef]"
                  >
                    Login
                  </a>
                  <a
                    href="#early-access"
                    className="flex-1 text-center px-3 py-2.5 text-sm rounded-lg bg-[#0b0b0f] text-white font-medium"
                  >
                    Try for free
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

function Logo() {
  return (
    <motion.div
      whileHover={{ rotate: 15, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_6px_18px_rgba(99,102,241,0.35)]"
    >
      <span className="text-white font-black text-[14px]">X</span>
    </motion.div>
  );
}
