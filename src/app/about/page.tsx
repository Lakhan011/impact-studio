"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import UnderTestimonial from "@/components/homepage/UnderTestimonial";
import MovingTextSection from "@/components/homepage/MovingTextSection";
import MarqueeGallery from "@/components/homepage/MarqueeGallery";
import ContactSection from "@/components/homepage/ContactSection";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export default function AboutPage() {
  // Section 2 Hero Image Curtain scroll progress
  const heroImageRef = useRef<HTMLElement>(null);
  const [heroCurtainScale, setHeroCurtainScale] = useState(1);

  // Section 9 Showreel Video Curtain scroll progress
  const videoRef = useRef<HTMLElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [videoCurtainScale, setVideoCurtainScale] = useState(1);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Values section active hover state (defaults to 1 = COMMITED as in screenshot)
  const [activeValue, setActiveValue] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const windowHeight = window.innerHeight;

        // 2. Hero Image Curtain scaleX: 1 down to 0
        if (heroImageRef.current) {
          const rect = heroImageRef.current.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < windowHeight) {
            const start = windowHeight;
            const end = windowHeight * 0.3;
            const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
            setHeroCurtainScale(1 - p);
          }
        }

        // 3. Showreel Video Curtain scaleX: 1 down to 0
        if (videoRef.current) {
          const rect = videoRef.current.getBoundingClientRect();
          if (rect.bottom > 0 && rect.top < windowHeight) {
            const start = windowHeight;
            const end = windowHeight * 0.3;
            const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
            setVideoCurtainScale(1 - p);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (videoElementRef.current) {
      videoElementRef.current.muted = true;
      videoElementRef.current.defaultMuted = true;
      videoElementRef.current.playsInline = true;
      videoElementRef.current.play().catch(() => {});
    }
  }, []);

  const values = [
    {
      num: 1,
      title: "Efficient",
      desc: "Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna.",
    },
    {
      num: 2,
      title: "Commited",
      desc: "Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna.",
    },
    {
      num: 3,
      title: "Masters",
      desc: "Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna.",
    },
    {
      num: 4,
      title: "Crafty",
      desc: "Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna.",
    },
  ];

  const teamMembers = [
    {
      name: "Michael Scott",
      image: "/65be18faa9d744382c0b3e4f_Team 4.jpg",
    },
    {
      name: "Ryan Howard",
      image: "/65be18faf2a284760a51a316_Team 2.jpg",
    },
    {
      name: "Pam Halpert",
      image: "/65be18fba4270c124171b8d9_Team 3.jpg",
    },
  ];

  const logos = [
    "/65be19d629e4f1e5fa20aa7c_logoipsum-329 1.svg",
    "/65be19d18db36593bab61635_logoipsum-330 2.svg",
    "/65be19d1800bda510d111c55_logoipsum-289 1.svg",
    "/65be19d1fefb71a34a1ef31d_logoipsum-287 1.svg",
    "/65be19d22772a15cfc6dcdbf_logoipsum-331 1.svg",
    "/65be19d146d92a64e00c313a_logoipsum-284 1.svg",
    "/65be19d1bdf9c5fda8b37c7a_logoipsum-311 1.svg",
    "/65be19d1117a52590d218bbf_logoipsum-323 1.svg",
    "/65be19d1800bda510d111c55_logoipsum-289 1.svg",
    "/65be19d1b58ce9382d23cefb_logoipsum-317 1.svg",
    "/65be19d1e1b3497d79626f1e_logoipsum-332 1.svg",
    "/65be19d18db36593bab61635_logoipsum-330 2.svg",
  ];

  const awards = [
    { project: "Grateful for diversity", award: "Awwwards SOTD", year: "2023" },
    { project: "Lost in dance", award: "Awwwards SOTD", year: "2022" },
    { project: "Lost in dance", award: "CSS Design Awards", year: "2022" },
    { project: "Lost in dance", award: "Webflow Showcase", year: "2022" },
    { project: "Zwee", award: "Awwwards SOTM", year: "2021" },
    { project: "Kaili Swimwear Website", award: "Awwwards Developer Award", year: "2020" },
  ];

  const faqs = [
    {
      q: "How much can I customise Webflow template?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
    {
      q: "Do you offer discounts?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
    {
      q: "Why Impact Studio is a great template?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
    {
      q: "What value Impact Studio brings?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
    {
      q: "Who is Wavesdesign?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
    {
      q: "Why Wavesdesign templates are the best?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae posuere nisl. In dictum luctus arcu, eget feugiat quam varius at. Fusce magna ante,",
    },
  ];

  return (
    <main className="page-wrapper min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative" style={{ overflowX: "hidden", maxWidth: "100%" }}>
      {/* 1. HERO ABOUT SECTION */}
      <section className="section red hero-about" style={{ overflow: "hidden" }}>
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="flex-right">
            <div className="wrap-subtitle-about">
              <div
                data-w-id="45115cd7-a5b1-08a3-1d79-e232c901a239"
                style={{
                  transform:
                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
                className="subtitle"
              >
                Founded by Dwight Schrute and Michael Scott in 2020 from love to design and technology. Impact studio is where positive impact isn’t compromised by business goals
              </div>
            </div>
          </div>
        </div>

        <div
          data-w-id="54862846-2c44-4b1d-4299-353d021bfa0f"
          style={{ opacity: 1 }}
          className="master-moving-text-hero"
        >
          <div className="move-moving-texts-hero">
            <div className="single-moving-texts-hero">
              <h1 className="h1-moving-text">About</h1>
              <h1 className="h1-moving-text serfi-moving">Impact</h1>
              <h1 className="h1-moving-text">About</h1>
              <h1 className="h1-moving-text serfi-moving">Impact</h1>
            </div>
            <div className="single-moving-texts-hero">
              <h1 className="h1-moving-text">About</h1>
              <h1 className="h1-moving-text serfi-moving">Impact</h1>
              <h1 className="h1-moving-text">About</h1>
              <h1 className="h1-moving-text serfi-moving">Impact</h1>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO IMAGE OPEN (Curtain Reveal + View Badge) */}
      <section ref={heroImageRef} className="section-big-image-open">
        <img
          src="/hero-about.webp"
          alt="Impact Studio"
          className="image-about-hero"
        />

        {/* Circular VIEW Badge */}
        <div className="view-circle">
          <div className="wrap-text-view">
            <div className="text-view">View</div>
            <div className="text-view text-view-clone">View</div>
          </div>
        </div>

        {/* Split Curtains (Red #FF3128) */}
        <div
          className="side-open-image left-side"
          style={{
            transform: `scaleX(${heroCurtainScale})`,
            transformOrigin: "0% 50%",
            willChange: "transform",
          }}
        />
        <div
          className="side-open-image right-side"
          style={{
            transform: `scaleX(${heroCurtainScale})`,
            transformOrigin: "100% 50%",
            willChange: "transform",
          }}
        />
      </section>

      {/* 3. VALUES SECTION */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="flex-right">
            <div className="master-values-section">
              <div className="heading-left">
                <h2 className="no-margins">Values we live by</h2>
              </div>

              <div
                className="master-values-list"
                onMouseLeave={() => setActiveValue(null)}
              >
                {values.map((v, i) => (
                  <div
                    key={v.num}
                    className={`single-value-list ${i === values.length - 1 ? "list-item" : ""}`}
                    onMouseEnter={() => setActiveValue(i)}
                  >
                    <div className="left-value-list">
                      <div className="text-number-list">{v.num}</div>
                      <div className="wrap-text-list">
                        <div className="text-list-big">{v.title}</div>
                      </div>
                    </div>
                    <div
                      className="right-value-list"
                      style={{
                        opacity: activeValue === i ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        pointerEvents: activeValue === i ? "auto" : "none",
                      }}
                    >
                      <div>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-layout-grid grid-numbers-thirds">
                <div className="wrap-number">
                  <div className="text-big-number">10+</div>
                  <div className="text-sub-number">years on the market</div>
                </div>
                <div className="wrap-number">
                  <div className="text-big-number">200+</div>
                  <div className="text-sub-number">successful projects</div>
                </div>
                <div className="wrap-number">
                  <div className="text-big-number">1</div>
                  <div className="text-sub-number">powerfull mission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SLIDER SECTION */}
      <TestimonialsSection />

      {/* 5. UNDER TESTIMONIAL SECTION */}
      <UnderTestimonial />

      {/* 6. MEET THE TEAM SECTION */}
      <section className="section padding-top-80">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="heading-left mg-bottom-80 center-landscape">
            <h2 className="no-margins">Meet the team</h2>
          </div>

          <div className="w-layout-grid grid-team-thirds">
            {teamMembers.map((member, i) => (
              <div key={i} className="tile-team">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="image-team"
                />
                <h3 className="no-margins">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MOVING TEXT ("WE MAKE TOP DESIGN HAPPEN") */}
      <MovingTextSection />

      {/* 8. WE WORKED WITH SOME LEGENDS (CLIENT LOGOS) */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="heading-left mg-bottom-80 center-landscape">
            <h2 className="no-margins">We worked with some legends</h2>
          </div>

          <div className="w-layout-grid grid-logos">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                loading="lazy"
                className="image-logo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. SHOWREEL VIDEO WITH CURTAIN REVEAL */}
      <section ref={videoRef} className="section-big-image-open">
        <div
          className="video-big-video-section w-background-video w-background-video-atom"
        >
          <video
            ref={videoElementRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/65be1ac4e90ca4705de253fa_showreel-poster-00001.jpg"
            src="/65be1ac4e90ca4705de253fa_showreel-transcode.mp4"
            onLoadedData={() => {
              if (videoElementRef.current) {
                videoElementRef.current.play().catch(() => {});
              }
            }}
          >
            <source
              src="/65be1ac4e90ca4705de253fa_showreel-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="/65be1ac4e90ca4705de253fa_showreel-transcode.webm"
              type="video/webm"
            />
          </video>
        </div>

        {/* White / Cream Curtains (#FFF8EB) */}
        <div
          className="side-open-image left-side white-open"
          style={{
            transform: `scaleX(${videoCurtainScale})`,
            transformOrigin: "0% 50%",
            willChange: "transform",
          }}
        />
        <div
          className="side-open-image right-side white-open"
          style={{
            transform: `scaleX(${videoCurtainScale})`,
            transformOrigin: "100% 50%",
            willChange: "transform",
          }}
        />
      </section>

      {/* 10. AWARDS SECTION */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="flex-right">
            <div className="master-awards-section">
              <div className="heading-left mg-bottom-80">
                <h2 className="no-margins">Awarded for a reason</h2>
              </div>

              <div className="w-layout-grid grid-thirds-awards-table">
                <div className="cell top">
                  <div>Project</div>
                </div>
                <div className="cell top">
                  <div>Award</div>
                </div>
                <div className="cell right top">
                  <div>Year</div>
                </div>

                {awards.map((row, i) => (
                  <React.Fragment key={i}>
                    <div className="cell">
                      <div>{row.project}</div>
                    </div>
                    <div className="cell">
                      <div>{row.award}</div>
                    </div>
                    <div className="cell right">
                      <div>{row.year}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION SECTION */}
      <section className="section padding-top-0">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="divider-bottom-160" />

          <div className="w-layout-grid grid-faq-halves">
            <div className="left-faq-halves">
              <h2 className="no-margins">Questions we get</h2>
            </div>

            <div className="right-faq-halves">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="expandable-single-faq"
                    onClick={() => toggleFaq(i)}
                  >
                    <div className="expandable-top">
                      <div className="heading-expandable">{faq.q}</div>
                      <div className="plus-expand-master">
                        <div className="plus-line" />
                        <div
                          className="plus-line vertical"
                          style={{
                            transform: isOpen
                              ? "rotate(0deg) scale(0)"
                              : "rotate(-90deg) scale(1)",
                            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="expandable-bottom"
                      style={{
                        maxHeight: isOpen ? "240px" : "0px",
                        opacity: isOpen ? 1 : 0,
                        overflow: "hidden",
                        paddingTop: isOpen ? "16px" : "0px",
                        transition:
                          "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, padding-top 0.35s ease",
                      }}
                    >
                      <p className="faq-paragraph">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 12. MOVING GALLERY SECTION */}
      <MarqueeGallery />

      {/* 13. CONTACT SECTION */}
      <ContactSection />

      {/* 14. FOOTER & FLOATING BADGE */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
