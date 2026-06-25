import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about The IQONEX, our mission, values, and creative digital solutions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
