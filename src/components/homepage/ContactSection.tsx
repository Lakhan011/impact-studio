"use client";

import { useEffect, useRef, useState } from "react";

const socials = [
  { name: "Twitter", href: "https://www.twitter.com", icon: "/icon-twitter.svg" },
  { name: "Linked in", href: "https://www.linkedin.com", icon: "/icon-linkedin.svg" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "/icon-instagram.svg" },
];

const lines = [
  "Let’s talk",
  "Design & Business.",
  "Let’s make impact.",
];

interface ContactHeadingLineProps {
  text: string;
}

function ContactHeadingLine({ text }: ContactHeadingLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const updateFill = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the line's top enters lower portion of viewport (around 82% of viewport height)
      // Fully revealed when it reaches around 46% of viewport height
      const startY = windowHeight * 0.82;
      const endY = windowHeight * 0.46;

      const progress = (startY - rect.top) / (startY - endY);
      const clamped = Math.min(Math.max(progress, 0), 1);

      setFillPercent(clamped * 100);
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateFill();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateFill();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className="single-contact-heading"
      style={{
        position: "relative",
        width: "fit-content",
        display: "block",
      }}
    >
      {/* Base unrevealed text in pale salmon pink */}
      <h2
        className="h2-contact"
        style={{
          color: "var(--color--main, #ff3128)",
          opacity: 0.22,
          margin: 0,
          userSelect: "none",
        }}
      >
        {text}
      </h2>

      {/* Solid red revealed layer clipped from left to right */}
      <h2
        className="h2-contact"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: "var(--color--main, #ff3128)",
          margin: 0,
          clipPath: `inset(0 ${(100 - fillPercent).toFixed(2)}% 0 0)`,
          WebkitClipPath: `inset(0 ${(100 - fillPercent).toFixed(2)}% 0 0)`,
          pointerEvents: "none",
          willChange: "clip-path",
        }}
      >
        {text}
      </h2>
      <div className="overlay-contact-heading" style={{ display: "none" }} />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="wrap-contact-heading">
          {lines.map((text, idx) => (
            <ContactHeadingLine key={idx} text={text} />
          ))}
        </div>

        {/* Red Divider Line */}
        <div className="divider-contact" />

        {/* Bottom Bar: Social Links on Left, Email on Right */}
        <div className="bottom-contact">
          <div className="left-contact">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="single-contact-link w-inline-block"
              >
                <div className="circle-contact">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="icon-social"
                    src={item.icon}
                    alt={item.name}
                  />
                </div>
                <div>{item.name}</div>
              </a>
            ))}
          </div>

          <a href="mailto:hi@impact.com" className="single-contact-link w-inline-block">
            <div>HI@IMPACT.COM</div>
          </a>
        </div>
      </div>
    </section>
  );
}
