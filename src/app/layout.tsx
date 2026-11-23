import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xovra — Google Maps Lead Scraper & Enrichment for Agencies",
  description:
    "Build fresh prospect lists from Google Maps. Enriched with verified emails, tech stack, social presence and three Google Ads intent signals. CRM-ready CSV or Google Sheet in minutes.",
  keywords: [
    "google maps lead scraper",
    "google maps lead generation",
    "local business leads",
    "find businesses running google ads",
    "ads transparency center scraper",
    "b2b lead enrichment tool",
    "CRM-ready lead list",
    "cold calling leads for agencies",
    "SDR prospecting tool",
    "google maps business extractor",
  ],
  openGraph: {
    title: "Xovra — Google Maps Lead Scraper & Enrichment",
    description:
      "Niche + city in. Scored, enriched, CRM-ready list out. Three independent Google Ads intent signals prove the lead has budget before you dial.",
    type: "website",
    siteName: "Xovra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xovra — Google Maps Lead Scraper & Enrichment",
    description:
      "Build fresh prospect lists from Google Maps. Enriched contacts, ad-intent signals, CRM-ready export.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
