import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "d7-leadfinder",
  competitorName: "D7 Lead Finder",
  h1Prefix: "Xovra vs D7 Lead Finder —",
  h1Accent: "scraper, or scraper plus AI dialer?",
  lede:
    "D7 Lead Finder is a closed-source Google Maps scraper at $29–$97/month. Xovra is an AI outbound dialer with lead sourcing, ad-intent scoring, CRM sync, and voice-AI qualification bundled in. Different scope, different price — here's when each one fits.",
  verdictPickCompetitor:
    "You only need a point-and-click scraped CSV at $29–$97/mo and already own a separate dialer and CRM uploader.",
  verdictPickXovra:
    "You want sourcing, ad-intent scoring, two-way CRM sync, and AI voice qualification bundled in — not five separate tools.",
  trustStrip: ["Honest wins and losses", "D7 tiers verified", "Updated quarterly"],
  xovraBadge: "Sourcing + AI dialer",
  pickCompetitorBullets: [
    "You just need a scraped list of businesses and nothing else.",
    "You already have a dialer, a CRM, and a workflow for cold outreach.",
    "You want a point-and-click SaaS tool with no CLI, no API key setup.",
    "$29–$97/month is the right shape for your operating costs.",
    "You don't care about ad-intent scoring, lead scoring, or AI qualification.",
  ],
  pickXovraBullets: [
    "You want sourcing + scoring + dialing in one tool.",
    "You want the AI voice agent to qualify before your reps talk.",
    "You want ad-intent proof (Google Ads tags / ATC / SERP) before dialing.",
    "You'd rather pay per connected minute than a fixed monthly scraper fee.",
    "You dial enough that D7's scrape output is just the first 10% of the work.",
  ],
  tableRows: [
    { label: "Category", competitor: "Google Maps scraper SaaS", xovra: "AI dialer with sourcing bundled in" },
    { label: "Pricing", competitor: "$29–$97/mo subscription", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Source code", competitor: "Closed", xovra: "Managed cloud" },
    { label: "Google Maps scrape", competitor: true, xovra: true },
    { label: "Website email enrichment", competitor: true, xovra: true },
    { label: "Tech stack detection", competitor: "Limited", xovra: "Yes" },
    { label: "Social presence signals", competitor: "Partial", xovra: "Instagram / Facebook / TikTok + followers" },
    { label: "Ad-intent scoring", competitor: false, xovra: "Tags + ATC + live SERP" },
    { label: "0–100 lead fit score", competitor: false, xovra: true },
    { label: "Batch mode (multi-niche YAML)", competitor: "Limited", xovra: "Yes" },
    { label: "CRM sync", competitor: "CSV export", xovra: "Two-way: HubSpot, Close, GoHighLevel, Salesforce" },
    { label: "DNC + TCPA scrubbing", competitor: false, xovra: true },
    { label: "AI voice agent (outbound)", competitor: false, xovra: "$0.06/min, multi-turn" },
    { label: "Live call transfers", competitor: false, xovra: "AI → human with screen pop" },
    { label: "Auto appointment booking", competitor: false, xovra: true },
    { label: "ToS exposure", competitor: "Google Maps ToS", xovra: "Google Maps ToS, documented" },
  ],
  competitorWins: [
    {
      badge: "Pure scraping",
      title: "Simplicity and price",
      body: "If what you need is a scraped Google Maps list and nothing more, D7 at $29/mo is cheaper than running Xovra's managed tier. There's no CLI, no setup, no Python environment.",
    },
    {
      badge: "Zero CLI",
      title: "Point-and-click UX",
      body: "Non-technical operators can use D7 without touching a terminal. Xovra's workflow is designed for teams running at volume.",
    },
    {
      badge: "Flat billing",
      title: "Fixed monthly cost",
      body: "D7 bills a flat subscription. If you prefer predictable costs over usage-based billing, that shape matches.",
    },
  ],
  xovraWins: [
    {
      badge: "All-in-one",
      title: "Scraper + dialer in one",
      body: "D7 gives you a list. Xovra gives you a list and dials it and qualifies it and books the meeting. Buying them separately costs more and integrates worse.",
    },
    {
      badge: "Ad-intent",
      title: "Proof they buy leads",
      body: "D7 tells you where a business is. Xovra tells you whether they currently buy leads via three independent Google Ads signals.",
    },
    {
      badge: "Two-way sync",
      title: "No manual CSV upload",
      body: "D7 ships CSVs. Xovra pushes qualified leads, transcripts, and outcomes into HubSpot, Close, GoHighLevel, and Salesforce automatically.",
    },
    {
      badge: "Compliance",
      title: "DNC + TCPA built in",
      body: "If you dial D7 output, you're responsible for scrubbing against federal and state DNC lists and logging TCPA consent per call. Xovra does this automatically.",
    },
  ],
  pricingRows: [
    { label: "Entry tier", competitor: "$29 / mo", xovra: "No base fee" },
    { label: "Mid tier", competitor: "~$67 / mo", xovra: "Same PAYG, scales by usage" },
    { label: "Top tier", competitor: "~$97 / mo", xovra: "Same PAYG, scales by usage" },
    { label: "Dialer included", competitor: "No", xovra: "$0.06 / min AI, $0.002 / min raw" },
    { label: "CRM sync included", competitor: "CSV only", xovra: "Yes, two-way" },
    { label: "Compliance tooling", competitor: "No", xovra: "Yes" },
  ],
  pricingDisclaimer:
    "Illustrative D7 Lead Finder pricing reflects public subscription tiers and may change. Verify on D7's live site before purchasing.",
  migrationQuote:
    "If your monthly dialing is under 1,000 connected minutes and you already own a dialer, D7 + your existing stack is cheaper. If you're dialing more than that, or you want the AI voice agent to do the first-dial qualification, Xovra almost always costs less once you add up D7 + a separate dialer + a CRM uploader.",
  migrationCtaLabel: "Compare for your volume",
  faqs: [
    {
      q: "Is D7 Lead Finder legit?",
      a: "Yes, it's a closed-source commercial Google Maps scraper that's been around for years. Same ToS footing as any other scraper, Xovra included.",
    },
    {
      q: "Does D7 have an AI dialer?",
      a: "No. It outputs lead lists. Dialing happens in whatever tool you point at the CSV.",
    },
    {
      q: "Can I use Xovra just for sourcing without the dialer?",
      a: "Xovra's Pay As You Go managed cloud includes sourcing + the AI dialer in one subscription. If you only need sourcing, contact us for a sourcing-only arrangement on Enterprise.",
    },
    {
      q: "Is Xovra cheaper than D7 for pure scraping?",
      a: "If you're only scraping and never dialing, D7 at $29/mo can be cheaper. Once you add a dialer and CRM uploader on top, Xovra comes out ahead.",
    },
  ],
  related: [
    { title: "Xovra vs Apollo", sub: "Database vs live scrape, with ad-intent built in.", href: "/vs/apollo" },
    { title: "Xovra vs Vapi", sub: "All-in-one dialer vs developer AI voice platform.", href: "/vs/vapi" },
    { title: "Xovra Pricing", sub: "Pay As You Go per minute, or Enterprise.", href: "/pricing" },
  ],
  finalCtaH2Prefix: "Stop shuttling CSVs.",
  finalCtaH2Accent: "Source and dial in one place.",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs D7 Lead Finder | Scraper vs AI Dialer + Scraper (2026)",
  "D7 is a closed-source Google Maps scraper at $29–$97/mo. Xovra is a per-minute AI outbound dialer with sourcing + scoring + CRM sync included.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
