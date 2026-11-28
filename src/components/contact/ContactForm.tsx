"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type VolumeOption = "<1k" | "1k-10k" | "10k-100k" | "100k+";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      volume: (form.elements.namedItem("volume") as HTMLSelectElement).value as VolumeOption,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      updates: (form.elements.namedItem("updates") as HTMLInputElement | null)?.checked ?? false,
    };

    try {
      // TODO: wire to /api/contact (Resend, Loops, Postmark, or email relay)
      // For now: optimistic success after a small delay for UX feedback.
      await new Promise((r) => setTimeout(r, 400));
      void data;
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-body/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
  const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 md:p-8"
    >
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name <span className="text-brand">*</span>
        </label>
        <input id="contact-name" name="name" type="text" required placeholder="Alex Rivera" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Work email <span className="text-brand">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="alex@agency.co"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Company (optional)
        </label>
        <input id="contact-company" name="company" type="text" placeholder="Northstar Outbound" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="contact-volume" className={labelClass}>
          Monthly outbound dial volume
        </label>
        <select id="contact-volume" name="volume" defaultValue="1k-10k" className={fieldClass}>
          <option value="<1k">&lt; 1,000 minutes</option>
          <option value="1k-10k">1,000–10,000</option>
          <option value="10k-100k">10,000–100,000</option>
          <option value="100k+">100,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          What are you trying to solve? <span className="text-brand">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us your target niche, current stack, or what you want to test."
          className={`${fieldClass} min-h-[140px]`}
        />
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-body">
        <input type="checkbox" name="updates" className="h-4 w-4 rounded border-line text-brand focus:ring-brand/30" />
        <span>Add me to product updates (optional, unsubscribe anytime)</span>
      </label>

      <button
        type="submit"
        disabled={submitting || submitted}
        className="btn btn-dark mt-1 w-fit disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{submitted ? "Message received" : submitting ? "Sending…" : "Send message"}</span>
        <span className="arrow">
          <ArrowRight size={14} strokeWidth={2.5} />
        </span>
      </button>

      {submitted && (
        <p
          role="status"
          className="rounded-lg border border-brand/30 bg-brand/5 px-4 py-3 text-[13.5px] text-brand"
        >
          Message received. We reply within 1 business day.
        </p>
      )}

      {error && (
        <p role="alert" className="rounded-lg border border-red-500/30 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
          {error}
        </p>
      )}

      <p className="text-[12.5px] leading-relaxed text-body">
        By submitting you agree to our{" "}
        <a href="/privacy" className="text-brand underline">
          Privacy Policy
        </a>
        . We don&rsquo;t share your email.
      </p>
    </form>
  );
}
