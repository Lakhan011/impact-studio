import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import { articles } from "../page";

export function generateStaticParams() {
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = articles.find((a) => a.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFF8EB] text-[#FF3128] font-main relative">
      {/* Article Header */}
      <article className="pt-24 pb-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-base md:text-lg font-medium uppercase tracking-wider mb-8 hover:underline opacity-80"
          >
            <span>← Back to Journal</span>
          </Link>

          <div className="flex items-center space-x-4 text-base md:text-lg opacity-70 mb-4 uppercase tracking-wider">
            <span className="font-semibold text-[#FF3128]">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium uppercase leading-[1.05] tracking-tight mb-10">
            {post.title}
          </h1>

          <div className="relative w-full aspect-[16/9] mb-14 overflow-hidden bg-stone-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg text-[#FF3128] space-y-8 text-xl md:text-2xl leading-[1.6] font-normal opacity-90">
            <p className="font-medium text-2xl md:text-3xl leading-[1.4] opacity-100">
              {post.excerpt}
            </p>
            <p>
              In modern digital product design, static layouts are no longer enough to build enduring brand affinity. Users experience dozens of digital surfaces each day; the experiences that lodge in memory are those that react intuitively to touch, scroll, and intention.
            </p>
            <blockquote className="bg-[#FF3128] text-[#FFF8EB] p-8 md:p-12 font-serif italic text-2xl md:text-3xl leading-[1.3] my-10 border-none">
              “Design is not just what it looks like and feels like. Design is how it makes the user feel valued and empowered.”
            </blockquote>
            <p>
              When Webflow and modern frontend frameworks like Next.js intersect, engineering and design teams achieve unprecedented synergy. Marketing teams can iterate autonomously, while developers maintain rigorous control over performance budgets and SEO optimization.
            </p>
          </div>
        </div>
      </article>

      {/* Footer & Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
