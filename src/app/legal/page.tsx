import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Legal & Privacy | Impact Studio",
  description: "Terms of service and privacy policy for Impact Studio.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      <section className="section pt-24 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase leading-[1.05] tracking-tight mb-12">
            LEGAL & PRIVACY
          </h1>

          <div className="space-y-10 text-lg md:text-xl leading-[1.6] opacity-90">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                1. Overview
              </h2>
              <p>
                By accessing or using the Impact Studio website and associated templates, you agree to comply with and be bound by the following terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                2. Intellectual Property
              </h2>
              <p>
                All template components, visual architectures, typography selections, and design collateral are the intellectual property of Impact Studio and Wavesdesign, protected under international copyright treaties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                3. Privacy & Data Handling
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal identifiable information to outside parties. Contact form submissions are used solely for direct communication and discovery consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
