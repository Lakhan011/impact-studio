import React from "react";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export default function NotFound() {
  return (
    <main className="page-wrapper">
      <section className="section hero-global">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-404">
            <h1 className="no-margins">404</h1>
            <div className="subtitle">
              The page you&#x27;re looking for doesn&#x27;t exist or has been
              moved
            </div>
            <div className="flex-cta-center mg-top-16">
              <Link href="/" className="cta w-button">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
