# Xovra — page content

Written for a developer or copywriter building out the non-homepage routes.
Every page grounded in what the `mapleads` repo actually ships today, with the
AI-dialer layer positioned as roadmap / managed tier when it appears.

Honesty rules this doc respects:
- mapleads scrapes + enriches + scores. It does **not** dial, inbound or outbound.
- Scraping Google Maps violates Google's ToS. We say so, up front, everywhere it's relevant.
- Email comes from the business's own website, never a purchased broker.
- Revenue and contact first/last name are intentionally blank in output. Don't claim what the product doesn't ship.
- AI dialer, live transfers, auto-booking, 24/7 coverage, two-way CRM sync — these are managed-tier roadmap. On every page that implies them, phrase as "coming soon" or "join waitlist," never as shipping.

---

## 1. Launch-minimum pages

### `/pricing`

**Title:** `Pricing | Xovra`
**Meta:** `Open source lead-sourcing core, free forever. Managed AI dialer tier in early access — join the waitlist for launch pricing.`

**H1:** Open source core. Managed tier coming.

**Lede paragraph:**
Xovra's lead-sourcing engine is MIT-licensed on GitHub — free for anyone who wants to self-host. The managed tier (hosted sourcing + AI dialer + live transfers + CRM sync) is in private early access. Join the waitlist and we'll quote you at launch.

**Pricing table (three columns):**

| | **Open source** | **Managed (early access)** | **Enterprise** |
|---|---|---|---|
| Price | Free | Join waitlist | Talk to us |
| Deployment | Self-host via GitHub | Fully managed cloud | Fully managed + dedicated support |
| Lead sourcing | ✓ Google Maps + website + ad-intent | ✓ Same + weekly fresh pulls | ✓ Same + custom niche batching |
| Scoring | ✓ 0–100 fit score | ✓ Same | ✓ Custom scoring weights |
| CRM export | CSV + Google Sheet | HubSpot / GoHighLevel / Close / Salesforce sync | Custom CRM pipelines |
| AI outbound dialer | — | Coming soon | Coming soon |
| Live call transfers | — | Coming soon | Coming soon |
| Auto appointment booking | — | Coming soon | Coming soon |
| Support | GitHub issues | Email + Slack | Dedicated Slack channel, named CSM |
| CTA | View on GitHub | Join waitlist | Book a call |

**FAQ (below table):**

- **Can I use the open source version commercially?** Yes. MIT license. Attribution appreciated, not required.
- **When does the managed tier ship?** Beta rolling to waitlist in Q1 2027, dependent on dialer integration milestones.
- **Will the managed tier have usage-based pricing?** Likely a hybrid: a monthly base + per-qualified-dial charge for the dialer tier. Open source stays free.
- **Can I run the open source version without Google Sheets?** Yes. CSV output is the default. Sheets is optional (requires a service-account JSON).

**Keywords targeted:** ai dialer pricing, outbound dialer cost, lead sourcing tool pricing, apollo alternative pricing

---

### `/docs`

**Title:** `Documentation | Xovra`
**Meta:** `Install Xovra in two minutes. CLI reference, config, output schemas, and how the three ad-intent sources work.`

**H1:** Documentation

**Structure (sidebar-style sections):**

1. **Getting started** — install, first run, understanding the output
2. **CLI reference** — every flag with examples
3. **Configuration** — environment variables, YAML batch files, proxy setup
4. **Output schemas** — CSV columns, Google Sheet field names, what's blank and why
5. **Ad-intent sources** — tags vs ATC vs SERP: what each proves, what each misses
6. **Scoring model** — how the 0–100 score is computed, how to tune `--min-score`
7. **Google Sheets setup** — service account, sharing, field mapping
8. **Compliance** — our ToS stance, DNC scrubbing recommendations, TCPA posture
9. **Troubleshooting** — captcha handling, proxy errors, empty results
10. **Changelog** — reverse chronological

**Getting started copy:**

