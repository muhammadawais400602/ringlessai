"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  ShieldCheck,
  ArrowRight,
  Gavel,
  Info,
  CheckCircle,
  ChevronDown,
  ShieldHalf,
  Timer,
  MessageSquare,
  FilterX,
  Clock,
  BadgeCheck,
  AppWindow,
  Ban,
  Mic,
  History,
  Users,
  Megaphone,
  Store,
  Building2,
  ShieldPlus,
  Landmark,
  Voicemail,
  Radio,
  ListChecks,
  Lock,
  Shield,
  FileText,
  HeadphonesIcon,
} from "lucide-react";

const stats = [
  { value: "$1,500", label: "Max TCPA Penalty Per Violation", color: "text-[#ba1a1a]" },
  { value: "100%", label: "Auto DNC Scrub on Every Dial", color: "text-[#7C3AED]" },
  { value: "8am–9pm", label: "Local Time-Zone Window Enforced", color: "text-[#7C3AED]" },
  { value: "A-Level", label: "STIR/SHAKEN Attestation on All Calls", color: "text-[#7C3AED]" },
];

const tcpaCards = [
  {
    icon: Gavel,
    title: "Severe Statutory Penalties",
    desc: "Penalties range from $500 for negligent calls up to $1,500 for willful violations per call or text message sent without adherence to statutory rules.",
    iconBg: "bg-[#ba1a1a]/10",
    iconColor: "text-[#ba1a1a]",
  },
  {
    icon: ShieldHalf,
    title: "Safe Harbor Defense",
    desc: 'The law provides a "Safe Harbor" defense for businesses that establish written procedures, train personnel, and maintain automated DNC scrubbing mechanisms.',
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
  },
  {
    icon: Timer,
    title: "Time-Zone Curfews",
    desc: "Calls made before 8:00 AM or after 9:00 PM recipient local time trigger immediate statutory violations, making automated time-zone gating mandatory.",
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
  },
  {
    icon: MessageSquare,
    title: "FCC A2P 10DLC Mandates",
    desc: "Unregistered business SMS campaigns face instant carrier blocking, high spam tags, and suspension by US wireless mobile networks.",
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
  },
];

const complianceFeatures = [
  {
    icon: FilterX,
    tag: "Auto-Scrub on Every Dial",
    label: "Feature 01 · DNC List Scrubbing",
    title: "Automatic National DNC Suppression on Every Dial",
    desc: "Every phone number in your campaign is automatically checked against the National Do-Not-Call Registry before dialing. Numbers flagged as DNC are suppressed instantly. You can also upload custom DNC lists for additional suppression layers.",
    footer: "Instant pre-dial suppression API",
  },
  {
    icon: Clock,
    tag: "8am–9pm Local Enforcement",
    label: "Feature 02 · Time-Zone Calling Windows",
    title: "8am–9pm Local Time Enforcement — Automatic",
    desc: "TCPA restricts outbound calls to between 8:00 AM and 9:00 PM in the recipient’s local time zone. Dialeads detects each number’s geographic time zone and holds calls outside the legal window until the next permitted slot — automatically, with no manual scheduling needed.",
    footer: "Automated timezone lock & auto-shift",
  },
  {
    icon: BadgeCheck,
    tag: "A-Level Attestation",
    label: "Feature 03 · STIR/SHAKEN Caller ID",
    title: "A-Level Caller ID Verification on Every Outbound Call",
    desc: "All Dialeads outbound caller IDs pass STIR/SHAKEN A-level attestation — the FCC’s framework to combat caller ID spoofing. This reduces spam flags, improves answer rates, and keeps your numbers off carrier blacklists.",
    footer: "Highest tier Telnyx cryptographic token",
  },
  {
    icon: AppWindow,
    tag: "Guided Registration Wizard",
    label: "Feature 04 · A2P 10DLC SMS",
    title: "Guided 10DLC Brand & Campaign Registration",
    desc: "Sending business SMS without 10DLC registration violates FCC rules and results in carrier filtering. Dialeads walks you through brand and campaign registration inside your account — guided, step-by-step, in under 5 minutes.",
    footer: "TCR direct approval fast-track",
  },
  {
    icon: Ban,
    tag: "Real-Time Opt-Out Suppression",
    label: "Feature 05 · Instant SMS Opt-Out",
    title: "STOP Replies Suppressed in Real Time Across All Campaigns",
    desc: "When a contact replies STOP, UNSUBSCRIBE, or any FCC-recognized opt-out keyword, Dialeads immediately suppresses that number across all active campaigns on your account. No delay. No manual action needed. Ever.",
    footer: "Sub-second cross-campaign blackout",
  },
  {
    icon: Mic,
    tag: "Two-Party Consent Support",
    label: "Feature 06 · Call Recording Disclosure",
    title: "Pre-Call Consent Notices for Two-Party Consent States",
    desc: "Dialeads supports configurable pre-call disclosure messages — automatically playing a recorded consent notice before connecting live calls in two-party consent states like California, Florida, and Illinois.",
    footer: "Automated state-level notice playback",
  },
];

