"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const footerLinkClass = (href: string) =>
    pathname === href ? "link-footer w--current" : "link-footer";

  return (
    <section className="footer">
      {/* Full-width white logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-footer-white.svg"
        alt="Impact Studio"
        className="logo-footer-big"
      />

      {/* Main footer body */}
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="main-footer">
          {/* Left: tagline */}
          <div className="left-main-footer">
            <div className="text-big-footer">
              Imapct is where design meets innovation.
            </div>
          </div>

          {/* Right: link columns */}
          <div className="right-footer">
            <div className="column-footer-link">
              <div className="heading-footer-link">Main pages</div>
              <Link
                href="/homepage"
                className={footerLinkClass("/homepage")}
                aria-current={pathname === "/homepage" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={footerLinkClass("/about")}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                About us
              </Link>
              <Link
                href="/services"
                className={footerLinkClass("/services")}
                aria-current={pathname === "/services" ? "page" : undefined}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={footerLinkClass("/projects")}
                aria-current={pathname === "/projects" ? "page" : undefined}
              >
                Projects
              </Link>
            </div>

            <div className="column-footer-link">
              <div className="heading-footer-link">Other</div>
              <Link
                href="/"
                className={footerLinkClass("/")}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home (sales)
              </Link>
              <Link
                href="/pricing"
                className={footerLinkClass("/pricing")}
                aria-current={pathname === "/pricing" ? "page" : undefined}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className={footerLinkClass("/blog")}
                aria-current={pathname === "/blog" ? "page" : undefined}
              >
                Blog
              </Link>
              <Link
                href="/legal"
                className={footerLinkClass("/legal")}
                aria-current={pathname === "/legal" ? "page" : undefined}
              >
                Legal
              </Link>
            </div>

            <div className="column-footer-link">
              <div className="heading-footer-link">Template</div>
              <Link
                href="/template/style-guide"
                className={footerLinkClass("/template/style-guide")}
                aria-current={pathname === "/template/style-guide" ? "page" : undefined}
              >
                Style guide
              </Link>
              <Link
                href="/template/licenses"
                className={footerLinkClass("/template/licenses")}
                aria-current={pathname === "/template/licenses" ? "page" : undefined}
              >
                Licenses
              </Link>
              <Link
                href="/template/changelog"
                className={footerLinkClass("/template/changelog")}
                aria-current={pathname === "/template/changelog" ? "page" : undefined}
              >
                Changelog
              </Link>
              <Link
                href="/template/start-here"
                className={footerLinkClass("/template/start-here")}
                aria-current={pathname === "/template/start-here" ? "page" : undefined}
              >
                Start here
              </Link>
              <Link href="/#pages" className="link-footer">All pages</Link>
              <a
                href="https://webflow.com/templates/html/impactstudio-agency-website-template"
                target="_blank"
                rel="noreferrer"
                className="link-footer"
              >
                Buy template
              </a>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="legal-footer">
          <div className="text-legal-footer">
            Template designed by{" "}
            <a
              href="https://www.wavesdesign.io/"
              target="_blank"
              rel="noreferrer"
              className="link-legal-footer"
            >
              Wavesdesign
            </a>
            , powered by no-code tool Webflow
          </div>
          <div className="text-legal-footer">
            <a
              href="https://webflow.com/templates/designers/wavesdesign"
              target="_blank"
              rel="noreferrer"
              className="link-legal-footer"
            >
              see all templates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
