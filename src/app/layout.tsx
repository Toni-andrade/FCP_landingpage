import type { Metadata } from "next";
import {
  Newsreader,
  Manrope,
  Inter,
  IBM_Plex_Mono,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { faqs } from "@/data/faqs";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* LP2 legacy fonts — loaded alongside new fonts, variable names match old code */
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

const SITE_URL = "https://frontiercapitalpartners.us";
const OG_DESCRIPTION =
  "Institutional-grade growth capital from $5K\u2013$250K for ambitious businesses. Revenue-based, 24-hour decisions, no credit score impact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Frontier | Institutional Grade Growth Capital",
  description: OG_DESCRIPTION,
  applicationName: "Frontier Capital Partners",
  category: "finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/brand/icon-white-outline.png",
    apple: "/brand/app-icon.png",
  },
  openGraph: {
    title: "Frontier | Institutional Grade Growth Capital",
    description: OG_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Frontier Capital Partners",
    locale: "en_US",
    images: [
      {
        url: "/brand/social-avatar.png",
        width: 1800,
        height: 1800,
        alt: "Frontier Capital Partners \u2014 institutional-grade growth capital",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Frontier | Institutional Grade Growth Capital",
    description: OG_DESCRIPTION,
    images: ["/brand/social-avatar.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService"],
  name: "Frontier Capital Partners",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-light.png`,
  image: `${SITE_URL}/brand/social-avatar.png`,
  description:
    "Institutional-grade growth capital from $5K\u2013$250K. Revenue-based, 24-hour decisions, no credit score impact.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@frontiercapitalpartners.us",
    contactType: "customer service",
  },
  areaServed: "US",
  priceRange: "$5,000\u2013$250,000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${inter.variable} ${plexMono.variable} ${dmSans.variable} ${dmSerif.variable}`}
    >
      <body className="antialiased">
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(orgSchema)}
        </Script>
        <Script
          id="ld-faqpage"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(faqSchema)}
        </Script>
      </body>
    </html>
  );
}
