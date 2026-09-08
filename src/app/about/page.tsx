import type { Metadata } from "next";
import {
  ArrowRight,
  Quote,
  Zap,
  Layers,
  Eye,
  Target,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About - Vocalis AI",
  description:
    "Built by sales people, for sales people. Learn about our mission, team, and the technology behind Vocalis AI.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="section-label">OUR STORY &amp; MISSION</span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1c30]">
            Built by Sales People,
            <br />
            <span className="gradient-text">for Sales People</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#5e5d6b] leading-relaxed">
            We spent 10,000+ hours cold calling local businesses and Fortune
            500s. We built Vocalis to replace the clunky, disjointed tools that
            were slowing SDRs down.
          </p>

          {/* Photo placeholder */}
          <div className="relative mt-14 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-[#213145] aspect-[16/9] flex items-center justify-center overflow-hidden">
              <span className="text-[#5e5d6b] text-sm tracking-wide">
                Team / Office Photo
              </span>
            </div>

            {/* Overlay stat card */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur rounded-xl shadow-lg px-5 py-4 text-left border border-[#ccc3d8]">
              <span className="text-[10px] font-semibold tracking-widest text-[#4a4455] uppercase">
                Real Time
              </span>
              <p className="text-2xl font-bold text-[#0b1c30] mt-0.5">99.98%</p>
              <p className="text-xs text-[#5e5d6b]">SIP Carrier Route Uptime</p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-xs font-medium text-[#5e5d6b] border border-[#ccc3d8]">
              Mission Control &mdash; SF Outbound Floor
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#eff4ff] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-10 h-10 text-purple-200 mx-auto mb-6 rotate-180" />
          <blockquote className="text-xl md:text-2xl font-medium text-[#0b1c30] leading-relaxed">
            &ldquo;The best salespeople shouldn&rsquo;t spend 70% of their
            workday logging notes, manually dialing 10-digit numbers, and
            getting caught off guard by predictable objections. AI should handle
            the mechanics so humans can build the relationships.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
              AV
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#0b1c30]">Alex Vance</p>
              <p className="text-sm text-[#5e5d6b]">
                Co-Founder &amp; CEO, Vocalis AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              value: "2022",
              label: "Founded in San Francisco & New York",
              tag: "ORIGIN",
              border: "border-t-purple-400",
            },
            {
              value: "42",
              label: "Engineers, Ex-SDRs & Telecom Specialists",
              tag: "TALENT",
              border: "border-t-purple-500",
            },
            {
              value: "18",
              label: "Countries with Active Dialing Infrastructure",
              tag: "FOOTPRINT",
              border: "border-t-purple-600",
            },
            {
              value: "14.8M",
              label: "Cold Calls Successfully Orchestrated",
              tag: "VOLUME",
              border: "border-t-purple-700",
            },
          ].map((stat) => (
            <div
              key={stat.tag}
              className={`rounded-xl border border-[#ccc3d8] ${stat.border} border-t-4 p-6 bg-white shadow-sm`}
            >
              <span className="text-[10px] font-semibold tracking-widest text-[#4a4455] uppercase">
                {stat.tag}
              </span>
              <p className="text-4xl font-bold text-[#0b1c30] mt-2">
                {stat.value}
              </p>
              <p className="text-sm text-[#5e5d6b] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-[#eff4ff] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">ENGINEERING STANDARD</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0b1c30]">
              Our Core Operating Values
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[#5e5d6b]">
              These aren&rsquo;t decorative posters. They&rsquo;re the filters
              we use to ship product, hire talent, and make every decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Speed Over Everything",
                desc: "We ship weekly, iterate daily, and treat velocity as the ultimate competitive advantage. Perfection is the enemy of traction.",
              },
              {
                icon: Layers,
                title: "Radical Simplicity",
                desc: "Complexity is a tax on everyone. Every feature, workflow, and line of code must justify its existence or get cut.",
              },
              {
                icon: Eye,
                title: "Radical Transparency",
                desc: "Metrics, roadmaps, and pricing are open by default. We earn trust by showing our work, not hiding behind NDAs.",
              },
              {
                icon: Target,
                title: "Results-Driven Obsession",
                desc: "We measure outcomes, not effort. Revenue booked, meetings set, and conversations converted are the only scoreboard.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-[#ccc3d8] p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-[#0b1c30]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[#5e5d6b] leading-relaxed">
                  {value.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Section ── */}
      <section className="bg-[#213145] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
              SIGNAL ARCHITECTURE
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Vocalis Ultra-Low Latency Mesh
            </h2>
            <span className="inline-block mt-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
              Vocalis POPs across 18 Edge Nodes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                node: "NODE 01",
                title: "SIP Trunk Ingest",
                desc: "Direct carrier interconnects with sub-50ms route selection across Tier 1 providers.",
              },
              {
                node: "NODE 02",
                title: "Voice Synthesis",
                desc: "Real-time neural TTS with <200ms first-byte latency and emotional tone matching.",
              },
              {
                node: "NODE 03",
                title: "Objection Matrix",
                desc: "Live intent classification and dynamic rebuttal generation from trained playbooks.",
              },
              {
                node: "NODE 04",
                title: "CRM Push & SMS",
                desc: "Instant bi-directional sync with Salesforce, HubSpot, and 40+ CRM endpoints.",
              },
            ].map((card) => (
              <div
                key={card.node}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <span className="text-[10px] font-semibold tracking-widest text-purple-400 uppercase">
                  {card.node}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#cbdbf5] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">EXECUTIVE LEADERSHIP</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0b1c30]">
              Architected by Builders &amp; Closers
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[#5e5d6b]">
              Our leadership team combines deep telecom engineering with
              real-world sales floor experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                initials: "AV",
                name: "Alex Vance",
                role: "CEO & Co-Founder",
                prev: "Ex-VP Sales, Gong | Ex-SDR Lead, Salesforce",
                desc: "10+ years in B2B sales leadership. Built and scaled outbound teams from 0 to 200+ reps across three startups.",
                location: "San Francisco, CA",
              },
              {
                initials: "ER",
                name: "Elena Rostova",
                role: "CTO & Co-Founder",
                prev: "Ex-Staff Eng, Twilio | Ex-ML Lead, Google Cloud",
                desc: "Architect of Vocalis's real-time voice pipeline. Published researcher in low-latency speech synthesis and SIP routing.",
                location: "New York, NY",
              },
              {
                initials: "MC",
                name: "Marcus Chen",
                role: "VP of Product & AI",
                prev: "Ex-Product, Outreach | Ex-PM, Amazon Alexa",
                desc: "Shapes the product roadmap at the intersection of conversational AI and outbound sales automation.",
                location: "San Francisco, CA",
              },
            ].map((member) => (
              <div
                key={member.initials}
                className="rounded-xl border border-[#ccc3d8] p-8 bg-white shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl mb-5">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-[#0b1c30]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-purple-600">
                  {member.role}
                </p>
                <p className="mt-1 text-xs text-[#4a4455]">{member.prev}</p>
                <p className="mt-4 text-sm text-[#5e5d6b] leading-relaxed">
                  {member.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs text-[#4a4455]">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="text-[#4a4455] hover:text-purple-600 transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href="#"
                      className="text-[#4a4455] hover:text-purple-600 transition-colors"
                      aria-label={`${member.name} on X`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investors ── */}
      <section className="bg-[#eff4ff] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label">
            BACKED BY LEADING GLOBAL INVESTORS
          </span>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {["Combinator", "Craft Ventures", "Index Ventures"].map((name) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-xl bg-[#e5eeff] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#5e5d6b]">
                    {name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#5e5d6b]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring CTA ── */}
      <section className="cta-gradient py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-purple-200 mb-6">
            10 Active Roles in Engineering, Design &amp; Sales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We&rsquo;re hiring builders passionate
            <br className="hidden md:block" />
            about speech systems.
          </h2>
          <p className="mt-4 text-[#cbdbf5] max-w-lg mx-auto">
            Join a team that ships real-time voice AI every week. Competitive
            comp, meaningful equity, and problems that don&rsquo;t exist at
            other companies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0b1c30] font-semibold text-sm hover:bg-[#e5eeff] transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Talk to Founders
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
