import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads vs Slybroadcast: Voicemail Drops vs AI Cold Calling",
  description:
    "Slybroadcast delivers pre-recorded voicemails. Dialeads is an AI-powered cold calling platform with Google Maps lead scraping, a browser softphone, AI qualifier calls and two-way SMS. An honest comparison of two different outbound strategies.",
  openGraph: {
    title: "Dialeads vs Slybroadcast: Voicemail Drops vs AI Cold Calling",
    description:
      "Slybroadcast delivers pre-recorded voicemails. Dialeads is an AI-powered cold calling platform with Google Maps lead scraping, a browser softphone, AI qualifier calls and two-way SMS. An honest comparison of two different outbound strategies.",
    type: "article",
  },
  alternates: {
    canonical: "/compare/dialeads-vs-slybroadcast",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
