import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads vs CallTools: Call Center Software vs AI Cold Calling",
  description:
    "CallTools is predictive dialer and contact center software built for call centers. Dialeads is a lightweight, browser-based AI cold calling platform with built-in lead sourcing, AI qualifier calls and usage-based pricing. An honest comparison for small revenue teams.",
  openGraph: {
    title: "Dialeads vs CallTools: Call Center Software vs AI Cold Calling",
    description:
      "CallTools is predictive dialer and contact center software built for call centers. Dialeads is a lightweight, browser-based AI cold calling platform with built-in lead sourcing, AI qualifier calls and usage-based pricing. An honest comparison for small revenue teams.",
    type: "article",
  },
  alternates: {
    canonical: "/compare/dialeads-vs-calltools",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
