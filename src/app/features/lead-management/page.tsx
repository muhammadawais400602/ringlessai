"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Upload,
  ChevronRight,
  SlidersHorizontal,
  Database,
  RefreshCw,
  Search,
  ShieldCheck,
  CheckCircle,
  Phone,
  Clock,
  Check,
  ArrowRight,
  CloudUpload,
  PlayCircle,
  X,
  Plus,
  FileUp,
  MapPin,
  TrendingUp,
  Zap,
  Globe,
  Timer,
  Signal,
  Gavel,
  Smartphone,
  ShieldHalf,
  CloudCog,
  Network,
  LayoutGrid,
  Webhook,
  CalendarDays,
  MonitorPlay,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Lead Management – High-Capacity Lead Management & Smart Queue      */
/* ------------------------------------------------------------------ */

export default function LeadManagementPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* ── SECTION 1: HERO & BREADCRUMB ── */}
      <section className="relative overflow-hidden pt-8 pb-24">
        {/* Ambient violet glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-tr from-primary/10 via-primary/15 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-4 w-96 h-96 bg-primary-light/30 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-sm text-muted">
            <Link
              href="/features"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Features
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">
              High-Capacity Lead Management
            </span>
          </nav>

          {/* Editorial header */}
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Pipeline Dispatch &amp; Data Hygiene
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              High-Capacity Lead Management &amp; Smart Queue Engine
            </h1>

            <p className="text-lg text-muted max-w-2xl leading-relaxed mb-8">
              Ingest 100k+ leads via CSV or CRM sync, clean phone numbers
              automatically, match local caller IDs, and dynamically prioritize
              your highest-converting opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-md hover:bg-primary-dark transition-all"
              >
                Import Your Leads Free
                <CloudUpload className="w-[18px] h-[18px]" />
              </Link>
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gray-50 text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-all"
              >
                <PlayCircle className="w-[18px] h-[18px] text-primary" />
                Watch 2-Min Demo
              </button>
            </div>
          </div>

          {/* ── Hero Visual Mockup: Lead Engine Table ── */}
          <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Window top bar */}
            <div className="bg-gray-50 px-6 py-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                  <span className="w-3 h-3 rounded-full bg-gray-300" />
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow-sm">
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Queue: Q3_B2B_Enterprise_Expansion.csv
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-semibold text-gray-900">
                    3,670 Active Leads Loaded
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-muted text-xs font-semibold">
                  <RefreshCw className="w-4 h-4" /> Auto-Sync: 8s ago
                </div>
              </div>
            </div>

            {/* Filter & control ribbon */}
            <div className="bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                {["All Queued (3,670)", "Fresh (2,104)", "Retrying (842)", "Uncalled Only (724)"].map(
                  (label, i) => (
                    <button
                      key={label}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                        i === 0
                          ? "bg-primary-light text-primary"
                          : "bg-gray-50 hover:bg-gray-100 text-muted"
                      }`}
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-50 rounded-lg px-3 py-1 flex items-center gap-1 text-muted text-sm">
                  <Search className="w-4 h-4" />
                  Filter records...
                </div>
                <button className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-900">
                  <SlidersHorizontal className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>

            {/* Mock table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-muted text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-6">Lead Contact</th>
                    <th className="py-3 px-4">Company</th>
                    <th className="py-3 px-4">Carrier Hygiene</th>
                    <th className="py-3 px-4">Local CID Match</th>
                    <th className="py-3 px-4">Time Zone Status</th>
                    <th className="py-3 px-6 text-right">Priority Score</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Lead 1 */}
                  <tr className="hover:bg-gray-50/60 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary font-semibold text-sm">
                          A
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            Austin Sterling
                          </div>
                          <div className="text-muted text-xs font-semibold">
                            +1 (415) 890-2104
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-900">Apex Cloud Solutions</div>
                      <div className="text-muted text-xs font-semibold">
                        Tier 1 &bull; SaaS
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                          <ShieldCheck className="w-3 h-3" /> STIR/SHAKEN A
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          Mobile
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <Phone className="w-4 h-4" />
                        (415) Bay Area CID
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-light text-primary text-xs font-semibold">
                        <Clock className="w-3 h-3" /> 10:45 AM (Prime Window)
                      </div>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white font-semibold text-sm">
                        98/100
                      </span>
                    </td>
                  </tr>

                  {/* Lead 2 */}
                  <tr className="bg-white/50 hover:bg-gray-50/60 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-semibold text-sm">
                          M
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            Marissa Holt
                          </div>
                          <div className="text-muted text-xs font-semibold">
                            +1 (312) 441-9923
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-900">Summit Logistics</div>
                      <div className="text-muted text-xs font-semibold">
                        Mid-Market &bull; Supply Chain
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                          <CheckCircle className="w-3 h-3" /> DNC Scrubbed
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          Mobile
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-gray-900">
                        <Phone className="w-4 h-4 text-primary" />
                        (312) Chicago Metro
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                        <Clock className="w-3 h-3" /> 12:45 PM CST
                      </div>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-100 text-gray-900 font-semibold text-sm">
                        94/100
                      </span>
                    </td>
                  </tr>

                  {/* Lead 3 */}
                  <tr className="hover:bg-gray-50/60 transition-colors">
                    <td className="py-3 px-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary font-semibold text-sm">
                          E
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            Elena Rostova
                          </div>
                          <div className="text-muted text-xs font-semibold">
                            +1 (212) 582-7711
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-900">Vanguard Capital</div>
                      <div className="text-muted text-xs font-semibold">
                        Enterprise &bull; FinTech
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                          <ShieldCheck className="w-3 h-3" /> Line Validated
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          Direct Dial
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-primary font-medium">
                        <Phone className="w-4 h-4" />
                        (212) Manhattan CID
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-light text-primary text-xs font-semibold">
                        <Clock className="w-3 h-3" /> 1:45 PM EST (Active)
                      </div>
                    </td>
                    <td className="py-3 px-6 text-right">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white font-semibold text-sm">
                        91/100
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            <div className="bg-gray-50 px-6 py-3 flex flex-wrap items-center justify-between text-sm text-muted">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-gray-900 font-medium">
                  <ShieldCheck className="w-[18px] h-[18px] text-primary" />
                  100% TCPA Compliant Scrub Engine
                </span>
                <span className="hidden md:inline text-gray-400">&bull;</span>
                <span className="hidden md:inline">
                  Zero Spam Likely Flags Detected
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span>Displaying 3 of 3,670 leads</span>
                <Link
                  href="#"
                  className="text-primary font-semibold hover:underline ml-2"
                >
                  Inspect Full Dispatch Log &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: METRICS BANNER ── */}
      <section className="bg-hero-bg text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-bold text-white">
                99.8%
              </span>
              <span className="text-lg font-semibold text-purple-300 mt-1">
                Carrier Delivery Score
              </span>
              <p className="text-sm text-gray-400 mt-2">
                Automated carrier validation eliminates disconnected lines and
                invalid numbers before calls begin.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl font-bold text-white">
                3x
              </span>
              <span className="text-lg font-semibold text-purple-300 mt-1">
                Faster Queue Progression
              </span>
              <p className="text-sm text-gray-400 mt-2">
                Continuous local-presence mapping and timezone routing process
                contacts at record velocities.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  0
                </span>
                <span className="text-2xl font-bold text-purple-300">hrs</span>
              </div>
              <span className="text-lg font-semibold text-purple-300 mt-1">
                Manual Data Entry
              </span>
              <p className="text-sm text-gray-400 mt-2">
                Instant bidirectional synchronization across your CRM platform with
                automatic lead status resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 3 CORE PILLARS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Architectural Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-2 mb-4">
              Engineered for Volume, Speed, and Contact Precision
            </h2>
            <p className="text-lg text-muted">
              Raw volume is useless without surgical delivery. Our core
              infrastructure strips out friction points between your raw CSV
              files and connected conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6">
                  <FileUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bulk Ingestion &amp; De-duplication
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Upload multi-column CSVs containing 100k+ rows without manual
                  column cleanup. Automatic AI field normalization matches CRM
                  records and eliminates redundant contacts instantly.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between text-xs font-semibold text-muted mb-1">
                  <span>CSV Mapping Engine</span>
                  <span className="text-primary font-semibold">
                    100% Normalised
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full w-full" />
                </div>
                <div className="mt-2 text-xs font-semibold text-gray-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  Merged 423 duplicate CRM records
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dynamic Local Presence CID
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Outbound calls automatically project caller ID aligned with
                  the recipient&apos;s geographic area code. Boost call pick-up
                  rates up to 85%+ while adhering strictly to regional telecom
                  guidelines.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between text-xs font-semibold text-muted mb-1">
                  <span>Pick-up Rate Comparison</span>
                  <span className="text-emerald-700 font-semibold">
                    +85% Uplift
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden flex">
                  <div className="bg-primary h-full w-[85%]" />
                  <div className="bg-gray-300 h-full w-[15%]" />
                </div>
                <div className="mt-2 text-xs font-semibold text-gray-600 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  40,000+ local DID pools mapped
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-gray-100">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart Queue Routing
                </h3>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Prioritize leads by local timezone windows (focusing
                  automatically on 10am–2pm prime pick-up slots), engagement
                  history, job seniority, and high-converting industry
                  categories.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between text-xs font-semibold text-muted mb-1">
                  <span>Prime Window Execution</span>
                  <span className="text-primary font-semibold">
                    Active EST &amp; CST
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full w-3/4" />
                </div>
                <div className="mt-2 text-xs font-semibold text-gray-600 flex items-center gap-1">
                  <Timer className="w-3.5 h-3.5 text-primary" />
                  PST scheduled for 10:00 AM local start
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SEGMENT BUILDER & HYGIENE TELEMETRY ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Segment builder */}
            <div className="w-full lg:w-7/12 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Bulk Orchestrator
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    Dynamic Segment Builder
                  </h3>
                </div>
                <button className="px-4 py-2 rounded-full bg-primary-light text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Add Filter Rule
                </button>
              </div>

              {/* Filter Group 1: Industry */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                  Target Industries (Matches Any)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Restaurants & Hospitality",
                    "Tech & Cloud B2B",
                    "Commercial Real Estate",
                  ].map((industry) => (
                    <span
                      key={industry}
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold"
                    >
                      {industry}
                      <button className="hover:text-gray-300">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                  <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold hover:bg-gray-200">
                    <Plus className="w-3.5 h-3.5" /> Add Industry
                  </button>
                </div>
              </div>

              {/* Filter Group 2: Timezones */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                  Active Timezone Priority Window (Auto-Shifted)
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Eastern Time (EST) &bull; 10:00 AM - 2:00 PM
                  </span>
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-100 text-gray-900 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Central Time (CST) &bull; In Window
                  </span>
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gray-50 text-muted text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                    Pacific Time (PST) &bull; Opens in 1h 22m
                  </span>
                </div>
              </div>

              {/* Filter Group 3: Lead status */}
              <div className="mb-8">
                <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                  Lead Calling State
                </label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold">
                    Uncalled Only
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-muted text-xs font-semibold">
                    Retry: No Answer (&lt; 2 Attempts)
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-muted text-xs font-semibold">
                    Gatekeeper Passed
                  </span>
                </div>
              </div>

              {/* Output preview */}
              <div className="bg-gray-100 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-gray-900 font-semibold">
                    Matches 1,489 ready prospects
                  </div>
                  <div className="text-muted text-xs font-semibold">
                    Estimated queue dispatch throughput: 42 minutes
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:bg-primary-dark whitespace-nowrap">
                  Launch Dynamic Queue
                </button>
              </div>
            </div>

            {/* Right: Data hygiene telemetry */}
            <div className="w-full lg:w-5/12 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldHalf className="w-7 h-7 text-primary" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Data Hygiene Telemetry
                    </h4>
                    <p className="text-xs font-semibold text-muted">
                      Real-time filtering per line verification
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  {/* Item 1 */}
                  <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Signal className="w-[22px] h-[22px] text-emerald-600" />
                      <div>
                        <div className="text-gray-900 font-medium">
                          Carrier Validation
                        </div>
                        <div className="text-muted text-xs font-semibold">
                          AT&amp;T, Verizon, T-Mobile verification
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-700 font-semibold">
                        99.9% Live
                      </span>
                      <div className="text-muted text-xs font-semibold">
                        Zero invalid dials
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Gavel className="w-[22px] h-[22px] text-primary" />
                      <div>
                        <div className="text-gray-900 font-medium">
                          National DNC Registry
                        </div>
                        <div className="text-muted text-xs font-semibold">
                          Direct Federal &amp; State API Check
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-900 font-semibold">
                        41 Scrubbed
                      </span>
                      <div className="text-muted text-xs font-semibold">
                        Auto-excluded
                      </div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-4 rounded-lg bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-[22px] h-[22px] text-primary" />
                      <div>
                        <div className="text-gray-900 font-medium">
                          VoIP vs Wireless Detection
                        </div>
                        <div className="text-muted text-xs font-semibold">
                          Separating mobile lines from virtual PBX
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-semibold">
                        92.4% Mobile
                      </span>
                      <div className="text-muted text-xs font-semibold">
                        High answer score
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TCPA callout */}
              <div className="bg-primary-light p-6 rounded-xl flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    TCPA Safe Harbor Protection
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    Every dial logs time-stamped consent records, automatic DNC
                    suppression certificates, and caller ID reputation scoring
                    to safeguard your company domain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INTEGRATION ECOSYSTEM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Universal Connectivity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mt-2 mb-3">
              Bi-Directional CRM Sync Engine
            </h2>
            <p className="text-base text-muted">
              No complicated webhooks or fragile export spreadsheets. Dialeads
              keeps your existing sales toolchain seamlessly synchronized in
              real-time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Salesforce */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mb-4">
                <CloudCog className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Salesforce</h4>
              <p className="text-sm text-muted mt-1 mb-3">
                Enterprise 2-way sync
              </p>
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Native App
              </span>
            </div>

            {/* HubSpot */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mb-4">
                <Network className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">HubSpot</h4>
              <p className="text-sm text-muted mt-1 mb-3">
                Deal &amp; contact timeline
              </p>
              <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium">
                Verified Partner
              </span>
            </div>

            {/* Close CRM */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mb-4">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Close CRM</h4>
              <p className="text-sm text-muted mt-1 mb-3">
                High-velocity lead pipelines
              </p>
              <span className="px-3 py-0.5 rounded-full bg-primary-light text-primary text-xs font-medium">
                Full Direct API
              </span>
            </div>

            {/* Pipedrive & Webhooks */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mb-4">
                <Webhook className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                Pipedrive &amp; Webhooks
              </h4>
              <p className="text-sm text-muted mt-1 mb-3">
                Sub-second latency
              </p>
              <span className="px-3 py-0.5 rounded-full bg-gray-100 text-muted text-xs font-medium">
                Sub-second Latency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: BOTTOM CONVERSION CTA ── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-primary-light/40 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-light text-primary mb-4 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            Instant Zero-Friction Setup
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Organize and accelerate your outbound pipeline today
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
            Stop losing deals to bad data, spam flags, and time-wasting manual
            dials. Connect your database and initiate AI-powered conversations
            in under five minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm shadow-lg transition-all"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm shadow-sm transition-all border border-gray-200"
            >
              <CalendarDays className="w-[18px] h-[18px]" />
              Book Architecture Review
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-muted">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" /> No credit card
              required
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" /> Pre-loaded with 500
              free verification credits
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" /> Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ── DEMO MODAL ── */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setDemoOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 p-8 shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-muted hover:text-gray-900"
              onClick={() => setDemoOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <MonitorPlay className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold text-gray-900">
                Dialeads Smart Queue in 120 Seconds
              </h4>
            </div>
            <div className="aspect-video bg-hero-bg rounded-xl flex flex-col items-center justify-center text-white relative overflow-hidden">
              <PlayCircle className="w-16 h-16 text-primary animate-pulse" />
              <p className="text-base mt-3 text-gray-400">
                Interactive Walkthrough Simulation
              </p>
            </div>
            <p className="text-sm text-muted mt-4">
              Learn how auto-categorization routes Tier-1 leads directly to live
              speech agents while eliminating unreachable phone numbers in
              background cycles.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
