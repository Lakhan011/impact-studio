import React from "react";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import PageTitleFlip from "@/components/common/PageTitleFlip";
import { blogPosts } from "@/data/blogData";

export const metadata = {
  title: "Blog with impact | Impact Studio - Webflow Ecommerce website template",
  description:
    "Impact Studio is a Premium Webflow Template for agencies and creative studios looking for a trustworthy animated experience.",
};

export default function BlogPage() {
  return (
    <main className="page-wrapper">
      {/* 1. Hero Blogs */}
      <section className="section hero-blogs">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-left mg-bottom-80 center-landscape">
            <PageTitleFlip title="Blog with impact" />
          </div>
          <div className="w-dyn-list">
            <div role="list" className="grid-blog-halves w-dyn-items">
              {blogPosts.map((post) => (
                <div key={post.slug} role="listitem" className="w-dyn-item">
                  <Link href={`/blog/${post.slug}`} className="tile-blog w-inline-block">
                    <div className="wrap-blog-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="image-blog"
                      />
                    </div>
                    <div className="bottom-blog">
                      <div className="text-style-h3">{post.title}</div>
                      <div className="subtitle-blog">{post.subtitle}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
