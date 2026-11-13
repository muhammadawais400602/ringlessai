import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "../globals.css";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--xv-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--xv-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xovra — AI-Powered Cold Calling Platform",
  description:
    "Find leads. Call them. Close deals. Xovra scrapes, enriches, and dials — with AI qualifiers, live rebuttals, and compliant outbound at scale.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`xovra-root ${serif.variable} ${sans.variable} bg-white text-[#0b0b0f] antialiased min-h-screen`}
    >
      {children}
    </div>
  );
}
