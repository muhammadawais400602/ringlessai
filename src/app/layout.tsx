import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xovra | AI Outbound Dialer with Built-In Lead Sourcing",
  description:
    "AI outbound dialer that qualifies prospects live, transfers hot leads to your closers in under 60 seconds, and books meetings on your calendar. Comes with fresh Google Maps leads sourced and scored automatically.",
  keywords: [
    "ai outbound dialer",
    "ai voice agent",
    "ai cold calling",
    "ai sdr",
    "ai appointment setter",
    "live transfer dialer",
    "autonomous outbound calling",
    "ai calling software",
    "speed to lead",
    "ai sales dialer",
    "ai dialer with lead sourcing",
    "24 7 outbound calling",
  ],
  openGraph: {
    title: "Xovra | AI Outbound Dialer with Built-In Lead Sourcing",
    description:
      "An AI dialer that sources its own leads. Qualifies live, transfers to closers in under 60 seconds, and books the rest on your calendar. Nights and weekends included.",
    type: "website",
    siteName: "Xovra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xovra | AI Outbound Dialer with Built-In Lead Sourcing",
    description:
      "AI dialer that sources, qualifies, transfers, and books. No SDR floor required.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
