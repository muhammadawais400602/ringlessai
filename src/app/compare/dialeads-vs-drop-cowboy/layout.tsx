import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads vs Drop Cowboy: Voicemail Drops vs AI Cold Calling",
  description:
    "Drop Cowboy sends ringless voicemails. Dialeads is an AI-powered cold calling platform with Google Maps lead scraping, a browser softphone, AI qualifier calls, live AI rebuttals and two-way SMS. An honest comparison of the two approaches.",
  openGraph: {
    title: "Dialeads vs Drop Cowboy: Voicemail Drops vs AI Cold Calling",
    description:
      "Drop Cowboy sends ringless voicemails. Dialeads is an AI-powered cold calling platform with Google Maps lead scraping, a browser softphone, AI qualifier calls, live AI rebuttals and two-way SMS. An honest comparison of the two approaches.",
    type: "article",
  },
  alternates: {
    canonical: "/compare/dialeads-vs-drop-cowboy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
