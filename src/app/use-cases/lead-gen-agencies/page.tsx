"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Check,
  CalendarDays,
  LayoutDashboard,
  Paintbrush,
  Mic,
  ShieldCheck,
  Upload,
  FileBarChart,
  ArrowLeftRight,
  RefreshCw,
  Phone,
  ChevronDown,
} from "lucide-react";

/* --- Data ------------------------------------------------ */

const stats = [
  { value: "10x", label: "More Leads Contacted Per Campaign vs Manual Dialing", highlight: true },
  { value: "5 min", label: "To Launch a New Client Campaign From Import to First Dial", highlight: false },
  { value: "Zero", label: "Carrier Spam Flags With STIR/SHAKEN A-Attestation", highlight: true },
  { value: "100%", label: "Client Data Isolated Per Campaign", highlight: false },
];

const painPoints = [
  {
    title: "Juggling 5 Clients Across 5 Different Tools Is Chaos",
    body: "Most agencies run client campaigns across a patchwork of tools — one dialer, one SMS platform, one CRM, one reporting sheet. Every client has different logins, different data, and different workflows. One mistake crosses client data and kills trust instantly.",
    fix: "Single dashboard. Every client campaign completely isolated with separate lead lists, caller IDs, CRM connections, compliance settings, and reporting. Switch between clients in one click — zero data crossover risk.",
  },
  {
    title: "Client Reporting Takes Half a Day Every Week",
    body: "After running campaigns all week, someone has to pull call logs, count dispositions, calculate connect rates, and build a report manually. For 5 clients that is a full day of work that generates zero revenue.",
    fix: "Auto-generated campaign reports by client — call volume, connect rate, voicemail drop count, SMS delivery rate, and disposition breakdown — exportable in one click. Send clients their weekly report in under 2 minutes.",
  },
  {
    title: "Carrier Spam Flags Are Killing Your Client Answer Rates",
    body: "Running high-volume outbound on shared numbers without STIR/SHAKEN verification gets numbers flagged as spam within days. Clients see answer rates drop from 30% to under 5% and blame the agency.",
    fix: "STIR/SHAKEN A-level attestation on every outbound caller ID. Local presence CID matching for every campaign. Numbers rotate automatically to protect reputation scores. Answer rates stay consistently above 80%.",
  },
  {
    title: "10DLC Registration for Every New Client Is a Nightmare",
    body: "Every client running SMS campaigns needs their own A2P 10DLC brand and campaign registration. Doing it manually through carrier portals takes days, requires technical knowledge, and blocks campaigns from launching on time.",
    fix: "Guided 10DLC registration wizard inside your account handles brand registration, campaign submission, and carrier approval per client — in under 5 minutes per client. No carrier portal logins. No technical knowledge needed.",
  },
  {
    title: "Scaling Headcount to Handle More Clients Kills Margins",
    body: "The obvious answer to taking on more clients is hiring more staff. But each new hire costs $40,000–$80,000 per year and takes weeks to onboard. Margins shrink. Growth stalls.",
    fix: "AI voice agents handle first-touch outbound calls autonomously — no human rep required. One operator can manage 5–10 client campaigns simultaneously with Dialeads doing the dialing, qualifying, and follow-up automatically.",
  },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Multi-Campaign Dashboard With Full Client Isolation",
    body: "Manage unlimited client campaigns from one Dialeads account. Each campaign has its own lead list, caller IDs, CRM connection, compliance settings, SMS templates, and reporting — completely isolated. No data crossover. No confusion.",
  },
  {
    icon: Paintbrush,
    title: "White-Label Branding and Custom Domain",
    body: "On the Enterprise plan, Dialeads runs under your agency brand — your logo, your domain, your color scheme. Clients see your agency platform, not Dialeads. Deliver a premium white-label product without building a platform from scratch.",
  },
  {
    icon: Mic,
    title: "AI Voice Agent for Autonomous Client Campaigns",
    body: "Deploy Dialeads AI voice agents to handle first-touch outbound calls for client campaigns — 24 hours a day, 7 days a week, without a human rep on the phone. The AI qualifies prospects, handles objections, and passes warm leads to your team or the client automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Guided A2P 10DLC Registration Per Client",
    body: "Every client SMS campaign gets its own 10DLC brand and campaign registration handled inside Dialeads — guided step-by-step. No carrier portals. No legal complexity. Campaigns launch compliant from day one.",
  },
  {
    icon: Upload,
    title: "Bulk CSV Import Up to 250,000 Leads Per File",
    body: "Import any client lead list — PropStream exports, ZoomInfo pulls, Apollo lists, custom databases — up to 250,000 contacts per file. Dialeads auto-validates phone numbers, scrubs DNC, and maps custom columns automatically.",
  },
  {
    icon: FileBarChart,
    title: "Client-Level Reporting Exportable in One Click",
    body: "Pull a complete campaign performance report per client — call volume, connect rate, voicemail drops, SMS deliverability, disposition breakdown, and rep performance — in one click. Export as CSV or PDF. Send directly to the client.",
  },
  {
    icon: ArrowLeftRight,
    title: "CRM Sync Per Client — HubSpot, GHL, Salesforce, Close",
    body: "Connect each client campaign to their own CRM. One client on HubSpot, another on GoHighLevel, another on Salesforce — Dialeads syncs each one independently. Every call outcome writes to the right client CRM automatically.",
  },
  {
    icon: RefreshCw,
    title: "STIR/SHAKEN Attestation and Number Rotation",
    body: "All outbound caller IDs pass STIR/SHAKEN A-level verification. Numbers rotate automatically based on volume thresholds to protect carrier reputation scores. No spam flags. No answer rate drops. No angry client calls.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Onboard the Client Campaign",
    body: "Create a new campaign inside your Dialeads dashboard. Name it by client. Set the caller ID pool, time-zone calling windows, DNC suppression rules, and CRM connection. Done in under 10 minutes per client.",
  },
  {
    step: "02",
    title: "Import the Lead List",
    body: "Upload the client lead list as a CSV — up to 250,000 contacts. Dialeads auto-validates phone numbers, scrubs against the National DNC Registry, matches local area code caller IDs, and queues leads by time zone and priority score.",
  },
  {
    step: "03",
    title: "Configure the Campaign",
    body: "Set the AI voice agent script or assign reps to the campaign. Configure voicemail drop recordings, SMS follow-up templates, email sequences, and disposition-triggered automations. Preview everything before the first dial goes out.",
  },
  {
    step: "04",
    title: "Launch and Monitor",
    body: "Start the campaign. Monitor call volume, connect rates, and disposition breakdown in real time from your agency dashboard. Listen to live calls. Pull recordings. Spot issues before they become client complaints.",
  },
  {
    step: "05",
    title: "Report to the Client",
    body: "At the end of the week pull the client campaign report in one click. Call volume, connect rate, voicemail drops delivered, SMS reply rate, meetings booked — all in one clean export. Send it in under 2 minutes.",
  },
];

