import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCPA Compliance – How Dialeads Keeps Your Outbound Legal",
  description:
    "Dialeads is built with TCPA, FCC, and A2P 10DLC compliance at its core. Automatic DNC scrubbing, time-zone call windows, STIR/SHAKEN attestation, and opt-out handling — all built in.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
