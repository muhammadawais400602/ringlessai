import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo – Dialeads",
  description:
    "See Dialeads dial a real lead live in front of you. Book a 20-minute demo — live AI cold calls, voicemail drops, objection handling, and CRM sync. No slides, no fluff.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
