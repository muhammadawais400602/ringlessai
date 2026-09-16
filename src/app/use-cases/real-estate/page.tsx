"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Check,
  Zap,
  Voicemail,
  MessageSquare,
  Phone,
  Upload,
  BadgeCheck,
  Mic,
  CalendarClock,
  Gauge,
  Building2,
  Timer,
  Landmark,
  Mountain,
  Home,
  ShieldCheck,
  Clock,
  Shield,
  BanIcon,
  FileText,
  AudioWaveform,
  PhoneForwarded,
  Handshake,
  ClipboardCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data arrays                                                        */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "500+", label: "Leads Contacted Per Day Per Agent" },
  { value: "3x", label: "More Callbacks With Dynamic Voicemail Drops" },
  { value: "2 sec", label: "Voicemail Drop on Every Missed Call" },
  { value: "60 sec", label: "Speed-to-Lead — Contact New Leads Within 60 Seconds" },
];

const profiles = [
  {
    icon: Home,
    tag: "High Volume Acquisitions",
    title: "Real Estate Wholesalers",
    body: "Working absentee owner lists, driving-for-dollars data, probate lists, and tax delinquent leads. You need to contact thousands of property owners per week to find the handful who are motivated to sell below market. Manual dialing gets you through 60 per day. Dialeads gets you through 500.",
    footer: "Ideal for: 1,000 to 20,000 lead batch campaigns",
  },
  {
    icon: Timer,
    tag: "Speed-to-Lead",
    title: "Real Estate Agents Prospecting Expired Listings and FSBOs",
    body: "Expired listings and FSBOs are the hottest leads in real estate — and every agent in your market is calling them. Speed wins. Dialeads contacts every new expired listing within 60 seconds of it hitting the MLS so you are always the first agent they hear from.",
    footer: "Direct MLS hook & instant call drops",
  },
  {
    icon: Building2,
    tag: "Zero Vacancy",
    title: "Property Managers Following Up on Rental Inquiries",
    body: "Every unfilled unit costs money every day. Dialeads contacts every rental inquiry automatically — within minutes of the form submission — drops a personalized voicemail if they do not pick up, and sends a follow-up SMS automatically. Fill units faster without playing phone tag.",
    footer: "Automated tenant qualification & booking",
  },
  {
    icon: Landmark,
    tag: "First Lender Priority",
    title: "Mortgage Brokers and Loan Officers",
    body: "Working purchase leads, refinance leads, and referral lists. Dialeads contacts every new lead within 60 seconds of form submission, drops a personalized voicemail on every missed call, and fires a follow-up SMS automatically — so you are always the first lender they speak to.",
    footer: "Instant webhook integration to web funnels",
  },
  {
    icon: Mountain,
    tag: "Acreage & Subdivision Scale",
    title: "Land Investors",
    body: "Calling rural landowners, vacant lot owners, and agricultural property owners from county record lists. Dialeads imports any CSV, scrubs DNC, matches local caller IDs, and dials at scale — so you spend your time negotiating deals, not dialing numbers.",
    footer: "Automated parcel-ID & county records matching",
    footerExtra: "100% Local Caller ID Guaranteed",
    wide: true,
  },
];

