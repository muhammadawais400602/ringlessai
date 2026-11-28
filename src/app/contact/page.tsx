import type { Metadata } from "next";
import { LifeBuoy, Rocket, Handshake, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Eyebrow, CtaButton } from "@/components/ui";
import ContactForm from "@/components/contact/ContactForm";
import CalendarMock from "@/components/contact/CalendarMock";

export const metadata: Metadata = {
  title: "Contact Xovra | Three Ways to Reach Us, Zero Gatekeepers",
  description:
    "Reach Xovra sales, support, or partnerships directly. No qualification form, responses within 1 business day, or book 30 minutes on our calendar.",
  keywords: ["contact xovra", "xovra demo", "xovra support", "xovra sales", "ai dialer demo"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Xovra | Three Ways to Reach Us, Zero Gatekeepers",
    description: "Real humans, not an SDR flow. Replies within 1 business day.",
    url: "/contact",
    type: "website",
  },
};

const faqs = [
  {
    q: "How fast will you respond?",
    a: "Sales within 2 business hours typically. Support within 4. Partnerships 2–3 business days.",
  },
  {
    q: "Do I need to be on a paid plan to book a demo?",
    a: "No. Pay As You Go is self-serve and doesn't require a demo — but if you want to see the dialer walked through before signing up, we'll run one in 30 minutes.",
  },
  {
    q: "Can I get help setting up a campaign?",
    a: "Yes. Pay As You Go includes shared-Slack onboarding. Enterprise includes a named CSM and dedicated onboarding.",
  },
  {
    q: "Where are you based?",
    a: "The team is distributed. Our primary contact hours are Monday–Friday, 9am–6pm Pacific.",
  },
  {
    q: "Do you have an office I can visit?",
    a: "No physical office. We meet customers over video calls and at industry events.",
  },
  {
    q: "I'm a journalist / analyst. Who do I email?",
    a: "partners@xovra.ai with 'Press' in the subject line. We'll route you to the right person within 2 business days.",
  },
];

