import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontier Capital Partners | AI-Powered Funding for Small Businesses",
  description:
    "Working capital from $25K\u2013$250K for small businesses. AI-powered underwriting, 24-hour decisions, revenue-based repayment. Apply in 5 minutes with no credit score impact.",
  openGraph: {
    title: "Frontier Capital Partners | AI-Powered Funding for Small Businesses",
    description:
      "Working capital from $25K\u2013$250K for small businesses. AI-powered underwriting, 24-hour decisions, revenue-based repayment.",
    type: "website",
    url: "https://frontiercapitalpartners.us",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