const painPoints = [
  {
    num: "01",
    title: "Manual Dialing Gets You Through 60 Leads Per Day — Maximum",
    body: "A motivated seller list has 5,000 contacts. At 60 manual dials per day, it takes 83 days to get through the list. By then, half the motivated sellers have already sold to someone faster. You need to contact the entire list in days — not months.",
    fix: "Power dialer with local presence caller ID contacts 400-500 leads per day automatically. AI voice agent handles conversations autonomously. The entire 5,000-row list is contacted in under 2 weeks — not 3 months.",
  },
  {
    num: "02",
    title: "Leaving Voicemails Manually Wastes 45 Minutes Every Day",
    body: 'You call 100 numbers. 70 go to voicemail. You spend 45 seconds on each one re-recording the same message — "Hi, my name is [name], I am interested in your property at [address], please call me back." That is 52 minutes of dead time every single day just pressing buttons and waiting for beeps.',
    fix: "1-click voicemail drop in under 2 seconds. Dialeads detects the voicemail beep and drops a pre-recorded personalized message instantly — with the property address, the prospect's name, and a specific call to action. Move to the next lead immediately. 52 minutes of wasted time becomes 3 minutes.",
  },
  {
    num: "03",
    title: "Prospects Do Not Call Back From Generic Voicemails",
    body: '"Hi, this is [name], I am interested in buying properties in your area, please call me back at [number]." Every wholesaler in the market leaves this exact voicemail. Sellers delete it without listening to the end. Callback rates on generic voicemails are under 2%.',
    fix: "AI dynamic voicemail drops personalized with the prospect's name, the specific property address, a relevant detail about the property, and a clear next step. Callbacks increase 3x compared to generic mass-recorded messages because prospects believe you specifically called them — not blasted a list.",
  },
  {
    num: "04",
    title: "Leads Say 'Not Right Now' and Fall Through the Cracks Forever",
    body: 'A seller says "we are not ready to sell for another 6 months." You note it in a spreadsheet. Six months later the note is buried, the spreadsheet is a mess, and the seller listed with someone else because nobody followed up. This happens dozens of times per month.',
    fix: "1-click disposition schedules an automatic callback for any future date. Dialeads fires a reminder SMS to the seller 1 week before the scheduled callback date — keeping your name top of mind. The lead never falls through the cracks again.",
  },
  {
    num: "05",
    title: "New Leads Go Cold in Under 5 Minutes If You Do Not Call Immediately",
    body: "Internet leads — buyer inquiries, seller form submissions, rental applications — have a 5-minute window. After 5 minutes, the prospect has already filled out 3 more competitor forms and moved on. If you call back 2 hours later, the conversion rate drops by over 80%.",
    fix: "Speed-to-lead calling via Zapier webhook. The moment a lead submits any form — your website, Zillow, Realtor.com, BatchLeads, or any lead source — Dialeads calls them automatically within 60 seconds. You are always the first voice they hear.",
  },
];

const features = [
  {
    icon: Phone,
    title: "Power Dialer With Local Area Code Matching",
    body: "Automatically dials your lead queue with local caller ID matching on every call. Prospects in Dallas see a Dallas number. Prospects in Chicago see a Chicago number. Answer rates jump to 85%+ because prospects recognize and trust a local number.",
  },
  {
    icon: Voicemail,
    title: "1-Click Ringless Voicemail Drop — Under 2 Seconds",
    body: "When a prospect does not pick up, tap one button and a personalized pre-recorded voicemail drops instantly. Dialeads advances to the next lead automatically. No waiting. No re-recording. No wasted time. Drop 100 voicemails in the time it used to take to leave 5 manually.",
  },
  {
    icon: Gauge,
    title: "Speed-to-Lead Calling — 60 Seconds From Form to Phone",
    body: "Connect Dialeads to your lead sources via Zapier or webhook. The moment a buyer inquiry, seller form, or rental application comes in — Dialeads calls the prospect automatically within 60 seconds. No manual triggering. No delay. You are always first.",
  },
  {
    icon: MessageSquare,
    title: "Automatic SMS Follow-Up After Every Call",
    body: "The moment a call ends Dialeads fires a pre-written SMS — personalized with the prospect's name and property address. If they do not respond, a follow-up SMS goes out automatically on day 2 and day 5. Multi-touch follow-up running entirely on autopilot.",
  },
  {
    icon: Upload,
    title: "Lead List Import From Any Source",
    body: "Import leads from PropStream, BatchLeads, ListSource, DealMachine, county records, or any custom CSV. Dialeads auto-validates phone numbers, scrubs against the National DNC Registry, removes disconnected numbers, and queues leads ready to dial — in under 2 minutes per file.",
  },
  {
    icon: ClipboardCheck,
    title: "Real Estate Specific Dispositions",
    body: "One-click disposition system built for real estate workflows — Interested Seller, Not Ready Yet, Wrong Number, Listed With Agent, Already Sold, Call Back in 6 Months, Not Interested. Queue advances automatically. CRM updates in real time.",
  },
  {
    icon: Mic,
    title: "Call Recordings for Every Conversation",
    body: "Every call recorded automatically. Review any conversation to understand seller motivation, property condition details, and price expectations before writing an offer. Share recordings with your acquisition team or use them to train new callers.",
  },
  {
    icon: CalendarClock,
    title: "Callback Scheduling and Future Follow-Up Automation",
    body: 'When a seller says "call me back in 3 months" — 1-click schedules the exact callback date. Dialeads fires an automatic SMS reminder to the seller 1 week before the date. Your pipeline of future follow-ups runs automatically without a single sticky note.',
  },
];

