import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "Style Guide | Impact Studio",
  description: "Impact Studio design system, colors, typography, and UI elements.",
};

export default function StyleGuidePage() {
  const colors = [
    { name: "Primary Red", hex: "#FF3128", class: "bg-[#FF3128] text-white" },
    { name: "Cream Background", hex: "#FFF8EB", class: "bg-[#FFF8EB] text-[#FF3128] border-2 border-[#FF3128]" },
    { name: "Elevation Light", hex: "#FFF0E3", class: "bg-[#FFF0E3] text-[#FF3128] border-2 border-[#FF3128]" },
    { name: "Elevation Main", hex: "#FF4138", class: "bg-[#FF4138] text-white" },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      <section className="section pt-24 pb-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
            Design System
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium uppercase leading-[0.95] tracking-tight mb-16">
            STYLE GUIDE
          </h1>

          {/* Color Palette */}
          <div className="mb-20">
            <h2 className="text-3xl font-medium uppercase tracking-tight mb-8">Color Tokens</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map((c, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <div className={`h-32 rounded-2xl flex items-end p-4 font-mono text-sm ${c.class}`}>
                    {c.hex}
                  </div>
                  <span className="font-medium text-lg">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-20">
            <h2 className="text-3xl font-medium uppercase tracking-tight mb-8">Typography System</h2>
            <div className="flex flex-col space-y-8 border-t-2 border-b-2 border-[#FF3128] py-8">
              <div>
                <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Display Headline (DM Sans)</span>
                <p className="text-4xl sm:text-6xl font-medium uppercase tracking-tight">IMPACT DISPLAY HEADLINE</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Editorial Accent (Zodiak Italic)</span>
                <p className="text-4xl sm:text-5xl font-serif italic">We Make Top Design Happen</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Body Text (DM Sans)</span>
                <p className="text-xl md:text-2xl leading-[1.5] max-w-[700px]">
                  Impact Studio uses a harmonious combination of high-contrast display geometry and elegant editorial serif italics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBadge />
    </main>
  );
}
