"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "#about-us" },
];

function Logo({ dark, gid }: { dark: boolean; gid: string }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Xovra AI home">
      <span className="relative flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
          <path d="M4 6 L16 26 L28 6 L22 6 L16 16 L10 6 Z" fill={`url(#${gid})`} />
          <defs>
            <linearGradient id={gid} x1="4" y1="6" x2="28" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ec6afb" />
              <stop offset="1" stopColor="#8b2ff8" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className={`text-xl font-semibold tracking-wide transition-colors duration-300 ${dark ? "text-ink" : "text-white"}`}>
        XOVRA AI
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // The bar adapts to whichever section sits under it: sections tagged
    // data-nav-theme="dark" get a dark bar, everything else a white one.
    const probe = 40;
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      let dark = false;
      document.querySelectorAll("[data-nav-theme='dark']").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) dark = true;
      });
      setOnDark(dark);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // dark text only on the white bar (scrolled over a light section)
  const dark = scrolled && !onDark;
  const barClass = !scrolled
    ? "bg-transparent"
    : onDark
      ? "bg-night/75 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
      : "bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.07)] backdrop-blur-xl";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${barClass}`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-[padding] duration-300 md:px-14 lg:px-20 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <Logo dark={dark} gid="xg" />

          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[15px] transition-colors duration-300 ${
                  dark ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden items-center rounded-full border px-6 py-3 text-sm font-medium transition-colors duration-300 sm:inline-flex ${
                dark
                  ? "border-transparent bg-surface-2 text-ink hover:bg-line"
                  : "border-white/10 bg-white/[0.06] text-white backdrop-blur-xl hover:bg-white/[0.1]"
              }`}
            >
              Contact us
            </a>
            <a href="#login" className="cta-primary py-2.5 pl-6 pr-2.5 text-sm">
              <span>Login</span>
              <span className="arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
                dark ? "text-ink hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
            >
              <Menu size={26} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-14">
          <Logo dark gid="xg-menu" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5"
          >
            <X size={26} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex h-[calc(100%-84px)] flex-col items-center justify-center gap-5 pb-10">
          {[...links, { label: "Contact Us", href: "#contact" }].map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="text-[clamp(2.3rem,9vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-ink transition-[opacity,transform,color] duration-500 hover:text-brand"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(18px)",
                transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#login"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="cta-primary mt-4 py-3 pl-7 pr-3 text-base transition-[opacity,transform] duration-500"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(18px)",
              transitionDelay: open ? "420ms" : "0ms",
            }}
          >
            <span>Login</span>
            <span className="arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
