import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Management & Smart Queue Engine – Dialeads",
  description:
    "Import 100k+ leads via CSV or CRM sync, auto-clean phone numbers, match local caller IDs, and prioritize your highest-converting opportunities automatically.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
