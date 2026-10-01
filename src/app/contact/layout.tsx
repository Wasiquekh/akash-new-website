import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";

const CANONICAL = "https://www.asbconsulting.in/contact";
const DESCRIPTION =
  "Have a question or need a proposal? Contact AS Business Consulting for strategy, operations, R&D, international business, HR, legal, certification, and B2B marketing support.";

// The contact page is a client component, so its metadata (including the
// canonical) and its JSON-LD have to come from a server layout — next/head is
// ignored in the App Router.
export const metadata: Metadata = {
  title: "Contact AS Business Consulting | Talk to Consulting Experts in India",
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* BreadcrumbList (Home → Contact) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.asbconsulting.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: CANONICAL,
            },
          ],
        }}
      />

      {/* ContactPage schema */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${CANONICAL}#webpage`,
          url: CANONICAL,
          name: "Contact AS Business Consulting",
          description: DESCRIPTION,
          inLanguage: "en-IN",
          isPartOf: { "@id": "https://www.asbconsulting.in/#website" },
          about: { "@id": "https://www.asbconsulting.in/#organization" },
        }}
      />
      {children}
    </>
  );
}
