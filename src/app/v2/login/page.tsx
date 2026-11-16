"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
  FileSpreadsheet,
} from "lucide-react";
import { ThemeToggle } from "../_components/XovraTheme";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0b0b0f]">
      <TopBar />

      <div className="relative flex-1 grid lg:grid-cols-[1.05fr_1fr]">
        {/* LEFT · form */}
        <div className="relative px-5 sm:px-10 py-14 lg:py-20 flex items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-10%] w-[560px] h-[560px] rounded-full bg-gradient-to-br from-[#e9ecff] via-[#f5edff] to-[#fde4f3] blur-3xl opacity-80" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[440px]"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#4f5bf0] font-semibold"
            >
              Welcome back
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="xv-serif mt-4 text-[44px] sm:text-[52px] leading-[0.98] tracking-[-0.03em]"
            >
              Sign in to
              <br />
              <span className="italic text-[#0b0b0f]/55">your workspace.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-5 text-[14.5px] text-[#0b0b0f]/60"
            >
              New to Xovra?{" "}
              <Link
                href="/v2/pricing"
                className="text-[#0b0b0f] font-medium underline underline-offset-2 hover:opacity-80"
              >
                Start Free Trial
              </Link>
            </motion.p>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 space-y-4"
            >
              <Field
                label="Work email"
                id="email"
                active={focus === "email"}
              >
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b0b0f]/40"
                  />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocus("email")}
                    onBlur={() => setFocus(null)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] text-[#0b0b0f] placeholder:text-[#0b0b0f]/35 transition"
                  />
                </div>
              </Field>

              <Field
                label="Password"
                id="password"
                active={focus === "password"}
                right={
                  <Link
                    href="#"
                    className="text-[11.5px] text-[#4f5bf0] hover:underline"
                  >
                    Forgot password?
                  </Link>
                }
              >
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b0b0f]/40"
                  />
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocus("password")}
                    onBlur={() => setFocus(null)}
                    className="w-full pl-11 pr-11 py-3.5 rounded-xl bg-[#f6f4ef] border border-black/10 focus:border-[#0b0b0f]/50 outline-none text-[14px] text-[#0b0b0f] placeholder:text-[#0b0b0f]/35 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    aria-label={showPw ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0b0b0f]/45 hover:text-[#0b0b0f] p-1"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {showPw ? (
                        <motion.span
                          key="eye-off"
                          initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.18 }}
                          className="block"
                        >
                          <EyeOff size={15} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="eye"
                          initial={{ rotate: 45, opacity: 0, scale: 0.7 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: -45, opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.18 }}
                          className="block"
                        >
                          <Eye size={15} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </Field>

              <label className="flex items-center gap-2 text-[12.5px] text-[#0b0b0f]/70 select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#4f5bf0]"
                />
                Keep me signed in on this device
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group relative w-full py-3.5 rounded-xl bg-[#0b0b0f] text-white text-[14px] font-medium inline-flex items-center justify-center gap-2 hover:bg-black transition"
              >
                Continue
                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-0.5"
                />
              </motion.button>

              <div className="relative flex items-center gap-3 py-1">
                <span className="flex-1 h-px bg-black/10" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#0b0b0f]/40 font-semibold">
                  Or
                </span>
                <span className="flex-1 h-px bg-black/10" />
              </div>

              <button
                type="button"
                className="group w-full py-3 rounded-xl border border-[#0b0b0f]/15 bg-white text-[14px] font-medium inline-flex items-center justify-center gap-2 hover:border-[#0b0b0f]/40 transition"
              >
                <GoogleGlyph />
                Continue with Google
              </button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-[11.5px] text-[#0b0b0f]/50 leading-relaxed"
            >
              By continuing you agree to Xovra&apos;s{" "}
              <Link href="#" className="underline underline-offset-2 hover:text-[#0b0b0f]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline underline-offset-2 hover:text-[#0b0b0f]">
                Privacy Policy
              </Link>
              .
            </motion.p>
          </motion.div>
        </div>

        {/* RIGHT · side panel */}
        <SidePanel />
      </div>
    </main>
  );
}

