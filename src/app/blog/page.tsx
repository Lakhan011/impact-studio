import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";

export const articles = [
  {
    slug: "future-of-agency-design",
    title: "The Future of Agency Web Design in 2024",
    category: "Design Strategy",
    date: "Feb 12, 2024",
    readTime: "5 min read",
    image: "/gallery-1.webp",
    excerpt: "Exploring the shift toward micro-interactions, editorial typography, and high-performance no-code architectures.",
  },
  {
    slug: "maximizing-conversion-with-motion",
    title: "Maximizing Conversions Through Purposeful Motion",
    category: "Interactions",
    date: "Jan 28, 2024",
    readTime: "4 min read",
    image: "/gallery-2.webp",
    excerpt: "How deliberate animation guides user attention, minimizes bounce rates, and communicates brand confidence.",
  },
  {
    slug: "why-webflow-matters",
    title: "Why High-Growth Startups Choose Webflow Over Custom Code",
    category: "Engineering",
    date: "Jan 14, 2024",
    readTime: "6 min read",
    image: "/gallery-3.webp",
    excerpt: "Speed to market is everything. Here is why marketing teams and venture-backed founders thrive with Webflow.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Blog Hero */}
      <section className="section bg-[#FFF8EB] text-[#FF3128] pt-24 pb-16 px-6">
        <div className="main-container">
          <span className="text-xl md:text-2xl uppercase tracking-widest opacity-80 mb-4 block">
            Insights & Ideas
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[115px] font-medium uppercase leading-[0.95] tracking-tight">
            THE IMPACT JOURNAL
          </h1>
          <p className="mt-8 text-2xl sm:text-3xl md:text-[34px] leading-[1.3] font-normal opacity-90 max-w-[850px]">
            Thoughts on digital craft, brand psychology, interactive systems, and high-impact web design.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section pb-32 px-6">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col space-y-6"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FFF8EB] text-[#FF3128] px-3.5 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3 text-sm opacity-60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:underline leading-[1.2]">
                    {post.title}
                  </h2>
                  <p className="text-lg opacity-80 leading-[1.4] pt-1">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
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
