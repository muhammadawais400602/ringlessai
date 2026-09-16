import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Insurance Agents & IMOs – Dialeads",
  description: "Dialeads helps insurance agents and IMOs contact every lead within 60 seconds, drop personalized voicemails, automate 8-touch follow-up sequences, and stay TCPA compliant — across Medicare, Final Expense, P&C, ACA, and commercial lines.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