const whoNeedsTcpa = [
  { icon: Users, title: "Sales Teams", desc: "Cold calling prospect lists and account-based SDR outbound." },
  { icon: Megaphone, title: "Marketing & Growth Agencies", desc: "Running dedicated outbound campaigns for multiple clients." },
  { icon: Store, title: "Small Businesses", desc: "Following up on web form submissions and inbound inquiries." },
  { icon: Building2, title: "Real Estate Teams & Wholesalers", desc: "Agents, property managers, and acquisition investors prospecting owners." },
  { icon: ShieldPlus, title: "Insurance Brokers", desc: "Contacting quote requests, renewal lists, and policy reviews." },
  { icon: Landmark, title: "Financial Advisors", desc: "Prospecting warm referral networks and institutional lists." },
];

const rvmCards = [
  { title: "Obtain Written Consent for B2C", desc: "Obtain prior express written consent before sending ringless voicemails to consumer numbers (B2C) to stay entirely outside class-action exposure." },
  { title: "B2B Commercial Outreach", desc: "B2B ringless voicemail to verified corporate business numbers carries significantly lower regulatory risk when legitimate business interest exists." },
  { title: "Honor Opt-Outs Immediately", desc: "Maintain clear, accessible opt-out mechanisms and honor all suppression requests immediately and automatically across your entire dialer instance." },
  { title: "High-Risk Vertical Restrictions", desc: "Do not use ringless voicemail for healthcare (HIPAA), financial lending, credit repair, or debt-collection contacts without specific dedicated legal counsel." },
];

const faqItems = [
  {
    q: "Q1: Is Dialeads TCPA compliant?",
    a: "Dialeads provides the compliance infrastructure — DNC scrubbing, time-zone enforcement, STIR/SHAKEN, and opt-out handling — but compliance ultimately depends on how you use the platform. You are responsible for obtaining proper consent and following applicable laws in your jurisdiction.",
  },
  {
    q: "Q2: Do I need written consent to cold call B2B prospects?",
    a: "Cold calling businesses (B2B) generally does not require prior written consent under TCPA. However, individual employees listed on the National DNC Registry are protected. Dialeads automatically scrubs against the National DNC list before every dial.",
  },
  {
    q: "Q3: What states have stricter rules than federal TCPA?",
    a: "California (CCPA/CPRA), Florida (FTSA), and several other states have additional restrictions. Florida’s Mini-TCPA, for example, requires consent for any auto-dialed call to a cell phone. Always consult a licensed attorney for state-specific guidance.",
  },
  {
    q: "Q4: Does Dialeads support GDPR compliance?",
    a: "Dialeads is SOC2 Type II certified and follows data minimization and retention principles consistent with GDPR. For EU-based calling operations, additional data processing agreements may be required. Contact our team for details.",
  },
  {
    q: "Q5: How do I register for A2P 10DLC inside Dialeads?",
    a: "Inside your Dialeads account, navigate to Settings → SMS Compliance → 10DLC Registration. The guided wizard walks you through brand registration, campaign submission, and carrier approval in under 5 minutes.",
  },
  {
    q: "Q6: What happens if a contact replies STOP to my SMS?",
    a: "Dialeads immediately and permanently suppresses that number across every active campaign on your account. The suppression is instant, automatic, and logged with a timestamp for your compliance records.",
  },
  {
    q: "Q7: Does Dialeads record calls? Is that legal?",
    a: "Dialeads records all calls by default for quality and compliance purposes. Call recording laws vary by state — one-party consent states allow recording with only one party’s knowledge, while two-party consent states like California and Illinois require all parties to consent. Dialeads supports configurable pre-call disclosure messages to handle two-party consent states automatically.",
  },
];

