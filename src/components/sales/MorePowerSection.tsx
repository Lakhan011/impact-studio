"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollHeading from "@/components/common/ScrollHeading";

const features = [
  {
    title: "Premium, custom, simply great",
    description:
      "Yes, we know... it's easy to say it, but that's the fact. We did put a lot of thought into the template. Impact Studio was designed by an award-winning designer. Layouts you will find in our template are custom made to fit the industry after carefully made research.",
  },
  {
    title: "Optimised for speed",
    description:
      "We used our best practices to make sure your new website loads fast. All of the images are compressed to have as little size as possible. Whenever possible we used vector formats - the format made for the web.",
  },
  {
    title: "Responsive",
    description:
      "Impact Studio is optimized to offer a frictionless experience on every screen. No matter how you combine our sections, they will look good on desktop, tablet, and phone.",
  },
  {
    title: "Reusable animations",
    description:
      "Both complex and simple animations are an inseparable element of modern website. We created our animations in a way that can be easily reused, even by Webflow beginners.",
  },
  {
    title: "Modular",
    description:
      "Our template is modular, meaning you can combine different sections as well as single elements, like buttons, images, etc. with each other without losing on consistency of the design. Long story short, different elements will always look good together.",
  },
  {
    title: "100% customisable",
    description:
      "On top of being modular, Impact Studio was created using the best Webflow techniques, like: global Color Swatches, reusable classes, symbols and more.",
  },
  {
    title: "CMS",
    description:
      "Impact Studio includes a blog and projects collections that are made on the powerful Webflow CMS. This will let you add new content extremely easily.",
  },
  {
    title: "Ecommerce",
    description:
      "Impact Studio Agency Webflow Template comes with eCommerce set up, so you can start selling your services straight away.",
  },
  {
    title: "Figma included",
    description:
      "To give you 100% control over the design, together with Webflow project, you also get the Figma file.",
  },
];

function FeatureCard({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
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

  // Delay based on column (0, 1, 2)
  const colDelay = (index % 3) * 0.15;

  return (
    <div
      ref={cardRef}
      className="more-power-card"
      style={{
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : "translate3d(0, 50px, 0)",
        opacity: isVisible ? 1 : 0,
        willChange: "transform, opacity",
        transition: `transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) ${colDelay}s, opacity 0.8s ease ${colDelay}s`,
      }}
    >
      <h3 className="no-margins">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default function MorePowerSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSubtitleVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div ref={headerRef} className="center-heading">
          <ScrollHeading as="h2" className="no-margins">
            Even more power with impact studio
          </ScrollHeading>
          <div
            style={{
              transform: subtitleVisible
                ? "translate3d(0, 0, 0)"
                : "translate3d(0, 30px, 0)",
              opacity: subtitleVisible ? 1 : 0,
              willChange: "transform, opacity",
              transition:
                "transform 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s, opacity 0.8s ease 0.2s",
            }}
          >
            Overview of all the features included in Impact Studio Webflow
            Template.
          </div>
        </div>

        <div className="w-layout-grid grid-thirds-all-features">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="flex-cta-center mg-top-72">
          <a
            href="https://webflow.com/templates/html/impactstudio-agency-website-template"
            target="_blank"
            rel="noopener noreferrer"
            className="cta w-button"
          >
            Buy template
          </a>
        </div>
      </div>
    </section>
  );
}
