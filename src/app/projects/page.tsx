import React from "react";
import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import MovingTextSection from "@/components/homepage/MovingTextSection";
import ContactSection from "@/components/homepage/ContactSection";
import PageTitleFlip from "@/components/common/PageTitleFlip";
import ProjectImageHover from "@/components/common/ProjectImageHover";
import { projectsData } from "@/data/projectsData";

export const metadata = {
  title: "Projects | Impact Studio - Webflow Ecommerce website template",
  description:
    "Impact Studio is a Premium Webflow Template for agencies and creative studios looking for a trustworthy animated experience.",
};

export default function ProjectsPage() {
  return (
    <main className="page-wrapper">
      {/* 1. Hero Projects */}
      <section className="section hero-projects">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-left mg-bottom-120 center-landscape">
            <PageTitleFlip title="Our projects" />
          </div>

          {/* 2-Column Halves Grid */}
          <div className="w-dyn-list">
            <div role="list" className="grid-proojects-halves w-dyn-items">
              {projectsData.map((project) => (
                <div key={project.slug} role="listitem" className="w-dyn-item">
                  <div className="master-project-tile">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="link-project-main main-color-font w-inline-block"
                    >
                      <ProjectImageHover
                        imageSrc={project.image}
                        imageAlt={project.title}
                      />
                      <div className="bottom-project-main">
                        <div className="text-style-h3">{project.title}</div>
                        <div className="paragraph-big">{project.category}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Moving Text Section */}
      <MovingTextSection />

      {/* 3. Contact Section */}
      <ContactSection />

      {/* 4. Footer & Floating Badge */}
      <Footer />
      <FloatingBadge />
    </main>
  );
}
