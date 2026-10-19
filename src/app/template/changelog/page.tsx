import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Changelog | Impact Studio",
  description: "Version release history for Impact Studio template.",
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      <section className="section pt-24 pb-32 px-6">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase leading-[1.05] tracking-tight mb-12">
            CHANGELOG
          </h1>

          <div className="border-2 border-[#FF3128] bg-[#FFF0E3] p-8 md:p-10 rounded-3xl flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-[#FF3128]/30 pb-4">
              <span className="text-2xl font-bold uppercase tracking-tight">Version 1.0.0</span>
              <span className="text-sm uppercase tracking-widest opacity-60">Initial Release</span>
            </div>
            <ul className="space-y-3 text-lg opacity-90">
              <li>• Complete 13+ page layouts & responsive breakpoints</li>
              <li>• Interactive CMS dynamic routing for Projects and Journal</li>
              <li>• Fluid Framer Motion animations & custom loader transition</li>
              <li>• Complete color tokens, typography, and symbol integration</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