const leadSources = [
  {
    letter: "P",
    name: "PropStream",
    badge: "Direct CSV Import",
    body: "Export your PropStream absentee owner, tax delinquent, or pre-foreclosure lists as CSV and import directly into Dialeads. Phone numbers auto-validated, DNC-scrubbed, and queued for dialing in under 2 minutes.",
  },
  {
    letter: "B",
    name: "BatchLeads",
    badge: "Mobile Number Priority",
    body: "Import BatchLeads skip-traced lists with one click. Dialeads maps phone number columns automatically, removes invalid numbers, and prioritizes mobile numbers for higher connect rates.",
  },
  {
    letter: "D",
    name: "DealMachine",
    badge: "Local CID Matching",
    body: "Export your DealMachine driving-for-dollars lists and import into Dialeads campaigns. Local caller ID matching ensures every prospect sees a familiar area code when you call.",
  },
  {
    letter: "L",
    name: "ListSource",
    badge: "Carrier Validation",
    body: "Import ListSource homeowner and absentee owner lists directly. Dialeads validates every number against carrier databases and suppresses disconnected lines before the first dial.",
  },
  {
    letter: "Z",
    name: "Zillow & Realtor",
    badge: "60-Second Speed-to-Lead",
    body: "Connect Zillow Premier Agent or Realtor.com leads via Zapier. New buyer and seller inquiries trigger automatic Dialeads calls within 60 seconds of form submission — every time.",
  },
  {
    letter: "C",
    name: "County Records",
    badge: "Data Normalization",
    body: "Import raw county assessor and tax records pulled as CSV. Dialeads normalizes phone number formats, removes duplicates, and skip-traces missing numbers via integrated data append.",
  },
];

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Import Your Lead List",
    body: "Export your leads from PropStream, BatchLeads, or any data source as a CSV. Upload to Dialeads. Phone numbers auto-validated, DNC-scrubbed, duplicates removed, local caller IDs matched. Ready to dial in under 2 minutes.",
    footer: "Automated clean & map",
  },
  {
    num: "02",
    icon: PhoneForwarded,
    title: "Start Dialing",
    body: "Click Start Campaign. Dialeads power dials your list automatically — dropping personalized voicemails on every missed call, firing SMS follow-ups after every attempt, and flagging interested sellers in your inbox for immediate callback.",
    footer: "AI voice & auto-voicemail",
  },
  {
    num: "03",
    icon: Handshake,
    title: "Close the Deal",
    body: "Interested sellers land in your Dialeads inbox with their full call history, voicemail drop receipt, and SMS thread in one view. Call them back with full context. Write the offer. Close the deal.",
    footer: "Unified lead inbox",
  },
];

const testimonials = [
  {
    quote:
      "I was manually calling 60 absentee owners per day and leaving voicemails on 45 of them. Dialeads now contacts 400 leads per day, drops personalized voicemails automatically, and texts everyone who does not pick up. My motivated seller callbacks tripled in the first week.",
    initials: "RW",
    role: "Real Estate Wholesaler",
    detail: "Austin & San Antonio Markets",
  },
  {
    quote:
      "Expired listings are won by whoever calls first. Dialeads calls every new expired listing within 60 seconds of it hitting the MLS. I have listed 3 properties in the last month that I would never have gotten if I was manually dialing.",
    initials: "RA",
    role: "Real Estate Agent",
    detail: "Top 1% Residential Producer",
  },
  {
    quote:
      "I run a small property management company. Dialeads contacts every rental inquiry automatically the moment they fill out our form. I stopped losing applicants to competitors who called back faster. Vacancy rates dropped significantly.",
    initials: "PM",
    role: "Property Manager",
    detail: "Managing 450+ Doors",
  },
  {
    quote:
      "As a land investor calling rural landowners, I was getting through maybe 50 calls per day manually. Dialeads contacts 300+ per day, drops voicemails on every miss, and texts everyone back. I closed 2 land deals last month that came from Dialeads callbacks.",
    initials: "LI",
    role: "Land Investor",
    detail: "Rural Acreage & Infill Lots",
  },
];

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "National DNC Scrub",
    body: "Every number checked before every dial. DNC contacts suppressed automatically.",
  },
  {
    icon: Clock,
    title: "Time-Zone Calling Windows",
    body: "8am-9pm local enforcement on every outbound call. No manual scheduling.",
  },
  {
    icon: Shield,
    title: "STIR/SHAKEN Attestation",
    body: "A-level caller ID verification on every call. No spam flags.",
  },
  {
    icon: BanIcon,
    title: "Instant SMS Opt-Out",
    body: "STOP replies suppressed instantly across all campaigns.",
  },
  {
    icon: FileText,
    title: "Consent Timestamp Logging",
    body: "Full auditable record of every call and SMS for legal protection.",
    wide: true,
  },
];

