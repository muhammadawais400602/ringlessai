"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Play,
  Zap,
  AlertCircle,
  Store,
  UserCheck,
  PiggyBank,
  Wrench,
  TrendingUp,
  Bot,
  Voicemail,
  MessageSquare,
  MapPin,
  FileSpreadsheet,
  Mic,
  Inbox,
  Headphones,
  Home,
  Building2,
  Shield,
  Landmark,
  Car,
  Dumbbell,
  Gavel,
  BadgeCheck,
  Filter,
  RefreshCw,
  Star,
  ChevronRight,
  PhoneCall,
  Clock,
  Send,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: "15 min", label: "Setup Time From Signup to First Dial" },
  { value: "$29/mo", label: "Starting Price — Less Than One Lost Lead" },
  { value: "3x", label: "More Callbacks With Automatic SMS Follow-Up" },
  { value: "24/7", label: "AI Voice Agent Contacts Leads Around the Clock" },
];

const profiles = [
  {
    icon: UserCheck,
    title: "The Solo Founder Doing Their Own Sales",
    body: "You have a product or service that works. You have leads coming in from ads, referrals, or a website form. But following up with every single one manually while running the rest of the business is impossible. Leads go cold. Revenue stalls.",
    cta: "Automate lead qualification",
  },
  {
    icon: PiggyBank,
    title: "The Small Business Owner Who Can’t Afford a Salesperson Yet",
    body: "Hiring a full-time salesperson costs $50,000–$80,000 per year before commissions and benefits. Dialeads does the first-touch outreach — AI calls, voicemail drops, and SMS follow-up — for $29 per month. You handle the warm callbacks.",
    cta: "Fractional sales outreach",
  },
  {
    icon: Wrench,
    title: "The Service Business Owner Buried in Estimate Follow-Ups",
    body: "You sent out 50 quotes last week. You know you should follow up with all of them. You managed to call 8. The other 42 are sitting in a spreadsheet. Dialeads contacts all 50 automatically — calls, voicemails, and texts — while you focus on the job site.",
    cta: "Instant quote reactivation",
  },
  {
    icon: TrendingUp,
    title: "The Local Business Owner Competing Against Bigger Competitors",
    body: "Your competitors have sales teams making 200 calls a day. You have yourself and maybe one other person. Dialeads levels the playing field — giving you enterprise-grade outbound calling power at a small business price.",
    cta: "Level the playing field",
  },
];

const painPoints = [
  {
    title: "You Are Too Busy to Follow Up Fast Enough",
    body: "Studies show 78% of customers buy from the first business that responds to their inquiry. If a lead fills out your form at 2pm and you call them back at 5pm — after your competitor already called at 2:05pm — you have already lost.",
    fixIcon: Zap,
    fixLabel: "Dialeads Fix",
    fix: "Speed-to-lead AI calling via Zapier or webhook integration. The moment a lead submits a form, Dialeads calls them automatically — within 60 seconds — before you even see the notification.",
  },
  {
    title: "You Leave Voicemails and Never Hear Back",
    body: 'You call, they do not pick up, you leave a generic voicemail — "Hi, this is [name] from [company], please call me back." They never do. Generic voicemails get deleted in under 3 seconds.',
    fixIcon: Mic,
    fixLabel: "Dialeads Fix",
    fix: "AI dynamic voicemail drops personalized with the prospect’s name, what they enquired about, and a specific next step. Callbacks increase 3x compared to generic recorded messages.",
  },
  {
    title: "You Follow Up Once and Give Up",
    body: "Most sales require 5–8 follow-up touchpoints before a prospect converts. Most small business owners follow up once — maybe twice — and then move on. The lead was not lost. The follow-up just stopped too early.",
    fixIcon: RefreshCw,
    fixLabel: "Dialeads Fix",
    fix: "Automated multi-touch follow-up sequences. After the first call, Dialeads automatically sends an SMS, then a follow-up SMS 2 days later, then schedules a callback on day 5 — all without you touching anything.",
  },
  {
    title: "You Have No Idea Which Leads Are Worth Chasing",
    body: "You have 200 leads in a spreadsheet. Some are hot, some are cold, some are wrong numbers. You have no system to tell which is which so you either call everyone randomly or call nobody consistently.",
    fixIcon: Filter,
    fixLabel: "Dialeads Fix",
    fix: "1-click dispositions tag every lead — Interested, Voicemail Left, No Answer, Callback Scheduled, Not Interested. Your queue automatically surfaces the hottest leads first so you always know exactly who to call next.",
  },
];

