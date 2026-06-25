import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
import Script from "next/script";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theiqonex.com"),

  title: {
    default: "The IQONEX | Creative Software Company",
    template: "%s | The IQONEX",
  },

  description:
    "The IQONEX is a creative software company specializing in Web Development, UI/UX Design, Branding, SEO, ERP Solutions, and Custom Software Development.",

  keywords: [
    "The IQONEX",
    "Web Development",
    "UI UX Design",
    "Branding",
    "SEO",
    "ERP Development",
    "Software Company Sri Lanka",
    "Next.js Development",
    "Custom Software Development",
  ],

  authors: [{ name: "The IQONEX" }],

  creator: "The IQONEX",
  publisher: "The IQONEX",

  alternates: {
    canonical: "https://theiqonex.com",
  },

  openGraph: {
    title: "The IQONEX | Creative Software Company",
    description:
      "Creative software company specializing in Web Development, UI/UX, Branding, SEO and Software Solutions.",

    url: "https://theiqonex.com",
    siteName: "The IQONEX",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The IQONEX",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The IQONEX",
    description:
      "Creative software company specializing in Web Development, UI/UX, Branding and SEO.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The IQONEX",
    url: "https://theiqonex.com",
    logo: "https://theiqonex.com/logo.png",
    description:
      "Creative software company specializing in Web Development, UI/UX Design, Branding and SEO.",
    sameAs: [
      "https://www.linkedin.com/company/theiqonex",
      "https://www.facebook.com/theiqonex",
      "https://www.instagram.com/theiqonex",
      "https://github.com/TheIQONEX",
    ],
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <SmoothScrolling>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
