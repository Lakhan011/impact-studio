import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const metadata = {
  title: "About Us | Impact Studio",
  description: "Learn about Impact Studio, our journey, team, and design philosophy.",
};

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "12+", label: "Design Awards" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const team = [
    { name: "Dwight Schrute", role: "Co-Founder & Design Director", image: "/testimonial.webp" },
    { name: "Michael Scott", role: "Co-Founder & Creative Strategist", image: "/testimonial.webp" },
    { name: "Pam Beesly", role: "Head of Product Experience", image: "/testimonial.webp" },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Hero Section */}
      <section className="section red bg-[#FF3128] text-[#FFF8EB] pt-24 pb-28 md:py-36 px-6">
        <div className="main-container">
          <div className="max-w-[1100px]">
            <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
              About us
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[115px] font-medium uppercase leading-[0.95] tracking-tight">
              WE ARE IMPACT STUDIO
            </h1>
            <p className="mt-10 text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-normal opacity-90 max-w-[850px]">
              We help high-growth companies build unforgettable digital products, memorable brand identities, and high-converting Webflow platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Story */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] py-24 md:py-36 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-lg uppercase tracking-wider opacity-70 block mb-4">Our Origin</span>
              <h2 className="text-3xl sm:text-4xl md:text-[46px] font-medium uppercase leading-[1.1] tracking-tight">
                FOUNDED IN 2020 ON THE PREMISE OF RADICAL CREATIVITY
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col space-y-6 text-xl md:text-2xl leading-[1.5] font-normal opacity-90">
              <p>
                Founded by Dwight Schrute and Michael Scott in 2020, Impact Studio was created to bridge the gap between world-class visual design and uncompromising engineering speed.
              </p>
              <p>
                We believe that remarkable brands don’t just look attractive—they evoke emotions, simplify complex customer journeys, and consistently outperform traditional competitors.
              </p>
            </div>
          </div>

          {/* Large Image */}
          <div className="mt-16 md:mt-24 w-full aspect-[16/9] max-h-[640px] relative overflow-hidden bg-stone-200">
            <Image
              src="/under-testimonial.webp"
              alt="Impact Studio Culture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats By The Numbers */}
      <section className="section red bg-[#FF3128] text-[#FFF8EB] py-24 md:py-32 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <span className="text-6xl sm:text-7xl md:text-[90px] font-bold tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="text-xl md:text-2xl font-medium tracking-tight opacity-90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] py-24 md:py-36 px-6">
        <div className="main-container">
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-medium uppercase tracking-tight">
              THE TALENT BEHIND THE CRAFT
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col space-y-5 group">
                <div className="relative aspect-square w-full overflow-hidden bg-stone-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-2xl font-medium uppercase tracking-tight">{member.name}</h3>
                  <span className="text-lg opacity-80">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
