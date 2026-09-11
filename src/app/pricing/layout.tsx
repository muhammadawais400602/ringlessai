import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialeads Pricing – AI Calling & Voicemail Drop Plans for Every Team",
  description:
    "Dialeads pricing starts at $29/mo for solo users. Get unlimited AI calls, voicemail drops, and power dialing on Pro. Enterprise plans with custom SIP trunks available.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
