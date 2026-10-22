"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ScrollHeading({
  as: Component = "h2",
  className = "no-margins",
  children,
  style,
}: ScrollHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflow: "hidden", display: "inline-block", width: "100%" }}
    >
      <Component
        className={className}
        style={{
          transform: isVisible
            ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
            : "translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 20deg)",
          transformStyle: "preserve-3d",
          opacity: isVisible ? 1 : 0,
          fontWeight: 500,
          lineHeight: "120%",
          willChange: "transform, opacity",
          transition:
            "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
          ...style,
        }}
      >
        {children}
      </Component>
    </div>
  );
}
