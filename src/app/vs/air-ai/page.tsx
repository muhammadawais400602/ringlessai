import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "air-ai",
  competitorName: "Air.ai",
  h1Prefix: "Xovra vs Air.ai —",
  h1Accent: "marketing-first pitch, or product-first dialer?",
  lede:
    "Air.ai markets itself hard as a 'replace your sales team' AI voice product. Xovra is an AI outbound dialer with per-minute transparent pricing, sourcing built in, and no annual contract. If you're shopping on positioning, you'll see Air.ai everywhere. If you're shopping on unit economics and bundle, Xovra usually wins — but here's the honest comparison.",
  verdictPickCompetitor:
    "You want a full-service, white-glove relationship with an enterprise AE walking you through onboarding.",
  verdictPickXovra:
    "You want a product you can sign up for, rate-card you can read, and campaigns you can launch this week.",
  trustStrip: ["Honest wins and losses", "Positioning compared fairly", "Updated quarterly"],
  xovraBadge: "Transparent, sign up and go",
  pickCompetitorBullets: [
    "You want a high-touch AE relationship through onboarding.",
    "You prefer sales-led buying over self-serve.",
    "Your buying budget is set and procurement is comfortable with annual contracts.",
    "You're buying the positioning — 'replace your sales team' — and want the vendor pitch energy.",
    "You have internal resources to manage the relationship long-term.",
  ],
  pickXovraBullets: [
    "You want a transparent rate card you can read before you talk to sales.",
    "You want sourcing + dialing + CRM sync + DNC bundled, not pitched as upsells.",
    "You want to launch an AI outbound campaign without a 60-day procurement cycle.",
    "You want the option to scale down or pause without penalty.",
    "You value product substance over marketing production value.",
  ],
  tableRows: [
    { label: "Category", competitor: "AI voice, enterprise sales-led", xovra: "Usage-based AI dialer end-to-end" },
    { label: "Pricing transparency", competitor: "Custom-quoted, not published", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Procurement cycle", competitor: "Typical enterprise (30–90 days)", xovra: "Start today, pay as you go" },
    { label: "Lead sourcing", competitor: "Bring your own", xovra: "Google Maps + enrichment built in" },
    { label: "Ad-intent scoring", competitor: false, xovra: "3 sources (tags / ATC / live SERP)" },
    { label: "AI voice agent", competitor: true, xovra: "Multi-turn, $0.06/min" },
    { label: "Live call transfers", competitor: true, xovra: "AI → human with context screen pop" },
    { label: "Auto appointment booking", competitor: "Depends on package", xovra: "Native, on your calendar" },
    { label: "CRM sync", competitor: "Via integrations", xovra: "Two-way: HubSpot / Close / GHL / Salesforce" },
    { label: "DNC + TCPA scrubbing", competitor: "Enterprise-configurable", xovra: "Built-in" },
    { label: "Observability", competitor: "Enterprise dashboards", xovra: "Operator-facing analytics" },
    { label: "Contract minimum", competitor: "Typically annual commitment", xovra: "No minimum on PAYG" },
    { label: "Self-serve signup", competitor: "Sales-led only", xovra: "Yes on Pay As You Go" },
  ],
  competitorWins: [
    {
      badge: "Positioning",
      title: "Strong narrative",
      body: "Air.ai has invested heavily in marketing and category positioning. If you're building internal consensus and need bold positioning to sell the project upward, that narrative is real leverage.",
    },
    {
      badge: "White glove",
      title: "Full-service motion",
      body: "Enterprise AE, onboarding support, implementation help. If your organization expects that level of hand-holding, Air.ai's go-to-market matches.",
    },
    {
      badge: "Demo quality",
      title: "Polished sales motion",
      body: "The sales process is well-oiled. If buying through a vendor who takes you seriously matters to you, Air.ai's go-to-market reflects that.",
    },
  ],
  xovraWins: [
    {
      badge: "Honest rate card",
      title: "No RFP to learn the price",
      body: "Air.ai's pricing is quote-based. Xovra's is on the pricing page: $0.06/min AI, $0.002/min raw. You can budget before you talk to sales.",
    },
    {
      badge: "Product over pitch",
      title: "Substance, not slides",
      body: "Xovra invests in the product: sourcing, scoring, dialing, transfers, booking, CRM sync, DNC scrubbing — all in the per-minute rate. You pay for what ships, not what's promised in a demo.",
    },
    {
      badge: "Launch speed",
      title: "Dial this week",
      body: "Air.ai onboarding is a project. Xovra Pay As You Go is: sign up, configure your rubric, dial. Same day.",
    },
    {
      badge: "No lock-in",
      title: "Cancel anytime",
      body: "Air.ai commits you long. Xovra PAYG lets you pause between campaigns and scale freely. Only sign an annual contract (Enterprise) when it makes economic sense to you.",
    },
  ],
  pricingRows: [
    { label: "Pricing transparency", competitor: "Custom quote required", xovra: "Published: $0.06/min AI, $0.002/min raw" },
    { label: "Contract length", competitor: "Typically annual", xovra: "None on PAYG" },
    { label: "Minimum spend", competitor: "Yes, often significant", xovra: "None on PAYG" },
    { label: "Lead sourcing", competitor: "Not included", xovra: "Included" },
    { label: "CRM sync setup", competitor: "Integration project", xovra: "Native" },
    { label: "Time to first dial", competitor: "Weeks to months", xovra: "Hours" },
  ],
  pricingDisclaimer:
    "Air.ai pricing is sales-led and varies substantially. Illustrative shape reflects typical enterprise AI-voice vendor contracts in 2026.",
  migrationQuote:
    "If your buying motion values a sales-led white-glove experience and you have budget for an annual contract, Air.ai is a fit. If you want to validate AI outbound this quarter with transparent pricing and no commitment, run a 30-day Xovra pilot. Compare cost per qualified meeting end-to-end. If Xovra wins, you've saved the procurement cycle. If it doesn't, you walk away with no penalty.",
  migrationCtaLabel: "Start a 30-day pilot",
  faqs: [
    {
      q: "Is Air.ai better than Xovra?",
      a: "They're different go-to-market shapes. Air.ai is sales-led with custom contracts. Xovra is self-serve with transparent per-minute pricing. For the same AI outbound outcome, Xovra usually costs less and launches faster.",
    },
    {
      q: "How much does Air.ai cost?",
      a: "Air.ai doesn't publish per-minute rates publicly — their model is custom enterprise contracts. Xovra publishes rates: $0.06/min AI, $0.002/min raw, with sourcing and CRM sync included.",
    },
    {
      q: "Can I try Air.ai before signing a contract?",
      a: "Pilot availability is sales-rep-dependent and typically scoped tightly. Xovra Pay As You Go is self-serve with no contract — you can pilot at full capability.",
    },
    {
      q: "Does Xovra have the enterprise positioning Air.ai has?",
      a: "Xovra Enterprise ships named CSM, custom SLAs, per-pool STIR/SHAKEN, and volume rates once you cross six-figure monthly minutes. We just don't lead with the enterprise pitch — we let the product earn it.",
    },
  ],
  related: [
    { title: "Xovra vs Vapi", sub: "All-in-one dialer vs developer platform.", href: "/vs/vapi" },
    { title: "Xovra vs Retell", sub: "AI voice SaaS vs end-to-end outbound.", href: "/vs/retell" },
    { title: "Xovra vs Bland", sub: "Usage-based dialer vs enterprise AI voice.", href: "/vs/bland" },
  ],
  finalCtaH2Prefix: "Skip the pitch deck.",
  finalCtaH2Accent: "Read the rate card.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs Air.ai | Transparent Pricing vs Sales-Led Enterprise (2026)",
  "Air.ai is sales-led with custom contracts. Xovra is $0.06/min AI, $0.002/min raw, self-serve, no annual commit. Here's an honest comparison.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
