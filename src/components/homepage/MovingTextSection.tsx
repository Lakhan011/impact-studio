"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MovingTextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Progress from 0 (entering from bottom) to 1 (leaving from top)
        const totalDist = windowHeight + rect.height;
        const currentDist = windowHeight - rect.top;
        const p = Math.min(Math.max(currentDist / totalDist, 0), 1);
        setScrollProgress(p);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax offsets: centered at progress = 0.5 matching Webflow reference
  const offset1 = (scrollProgress - 0.5) * -420;
  const offset2 = (scrollProgress - 0.5) * 420;
  const offset3 = (scrollProgress - 0.5) * -350;

  return (
    <section ref={sectionRef} className="section red" style={{ overflow: "hidden" }}>
      <div className="w-layout-blockcontainer main-container w-container" style={{ overflow: "visible" }}>
        <div className="master-moving-animation" style={{ overflow: "visible" }}>
          {/* Row 1: WE MAKE (Playfair Display italic serif, slides from right to left) */}
          <div
            className="first-moving-animation"
            style={{
              transform: `translate3d(${offset1}px, 0, 0)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          >
            <div className="text-style-h1 moving-animation-serif">We make</div>
          </div>

          {/* Row 2: TOP [pill] DESIGN (DM Sans, slides from left to right) */}
          <div
            className="second-moving-animation"
            style={{
              transform: `translate3d(${offset2}px, 0, 0)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          >
            <div className="text-style-h1 moving-animation-sans">Top</div>
            <Image
              src="/pill-image.webp"
              alt="Studio"
              width={196}
              height={98}
              className="pill-moving-animation"
            />
            <div className="text-style-h1 moving-animation-sans">Design</div>
          </div>

          {/* Row 3: HAPPEN (DM Sans, slides from right to left) */}
          <div
            className="third-moving-animation"
            style={{
              transform: `translate3d(${offset3}px, 0, 0)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          >
            <div className="text-style-h1 moving-animation-sans">Happen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
