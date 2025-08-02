import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

// Only Lexend font
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
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
