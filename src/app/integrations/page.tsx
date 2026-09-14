"use client";

import Link from "next/link";
import {
  Home,
  ArrowRight,
  Network,
  Code,
  CheckCircle,
  BadgeCheck,
  Lock,
  CloudCog,
  LayoutGrid,
  Building2,
  KanbanSquare,
  MessageSquareMore,
  GitFork,
  UserSearch,
  Zap,
  Webhook,
  GitBranch,
  Radio,
  Shield,
  HelpCircle,
  PlusCircle,
  Terminal,
  Timer,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    value: "15+",
    label: "Native Integrations",
    desc: "Pre-built, certified connectors across every major sales stack",
    color: "text-[#7C3AED]",
  },
  {
    value: "< 1s",
    label: "Bi-Directional Sync Latency",
    desc: "Real-time WebSocket and REST event streaming across all objects",
    color: "text-[#630ed4]",
  },
  {
    value: "Zero",
    label: "Manual Data Entry",
    desc: "Automated activity logging, recording links, and transcripts",
    color: "text-[#7C3AED]",
  },
  {
    value: "5 min",
    label: "Average Setup Time",
    desc: "One-click OAuth authorization without engineering support",
    color: "text-[#0b1c30]",
  },
];

const crmIntegrations = [
  {
    icon: Network,
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
    name: "HubSpot",
    badge: "Verified Partner",
    badgeBg: "bg-emerald-100 text-emerald-800",
    desc: "Two-way native sync. Every Dialeads call logs as a HubSpot activity with duration, recording URL, AI transcript, and rep notes. Deal stages update on disposition. Sequences pause automatically when a prospect picks up live.",
    tags: ["Verified Partner", "Deal & Contact Timeline", "Native App"],
  },
  {
    icon: CloudCog,
    iconBg: "bg-[#e3e0f1]",
    iconColor: "text-[#7C3AED]",
    name: "Salesforce",
    badge: "Enterprise REST",
    badgeBg: "bg-[#eaddff] text-[#630ed4]",
    desc: "Enterprise-grade bidirectional sync via REST API. Calls, SMS threads, voicemail drops, and dispositions write to Opportunity, Lead, and Contact objects simultaneously. Supports custom field mapping for any Salesforce org setup.",
    tags: ["Enterprise 2-Way Sync", "Custom Object Support", "Sub-Second Latency"],
  },
  {
    icon: LayoutGrid,
    iconBg: "bg-[#d2bbff]",
    iconColor: "text-[#25005a]",
    name: "Close CRM",
    badge: "High-Velocity",
    badgeBg: "bg-[#e5eeff] text-[#0b1c30]",
    desc: "Built for high-velocity outbound teams. Call outcomes sync directly to Close leads with full activity tagging, status transitions, and smart view updates on every disposition.",
    tags: ["Full Close API", "High-Velocity Pipelines", "Activity Sync"],
  },
  {
    icon: Building2,
    iconBg: "bg-[#e4e0f5]",
    iconColor: "text-[#1b1a29]",
    name: "GoHighLevel",
    badge: "Agency Suite",
    badgeBg: "bg-[#e3e0f1] text-[#464552]",
    desc: "Purpose-built for agencies running client campaigns. Connects to GHL contacts, pipelines, and workflows — triggering automations on call outcomes and syncing voicemail drop receipts to opportunity records.",
    tags: ["Agency-Ready", "Pipeline Triggers", "Workflow Compatible"],
  },
  {
    icon: KanbanSquare,
    iconBg: "bg-[#d3e4fe]",
    iconColor: "text-[#630ed4]",
    name: "Pipedrive",
    badge: "Deal Stages",
    badgeBg: "bg-[#eaddff] text-[#25005a]",
    desc: "Sync call results to Pipedrive deals and activities. Automatic person and deal matching on every dial. Disposition-triggered pipeline stage transitions with zero manual input.",
    tags: ["Sub-Second Latency", "Deal Stage Sync", "Person Matching"],
  },
];