const features = [
  {
    icon: Bot,
    title: "AI Voice Agent — Your Tireless First-Touch Caller",
    body: "The Dialeads AI voice agent makes outbound calls on your behalf — 24 hours a day, 7 days a week. It introduces your business, asks qualifying questions, handles common objections, and either books a callback or leaves a personalized voicemail. You only get involved when a prospect is warm and ready to talk.",
    tag: "Autonomous first-touch qualification",
    span: 2,
  },
  {
    icon: Voicemail,
    title: "1-Click Voicemail Drop — Under 2 Seconds",
    body: "When a prospect does not pick up, tap one button and a pre-recorded personalized voicemail drops instantly. Dialeads advances to the next lead automatically. No waiting for beeps. No re-recording the same message 50 times a day. No wasted time.",
    tag: "Instant skip and advance",
  },
  {
    icon: MessageSquare,
    title: "Automatic SMS Follow-Up After Every Call",
    body: "The moment a call ends — whether connected or not — Dialeads fires a pre-written SMS to the prospect automatically. Personalized with their name and what they enquired about. No copy-paste. No delay. Replies come straight into your Dialeads inbox.",
    tag: "Zero-click dispatch",
  },
  {
    icon: MapPin,
    title: "Local Caller ID Matching — More Prospects Pick Up",
    body: "Prospects are 4x more likely to answer a call from a local number than an unknown out-of-state number. Dialeads automatically matches your outbound caller ID to the prospect’s local area code on every single call — boosting answer rates to 85%+.",
    tag: "85%+ answer rates",
  },
  {
    icon: FileSpreadsheet,
    title: "Simple CSV Lead Import — No CRM Required",
    body: "No need for an expensive CRM to get started. Export your leads from any source — your website form, a spreadsheet, a lead list provider — and import directly into Dialeads as a CSV. Dialeads validates phone numbers, scrubs DNC, and queues leads ready to dial in under 2 minutes.",
    tag: "Import in < 2 minutes",
  },
  {
    icon: Mic,
    title: "Call Recordings for Every Conversation",
    body: "Every call is recorded automatically. Review any conversation to understand what the prospect said, what they need, and where the conversation went. Use recordings to improve your follow-up approach and close more of your callbacks.",
    tag: "Full audio review archive",
  },
  {
    icon: Inbox,
    title: "Unified Inbox — Every Call, Text, and Note in One Place",
    body: "Every call recording, SMS thread, voicemail drop, and note for every prospect lives in one clean view. No switching between your phone, your email, and a spreadsheet. See the full history of every lead contact at a glance before you call them back.",
    span: 3,
    hasCta: true,
  },
];

