import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "retell",
  competitorName: "Retell",
  h1Prefix: "Xovra vs Retell —",
  h1Accent: "AI voice SaaS vs end-to-end outbound engine.",
  lede:
    "Retell is an AI voice agent product you can configure and point at phone numbers. Xovra is the opinionated outbound engine: fresh Google Maps sourcing, ad-intent scoring, voice qualification, live transfers, auto booking, DNC scrubbing, and CRM sync — billed per minute. If you already have a list and a workflow, Retell might fit. If you want a dial-ready sales floor without assembling it, read on.",
  verdictPickCompetitor:
    "You already have a lead list, a qualification workflow, and a CRM pipeline — you just need the voice agent layer.",
  verdictPickXovra:
    "You want the whole outbound loop (list, dial, qualify, transfer, book, sync) running by end of week.",
  trustStrip: ["Honest wins and losses", "Per-minute rates verified", "Updated quarterly"],
  xovraBadge: "End-to-end outbound",
  pickCompetitorBullets: [
    "You bring your own leads from a CRM or existing data source.",
    "You handle qualification routing and CRM sync in your own stack.",
    "You want to configure voice agents directly and don't need sourcing.",
    "You prefer a focused AI voice SaaS without bundled sales tooling.",
    "You're willing to glue Retell to your DNC scrubber, dialer plan, and CRM webhook pipeline.",
  ],
  pickXovraBullets: [
    "You want sourcing + scoring + dialing + transfers + booking in one tool.",
    "You want the AI voice agent paired with a CRM-ready pipeline out of the box.",
    "You want ad-intent signals built into the lead feed, not something you buy separately.",
    "You want DNC + TCPA scrubbing included on every dial.",
    "You want a flat $0.06/min AI rate with no per-voice or per-LLM surcharges.",
  ],
  tableRows: [
    { label: "Category", competitor: "AI voice agent SaaS", xovra: "End-to-end AI outbound engine" },
    { label: "Pricing shape", competitor: "Per-minute (voice + LLM surcharges)", xovra: "Flat $0.06/min AI, $0.002/min raw" },
    { label: "Typical AI minute", competitor: "~$0.07–$0.17/min depending on voice/LLM", xovra: "$0.06/min" },
    { label: "Lead sourcing", competitor: "Bring your own", xovra: "Google Maps + enrichment built in" },
    { label: "Ad-intent scoring", competitor: false, xovra: "Tags + ATC + live SERP" },
    { label: "Qualification rubric UI", competitor: "Agent config", xovra: "Rubric-based, operator-friendly" },
    { label: "Live call transfers", competitor: true, xovra: "AI → human with context screen pop" },
    { label: "Auto appointment booking", competitor: "Integration-dependent", xovra: "Native, on your calendar" },
    { label: "CRM sync", competitor: "Via webhooks or integrations", xovra: "Two-way: HubSpot / Close / GoHighLevel / Salesforce" },
    { label: "DNC + TCPA scrubbing", competitor: "You manage it", xovra: "Built-in" },
    { label: "STIR/SHAKEN", competitor: "Via your telephony provider", xovra: "Per-pool attestation" },
    { label: "Observability", competitor: "Agent-centric logs", xovra: "Sales-ops dashboards" },
    { label: "Contract", competitor: "Usage-based", xovra: "No contract outside Enterprise" },
  ],
  competitorWins: [
    {
      badge: "Voice quality",
      title: "Strong voice stack",
      body: "Retell is focused on the voice-agent layer and ships with high-quality voices and responsive latency. If the voice layer is the thing you want to shop for, Retell is a credible choice.",
    },
    {
      badge: "Dev-friendly",
      title: "Clean integrations",
      body: "Clear APIs, webhook-driven event model, and well-maintained SDKs. Easy to wire into an existing sales ops stack.",
    },
    {
      badge: "Focused scope",
      title: "Voice-only clarity",
      body: "Retell doesn't try to be your CRM or your lead vendor. If you already have those solved and just need the voice agent, the focused scope is an advantage.",
    },
  ],
  xovraWins: [
    {
      badge: "Bundled stack",
      title: "Sourcing to sync",
      body: "Retell handles the voice. You handle everything else. Xovra ships the whole loop: Google Maps sourcing, ad-intent scoring, dialing, transfers, booking, DNC, and CRM sync — one bill.",
    },
    {
      badge: "Flat pricing",
      title: "No voice surcharges",
      body: "Retell's all-in per-minute depends on which voice and LLM you choose. Xovra is $0.06/min flat for AI-handled, $0.002/min flat for raw. Budget predictably.",
    },
    {
      badge: "Operator UX",
      title: "Built for sales ops",
      body: "Retell is a voice-agent product aimed at builders. Xovra is an operator product aimed at agencies and SDR teams that want outbound running without an engineering project.",
    },
    {
      badge: "Compliance",
      title: "DNC + TCPA included",
      body: "On Retell, you integrate your own DNC scrubber and log TCPA consent in your application. Xovra scrubs before every dial and logs consent per call automatically.",
    },
  ],
  pricingRows: [
    { label: "AI voice minute", competitor: "~$0.07–$0.17/min (voice + LLM)", xovra: "$0.06/min flat" },
    { label: "Raw dial (human on call)", competitor: "Telephony pass-through", xovra: "$0.002/min" },
    { label: "Lead sourcing cost", competitor: "Bring your own vendor", xovra: "Included" },
    { label: "DNC scrubbing cost", competitor: "Bring your own vendor", xovra: "Included" },
    { label: "CRM sync setup", competitor: "You build it", xovra: "Native: HubSpot / Close / GHL / Salesforce" },
    { label: "Contract", competitor: "Usage-based", xovra: "No contract outside Enterprise" },
  ],
  pricingDisclaimer:
    "Retell per-minute rates vary by voice selection and LLM choice. These ranges are illustrative; verify current pricing on retellai.com.",
  migrationQuote:
    "If you already have a list, a CRM pipeline, and a DNC process — and you just want the voice agent layer — Retell is a solid pick. If you want outbound live this week with the full loop running, Xovra is designed for that. Try a two-week A/B: same vertical, same market, Retell for your existing list, Xovra for a scraped-and-scored list. Measure cost per qualified meeting end-to-end, not just per minute.",
  migrationCtaLabel: "Run a 2-week A/B",
  faqs: [
    {
      q: "Is Retell cheaper than Xovra?",
      a: "On the voice minute itself, often similar. Once you add sourcing, CRM sync, and DNC scrubbing — each billed separately on a Retell deployment — Xovra's bundled price usually comes out ahead unless you already have that infrastructure.",
    },
    {
      q: "Does Xovra let me pick my voice?",
      a: "Pay As You Go ships with a production voice stack we've tuned for connect rate. Enterprise customers can pin a specific voice.",
    },
    {
      q: "Can I use Xovra as just a voice agent, like Retell?",
      a: "Xovra's Pay As You Go bundles sourcing with the dialer. For voice-only workloads with your own list, contact us about an Enterprise-only voice configuration.",
    },
    {
      q: "What about compliance — who handles DNC and TCPA?",
      a: "On Retell, your application handles DNC scrubbing and TCPA consent logging. On Xovra, both are built in: federal and state DNC scrub before every dial, TCPA consent logged per call, STIR/SHAKEN per pool.",
    },
  ],
  related: [
    { title: "Xovra vs Vapi", sub: "All-in-one dialer vs developer platform.", href: "/vs/vapi" },
    { title: "Xovra vs Bland", sub: "Usage-based dialer vs enterprise AI voice.", href: "/vs/bland" },
    { title: "Xovra vs Air.ai", sub: "Marketing-first vs product-first AI outbound.", href: "/vs/air-ai" },
  ],
  finalCtaH2Prefix: "Beyond the voice layer.",
  finalCtaH2Accent: "Ship the whole outbound loop.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs Retell | AI Voice SaaS vs End-to-End Outbound (2026)",
  "Retell is an AI voice agent product. Xovra bundles sourcing, dialing, transfers, booking, CRM sync, and DNC at $0.06/min. Here's how to choose.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