const commsIntegrations = [
  {
    icon: MessageSquareMore,
    iconBg: "bg-[#e3e0f1]",
    iconColor: "text-[#630ed4]",
    name: "Slack",
    desc: "Real-time call outcome notifications in your team Slack channels. Rep connects a live call → instant Slack alert to manager. Voicemail drop delivered → Slack confirmation with prospect name and campaign tag.",
    tags: ["Real-Time Alerts", "Channel Routing", "Manager Notifications"],
  },
  {
    icon: GitFork,
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
    name: "Outreach.io",
    desc: "Pause or advance Outreach sequences based on Dialeads call dispositions. Interested → sequence pauses, AE notified. No Answer → sequence continues on schedule. Full bi-directional activity sync.",
    tags: ["Sequence Control", "Disposition Triggers", "Activity Logging"],
  },
  {
    icon: UserSearch,
    iconBg: "bg-[#d2bbff]",
    iconColor: "text-[#25005a]",
    name: "Apollo.io",
    desc: "Import Apollo lead lists directly into Dialeads campaigns with one click. Phone numbers, emails, titles, and company data map automatically. Call outcomes sync back to Apollo contact records.",
    tags: ["Lead Import", "Contact Sync", "One-Click Import"],
  },
];

const automationIntegrations = [
  {
    icon: Zap,
    iconBg: "bg-[#e3e0f1]",
    iconColor: "text-[#630ed4]",
    name: "Zapier",
    desc: "Connect Dialeads to 5,000+ apps via Zapier. Trigger zaps on call outcomes, voicemail drops, SMS replies, or new lead imports. No code required — build multi-step automations in minutes.",
    tags: ["5,000+ App Connections", "No-Code", "Multi-Step Zaps"],
  },
  {
    icon: Webhook,
    iconBg: "bg-[#eaddff]",
    iconColor: "text-[#630ed4]",
    name: "Webhooks",
    desc: "Enterprise-grade event webhooks for every Dialeads action. Call started, call ended, disposition logged, SMS delivered, voicemail dropped — each fires a configurable POST payload to your endpoint in under 200ms.",
    tags: ["Custom Payload", "Sub-200ms Delivery", "Full Event Coverage"],
  },
  {
    icon: GitBranch,
    iconBg: "bg-[#d2bbff]",
    iconColor: "text-[#25005a]",
    name: "Make (Integromat)",
    desc: "Build complex multi-branch automation flows triggered by Dialeads events. Conditional logic, data transformation, and multi-app routing — all without writing a line of code.",
    tags: ["Visual Flow Builder", "Conditional Logic", "Multi-App"],
  },
];

const telephonyCards = [
  {
    icon: Radio,
    iconBg: "bg-[#7C3AED]",
    iconColor: "text-white",
    name: "Telnyx",
    badge: "Tier-A Certified",
    badgeBg: "bg-emerald-100 text-emerald-800",
    desc: "Dialeads runs on Telnyx SIP trunking for all outbound voice and SMS. Sub-25ms audio latency, global points of presence, and STIR/SHAKEN A-level attestation on every caller ID — no additional setup required.",
    tags: ["Core Infrastructure", "Sub-25ms Latency", "STIR/SHAKEN"],
  },
  {
    icon: Shield,
    iconBg: "bg-[#e3e0f1]",
    iconColor: "text-[#630ed4]",
    name: "A2P 10DLC",
    badge: "100% Compliant",
    badgeBg: "bg-[#eaddff] text-[#630ed4]",
    desc: "Send compliant A2P SMS campaigns without managing carrier registrations manually. Dialeads handles brand registration, campaign approval, and throughput management inside your account dashboard.",
    tags: ["Guided Setup", "Brand Registration", "Carrier Approval"],
  },
];