const starterFeatures = [
  "1,000 outbound calling minutes",
  "1-Click Voicemail Drop",
  "Basic SMS follow-up trigger",
  "Local caller ID matching",
];

const proFeatures = [
  "Unlimited calling minutes",
  "Autonomous AI Voice Agent",
  "High-Speed Power Dialer",
  "Automated multi-day SMS sequences",
  "Call recordings & real estate dispositions",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RealEstatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* ── BREADCRUMB ─────────────────────────────────────── */}
      <section className="w-full bg-white border-b border-[#e5eeff] py-2 px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#4a4455] font-medium">
            <Link href="/use-cases" className="hover:text-[#630ed4] transition-colors">
              Use Cases
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0b1c30] font-semibold">
              Real Estate Agents &amp; Wholesalers
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#e5eeff] text-[#630ed4] text-[11px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PropStream &amp; BatchLeads Sync Active</span>
          </div>
        </div>
      </section>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden py-16 lg:py-24 px-4 lg:px-8">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-[#630ed4]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-[75rem] mx-auto flex flex-col items-center text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>BUILT FOR REAL ESTATE PROFESSIONALS</span>
          </div>

          {/* Headline */}
          <h1 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[62px] lg:leading-[1.08] font-bold tracking-tight text-[#0b1c30] max-w-5xl mb-6">
            Contact 500 Real Estate Leads Per Day —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#630ed4] via-[#7C3AED] to-[#732ee4]">
              Without Picking Up the Phone Once
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-7 text-[#4a4455] max-w-3xl mb-8">
            Dialeads lets real estate agents, wholesalers, and property managers
            dial cold lists at scale, drop personalized voicemails to every
            missed call, and trigger automatic SMS follow-ups — so motivated
            sellers and buyers call you back.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-base shadow-lg shadow-[#630ed4]/25 transition-all"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/import"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0b1c30] font-semibold text-base shadow-sm transition-all"
            >
              <Upload className="w-5 h-5 text-[#7C3AED]" />
              <span>Import Your First Lead List</span>
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 text-[#4a4455] text-sm font-medium mb-12">
            <BadgeCheck className="w-4 h-4 text-[#7C3AED]" />
            <span>
              No credit card · PropStream &amp; BatchLeads compatible · Cancel
              anytime
            </span>
          </div>

          {/* Console Mockup */}
          <div className="w-full max-w-5xl bg-[#0f0f1a] text-white rounded-2xl p-4 sm:p-8 shadow-2xl relative text-left">
            {/* Top accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#630ed4] via-[#7C3AED] to-[#732ee4] rounded-t-2xl" />

            {/* Console header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 bg-white/5 px-4 py-3 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-sm tracking-wide text-white">
                  Active Campaign: Dallas-Fort Worth Absentee Owners (PropStream
                  CSV)
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/20 text-[#ede0ff] text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" />
                <span>Power Dialer Running · Speed 480 dials/hr</span>
              </div>
            </div>

            {/* Active record */}
            <div className="bg-white/[0.04] p-6 rounded-xl mb-6 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#630ed4] flex items-center justify-center text-white font-bold text-sm">
                    MS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-white">
                        Marcus Sterling
                      </h4>
                      <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-[#d3e4fe] font-medium">
                        Absentee Owner
                      </span>
                    </div>
                    <p className="text-xs text-[#d3e4fe]/70 font-mono mt-0.5">
                      Property: 742 Elm St, Dallas TX 75201 · Assessed: $385,000
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 text-xs font-semibold">
                  <Voicemail className="w-4 h-4" />
                  <span>Voicemail Dropped in 1.8s (Custom Audio Cloned)</span>
                </div>
              </div>

              {/* Transcript & SMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#0b1c30]/70 p-3 rounded-lg">
                  <div className="text-[11px] font-bold text-[#ede0ff] uppercase tracking-wider mb-1 flex items-center gap-1">
                    <AudioWaveform className="w-3.5 h-3.5" />
                    Dropped Voicemail Transcript
                  </div>
                  <p className="text-xs text-[#d3e4fe]/90 italic leading-relaxed">
                    &ldquo;Hey Marcus, saw your place over at 742 Elm St. We
                    have private capital ready for an all-cash as-is closing this
                    month. Shoot me a call or text back at this
                    number...&rdquo;
                  </p>
                </div>
                <div className="bg-[#0b1c30]/70 p-3 rounded-lg">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    SMS Sent (Triggered Instantly)
                  </div>
                  <p className="text-xs text-[#d3e4fe]/90 leading-relaxed font-mono">
                    &ldquo;Hi Marcus, following up regarding 742 Elm St in
                    Dallas. Just left you a quick message. Would you consider an
                    off-market offer? Let me know!&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Metric chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Connect Rate", value: "28.4%", color: "text-emerald-400" },
                { label: "Callbacks Today", value: "34", color: "text-white" },
                { label: "Motivated Flagged", value: "8 Deals", color: "text-[#d2bbff]" },
                { label: "DNC Scrubbed", value: "142 Suppressed", color: "text-[#d3e4fe]" },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.03] p-3 rounded-xl">
                  <span className="text-[11px] text-[#d3e4fe]/70 uppercase font-semibold block">
                    {m.label}
                  </span>
                  <span className={`font-bold text-xl ${m.color}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <section className="w-full bg-white py-12 px-4 lg:px-8 shadow-sm">
        <div className="max-w-[75rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center">
              <span className="text-4xl lg:text-5xl font-bold text-[#7C3AED] tracking-tight mb-1">
                {s.value}
              </span>
              <span className="font-semibold text-[#0b1c30] text-sm sm:text-base max-w-[200px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO THIS IS FOR ────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              BUILT FOR REAL ESTATE PROFESSIONALS
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Every Real Estate Professional Who Dials Leads Needs Dialeads
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Whether you are a solo wholesaler working a 5,000-row absentee
              owner list or a real estate team following up on buyer inquiries —
              Dialeads handles the outreach so you handle the deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((p) => (
              <div
                key={p.title}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  p.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e5eeff] text-[#7C3AED] flex items-center justify-center mb-4">
                    <p.icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-[#630ed4] tracking-wide uppercase block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-xl text-[#0b1c30] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {p.body}
                  </p>
                </div>
                <div className="mt-6 pt-3 bg-[#eff4ff] px-4 py-2 rounded-lg text-xs font-semibold text-[#0b1c30] flex items-center justify-between">
                  <span>{p.footer}</span>
                  {p.footerExtra && (
                    <span className="text-[#630ed4] font-bold">
                      {p.footerExtra}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              THE REAL ESTATE OUTREACH PROBLEM
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Why Real Estate Professionals Lose Deals to Slow and Inconsistent
              Follow-Up
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              In real estate, speed and persistence win. Most agents and
              wholesalers lose deals not because their offer is wrong but because
              their follow-up is too slow and too inconsistent.
            </p>
          </div>

          <div className="space-y-6">
            {painPoints.map((pp) => (
              <div
                key={pp.num}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col lg:flex-row gap-8 items-stretch"
              >
                <div className="lg:w-7/12 flex gap-4">
                  <span className="font-bold text-3xl lg:text-4xl text-[#630ed4]/30">
                    {pp.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-xl text-[#0b1c30] mb-2">
                      {pp.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4a4455]">
                      {pp.body}
                    </p>
                  </div>
                </div>
                <div className="lg:w-5/12 bg-[#e3e0f1]/40 p-6 rounded-xl flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#7C3AED] font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Dialeads Fix</span>
                  </div>
                  <p className="text-sm text-[#0b1c30] font-medium leading-relaxed">
                    {pp.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              PURPOSE-BUILT FOR REAL ESTATE OUTREACH
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Every Feature Built for High-Volume Real Estate Lead Follow-Up
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Dialeads is not a generic calling tool. Every feature is optimized
              for the specific workflows real estate professionals use every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#e5eeff] text-[#7C3AED] flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0b1c30] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD SOURCES ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              WORKS WITH YOUR LEAD SOURCES
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Compatible With Every Real Estate Lead Source and Data Provider
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadSources.map((s) => (
              <div
                key={s.letter}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#630ed4] font-black text-sm">
                      {s.letter}
                    </div>
                    <span className="font-bold text-xl text-[#0b1c30]">
                      {s.name}
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] font-semibold">
                    {s.badge}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#4a4455]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              SIMPLE 3-STEP WORKFLOW
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              From Lead List to Motivated Seller Conversation — in Under 15
              Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-4xl text-[#7C3AED]">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#630ed4]">
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-[#0b1c30] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a4455]">
                    {s.body}
                  </p>
                </div>
                <div className="mt-6 text-xs font-semibold text-[#630ed4] flex items-center gap-1">
                  <span>{s.footer}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              FROM REAL ESTATE PROFESSIONALS
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              What Real Estate Investors and Agents Say After 30 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="text-base leading-relaxed text-[#0b1c30] mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e5eeff]">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#0b1c30] block">
                      {t.role}
                    </span>
                    <span className="text-xs text-[#4a4455]">{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ─────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#f8f9ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              STAY COMPLIANT WHILE YOU SCALE
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              TCPA Compliance Built In — Dial With Confidence
            </h2>
            <p className="text-base leading-relaxed text-[#4a4455]">
              Real estate cold calling is one of the most heavily scrutinized
              outbound categories under TCPA. Dialeads protects your business
              automatically on every dial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceItems.map((c) => (
              <div
                key={c.title}
                className={`bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 ${
                  c.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#0b1c30] mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[#4a4455]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ────────────────────────────────────────── */}
      <section className="w-full py-16 lg:py-24 bg-[#eff4ff] px-4 lg:px-8">
        <div className="max-w-[75rem] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#e3e0f1] text-[#7C3AED] text-xs font-bold uppercase tracking-[0.08em] mb-3">
              SIMPLE PRICING
            </div>
            <h2 className="text-[28px] lg:text-[40px] leading-[32px] lg:leading-[44px] font-bold tracking-tight text-[#0b1c30] mb-3">
              Start Contacting More Leads Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-3">
                  Starter
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-bold text-5xl text-[#0b1c30]">
                    $29
                  </span>
                  <span className="text-[#4a4455] font-medium text-sm">
                    /mo
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6">
                  Solo agents and wholesalers getting started with outbound.
                  1,000 minutes, click-to-call, voicemail drop, basic SMS
                  follow-up, local caller ID matching.
                </p>
                <div className="space-y-2 mb-8">
                  {starterFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#0b1c30]"
                    >
                      <Check className="w-[18px] h-[18px] text-[#630ed4]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] font-bold text-sm transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between relative ring-2 ring-[#7C3AED]">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#7C3AED] text-white font-bold text-xs shadow">
                Most Popular for Real Estate
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-3">Pro</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-bold text-5xl text-[#7C3AED]">
                    $49
                  </span>
                  <span className="text-[#4a4455] font-medium text-sm">
                    /mo
                  </span>
                </div>
                <p className="text-sm text-[#4a4455] leading-relaxed mb-6">
                  For agents and wholesalers running high-volume cold outreach.
                  Unlimited calling, AI voice agent, power dialer, automated SMS
                  follow-up, call recordings, full disposition tracking.
                </p>
                <div className="space-y-2 mb-8">
                  {proFeatures.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2 text-sm text-[#0b1c30] font-medium"
                    >
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#7C3AED]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/pricing"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#7C3AED] hover:bg-[#630ed4] text-white font-bold text-sm shadow-md transition-all"
              >
                Start 14-Day Free Pro Trial — No Credit Card
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="w-full bg-gradient-to-br from-[#630ed4] via-[#7C3AED] to-[#43088a] text-white py-16 lg:py-24 px-4 lg:px-8 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#ede0ff] text-xs font-bold uppercase tracking-[0.08em] mb-4">
            READY TO CONTACT MORE LEADS?
          </div>
          <h2 className="text-[28px] sm:text-[40px] lg:text-5xl leading-tight font-bold tracking-tight text-white mb-4 max-w-2xl">
            Stop Leaving Money on the Table With Slow Manual Dialing
          </h2>
          <p className="text-lg leading-7 text-[#ede0ff]/90 max-w-2xl mb-8">
            Import your first lead list, configure your voicemail drop, and let
            Dialeads work your list automatically — while you focus on closing
            deals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 w-full sm:w-auto">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-[#e5eeff] text-[#0f0f1a] font-bold text-base shadow-xl transition-all"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
            <Link
              href="/import"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all"
            >
              <Upload className="w-[18px] h-[18px]" />
              <span>Import Your First Lead List</span>
            </Link>
          </div>
          <p className="text-xs text-[#ede0ff]/70">
            No credit card · PropStream &amp; BatchLeads compatible · Cancel
            anytime
          </p>
        </div>
      </section>
    </div>
  );
}