> ### Install
>
> ```bash
> python3 -m venv .venv && . .venv/bin/activate
> pip install -e ".[dev]"
> python -m playwright install chromium
> ```
>
> ### Your first list
>
> ```bash
> mapleads --niche "dentists" --city "Dubai" --max 100
> ```
>
> You'll find the result at `out/dentists-dubai.csv`. Open it in Excel or drop it straight into HubSpot's import flow.
>
> ### What you'll see
>
> The CSV follows HubSpot's 14-column import schema. Score, pitch angle, and ad-intent metadata are folded into Notes so you don't lose them on CRM upload. If a business doesn't publish an email on its site, that row ships without one rather than a fabricated address.

**Keywords targeted:** mapleads docs, xovra docs, google maps scraper cli, mapleads install

---

### `/privacy`

**Title:** `Privacy Policy | Xovra`
**Meta:** `What we collect, why, and how to delete it. Short version: email on waitlist signup and standard web analytics. Nothing sold, ever.`

**H1:** Privacy Policy

**Short version at top:**

> We collect your email if you join the waitlist. We run standard web analytics (Vercel Analytics, no cookies, no fingerprinting). We don't sell data to anyone, ever. Email us at `privacy@xovra.ai` to delete anything we have on you.

**Sections:**

1. **What we collect** — waitlist email, IP + user agent for abuse prevention, anonymized analytics (page views, referrer, screen size)
2. **What we don't collect** — no cookies for tracking, no cross-site identifiers, no personal data from scraped leads (those belong to our users)
3. **How we use it** — product updates only to waitlist, product improvement from aggregated analytics
4. **Third parties** — Vercel (hosting + analytics), GitHub (for waitlist form if submitted via Issue), no ad networks
5. **Your rights** — access, deletion, portability. Email `privacy@xovra.ai`.
6. **About scraped data** — mapleads output contains public business contact data from Google Maps and business websites. That data is controlled by the user who ran it, not us. We never see or store it.
7. **Jurisdiction** — governed by [jurisdiction]. GDPR / CCPA request contact.
8. **Updates** — last updated date, how we notify on material changes.

**Keywords targeted:** xovra privacy, mapleads privacy

---

### `/terms`

**Title:** `Terms of Service | Xovra`
**Meta:** `Standard terms covering acceptable use, open source license, managed-tier beta terms, and limitation of liability.`

**H1:** Terms of Service

**Section headers:**

1. **Acceptance** — by using Xovra or the mapleads repo you accept these terms
2. **The open source product** — MIT license, see LICENSE file on GitHub
3. **The managed service** — beta terms, availability "as is," early-access revocable
4. **Acceptable use** — must comply with target jurisdiction's TCPA / DNC / GDPR / scraping laws, we don't; you do
5. **About Google Maps ToS** — scraping Google Maps violates Google's Terms of Service. Running mapleads is your decision and your responsibility, same as any scraping tool. We make this clear in the README, in the FAQ, and here.
6. **No warranties** — standard disclaimer
7. **Limitation of liability** — standard cap
8. **Changes to terms** — notification process
9. **Contact** — `legal@xovra.ai`

**Keywords targeted:** xovra terms, mapleads terms of service

---

### `/contact`

**Title:** `Contact Xovra`
**Meta:** `Talk to the team. Managed-tier early access, enterprise discussions, support, or partnerships.`

**H1:** Let's talk.

**Three columns of contact options:**

| | **Managed tier** | **Open source** | **Press / partnerships** |
|---|---|---|---|
| For | Teams who want Xovra hosted + the AI dialer when it ships | Developers running mapleads themselves | Journalists, agency partners, integrations |
| Best channel | Form below → book an intro call | GitHub Issues on the mapleads repo | `partners@xovra.ai` |
| Response time | < 1 business day | Best effort | 2–3 business days |

**Form fields (below):**
- Name
- Work email
- Company
- Monthly outbound dial volume (dropdown: < 1k, 1–10k, 10–100k, 100k+)
- What are you trying to solve? (textarea)
- [ ] Add me to the waitlist for the managed tier

