import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ Import for Google Analytics

// Fonts
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AS Consulting",
  description: "Business & Industrial Consulting",
  // ✅ Add sitemap to metadata (SEO)
  other: {
    "sitemap": "https://www.asbconsulting.in/sitemap.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KNWEECTYLE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KNWEECTYLE');
          `}
        </Script>

        {/* ✅ Sitemap link for crawlers */}
        <link rel="sitemap" type="application/xml" href="https://www.asbconsulting.in/sitemap.xml" />
      </head>
      <body className={`${lexend.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
