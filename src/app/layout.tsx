import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Geom } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

const geom = Geom({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geom",
});

export const metadata: Metadata = {
  title: {
    default: "theiqonex — Where Creativity Meets Technology",
    template: "%s | theiqonex",
  },
  description:
    "the iqonex is a creative software company specializing in UI/UX, Web Development, Branding, SEO, and ERP.",

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
  return (
    <html className={`${bebasNeue.variable} ${dmSans.variable} ${geom.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
