import type { NextConfig } from "next";

const SITE_URL = "https://www.asbconsulting.in";

// Dead URLs that real <a href> links on the site pointed to (so crawlers and
// visitors have followed them). Each maps to the page the link was meant for.
const legacyRedirects: [string, string][] = [
  // Header nav linked the correct spelling; the route itself is "inprovement".
  ["/operation/productivity-improvement", "/operation/productivity-inprovement"],
  // Links in the legal-consulting page body.
  ["/operations-consulting", "/operation"],
  ["/hr-consultancy", "/human-resource"],
  ["/contact-us", "/contact"],
  // Footer used href="terms" (relative), which resolved under each section.
  ["/operation/terms", "/terms"],
  ["/human-resource/terms", "/terms"],
  ["/legal-consulting/terms", "/terms"],
  ["/international-business-development/terms", "/terms"],
  ["/research&development/terms", "/terms"],
  ["/sales&marketing/terms", "/terms"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Non-www host -> canonical https://www host, path and query preserved.
      {
        source: "/:path*",
        has: [{ type: "host", value: "asbconsulting.in" }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      ...legacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
