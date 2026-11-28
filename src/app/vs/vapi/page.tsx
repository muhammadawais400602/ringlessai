import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "vapi",
  competitorName: "Vapi",
  h1Prefix: "Xovra vs Vapi —",
  h1Accent: "all-in-one dialer, or AI voice platform?",
  lede:
    "Vapi is a developer platform for building AI voice agents. You stitch together your own LLM, TTS, telephony, scripting, CRM, and compliance stack. Xovra is the opinionated end-to-end dialer: sourcing + AI voice + transfers + booking + CRM + DNC, billed per minute. Different buyer, different build.",
  verdictPickCompetitor:
    "You have engineers who want to build a bespoke AI voice workflow and own every layer of the stack.",
  verdictPickXovra:
    "You want to launch an AI outbound campaign this week without stitching together six vendors and writing orchestration code.",
  trustStrip: ["Honest wins and losses", "Per-minute totals verified", "Updated quarterly"],
  xovraBadge: "Zero setup, dial today",
  pickCompetitorBullets: [
    "You have engineering bandwidth to wire LLM + TTS + STT + telephony yourself.",
    "You're building a voice product, not just running outbound.",
    "You want fine-grained control over prompts, model selection, and voice fine-tuning.",
    "You're OK operating a stack where the per-minute cost depends on your model/voice choices.",
    "You already have lead sourcing, CRM sync, and DNC scrubbing handled elsewhere.",
  ],
  pickXovraBullets: [
    "You want to launch outbound campaigns without writing orchestration code.",
    "You want sourcing + scoring + AI dialer + transfers + booking + CRM sync in one subscription.",
    "You want predictable per-minute pricing with no model/voice surcharges.",
    "You want DNC + TCPA scrubbing built in, not something you bolt on.",
    "You want voice qualification + live transfer to a human rep at $0.06/min total.",
  ],
  tableRows: [
    { label: "Category", competitor: "AI voice developer platform", xovra: "AI outbound dialer, end-to-end" },
    { label: "Pricing shape", competitor: "Platform fee + LLM + TTS + telephony (stacked)", xovra: "Flat $0.06/min AI, $0.002/min raw" },
    { label: "Typical all-in per-minute", competitor: "$0.10–$0.20/min once stacked", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Setup time", competitor: "Days to weeks of engineering", xovra: "Hours to go live" },
    { label: "Lead sourcing", competitor: "Bring your own", xovra: "Built-in Google Maps + enrichment" },
    { label: "Ad-intent scoring", competitor: "Bring your own", xovra: "3 sources (tags / ATC / live SERP)" },
    { label: "Qualification logic", competitor: "You write it", xovra: "Rubric-based, configurable" },
    { label: "Live call transfers", competitor: "DIY", xovra: "Built-in with context screen pop" },
    { label: "Auto appointment booking", competitor: "DIY", xovra: "Built-in" },
    { label: "CRM sync", competitor: "DIY", xovra: "HubSpot / Close / GoHighLevel / Salesforce" },
    { label: "DNC + TCPA scrubbing", competitor: "DIY", xovra: "Built-in" },
    { label: "STIR/SHAKEN", competitor: "DIY pool management", xovra: "Per-pool attestation" },
    { label: "Observability", competitor: "Developer dashboards", xovra: "Operator-facing analytics" },
    { label: "Contract", competitor: "Usage-based, pay as you go", xovra: "No contract outside Enterprise" },
  ],
  competitorWins: [
    {
      badge: "Flexibility",
      title: "Own every layer",
      body: "Vapi hands you the primitives — pick your LLM, your voice, your telephony provider, your scripting. If you want to build a voice product that goes beyond outbound, Vapi is the right abstraction level.",
    },
    {
      badge: "Model choice",
      title: "Swap LLMs freely",
      body: "Vapi lets you select from most leading LLMs and voices directly. You pay for what you pick, and you can A/B test models at the orchestration layer.",
    },
    {
      badge: "Dev ergonomics",
      title: "Strong APIs and docs",
      body: "Clean SDKs, webhook-driven event model, and solid developer experience. If you're hiring engineers to build an AI voice product, Vapi is a popular starting point.",
    },
  ],
  xovraWins: [
    {
      badge: "No stitching",
      title: "One subscription",
      body: "Vapi is a platform fee plus LLM cost plus TTS cost plus telephony. Xovra is one line item: $0.06/min AI or $0.002/min raw. No surprises when your LLM bill lands.",
    },
    {
      badge: "Launch speed",
      title: "Dial this week",
      body: "Vapi expects you to orchestrate sourcing, scoring, routing, transfers, booking, and CRM sync yourself. Xovra ships all of that. Set your rubric, point at a niche, dial.",
    },
    {
      badge: "Operator UX",
      title: "Built for sales ops",
      body: "Vapi is built for developers. Xovra is built for sales ops and agency owners who need outbound running without an engineering team.",
    },
    {
      badge: "Compliance",
      title: "DNC + TCPA included",
      body: "On Vapi you build your own DNC scrubbing and TCPA logging. On Xovra it's built in on every dial. Fewer things to get wrong.",
    },
  ],
  pricingRows: [
    { label: "Platform fee", competitor: "~$0.05/min + LLM + TTS + telephony", xovra: "None" },
    { label: "Typical all-in AI minute", competitor: "~$0.10–$0.20/min", xovra: "$0.06/min" },
    { label: "Raw dial (human on call)", competitor: "~$0.01–$0.03/min + platform", xovra: "$0.002/min" },
    { label: "Sourcing cost", competitor: "Bring your own vendor", xovra: "Included" },
    { label: "DNC scrubbing cost", competitor: "Bring your own", xovra: "Included" },
    { label: "Contract", competitor: "Usage-based", xovra: "No contract outside Enterprise" },
  ],
  pricingDisclaimer:
    "Vapi all-in per-minute depends on your chosen LLM, voice, and telephony provider. These ranges are illustrative; verify current rates on vapi.ai.",
  migrationQuote:
    "If your team has engineers and you're building a voice product, start on Vapi. If you need outbound campaigns running this week and your team sells, not ships, start on Xovra. The hybrid pattern — Vapi for custom experiences, Xovra for the sales floor — is also common.",
  migrationCtaLabel: "Compare for your use case",
  faqs: [
    {
      q: "Is Vapi cheaper than Xovra?",
      a: "On the platform fee alone, yes. But Vapi bills per minute of platform plus LLM plus TTS plus telephony — stacked, typical AI minutes run $0.10–$0.20 before you add sourcing, DNC, CRM sync. Xovra is $0.06/min flat, with sourcing + CRM + DNC bundled.",
    },
    {
      q: "Does Xovra let me pick my LLM or voice?",
      a: "Pay As You Go ships with a pre-tuned production stack. Enterprise customers can pin a specific LLM or voice as part of their custom configuration.",
    },
    {
      q: "Can I use Vapi for sourcing?",
      a: "No. Vapi handles the voice layer. Lead sourcing is your responsibility (scraper, database, or purchased list).",
    },
    {
      q: "What about compliance — who handles DNC and TCPA?",
      a: "On Vapi, your application does. On Xovra, we scrub against federal and state DNC before every dial and log TCPA consent per call. STIR/SHAKEN attestation is configured per outbound pool.",
    },
  ],
  related: [
    { title: "Xovra vs Retell", sub: "Two AI voice tools, compared on all-in cost.", href: "/vs/retell" },
    { title: "Xovra vs Bland", sub: "Enterprise AI voice vs usage-based dialer.", href: "/vs/bland" },
    { title: "Xovra vs Air.ai", sub: "Marketing-first vs product-first AI outbound.", href: "/vs/air-ai" },
  ],
  finalCtaH2Prefix: "Skip the stitching.",
  finalCtaH2Accent: "Dial at $0.06/min, all in.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs Vapi | AI Dialer vs AI Voice Platform (2026)",
  "Vapi is a developer AI voice platform ($0.10–$0.20/min stacked). Xovra is an end-to-end AI dialer at $0.06/min with sourcing + CRM + DNC bundled. Here's how to choose.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