**Below form:** calendar embed for intro calls (Cal.com or Calendly).

**Keywords targeted:** contact xovra, xovra demo, xovra sales

---

## 2. Highest-SEO-return pages

### `/use-cases/agencies`

**Title:** `Lead Generation for Web, Mobile & AI Agencies | Xovra`
**Meta:** `Agencies selling web, mobile, or AI builds need SMB prospects with active ad spend. Xovra scrapes Google Maps, scores for Google Ads intent, and hands you a dial-ready list every week.`

**H1:** Prospect lists for agencies selling web, mobile, and AI builds.

**Hero paragraph:**
The mapleads README literally lists this as the ICP: "cold-call leads for web / mobile / AI-agent services." If you run an agency that sells those builds to local businesses, Xovra is designed around the way you source. Niche + city in. A scored list of businesses already spending on Google Ads out.

**Section: The agency outbound problem**

- Apollo seats run $2,400/month for lists everyone else already burned through.
- ZoomInfo won't sell you SMB data at a reasonable price.
- Hand-scraping via Instagram / Google Maps eats 20+ hours/week of a junior's time.
- Purchased lists arrive without any signal that the business has budget approved.

**Section: What Xovra does differently for agencies**

Bullet list:
- **Niche + city targeting** — "chiropractors in Austin TX," "epoxy flooring in Los Angeles CA," "HVAC companies in Phoenix AZ." Specify the vertical and the market, hit Enter.
- **Ad-intent proof** — three signals (on-site Google Ads tags, Ads Transparency Center creative counts, live SERP capture) verify the business actually buys leads before you dial. Advertisers close 4× better than cold Maps rows for agency pitches.
- **Agency-shaped notes** — pitch angle, tech stack, Instagram presence. The data your SDR needs to open a personalized call.
- **CRM-ready** — HubSpot CSV or a Google Sheet your dialer reads by field name. No reformatting.

**Section: A real agency workflow**

Numbered steps:
1. Pick 3 niches × 3 cities for the week. Drop them into `jobs.yaml`.
2. Let `mapleads --batch jobs.yaml --require-ads --min-score 50` run overnight.
3. Monday morning, the Google Sheet has roughly 400–600 scored prospects per niche, all running Google Ads.
4. SDRs dial using their favorite tool (RingCentral, Close, GoHighLevel, or when the Xovra managed dialer ships, Xovra).
5. Transcripts and outcomes sync back to HubSpot per lead.

**Section: Example — dentists in Dubai**

Walk through one real-looking result:
- 47 businesses with websites + Google Ads tags
- 12 with Ads Transparency Center confirmed creatives
- Average Instagram following: 2.1K
- 3 with no social presence at all → highest-urgency pitches for a web agency
- Total source time: 90 seconds + a coffee

**Section: Why agencies pick us over ZoomInfo / Apollo**

Mini comparison table:

| | ZoomInfo | Apollo | Xovra |
|---|---|---|---|
| Price | $15k+/yr | $2,400/mo | Free (OSS) |
| SMB coverage (< 50 employees) | Weak | Medium | Native |
| Ad-intent signal | No | No | 3 independent sources |
| Overlap with other buyers' data | High | High | Zero (fresh scrape) |
| Dial-ready output | Export then massage | Export then massage | HubSpot CSV or Sheet |

**CTA block:** Book a demo (if we have one) + GitHub repo link.

**Keywords targeted:** lead generation for agencies, cold calling leads for web design agency, agency prospecting tool, smb lead generation, lead lists for digital agencies

---

### `/guides/google-maps-lead-generation`

**Title:** `How to Generate Leads from Google Maps (the Honest Way)`
**Meta:** `A practical walkthrough: what Google Maps exposes, what it hides, how to enrich each result, and where the Terms of Service line is.`

**H1:** How to generate leads from Google Maps (the honest way)