const verticals = [
  {
    tag: "01 / APPOINTMENT SETTING",
    title: "B2B Lead Generation Agencies",
    body: "Running appointment setting campaigns for SaaS, financial services, and professional services clients. Dialeads handles cold calling, voicemail drops, and follow-up sequences across multiple client campaigns simultaneously.",
  },
  {
    tag: "02 / REAL ESTATE OUTBOUND",
    title: "Real Estate Investor Marketing Agencies",
    body: "Running cold outreach campaigns on absentee owner lists, probate lists, and driving-for-dollars data for real estate investor clients. Dialeads imports PropStream and BatchLeads exports directly and dials at scale.",
  },
  {
    tag: "03 / HIGH-SPEED INBOUND & OUTBOUND",
    title: "Insurance Marketing Organizations",
    body: "Running Medicare, final expense, and ACA lead campaigns for independent agent networks. Dialeads handles speed-to-lead calling, voicemail drops, and SMS follow-up with full TCPA compliance built in.",
  },
  {
    tag: "04 / LOCAL SERVICE LEADS",
    title: "Solar and Home Services Agencies",
    body: "Running outbound campaigns on homeowner lists for solar installation, roofing, HVAC, and other home services clients. Dialeads contacts leads within minutes of form submission via Zapier integration.",
  },
  {
    tag: "05 / TALENT & RECRUITING OUTREACH",
    title: "Staffing and Recruiting Agencies",
    body: "Running outbound sourcing campaigns to contact passive candidates and employer leads. Dialeads handles bulk outreach with AI voice agents qualifying interest before handing off to a human recruiter.",
    wide: true,
  },
];

