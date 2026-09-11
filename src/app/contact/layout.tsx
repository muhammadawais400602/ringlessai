import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dialeads – Sales, Support & Enterprise Inquiries",
  description:
    "Get in touch with the Dialeads team for enterprise demos, telephony setup, 10DLC compliance, or API integration questions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
