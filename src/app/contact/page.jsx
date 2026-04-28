import Navbar from "@/components/layout/Navbar"; // adjust import path to match yours
import Footer from "@/components/layout/Footer"; // adjust import path to match yours
import ContactPage from "@/components/sections/Contact";

export const metadata = {
  title: "Contact — iQONEX",
  description: "Get in touch with iQONEX. Let's bring your ideas to real life.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      {/* <Footer /> */}
    </>
  );
}
