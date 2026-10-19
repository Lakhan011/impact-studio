import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import ProcessSection from "@/components/homepage/ProcessSection";

export const metadata = {
  title: "Services | Impact Studio",
  description: "Explore our range of design, development, and strategic services for modern brands.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      num: "01",
      title: "UX & Product Design",
      desc: "We research customer behavior, validate UX architectures, and construct intuitive, fluid interfaces that convert visitors into lifelong advocates.",
      deliverables: ["User Research & Personas", "Wireframes & Interactive Prototypes", "Design Systems", "Usability Testing"],
    },
    {
      num: "02",
      title: "Webflow Development",
      desc: "Turn your visionary designs into lightning-fast, pixel-perfect, fully-responsive web applications built on scalable no-code architecture.",
      deliverables: ["Custom Webflow Development", "CMS Architecture", "Advanced Animations", "API Integrations"],
    },
    {
      num: "03",
      title: "Brand Identity",
      desc: "Craft a distinct voice, iconic logo system, and striking visual presence that commands respect across every touchpoint.",
      deliverables: ["Brand Strategy & Positioning", "Logo & Typography Suites", "Motion & 3D Brand Assets", "Brand Guidelines"],
    },
    {
      num: "04",
      title: "Growth & Optimization",
      desc: "Continuous refinement, A/B testing, and conversion-centered design that propels metrics forward month after month.",
      deliverables: ["Conversion Rate Optimization", "Technical SEO Audits", "Landing Page Velocity", "Maintenance & Iteration"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Services Hero */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] pt-24 pb-20 md:py-32 px-6">
        <div className="main-container">
          <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
            Capabilities
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[115px] font-medium uppercase leading-[0.95] tracking-tight">
            OUR SERVICES
          </h1>
          <p className="mt-8 text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-normal opacity-90 max-w-[850px]">
            Comprehensive design, development, and strategic execution tailored for market leaders and ambitious startups.
          </p>
        </div>
      </section>

      {/* Services List Details */}
      <section className="section red bg-[#FF3128] text-[#FFF8EB] py-24 md:py-36 px-6">
        <div className="main-container">
          <div className="flex flex-col divide-y-2 divide-[#FFF8EB]/30">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-2 text-2xl md:text-3xl font-medium opacity-70">
                  {service.num}
                </div>
                <div className="lg:col-span-5">
                  <h2 className="text-3xl sm:text-4xl md:text-[46px] font-medium uppercase tracking-tight leading-[1.1] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl md:text-2xl leading-[1.4] opacity-90">
                    {service.desc}
                  </p>
                </div>
                <div className="lg:col-span-5 bg-[#FF4138] p-8 md:p-10 rounded-2xl flex flex-col space-y-4">
                  <span className="text-sm uppercase tracking-widest font-semibold opacity-70">Key Deliverables</span>
                  <ul className="space-y-3 text-lg md:text-xl font-medium">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-3">
                        <span className="text-lg">✳</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Box */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] py-20 px-6 text-center">
        <div className="main-container flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight mb-8">
            Ready to elevate your product?
          </h2>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#FF3128] text-[#FFF8EB] rounded-full text-xl font-medium hover:bg-[#FF4138] transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Start a project
          </Link>
        </div>
      </section>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