const integrations = [
  {
    abbr: "GHL",
    abbrBg: "bg-purple-100",
    abbrColor: "text-[#7c3aed]",
    badge: "Most Used by Agencies",
    badgeBg: "bg-purple-100 text-[#7c3aed]",
    title: "GoHighLevel",
    body: "The agency-favorite CRM. Dialeads connects directly to GHL contacts, pipelines, and workflow automations. Call outcomes trigger GHL workflows automatically — no Zapier required.",
  },
  {
    abbr: "HS",
    abbrBg: "bg-orange-100",
    abbrColor: "text-orange-600",
    badge: "Verified Partner",
    badgeBg: "bg-emerald-100 text-emerald-800",
    title: "HubSpot",
    body: "Two-way native sync. Call outcomes, voicemail drop receipts, and SMS threads write to HubSpot contact and deal records automatically. Sequences pause when a prospect picks up live.",
  },
  {
    abbr: "SF",
    abbrBg: "bg-blue-100",
    abbrColor: "text-blue-600",
    badge: "Enterprise Ready",
    badgeBg: "bg-blue-100 text-blue-800",
    title: "Salesforce",
    body: "Enterprise-grade REST API sync. Full custom object support for enterprise clients with complex Salesforce setups.",
  },
  {
    abbr: "CL",
    abbrBg: "bg-indigo-100",
    abbrColor: "text-indigo-600",
    badge: "High-Velocity Pipelines",
    badgeBg: "bg-slate-100 text-slate-700",
    title: "Close CRM",
    body: "Full Close API integration. Activity logging, smart view updates, and status transitions on every disposition.",
  },
  {
    abbr: "ZP",
    abbrBg: "bg-amber-100",
    abbrColor: "text-amber-600",
    badge: "Universal Connector",
    badgeBg: "bg-amber-100 text-amber-800",
    title: "Zapier",
    body: "Connect any client CRM or tool via Zapier. 5,000+ app connections, no code required, multi-step zap support.",
    wide: true,
  },
];

const testimonials = [
  {
    quote:
      "I manage outbound campaigns for 9 clients simultaneously. Dialeads keeps every client data, reporting, and CRM completely separate while letting me run everything from one screen. I was able to take on 4 new clients without hiring anyone.",
    role: "Founder",
    company: "B2B Lead Generation Agency",
  },
  {
    quote:
      "The white-label option was the deciding factor for us. Our clients see our agency brand on the platform — not a third-party tool. It elevated how they perceive our service and let us charge a premium for the software access.",
    role: "Owner",
    company: "Sales Outsourcing Agency",
  },
  {
    quote:
      "The 10DLC registration wizard saved us. We were manually registering every new client through carrier portals — it took days. Dialeads does it in 5 minutes per client. We launched 3 new client SMS campaigns in one afternoon.",
    role: "Operations Manager",
    company: "Outbound Marketing Agency",
  },
];

const proFeatures = [
  "1–3 Client Campaigns Isolated",
  "Unlimited Outbound Calling & AI Voice Agent",
  "Full CRM Sync (HubSpot, GHL, Close)",
  "Automated Follow-Up & Guided 10DLC Setup",
];

const enterpriseFeatures = [
  "White-label branding & custom domain",
  "Dedicated SIP Trunks & per-client reporting",
  "Salesforce enterprise sync & custom webhooks",
  "Dedicated Account Manager & 99.99% SLA",
];

