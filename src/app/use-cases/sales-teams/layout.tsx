import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Sales Teams – Dialeads",
  description:
    "Dialeads automates the top-of-funnel grunt work for SDR and AE teams — dialing queues, dropping voicemails, logging dispositions, and triggering follow-ups — so every rep spends 100% of their time on live conversations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
