// Site-wide structured-data entities. Organization and WebSite are rendered
// once, from the root layout; every page references them by @id.
export const SITE_URL = "https://www.asbconsulting.in/";
export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

// Only values that are published on the site itself (footer / contact page).
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "AS Business Consulting",
  url: SITE_URL,
  logo: `${SITE_URL}images/as-business-consulting-logo-512.png`,
  description:
    "AS Business Consulting is a trusted consulting firm in India, providing strategic advisory and growth-focused business consulting solutions.",
  email: "akash.shahane@asbconsulting.in",
  telephone: "+91-9529322665",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "21/3, Isha-krupa Apartment, Behind Sant Eknath Rangamandir, Osmanpura",
    addressLocality: "Aurangabad",
    addressRegion: "Maharashtra",
    postalCode: "431005",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "AS Business Consulting",
  publisher: { "@id": ORGANIZATION_ID },
};
