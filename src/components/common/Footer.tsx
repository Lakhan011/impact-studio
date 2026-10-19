"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="footer">
      {/* Full-width white logo */}
      <Image
        src="/logo-footer-white.svg"
        alt="Impact Studio"
        width={1440}
        height={120}
        className="logo-footer-big"
      />

      {/* Main footer body */}
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="main-footer">
          {/* Left: tagline */}
          <div className="left-main-footer">
            <p className="text-big-footer">
              Impact is where design meets innovation.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="right-footer">
            <div className="column-footer-link">
              <p className="heading-footer-link">Main pages</p>
              <Link href="/homepage" className="link-footer">Home</Link>
              <Link href="/about" className="link-footer">About us</Link>
              <Link href="/services" className="link-footer">Services</Link>
              <Link href="/projects" className="link-footer">Projects</Link>
            </div>

            <div className="column-footer-link">
              <p className="heading-footer-link">Other</p>
              <Link href="/homepage" className="link-footer">Home (sales)</Link>
              <Link href="/pricing" className="link-footer">Pricing</Link>
              <Link href="/blog" className="link-footer">Blog</Link>
              <Link href="/legal" className="link-footer">Legal</Link>
            </div>

            <div className="column-footer-link">
              <p className="heading-footer-link">Template</p>
              <Link href="/template/style-guide" className="link-footer">Style guide</Link>
              <Link href="/template/licenses" className="link-footer">Licenses</Link>
              <Link href="/template/changelog" className="link-footer">Changelog</Link>
              <Link href="/template/start-here" className="link-footer">Start here</Link>
              <Link href="/homepage" className="link-footer">All pages</Link>
            </div>
          </div>
        </div>

        {/* Legal bar & Back to Top */}
        <div className="legal-footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p className="text-legal-footer" style={{ margin: 0 }}>
            Template designed by{" "}
            <a href="https://www.wavesdesign.io/" target="_blank" rel="noreferrer" className="link-legal-footer">
              Wavesdesign
            </a>
            , powered by no-code tool Webflow
          </p>
          
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/" className="link-legal-footer">
              see all templates
            </Link>
            <button
              onClick={scrollToTop}
              className="link-legal-footer"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color: "inherit",
                fontSize: "inherit",
                textDecoration: "underline",
              }}
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
