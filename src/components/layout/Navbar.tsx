"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, ArrowRight, Activity, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="h-20 max-w-[75rem] mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#630ed4] flex items-center justify-center shadow-[0_4px_16px_rgba(99,14,212,0.25)] group-hover:scale-105 transition-transform">
            <Activity className="w-[22px] h-[22px] text-white" />
          </div>
          <span className="text-[20px] font-bold tracking-tight text-[#0b1c30]">
            Dialeads
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 px-2 py-1 bg-[#eff4ff]/70 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                pathname === link.href
                  ? "bg-[#e3e0f1] text-[#1b1a26] font-bold"
                  : "text-[#4a4455] hover:bg-[#e3e0f1] hover:text-[#1b1a26]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center hover:bg-[#e3e0f1] transition-colors cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-[18px] h-[18px] text-[#4a4455]" />
            ) : (
              <Sun className="w-[18px] h-[18px] text-[#f59e0b]" />
            )}
          </button>
          <Link
            href="/login"
            className="text-sm font-semibold text-[#4a4455] hover:text-[#0b1c30] px-3 py-2 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 bg-[#630ed4] hover:bg-[#7c3aed] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(99,14,212,0.3)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.45)] active:scale-95 transition-all"
          >
            Start Free Trial
            <ArrowRight className="w-[18px] h-[18px]" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-[#630ed4] flex items-center justify-center shrink-0">
            <User className="w-[18px] h-[18px] text-white" />
          </div>
        </div>

        <button
          className="lg:hidden text-[#4a4455] hover:text-[#0b1c30] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#ccc3d8]/30">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-full text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-[#e3e0f1] text-[#1b1a26] font-bold"
                    : "text-[#4a4455] hover:bg-[#eff4ff]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#ccc3d8]/30 flex flex-col gap-2">
              <button
                onClick={toggle}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#4a4455] cursor-pointer"
              >
                {theme === "light" ? (
                  <><Moon className="w-4 h-4" /> Dark Mode</>
                ) : (
                  <><Sun className="w-4 h-4 text-[#f59e0b]" /> Light Mode</>
                )}
              </button>
              <Link href="/login" className="px-4 py-2.5 text-sm text-[#4a4455]">Login</Link>
              <Link
                href="/pricing"
                className="mx-4 text-center bg-[#630ed4] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
              >
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