function Field({
  label,
  id,
  active,
  right,
  children,
}: {
  label: string;
  id: string;
  active: boolean;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div animate={{ y: active ? -2 : 0 }} transition={{ duration: 0.2 }}>
      <div className="flex items-center justify-between mb-2">
        <label
          htmlFor={id}
          className="text-[11.5px] uppercase tracking-[0.15em] text-[#0b0b0f]/55 font-semibold"
        >
          {label}
        </label>
        {right}
      </div>
      {children}
    </motion.div>
  );
}

function TopBar() {
  return (
    <div className="px-5 sm:px-8 py-5 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-black/5">
      <Link href="/v2" className="flex items-center gap-2">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-[0_6px_18px_rgba(99,102,241,0.35)]"
        >
          <span className="text-white font-black text-[14px]">X</span>
        </motion.div>
        <span className="font-semibold tracking-tight text-[17px] text-[#0b0b0f]">
          Xovra
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link
          href="/v2/pricing"
          className="text-[13.5px] font-medium px-4 py-2 rounded-full text-white bg-[#0b0b0f] hover:bg-black transition inline-flex items-center gap-1.5"
        >
          Start Free Trial
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

function SidePanel() {
  const points = [
    {
      icon: Sparkles,
      t: "Live AI rebuttals",
      b: "Claude or Gemini drafts objection handling mid-call.",
    },
    {
      icon: ShieldCheck,
      t: "Guardrails on by default",
      b: "Suppression lists, calling windows, attempt caps, AI disclosure.",
    },
    {
      icon: FileSpreadsheet,
      t: "Outcomes to your Sheet",
      b: "Real-time sync + HubSpot-format CSV export.",
    },
  ];
  return (
    <div className="relative hidden lg:block overflow-hidden bg-[#0b1324] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-500 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400 via-indigo-500 to-rose-500 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative h-full flex flex-col justify-between p-10 xl:p-14">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300 font-semibold">
            AI-powered cold calling
          </div>
          <h2 className="xv-serif mt-4 text-[48px] xl:text-[60px] leading-[0.98] tracking-[-0.03em]">
            Find leads.
            <br />
            Call them.
            <br />
            <span className="italic text-white/60">Close deals.</span>
          </h2>

          <ul className="mt-10 space-y-5">
            {points.map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 backdrop-blur">
                  <p.icon size={16} className="text-cyan-300" />
                </div>
                <div>
                  <div className="text-[14.5px] font-semibold">{p.t}</div>
                  <div className="mt-0.5 text-[13px] text-white/60 leading-relaxed">
                    {p.b}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Live dialer mini-mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative rounded-2xl bg-white/[0.05] backdrop-blur border border-white/10 p-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              On call · 02:14
            </div>
            <span className="text-[9.5px] font-bold text-black px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500">
              WEAK_SITE
            </span>
          </div>
          <div className="mt-3 flex items-end gap-0.5 h-10">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.span
                key={i}
                animate={{ height: [3, 18, 6, 26, 4] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.03,
                  ease: "easeInOut",
                }}
                className="flex-1 rounded-full bg-gradient-to-t from-cyan-400 to-fuchsia-400"
              />
            ))}
          </div>
          <div className="mt-3 text-[11.5px] text-white/75 leading-relaxed">
            &ldquo;68% of plumbing searches happen on phones — worth 5 minutes?&rdquo;
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.5 29.7 4.5 24 4.5 12.9 4.5 4 13.5 4 24.5s8.9 20 20 20 20-8.9 20-20c0-1.4-.1-2.7-.4-4z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.5 29.7 4.5 24 4.5c-7.5 0-14 4.2-17.7 10.2z"
      />
      <path
        fill="#4CAF50"
        d="M24 44.5c5.5 0 10.5-2.1 14.3-5.5l-6.6-5.6c-2.1 1.4-4.8 2.3-7.7 2.3-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.9 40.2 16.4 44.5 24 44.5z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.8l6.6 5.6c-.5.5 7.3-5.3 7.3-14.9 0-1.4-.1-2.7-.4-4z"
      />
    </svg>
  );
}
