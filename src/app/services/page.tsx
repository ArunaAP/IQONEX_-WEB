import { Metadata } from "next";
import ServiceClient from "./ServiceClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web Development, UI/UX Design, Branding, SEO and Custom Software Development services.",
};

export default function ServicePage() {
  return <ServiceClient />;
}
