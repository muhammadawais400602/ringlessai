import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads vs Slybroadcast — Honest Platform Comparison – Dialeads",
  description:
    "Compare Dialeads and Slybroadcast side by side. Slybroadcast drops pre-recorded voicemails. Dialeads does that plus AI live calling, power dialing, automated follow-up, and CRM sync — all in one platform for $49/mo.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
