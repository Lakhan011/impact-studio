"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollHeading from "@/components/common/ScrollHeading";

interface ServiceSectionBlockProps {
  id: string;
  className?: string;
  title: string;
  smallDesc: string;
  mediumDesc: string;
  details: string[];
  whiteDividers?: boolean;
}

export default function ServiceSectionBlock({
  id,
  className = "section",
  title,
  smallDesc,
  mediumDesc,
  details,
  whiteDividers = false,
}: ServiceSectionBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={className}>
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid grid-single-service">
          <div className="left-single-service">
            <ScrollHeading as="h2" className="no-margins">
              {title}
            </ScrollHeading>
            <div
              className="paragraph-small"
              style={{
                transform: isVisible
                  ? "translate3d(0, 0, 0)"
                  : "translate3d(0, 40px, 0)",
                opacity: isVisible ? 1 : 0,
                willChange: "transform, opacity",
                transition:
                  "transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s, opacity 0.8s ease 0.15s",
              }}
            >
              {smallDesc}
            </div>
          </div>
          <div className="right-single-service">
            <div
              className="paragraph-medium"
              style={{
                transform: isVisible
                  ? "translate3d(0, 0, 0)"
                  : "translate3d(0, 50px, 0)",
                opacity: isVisible ? 1 : 0,
                willChange: "transform, opacity",
                transition:
                  "transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0.25s, opacity 0.8s ease 0.25s",
              }}
            >
              {mediumDesc}
            </div>
            <div className="master-service-details-list">
              {details.map((detail, idx) => {
                const isLast = idx === details.length - 1;
                const delay = 0.35 + idx * 0.1;
                return (
                  <div
                    key={idx}
                    className={`single-service-detailk ${
                      whiteDividers ? "white-dividers" : ""
                    } ${isLast ? "last-detail" : ""}`}
                    style={{
                      transform: isVisible
                        ? "translate3d(0, 0, 0)"
                        : "translate3d(0, 60px, 0)",
                      opacity: isVisible ? 1 : 0,
                      willChange: "transform, opacity",
                      transition: `transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}s, opacity 0.8s ease ${delay}s`,
                    }}
                  >
                    <h3 className="h3-no-capitals">{detail}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