const industries = [
  {
    icon: Home,
    title: "Home Services",
    body: "HVAC technicians, roofers, plumbers, electricians, and landscapers following up on estimate requests and seasonal maintenance leads. Dialeads contacts every estimate lead automatically within 60 seconds of form submission.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    body: "Independent agents, wholesalers, and property managers following up on buyer inquiries, expired listing leads, and FSBO lists. Dialeads dials cold lists at scale and drops personalized voicemails on every missed call.",
  },
  {
    icon: Shield,
    title: "Insurance",
    body: "Independent insurance agents following up on internet leads, referrals, and aged lead lists for auto, home, life, and health policies. Speed-to-lead calling via Zapier fires within 60 seconds of a new lead coming in.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    body: "Financial advisors, mortgage brokers, and tax professionals following up on referral lists and web inquiry leads. Dialeads handles outreach compliantly with DNC scrubbing and time-zone enforcement built in.",
  },
  {
    icon: Car,
    title: "Automotive",
    body: "Car dealerships and auto service centers following up on trade-in inquiries, service reminders, and unsold showroom leads. Dialeads contacts every lead automatically and drops a personalized voicemail for every missed call.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    body: "Personal trainers, gym owners, and wellness coaches following up on new member inquiries and class trial leads. Dialeads contacts every inquiry within minutes so prospects book before the motivation wears off.",
  },
  {
    icon: Gavel,
    title: "Legal Services",
    body: "Solo practitioners and small law firms following up on consultation requests and referral leads. Dialeads handles first-touch outreach compliantly and routes warm prospects directly to the attorney.",
  },
  {
    icon: BadgeCheck,
    title: "Recruitment",
    body: "Independent recruiters and small staffing agencies following up on job applicants and passive candidate lists. Dialeads contacts candidates at scale so recruiters spend time on qualified conversations only.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create Your Account",
    body: "Sign up for a free 14-day Pro trial at dialeads.io. No credit card required. Your account is live in under 60 seconds.",
  },
  {
    num: "02",
    title: "Import Your Leads",
    body: "Export your leads from any source as a CSV file — your website form responses, a spreadsheet, a lead list you purchased. Upload to Dialeads. Phone numbers are validated, DNC-scrubbed, and queued automatically in under 2 minutes.",
  },
  {
    num: "03",
    title: "Start Dialing",
    body: "Click Start Campaign. Dialeads dials your lead list automatically — dropping voicemails on missed calls, firing SMS follow-ups after every attempt, and surfacing interested prospects in your inbox ready for you to call back.",
  },
];

const testimonials = [
  {
    quote:
      "“I was manually calling 40 leads a day and following up with maybe 10 of them. Dialeads now contacts every single lead the same day they come in, drops a voicemail if they do not pick up, and texts them automatically. My callback volume tripled in the first week.”",
    initials: "HM",
    role: "Owner",
    company: "HVAC Company",
  },
  {
    quote:
      "“As a one-person insurance agency I could not afford to hire a salesperson. Dialeads contacts my internet leads within 60 seconds of them coming in. I just handle the warm callbacks. My quote volume doubled in 30 days at $49 per month.”",
    initials: "SL",
    role: "Independent Agent",
    company: "Insurance Agency",
  },
  {
    quote:
      "“I run a small real estate wholesaling operation by myself. Dialeads dials my absentee owner list all day while I focus on negotiating deals. It leaves personalized voicemails and texts everyone who does not pick up. I went from 5 motivated seller conversations per week to 22.”",
    initials: "DK",
    role: "Wholesaler",
    company: "Real Estate Wholesaling",
  },
  {
    quote:
      "“I sent out 60 proposals last month and could only follow up with about 15 of them manually. Dialeads contacted all 60 automatically, dropped voicemails, sent texts, and surfaced 11 interested prospects in my inbox. I closed 4 of them.”",
    initials: "RT",
    role: "Agency Owner",
    company: "Digital Marketing Agency",
  },
];

const starterFeatures = [
  "1,000 outbound minutes included",
  "Manual click-to-call with WebRTC softphone",
  "Up to 500 active leads",
  "1-click pre-recorded voicemail drop",
  "Basic SMS and email follow-up templates",
  "Local caller ID matching",
  "Email support — 24h response",
];

const proFeatures = [
  { text: "Unlimited outbound calling & voicemail drops", bold: true },
  { text: "AI voice agent for autonomous first-touch calls", bold: true },
  { text: "Power dialer with local presence — 85%+ answer rate", bold: false },
  { text: "Live objection rebuttals — AI Copilot", bold: false },
  { text: "1-click call dispositions with CRM auto-sync", bold: false },
  { text: "Automated follow-up via SMS, email, and WhatsApp", bold: false },
  { text: "10DLC guided campaign registration", bold: false },
  { text: "Priority support — Slack and phone", bold: false },
];

/* ─── Component ────────────────────────────────────────── */

