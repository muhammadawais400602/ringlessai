import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling Platform for Lead Gen Agencies – Dialeads",
  description:
    "Dialeads helps lead generation agencies run high-volume outbound campaigns for multiple clients — with white-label options, CRM sync, and carrier-grade compliance built in.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
