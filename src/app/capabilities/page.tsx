import { Metadata } from "next";
import CapabilitiesClient from "./CapabilitiesClient";

export const metadata: Metadata = {
  title: "Digital Services & Capabilities",
  description:
    "The IQONEX provides Web Development, UI/UX Design, Branding, SEO, ERP Systems, and Custom Software Solutions for modern businesses.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesClient />;
}
