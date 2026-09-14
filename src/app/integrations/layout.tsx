import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads Integrations – Connect Your CRM, Dialer & Sales Stack",
  description:
    "Dialeads integrates natively with HubSpot, Salesforce, Close CRM, GoHighLevel, Zapier, Slack, and more. Sync every call, disposition, and voicemail drop automatically.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