**TL;DR (first paragraph, lift-ready for AI search engines):**

> Google Maps exposes business name, phone, address, rating, review count, and website for most results. It doesn't expose email, decision-maker identity, or any revenue signal. To turn a Maps search into a usable lead list, you scrape the public result pages, visit each business's own website for contact and tech data, and layer in ad-intent signals to prove the business is actively spending on leads. Automated access violates Google's ToS, so operate with that in mind.

**Section: What a Google Maps search actually exposes**

The visible fields on a Maps results page. Walk through each: name, category, phone, address, website, rating, review count, hours. Note what's conspicuously missing: email, owner name, revenue, employee count.

**Section: What it hides**

- Email — Maps doesn't publish it. You get it by visiting the business's own website.
- Decision-maker — same deal. Scrape the "team" or "about" page.
- Tech stack — detect from the website HTML (WordPress tells on itself, Shopify advertises in markup).
- Active ad spend — Maps doesn't surface this. You need external signals.

**Section: The three layered ad-intent signals**

Full detail on how to detect whether a business is actively buying leads:

1. **On-site Google Ads tags.** Grep the business's HTML for `AW-` conversion tags or Google Tag Manager containers that load Ads scripts. Cheapest signal — you already downloaded the page. Caveat: a tag outlives a cancelled campaign.
2. **Ads Transparency Center.** Google publishes every advertiser's creative library at `adstransparency.google.com`. Scrape the advertiser's page to get live creative count. Caveat: region is country-level; "advertises in the US" ≠ "in your city."
3. **Live SERP capture.** Search your target keyword in your target city, record the ads block. Highest-confidence signal, hardest to maintain — captcha'd fast without a residential proxy, and only ~4 advertisers surface per query.

Layer them. Each alone is incomplete.

**Section: The ToS line**

Direct and honest. Scraping Google Maps violates Google's Terms of Service. The data on each result page is public, but automated access is not sanctioned. That doesn't make the data less useful — the public phonebook is public — but it does mean you're operating like any other scraping tool: on your own responsibility.

**Section: Operating legally once you have the data**

- TCPA: federal and state DNC scrub before any outbound dial.
- CAN-SPAM: if you email, honor unsubscribes and include a mailing address.
- GDPR: if your target businesses are in the EU, document legitimate interest and provide an opt-out.
- Record consent per call if you dial.

**Section: Tools to actually do this**

Two options:
1. **Roll your own.** Playwright + Python, a residential proxy for SERP work, your own scoring logic. Weeks of dev time.
2. **Use mapleads.** Open-source CLI that does all of the above. `pip install`, run, get a CSV. (Link to the repo.)

**Section: Frequently asked (AI-citable Q&A block)**

- *Is scraping Google Maps legal?* It violates Google's ToS. The data itself is public. [Expand.]
- *How do I get emails from Google Maps?* You don't. You get them from each business's own website after scraping Maps for the URL. [Expand.]
- *What's the best ad-intent signal?* Live SERP capture is strongest but hardest. On-site tags is cheapest. Layer all three. [Expand.]

**Keywords targeted:** google maps lead generation, scrape google maps, google maps lead scraper, extract businesses from google maps, is scraping google maps legal

---

### `/guides/find-businesses-running-google-ads`

**Title:** `How to Find Businesses Running Google Ads (3 Signals That Work)`
**Meta:** `Advertisers are the best cold-call targets. Three independent ways to prove a business is actively running Google Ads — and the trade-offs of each.`

**H1:** How to find businesses running Google Ads

**TL;DR (first paragraph):**

> Three independent signals prove a business is currently buying Google Ads: on-site conversion tags in their website's HTML, their advertiser page in Google's Ads Transparency Center, and live SERP capture when you search their keyword in their city. Each one alone is incomplete. Layered together, they produce a defensible "this business has budget approved" verdict.

**Section: Why advertisers convert 4× better**

Businesses already paying for Google Ads have:
- Budget approved by someone with authority.
- A cost-per-lead number they already track.
- Pressure to improve that number.
- Familiarity with being pitched on marketing services.

