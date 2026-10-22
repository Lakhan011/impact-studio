"use client";

import React, { useEffect, useState, useRef } from "react";

interface PageTitleFlipProps {
  title: string;
  className?: string;
}

export default function PageTitleFlip({
  title,
  className = "no-margins",
}: PageTitleFlipProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Graceful page flip entrance on mount / page change
    const frameId = requestAnimationFrame(() => {
      setIsRevealed(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <h1
      ref={titleRef}
      className={className}
      style={{
        transform: isRevealed
          ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
          : "translate3d(0px, 85px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(12deg) skew(0deg, 0deg)",
        opacity: isRevealed ? 1 : 0,
        transformStyle: "preserve-3d",
        transformOrigin: "0% 100%",
        willChange: "transform, opacity",
        transition:
          "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {title}
    </h1>
  );
}
