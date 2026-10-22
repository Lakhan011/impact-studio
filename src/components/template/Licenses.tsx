"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

const navItems = [
  { id: "images", label: "Images & vidoes" },
  { id: "icons", label: "Icons" },
  { id: "fonts", label: "Fonts" },
  { id: "other", label: "Other assets" },
];

export default function Licenses() {
  const [activeSection, setActiveSection] = useState("images");

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is scrolled near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("other");
        return;
      }

      // Check each section top position relative to viewport
      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="page-wrapper">
      {/* 1. Hero Template */}
      <section className="section red hero-template">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-template">
            <h1
              className="no-margins"
              style={{ color: "var(--color--light, #fff8eb)" }}
            >
              LICENSES
            </h1>
            <div className="limit-subtitle-template">
              <div
                className="subtitle"
                style={{ color: "var(--color--light, #fff8eb)" }}
              >
                All graphical assets in this template are licensed for personal
                and commercial use. If you&apos;d like to use a specific asset,
                please check the license below.
              </div>
            </div>
            <div className="flex-cta-center mg-top-16">
              <a
                href="https://webflow.com/templates/html/impactstudio-agency-website-template"
                target="_blank"
                rel="noopener noreferrer"
                className="cta white w-button"
              >
                Buy template
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content */}
      <section className="section" style={{ position: "relative" }}>
        <div className="w-layout-blockcontainer main-container w-container">
          <div
            className="columns-template-details w-row"
            style={{
              display: "flex",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            {/* Sticky Navigation */}
            <div
              className="left-column-template-details w-col w-col-4 w-col-stack"
              style={{
                position: "sticky",
                top: "100px",
                alignSelf: "flex-start",
                zIndex: 10,
              }}
            >
              <div
                className="tile-template-navigation"
                style={{
                  width: "100%",
                }}
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className={`link-template-navigation ${
                        isActive ? "w--current" : ""
                      }`}
                      style={{
                        fontSize: isActive ? "26px" : "24px",
                        fontWeight: isActive ? 500 : 400,
                        lineHeight: "135%",
                        color: "var(--color--main, #ff3128)",
                        textDecoration: "none",
                        transition: "all 0.2s ease-in-out",
                        display: "block",
                      }}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Details Column */}
            <div
              className="right-column-template-details w-col w-col-8 w-col-stack"
              style={{ flex: 1, minWidth: 0 }}
            >
              {/* Tile 1: Images & Videos */}
              <div id="images" className="tile-template-details">
                <h2 className="template-h2">IMAGES &amp; VIDEOS</h2>
                <p>
                  All images and videos used in Impact Studio Webflow Template
                  come from{" "}
                  <a
                    href="https://unsplash.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Unsplash
                  </a>
                  ,{" "}
                  <a
                    href="https://www.pexels.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Pexels
                  </a>
                  , and{" "}
                  <a
                    href="https://www.freepik.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Freepik
                  </a>
                  , and are free for personal and commercial use. Below you can
                  find links to some of them.
                  <br />
                  <br />
                  <a
                    href="https://unsplash.com/collections/BKgc8e074CM/impact-studio"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Unsplash Images Gallery
                  </a>
                  <br />
                  <br />
                  Freepik:
                  <br />
                  <a
                    href="https://www.freepik.com/author/wayhomestudio"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Team images from Wayhomestudio
                  </a>
                  <br />
                  <br />
                  Pexels
                  <br />
                  Showreel videos from{" "}
                  <a
                    href="https://www.pexels.com/@cottonbro/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Cottonbro Studio
                  </a>
                </p>
              </div>

              {/* Tile 2: Icons */}
              <div id="icons" className="tile-template-details">
                <h2 className="template-h2">ICONS</h2>
                <p>
                  All icons used in Impact Studio Template come from an open
                  source icon library -{" "}
                  <a
                    href="https://iconoir.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Iconoir
                  </a>
                  . Meaning they are are free for personal and commercial use.
                </p>
              </div>

              {/* Tile 3: Fonts */}
              <div id="fonts" className="tile-template-details">
                <h2 className="template-h2">FONTS</h2>
                <p>
                  <strong>Google Fonts:</strong>
                  <br />
                  Impact Studio Template is using one{" "}
                  <a
                    href="https://fonts.google.com/specimen/DM+Sans"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Google Font
                  </a>{" "}
                  called DM Sans. This Google Font is 100% free for personal and
                  commercial use.
                  <br />
                  <br />
                  <strong>Fontshare:</strong>
                  <br />
                  The Impact Studio template uses Zodiak, a closed-source font
                  from the Indian Type Foundry (ITF) that is 100% free for both
                  personal and commercial use, available exclusively via
                  ITF&apos;s free fonts service at Fontshare. By buying or using
                  this template, you agree to ITF&apos;s Free Font License (FFL).
                  <br />
                  <br />
                  Links:
                  <br />
                  <strong>Zodiak</strong>:{" "}
                  <a
                    href="https://www.fontshare.com/fonts/zodiak"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    https://www.fontshare.com/fonts/zodiak
                  </a>
                  <br />
                  <strong>Indian Type Foundry</strong>:{" "}
                  <a
                    href="http://indiantypefoundry.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    indiantypefoundry.com
                  </a>
                  <br />
                  <strong>Fontshare</strong>:{" "}
                  <a
                    href="https://www.fontshare.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    https://www.fontshare.com
                  </a>
                  <br />
                  <strong>Free Font License</strong>:{" "}
                  <a
                    href="https://www.fontshare.com/licenses/itf-ffl"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    https://www.fontshare.com/licenses/itf-ffl
                  </a>
                </p>
              </div>

              {/* Tile 4: Other Assets */}
              <div id="other" className="tile-template-details">
                <h2 className="template-h2">OTHER ASSETS</h2>
                <p>
                  Any other assets that were created by Wavesdesign during the
                  process of designing the template are free for personal and
                  commercial use and are 100% free for personal and commercial
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
