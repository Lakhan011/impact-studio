import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import ContactSection from "@/components/homepage/ContactSection";
import { projectsData } from "@/data/projectsData";

export function generateStaticParams() {
  const params = projectsData.map((project) => ({
    slug: project.slug,
  }));
  params.push({ slug: "restoring-nature" });
  params.push({ slug: "wedding-smile" });
  params.push({ slug: "fabrics-studio" });
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find(
    (p) =>
      p.slug === slug ||
      (slug === "wedding-smile" && p.slug === "fabrics") ||
      (slug === "fabrics-studio" && p.slug === "fabrics")
  );

  if (!project) {
    notFound();
  }

  const otherProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <main className="page-wrapper">
      {/* 1. Hero Project */}
      <section className="section hero-project">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="wrap-hero-project">
            <div className="title-wrap-left">
              <h1 className="no-margins">{project.title}</h1>
              <div className="limit-subtitle-project">
                <div className="subtitle">{project.subtitle}</div>
              </div>
              <div className="list-details-project">
                <div className="single-project-detail">
                  <div className="text-project-detail regular-weight">Client:</div>
                  <div className="text-project-detail">{project.client}</div>
                </div>
                <div className="single-project-detail">
                  <div className="text-project-detail regular-weight">Completed:</div>
                  <div className="text-project-detail">{project.completed}</div>
                </div>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="single-project-detail w-inline-block"
                >
                  <div className="text-project-detail regular-weight">Website:</div>
                  <div className="text-project-detail">{project.website}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Big Image Open */}
      <section className="section-big-image-open">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="image-about-hero"
        />
        <div className="side-open-image left-side white-open" />
        <div className="side-open-image right-side white-open" />
      </section>

      {/* 3. Section Overview Narrative */}
      <section className="section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="w-richtext">
            <p>
              Recently, the team at Brand Lab was approached by XYZ Company, a
              leading e-commerce business, to redesign their website and create a
              cohesive brand identity.
            </p>
            <h2>Project kick off</h2>
            <p>
              To kick off the project, the team at Brand Lab began by conducting
              user research to understand the needs and behaviors of XYZ Company&#x27;s
              target audience. Based on this research, they created personas and user
              journeys to inform the design process.
            </p>
            <p>
              Next, the team at Tech Studio worked on developing a design system for
              XYZ Company.
            </p>
            <blockquote>
              This included defining the brand&#x27;s visual identity, typography,
              and color palette.
            </blockquote>
            <p>
              Using this design system as a guide, the team designed wireframes and
              high-fidelity mockups for the website&#x27;s user interface (UI).
            </p>
            <h3>Bringing design to life</h3>
            <p>
              Once the UI design was finalized, the team at Brand Lab used Webflow
              to bring the design to life. They developed custom interactions and
              animations to enhance the user experience (UX) and ensure that the
              website was visually appealing and easy to navigate.
            </p>
            <p>
              Throughout the project, the team at Brand Lab worked closely with the
              team at XYZ Company to ensure that the end result met their needs and
              expectations. The final product was a beautifully designed website
              that accurately represented XYZ Company&#x27;s brand and effectively
              met the needs of their target audience.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Gallery Thirds */}
      <section className="section gallery-project">
        <div className="wrapper-project-gallery w-dyn-list">
          <div role="list" className="grid-gallery-thirds w-dyn-items">
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-thirds-1.jpg"
                  alt="Gallery 1"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-thirds-2.jpg"
                  alt="Gallery 2"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-thirds-3.jpg"
                  alt="Gallery 3"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Wide 1 */}
      <section className="section gallery-project">
        <div className="wrapper-project-gallery w-dyn-list">
          <div role="list" className="list-wide-gallery w-dyn-items">
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-wide-1.jpg"
                  alt="Wide Gallery 1"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Results Narrative */}
      <section className="section">
        <div className="w-layout-blockcontainer container-small w-container">
          <div className="w-richtext">
            <h2>The results were rocket-ish</h2>
            <p>
              Based on the research, we created wireframes to map out the new
              website&#x27;s layout and navigation. These wireframes were then
              reviewed and refined with the company&#x27;s stakeholders to ensure
              they aligned with the company&#x27;s goals and objectives.
            </p>
            <h3>Design</h3>
            <p>
              With the wireframes as a guide, we got to work on the design of the
              website.
            </p>
            <p>
              We also incorporated the company&#x27;s branding to give the website a
              cohesive look and feel.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Gallery Wide 2 */}
      <section className="section gallery-project">
        <div className="wrapper-project-gallery w-dyn-list">
          <div role="list" className="list-wide-gallery w-dyn-items">
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-wide-2.jpg"
                  alt="Wide Gallery 2"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
            <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
              <div className="lightbox-gallery w-inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/project-wide-3.jpg"
                  alt="Wide Gallery 3"
                  className="image-gallery"
                />
                <div className="overlay-project-gallery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Check other projects */}
      <section className="section padding-top-0">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="divider-bottom-160" />
          <div className="flex-heading-cta mg-bottom-64">
            <h2 className="no-margins">Check other projects</h2>
            <Link
              href="/projects"
              className="line-link-block small-line-link w-inline-block"
            >
              <div>see all</div>
              <div className="underline-link-master small-underline-link-master">
                <div className="underline-link-fill" />
              </div>
            </Link>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="grid-proojects-halves w-dyn-items">
              {otherProjects.map((other) => (
                <div key={other.slug} role="listitem" className="w-dyn-item">
                  <div className="master-project-tile">
                    <Link
                      href={`/projects/${other.slug}`}
                      className="link-project-main main-color-font w-inline-block"
                    >
                      <div className="wrap-image-project-main">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={other.image}
                          alt={other.title}
                          className="image-project-main"
                        />
                        <div className="view-circle">
                          <div className="wrap-text-view">
                            <div className="text-view">View</div>
                            <div className="text-view text-view-clone" aria-hidden="true">View</div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-project-main">
                        <div className="text-style-h3">{other.title}</div>
                        <div className="paragraph-big">{other.category}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <ContactSection />

      {/* 10. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
