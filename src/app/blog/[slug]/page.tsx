import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import { blogPosts } from "@/data/blogData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="page-wrapper">
      {/* 1. Article Hero */}
      <section className="section hero-blog">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-blog-template">
            <h1 className="no-margins">{post.title}</h1>
            <div className="limit-subtitle-blog">
              <div className="subtitle">{post.subtitle}</div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="image-main-blog"
          />
        </div>

        <div className="w-layout-blockcontainer container-small w-container">
          <div className="w-richtext">
            <h3>Donec mi odio, faucibus at.</h3>
            <p>
              Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit
              dui, id egestas quam mauris ut lacus. Suspendisse feugiat. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Fusce id purus.
            </p>
            <p>
              Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Duis
              arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Proin faucibus arcu
              quis ante. Etiam imperdiet imperdiet orci.
            </p>
            <h4>
              Phasellus gravida semper nisi. Nunc sed turpis. Praesent ac massa
              at ligula laoreet iaculis.
            </h4>
            <p>
              Duis vel nibh at velit scelerisque suscipit. Praesent ac massa at
              ligula laoreet iaculis. Aenean commodo ligula eget dolor. Vivamus
              consectetuer hendrerit lacus. Phasellus ullamcorper ipsum rutrum
              nunc.
            </p>
            <blockquote>
              Phasellus a est. Sed mollis, eros et ultrices tempus, mauris ipsum
              aliquam libero, non adipiscing dolor urna a orci. Cras risus ipsum,
              faucibus ut, ullamcorper id, varius ac, leo. Phasellus consectetuer
              vestibulum elit. Fusce egestas elit eget lorem.
            </blockquote>
            <p>
              Quisque id odio. Curabitur at lacus ac velit ornare lobortis.
              Pellentesque libero tortor, tincidunt et, tincidunt eget, semper
              nec, quam. Quisque id odio.. Praesent blandit laoreet nibh. Nulla
              consequat massa quis enim. Morbi mattis ullamcorper velit. Morbi
              mattis ullamcorper velit. Nunc nulla. Proin sapien ipsum, porta a,
              auctor quis, euismod ut, mi. Etiam vitae tortor. Cras ultricies mi
              eu turpis hendrerit fringilla. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vivamus
              laoreet.
            </p>
            <h4>
              Mauris turpis nunc, blandit et, volutpat molestie, porta ut,
              ligula.
            </h4>
            <p>
              Suspendisse feugiat. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; In ac dui quis mi
              consectetuer lacinia. Vestibulum suscipit nulla quis orci.
            </p>
            <p>
              Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
              dolor, a pretium mi sem ut ipsum. Cras varius. Vivamus aliquet elit
              ac nisl. Vestibulum rutrum, mi nec elementum vehicula, eros quam
              gravida nisl, id fringilla neque ante vel mi. Nunc egestas, augue at
              pellentesque laoreet, felis eros vehicula leo, at malesuada velit
              leo quis pede.
            </p>
            <blockquote>
              Cras sagittis. Suspendisse potenti. Proin viverra, ligula sit amet
              ultrices semper, ligula arcu tristique sapien, a accumsan nisi
              mauris ac eros. Fusce fermentum. Vestibulum purus quam, scelerisque
              ut, mollis sed, nonummy id, metus.
            </blockquote>
            <p>
              Duis lobortis massa imperdiet quam. Fusce risus nisl, viverra et,
              tempor et, pretium in, sapien. Duis lobortis massa imperdiet quam.
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Duis lobortis massa
              imperdiet quam.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Check other blogs */}
      <section className="section padding-top-0">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="divider-bottom-160" />
          <div className="flex-heading-cta mg-bottom-64">
            <h2 className="no-margins">Check other blogs</h2>
            <Link
              href="/blog"
              className="line-link-block small-line-link w-inline-block"
            >
              <div>see all</div>
              <div className="underline-link-master small-underline-link-master">
                <div className="underline-link-fill" />
              </div>
            </Link>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="grid-blog-halves w-dyn-items">
              {otherPosts.map((other) => (
                <div key={other.slug} role="listitem" className="w-dyn-item">
                  <Link
                    href={`/blog/${other.slug}`}
                    className="tile-blog w-inline-block"
                  >
                    <div className="wrap-blog-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={other.image}
                        alt={other.title}
                        className="image-blog"
                      />
                    </div>
                    <div className="bottom-blog">
                      <div className="text-style-h3">{other.title}</div>
                      <div>{other.subtitle}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