const trustSignals = [
  { icon: BadgeCheck, signal: "SOC2 Type II Certified", detail: "Annual third-party security and controls audit" },
  { icon: Radio, signal: "STIR/SHAKEN A-Attestation", detail: "All outbound caller IDs cryptographically verified via Telnyx SIP backbone" },
  { icon: ListChecks, signal: "National DNC Scrub", detail: "Every number checked before every dial with instant suppression" },
  { icon: Lock, signal: "GDPR Compatible", detail: "Data minimization, encryption-in-transit, and retention controls" },
  { icon: MessageSquare, signal: "10DLC Registered", detail: "Guided brand and campaign registration through The Campaign Registry (TCR)" },
  { icon: Shield, signal: "TCPA Safe Harbor Tools", detail: "Timestamp logging, automated opt-out suppression, and auditable CSV records" },
];

export default function CompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full pt-20 bg-[#f8f9ff]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs font-medium text-[#5e5d6b]">
          <Link
            href="/"
            className="hover:text-[#630ed4] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <span className="text-[#ccc3d8]">/</span>
          <span className="text-[#5e5d6b]">Legal &amp; Trust</span>
          <span className="text-[#ccc3d8]">/</span>
          <span className="text-[#0b1c30] font-semibold bg-[#dce9ff] px-2 py-0.5 rounded-md">
            TCPA Compliance
          </span>
        </nav>
      </div>

      {/* SECTION 1 — Hero */}
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-6 pb-16 lg:pb-24">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-[#630ed4]/5 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-3.5 py-1 mb-6 shadow-sm border border-[#7C3AED]/20">
                <span className="h-2 w-2 rounded-full bg-[#630ed4] animate-pulse" />
                <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#25005a]">
                  Compliance &amp; Legal
                </span>
              </div>

              <h1 className="font-[Space_Grotesk] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1c30] mb-6 leading-[1.08]">
                Built for TCPA Compliance{" "}
                <span className="text-[#7C3AED]">From the Ground Up</span>
              </h1>

              <p className="font-[DM_Sans] text-lg text-[#5e5d6b] max-w-2xl mb-8 leading-relaxed">
                Every Dialeads outbound call and SMS campaign runs through
                carrier-grade compliance infrastructure automatically — so your
                team dials with confidence and your business stays protected.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
                <a
                  href="#compliance-features"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/25 hover:bg-[#630ed4] transition-all"
                >
                  See Compliance Features
                  <Gavel className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="#bottom-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1c30] border border-[#ccc3d8]/60 shadow-sm hover:bg-[#eff4ff] transition-all"
                >
                  <HeadphonesIcon className="w-[18px] h-[18px] text-[#7C3AED]" />
                  Talk to Our Team
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-[#eff4ff] border border-[#e5eeff] flex items-start gap-2.5 max-w-xl">
                <Info className="w-[18px] h-[18px] text-[#7C3AED] shrink-0 mt-0.5" />
                <p className="text-xs text-[#5e5d6b] leading-relaxed">
                  <strong className="text-[#0b1c30]">Legal Notice:</strong> This
                  page explains how Dialeads helps customers operate compliantly.
                  It is not legal advice. Consult a qualified attorney for
                  guidance specific to your business and jurisdiction.
                </p>
              </div>
            </div>

            {/* Hero Terminal */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#7C3AED]/20 via-[#eaddff]/30 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-2xl bg-[#031427] text-[#eaf1ff] p-6 shadow-2xl border border-[#e5eeff]/20 overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e5eeff]/15">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-[Space_Grotesk] text-xs text-white font-semibold uppercase tracking-wider">
                      COMPLIANCE_GATE // ACTIVE
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-[Space_Grotesk] text-[11px] font-semibold flex items-center gap-1">
                    <BadgeCheck className="w-[13px] h-[13px]" /> Safe Harbor
                  </span>
                </div>

                <div className="space-y-3 font-[Space_Grotesk] text-xs">
                  {[
                    {
                      icon: <ShieldCheck className="w-[18px] h-[18px] text-emerald-400" />,
                      title: "National DNC Registry API",
                      sub: "Real-time check prior to ring",
                      status: "PASS (0.04s)",
                    },
                    {
                      icon: <Clock className="w-[18px] h-[18px] text-[#d2bbff]" />,
                      title: "Recipient Local Window",
                      sub: "Target TZ: CST (11:42 AM)",
                      status: "IN LEGAL WINDOW",
                    },
                    {
                      icon: <Radio className="w-[18px] h-[18px] text-[#d2bbff]" />,
                      title: "STIR/SHAKEN Tier-A",
                      sub: "Telnyx cryptographic signature",
                      status: "ATTESTATION A",
                    },
                    {
                      icon: <MessageSquare className="w-[18px] h-[18px] text-[#d2bbff]" />,
                      title: "STOP / Unsubscribe Webhook",
                      sub: "Cross-campaign auto suppression",
                      status: "STANDBY (0.01s)",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#e5eeff]/10 border border-[#e5eeff]/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <div>
                          <div className="text-white font-medium">{item.title}</div>
                          <div className="text-[11px] text-[#cbdbf5]">{item.sub}</div>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold text-right">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#e5eeff]/15 flex items-center justify-between text-[11px] text-[#cbdbf5]">
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    FCC 47 U.S.C. &sect; 227 Filter Engine
                  </span>
                  <span className="font-[Space_Grotesk] text-[#d2bbff]">
                    Zero Spam Flags
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Stats Bar */}
      <section className="w-full bg-white py-10 border-y border-[#e5eeff]/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#eff4ff]/50">
                <div
                  className={`text-3xl lg:text-4xl font-extrabold font-[Space_Grotesk] ${s.color}`}
                >
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-[#5e5d6b] font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — What Is TCPA */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-4">
                <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                  Know the Law
                </span>
              </div>
              <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-6 leading-tight">
                What Is TCPA and Why It Matters for Your Business
              </h2>
              <div className="h-1.5 w-16 bg-[#7C3AED] rounded-full mb-6" />
              <p className="text-[#5e5d6b] leading-relaxed mb-4">
                The Telephone Consumer Protection Act (TCPA) is a US federal law
                that governs how businesses can contact consumers by phone and
                SMS. Violations carry statutory penalties of{" "}
                <strong className="text-[#0b1c30] font-semibold">
                  $500 to $1,500 per unauthorized call or text
                </strong>{" "}
                — and class-action lawsuits are increasingly common in the
                outbound sales space.
              </p>
              <p className="text-[#5e5d6b] leading-relaxed mb-4">
                Dialeads is purpose-built to help sales teams, agencies, and
                high-velocity outbound businesses run high-volume outbound
                campaigns while respecting the rules that protect both callers
                and recipients.
              </p>
              <div className="p-4 rounded-xl bg-[#eff4ff] border-l-4 border-[#7C3AED]">
                <p className="text-xs sm:text-sm text-[#0b1c30] font-medium leading-relaxed">
                  <strong>Who it impacts:</strong> TCPA applies to any business
                  making outbound calls or sending SMS messages for marketing,
                  sales, or informational purposes to US phone numbers —
                  regardless of business size or whether you are a 2-person
                  agency or an enterprise sales org.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tcpaCards.map((card, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4`}
                    >
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-[Space_Grotesk] text-lg font-bold text-[#0b1c30] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#5e5d6b] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Compliance Features */}
      <section
        className="w-full py-16 lg:py-24 bg-white"
        id="compliance-features"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-3">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                Built In, Not Bolted On
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-4">
              Every Compliance Feature Runs Automatically — Zero Manual Work
            </h2>
            <p className="text-lg text-[#5e5d6b]">
              Dialeads enforces TCPA rules on every dial and every SMS send
              without your team having to think about it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((f, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#eff4ff] border border-[#e5eeff] shadow-sm flex flex-col justify-between hover:border-[#7C3AED]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center">
                      <f.icon className="w-[26px] h-[26px]" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e3e0f1] text-[#630ed4] font-[Space_Grotesk] text-[11px] font-bold">
                      {f.tag}
                    </span>
                  </div>
                  <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#7C3AED] block mb-1">
                    {f.label}
                  </span>
                  <h3 className="font-[Space_Grotesk] text-xl font-bold text-[#0b1c30] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#5e5d6b] leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e5eeff] flex items-center gap-2 text-xs font-semibold text-[#630ed4]">
                  <CheckCircle className="w-4 h-4" /> {f.footer}
                </div>
              </div>
            ))}

            {/* Feature 7 — Full-span */}
            <div className="p-7 rounded-2xl bg-[#eff4ff] border border-[#e5eeff] shadow-sm flex flex-col justify-between hover:border-[#7C3AED]/40 transition-colors md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center">
                      <History className="w-[26px] h-[26px]" />
                    </div>
                    <div>
                      <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#7C3AED]">
                        Feature 07 &middot; Consent Timestamp Logging
                      </span>
                      <h3 className="font-[Space_Grotesk] text-2xl font-bold text-[#0b1c30]">
                        Full Auditable Record of Every Interaction
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#5e5d6b] leading-relaxed">
                    Every opt-in, opt-out, call, and SMS event is timestamped and
                    logged in your account activity history. If you ever face a
                    compliance dispute, you have a complete auditable record of
                    every interaction — exportable in CSV for legal review.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-end gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-[#eaddff] text-[#630ed4] font-[Space_Grotesk] text-xs font-bold flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4" /> Full Audit Trail
                  </span>
                  <span className="text-xs text-[#5e5d6b] font-[Space_Grotesk]">
                    1-Click CSV Dispute Export
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who Needs TCPA */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-3">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                Who Needs TCPA Compliance
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-3">
              TCPA Applies to Every Business Doing Outbound — Regardless of Size
            </h2>
            <p className="text-lg text-[#5e5d6b]">
              If you are calling or texting US phone numbers for any commercial
              purpose, TCPA applies to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whoNeedsTcpa.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#e5eeff] shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-[Space_Grotesk] text-base font-bold text-[#0b1c30] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5e5d6b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Full-span highlight card */}
            <div className="p-6 rounded-2xl bg-[#7C3AED] text-white shadow-sm flex items-start gap-4 md:col-span-2 lg:col-span-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                <Voicemail className="w-[22px] h-[22px]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Any Business Using Ringless Voicemail or SMS Drop Campaigns
                </h4>
                <p className="text-xs sm:text-sm text-[#eaddff] leading-relaxed">
                  Automated audio drops and mass text bursts carry heightened
                  regulatory scrutiny. Dialeads ensures compliance controls are
                  applied uniformly before any campaign transmits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Ringless Voicemail & TCPA */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-white p-8 lg:p-12 border border-[#e5eeff] shadow-sm">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-3">
                <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                  Ringless Voicemail Compliance
                </span>
              </div>
              <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-4">
                Ringless Voicemail and TCPA — What You Need to Know
              </h2>
              <p className="text-lg text-[#5e5d6b] mb-4">
                Ringless voicemail drop legality is an evolving regulatory area.
                Here is what Dialeads recommends based on current FCC guidance
                and federal court rulings.
              </p>
              <p className="text-sm text-[#4a4455] leading-relaxed bg-[#eff4ff] p-4 rounded-xl border border-[#e5eeff]">
                <strong>FCC Status:</strong> The FCC has indicated that
                voicemails delivered directly to a subscriber&apos;s mailbox
                without causing the phone to ring may still be subject to TCPA
                rules in several jurisdictions. Enforcement varies across federal
                circuits, state statutes, and campaign classifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rvmCards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#eff4ff]/60 border border-[#e5eeff]"
                >
                  <div className="flex items-center gap-2 text-[#630ed4] font-bold mb-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>{card.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5e5d6b] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}

              {/* Highlighted full-span card */}
              <div className="p-6 rounded-2xl bg-[#eaddff]/40 border border-[#7C3AED]/30 md:col-span-2">
                <div className="flex items-center gap-2 text-[#25005a] font-bold mb-1">
                  <ShieldCheck className="w-5 h-5 text-[#630ed4]" />
                  <span>Mandatory National DNC Scrubbing</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a4455] leading-relaxed">
                  Always scrub against the National DNC Registry before any
                  voicemail drop campaign. Dialeads performs this check at the
                  API level before audio payloads execute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]" id="faq">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-3">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                Got Questions?
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30]">
              Frequently Asked Compliance Questions
            </h2>
            <p className="text-[#5e5d6b] mt-2">
              Clear answers to common legal and regulatory inquiries about
              outbound voice and SMS.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-[#e5eeff] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0b1c30] hover:text-[#630ed4] transition-colors"
                >
                  <span className="text-lg font-[Space_Grotesk]">{item.q}</span>
                  <ChevronDown
                    className={`w-[22px] h-[22px] text-[#7C3AED] shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-[#5e5d6b] text-sm leading-relaxed border-t border-[#e5eeff]/60">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Trust Signals Table */}
      <section className="w-full py-16 lg:py-24 bg-white border-t border-[#e5eeff]/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e3e0f1] px-3.5 py-1 mb-3">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#630ed4]">
                Certified &amp; Verified
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-3">
              Built on Enterprise-Grade Compliance Infrastructure
            </h2>
            <p className="text-[#5e5d6b]">
              Independently verified standards designed for regulated outbound
              communications.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#eff4ff]/40 rounded-2xl border border-[#e5eeff] p-2">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#e5eeff] text-[#0b1c30] font-[Space_Grotesk] text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 rounded-l-xl">Signal</th>
                  <th className="py-4 px-6 rounded-r-xl">
                    Infrastructure Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eeff]">
                {trustSignals.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/70 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-[#0b1c30] flex items-center gap-2">
                      <row.icon className="w-[18px] h-[18px] text-[#630ed4]" />{" "}
                      {row.signal}
                    </td>
                    <td className="py-4 px-6 text-[#5e5d6b]">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Bottom CTA */}
      <section className="w-full py-20 bg-[#f8f9ff]" id="bottom-cta">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="rounded-3xl bg-[#7C3AED] text-white p-8 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 mb-4 text-xs font-[Space_Grotesk] uppercase tracking-wider">
                Compliance Questions?
              </div>

              <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Talk to Our Team Before You Launch Your Campaign
              </h2>

              <p className="text-base sm:text-lg text-[#eaddff] mb-8 leading-relaxed max-w-2xl">
                Our solutions team can walk you through how Dialeads handles
                compliance for your specific campaign type, industry, and target
                geography — before you dial a single number.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0b1c30] px-7 py-3.5 text-sm font-semibold shadow-lg hover:bg-[#eff4ff] transition-all"
                >
                  Contact Compliance Team
                  <ArrowRight className="w-[18px] h-[18px]" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#630ed4]/40 text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#630ed4]/60 transition-all border border-white/20"
                >
                  <FileText className="w-[18px] h-[18px]" />
                  Read 10DLC Setup Guide
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 text-xs text-[#eaddff]/90 font-medium flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-[15px] h-[15px]" /> No legal jargon
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-[15px] h-[15px]" /> Plain answers
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-[15px] h-[15px]" /> Average response
                  under 8 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
