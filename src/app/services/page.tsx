import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import UnderTestimonial from "@/components/homepage/UnderTestimonial";
import ContactSection from "@/components/homepage/ContactSection";
import PageTitleFlip from "@/components/common/PageTitleFlip";
import ServiceSectionBlock from "@/components/services/ServiceSectionBlock";

export const metadata = {
  title: "Services | Impact Studio - Webflow Ecommerce website template",
  description:
    "Impact Studio is a Premium Webflow Template for agencies and creative studios looking for a trustworthy animated experience.",
};

export default function ServicesPage() {
  return (
    <main className="page-wrapper">
      {/* 1. Hero Services */}
      <section className="section hero-services">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-left">
            <PageTitleFlip title="Our services" />
          </div>
        </div>
      </section>

      {/* 2. UX Design */}
      <ServiceSectionBlock
        id="uxdesign"
        title="UX Design"
        smallDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        mediumDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        details={["Research", "Wireframes", "User Testing"]}
      />

      {/* 3. Webflow */}
      <ServiceSectionBlock
        id="webflow"
        className="section red"
        title="Webflow"
        smallDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        mediumDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        details={["Figma to Webflow", "Ecommerce", "Zapier & Memberstack"]}
        whiteDividers
      />

      {/* 4. App design */}
      <ServiceSectionBlock
        id="appdesign"
        title="App design"
        smallDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        mediumDesc="Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. In hac habitasse platea dictumst. Proin magna."
        details={["Prototypes", "Design systems", "User tests"]}
      />

      {/* 5. Testimonials Slider */}
      <TestimonialsSection />

      {/* 6. Under Testimonial Quote Banner */}
      <UnderTestimonial />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* 8. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
