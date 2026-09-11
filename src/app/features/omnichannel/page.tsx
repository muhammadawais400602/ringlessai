"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageSquare,
  MailCheck,
  Send,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Rocket,
  Check,
  Smartphone,
  MessagesSquare,
  Inbox,
  Paperclip,
  MousePointerClick,
  Download,
  Calendar,
  PlayCircle,
  Copy,
  ExternalLink,
  Bot,
  Gavel,
  Network,
  Phone as PhoneIcon,
  FileText,
  CalendarPlus,
  SlidersHorizontal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Dispatcher Tab Types                                               */
/* ------------------------------------------------------------------ */

type DispatcherTab = "sms" | "whatsapp" | "email";
type TemplateFilter = "all" | "sms" | "whatsapp" | "email";

/* ------------------------------------------------------------------ */
/*  WhatsApp Inline SVG Icon                                           */
/* ------------------------------------------------------------------ */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Template data                                                      */
/* ------------------------------------------------------------------ */

interface Template {
  title: string;
  category: TemplateFilter;
  badge: string;
  iconBg: string;
  icon: React.ReactNode;
  body: React.ReactNode;
  variables: string[];
  footerIcon: React.ReactNode;
  footerText: string;
}

const templates: Template[] = [
  {
    title: "Post-Call Mockup Staging",
    category: "sms",
    badge: "SMS Route",
    iconBg: "bg-primary-light",
    icon: <Smartphone className="h-[18px] w-[18px] text-primary" />,
    body: (
      <>
        &quot;Hey{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{first_name}}"}
        </span>
        , based on what you noted about{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{pitch_angle}}"}
        </span>{" "}
        at{" "}
        <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
          {"{{company}}"}
        </span>
        , our engineering agent already mapped your pipeline. Take a 30-second
        tour here:{" "}
        <span className="text-primary underline font-medium">
          app.vocalis.ai/preview/{"{{unique_id}}"}
        </span>
        &quot;
      </>
    ),
    variables: ["{{first_name}}", "{{company}}", "{{pitch_angle}}"],
    footerIcon: <MousePointerClick className="h-4 w-4 text-primary" />,
    footerText: "84.2% Click-through CTR",
  },
  {
    title: "Pricing One-Pager",
    category: "whatsapp",
    badge: "WhatsApp Business",
    iconBg: "bg-gray-100",
    icon: <FileText className="h-[18px] w-[18px] text-gray-700" />,
    body: (
      <>
        &quot;Hi{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{first_name}}"}
        </span>{" "}
        — as promised, here is the customized quote matrix for{" "}
        <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
          {"{{company}}"}
        </span>{" "}
        on our{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{pricing_tier}}"}
        </span>{" "}
        tier. Includes dedicated 10DLC routing and dialer seats. Tap below to
        review the interactive PDF.&quot;
      </>
    ),
    variables: ["{{first_name}}", "{{company}}", "{{pricing_tier}}"],
    footerIcon: <Download className="h-4 w-4 text-primary" />,
    footerText: "Attached: Quote_{{pricing_tier}}.pdf",
  },
  {
    title: "Executive Recap & Calendar",
    category: "email",
    badge: "Email Summary",
    iconBg: "bg-violet-200",
    icon: <Calendar className="h-[18px] w-[18px] text-violet-700" />,
    body: (
      <>
        &quot;Subject: Summary: VocalisAI x{" "}
        <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
          {"{{company}}"}
        </span>{" "}
        Outbound Initiative
        <br />
        <br />
        Hi{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{first_name}}"}
        </span>
        , appreciate the time today discussing{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{pitch_angle}}"}
        </span>
        . I have pre-allocated our solutions architect for Thursday. Lock in your
        preferred 20-minute window:{" "}
        <span className="text-primary underline font-medium">
          cal.com/vocalis/{"{{rep_handle}}"}
        </span>
        &quot;
      </>
    ),
    variables: [
      "{{first_name}}",
      "{{company}}",
      "{{pitch_angle}}",
      "{{rep_handle}}",
    ],
    footerIcon: <Calendar className="h-4 w-4 text-primary" />,
    footerText: "One-click Google & Outlook ICS",
  },
  {
    title: "Voicemail Follow-up Ping",
    category: "sms",
    badge: "SMS Fallback",
    iconBg: "bg-gray-200",
    icon: <PhoneIcon className="h-[18px] w-[18px] text-primary" />,
    body: (
      <>
        &quot;Just left you a brief VM,{" "}
        <span className="bg-primary-light text-primary font-semibold px-1 rounded">
          {"{{first_name}}"}
        </span>
        ! Reaching out regarding our automated SDR dialer benchmarks for{" "}
        <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
          {"{{company}}"}
        </span>
        . Dropping the quick 45-second audio breakdown here so you don&apos;t
        have to dial into voicemail:{" "}
        <span className="text-primary underline font-medium">
          vocalis.ai/audio/{"{{snippet_id}}"}
        </span>
        &quot;
      </>
    ),
    variables: ["{{first_name}}", "{{company}}", "{{snippet_id}}"],
    footerIcon: <PlayCircle className="h-4 w-4 text-primary" />,
    footerText: "Instant In-Browser Audio Player",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function OmnichannelPage() {
  const [activeTab, setActiveTab] = useState<DispatcherTab>("sms");
  const [sendState, setSendState] = useState<
    "idle" | "sending" | "delivered"
  >("idle");
  const [templateFilter, setTemplateFilter] =
    useState<TemplateFilter>("all");

  /* Send demo animation */
  function triggerSend() {
    if (sendState !== "idle") return;
    setSendState("sending");
    setTimeout(() => {
      setSendState("delivered");
      setTimeout(() => setSendState("idle"), 3000);
    }, 1100);
  }

  const sendLabel =
    sendState === "sending"
      ? "Dispatching via Telnyx..."
      : sendState === "delivered"
        ? "Delivered to Marcus (1.1s)"
        : "Send in 10 Seconds";

  const sendBtnColor =
    sendState === "delivered"
      ? "bg-emerald-700"
      : sendState === "sending"
        ? "bg-primary-dark"
        : "bg-primary";

  const tabClasses = (tab: DispatcherTab) =>
    tab === activeTab
      ? "flex items-center gap-1 px-4 py-2 rounded-t-xl bg-white text-primary font-semibold text-sm shadow-sm"
      : "flex items-center gap-1 px-4 py-2 rounded-t-xl text-gray-500 hover:text-gray-900 text-sm font-semibold transition-colors";

  const filterClasses = (f: TemplateFilter) =>
    f === templateFilter
      ? "px-4 py-2 rounded-lg text-xs font-semibold bg-white text-gray-900 shadow-sm"
      : "px-4 py-2 rounded-lg text-xs font-semibold text-gray-500 hover:text-gray-900";

  const filteredTemplates =
    templateFilter === "all"
      ? templates
      : templates.filter((t) => t.category === templateFilter);

  return (
    <div className="flex flex-col w-full">
      {/* ============================================================ */}
      {/* Breadcrumb                                                    */}
      {/* ============================================================ */}
      <section className="w-full bg-white pt-8 pb-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <Link
              href="/features"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Features</span>
            </Link>
            <span className="text-gray-300 font-bold">/</span>
            <span className="text-gray-900 font-semibold bg-gray-100 px-2 py-0.5 rounded-lg">
              Omnichannel Follow-Up
            </span>
          </nav>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Hero                                                          */}
      {/* ============================================================ */}
      <section className="relative w-full bg-white pb-16 lg:pb-24 overflow-hidden">
        {/* Ambient blurs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-light/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[320px] bg-gray-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-primary shadow-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-[12px] font-bold tracking-wider uppercase">
                  Multi-Touch Conversion Engine
                </span>
              </div>

              <h1 className="text-3xl lg:text-[56px] lg:leading-[60px] font-bold tracking-tight text-gray-900 mb-6">
                Instant Omnichannel Follow-Up via{" "}
                <span className="text-primary underline decoration-primary/40 decoration-wavy underline-offset-8">
                  WhatsApp, SMS, &amp; Email
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                Strike while the lead is hot. Send pre-configured interactive
                mockups, pricing proposals, and calendar links before the
                prospect even hangs up the phone.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/free-trial"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all hover:scale-[1.02]"
                >
                  Start Free Trial
                  <Zap className="h-[18px] w-[18px]" />
                </Link>
                <a
                  href="#template-library"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-sm hover:bg-gray-50 transition-all"
                >
                  <FileText className="h-[18px] w-[18px] text-primary" />
                  View Message Templates
                </a>
              </div>

              {/* Micro proof strip */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900">
                      &lt; 10s
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      Post-Call Dispatch
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900">
                      98.4%
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      Deliverability SLA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dispatcher Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-300/40 via-gray-200/30 to-primary/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Terminal header */}
                <div className="bg-hero-bg px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                    <div className="w-3 h-3 rounded-full bg-violet-300" />
                    <span className="text-[13px] font-mono text-gray-300 ml-3">
                      DISPATCHER_ENGINE // ACTIVE_CALL_0931
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white">
                      Syncing Live SDR Audio
                    </span>
                  </div>
                </div>

                {/* Tab selector */}
                <div className="bg-gray-50 px-6 pt-3 flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab("sms")}
                    className={tabClasses("sms")}
                  >
                    <MessageSquare className="h-[18px] w-[18px]" />
                    <span>SMS (Telnyx 10DLC)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("whatsapp")}
                    className={tabClasses("whatsapp")}
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                    <span>WhatsApp Business</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("email")}
                    className={tabClasses("email")}
                  >
                    <MailCheck className="h-[18px] w-[18px]" />
                    <span>Email Summary</span>
                  </button>
                </div>

                {/* Panel content */}
                <div className="p-6 flex flex-col gap-4">
                  {/* Routing metadata */}
                  <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-xl flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-gray-900 text-sm">
                      <ArrowRight className="h-[18px] w-[18px] text-primary" />
                      <span className="text-xs font-semibold text-gray-500">
                        Lead:
                      </span>
                      <span className="text-sm font-bold">Marcus Vance</span>
                      <span className="text-xs text-gray-500">
                        (VP Sales @ CloudScale)
                      </span>
                    </div>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-mono">
                      Routing: +1 (415) 890-2198
                    </span>
                  </div>

                  {/* SMS Content */}
                  {activeTab === "sms" && (
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
                          <span className="flex items-center gap-1">
                            <Bot className="h-[15px] w-[15px] text-primary" />
                            Autonomous AI Payload Composer
                          </span>
                          <span className="font-mono text-primary-dark font-semibold">
                            142/160 chars &middot; 1 Telnyx SMS segment
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-gray-900 text-base shadow-sm">
                          Hey{" "}
                          <span className="bg-primary-light text-primary font-semibold px-1 rounded">
                            {"{{prospect_first_name}}"}
                          </span>
                          , great speaking just now about ramping your SDR
                          cadence. Here is the custom interactive prototype we
                          generated for{" "}
                          <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
                            {"{{company}}"}
                          </span>
                          :
                        </div>
                        {/* OG Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
                          <div className="h-32 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-violet-300/30" />
                            <div className="relative z-10 flex items-center gap-3 px-4">
                              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md">
                                <svg
                                  className="h-6 w-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                >
                                  <path d="M21 7.5V18a2 2 0 01-2 2H5a2 2 0 01-2-2V7.5m18 0L12 13 3 7.5m18 0l-3-2.5H6L3 7.5" />
                                </svg>
                              </div>
                              <div>
                                <div className="text-[15px] font-bold text-gray-900">
                                  VocalisAI Custom Voice Pipeline Demo
                                </div>
                                <div className="text-xs text-gray-500">
                                  interactive-demo.vocalis.ai/v/cs-8921
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-white flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              Tap to launch sandbox in browser
                            </span>
                            <ExternalLink className="h-[18px] w-[18px] text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Send button */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          10DLC Carrier Pre-Screened
                        </div>
                        <button
                          onClick={triggerSend}
                          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full ${sendBtnColor} text-white font-semibold text-sm shadow-md transition-all active:scale-95`}
                        >
                          <Send className="h-[18px] w-[18px]" />
                          {sendLabel}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Content */}
                  {activeTab === "whatsapp" && (
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between text-gray-500 text-xs font-semibold">
                          <span className="text-emerald-700 font-semibold flex items-center gap-1">
                            <ShieldCheck className="h-4 w-4" />
                            Meta Official Green Badge Verified
                          </span>
                          <span className="font-mono text-gray-500">
                            Template: pricing_deck_v3
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-gray-900 text-base shadow-sm">
                          Hi{" "}
                          <span className="bg-primary-light text-primary font-semibold px-1 rounded">
                            {"{{prospect_first_name}}"}
                          </span>
                          ! Attached is the enterprise security packet &amp;
                          customized ROI matrix for{" "}
                          <span className="bg-gray-100 text-gray-800 font-semibold px-1 rounded">
                            {"{{company}}"}
                          </span>
                          . Let us know if tomorrow at 2:00 PM PT still works
                          for your VP of Ops.
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 py-2 bg-gray-100 rounded-lg text-gray-900 text-xs font-semibold flex items-center justify-center gap-1">
                            <FileText className="h-4 w-4" />
                            Download ROI Packet.pdf
                          </button>
                          <button className="flex-1 py-2 bg-primary-light text-primary rounded-lg text-xs font-semibold flex items-center justify-center gap-1">
                            <CalendarPlus className="h-4 w-4" />
                            Confirm Calendar Invite
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Email Content */}
                  {activeTab === "email" && (
                    <div className="flex flex-col gap-3">
                      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
                        <div className="text-gray-500 text-xs font-semibold">
                          Subject:{" "}
                          <span className="text-gray-900 font-semibold">
                            Executive Recap: VocalisAI +{" "}
                            {"{{company}}"} Outbound Integration
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-gray-900 text-sm shadow-sm space-y-2">
                          <p className="font-bold">
                            Key Discussion Highlights:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>
                              Target: 350,000 cold outreach minutes/quarter
                            </li>
                            <li>
                              Current SDR connection rate: 4.8% → Projected
                              with Vocalis: 16.2%
                            </li>
                            <li>
                              A2P 10DLC registration fast-tracked via Telnyx
                              integration
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 Channel Pillars                                             */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="section-label mb-2">
              Carrier-Grade Velocity
            </span>
            <h2 className="text-2xl lg:text-[32px] lg:leading-[38px] font-bold tracking-tight text-gray-900 mb-4">
              Three Dedicated Multi-Touch Pipelines Built for Lightning
              Conversion
            </h2>
            <p className="text-lg text-gray-600">
              Never let warm call momentum dissipate into thin air. Every
              interaction triggers high-deliverability routes calibrated for
              high response.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Channel 1: SMS */}
            <div className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary mb-6 shadow-sm">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="section-label">SMS — 98% Open Rate</span>
                  <span className="bg-gray-100 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded">
                    98% Open Rate
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Direct Telnyx A2P 10DLC SMS Engine
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  High-deliverability Tier-1 direct carrier route routes bypass spam filters automatically. Deliver interactive URLs, personalized sales slides, and concise segment notes within seconds of the call termination.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 mt-4">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-900 mb-2">
                  <span>Carrier Routing Performance</span>
                  <span className="text-primary font-bold">0.42s latency</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full w-[98%]" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1 font-mono">
                  <span>AT&amp;T Verified</span>
                  <span>Verizon Clean Pipe</span>
                  <span>T-Mobile Whitelisted</span>
                </div>
              </div>
            </div>

            {/* Channel 2: WhatsApp */}
            <div className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-700 mb-6 shadow-sm">
                  <MessagesSquare className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-500">
                    Global Instant Messaging
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded">
                    Active Businesses
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  WhatsApp Business API Integration
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Reach international and enterprise buyers with rich interactive cards. Send dynamic multi-option quick replies, secure PDF proposals, screen-recorded personalized video demos, and one-tap calendar links.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 mt-4">
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  Dynamic Response Options
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-2 rounded-lg text-center text-xs text-primary font-semibold shadow-sm hover:bg-primary-light transition-colors cursor-pointer">
                    Lock Special Tier
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center text-xs text-gray-900 font-semibold shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
                    Reschedule SDR
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1 text-[11px] text-gray-500">
                  <CheckCircle className="h-[13px] w-[13px] text-primary" />
                  Rich read receipts &amp; webhooks enabled
                </div>
              </div>
            </div>

            {/* Channel 3: Email */}
            <div className="group bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-200 flex items-center justify-center text-violet-700 mb-6 shadow-sm">
                  <Inbox className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="section-label">Automated Calibration</span>
                  <span className="bg-gray-100 text-gray-900 text-xs font-semibold px-2 py-0.5 rounded">
                    AI Audio Notes
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  One-Click Executive Email Summaries
                </h3>
                <p className="text-base text-gray-600 mb-6">
                  Dialeads automatically synthesizes delivers polished executive summaries. Contains timestamped conversation takeaways, customized pricing tables, sales slide collateral, and direct calendar invitations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Paperclip className="h-[18px] w-[18px] text-primary" />
                  <span className="text-xs font-semibold text-gray-900">
                    Auto-Attached Package
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-[12px] text-gray-500 font-mono">
                  <span className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded">
                    <span>Vocalis_Proposal_CloudScale.pdf</span>
                    <span className="text-primary-dark font-semibold">
                      1.4 MB
                    </span>
                  </span>
                  <span className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded">
                    <span>Call_Highlights_Audit.docx</span>
                    <span className="text-primary-dark font-semibold">
                      280 KB
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Conversion Velocity Metrics                                   */}
      {/* ============================================================ */}
      <section className="w-full bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-light text-primary text-[12px] font-bold uppercase mb-3">
                Conversion Velocity Study
              </div>
              <h2 className="text-2xl lg:text-[40px] lg:leading-[44px] font-bold text-gray-900 mb-3">
                Speed-to-Touch dictates pipeline mortality.
              </h2>
              <p className="text-base text-gray-600">
                Leads dispatched with collateral in under 60 seconds maintain
                call context, forward proposals internally, and book
                second-touch technical demos before objections form.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                <span className="text-[56px] leading-[60px] font-bold text-primary">
                  3.2x
                </span>
                <span className="text-sm font-bold text-gray-900 mt-1">
                  Higher Response Rate
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  When follow-up is dispatched within 60 seconds of live call termination.
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                <span className="text-[56px] leading-[60px] font-bold text-gray-900">
                  &lt; 14s
                </span>
                <span className="text-sm font-bold text-gray-900 mt-1">
                  Mean Delivery Time
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Telnyx SMS delivery with full carrier agency.
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                <span className="text-[56px] leading-[60px] font-bold text-primary-dark">
                  41%
                </span>
                <span className="text-sm font-bold text-gray-900 mt-1">
                  Same Day Booking
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Calendar tokens accepted meet day-close sales rates.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Template Library                                              */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 lg:py-24" id="template-library">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-label">Dynamic Repertoire</span>
              <h2 className="text-2xl lg:text-[32px] lg:leading-[38px] font-bold tracking-tight text-gray-900 mt-2">
                Interactive Template Library Showcase
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mt-2">
                Outbound sales engineers utilize tested copy patterns populated
                automatically with extracted conversation variables.
              </p>
            </div>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
              {(
                ["all", "sms", "whatsapp", "email"] as TemplateFilter[]
              ).map((f) => (
                <button
                  key={f}
                  onClick={() => setTemplateFilter(f)}
                  className={filterClasses(f)}
                >
                  {f === "all"
                    ? "All Templates"
                    : f === "sms"
                      ? "SMS"
                      : f === "whatsapp"
                        ? "WhatsApp"
                        : "Email"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTemplates.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border border-gray-100"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-8 h-8 rounded-lg ${t.iconBg} flex items-center justify-center`}
                      >
                        {t.icon}
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        {t.title}
                      </span>
                    </div>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                      {t.badge}
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-base text-gray-900 mb-4 leading-relaxed">
                    {t.body}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-gray-500">
                      Live Variables:
                    </span>
                    {t.variables.map((v) => (
                      <span
                        key={v}
                        className="font-mono text-[12px] bg-gray-100 px-2 py-0.5 rounded text-gray-900"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-gray-500 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    {t.footerIcon}
                    {t.footerText}
                  </span>
                  <button className="text-primary hover:underline font-semibold flex items-center gap-1">
                    Clone Template
                    <Copy className="h-[14px] w-[14px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Carrier Trust Architecture                                    */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="section-label">Zero Carrier Friction</span>
                <h2 className="text-2xl lg:text-[40px] lg:leading-[44px] font-bold tracking-tight text-gray-900 mt-2 mb-4">
                  Delivery &amp; Carrier Trust Architecture
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Outbound reputation is binary: messages either arrive in
                  seconds or disappear into carrier filtration voids. Dialeads is
                  built with carrier-grade compliance safeguards natively
                  embedded.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">
                        10DLC Brand &amp; Campaign Registration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Turnkey submission to TCR (The Campaign Registry).
                        Eliminate carrier spam throttling with verified Trust
                        Scores.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <Zap className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">
                        Carrier Throughput Management
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dynamic token bucket burst routing dispatching up to 30
                        msgs/sec across distributed dedicated short and long
                        codes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <Gavel className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">
                        Autonomous TCPA &amp; STOP Compliance
                      </h4>
                      <p className="text-sm text-gray-600">
                        Natural language opt-out recognition. Inbound
                        &apos;STOP&apos;, &apos;UNSUBSCRIBE&apos;, or verbal
                        opt-out triggers immediate cross-channel suppression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture card */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <Network className="h-6 w-6 text-primary" />
                      <span className="text-xl font-bold text-gray-900">
                        Carrier Route Topology
                      </span>
                    </div>
                    <span className="text-xs font-bold bg-primary-light text-primary px-2 py-0.5 rounded">
                      TCPA Shield 3.0
                    </span>
                  </div>

                  {/* Pipeline steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-xl p-4 flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Step 01
                      </span>
                      <span className="text-[15px] font-bold text-gray-900 mt-1">
                        Dialer Trigger
                      </span>
                      <p className="text-[12px] text-gray-500 mt-1">
                        Call wrap-up intent triggers dynamic variable
                        extraction.
                      </p>
                      <div className="mt-4 text-[11px] font-mono text-primary-dark font-semibold">
                        T+0.00s
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Step 02
                      </span>
                      <span className="text-[15px] font-bold text-gray-900 mt-1">
                        Carrier Gate
                      </span>
                      <p className="text-[12px] text-gray-500 mt-1">
                        10DLC token queue throttles to 30 msgs/sec route
                        limits.
                      </p>
                      <div className="mt-4 text-[11px] font-mono text-primary-dark font-semibold">
                        T+0.25s
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Step 03
                      </span>
                      <span className="text-[15px] font-bold text-gray-900 mt-1">
                        Handset Delivery
                      </span>
                      <p className="text-[12px] text-gray-500 mt-1">
                        Real-time delivery receipt (DLR) registered in CRM log.
                      </p>
                      <div className="mt-4 text-[11px] font-mono text-primary-dark font-semibold">
                        T+1.40s
                      </div>
                    </div>
                  </div>

                  {/* Verification items */}
                  <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between text-gray-900 text-sm">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-[18px] w-[18px] text-emerald-600" />
                        The Campaign Registry (TCR) Tier-3 Status
                      </span>
                      <span className="font-mono font-bold text-gray-500 text-[12px]">
                        VERIFIED
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-900 text-sm">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-[18px] w-[18px] text-emerald-600" />
                        Automated STOP Opt-Out Webhook Suppression
                      </span>
                      <span className="font-mono font-bold text-gray-500 text-[12px]">
                        0.02s SYNC
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-gray-900 text-sm">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-[18px] w-[18px] text-emerald-600" />
                        Meta Cloud API Official BSP Route
                      </span>
                      <span className="font-mono font-bold text-gray-500 text-[12px]">
                        DIRECT TIER-1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Editorial Visual Proof Block                                  */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="bg-cover bg-center w-full h-[420px]"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMC43-PWsLgrgthZp1xdQRvXhU0E8mpgID5U2hgStZct5bX6PhOa8dZ0ZJ7Thd0tpT5jlJghesJPev82o9wVNNApD_O0K5RHgyi1s0Q26884WRyi9sH6h67N80l5uQ0x0FtzImaq-SNhwNv61F6VT28Dh9iEJW4BlUljQjbjgq7B9nqdiuf3XKMo59JqQTs8BbOQyO4IkV0Lb533wwtvqgLF8zzLJZa7_327jqh9WV-K_Aei6PoLdYDQ')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent p-8 md:p-16 flex flex-col justify-center max-w-2xl">
                <span className="text-[12px] font-bold tracking-widest uppercase text-violet-300 mb-2">
                  Synchronised Outbound Stack
                </span>
                <h3 className="text-2xl lg:text-[40px] lg:leading-[44px] font-bold text-white mb-4">
                  Built to integrate seamlessly with Salesforce, HubSpot, and
                  Outreach.
                </h3>
                <p className="text-base text-gray-300 mb-6">
                  Every SMS with/without note, email confirmation, and meeting confirmation writes directly back into your CRM automatically to your logs.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-1 px-6 py-2 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-md hover:bg-gray-50 transition-all"
                  >
                    Explore CRM Sync
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Bottom CTA                                                    */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-[#5a00c6] rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl text-white text-center flex flex-col items-center">
            {/* Decorative glowing rings */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-violet-300/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-violet-400/20 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-violet-200 mb-4">
              <Rocket className="h-4 w-4" />
              <span className="text-[12px] font-bold tracking-wider uppercase">
                Uncapped Pipeline Velocity
              </span>
            </div>

            <h2 className="text-2xl lg:text-[56px] lg:leading-[60px] font-bold tracking-tight max-w-3xl mb-4">
              Turn cold calls into closed deals with instant multi-touch
              follow-ups.
            </h2>

            <p className="text-lg text-violet-200/90 max-w-2xl mb-10">
              Equip your outbound engine with automated SMS, WhatsApp, and email follow-ups that land with carrier-grade compliance at 100%. Free 14-day full platform access.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/free-trial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-xl hover:bg-gray-50 transition-all hover:scale-[1.03]"
              >
                Start Free Trial
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all"
              >
                Talk with Sales Architect
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-violet-200/80 text-sm flex-wrap">
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" />
                10DLC fully managed
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-4 w-4" />
                Full platform access included
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
