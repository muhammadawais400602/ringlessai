import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "zoominfo",
  competitorName: "ZoomInfo",
  h1Prefix: "Xovra vs ZoomInfo —",
  h1Accent: "enterprise database, or SMB-native dialer?",
  lede:
    "ZoomInfo is the gold standard for enterprise B2B sales teams running named-account strategies. Xovra is an AI outbound dialer with built-in Google Maps lead sourcing, priced per minute. If your ICP sits under 50 employees and your contract budget is uncomfortable above $15k/yr, read on.",
  verdictPickCompetitor:
    "Your ICP is 500+ employee enterprise accounts, ACV exceeds $50k, and your ops team runs on Bombora intent + Salesforce.",
  verdictPickXovra:
    "Your ICP is SMBs on Google Maps, you want Google Ads intent without a $15k/yr contract, and you need an AI voice agent included.",
  trustStrip: ["Honest wins and losses", "Contract ranges verified", "Updated quarterly"],
  xovraBadge: "No annual contract",
  pickCompetitorBullets: [
    "Your ICP is enterprise (500+ employees), SaaS or regulated industries.",
    "You're running a named-account strategy (AEs on 50 named logos each).",
    "You need Bombora-style intent data from third-party aggregators.",
    "Average contract value is >$50k and the $15k+/yr contract is a rounding error.",
    "Your sales ops team has the ZoomInfo workflow baked in.",
  ],
  pickXovraBullets: [
    "Your ICP is SMB on Google Maps.",
    "You dial high volume (tens of thousands of minutes per month).",
    "You want Google Ads intent (not generic aggregated intent).",
    "You want per-minute pricing with no annual contract.",
    "You want an AI voice agent to run qualification, not just click-to-dial.",
  ],
  tableRows: [
    { label: "Category", competitor: "Enterprise B2B database + workflow suite", xovra: "AI outbound dialer with built-in sourcing" },
    { label: "Pricing model", competitor: "Annual contract, per-seat tiers", xovra: "Per-minute, pay as you go" },
    { label: "Starting price", competitor: "~$15k/yr minimum contract", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Data source", competitor: "Licensed + web-crawled, enriched", xovra: "Live Google Maps + website enrichment" },
    { label: "SMB coverage", competitor: "Thin", xovra: "Native" },
    { label: "Enterprise coverage", competitor: "Strong (industry standard)", xovra: "Weak" },
    { label: "Intent data", competitor: "Bombora-powered topic signals", xovra: "Google Ads intent (tags / ATC / live SERP)" },
    { label: "Org chart / hierarchy", competitor: true, xovra: false },
    { label: "Email delivery", competitor: "Via licensed waterfall", xovra: "From each business's own site" },
    { label: "AI voice agent", competitor: false, xovra: "$0.06/min multi-turn qualification" },
    { label: "Live call transfers", competitor: "Click-to-dial handoff", xovra: "AI → human with context screen pop" },
    { label: "Auto appointment booking", competitor: false, xovra: true },
    { label: "CRM sync", competitor: "Deep, industry-standard", xovra: "HubSpot, Close, GoHighLevel, Salesforce" },
    { label: "Contract", competitor: "Annual minimum", xovra: "None on PAYG" },
    { label: "Cancellation", competitor: "End of annual term", xovra: "Anytime" },
  ],
  competitorWins: [
    {
      badge: "Enterprise",
      title: "Enterprise coverage",
      body: "ZoomInfo is the industry standard for a reason. If you're targeting Fortune 1000 or large SaaS, their licensed database is the deepest in the market. Xovra isn't playing in this category.",
    },
    {
      badge: "Intent breadth",
      title: "Topic intent data",
      body: "ZoomInfo surfaces aggregated intent from Bombora and their own content network — topic signals no Google Maps scrape can produce. For enterprise category research, ZoomInfo is defensible.",
    },
    {
      badge: "Ecosystem",
      title: "Workflow integration",
      body: "ZoomInfo ships deep integrations with Salesforce, Outreach, Salesloft, and the rest of the enterprise sales stack. If your ops team runs on those tools, ZoomInfo slots in.",
    },
  ],
  xovraWins: [
    {
      badge: "SMB economics",
      title: "Minutes, not seats",
      body: "A 5-SDR team dialing SMBs doesn't need $15k/yr of enterprise data — it needs cheap connected minutes. Xovra at $0.06/min AI runs about $3,000 for 50,000 minutes monthly.",
    },
    {
      badge: "Google Ads intent",
      title: "10× stronger SMB signal",
      body: "Bombora intent is aggregated topic interest at the company level. Knowing a local dentist is actively running Google Ads today is a 10× stronger signal for an agency pitch — and it's what Xovra proves.",
    },
    {
      badge: "Flexibility",
      title: "No annual commitment",
      body: "You can turn Xovra on this week and off next month with no penalty. ZoomInfo's contract shape makes 'try it for a month' structurally impossible.",
    },
    {
      badge: "AI dialer included",
      title: "Not a bolt-on",
      body: "ZoomInfo's dialer is a basic click-to-call. Xovra's AI voice agent qualifies and transfers inside the same per-minute price.",
    },
  ],
  pricingRows: [
    { label: "Starting commitment", competitor: "$15k+ / yr annual", xovra: "$0 on PAYG" },
    { label: "Entry per-seat cost", competitor: "Typically $10–14k / seat / yr", xovra: "None" },
    { label: "Pure usage billing", competitor: "No", xovra: "Yes ($0.06 / $0.002 per min)" },
    { label: "Contract flexibility", competitor: "Annual, often 2-year terms", xovra: "Monthly, cancel anytime" },
    { label: "SMB-sized budget option", competitor: "Rarely under $10k / yr", xovra: "Typical PAYG customer: $1–3k / mo" },
  ],
  pricingDisclaimer:
    "Illustrative ZoomInfo pricing reflects published industry ranges. Actual contracts vary by seat count, data licenses, and negotiation. Verify via ZoomInfo sales before purchasing.",
  migrationQuote:
    "Keep ZoomInfo if your Fortune 1000 motion depends on it. For your SMB funnel, pilot Xovra for 60 days — one vertical, one market, all SMB outbound through Xovra. Measure cost per qualified meeting against the ZoomInfo seats allocated to SMB. Most hybrid teams end up reassigning 50–70% of their ZoomInfo SMB seats to enterprise and letting Xovra carry SMB entirely.",
  migrationCtaLabel: "Start a 60-day pilot",
  faqs: [
    {
      q: "Is Xovra cheaper than ZoomInfo?",
      a: "For SMB outbound at moderate volume, dramatically. $0.06/min at 50k minutes/mo is about $3k vs ZoomInfo's $15k+/yr contract. For enterprise sales motions that justify the contract, ZoomInfo's per-record cost on named accounts can beat Xovra.",
    },
    {
      q: "Does ZoomInfo have an AI voice agent?",
      a: "Not at the level Xovra's managed tier provides. ZoomInfo's dialing is click-to-call with recording. There's no multi-turn AI voice agent that qualifies and transfers live.",
    },
    {
      q: "Can I cancel ZoomInfo mid-contract?",
      a: "Generally no, their contracts are annual with minimal mid-term cancellation rights. Xovra has no contract on Pay As You Go.",
    },
    {
      q: "Which one is better for cold calling?",
      a: "For enterprise cold calling with human SDRs on named accounts, ZoomInfo + a separate dialer. For SMB cold calling at volume with an AI voice agent, Xovra end-to-end.",
    },
  ],
  related: [
    { title: "Xovra vs Apollo", sub: "Database vs live scrape, with ad-intent built in.", href: "/vs/apollo" },
    { title: "Xovra vs Retell", sub: "All-in-one vs AI voice agent SaaS.", href: "/vs/retell" },
    { title: "Xovra Pricing", sub: "Pay As You Go per minute, or Enterprise.", href: "/pricing" },
  ],
  finalCtaH2Prefix: "Skip the $15k contract.",
  finalCtaH2Accent: "Dial SMBs at $0.06/min.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs ZoomInfo | SMB Alternative Without the $15k Contract (2026)",
  "ZoomInfo is built for enterprise B2B named-account strategy. Xovra is an AI outbound dialer for SMB at $0.06/min. Here's when each wins.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