type Route = {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  channelLabel: string;
  channelHref: string;
  responseTime: string;
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

const routes: Route[] = [
  {
    icon: LifeBuoy,
    eyebrow: "Support",
    title: "Email the team",
    description: "Current customers with a technical question, a bug report, or a campaign that isn't behaving as expected.",
    channelLabel: "support@xovra.ai",
    channelHref: "mailto:support@xovra.ai",
    responseTime: "Under 4 business hours.",
    ctaLabel: "Email support",
    ctaHref: "mailto:support@xovra.ai",
  },
  {
    icon: Rocket,
    eyebrow: "Sales",
    title: "Book a demo",
    description: "Sales ops and founders evaluating Xovra for their team's outbound. Want the dialer walked through live.",
    channelLabel: "30-minute video call",
    channelHref: "#calendar-embed",
    responseTime: "Same business day, usually within 2 hours.",
    ctaLabel: "Book a demo",
    ctaHref: "#calendar-embed",
    featured: true,
  },
  {
    icon: Handshake,
    eyebrow: "Partnerships",
    title: "Press + partners",
    description: "Journalists, agency partners, affiliate programs, and integrations teams.",
    channelLabel: "partners@xovra.ai",
    channelHref: "mailto:partners@xovra.ai",
    responseTime: "2–3 business days.",
    ctaLabel: "Email partnerships",
    ctaHref: "mailto:partners@xovra.ai",
  },
];

function RouteCard({ r }: { r: Route }) {
  const Icon = r.icon;
  return (
    <article
      className={`relative flex h-full flex-col justify-between gap-6 rounded-2xl p-7 md:p-8 ${
        r.featured
          ? "border border-brand bg-white shadow-[0_24px_80px_rgba(139,47,248,0.18)]"
          : "border border-line bg-white"
      }`}
    >
      {r.featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          Most responsive
        </span>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon size={22} strokeWidth={2} />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{r.eyebrow}</p>
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{r.title}</h3>
        <p className="text-[15px] leading-relaxed text-body">{r.description}</p>
        <hr className="border-line" />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-body">Best channel</p>
            <a href={r.channelHref} className="mt-1 inline-block text-[15px] font-semibold text-brand hover:underline">
              {r.channelLabel}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-body">Response time</p>
            <p className="mt-1 text-[15px] text-ink">{r.responseTime}</p>
          </div>
        </div>
      </div>
      <a
        href={r.ctaHref}
        className={`btn w-full justify-between ${r.featured ? "btn-light" : "btn-dark"}`}
      >
        <span>{r.ctaLabel}</span>
        <span className="arrow">
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      </a>
    </article>
  );
}

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative bg-white text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      {/* ========== Hero ========== */}
      <section className="relative overflow-hidden bg-night text-white" data-nav-theme="dark">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 20% 20%, rgba(236,106,251,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 70% at 80% 90%, rgba(139,47,248,0.22) 0%, transparent 60%)",
          }}
        />
        <div className="section-shell relative pt-32 md:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow dark>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight leading-[1.02] md:text-6xl lg:text-[72px]">
                Three ways to reach us. <span className="accent-text">Zero gatekeepers.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
                There is no sales qualification form here and response times are under one business day. Pick the channel below that matches what you want to talk about.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/60">
                <span>Replies within 1 business day</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>No qualification form</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Real humans, not an SDR flow</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== Three contact routes ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Pick a channel</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="h-section">
                Match the question to the <span className="accent-text">right person.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:gap-6 lg:grid-cols-3">
            {routes.map((r, i) => (
              <Reveal key={r.eyebrow} delay={(i + 1) as 1 | 2 | 3}>
                <RouteCard r={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Form + Calendar ========== */}
      <section id="calendar-embed" className="relative bg-white">
        <div className="section-shell py-24 md:py-32">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-6">
              <Reveal>
                <Eyebrow className="mb-3">Send a note</Eyebrow>
                <h2 className="h-section">
                  Tell us what you&rsquo;re <span className="accent-text">working on.</span>
                </h2>
                <p className="lead mt-4">
                  If you&rsquo;d rather write than talk. We read every submission.
                </p>
              </Reveal>
              <Reveal delay={1}>
                <ContactForm />
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              <Reveal delay={1}>
                <Eyebrow className="mb-3">Or pick a time</Eyebrow>
                <h2 className="h-section">
                  Book <span className="accent-text">30 minutes.</span>
                </h2>
                <p className="lead mt-4">
                  Same calendar the Sales card points to. If the embed doesn&rsquo;t load, use the direct link below.
                </p>
              </Reveal>
              <Reveal delay={2}>
                <CalendarMock />
              </Reveal>
              <Reveal delay={2}>
                <p className="text-[13px] text-body">
                  Direct link:{" "}
                  <a href="https://cal.com/xovra" className="text-brand underline">
                    cal.com/xovra
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="relative bg-surface">
        <div className="section-shell">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 md:mb-16">
            <Reveal>
              <Eyebrow className="mb-3">Before you write</Eyebrow>
              <h2 className="h-section">
                A few things we get <span className="accent-text">asked first.</span>
              </h2>
              <p className="lead mt-4">
                If the answer is already here, save yourself the back-and-forth.
              </p>
              <CtaButton href="#calendar-embed" className="mt-6">
                Book a call
              </CtaButton>
            </Reveal>

            <Reveal delay={1}>
              <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-line bg-white px-5 py-4 open:bg-white open:shadow-[0_12px_40px_rgba(139,47,248,0.06)]"
                    open={i === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-[15.5px] font-semibold text-ink">{f.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-brand transition-transform group-open:rotate-45">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          aria-hidden
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-body">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== Final CTA ========== */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-14 md:py-20 lg:px-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-night px-6 py-20 text-center text-white md:px-16 md:py-28 lg:px-24">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(139,47,248,0.45) 0%, rgba(139,47,248,0.1) 40%, transparent 70%), radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236,106,251,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative flex flex-col items-center">
                <Eyebrow dark>Still deciding?</Eyebrow>
                <h2 className="h-section mt-4 max-w-3xl">
                  You can start without talking to us. <span className="accent-text">Start anyway.</span>
                </h2>
                <p className="lead mx-auto mt-5 max-w-xl !text-white/60">
                  Pay As You Go is self-serve. Launch a campaign today, talk to us when you&rsquo;re ready.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton href="/pricing" variant="light">
                    Start dialing
                  </CtaButton>
                  <CtaButton href="/features">See features</CtaButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
