import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omnichannel Follow-Up – SMS, WhatsApp & Email – Dialeads",
  description:
    "Dialeads auto-triggers personalized SMS, WhatsApp, and email follow-ups the moment a call ends. Send mockups, proposals, and calendar links in under 10 seconds.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
