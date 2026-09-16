import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Real Estate Agents & Wholesalers – Dialeads",
  description:
    "Dialeads lets real estate agents, wholesalers, and property managers dial cold lists at scale, drop personalized voicemails to every missed call, and trigger automatic SMS follow-ups — so motivated sellers and buyers call you back.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
