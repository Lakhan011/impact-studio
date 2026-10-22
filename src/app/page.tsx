"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import ScrollHeading from "@/components/common/ScrollHeading";
import MorePowerSection from "@/components/sales/MorePowerSection";

export default function SalesPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    let lastY = 0;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const currentY = window.scrollY;
        if (Math.abs(currentY - lastY) >= 4) {
          lastY = currentY;
          setScrollY(currentY);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax calculations for the 3 mockup columns matching Webflow interaction a-34
  const col1Offset = Math.max(-300, Math.min(0, -scrollY * 0.22));
  const col2Offset = Math.min(0, -280 + scrollY * 0.22);
  const col3Offset = Math.max(-300, Math.min(0, -60 - scrollY * 0.18));

  return (
    <main className="page-wrapper" style={{ minHeight: "100vh", overflowX: "hidden", maxWidth: "100%" }}>
      {/* 1. HERO SALES SECTION */}
      <section className="section hero-sales">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="wrap-title-sales">
            <div className="single-title-home">
              <h1 className="no-margins">Top Template</h1>
            </div>
            <div className="single-title-home">
              <h1 className="no-margins">For</h1>
              <div
                className="symbol-wrap-sales"
                style={{
                  transform: `rotate(${-scrollY * 0.4}deg)`,
                  willChange: "transform",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <img
                  src="/symbol-impact.svg"
                  alt="Symbol"
                  className="symbol-title-home symbol-spinning"
                />
              </div>
              <h1 className="no-margins">Agencies</h1>
            </div>
          </div>

          <div className="limit-subtitle-sales">
            <div className="subtitle">
              Impact Studio is a Premium Webflow Template for agencies and
              creative studios looking for a trustworthy animated experience.
            </div>
          </div>

          <div className="flex-cta-sales">
            <a href="#pages" className="cta w-button">
              Explore pages
            </a>
            <a
              href="https://webflow.com/templates/html/impactstudio-agency-website-template"
              target="_blank"
              rel="noopener noreferrer"
              className="cta outline w-button"
            >
              Buy template
            </a>
          </div>
        </div>
      </section>

      {/* 2. 3-COLUMN PARALLAX MOCKUPS SECTION */}
      <div className="section-sales-mockups">
        <div className="container-sales-mockups w-container">
          <div className="w-layout-grid grid-thirds-mokckups sales-mokcups">
            {/* Column 1 */}
            <div
              className="sales-mockups-column first-column"
              style={{
                transform: `translate3d(0, ${col1Offset}px, 0)`,
                transition: "transform 0.1s ease-out",
                willChange: "transform",
              }}
            >
              <Link href="/homepage" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-8.webp"
                  alt="Process Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/homepage" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-7.webp"
                  alt="Moving Text Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/about" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-5.webp"
                  alt="Contact Mockup"
                  className="sales-mock-image"
                />
              </Link>
            </div>

            {/* Column 2 */}
            <div
              className="sales-mockups-column second-column"
              style={{
                transform: `translate3d(0, ${col2Offset}px, 0)`,
                transition: "transform 0.1s ease-out",
                willChange: "transform",
              }}
            >
              <Link href="/about" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-6.webp"
                  alt="Hero Homepage Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/homepage" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-1.webp"
                  alt="Testimonials Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/contact" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-3.webp"
                  alt="Services Mockup"
                  className="sales-mock-image"
                />
              </Link>
            </div>

            {/* Column 3 */}
            <div
              className="sales-mockups-column third-column"
              style={{
                transform: `translate3d(0, ${col3Offset}px, 0)`,
                transition: "transform 0.1s ease-out",
                willChange: "transform",
              }}
            >
              <Link href="/about" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-4.webp"
                  alt="Values Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/about" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-2.webp"
                  alt="About Hero Mockup"
                  className="sales-mock-image"
                />
              </Link>
              <Link href="/about" className="sales-mock-link-block w-inline-block">
                <img
                  src="/sales/gal-5.webp"
                  alt="Projects Mockup"
                  className="sales-mock-image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INCLUDED IN IMPACT STUDIO SECTION */}
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="center-heading">
            <h2 className="no-margins">Included in impact studio</h2>
            <div>
              Impact Studio comes with everything you need to get your website
              off the ground.
            </div>
          </div>

          <div className="w-layout-grid grid-included">
            {/* 13+ pages */}
            <div className="included-card">
              <div className="included-padding-wrap">
                <h3 className="no-margins">13+ pages</h3>
              </div>
              <img
                src="/sales/pages.svg"
                alt="13+ Pages"
                className="image-included"
              />
            </div>

            {/* 20+ sections */}
            <div className="included-card">
              <div className="included-padding-wrap">
                <h3 className="no-margins">20+ sections</h3>
              </div>
              <img
                src="/sales/sections.svg"
                alt="20+ Sections"
                className="image-included"
              />
            </div>

            {/* 20+ Styles & Symbols */}
            <div className="included-card">
              <div className="included-padding-wrap">
                <h3 className="no-margins">
                  20+ Styles &amp; Symbols
                  <br />
                </h3>
              </div>
              <img
                src="/sales/styles.svg"
                alt="20+ Styles & Symbols"
                className="image-included"
              />
            </div>

            {/* Figma File Included */}
            <div
              id="w-node-_1e6fe6ad-2a80-667c-2956-1349e6a906c9-44160c1a"
              className="included-card figma-card"
              style={{ gridColumn: "1 / -1" }}
            >
              <img
                src="/sales/figma.svg"
                alt="Figma Logo"
                className="icon-figma"
              />
              <div className="wrap-figma-content">
                <h3 className="no-margins">
                  FIGMA FILE INCLUDED
                </h3>
                <p>
                  To give you 100% control over the design, together with Webflow
                  project, you also get the Figma file. After the purchase,
                  simply send us an email to{" "}
                  <a href="mailto:templates@wavesdesign.io">
                    templates@wavesdesign.io
                  </a>{" "}
                  and we will be happy to forward you the Figma file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RED PAGES SHOWCASE SECTION (#pages) */}
      <section className="section red">
        <div className="w-layout-blockcontainer main-container w-container">
          <div id="pages" className="master-sales-pages">
            {/* MAIN PAGES */}
            <div className="single-sales-pages">
              <ScrollHeading as="h2" className="center-tablet">
                Main pages
              </ScrollHeading>
              <div className="w-layout-grid grid-thirds-sales-page">
                <Link href="/homepage" className="sales-card w-inline-block">
                  <img
                    src="/sales/home.webp"
                    alt="Home"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Home</h3>
                </Link>

                <Link href="/about" className="sales-card w-inline-block">
                  <img
                    src="/sales/about.webp"
                    alt="About"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">About</h3>
                </Link>

                <Link href="/services" className="sales-card w-inline-block">
                  <img
                    src="/sales/services.webp"
                    alt="Services"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Services</h3>
                </Link>

                <Link href="/contact" className="sales-card w-inline-block">
                  <img
                    src="/sales/contact.webp"
                    alt="Contact"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Contact</h3>
                </Link>

                <Link href="/projects" className="sales-card w-inline-block">
                  <img
                    src="/sales/projects.webp"
                    alt="Projects"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Projects</h3>
                </Link>

                <Link
                  href="/projects/restoring-nature"
                  className="sales-card w-inline-block"
                >
                  <img
                    src="/sales/project-page.webp"
                    alt="Project Page"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Project page (CMS)</h3>
                </Link>
              </div>
            </div>

            {/* OTHER PAGES */}
            <div className="single-sales-pages">
              <ScrollHeading as="h2" className="center-tablet">
                Other pages
              </ScrollHeading>
              <div className="w-layout-grid grid-thirds-sales-page">
                <Link href="/blog" className="sales-card w-inline-block">
                  <img
                    src="/sales/blog.webp"
                    alt="Blog"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Blog</h3>
                </Link>

                <Link href="/blog" className="sales-card w-inline-block">
                  <img
                    src="/sales/blog-post.webp"
                    alt="Blog Post"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Blog post (CMS)</h3>
                </Link>

                <Link href="/pricing" className="sales-card w-inline-block">
                  <img
                    src="/sales/pricing.webp"
                    alt="Pricing"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Pricing</h3>
                </Link>

                <Link
                  href="/pricing"
                  className="sales-card w-inline-block"
                >
                  <img
                    src="/sales/product.webp"
                    alt="Product"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Product (Ecom)</h3>
                </Link>

                <Link href="/not-found" className="sales-card w-inline-block">
                  <img
                    src="/sales/404.webp"
                    alt="404"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">404</h3>
                </Link>

                <Link href="/protected" className="sales-card w-inline-block">
                  <img
                    src="/sales/401.webp"
                    alt="Password Protected"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Password protected</h3>
                </Link>

                <Link href="/legal" className="sales-card w-inline-block">
                  <img
                    src="/sales/legal.webp"
                    alt="Legal"
                    className="image-sales-page"
                  />
                  <h3 className="no-margins">Legal</h3>
                </Link>
              </div>
            </div>

            {/* TEMPLATE PAGES */}
            <div className="single-sales-pages">
              <ScrollHeading as="h2" className="center-tablet">
                Template pages
              </ScrollHeading>
              <div className="w-layout-grid grid-fourths-sales-fourths">
                <Link
                  href="/template/style-guide"
                  className="sales-card w-inline-block"
                >
                  <h3 className="no-margins">Style guide</h3>
                </Link>
                <Link
                  href="/template/licenses"
                  className="sales-card w-inline-block"
                >
                  <h3 className="no-margins">Licenses</h3>
                </Link>
                <Link
                  href="/template/start-here"
                  className="sales-card w-inline-block"
                >
                  <h3 className="no-margins">Start here</h3>
                </Link>
                <Link
                  href="/template/changelog"
                  className="sales-card w-inline-block"
                >
                  <h3 className="no-margins">Changelog</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVEN MORE POWER WITH IMPACT STUDIO SECTION */}
      <MorePowerSection />

      {/* 6. FOOTER & FLOATING BADGE */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
