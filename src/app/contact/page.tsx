"use client";

import { useState } from "react";
import {
  Zap,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  ChevronDown,
  Clock,
  Activity,
} from "lucide-react";

const inquiryOptions = [
  "Select inquiry type",
  "Enterprise Sales & Volume Pricing",
  "10DLC Registration & Compliance",
  "API Integration & Custom Development",
  "Strategic Partnership",
  "Press & Media Inquiry",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    phone: "",
    inquiryFocus: "",
    projectDetails: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      fullName: true,
      workEmail: true,
      inquiryFocus: true,
      projectDetails: true,
    });

    const valid =
      form.fullName.trim() &&
      form.workEmail.trim() &&
      form.workEmail.includes("@") &&
      form.inquiryFocus &&
      form.projectDetails.trim();

    if (valid) {
      setSubmitted(true);
    }
  }

  function isError(field: string) {
    if (!touched[field]) return false;
    if (field === "workEmail")
      return !form.workEmail.trim() || !form.workEmail.includes("@");
    if (field === "inquiryFocus") return !form.inquiryFocus;
    return !form[field as keyof typeof form]?.toString().trim();
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors";
  const inputNormal = "border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10";
  const inputError = "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f3ff] via-[#faf9ff] to-white pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
            Get in Touch
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Let&apos;s Talk About Accelerating{" "}
            <span className="gradient-text">Your Outbound Sales</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            Custom telephony infrastructure, high-volume minutes, and autonomous
            AI cold-calling tailored to your pipeline goals.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Direct Routing Header */}
            <div className="flex items-center justify-between">
              <span className="section-label">Direct Routing</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <Clock className="h-3.5 w-3.5" />
                Avg Response &lt; 8m
              </span>
            </div>

            {/* Contact Routing Cards */}
            <div className="space-y-3">
              <ContactCard
                icon={<Zap className="h-5 w-5 text-[#7C3AED]" />}
                title="Sales & Enterprise Inquiries"
                email="sales@vocalisdialer.ai"
              />
              <ContactCard
                icon={<Shield className="h-5 w-5 text-[#7C3AED]" />}
                title="Telephony & 10DLC Compliance"
                email="support@vocalisdialer.ai"
              />
              <ContactCard
                icon={<Star className="h-5 w-5 text-[#7C3AED]" />}
                title="Press & Strategic Partnerships"
                email="press@vocalisdialer.ai"
              />
            </div>

            {/* Telecom NOC Card */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  <Activity className="h-3.5 w-3.5" />
                  Telecom NOC
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  99.99% SLA
                </span>
              </div>
              <p className="text-sm leading-relaxed text-emerald-800">
                Global SIP Trunking NOC: 24/7/365 active monitoring.
                Auto-failover across 14 carrier routes.
              </p>
            </div>

            {/* Demo Call Section */}
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#7C3AED]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                  Direct Engineering Walkthrough
                </span>
              </div>
              <p className="mb-3 text-sm text-gray-600">
                Want a live walkthrough of the AI rebuttal engine and Telnyx
                setup?
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
              >
                Book a Live Demo Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6">
                <div className="mb-1 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    Initiate Discussion
                  </h2>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Rep Available
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Direct route to solutions architects and telephony engineers.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl bg-emerald-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <Zap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Message Received
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    A solutions architect will be in touch within 8 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        className={`${inputBase} ${isError("fullName") ? inputError : inputNormal}`}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        value={form.workEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@company.com"
                        className={`${inputBase} ${isError("workEmail") ? inputError : inputNormal}`}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Company & SDR Team Size
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc. / 12 SDRs"
                        className={`${inputBase} ${inputNormal}`}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 px-3 text-sm text-gray-500">
                          +1
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className={`${inputBase} rounded-l-none ${inputNormal}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Focus */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Inquiry Focus <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryFocus"
                        value={form.inquiryFocus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputBase} appearance-none pr-10 ${isError("inquiryFocus") ? inputError : inputNormal} ${!form.inquiryFocus ? "text-gray-400" : "text-gray-900"}`}
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryOptions.slice(1).map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-gray-700">
                      Project Details & Volume Target{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      value={form.projectDetails}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      placeholder="Tell us about your outbound goals, current call volume, and target metrics..."
                      className={`${inputBase} resize-none ${isError("projectDetails") ? inputError : inputNormal}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Privacy Note */}
                  <p className="text-center text-xs leading-relaxed text-gray-400">
                    We respect your privacy. No spam ever. SOC-2 Type II
                    Certified & GDPR Compliant.
                  </p>
                </form>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <TrustBadge label="SUB-500MS" sublabel="Turnaround Latency" />
              <TrustBadge
                label="STIR/SHAKEN"
                sublabel="A-Level Attestation"
              />
              <TrustBadge
                label="DIRECT REST"
                sublabel="HubSpot & SFDC Sync"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <span className="section-label mb-8 block">Office Hubs</span>

          <div className="grid gap-6 sm:grid-cols-2">
            <OfficeCard
              city="San Francisco"
              address="548 Market St, Suite 3200"
              location="San Francisco, CA 94104"
            />
            <OfficeCard
              city="New York"
              address="114 5th Avenue, 10th Floor"
              location="New York, NY 10011"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  email,
}: {
  icon: React.ReactNode;
  title: string;
  email: string;
}) {
  return (
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-gray-200 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5f3ff]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{email}</div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-gray-300" />
    </a>
  );
}

function TrustBadge({
  label,
  sublabel,
}: {
  label: string;
  sublabel: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-center">
      <div className="text-xs font-bold tracking-wider text-gray-900">
        {label}
      </div>
      <div className="mt-0.5 text-[11px] text-gray-400">{sublabel}</div>
    </div>
  );
}

function OfficeCard({
  city,
  address,
  location,
}: {
  city: string;
  address: string;
  location: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6">
      <div className="mb-3 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-[#7C3AED]" />
        <span className="text-sm font-bold text-gray-900">{city}</span>
      </div>
      <p className="text-sm leading-relaxed text-gray-500">
        {address}
        <br />
        {location}
      </p>
    </div>
  );
}
