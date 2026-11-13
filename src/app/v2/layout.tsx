import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Xovra — AI-Powered Cold Calling Platform",
  description:
    "Find leads. Call them. Close deals. Xovra scrapes, enriches, and dials — with AI qualifiers, live rebuttals, and compliant outbound at scale.",
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="xovra-root bg-[#07070c] text-white antialiased min-h-screen">
      {children}
    </div>
  );
}
