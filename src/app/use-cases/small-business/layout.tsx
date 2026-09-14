import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Calling for Small Business – Dialeads",
  description:
    "Dialeads works for solo founders and small business owners who need to contact hundreds of leads per week without spending every hour on the phone. Set up in 15 minutes. No tech skills required.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
