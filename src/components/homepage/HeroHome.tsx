"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroHomeProps {
  isRevealed?: boolean;
}

export default function HeroHome({ isRevealed = true }: HeroHomeProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    let lastY = 0;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const currentY = window.scrollY;
        if (Math.abs(currentY - lastY) >= 4) {
          lastY = currentY;
          setScrollY(currentY);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax scale on scroll for the hero image in reverse order (starts zoomed in at 1.35, scales down to 1.0 on scroll)
  const scrollScale = Math.max(1.0, +(1.35 - scrollY * 0.0005).toFixed(4));
  const textLeftOffset = Math.min(40, +(scrollY * 0.05).toFixed(1));
  const textRightOffset = Math.max(-40, -(scrollY * 0.08).toFixed(1));
  // Circle symbol rotation based on scroll
  const symbolRotation = -scrollY * 0.4;

  return (
    <section className="section hero-home" style={{ overflow: "hidden" }}>
      {/* Giant cut logo — absolutely positioned at top of section */}
      <img
        src="/logo-hero-cut.svg"
        alt=""
        className="logo-hero-home"
        style={{
          transform: isRevealed
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, -100%, 0)",
          opacity: isRevealed ? 1 : 0,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
          willChange: "transform, opacity",
        }}
      />

      {/* Main container */}
      <div className="w-layout-blockcontainer main-container w-container">
        {/* Master image hero wrapper */}
        <div
          className="master-image-hero"
          style={{
            transform: isRevealed
              ? "translate3d(0, 0, 0) scale3d(1, 1, 1)"
              : "translate3d(0, 160px, 0) scale3d(0.85, 0.85, 1)",
            opacity: isRevealed ? 1 : 0,
            transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease",
            willChange: "transform, opacity",
          }}
        >
          {/* The big photo container */}
          <div className="wrap-image-hero-home">
            <img
              src="/65baf0cce276836c833ff91b_Hero Home Impact Studio Webflow Template-p-1600.webp"
              alt="Impact Studio Model"
              className="image-hero-home"
              style={{
                transform: `translate3d(0px, 0px, 0px) scale3d(${scrollScale}, ${scrollScale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              }}
            />
          </div>

          {/* Overlaid serif italic text: MAKE IMPACT (bottom-left) */}
          <div
            className="text-absolute-hero"
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed
                ? `translate3d(0, ${textLeftOffset}px, 0)`
                : "translate3d(0, 30px, 0)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.4s ease-out",
            }}
          >
            Make Impact
          </div>

          {/* Overlaid sans-serif text: IMPROVE (right) */}
          <div
            className="text-absolute-hero-right"
            style={{
              opacity: isRevealed ? 1 : 0,
              transform: isRevealed
                ? `translate3d(0, ${textRightOffset}px, 0)`
                : "translate3d(0, 30px, 0)",
              transition:
                "opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.4s ease-out",
            }}
          >
            Improve
          </div>
        </div>

        {/* Title section below the image */}
        <div className="wrap-title-home">
          {/* Row 1: Impact studio */}
          <div className="single-title-home">
            <h1
              className="no-margins"
              style={{
                transform: isRevealed
                  ? "translate3d(0, 0%, 0) skew(0, 0deg)"
                  : "translate3d(0, 140%, 0) skew(0, 15deg)",
                opacity: isRevealed ? 1 : 0,
                transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, opacity 0.8s ease 0.35s",
              }}
            >
              Impact studio
            </h1>
          </div>

          {/* Row 2: Is where ✳ Design */}
          <div className="single-title-home">
            <h1
              className="no-margins"
              style={{
                transform: isRevealed
                  ? "translate3d(0, 0%, 0) skew(0, 0deg)"
                  : "translate3d(0, 140%, 0) skew(0, 15deg)",
                opacity: isRevealed ? 1 : 0,
                transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s, opacity 0.8s ease 0.45s",
              }}
            >
              Is where
            </h1>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `rotate(${symbolRotation}deg)`,
                willChange: "transform",
                transition: "transform 0.15s ease-out",
              }}
            >
              <Image
                src="/symbol-impact.svg"
                alt=""
                width={102}
                height={102}
                className="symbol-title-home symbol-spinning"
              />
            </div>
            <h1
              className="no-margins"
              style={{
                transform: isRevealed
                  ? "translate3d(0, 0%, 0) skew(0, 0deg)"
                  : "translate3d(0, 140%, 0) skew(0, 15deg)",
                opacity: isRevealed ? 1 : 0,
                transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s, opacity 0.8s ease 0.55s",
              }}
            >
              Design
            </h1>
          </div>

          {/* Row 3: Meets business */}
          <div className="single-title-home">
            <h1
              className="no-margins"
              style={{
                transform: isRevealed
                  ? "translate3d(0, 0%, 0) skew(0, 0deg)"
                  : "translate3d(0, 140%, 0) skew(0, 15deg)",
                opacity: isRevealed ? 1 : 0,
                transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.65s, opacity 0.8s ease 0.65s",
              }}
            >
              Meets business
            </h1>
          </div>
        </div>

        {/* Subtitle paragraph */}
        <div className="limit-subtitle-home">
          <div
            className="subtitle"
            style={{
              transform: isRevealed ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
              opacity: isRevealed ? 1 : 0,
              transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.75s, opacity 0.8s ease 0.75s",
            }}
          >
            Sed a libero. Cras id dui. In auctor lobortis lacus. Praesent blandit
            laoreet nibh. Fusce fermentum. Nullam varius nisi in augue. Vivamus
            ipsum nisl.
          </div>
        </div>
      </div>
    </section>
  );
}
