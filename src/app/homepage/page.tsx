"use client";

import { useState } from "react";
import Loader from "@/components/common/Loader";
import FloatingBadge from "@/components/common/FloatingBadge";
import Footer from "@/components/common/Footer";
import HeroHome from "@/components/homepage/HeroHome";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import UnderTestimonial from "@/components/homepage/UnderTestimonial";
import ProcessSection from "@/components/homepage/ProcessSection";
import MovingTextSection from "@/components/homepage/MovingTextSection";
import MarqueeGallery from "@/components/homepage/MarqueeGallery";
import ContactSection from "@/components/homepage/ContactSection";

export default function Homepage() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* Full-screen red loader with spinning starburst */}
      <Loader minDuration={1200} onComplete={() => setLoaderDone(true)} />

      {/* Page content with reveal animation synchronized to loader exit */}
      <HeroHome isRevealed={loaderDone} />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <UnderTestimonial />
      <ProcessSection />
      <MovingTextSection />
      <MarqueeGallery />
      <ContactSection />
      <Footer />

      {/* Floating bottom-left badge */}
      <FloatingBadge />
    </main>
  );
}
