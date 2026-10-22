import React from "react";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Changelog | Impact Studio - Webflow Ecommerce website template",
  description:
    "Impact Studio is a Premium Webflow Template for agencies and creative studios looking for a trustworthy animated experience.",
};

export default function ChangelogPage() {
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
              CHANGELOG
            </h1>
            <div className="limit-subtitle-template">
              <div
                className="subtitle"
                style={{ color: "var(--color--light, #fff8eb)" }}
              >
                Documentation of template changes
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

      {/* 2. Changelog Entry */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="tile-changelog">
            <div>20.02.2024</div>
            <h2>1.1 Template release</h2>
            <p>Initial Impact Studio Template release.</p>
          </div>
        </div>
      </section>

      {/* 3. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
