import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "bland",
  competitorName: "Bland",
  h1Prefix: "Xovra vs Bland —",
  h1Accent: "enterprise AI voice, or usage-based dialer?",
  lede:
    "Bland is an enterprise-focused AI voice agent platform with annual contracts and custom pricing. Xovra is a usage-based AI outbound dialer with built-in lead sourcing, priced $0.06/min AI or $0.002/min raw. If you're an enterprise buying a contract and Bland's AE is on your calendar, read on. If you want to launch this week with no annual commit, Xovra is likely the fit.",
  verdictPickCompetitor:
    "You're enterprise, your procurement team wants an annual contract, and you have budget for custom onboarding.",
  verdictPickXovra:
    "You want to start dialing this week, pay per minute, and skip the procurement cycle.",
  trustStrip: ["Honest wins and losses", "Enterprise comparison grounded", "Updated quarterly"],
  xovraBadge: "No procurement cycle",
  pickCompetitorBullets: [
    "You're enterprise with named CSMs and formal onboarding processes.",
    "Your team is comfortable with annual contracts and custom quotes.",
    "You need deep custom integrations into proprietary internal systems.",
    "Procurement is willing to wait 60–90 days for a signed master agreement.",
    "You're already running six-figure monthly outbound volume with a plan for 7-figure.",
  ],
  pickXovraBullets: [
    "You want to launch an AI campaign this week, not next quarter.",
    "You want transparent per-minute pricing with no negotiation required.",
    "You want sourcing + dialing + CRM sync + DNC in one subscription.",
    "You want the option to scale down or pause without penalty.",
    "You want the Enterprise tier only when you actually hit six-figure monthly minutes.",
  ],
  tableRows: [
    { label: "Category", competitor: "Enterprise AI voice agent platform", xovra: "Usage-based AI dialer end-to-end" },
    { label: "Pricing model", competitor: "Custom contracts, often annual", xovra: "Per-minute, pay as you go" },
    { label: "Transparent rate", competitor: "Quote required", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Procurement cycle", competitor: "Typical B2B enterprise (30–90 days)", xovra: "Start today" },
    { label: "Lead sourcing", competitor: "Bring your own", xovra: "Google Maps + enrichment built in" },
    { label: "Ad-intent scoring", competitor: false, xovra: "Tags + ATC + live SERP" },
    { label: "AI voice agent", competitor: true, xovra: "Multi-turn, $0.06/min" },
    { label: "Live call transfers", competitor: true, xovra: "AI → human with context screen pop" },
    { label: "Auto appointment booking", competitor: "Depends on configuration", xovra: "Native, on your calendar" },
    { label: "CRM sync", competitor: "Via integrations", xovra: "Two-way: HubSpot / Close / GHL / Salesforce" },
    { label: "DNC + TCPA scrubbing", competitor: "Integrations or DIY", xovra: "Built-in" },
    { label: "STIR/SHAKEN", competitor: "Enterprise-configurable", xovra: "Per-pool attestation" },
    { label: "Custom SLAs", competitor: true, xovra: "Enterprise tier" },
    { label: "Contract minimum", competitor: "Annual, often 2-year terms", xovra: "No minimum on PAYG" },
    { label: "Start-to-first-dial", competitor: "Weeks to onboard", xovra: "Hours to first dial" },
  ],
  competitorWins: [
    {
      badge: "Enterprise fit",
      title: "Built for procurement",
      body: "Bland ships the enterprise packaging: named CSMs, formal onboarding, master agreements, legal review paths. If your buying process requires those, Bland is a legitimate choice.",
    },
    {
      badge: "Custom work",
      title: "Deep customization",
      body: "Enterprise contracts come with implementation engineering, custom integrations into proprietary internal systems, and tailored voice configurations. Bland has resources for that.",
    },
    {
      badge: "Named support",
      title: "Dedicated CSM",
      body: "Six-figure contracts typically come with dedicated support, which Bland provides. If your organization needs that relationship on paper, Bland's model matches.",
    },
  ],
  xovraWins: [
    {
      badge: "Transparent rate",
      title: "No RFP required",
      body: "Bland's rates are quote-based. Xovra's are on the pricing page: $0.06/min AI, $0.002/min raw. No sales cycle to learn what it costs.",
    },
    {
      badge: "Launch speed",
      title: "Dial this week",
      body: "Bland onboarding is a procurement project. Xovra Pay As You Go is sign up, configure your rubric, start dialing — same day.",
    },
    {
      badge: "Bundled sourcing",
      title: "Leads included",
      body: "Bland expects you to bring a list. Xovra sources from Google Maps, enriches from websites, and scores by ad intent before any dial — included in the per-minute rate.",
    },
    {
      badge: "No lock-in",
      title: "Scale down anytime",
      body: "Bland's enterprise contracts commit you to annual volume. Xovra lets you pause between campaigns, scale down for slow months, and scale up for busy ones with no re-contracting.",
    },
  ],
  pricingRows: [
    { label: "Transparent pricing", competitor: "Custom quote required", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Contract length", competitor: "Annual, often 2 years", xovra: "None on PAYG" },
    { label: "Volume commitment", competitor: "Yes, agreed in contract", xovra: "None on PAYG" },
    { label: "Sourcing cost", competitor: "Bring your own", xovra: "Included" },
    { label: "DNC + TCPA scrubbing", competitor: "Often separate line item", xovra: "Included" },
    { label: "Time to first dial", competitor: "Weeks to 60+ days", xovra: "Hours" },
  ],
  pricingDisclaimer:
    "Bland pricing is quote-based and varies substantially by scope and volume. Illustrative shape reflects typical enterprise AI-voice contracts in 2026.",
  migrationQuote:
    "If your buying motion requires an annual contract and formal procurement, Bland is a legitimate choice. If you want to validate AI outbound this quarter with transparent economics, run a 30-day Xovra pilot. If the numbers work, scale up — and consider Xovra Enterprise when you cross six-figure monthly minutes. If they don't, you walk away with no penalty.",
  migrationCtaLabel: "Start a 30-day pilot",
  faqs: [
    {
      q: "Is Bland better than Xovra for enterprise?",
      a: "If your procurement team requires annual contracts and named CSMs, Bland's packaging matches. For teams validating AI outbound before signing an annual contract, Xovra lets you test at scale without the commitment.",
    },
    {
      q: "How much does Bland cost?",
      a: "Bland doesn't publish per-minute rates publicly — their model is custom-quoted enterprise contracts. Xovra publishes rates: $0.06/min AI, $0.002/min raw.",
    },
    {
      q: "Can I pilot Bland for 30 days?",
      a: "Enterprise contracts typically don't accommodate 30-day pilots. Xovra Pay As You Go lets you run a 30-day pilot with full capability and no commitment.",
    },
    {
      q: "What if I hit enterprise volume on Xovra?",
      a: "At six-figure monthly minutes, Xovra Enterprise offers volume discounts, custom SLAs, named CSM, and configurable STIR/SHAKEN per pool. Same product, better unit economics.",
    },
  ],
  related: [
    { title: "Xovra vs Vapi", sub: "All-in-one dialer vs developer platform.", href: "/vs/vapi" },
    { title: "Xovra vs Retell", sub: "AI voice SaaS vs end-to-end outbound.", href: "/vs/retell" },
    { title: "Xovra vs Air.ai", sub: "Marketing-first vs product-first AI outbound.", href: "/vs/air-ai" },
  ],
  finalCtaH2Prefix: "Skip the RFP.",
  finalCtaH2Accent: "Start at $0.06/min today.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs Bland | Enterprise Contracts vs Usage-Based Dialer (2026)",
  "Bland is an enterprise AI voice platform on annual contracts. Xovra is $0.06/min AI, $0.002/min raw — no commit, no procurement cycle. Here's when each fits.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
