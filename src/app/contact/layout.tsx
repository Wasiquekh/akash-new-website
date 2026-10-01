import type { Metadata } from "next";

// The contact page is a client component, so its metadata (including the
// canonical) has to be exported from a server layout — next/head is ignored
// in the App Router.
export const metadata: Metadata = {
  title: "Contact AS Business Consulting | Talk to Consulting Experts in India",
  description:
    "Have a question or need a proposal? Contact AS Business Consulting for strategy, operations, R&D, international business, HR, legal, certification, and B2B marketing support.",
  alternates: {
    canonical: "https://www.asbconsulting.in/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
