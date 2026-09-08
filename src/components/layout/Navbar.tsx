"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0A1C]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 2L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 10L8 14L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg">Vocalis<span className="text-primary-light">AI</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
              Login
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0D0A1C] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link href="/login" className="px-4 py-2.5 text-sm text-gray-300">Login</Link>
              <Link
                href="/pricing"
                className="mx-4 text-center bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
              >
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
