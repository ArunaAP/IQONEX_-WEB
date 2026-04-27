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
  title: "iqonex — Where Creativity Meets Technology",
  description:
    "iqonex is a creative software company specializing in UI/UX, Web Development, Branding, SEO, and ERP.",
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