const clientCards = [
  {
    label: "Client 01",
    labelColor: "text-[#7c3aed]",
    status: "Dialing Live",
    statusBg: "bg-emerald-100/80 text-emerald-600",
    name: "CloudScale SaaS",
    sync: "Sync: HubSpot Enterprise · 10DLC Approved",
    metricLabel: "Dials Today:",
    metricValue: "1,842",
    metricRight: "28.4% Connect",
    metricRightColor: "text-[#7c3aed]",
    highlight: true,
  },
  {
    label: "Client 02",
    labelColor: "text-slate-500",
    status: "AI Voice Agent",
    statusBg: "bg-blue-100/80 text-blue-600",
    name: "Titan REI Partners",
    sync: "Sync: GoHighLevel · PropStream CSV",
    metricLabel: "Leads Queued:",
    metricValue: "12,450",
    metricRight: "1-Click VM Drops",
    metricRightColor: "text-[#7c3aed]",
    highlight: false,
  },
  {
    label: "Client 03",
    labelColor: "text-slate-500",
    status: "Weekly Report Ready",
    statusBg: "bg-amber-100/80 text-amber-600",
    name: "Aura Solar Group",
    sync: "Sync: Salesforce · STIR/SHAKEN A",
    metricLabel: "Meetings Booked:",
    metricValue: "46",
    metricRight: "PDF Export",
    metricRightColor: "text-slate-900",
    highlight: false,
  },
];

/* --- Component ------------------------------------------- */

