import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

const projectsData = [
  {
    slug: "restoring-nature",
    title: "Restoring nature",
    category: "Branding",
    subtitle: "Branding for new healthcare company",
    image: "/65bae802686068b6e01d5657_Thumbnail-min.jpg",
    year: "2024",
    client: "Restoring Nature Co.",
    service: "Brand Identity, Strategy, Webflow",
    description: "Restoring Nature came to us with a vision to redefine holistic wellness. We crafted a vibrant, modern identity combined with a high-performance Webflow storefront that communicates trust, scientific backing, and organic purity.",
    nextSlug: "cool-fash",
    nextTitle: "Cool fash",
  },
  {
    slug: "cool-fash",
    title: "Cool fash",
    category: "Marketing",
    subtitle: "Marketing for new fashion brand",
    image: "/65bae96362d53e7973263294_Thumbnail-min.jpg",
    year: "2024",
    client: "Force Majeure Apparel",
    service: "Art Direction, Digital Campaign, E-Commerce",
    description: "Force Majeure is a contemporary streetwear label requiring an energetic digital launch campaign. We engineered an editorial lookbook experience with fluid transitions, dynamic typography, and instant checkout flow.",
    nextSlug: "wedding-smile",
    nextTitle: "Wedding Smile",
  },
  {
    slug: "wedding-smile",
    title: "Wedding Smile",
    category: "Development",
    subtitle: "Ecommerce for wedding company",
    image: "/65baead679e68738804a43ed_Thumbnail-min.jpg",
    year: "2023",
    client: "Smile Weddings Inc.",
    service: "Webflow Development, CMS Architecture",
    description: "A comprehensive booking and photography portal designed for modern couples. We delivered bespoke CMS capabilities allowing photographers and planners to curate wedding stories effortlessly.",
    nextSlug: "creative-existence",
    nextTitle: "Creative Existence",
  },
  {
    slug: "creative-existence",
    title: "Creative Existence",
    category: "Branding",
    subtitle: "Brand identity for new eco brand",
    image: "/65baea6f990294b8ec4847c1_Thumbnail-min.jpg",
    year: "2024",
    client: "Creative Existence Ltd.",
    service: "Eco Branding, Visual Identity, Sustainability Report",
    description: "Creative Existence focuses on environmental sustainability through thoughtful brand narratives. We established a natural, earthy visual language and interactive Webflow platform showcasing their ecological impact.",
    nextSlug: "bubble",
    nextTitle: "Bubble",
  },
  {
    slug: "bubble",
    title: "Bubble",
    category: "Design",
    subtitle: "3D renders for no-code tool",
    image: "/bubble-thumbnail.jpeg",
    year: "2024",
    client: "Bubble Interactive",
    service: "3D Motion, WebGL Concepts, Product Rendering",
    description: "A playful, vibrant 3D world created for the next-generation no-code builder. We designed tactile shapes, smooth motion physics, and clean user touchpoints that reflect modern software capabilities.",
    nextSlug: "restoring-nature",
    nextTitle: "Restoring nature",
  },
  {
    slug: "fabrics-studio",
    title: "Fabrics Studio",
    category: "Design",
    subtitle: "Modern textile and design system",
    image: "/under-testimonial.webp",
    year: "2023",
    client: "Fabrics Global",
    service: "Design System, UI/UX Prototyping",
    description: "Developing a timeless brand language for high-end sustainable fabrics, paired with an interactive 3D product visualizer.",
    nextSlug: "restoring-nature",
    nextTitle: "Restoring nature",
  },
];

export function generateStaticParams() {
  const params = projectsData.map((project) => ({
    slug: project.slug,
  }));
  params.push({ slug: "fabrics" });
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find(
    (p) => p.slug === slug || (slug === "fabrics" && p.slug === "wedding-smile")
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Project Header */}
      <section className="section pt-24 pb-16 px-6">
        <div className="main-container">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-lg font-medium uppercase tracking-wider mb-8 hover:underline opacity-80"
          >
            <span>← Back to all projects</span>
          </Link>

          <h1 className="text-5xl sm:text-7xl md:text-[95px] lg:text-[110px] font-medium uppercase leading-[0.95] tracking-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 pb-10 border-b-2 border-[#FF3128]/30 mt-12 text-lg md:text-xl">
            <div>
              <span className="text-sm uppercase tracking-widest opacity-60 block">Client</span>
              <span className="font-medium">{project.client}</span>
            </div>
            <div>
              <span className="text-sm uppercase tracking-widest opacity-60 block">Services</span>
              <span className="font-medium">{project.service}</span>
            </div>
            <div>
              <span className="text-sm uppercase tracking-widest opacity-60 block">Year</span>
              <span className="font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-sm uppercase tracking-widest opacity-60 block">Category</span>
              <span className="font-medium">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Hero Showcase Image (Whole screen matching Webflow .section-big-image-open) */}
      <section className="section-big-image-open cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="image-about-hero"
        />
        <div className="view-circle">
          <div className="wrap-text-view">
            <div className="text-view">View</div>
          </div>
        </div>
      </section>

      {/* Narrative & Details */}
      <section className="section py-16 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight leading-[1.1]">
                PROJECT OVERVIEW & IMPACT
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col space-y-6 text-xl md:text-2xl leading-[1.5] opacity-90 font-normal">
              <p>{project.description}</p>
              <p>
                Through recursive prototyping, custom Webflow interactions, and rigorous responsive testing, we created an experience that has elevated customer retention and increased page engagement significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="section red bg-[#FF3128] text-[#FFF8EB] py-24 md:py-32 px-6 text-center">
        <div className="main-container flex flex-col items-center">
          <span className="text-lg uppercase tracking-widest opacity-70 mb-4">Next Project</span>
          <Link
            href={`/projects/${project.nextSlug}`}
            className="group flex flex-col items-center"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-medium uppercase tracking-tight group-hover:underline transition-all">
              {project.nextTitle} →
            </h2>
          </Link>
        </div>
      </section>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
