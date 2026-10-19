"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroHomeProps {
  isRevealed?: boolean;
}

export default function HeroHome({ isRevealed = true }: HeroHomeProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax subtle scale on scroll for the hero image matching Webflow
  const scrollScale = Math.min(1.15, 1 + scrollY * 0.0002);
  // Circle symbol rotation based on scroll: scrolling up moves clockwise, scrolling down moves counter-clockwise
  const symbolRotation = -scrollY * 0.4;

  return (
    <section className="section hero-home">
      {/* Giant cut logo — absolutely positioned at top of section */}
      <img
        src="/logo-hero-cut.svg"
        alt=""
        className="logo-hero-home"
        style={{
          transform: isRevealed
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, -40px, 0)",
          opacity: isRevealed ? 1 : 0.8,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
          willChange: "transform",
        }}
      />

      {/* Main container */}
      <div
        className="w-layout-blockcontainer main-container w-container"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        {/* Master image hero wrapper */}
        <div className="master-image-hero" style={{ width: "100%", position: "relative" }}>
          {/* The big photo container */}
          <div
            className="wrap-image-hero-home"
            style={{ width: "100%", maxWidth: "1280px" }}
          >
            <img
              src="/65baf0cce276836c833ff91b_Hero Home Impact Studio Webflow Template-p-1600.webp"
              alt="Impact Studio Model"
              className="image-hero-home"
              style={{
                willChange: "transform",
                transform: `scale3d(${scrollScale}, ${scrollScale}, 1)`,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>

          {/* Overlaid serif italic text: MAKE IMPACT (bottom-left) */}
          <div
            className="text-absolute-hero"
            style={{
              opacity: isRevealed ? 1 : 0.8,
              transform: isRevealed
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, 20px, 0)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            Make Impact
          </div>

          {/* Overlaid sans-serif text: IMPROVE (right) */}
          <div
            className="text-absolute-hero-right"
            style={{
              opacity: isRevealed ? 1 : 0.8,
              transform: isRevealed
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, 20px, 0)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            Improve
          </div>
        </div>

        {/* Title section below the image */}
        <div className="wrap-title-home">
          {/* Row 1: Impact studio */}
          <div className="single-title-home">
            <h1 className="no-margins">Impact studio</h1>
          </div>

          {/* Row 2: Is where ✳ Design */}
          <div className="single-title-home">
            <h1 className="no-margins">Is where</h1>
            <Image
              src="/symbol-impact.svg"
              alt=""
              width={102}
              height={102}
              className="symbol-title-home"
              style={{
                transform: `rotate(${symbolRotation}deg)`,
                willChange: "transform",
                transition: "transform 0.15s ease-out",
              }}
            />
            <h1 className="no-margins">Design</h1>
          </div>

          {/* Row 3: Meets business */}
          <div className="single-title-home">
            <h1 className="no-margins">Meets business</h1>
          </div>
        </div>

        {/* Subtitle paragraph */}
        <div className="limit-subtitle-home">
          <div className="subtitle">
            Sed a libero. Cras id dui. In auctor lobortis lacus. Praesent blandit
            laoreet nibh. Fusce fermentum. Nullam varius nisi in augue. Vivamus
            ipsum nisl.
          </div>
        </div>
      </div>
    </section>
  );
}