export default function SmallBusinessPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden pt-12 pb-16 lg:pb-24">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#d2bbff]/30 to-[#d3e4fe]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1]/70 shadow-sm mb-6">
                <Store className="w-[18px] h-[18px] text-[#630ed4]" />
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                  Built for Small Business Owners
                </span>
              </div>

              <h1 className="text-[32px] leading-[36px] lg:text-[56px] lg:leading-[60px] font-bold tracking-tight text-[#0b1c30] mb-4">
                Follow Up With Every Lead Automatically —{" "}
                <span className="text-[#630ed4]">Without Hiring a Sales Team</span>
              </h1>

              <p className="text-lg leading-7 text-[#4a4455] max-w-2xl mb-8">
                Dialeads works for solo founders and small business owners who need to
                contact hundreds of leads per week without spending every hour on the
                phone. Set up in 15 minutes. No tech skills required.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-sm shadow-lg shadow-[#630ed4]/25 hover:bg-[#630ed4] transition-all"
                >
                  Start Free — $29/Month
                  <ArrowRight className="w-[18px] h-[18px] ml-1" />
                </Link>
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white shadow-sm hover:bg-[#eff4ff] text-[#0b1c30] font-semibold text-sm transition-all"
                >
                  <Play className="w-5 h-5 text-[#7C3AED] mr-2" />
                  Watch How It Works
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#4a4455]">
                {["No credit card", "No tech skills needed", "Cancel anytime"].map(
                  (t) => (
                    <span key={t} className="inline-flex items-center gap-1 text-[#7C3AED] font-medium">
                      <CheckCircle2 className="w-4 h-4" /> {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Hero Visual — Live Lead Dispatcher */}
            <div className="lg:col-span-5 w-full">
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-6 flex flex-col gap-4">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#7C3AED] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0b1c30]">
                      Live Lead Dispatcher
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#e3e0f1] text-[#4a4455]">
                    Sub-60s Response
                  </span>
                </div>

                {/* Inbound trigger card */}
                <div className="p-3 rounded-lg bg-[#eff4ff] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#630ed4]/10 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-[18px] h-[18px] text-[#630ed4]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-[#4a4455]">
                      Website Estimate Form Triggered
                    </span>
                    <span className="text-sm font-semibold text-[#0b1c30] truncate">
                      Dave Miller · HVAC Replacement Quote
                    </span>
                    <span className="text-xs text-[#5e5d6b]">
                      Captured 14 seconds ago · Area Code (512)
                    </span>
                  </div>
                </div>

                {/* Active dialing state */}
                <div className="p-4 rounded-lg bg-[#213145] text-[#eaf1ff] flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Send className="w-[18px] h-[18px] text-[#d2bbff]" />
                      <span className="text-xs font-semibold text-white">
                        Outbound Voice Agent: Active Call
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#d2bbff] bg-white/10 px-2 py-0.5 rounded">
                      00:19
                    </span>
                  </div>
                  {/* Waveform mockup */}
                  <div className="flex items-center gap-1.5 h-6 my-2">
                    {[2, 5, 3, 6, 4, 2, 5, 3, 6, 2].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 bg-[#d2bbff] rounded-full ${i % 3 === 0 ? "animate-pulse" : ""}`}
                        style={{ height: `${h * 4}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#cbdbf5] italic">
                    &ldquo;Hi Dave, this is the automated coordinator for Austin
                    Premier HVAC following up on your heat pump estimate...&rdquo;
                  </p>
                </div>

                {/* Voicemail drop chip */}
                <div className="px-3 py-2 rounded-lg bg-[#e5eeff] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Voicemail className="w-[18px] h-[18px] text-[#7C3AED]" />
                    <span className="text-sm text-[#0b1c30] font-medium">
                      Dropped in 1.8s: Personalized HVAC Estimate Follow-up
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#7C3AED]">Sent</span>
                </div>

                {/* SMS notification */}
                <div className="p-3 rounded-lg bg-[#eff4ff] flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#4a4455] flex items-center gap-1">
                      <MessageSquare className="w-[14px] h-[14px]" /> Instant SMS
                      Sequence Sent
                    </span>
                    <span className="text-xs font-semibold text-[#5e5d6b]">
                      Just now
                    </span>
                  </div>
                  <p className="text-sm text-[#0b1c30] bg-white p-2 rounded shadow-sm">
                    &ldquo;Hi Dave, just dropped a voicemail regarding your HVAC
                    quote. If you&apos;d prefer to lock in a site survey directly,
                    pick a slot here:{" "}
                    <span className="text-[#7C3AED] font-semibold">
                      cal.co/austin-hvac
                    </span>
                    &rdquo;
                  </p>
                </div>

                {/* Qualified callback badge */}
                <div className="p-3 rounded-lg bg-[#eaddff] text-[#25005a] flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-[#630ed4]" />
                    <span className="text-sm font-bold">
                      Lead Qualified · Callback Scheduled 4:30 PM
                    </span>
                  </div>
                  <Check className="w-5 h-5 text-[#630ed4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="w-full pb-16">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl p-6 shadow-sm">
            {stats.map((s) => (
              <div
                key={s.value}
                className="flex flex-col p-4 rounded-lg bg-[#eff4ff]/60 hover:bg-[#eff4ff] transition-colors"
              >
                <span className="text-[32px] lg:text-[56px] leading-[36px] lg:leading-[60px] font-bold text-[#630ed4]">
                  {s.value}
                </span>
                <span className="text-sm text-[#4a4455] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ───────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Is This You?
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-2">
              Dialeads Is Built for Small Business Owners Who Are Wearing Every Hat
            </h2>
            <p className="text-lg leading-7 text-[#4a4455]">
              You are running the business, delivering the service, managing finances,
              and trying to follow up with leads at the same time. Something always
              falls through the cracks. Dialeads makes sure it is never a lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#eaddff] flex items-center justify-center mb-4 text-[#630ed4]">
                    <p.icon className="w-[26px] h-[26px]" />
                  </div>
                  <h3 className="text-2xl leading-[30px] font-bold text-[#0b1c30] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4455]">
                    {p.body}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex items-center gap-2 text-[#630ed4] text-xs font-semibold">
                  <span>{p.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              The Real Problem
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-2">
              Why Small Business Owners Lose Leads — And What to Do About It
            </h2>
            <p className="text-lg leading-7 text-[#4a4455]">
              It is rarely about the quality of your product or service. It is almost
              always about speed and consistency of follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((pp) => (
              <div
                key={pp.title}
                className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1 text-red-600 text-xs font-semibold mb-2">
                    <AlertCircle className="w-[18px] h-[18px]" /> Common Failure Point
                  </div>
                  <h3 className="text-2xl leading-[30px] font-bold text-[#0b1c30] mb-2">
                    {pp.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4455] mb-6">
                    {pp.body}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#e5eeff] flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-[#630ed4] flex items-center gap-1">
                    <pp.fixIcon className="w-4 h-4" /> {pp.fixLabel}
                  </span>
                  <p className="text-sm text-[#0b1c30]">{pp.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff]/50">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Simple Powerful Features
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-2">
              Everything You Need — Nothing You Don&apos;t
            </h2>
            <p className="text-lg leading-7 text-[#4a4455]">
              Dialeads is not a bloated enterprise platform with a 6-week onboarding
              process. Every feature is simple enough for a non-technical business
              owner to use from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between ${
                  f.span === 2 ? "lg:col-span-2" : ""
                } ${f.span === 3 ? "lg:col-span-3 md:flex-row md:items-center md:justify-between md:gap-6" : ""}`}
              >
                <div className={f.span === 3 ? "max-w-2xl" : ""}>
                  <div className="w-10 h-10 rounded-lg bg-[#630ed4]/10 flex items-center justify-center text-[#630ed4] mb-4">
                    <f.icon className="w-[22px] h-[22px]" />
                  </div>
                  <h3
                    className={`font-bold text-[#0b1c30] mb-2 ${
                      f.span ? "text-2xl leading-[30px]" : "text-xl leading-[26px]"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4455] mb-4">
                    {f.body}
                  </p>
                  {f.tag && (
                    <div className="inline-flex items-center gap-2 text-[#630ed4] text-xs font-semibold">
                      <Check className="w-4 h-4" /> {f.tag}
                    </div>
                  )}
                </div>
                {f.hasCta && (
                  <div className="shrink-0 mt-6 md:mt-0">
                    <Link
                      href="/features"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-sm shadow hover:bg-[#630ed4] transition-colors"
                    >
                      Explore All Features
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Works for Your Industry
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30]">
              Small Businesses Across Every Industry Use Dialeads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#630ed4] mb-3">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl leading-[26px] font-bold text-[#0b1c30] mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {ind.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO GET STARTED ────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff]/30">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Up and Running in 15 Minutes
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30]">
              Three Steps to Your First Automated Call Campaign
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-[90px] font-bold text-[#e5eeff] opacity-50 select-none leading-none">
                  {s.num}
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#630ed4] mb-2 block">
                    Step {s.num}
                  </span>
                  <h3 className="text-2xl leading-[30px] font-bold text-[#0b1c30] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#4a4455]">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#e5eeff] text-center flex items-center justify-center gap-3 text-[#0b1c30] text-xl font-semibold">
            <BadgeCheck className="w-6 h-6 text-[#630ed4]" />
            <span>
              That is it. No IT department. No 6-week onboarding. No technical
              knowledge required.
            </span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start mb-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              From Small Business Owners
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30]">
              What Small Business Owners Say After 30 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#630ed4] mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-[18px] h-[18px] fill-[#630ed4]"
                      />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-[#0b1c30] mb-6 italic">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#eaddff] flex items-center justify-center text-[#630ed4] font-bold text-sm">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0b1c30]">
                      {t.role}
                    </span>
                    <span className="text-sm text-[#4a4455]">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff]/40">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              Affordable for Any Budget
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30]">
              Start for Less Than the Cost of One Lost Lead
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {/* Starter */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl leading-[30px] font-bold text-[#0b1c30]">
                    Starter
                  </h3>
                  <span className="text-4xl font-bold text-[#0b1c30]">
                    $29
                    <span className="text-base font-normal text-[#4a4455]">
                      /mo
                    </span>
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] mb-6">
                  Perfect for solo business owners testing outbound for the first
                  time.
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {starterFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[#0b1c30]"
                    >
                      <Check className="w-[18px] h-[18px] text-[#7C3AED] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#e5eeff] hover:bg-[#e3e0f1] text-[#0b1c30] font-semibold text-sm transition-colors"
              >
                Choose Starter
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-[#630ed4]" />
              <div>
                <div className="mb-1">
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                    Recommended for Small Business
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl leading-[30px] font-bold text-[#0b1c30]">
                    Pro
                  </h3>
                  <span className="text-4xl font-bold text-[#630ed4]">
                    $49
                    <span className="text-base font-normal text-[#4a4455]">
                      /mo
                    </span>
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] mb-6">
                  For small business owners ready to fully automate their lead
                  follow-up.
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {proFeatures.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-2 text-sm text-[#0b1c30]"
                    >
                      <Check className="w-[18px] h-[18px] text-[#7C3AED] shrink-0 mt-0.5" />
                      <span className={f.bold ? "font-semibold" : ""}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-semibold text-sm shadow transition-colors"
              >
                Start Free 14-Day Pro Trial — No Credit Card
              </Link>
            </div>
          </div>

          {/* Comparison note */}
          <div className="max-w-4xl mx-auto p-6 rounded-xl bg-[#e5eeff] flex items-start gap-3 text-[#0b1c30]">
            <span className="text-xl">💡</span>
            <p className="text-base">
              <strong className="font-semibold">
                Hiring one part-time sales caller costs $1,500–$2,500 per month.
              </strong>{" "}
              Dialeads Pro does the same first-touch outreach for $49 per month — 24
              hours a day, 7 days a week, with zero sick days.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[75rem] mx-auto px-4 lg:px-8">
          <div className="bg-[#7C3AED] text-white rounded-xl p-8 lg:p-16 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-[0.08em] mb-4">
              Start Today
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-white mb-4 max-w-3xl">
              Stop Losing Leads to Slow Follow-Up — Start Contacting Every Lead
              Automatically
            </h2>
            <p className="text-lg leading-7 text-white/90 max-w-2xl mb-8">
              Set up your first campaign in 15 minutes. Import your leads, configure
              your voicemail drop, and let Dialeads handle the outreach while you run
              your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#630ed4] font-semibold text-sm shadow-md hover:bg-[#f8f9ff] transition-all"
              >
                Start Free — $29/Month
                <ArrowRight className="w-[18px] h-[18px] ml-1" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch a 2-Minute Demo
              </button>
            </div>
            <div className="text-white/80 text-sm">
              No credit card · No tech skills needed · Cancel anytime · Setup in 15
              minutes
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
