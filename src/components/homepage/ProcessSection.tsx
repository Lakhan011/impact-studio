"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollHeading from "@/components/common/ScrollHeading";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    step: "1",
    title: "Research",
    description:
      "Focussed on understanding your business requirements, users and problems",
  },
  {
    step: "2",
    title: "Ideation & design",
    description:
      "In this stage we work closely to come up with lots of solutions and finalize design.",
  },
  {
    step: "3",
    title: "Develop and maintain",
    description:
      "I develop your product in Webflow and help you with maintaining it.",
  },
];

function ProcessRow({ item }: { item: ProcessStep }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="single-process-circle">
      <div
        className="big-process-circle"
        style={{
          transform: isVisible ? "scale3d(1, 1, 1)" : "scale3d(0.7, 0.7, 1)",
          opacity: isVisible ? 1 : 0,
          willChange: "transform, opacity",
          transition:
            "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s, opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s",
        }}
      >
        {item.step}
      </div>
      <div
        className="right-process-circle"
        style={{
          transform: isVisible
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, 100px, 0)",
          opacity: isVisible ? 1 : 0,
          willChange: "transform, opacity",
          transition:
            "transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s, opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s",
        }}
      >
        <h3
          className="no-margins"
          style={{
            fontSize: "30px",
            fontWeight: 500,
            textTransform: "uppercase",
            lineHeight: "120%",
            color: "var(--color--main)",
          }}
        >
          {item.title}
        </h3>
        <p
          className="no-margins"
          style={{
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "140%",
            color: "var(--color--main)",
          }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="section padding-top-80">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="center-heading mg-bottom-80">
          <ScrollHeading as="h2" className="no-margins">
            Process that works for you
          </ScrollHeading>
        </div>

        <div className="master-process-circles">
          {steps.map((item, index) => (
            <ProcessRow key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
