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
} from "lucide-react";

const megaMenus = {
  Product: [
    { icon: MapPin, label: "Lead Scraping", sub: "Google Maps + enrichment" },
    { icon: Phone, label: "Browser Softphone", sub: "WebRTC via Telnyx" },
    { icon: Bot, label: "AI Qualifier", sub: "24/7 outbound AI" },
    { icon: Zap, label: "Live Rebuttals", sub: "Claude mid-call" },
    { icon: MessageSquare, label: "Two-Way SMS", sub: "Threaded by number" },
    { icon: ShieldCheck, label: "Compliance", sub: "Windows, caps, disclosure" },
  ],
  Solutions: [
    { icon: Building2, label: "Small Business", sub: "One operator, one sheet" },
    { icon: Users, label: "Sales Teams", sub: "Shared pipeline + shortcuts" },
    { icon: Briefcase, label: "Lead Gen Agencies", sub: "Sell outbound as a service" },
    { icon: Headphones, label: "Insurance", sub: "Qualifier + AI disclosure" },
    { icon: MapPin, label: "Real Estate", sub: "Geographic niches at scale" },
    { icon: LineChart, label: "SDR Teams", sub: "Dial, log, export" },
  ],
  Developers: [
    { icon: Code2, label: "API Reference", sub: "REST + webhooks" },
    { icon: Zap, label: "AI Rebuttal API", sub: "Claude & Gemini" },
    { icon: Phone, label: "Telnyx Integration", sub: "WebRTC bring-your-own" },
    { icon: MessageSquare, label: "Webhooks", sub: "Outcomes & SMS" },
  ],
  Resources: [
    { icon: BookOpen, label: "Documentation", sub: "Start here" },
    { icon: Sparkles, label: "Changelog", sub: "Weekly ships" },
    { icon: Users, label: "Customer Stories", sub: "Agency teardowns" },
    { icon: LineChart, label: "Pitch Angle Guide", sub: "How we score leads" },
  ],
} as const;

type MenuKey = keyof typeof megaMenus;
const menuKeys = Object.keys(megaMenus) as MenuKey[];

export default function Nav() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <div className="relative z-50">
      {/* Announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center py-2 px-4 text-[12px] text-white/70 bg-black/40 backdrop-blur border-b border-white/5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        <span>Xovra helped agencies book 12,400+ demos last quarter.</span>
        <a href="#" className="ml-2 text-white hover:underline inline-flex items-center gap-1">
          Read our story <ArrowRight size={11} />
        </a>
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onMouseLeave={() => setOpen(null)}
        className="relative"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">
          <Link href="#" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold tracking-tight text-[16px]">Xovra</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuKeys.map((k) => (
              <button
                key={k}
                onMouseEnter={() => setOpen(k)}
                className="px-3 py-2 text-[13.5px] text-white/75 hover:text-white rounded-md transition"
              >
                {k}
              </button>
            ))}
            <a
              href="#pricing"
              className="px-3 py-2 text-[13.5px] text-white/75 hover:text-white rounded-md transition"
              onMouseEnter={() => setOpen(null)}
            >
              Pricing
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="#" className="text-[13.5px] text-white/80 hover:text-white px-3 py-2">
              Login
            </a>
            <a
              href="#demo"
              className="text-[13.5px] text-white/85 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/25 transition"
            >
              Book a Demo
            </a>
            <a
              href="#early-access"
              className="group relative text-[13.5px] font-medium px-4 py-2 rounded-full text-black bg-white hover:bg-white/90 transition inline-flex items-center gap-1"
            >
              Get Early Access
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMobile(!mobile)}
            className="lg:hidden text-white"
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
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full"
            >
              <div className="max-w-5xl mx-auto mt-2 p-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {megaMenus[open].map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition"
                    >
                      <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.08] transition">
                        <item.icon size={16} className="text-white/85" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-medium text-white">{item.label}</div>
                        <div className="text-[11.5px] text-white/50">{item.sub}</div>
                      </div>
                    </a>
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
              className="lg:hidden overflow-hidden mx-4 mb-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl"
            >
              <div className="p-4 flex flex-col gap-1">
                {[...menuKeys, "Pricing"].map((k) => (
                  <a
                    key={k}
                    href="#"
                    className="px-3 py-2.5 text-sm text-white/85 rounded-lg hover:bg-white/5"
                  >
                    {k}
                  </a>
                ))}
                <div className="flex gap-2 pt-3 mt-2 border-t border-white/10">
                  <a href="#" className="flex-1 text-center px-3 py-2.5 text-sm rounded-lg bg-white/5">
                    Login
                  </a>
                  <a
                    href="#early-access"
                    className="flex-1 text-center px-3 py-2.5 text-sm rounded-lg bg-white text-black font-medium"
                  >
                    Get Early Access
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

function Logo() {
  return (
    <motion.div
      whileHover={{ rotate: 15, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]"
    >
      <span className="text-black font-black text-[13px]">X</span>
    </motion.div>
  );
}
