"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="navbar w-nav" role="banner">
      <div className="container-navbar">
        {/* Logo / Brand */}
        <Link href="/homepage" className="brand-navbar w-nav-brand link-brand-navbar">
          <Image
            src="/logo-footer-white.svg"
            alt="Impact Studio"
            width={120}
            height={24}
            style={{ filter: "invert(26%) sepia(83%) saturate(2000%) hue-rotate(338deg)" }}
          />
        </Link>

        {/* Desktop Nav Menu */}
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link href="/homepage" className="nav-link w-nav-link">Home</Link>
          <Link href="/about" className="nav-link w-nav-link">About</Link>
          <Link href="/services" className="nav-link w-nav-link">Services</Link>
          <Link href="/projects" className="nav-link w-nav-link">Projects</Link>

          {/* Other dropdown */}
          <div
            className="dropdown w-dropdown"
            onMouseEnter={() => setOpenDropdown("other")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="dropdown-toggle w-dropdown-toggle">
              <span className="text-dropdown">Other</span>
              <Image
                src="/symbol-impact.svg"
                alt=""
                width={20}
                height={20}
                className="image-chevron-dropdown"
                style={{ opacity: 0.6 }}
              />
            </div>
            {openDropdown === "other" && (
              <div className="dropdown-list w-dropdown-list w--open">
                <Link href="/contact" className="link-dropdown w-dropdown-link">Contact</Link>
                <Link href="/blog" className="link-dropdown w-dropdown-link">Blog</Link>
                <Link href="/pricing" className="link-dropdown w-dropdown-link">Pricing</Link>
                <Link href="/legal" className="link-dropdown w-dropdown-link">Legal</Link>
              </div>
            )}
          </div>

          {/* Template dropdown */}
          <div
            className="dropdown w-dropdown"
            onMouseEnter={() => setOpenDropdown("template")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="dropdown-toggle w-dropdown-toggle">
              <span className="text-dropdown">Template</span>
              <Image
                src="/symbol-impact.svg"
                alt=""
                width={20}
                height={20}
                className="image-chevron-dropdown"
                style={{ opacity: 0.6 }}
              />
            </div>
            {openDropdown === "template" && (
              <div className="dropdown-list w-dropdown-list w--open">
                <Link href="/template/style-guide" className="link-dropdown w-dropdown-link">Style Guide</Link>
                <Link href="/template/licenses" className="link-dropdown w-dropdown-link">Licenses</Link>
                <Link href="/template/start-here" className="link-dropdown w-dropdown-link">Start Here</Link>
                <Link href="/template/changelog" className="link-dropdown w-dropdown-link">Changelog</Link>
              </div>
            )}
          </div>

          {/* Right side CTAs */}
          <div className="right-navbar">
            <Link href="/" className="cta outline nav-cta">Buy Template</Link>
          </div>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="menu-button w-nav-button"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: "none" }}
        >
          <div className="wrap-menu-button">
            <div className="line-menu" />
            <div className="line-menu second-line" />
            <div className="line-menu" />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <nav role="navigation" className="nav-menu w-nav-menu" style={{ display: "flex" }}>
          <Link href="/homepage" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/services" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/projects" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/blog" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/pricing" className="nav-link w-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="/" className="cta outline nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Buy Template</Link>
        </nav>
      )}
    </div>
  );
}