function IntegrationCard({
  icon: Icon,
  iconBg,
  iconColor,
  name,
  desc,
  tags,
  badge,
  badgeBg,
}: {
  icon: typeof Network;
  iconBg: string;
  iconColor: string;
  name: string;
  desc: string;
  tags: string[];
  badge?: string;
  badgeBg?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e5eeff] flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl ${iconBg} ${iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
          >
            <Icon className="w-8 h-8" />
          </div>
          {badge && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeBg}`}
            >
              {badgeBg?.includes("emerald") && (
                <BadgeCheck className="w-[13px] h-[13px]" />
              )}
              {badge}
            </span>
          )}
        </div>
        <h3 className="font-[Space_Grotesk] text-2xl font-bold text-[#0b1c30] mb-2">
          {name}
        </h3>
        <p className="text-[#5e5d6b] leading-relaxed mb-6">{desc}</p>
      </div>
      <div className="pt-4 border-t border-[#e5eeff] flex flex-wrap gap-1.5">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-[11px] font-semibold bg-[#e5eeff] px-2 py-0.5 rounded text-[#4a4455]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <main className="w-full pt-20 bg-[#f8f9ff]">
      {/* Breadcrumb */}
      <section className="w-full bg-[#f8f9ff] pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#4a4455]">
            <Link
              href="/"
              className="hover:text-[#7C3AED] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-[#ccc3d8] font-bold">/</span>
            <span className="text-[#0b1c30] font-semibold bg-[#dce9ff] px-2 py-0.5 rounded-lg">
              Integrations Directory
            </span>
          </nav>
        </div>
      </section>

      {/* SECTION 1: HERO */}
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] pt-8 pb-24">
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/3 -left-32 h-[450px] w-[450px] rounded-full bg-[#630ed4]/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1 mb-6 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#630ed4] animate-pulse" />
                <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#25005a]">
                  Native &amp; No-Code Integrations
                </span>
              </div>
              <h1 className="font-[Space_Grotesk] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b1c30] mb-6 leading-[1.08] tracking-tight">
                Connect Dialeads to Every Tool Your Sales Team{" "}
                <span className="text-[#7C3AED]">Already Uses</span>
              </h1>
              <p className="text-lg text-[#5e5d6b] max-w-2xl mb-12 leading-relaxed">
                No fragile webhooks. No manual CSV exports. Dialeads pushes
                every call outcome, voicemail drop, SMS reply, and disposition
                directly into your CRM, dialer, and communication stack in real
                time.
              </p>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#crm-section"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-8 py-4 text-sm font-semibold text-white shadow-md hover:bg-[#630ed4] transition-all hover:scale-[1.02]"
                >
                  Browse Integrations
                  <Network className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="#api-docs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#0b1c30] shadow-sm hover:bg-[#eff4ff] transition-all border border-[#ccc3d8]/40"
                >
                  <Code className="w-5 h-5 text-[#7C3AED]" />
                  View API Docs
                </a>
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-8 mt-6 border-t border-[#e5eeff] text-[#5e5d6b] text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-[18px] h-[18px] text-emerald-600" />
                  <span>Two-Way Live Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-[18px] h-[18px] text-emerald-600" />
                  <span>Sub-Second Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-[18px] h-[18px] text-emerald-600" />
                  <span>SOC2 Type II &amp; OAuth2</span>
                </div>
              </div>
            </div>

            {/* Right: Sync Hub Terminal */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#7C3AED]/20 to-[#eaddff]/30 blur-xl" />
              <div className="relative rounded-2xl bg-[#213145] text-[#eaf1ff] p-6 shadow-2xl overflow-hidden border border-[#e5eeff]/20">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e5eeff]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                    <span className="w-3 h-3 rounded-full bg-[#5e5d6b]" />
                    <span className="w-3 h-3 rounded-full bg-[#d2bbff]" />
                    <span className="ml-2 font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#d3e4fe]/70">
                      SYNC_ROUTER // ACTIVE_BUS
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-950/70 text-emerald-300 font-mono px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />{" "}
                    100% HEALTHY
                  </span>
                </div>

                {/* Active Dial Event */}
                <div className="bg-[#e5eeff]/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between text-[11px] text-[#d3e4fe]/70 font-semibold mb-1">
                    <span>ACTIVE OUTBOUND CALL EVENT</span>
                    <span className="text-[#d2bbff] font-mono">T+0.41s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center font-bold text-sm">
                        DW
                      </div>
                      <div>
                        <div className="font-[Space_Grotesk] text-[14px] text-white font-semibold leading-tight">
                          David Wright (FinScale)
                        </div>
                        <div className="text-[12px] text-[#d3e4fe]/70">
                          Disposition:{" "}
                          <span className="text-[#d2bbff] font-semibold">
                            Interested &amp; VM Dropped
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono bg-[#630ed4]/30 text-[#d2bbff] px-2 py-1 rounded">
                      2-Way Sync
                    </span>
                  </div>
                </div>

                {/* Live Sync Nodes */}
                <div className="space-y-2 font-mono text-[12px]">
                  {[
                    { name: "HubSpot CRM", status: "Activity logged (0.12s)", color: "text-emerald-300" },
                    { name: "Salesforce Opps", status: "Stage: Demo Booked (0.19s)", color: "text-emerald-300" },
                    { name: "Slack #sales-wins", status: "Alert dispatched (0.08s)", color: "text-[#d2bbff]" },
                    { name: "Outreach.io", status: "Sequence paused (0.24s)", color: "text-[#d3e4fe]/70" },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-[#e5eeff]/5 flex items-center justify-between hover:bg-[#e5eeff]/10 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-white font-medium">{node.name}</span>
                      </div>
                      <span className={node.color}>{node.status}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#e5eeff]/10 flex items-center justify-between text-[11px] text-[#d3e4fe]/70">
                  <span>
                    Avg round-trip ping:{" "}
                    <strong className="text-[#d2bbff] font-mono">18ms</strong>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Lock className="w-[13px] h-[13px]" /> TLS 1.3 Encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS BAR */}
      <section className="w-full bg-[#eff4ff] py-12 border-y border-[#e5eeff]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start text-center lg:text-left bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl shadow-xs lg:shadow-none"
              >
                <span
                  className={`font-[Space_Grotesk] text-4xl lg:text-5xl font-bold tracking-tight ${s.color}`}
                >
                  {s.value}
                </span>
                <span className="font-[Space_Grotesk] text-xl font-semibold text-[#0b1c30] mt-1">
                  {s.label}
                </span>
                <p className="text-sm text-[#5e5d6b] mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CRM INTEGRATIONS */}
      <section className="w-full bg-[#f8f9ff] py-16 lg:py-24" id="crm-section">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1 mb-2 shadow-sm">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#25005a]">
                CRM Sync
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mt-2 mb-3">
              Your CRM Stays in Sync — Automatically
            </h2>
            <p className="text-lg text-[#5e5d6b]">
              Every call, voicemail drop, disposition, and SMS thread writes back
              to your CRM the moment it happens — no Zaps, no manual logging, no
              missed updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmIntegrations.map((item, i) => (
              <IntegrationCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNICATION & OUTREACH */}
      <section className="w-full bg-[#eff4ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e3e0f1] text-[#630ed4] px-4 py-1 mb-2 shadow-sm">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em]">
                Outreach &amp; Messaging
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mt-2 mb-3">
              Trigger Follow-Ups Across Every Channel
            </h2>
            <p className="text-lg text-[#5e5d6b]">
              Connect Dialeads to your outreach and messaging tools so every
              follow-up fires automatically — no copy-paste, no tab switching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commsIntegrations.map((item, i) => (
              <IntegrationCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: AUTOMATION */}
      <section className="w-full bg-[#f8f9ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1 mb-2 shadow-sm">
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#25005a]">
                Workflow Automation
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mt-2 mb-3">
              Automate Everything Between Your Tools
            </h2>
            <p className="text-lg text-[#5e5d6b]">
              Dialeads connects to your automation stack so every call outcome
              triggers the right next action — across any app, without writing
              code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationIntegrations.map((item, i) => (
              <IntegrationCard key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TELEPHONY & COMPLIANCE */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-[#eff4ff] p-12 md:p-16 border border-[#e5eeff]">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eaddff] px-4 py-1 mb-2 shadow-sm">
                <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em] text-[#25005a]">
                  Telephony Infrastructure
                </span>
              </div>
              <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mt-2 mb-3">
                Carrier-Grade Telephony — Already Handled
              </h2>
              <p className="text-lg text-[#5e5d6b]">
                Dialeads runs on enterprise telephony infrastructure with
                compliance tooling built in. No separate carrier accounts or
                compliance vendors needed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {telephonyCards.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-10 shadow-sm border border-[#e5eeff] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-sm`}
                      >
                        <item.icon className="w-8 h-8" />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${item.badgeBg}`}
                      >
                        {item.badgeBg.includes("emerald") && (
                          <BadgeCheck className="w-[14px] h-[14px]" />
                        )}
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-[Space_Grotesk] text-2xl font-bold text-[#0b1c30] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[#5e5d6b] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#e5eeff] flex flex-wrap gap-1.5">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-semibold bg-[#e5eeff] px-2 py-0.5 rounded text-[#4a4455]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: INTEGRATION REQUEST */}
      <section className="w-full bg-[#f8f9ff] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div
            className="rounded-3xl bg-white p-12 md:p-16 border-2 border-dashed border-[#7C3AED]/30 text-center flex flex-col items-center shadow-sm"
            id="api-docs"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e3e0f1] text-[#630ed4] px-4 py-1 mb-4 shadow-sm">
              <HelpCircle className="w-4 h-4" />
              <span className="font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em]">
                Don&apos;t See Your Tool?
              </span>
            </div>
            <h2 className="font-[Space_Grotesk] text-3xl lg:text-4xl font-bold text-[#0b1c30] mb-3 max-w-2xl">
              We Add New Integrations Every Month
            </h2>
            <p className="text-lg text-[#5e5d6b] max-w-xl mb-12">
              Submit a request and our team will prioritize it based on customer
              demand. Most requested integrations ship within 30 days.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white px-8 py-4 text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
              >
                <PlusCircle className="w-[18px] h-[18px]" />
                Request an Integration
              </Link>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] px-8 py-4 text-sm font-semibold transition-colors border border-[#ccc3d8]/30">
                <Terminal className="w-[18px] h-[18px]" />
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA */}
      <section className="w-full bg-[#f8f9ff] pb-32 pt-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative rounded-3xl bg-[#7C3AED] text-white p-12 md:p-16 overflow-hidden shadow-2xl text-center flex flex-col items-center">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#630ed4]/40 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white mb-4 font-[Space_Grotesk] text-[11px] font-bold uppercase tracking-[0.08em]">
                <Timer className="w-4 h-4" />
                5-Minute Setup
              </div>
              <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                Connect Your CRM and Start Dialing in Under 5 Minutes
              </h2>
              <p className="text-lg text-[#ede0ff] max-w-2xl mx-auto mb-12 leading-relaxed">
                Import your leads, connect your CRM, and launch your first AI
                dial session — all before your next sales standup.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0b1c30] px-10 py-4 text-sm font-semibold shadow-xl hover:bg-[#d3e4fe] transition-all hover:scale-[1.02]"
                >
                  Start Free Trial
                  <ArrowRight className="w-[18px] h-[18px]" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#630ed4]/40 text-white px-8 py-4 text-sm font-semibold hover:bg-[#630ed4]/60 backdrop-blur-sm transition-all border border-white/20"
                >
                  <CalendarDays className="w-[18px] h-[18px]" />
                  Book a Demo
                </Link>
              </div>
              <p className="mt-8 text-[13px] text-[#ede0ff] flex flex-wrap items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> No credit card
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> All integrations included
                  on Pro
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Cancel anytime
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
