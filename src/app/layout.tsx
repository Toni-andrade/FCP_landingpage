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
  title: "Frontier Capital Partners | AI-Powered Capital for Small Businesses",
  description:
    "Technology-driven merchant cash advance and working capital for America's underserved small businesses. AI-powered underwriting, 24-hour decisions, from $25K to $250K.",
  openGraph: {
    title: "Frontier Capital Partners",
    description: "Funding the businesses banks left behind.",
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
