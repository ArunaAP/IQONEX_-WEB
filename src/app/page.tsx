import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import NextPages from "@/components/sections/Nextpages";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Marquee />
      <Work />
      <NextPages />
    </>
  );
}
