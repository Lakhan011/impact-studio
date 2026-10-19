"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MovingTextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section red">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-moving-animation">
          {/* Row 1: WE MAKE (slides from right to center) */}
          <div
            className="first-moving-animation"
            style={{
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(60px, 0, 0)",
              opacity: inView ? 1 : 0.85,
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
              willChange: "transform",
            }}
          >
            <h2 className="text-style-h1 moving-animation-serif">We make</h2>
          </div>

          {/* Row 2: TOP [pill] DESIGN (slides from left to center) */}
          <div
            className="second-moving-animation"
            style={{
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(-60px, 0, 0)",
              opacity: inView ? 1 : 0.85,
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, opacity 0.8s ease",
              willChange: "transform",
            }}
          >
            <h2 className="text-style-h1">Top</h2>
            <Image
              src="/pill-image.webp"
              alt="Studio"
              width={196}
              height={98}
              className="pill-moving-animation"
            />
            <h2 className="text-style-h1">Design</h2>
          </div>

          {/* Row 3: HAPPEN (slides from right to center) */}
          <div
            className="third-moving-animation"
            style={{
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(60px, 0, 0)",
              opacity: inView ? 1 : 0.85,
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.8s ease",
              willChange: "transform",
            }}
          >
            <h2 className="text-style-h1">Happen</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
