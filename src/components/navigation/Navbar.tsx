"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="navbar w-nav" role="banner" data-collapse="medium">
      <div className="container-navbar">
        {/* Logo / Brand */}
        <div className="left-navbar">
          <Link href="/" className="link-brand-navbar w-nav-brand">
            <img
              src="/logo-impact-red.svg"
              alt="Impact"
              className="brand-navbar"
            />
          </Link>
        </div>

        {/* Right side: menu, mobile toggle and cart */}
        <div className="right-navbar">
          {/* Nav menu (desktop / collapsed mobile overlay) */}
          <nav
            role="navigation"
            className={`nav-menu w-nav-menu${isMobileMenuOpen ? " is-mobile-open" : ""}`}
          >
            <Link href="/homepage" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link href="/projects" className="nav-link" onClick={closeMobileMenu}>
              Projects
            </Link>

            {/* Other dropdown */}
            <div
              className="dropdown w-dropdown"
              onMouseEnter={() => setOpenDropdown("other")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div
                className="dropdown-toggle w-dropdown-toggle"
                onClick={() => setOpenDropdown(openDropdown === "other" ? null : "other")}
              >
                <span className="text-dropdown">Other</span>
                <img
                  src="/nav-arrow-down.svg"
                  alt=""
                  className="image-chevron-dropdown"
                />
              </div>
              {openDropdown === "other" && (
                <div className="dropdown-list w-dropdown-list w--open">
                  <Link
                    href="/contact"
                    className={`link-dropdown w-dropdown-link ${pathname === "/contact" ? "w--current" : ""}`}
                    aria-current={pathname === "/contact" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/blog"
                    className={`link-dropdown w-dropdown-link ${pathname === "/blog" || pathname?.startsWith("/blog/") ? "w--current" : ""}`}
                    aria-current={pathname === "/blog" || pathname?.startsWith("/blog/") ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pricing"
                    className={`link-dropdown w-dropdown-link ${pathname === "/pricing" ? "w--current" : ""}`}
                    aria-current={pathname === "/pricing" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/legal"
                    className={`link-dropdown w-dropdown-link ${pathname === "/legal" ? "w--current" : ""}`}
                    aria-current={pathname === "/legal" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Legal
                  </Link>
                  <Link
                    href="/#pages"
                    className="link-dropdown w-dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    All pages
                  </Link>
                </div>
              )}
            </div>

            {/* Template dropdown */}
            <div
              className="dropdown w-dropdown"
              onMouseEnter={() => setOpenDropdown("template")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div
                className="dropdown-toggle w-dropdown-toggle"
                onClick={() => setOpenDropdown(openDropdown === "template" ? null : "template")}
              >
                <span className="text-dropdown">Template</span>
                <img
                  src="/nav-arrow-down.svg"
                  alt=""
                  className="image-chevron-dropdown"
                />
              </div>
              {openDropdown === "template" && (
                <div className="dropdown-list w-dropdown-list w--open">
                  <Link
                    href="/"
                    className={`link-dropdown w-dropdown-link ${pathname === "/" ? "w--current" : ""}`}
                    aria-current={pathname === "/" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Home (sales)
                  </Link>
                  <Link
                    href="/template/style-guide"
                    className={`link-dropdown w-dropdown-link ${pathname === "/template/style-guide" ? "w--current" : ""}`}
                    aria-current={pathname === "/template/style-guide" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Style guide
                  </Link>
                  <Link
                    href="/template/licenses"
                    className={`link-dropdown w-dropdown-link ${pathname === "/template/licenses" ? "w--current" : ""}`}
                    aria-current={pathname === "/template/licenses" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Licenses
                  </Link>
                  <Link
                    href="/template/start-here"
                    className={`link-dropdown w-dropdown-link ${pathname === "/template/start-here" ? "w--current" : ""}`}
                    aria-current={pathname === "/template/start-here" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Start here
                  </Link>
                  <Link
                    href="/template/changelog"
                    className={`link-dropdown w-dropdown-link ${pathname === "/template/changelog" ? "w--current" : ""}`}
                    aria-current={pathname === "/template/changelog" ? "page" : undefined}
                    onClick={() => setOpenDropdown(null)}
                  >
                    Changelog
                  </Link>
                  <Link
                    href="/#pages"
                    className="link-dropdown w-dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    All pages
                  </Link>
                  <a
                    href="https://webflow.com/templates/designers/wavesdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-dropdown w-dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    All templates
                  </a>
                  <a
                    href="https://www.wavesdesign.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-dropdown w-dropdown-link"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Our website
                  </a>
                </div>
              )}
            </div>

            {/* Buy template CTA (inside the nav menu, like the reference) */}
            <a
              href="https://webflow.com/templates/html/impactstudio-agency-website-template"
              target="_blank"
              rel="noopener noreferrer"
              className="cta outline nav-cta w-button"
              onClick={closeMobileMenu}
            >
              Buy Template
            </a>
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="menu-button w-nav-button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="wrap-menu-button">
              <div className="line-menu first-line" />
              <div className="line-menu second-line" />
            </div>
          </button>

          {/* Cart */}
          <div className="cart-navbar">
            <a
              href="#"
              className="cta cart-navb-ar w-inline-block"
              role="button"
              aria-haspopup="dialog"
              aria-label="Open cart"
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
            >
              <div className="w-inline-block">Cart</div>
            </a>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div
          className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
          data-node-type="commerce-cart-container-wrapper"
          onClick={() => setIsCartOpen(false)}
          style={{
            zIndex: 10001,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            data-node-type="commerce-cart-container"
            role="dialog"
            aria-modal="true"
            aria-label="Cart"
            className="w-commerce-commercecartcontainer cart-container"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--color--light, #fff8eb)",
              width: "100%",
              maxWidth: "520px",
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "0px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
          >
            <div
              className="w-commerce-commercecartheader"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <h4
                className="w-commerce-commercecartheading"
                style={{
                  margin: 0,
                  color: "var(--color--main, #ff3128)",
                  fontSize: "22px",
                  lineHeight: "28px",
                  fontWeight: 500,
                  fontFamily: "var(--font-general-sans), sans-serif",
                }}
              >
                Your Cart
              </h4>
              <button
                type="button"
                className="w-commerce-commercecartcloselink w-inline-block"
                role="button"
                aria-label="Close cart"
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1c3533",
                }}
              >
                <svg width="14px" height="14px" viewBox="0 0 16 16">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fillRule="nonzero" fill="currentColor">
                      <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div
              className="w-commerce-commercecartformwrapper"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "240px",
              }}
            >
              <div
                className="w-commerce-commercecartemptystate"
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "60px 24px",
                }}
              >
                <div
                  aria-label="This cart is empty"
                  aria-live="polite"
                  style={{
                    color: "var(--color--main, #ff3128)",
                    fontSize: "20px",
                    fontWeight: 400,
                    textAlign: "center",
                    fontFamily: "var(--font-general-sans), sans-serif",
                  }}
                >
                  No items found.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
