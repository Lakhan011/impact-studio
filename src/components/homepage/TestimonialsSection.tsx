"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Clark String",
    role: "Marketing Director",
    image: "/testimonial.webp",
    text: "“Working with Bonnie is a dream come true. Great communication, clear vision and one of a kind quality. We couldn’t be more happy with a results.",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder at Bloom",
    image: "/testimonial.webp",
    text: "“Impact Studio transformed our digital presence completely. The attention to detail and creative execution exceeded all our expectations.",
  },
  {
    name: "Michael Torres",
    role: "Head of Product",
    image: "/testimonial.webp",
    text: "“Fast, communicative, and wonderfully skilled. Our conversions doubled within two weeks of launching our new Webflow site.",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    image: "/testimonial.webp",
    text: "“From initial wireframes to the final Webflow animations, their craft is unmatched. They truly know how to make design meet business.",
  },
];

// Extend for infinite continuous sliding
const displayList = [...testimonials, testimonials[0], testimonials[1]];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(testimonials.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrent(testimonials.length - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrent((p) => p - 1);
    }
  };

  const next = () => {
    setIsTransitioning(true);
    setCurrent((p) => p + 1);
  };

  const handleTransitionEnd = () => {
    if (current >= testimonials.length) {
      setIsTransitioning(false);
      setCurrent(0);
    }
  };

  // Auto-next every 4000ms (matching data-delay="4000" in original Webflow slider)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      next();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section className="section red testimonials-slider-section">
      <div className="container-testimonials-slider">
        <div className="heading-left testimonial-heading">
          <h2 className="no-margins">Listen to others</h2>
        </div>

        <div
          className="master-wrap-slider"
          style={{ position: "relative" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Mask with smooth, unclipped peek layout extending naturally across screen */}
          <div
            className="mask-testimonials"
            style={{
              overflow: "visible",
              position: "relative",
              width: "100%",
              paddingBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "32px",
                transform: `translate3d(calc(-${current} * (100% + 32px)), 0, 0)`,
                transition: isTransitioning
                  ? "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
                willChange: "transform",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayList.map((item, index) => {
                const isActive = index === current;
                const isPeek = index > current;
                const isPast = index < current;

                return (
                  <div
                    key={index}
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "0",
                      opacity: isActive ? 1 : isPeek ? 0.45 : 0,
                      visibility:
                        isPast && !isTransitioning ? "hidden" : "visible",
                      transition: isTransitioning
                        ? "opacity 0.6s ease"
                        : "none",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className="tile-testimonial">
                      <div className="top-testiomnial">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="image-testimonial"
                        />
                        <div className="wrap-testimonial-name">
                          <div className="name-testimonial">{item.name}</div>
                          <div className="subname-testimonial">{item.role}</div>
                        </div>
                      </div>

                      <div className="bottom-testimonial">
                        <img
                          className="icon-quote-testimonial"
                          src="/icon-quote.svg"
                          alt="Quote"
                        />
                        <p className="text-testimonial">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows positioned with exact Webflow classes & SVG paths */}
          <button
            onClick={prev}
            aria-label="Previous Testimonial"
            className="arrow-testimonials left-arrow"
            style={{
              position: "absolute",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              className="icon-arrow-slider"
              viewBox="0 0 32 32"
              fill="none"
              style={{ width: "32px", height: "32px" }}
            >
              <path
                d="M24 16H7.33337M7.33337 16L15.3334 8M7.33337 16L15.3334 24"
                stroke="var(--color--main)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next Testimonial"
            className="arrow-testimonials right-arrow"
            style={{
              position: "absolute",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              className="icon-arrow-slider"
              viewBox="0 0 32 32"
              fill="none"
              style={{ width: "32px", height: "32px" }}
            >
              <path
                d="M7.99996 16H24.6666M24.6666 16L16.6666 8M24.6666 16L16.6666 24"
                stroke="var(--color--main)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