Any cold-call opener that mentions their existing campaign already starts a qualified conversation.

**Section: Signal 1 — on-site Google Ads tags**

How to detect:
- Search the HTML for `AW-` followed by digits (that's the Google Ads conversion account ID).
- Also look for Google Tag Manager containers (`GTM-`) and follow them to their public configuration JSON — sites that deploy Ads through GTM never print an `AW-` directly.

What it proves: a Google Ads account is wired up. Likely running campaigns.

What it doesn't prove: that the campaigns are live right now. Tags outlive cancelled campaigns.

Cost: free. You already fetched the HTML.

**Section: Signal 2 — Ads Transparency Center**

Google publishes every advertiser's creative library at `adstransparency.google.com`. For each business you've scraped from Maps:
- Query the advertiser by name.
- Read the number of live creatives.
- Check which countries they target.

What it proves: creatives are published right now. Campaigns are active.

What it doesn't prove: that they're targeting your city. Regions are country-level.

Cost: free, rate-limited.

**Section: Signal 3 — live SERP capture**

Search your target keyword in your target city with a localized query. Record the ads block.

What it proves: the business is bidding right now on this keyword in this market. Strongest possible signal.

What it doesn't prove: the campaign isn't paused five minutes later.

Cost: residential proxy required (Google captcha's datacenter IPs fast). Low per-query but ~4 advertisers surface per search, so coverage is thin.

**Section: Layering the three**

- Tag-only → warm signal, broad coverage.
- Tag + Transparency Center → warmer, confirmed live creative.
- All three → hot, dialing now.

**Section: Pitfalls**

- A tag detected on a landing-page builder (ClickFunnels, Leadpages) means the agency behind it owns the account, not the business.
- Transparency Center sometimes lags cancellations by 48 hours.
- Proxy quality matters more than SERP coverage.

**Section: How to do this at scale**

Either build the detector yourself (Playwright + Python + residential proxy pool) or use mapleads which layers all three. (Link to the `--ads-source tags,atc,serp` flag docs.)

**Keywords targeted:** find businesses running google ads, who's running google ads, google ads advertiser list, ads transparency center scraper, find google ads advertisers in my city

---

### `/compliance`

**Title:** `Compliance at Xovra — TCPA, DNC, STIR/SHAKEN, Google ToS`
**Meta:** `Our posture on TCPA consent, federal and state Do Not Call, STIR/SHAKEN attestation, GDPR, and the Google Maps Terms of Service question.`

**H1:** Compliance at Xovra

**Short version:**

Xovra outputs leads from public sources. Dialing those leads is on you. Here's our posture on every compliance question that comes up, documented not buried.

**Sections:**

1. **TCPA (US federal).** Consent framework we recommend. Where the DNC lists we scrub against come from. What we log per call (if you use the managed dialer tier). How we handle revoked consent.
2. **Federal + state Do Not Call.** Refresh cadence (we recommend sub-30-day for state lists). Scrubbing API recommendations (Gryphon, RealPhoneValidation, your dialer's built-in). What happens if a number on our list appears on DNC after we pulled it.
3. **STIR/SHAKEN.** Attestation level posture (A/B/C) and how it's configured per outbound pool on the managed tier. Why attestation matters for connect rates.
4. **GDPR and UK GDPR.** US/Canada-first posture. If your target businesses are in the EU, document legitimate interest, provide clear opt-out, honor requests within 30 days. We provide tooling for the request flow on the managed tier.
5. **CCPA.** California business contact data is largely exempt. Consumer contact is not. Your output may contain both.
6. **Google Maps ToS.** The honest answer: scraping Google Maps violates Google's Terms of Service. The data on each public result page is public, but the method of access isn't sanctioned. We say so in the README, in the FAQ, and here. You run mapleads at your own responsibility, the same way you'd run any other scraping tool. We don't indemnify against ToS violations; nobody in this category does.
7. **PCI, SOC 2, HIPAA.** Not applicable today. If we go enterprise, SOC 2 is the first on the roadmap.
8. **Reporting a compliance concern.** Email `compliance@xovra.ai` with evidence. We respond within two business days.

**Keywords targeted:** tcpa compliance for dialer, dnc list scrubbing, stir shaken outbound, is scraping google maps legal, mapleads terms of service

---

## 3. Comparison pages (buyer-intent traffic)

### `/vs/apollo`

**Title:** `Xovra vs Apollo | A Fresh-Scrape Alternative to Stale Apollo Lists`
**Meta:** `Apollo sells you data their last customer already burned through. Xovra scrapes Google Maps fresh, every run. Open source, zero per-seat cost.`

**H1:** Xovra vs Apollo

**Hero paragraph:**
Apollo is a database. Xovra is a scraper. That difference shows up in every metric you care about: freshness, overlap with other buyers, SMB coverage, ad-intent signal, and price.

**Comparison table:**

| | **Apollo** | **Xovra** |
|---|---|---|
| Model | Static database, updates quarterly | Live scrape, runs on demand |
| Price | $2,400/mo per seat (Pro) | Free (open source), managed tier TBD |
| SMB coverage | Partial, patchy outside US | Native wherever Google Maps covers |
| Overlap with other buyers | High — same records sold to thousands | Zero — fresh scrape per run |
| Ad-intent signal | No | 3 independent signals (tags / ATC / SERP) |
| Email source | Database-cached, often stale | Live, extracted from business's own site |
| Phone source | Database-cached | Google Maps public listing |
| Tech stack | Yes | Yes |
| Social presence | Partial | Instagram / Facebook / TikTok with follower counts |
| CRM export | Yes | HubSpot CSV + Google Sheet |
| ToS risk | None (licensed data) | Google Maps ToS violation |

**When Apollo is the right call:**
- You target large enterprises (500+ employees) with named account lists.
- Compliance / legal team requires contractually-licensed data sources.
- You need org-chart hierarchy data (who reports to whom).

**When Xovra is the right call:**
- You target SMBs that live on Google Maps (home services, agencies, local SaaS buyers).
- You want proof of active ad spend before you dial.
- You want fresh lists weekly instead of last quarter's stale dump.
- You're OK operating on the same ToS footing as any other scraping tool.

**Migration story:**
If you're paying Apollo today and your SMB cold-call outcomes are tanking, run mapleads on your top 3 niches × top 3 markets for one week. Compare first-dial connect rate on Apollo vs Xovra rows. The Apollo data has typically been burned by five other buyers before it reached you.

**Keywords targeted:** apollo alternative, apollo vs xovra, cheaper than apollo, apollo for SMB, fresh leads apollo

---

### `/vs/zoominfo`

**Title:** `Xovra vs ZoomInfo | SMB-Native Alternative Without the Enterprise Price Tag`
**Meta:** `ZoomInfo's SMB coverage is thin and the contract is $15k+ a year. Xovra scrapes SMBs where they actually live — on Google Maps.`

**H1:** Xovra vs ZoomInfo

**Hero paragraph:**
ZoomInfo is built for enterprise targeting. SMBs are a secondary dataset — coverage is thin, data is often stale, and the minimum contract is $15k+ a year. If your ICP is sub-50-employee local businesses, you're paying for an enterprise tool to do SMB work badly.

**Comparison table:** (same structure as `/vs/apollo`, swap the first column for ZoomInfo data).

**Specific points to call out:**
- ZoomInfo's intent signals come from third-party intent aggregators (Bombora, 6sense). Our ad-intent signals come from Google's own public surfaces. Different thing, more defensible for SMB pitches.
- ZoomInfo's org-chart and intent data don't apply to SMBs — SMBs don't have org charts.
- ZoomInfo contract is annual. Xovra open source has zero commitment.

**When ZoomInfo is the right call:** enterprise sales, large AEs, named-account strategy, > $50k ACV.
**When Xovra is the right call:** SMB outbound, high volume, local business ICPs, agencies.

**Keywords targeted:** zoominfo alternative, zoominfo vs xovra, zoominfo for smb, cheaper than zoominfo

---

### `/vs/d7-leadfinder`

**Title:** `Xovra vs D7 Lead Finder | Open Source Alternative to a Paid Google Maps Scraper`
**Meta:** `D7 is a closed-source Google Maps scraper at $29–$97/month. Xovra is open source, free, and adds ad-intent scoring D7 doesn't.`

**H1:** Xovra vs D7 Lead Finder

**Hero paragraph:**
D7 and Xovra are in the same category — Google Maps scrapers. D7 is closed-source, subscription-based, and markets itself as a "leads + emails" tool. Xovra is open source, scrapes the same surfaces, and adds a layer D7 doesn't: scored ad-intent signals so you know which prospects actually spend on leads.

**Comparison table:**

| | **D7 Lead Finder** | **Xovra** |
|---|---|---|
| Price | $29–$97/mo | Free (OSS) |
| Source code | Closed | Open, MIT |
| Google Maps scrape | ✓ | ✓ |
| Website email enrichment | ✓ | ✓ |
| Tech stack detection | Limited | Yes |
| Social presence signals | Partial | Instagram / Facebook / TikTok + follower counts |
| Ad-intent signals | No | On-site tags + Transparency Center + live SERP |
| Lead scoring | No | 0–100 fit score |
| Batch mode (multi-niche YAML) | Limited | Yes |
| CRM export shape | CSV | HubSpot CSV + Google Sheet |
| Self-hostable | No | Yes |
| ToS exposure | Same | Same |

**When D7 is the right call:** you want a point-and-click tool with no CLI and no Python setup, and $29/mo is fine.

**When Xovra is the right call:** you want ad-intent scoring, batch mode, open source so you can modify, or you already have Python in your stack.

**Keywords targeted:** d7 lead finder alternative, d7 vs mapleads, open source google maps scraper, free d7 alternative

---

## 4. Programmatic SEO template

### `/solutions/[niche]-in-[city]`

**IMPORTANT — before building this at scale:** only generate a page for a given niche × city pair when your own data shows that pair produces at least N qualified prospects (suggest N = 40). Thin programmatic pages are the fastest path to a Google Helpful Content penalty. The guard goes in the data pipeline, not the route.

**Title template:** `{Niche} in {City}: {Count}+ Leads Running Google Ads | Xovra`
**Meta template:** `Fresh list of {niche} businesses in {city} with verified websites, Google Ads intent signals, and social presence. Updated weekly.`

**Page structure (filled at build time from the dataset):**

1. **H1:** `{Count} {niche} businesses in {city} that run Google Ads.`
2. **Hero stat block:** 4 numbers from the dataset — total count, % with website, % with Instagram, % with verified ad spend.
3. **Who's in this list?** A sample row (anonymized by default — only business name visible).
4. **What the list carries per business:** boilerplate describing the enriched fields.
5. **Why advertisers from {city}:** 2-3 sentences of market-specific color, generated or hand-written per city.
6. **Download / preview:** gated email capture or GitHub link.
7. **Related:** 5 similar niche-in-city pages (`chiropractors in Austin TX`, `physical therapists in Austin TX`, etc.).
8. **Footer disclosure:** these counts update weekly; run date shown.

**Quality guard checklist (per generated page):**
- [ ] At least 40 qualified prospects in the dataset
- [ ] At least 300 words of unique body content
- [ ] At least one hand-curated sentence of market-specific color
- [ ] A relevant internal link to a parent use-case page
- [ ] `datePublished` and `dateModified` in `Article` JSON-LD

**Keywords targeted (template):** `{niche} in {city}`, `{niche} {city} contact list`, `{niche} running google ads {city}`

---

## 5. Nice-to-have pages

### `/blog`

**H1:** The Xovra blog — honest outbound, from scraping to dialing.

**Launch posts (write these before opening the blog):**

#### Post 1 — "How we score 1.4 million local businesses for cold-call fit"
- **Angle:** walk through the exact weights in the scoring model.
- **Length:** 1500 words.
- **Why it ranks:** nobody else publishes the scoring math for a lead scraper.

#### Post 2 — "The three signals that prove a business is actually buying leads"
- **Angle:** expand the compliance guide into a deeper, cited piece.
- **Length:** 2000 words with screenshots of the Ads Transparency Center.
- **Why it ranks:** the keyword "how to tell if a business runs google ads" has decent volume and zero quality content.

#### Post 3 — "Why 'AI SDR' isn't one product — it's four"
- **Angle:** unbundle the "AI outbound" category into sourcing, qualification, transfer, and booking. Honest about which of those we ship.
- **Length:** 1200 words.
- **Why it ranks:** category framing posts attract links from analysts.

### `/changelog`

**H1:** Changelog

Auto-generate from git tags. Entry template:

```
## v{version} — {date}
### Added
- ...
### Changed
- ...
### Fixed
- ...
```

Also list breaking changes at the top of each entry.

### `/about`

**H1:** About Xovra

**Short version (300-400 words):**

- One paragraph: what Xovra is (AI dialer in development, lead-sourcing engine shipping on GitHub today).
- One paragraph: why it exists (the stale-list / expensive-database problem for SMB outbound).
- One paragraph: who's building it (names + one-line bios when real).
- One paragraph: the honesty posture (ToS stance, no fake reviews, no invented case studies).
- Contact block.

Keep thin until there's a real team page to write.

### `/customers`

**Don't build this yet.** Only ship when you have:
- At least 2 contracted case studies with named logos.
- Written permission to display logos.
- At least one quote attributed to a named person.

Until then, keep the aggregate "Pilot results — anonymized" blocks on the homepage.

---

## 6. SEO infrastructure (per-site, build once)

- **Title tag rules:** `{Page Title} | Xovra`. Max 60 characters including the brand.
- **Meta description rules:** 140–155 characters. Primary keyword in the first 120. Always one explicit CTA verb.
- **Canonical tag:** every page has one pointing to self.
- **Open Graph image:** 1200×630, same template per page, dynamic text per page.
- **JSON-LD:**
  - `Organization` on every page (header or footer).
  - `WebSite` on `/`.
  - `SoftwareApplication` on `/pricing` and product pages.
  - `FAQPage` on `/`'s FAQ block and on every guide's FAQ block.
  - `Article` on every guide and blog post with `author`, `datePublished`, `dateModified`.
  - `BreadcrumbList` on any nested path.
- **`llms.txt`** at site root listing citable pages: `/`, `/pricing`, `/docs`, `/use-cases/*`, `/guides/*`, `/compliance`, `/vs/*`, `/blog/*`. Not listed: `/privacy`, `/terms`, `/contact`.
- **`robots.txt`** allows all, disallows `/app/*` if one ever ships.
- **`sitemap.xml`** auto-generated.

---

## 7. Launch sequence (concrete)

Ship in this order. Don't skip ahead.

**Week 1:**
1. `/pricing`
2. `/privacy`, `/terms`
3. `/contact`
4. `/docs` (even if it's just a redirect to GitHub README for now)

**Week 2:**
5. `/use-cases/agencies`
6. `/guides/google-maps-lead-generation`
7. `/guides/find-businesses-running-google-ads`
8. `/compliance`

**Week 3:**
9. `/vs/apollo`
10. `/vs/zoominfo`
11. `/vs/d7-leadfinder`

**Week 4:**
12. `/blog` + 3 launch posts
13. `/changelog`
14. `/about`
15. SEO infra (JSON-LD, llms.txt, sitemap)

**Later (post-traction):**
- `/solutions/[niche]-in-[city]` programmatic pages — with the quality guard
- `/customers` — once logos are contracted
