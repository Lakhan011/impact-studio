"use client";

import React, { useEffect, useRef, useState } from "react";

export default function UnderTestimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (isRevealed || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsRevealed(true);
      }
    };

    checkVisibility();

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsRevealed(true);
          }
        },
        { threshold: 0.1 }
      );
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [isRevealed]);

  return (
    <section ref={sectionRef} className="testimonial-section">
      <div className="testimonial-content">
        <div
          className="testimonial-quote"
          style={{
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed
              ? "translate3d(0, 0, 0)"
              : "translate3d(0, 20px, 0)",
            transition:
              "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          “
        </div>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <p
            className="testimonial-text"
            style={{
              transform: isRevealed
                ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 200%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 20deg)",
              opacity: isRevealed ? 1 : 0,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
              transition:
                "transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
            }}
          >
            It’s hard to explain how much of a help Impact Studio was for our business and impact goals.
          </p>
        </div>
      </div>
    </section>
  );
}
