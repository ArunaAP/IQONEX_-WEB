import Navbar from "@/components/layout/Navbar"; // adjust import path to match yours
import Footer from "@/components/layout/Footer"; // adjust import path to match yours
import ContactPage from "@/components/sections/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The IQONEX for web development, branding, SEO and software solutions.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
    </>
  );
}
