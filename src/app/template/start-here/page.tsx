import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Start Here | Impact Studio",
  description: "Getting started guide for Impact Studio template.",
};

export default function StartHerePage() {
  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      <section className="section pt-24 pb-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase leading-[1.05] tracking-tight mb-8">
            START HERE
          </h1>
          <p className="text-2xl font-normal opacity-90 mb-12">
            Welcome to Impact Studio! Here is a quick guide to tailoring this template to your agency’s brand.
          </p>

          <div className="space-y-8">
            <div className="p-8 border-2 border-[#FF3128] rounded-2xl bg-[#FFF0E3]">
              <h2 className="text-2xl font-medium uppercase tracking-tight mb-2">1. Update Brand Color Tokens</h2>
              <p className="text-lg opacity-80">
                All main colors are centralized in <code>globals.css</code>. Modify <code>--color--main</code> and <code>--color--light</code> to customize the palette instantly.
              </p>
            </div>

            <div className="p-8 border-2 border-[#FF3128] rounded-2xl bg-[#FFF0E3]">
              <h2 className="text-2xl font-medium uppercase tracking-tight mb-2">2. Populate CMS Projects</h2>
              <p className="text-lg opacity-80">
                Edit <code>src/app/projects/page.tsx</code> and <code>src/app/projects/[slug]/page.tsx</code> to feature your own agency clients, case studies, and photography.
              </p>
            </div>

            <div className="p-8 border-2 border-[#FF3128] rounded-2xl bg-[#FFF0E3]">
              <h2 className="text-2xl font-medium uppercase tracking-tight mb-2">3. Connect Contact & Lead Forms</h2>
              <p className="text-lg opacity-80">
                Integrate your chosen CRM, Formspree, or Resend API key directly into <code>src/app/contact/page.tsx</code>.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/homepage"
              className="inline-flex px-8 py-4 bg-[#FF3128] text-[#FFF8EB] rounded-full text-lg font-medium hover:bg-[#FF4138] transition-all"
            >
              Explore Homepage →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