export default function LeadGenAgenciesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/60 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Link href="/use-cases" className="hover:text-slate-700">
              Use Cases
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-[#7c3aed] font-semibold">Lead Generation Agencies</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-600 font-medium">Multi-Client Engine Active</span>
          </div>
        </div>
      </div>

      {/* SECTION 1 -- Hero */}
      <section className="relative pt-14 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-100/60 via-purple-50/20 to-transparent pointer-events-none -z-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
              Built for Lead Generation Agencies
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6">
              Run High-Volume Outbound Campaigns for Every Client —{" "}
              <span className="text-[#7c3aed]">From One Dashboard</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Dialeads gives agencies a single platform to manage multiple client campaigns, dial
              lists, CRM integrations, and compliance requirements simultaneously — with white-label
              options so every deliverable carries your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-xl shadow-lg shadow-purple-600/25 transition-all text-base inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 shadow-sm transition-all text-base inline-flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-4 h-4 text-[#7c3aed]" />
                Book an Agency Demo
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              No credit card &middot; All client campaigns isolated &middot; White-label on
              Enterprise
            </p>
          </div>

          {/* Agency Cockpit Preview */}
          <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-purple-900/5 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  AGENCY MASTER CONSOLE // MULTI-TENANT ROUTER
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-50 text-[#7c3aed] border border-purple-200">
                  Agency Workspace: Apex Growth Media
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ● 6 Active Client Campaigns
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {clientCards.map((c) => (
                <div
                  key={c.name}
                  className={`p-4 rounded-xl border ${
                    c.highlight
                      ? "border-purple-200 bg-purple-50/40"
                      : "border-slate-200 bg-white hover:border-purple-200"
                  } transition-all relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${c.labelColor}`}
                    >
                      {c.label}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${c.statusBg}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div className="text-base font-bold text-slate-900">{c.name}</div>
                  <div className="text-xs text-slate-500 mb-3">{c.sync}</div>
                  <div
                    className={`flex items-center justify-between text-xs pt-2 border-t ${
                      c.highlight ? "border-purple-100" : "border-slate-100"
                    }`}
                  >
                    <span className="text-slate-600">
                      {c.metricLabel}{" "}
                      <strong className="text-slate-900">{c.metricValue}</strong>
                    </span>
                    <span className={`font-semibold ${c.metricRightColor}`}>
                      {c.metricRight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 -- Stats Bar */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value} className="p-4">
                <div
                  className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 ${
                    s.highlight ? "text-[#7c3aed]" : "text-slate-900"
                  }`}
                >
                  {s.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 -- Pain Points */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              The Agency Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Why Most Lead Gen Agencies Hit a Ceiling — And Can&apos;t Scale Past It
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Managing outbound campaigns for multiple clients with separate tools, separate
              logins, and manual reporting is the bottleneck that kills agency growth. Dialeads
              removes it entirely.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-purple-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-1 font-bold">
                    {i + 1}
                  </div>
                  <div className="space-y-3 w-full">
                    <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {p.body}
                    </p>
                    <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-sm text-slate-800">
                      <span className="font-bold text-[#7c3aed]">Dialeads fix:</span> {p.fix}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 -- Features */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              Built for Multi-Client Operations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Every Feature an Agency Needs to Run More Clients With Less Overhead
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dialeads is the only outbound calling platform built for agencies managing multiple
              clients simultaneously — not retrofitted from a single-team tool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="p-6 rounded-2xl bg-[#eff4ff]/60 border border-slate-200 hover:border-purple-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7c3aed] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 -- Agency Workflow */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              How Agencies Run Client Campaigns on Dialeads
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From client onboarding to first dial to weekly report — here is the complete agency
              workflow inside Dialeads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            {workflowSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider block mb-2">
                    Step {s.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 -- Agency Verticals */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              Agency Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Dialeads Works for Every Type of Lead Generation Agency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v) => (
              <div
                key={v.title}
                className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all ${
                  v.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="text-sm font-bold text-[#7c3aed] mb-1">{v.tag}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 -- Integrations */}
      <section className="py-20 bg-[#eff4ff]/60 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              Your Client Stack Covered
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Connects to Every CRM Your Clients Use
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No matter what CRM your client runs, Dialeads syncs to it — natively or via Zapier
              — with zero manual data entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {integrations.map((ig) => (
              <div
                key={ig.title}
                className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between ${
                  ig.wide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${ig.abbrBg} flex items-center justify-center font-bold ${ig.abbrColor}`}
                    >
                      {ig.abbr}
                    </div>
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${ig.badgeBg}`}
                    >
                      {ig.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ig.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ig.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 -- Testimonials */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              From Agency Owners Using Dialeads
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What Agency Operators Say After 60 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#f8f9ff] border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <blockquote className="text-slate-700 text-base leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-slate-200/70">
                  <div className="font-bold text-slate-900 text-sm">{t.role}</div>
                  <div className="text-xs text-slate-500">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 -- Pricing */}
      <section className="py-20 bg-[#f8f9ff] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#eff4ff] text-[#7c3aed] border border-[#ddd6fe] mb-3">
              Agency Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Plans That Scale With Your Client Roster
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pro Plan */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">
                    Fast Start
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-[#7c3aed] rounded-full border border-purple-200">
                    1&ndash;3 Clients
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-900">$49</span>
                  <span className="text-slate-500 text-sm font-medium">/mo</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Best for agencies managing 1&ndash;3 client campaigns. Unlimited calling, AI
                  voice agent, full CRM sync, automated follow-up, 10DLC registration. No limits
                  on lead volume or call minutes.
                </p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/demo"
                className="w-full py-3 bg-white hover:bg-slate-50 text-[#7c3aed] border-2 border-[#7c3aed] font-semibold rounded-xl text-center transition-all block"
              >
                Start 14-Day Free Pro Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#7c3aed] shadow-xl shadow-purple-600/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#7c3aed] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-lg tracking-wider">
                Most Popular For Agencies
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">
                    Full Scale
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-purple-100 text-[#7c3aed] rounded-full">
                    4+ Clients
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-[#7c3aed]">Custom</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Built for agencies managing 4+ clients simultaneously. White-label branding,
                  custom domain, dedicated SIP trunks, per-client reporting, Salesforce enterprise
                  sync, dedicated account manager, 99.99% uptime SLA.
                </p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8 border-t border-slate-100 pt-6">
                  {enterpriseFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/demo"
                className="w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-xl text-center shadow-md shadow-purple-600/30 transition-all block"
              >
                Book an Agency Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 -- Bottom CTA */}
      <section className="py-20 bg-[#7c3aed] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
            Ready to Scale Your Agency?
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Take On More Clients Without Hiring More Staff
          </h2>

          <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dialeads handles the dialing, the voicemails, the follow-ups, and the reporting — so
            your agency delivers more results for more clients without adding headcount.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#7c3aed] hover:bg-purple-50 font-bold rounded-xl shadow-lg transition-all text-base inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-purple-800/60 hover:bg-purple-800 text-white font-semibold rounded-xl border border-white/30 transition-all text-base inline-flex items-center justify-center gap-2"
            >
              Book an Agency Demo
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-purple-200 font-medium">
            No credit card &middot; White-label on Enterprise &middot; Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
