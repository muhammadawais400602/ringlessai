import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Operator Inbox – Calls, SMS & Notes – Dialeads",
  description:
    "Dialeads unified inbox consolidates call recordings, SMS threads, AI transcripts, and CRM notes into one real-time stream. Zero tab switching for sales teams.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
