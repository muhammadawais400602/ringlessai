import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling & Voicemail Drop – Dialeads",
  description:
    "Dialeads runs autonomous AI cold calls and drops ringless voicemails instantly. Sub-500ms voice synthesis, auto answering machine detection, and 1-click voicemail drop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
