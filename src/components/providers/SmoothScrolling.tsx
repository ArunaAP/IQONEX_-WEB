"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth anchor scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;

      const href = target.getAttribute("href");

      if (href?.startsWith("/#")) {
        e.preventDefault();

        const id = href.replace("/#", "");
        const element = document.getElementById(id);

        if (element) {
          lenis.scrollTo(element);
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="/#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
