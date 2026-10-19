import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Licenses | Impact Studio",
  description: "Asset licenses and attributions for Impact Studio.",
};

export default function LicensesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      <section className="section pt-24 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase leading-[1.05] tracking-tight mb-12">
            LICENSES & CREDITS
          </h1>

          <div className="space-y-10 text-lg md:text-xl leading-[1.6] opacity-90">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                Photography
              </h2>
              <p>
                All photographic assets showcased throughout this template were sourced from Unsplash and Pexels under free commercial use licenses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                Typography
              </h2>
              <p>
                DM Sans is distributed under the SIL Open Font License. Zodiak is an editorial serif designed by Jérémie Hornus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight mb-4 text-[#FF3128]">
                Icons & Vector Art
              </h2>
              <p>
                Icons and glyphs were custom designed by Wavesdesign for the Impact Studio template system.
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
