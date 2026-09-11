import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Outcome Tracking & Dispositions – Dialeads",
  description:
    "Log call results in one click with Dialeads. Trigger automated CRM updates, multi-channel follow-up cadences, and smart voicemail drops with a single keystroke.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
