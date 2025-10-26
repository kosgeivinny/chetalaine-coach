import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Monica Chetalaine | Business Strategy Coach",
  description:
    "Helping entrepreneurs and business leaders gain clarity, confidence, and strategy to scale with purpose.",
  keywords: [
    "Business Strategy Coach",
    "Entrepreneur Coaching",
    "Leadership Coaching",
    "Monica Chetalaine",
    "1:1 Coaching",
  ],
  authors: [{ name: "Monica Chetalaine" }],
  openGraph: {
    title: "Monica Chetalaine | Business Strategy Coach",
    description:
      "Helping entrepreneurs and business leaders gain clarity and confidence to scale with purpose.",
    url: "https://monicachetalaine.vercel.app",
    siteName: "Monica Chetalaine Coaching",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monica Chetalaine - Business Strategy Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        {/* Navbar fixed at top for better UX */}
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
