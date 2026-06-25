import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "View our portfolio of web development, branding, UI/UX design, SEO, and software development projects delivered by The IQONEX.",
};

export default function WorkPage() {
  return <WorkClient />;
}
