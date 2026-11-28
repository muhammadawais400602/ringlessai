import VsPageLayout, { buildMetadata, type VsPageContent } from "@/components/vs/VsPageLayout";

const content: VsPageContent = {
  slug: "apollo",
  competitorName: "Apollo",
  h1Prefix: "Xovra vs Apollo —",
  h1Accent: "pick the one that fits your ICP.",
  lede:
    "Apollo is a licensed B2B database with sequencing and a basic dialer. Xovra is an AI outbound dialer that sources its own leads from Google Maps and charges by the minute. Different categories, different buyers, and the right call depends on whether you dial SMBs or enterprise accounts.",
  verdictPickCompetitor:
    "Your ICP is B2B SaaS or mid-market enterprise, and you need org charts, funding signals, and licensed multi-touch sequences.",
  verdictPickXovra:
    "Your ICP is SMBs on Google Maps, you want ad-intent proof before dialing, and you'd rather pay $0.06/min AI-handled than $79/seat/mo.",
  trustStrip: ["Honest wins and losses", "Apollo pricing verified", "Updated quarterly"],
  xovraBadge: "Recommended for SMB outbound",
  pickCompetitorBullets: [
    "Your ICP is B2B SaaS buyers or mid-market enterprise.",
    "You need org-chart data, employee counts, funding signals.",
    "Your compliance team requires contractually licensed data.",
    "You run multi-touch email + LinkedIn + call sequences on licensed records.",
    "Per-seat pricing is fine because your team is ≤10 reps and stable.",
  ],
  pickXovraBullets: [
    "Your ICP is SMBs on Google Maps (local services, agencies, lead-gen clients).",
    "You want ad-intent proof (Google Ads tags / ATC / SERP) before you dial.",
    "You want an AI voice agent that qualifies live or transfers to a human.",
    "You want per-minute pricing with no per-seat charge.",
    "You'd rather pay $0.06 per connected minute than $79 per seat per month.",
  ],
  tableRows: [
    { label: "Category", competitor: "B2B contact database + sequencing", xovra: "AI outbound dialer with built-in sourcing" },
    { label: "Pricing model", competitor: "Per-seat, monthly or annual", xovra: "Per-minute, pay as you go" },
    { label: "Starting price", competitor: "Free (10k credits), Basic ~$49/user/mo", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Data source", competitor: "Licensed B2B database (260M+ contacts)", xovra: "Live Google Maps scrape, enriched per-run" },
    { label: "Data freshness", competitor: "Quarterly refreshes, cached records", xovra: "Live, scraped the day you run it" },
    { label: "SMB coverage", competitor: "Partial, patchy outside US", xovra: "Native wherever Google Maps covers" },
    { label: "Enterprise coverage", competitor: "Strong", xovra: "Weak — not built for named accounts" },
    { label: "Email on record", competitor: "Licensed database", xovra: "Extracted from business's website" },
    { label: "Ad-intent signal", competitor: false, xovra: "3 sources (tags / ATC / live SERP)" },
    { label: "Org-chart / hierarchy", competitor: true, xovra: false },
    { label: "Sequencing (email + LinkedIn)", competitor: true, xovra: "Call only (for now)" },
    { label: "AI voice agent (outbound)", competitor: "Click-to-call, no AI voice", xovra: "Multi-turn qualification at $0.06/min" },
    { label: "Live call transfers", competitor: "Click-to-call handoff", xovra: "AI → human with context screen pop" },
    { label: "Auto appointment booking", competitor: false, xovra: true },
    { label: "CRM sync", competitor: "HubSpot, Salesforce, native", xovra: "HubSpot, Close, GoHighLevel, Salesforce" },
    { label: "Contract", competitor: "Monthly or annual", xovra: "None on PAYG, annual on Enterprise" },
  ],
  competitorWins: [
    {
      badge: "Enterprise",
      title: "Enterprise targeting",
      body: "Apollo's database is the strongest for companies 500+ employees. If your pitch requires a named account list with the CRO's email and the VP of Engineering's LinkedIn, Apollo pulls it reliably. Xovra can't do this — Google Maps doesn't publish that data.",
    },
    {
      badge: "Hierarchy",
      title: "Org-chart data",
      body: "Who-reports-to-whom is baked into Apollo's licensed data. Sequencing tools inside Apollo use it to ladder up from SDR to decision-maker. Xovra has no equivalent.",
    },
    {
      badge: "Licensing",
      title: "Compliance posture",
      body: "Apollo's data is contractually licensed from source providers. Xovra scrapes Google Maps, which violates Google's ToS. Both operate legally with the output, but Apollo carries less tail risk and ships clean to a legal review.",
    },
  ],
  xovraWins: [
    {
      badge: "SMB native",
      title: "Fresh local coverage",
      body: "Apollo's SMB coverage is thin and stale — most local businesses aren't in the licensed database at useful depth. Xovra scrapes the public Google Maps result page, so coverage is wherever Maps covers (nearly everywhere).",
    },
    {
      badge: "Ad-intent proof",
      title: "Live advertiser signals",
      body: "Apollo tells you who a business is. Xovra tells you whether they currently pay for leads — via on-site Google Ads tags, Ads Transparency Center creative counts, and live SERP capture.",
    },
    {
      badge: "Per-minute",
      title: "Zero seat lock-in",
      body: "At $79/seat × 5 reps = $395/mo you've committed to Apollo whether anyone dials or not. On Xovra, 50k minutes of AI-handled calls run about $3k — you pay only for what you use.",
    },
    {
      badge: "AI voice",
      title: "Included at $0.06/min",
      body: "Apollo has click-to-dial. Xovra's managed tier includes a multi-turn AI voice agent that qualifies, transfers, and books — $0.06 per connected minute, no monthly base.",
    },
  ],
  pricingRows: [
    { label: "Free tier", competitor: "10k email credits / mo", xovra: "Trial on new accounts" },
    { label: "Entry paid tier", competitor: "Basic ~$49/user/mo", xovra: "$0.06/min AI, $0.002/min raw" },
    { label: "Scale tier", competitor: "Professional ~$79/user/mo", xovra: "Same PAYG, scales by minute" },
    { label: "Enterprise", competitor: "Organization ~$99–$149/user/mo (annual)", xovra: "Custom volume rates, annual" },
    { label: "Billing", competitor: "Per seat, per month", xovra: "Per connected minute" },
    { label: "Lock-in", competitor: "Annual contracts common", xovra: "No contract outside Enterprise" },
  ],
  pricingDisclaimer:
    "Illustrative Apollo pricing reflects public tiers and shifts periodically. Verify on apollo.io before purchasing.",
  migrationQuote:
    "If you're paying Apollo today and your SMB cold-call outcomes are tanking, run a two-week pilot. Keep your Apollo seat for enterprise accounts. Dial your SMB funnel on Xovra. Compare qualified-conversation rate at the end of two weeks — most teams see it 2–3× higher on Xovra for SMB because advertisers actually pick up.",
  migrationCtaLabel: "Start a 2-week pilot",
  faqs: [
    {
      q: "Is Apollo better than Xovra?",
      a: "For enterprise B2B sales motions targeting named accounts with licensed data, yes. For SMB outbound at high dial volume with AI qualification, Xovra is purpose-built where Apollo is adapted.",
    },
    {
      q: "How much does Apollo cost vs Xovra?",
      a: "Apollo starts free (10k credits/mo), then scales per-seat ($49–$149/user/mo). Xovra is usage-based at $0.06/min AI and $0.002/min raw dial with no seat charge.",
    },
    {
      q: "Does Apollo have an AI dialer?",
      a: "Apollo has a basic click-to-call dialer with call recording. It does not include an AI voice agent that qualifies prospects live, which is Xovra's core product.",
    },
    {
      q: "Can I use both?",
      a: "Yes. Teams with a hybrid motion keep Apollo for enterprise accounts and run Xovra for SMB cold-call volume.",
    },
  ],
  related: [
    { title: "Xovra vs ZoomInfo", sub: "SMB-native alternative without the $15k contract.", href: "/vs/zoominfo" },
    { title: "Xovra vs Vapi", sub: "All-in-one dialer vs developer AI voice platform.", href: "/vs/vapi" },
    { title: "Xovra Pricing", sub: "Pay As You Go per minute, or Enterprise.", href: "/pricing" },
  ],
  finalCtaH2Prefix: "Ready to test SMB outbound",
  finalCtaH2Accent: "at $0.06/min?",
};

export const metadata = buildMetadata(
  content,
  "Xovra vs Apollo | SMB-Native Dialer vs B2B Database (2026)",
  "Apollo is a licensed B2B database with sequencing. Xovra is a per-minute AI outbound dialer with built-in Google Maps lead sourcing. Here's when each one wins.",
);

export default function Page() {
  return <VsPageLayout c={content} />;
}
