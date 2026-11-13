"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-center pt-4 px-4"
      >
        <a
          href="#"
          className="group text-xs sm:text-sm px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] transition flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70">New:</span>
          <span className="text-white">Live AI Rebuttals powered by Claude</span>
          <span className="text-white/40 group-hover:text-white transition">→</span>
        </a>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="sticky top-3 z-40 mx-3 sm:mx-6 mt-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <Link href="#" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold tracking-tight text-[15px]">Xovra</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 text-sm text-white/70 hover:text-white rounded-full transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="px-3 py-1.5 text-sm text-white/80 hover:text-white rounded-full transition"
            >
              Login
            </a>
            <a
              href="#demo"
              className="px-3 py-1.5 text-sm text-white/80 hover:text-white rounded-full transition"
            >
              Book a Demo
            </a>
            <a
              href="#early-access"
              className="relative group px-4 py-1.5 text-sm font-medium rounded-full text-black bg-white hover:bg-white/90 transition"
            >
              Get Early Access
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-4 flex flex-col gap-2"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-white/80 hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-white/10">
              <a href="#" className="flex-1 text-center px-3 py-2 text-sm rounded-lg bg-white/5 text-white/80">
                Login
              </a>
              <a
                href="#early-access"
                className="flex-1 text-center px-3 py-2 text-sm rounded-lg bg-white text-black font-medium"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}

function Logo() {
  return (
    <motion.div
      whileHover={{ rotate: 12 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.6)]"
    >
      <span className="text-black font-black text-[13px]">X</span>
    </motion.div>
  );
}
