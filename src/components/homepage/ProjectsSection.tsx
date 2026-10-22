"use client";

import Link from "next/link";
import ProjectImageHover from "@/components/common/ProjectImageHover";
import ScrollHeading from "@/components/common/ScrollHeading";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  wrapClass: string;
}

const projects: ProjectItem[] = [
  {
    id: "restoring-nature",
    slug: "restoring-nature",
    title: "Restoring nature",
    category: "Branding for new healthcare company",
    image: "/65bae802686068b6e01d5657_Thumbnail-min.jpg",
    wrapClass: "home-one",
  },
  {
    id: "cool-fash",
    slug: "cool-fash",
    title: "Cool fash",
    category: "Marketing for new fashion brand",
    image: "/65bae96362d53e7973263294_Thumbnail-min.jpg",
    wrapClass: "home-two",
  },
  {
    id: "wedding-smile",
    slug: "wedding-smile",
    title: "Wedding Smile",
    category: "Ecommerce for wedding company",
    image: "/65baead679e68738804a43ed_Thumbnail-min.jpg",
    wrapClass: "home-three",
  },
];

export default function ProjectsSection() {

  const renderProjectTile = (project: ProjectItem) => {
    return (
      <div className="master-project-tile">
        <Link
          href={`/projects/${project.slug}`}
          className="link-project-main"
        >
          <ProjectImageHover
            imageSrc={project.image}
            imageAlt={project.title}
            extraClass={project.wrapClass}
          />
          <div className="bottom-project-main">
            <h3 className="no-margins">{project.title}</h3>
            <div className="paragraph-big">{project.category}</div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className="section red">
      <div
        className="w-layout-blockcontainer main-container w-container"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        {/* Section Heading */}
        <div className="heading-left mg-bottom-80">
          <ScrollHeading as="h2" className="no-margins">
            As good as our last project
          </ScrollHeading>
        </div>

        {/* 2-column halves grid for Project 1 and Project 2 */}
        <div className="w-layout-grid grid-projects-home-b-halves">
          {renderProjectTile(projects[0])}
          {renderProjectTile(projects[1])}
        </div>

        {/* Wide single-project showcase for Project 3 */}
        <div className="list-wrapper-home-b-wide">
          {renderProjectTile(projects[2])}
        </div>

        {/* See all projects CTA */}
        <div className="flex-cta-center mg-top-120">
          <Link href="/projects" className="line-link-block white-link">
            <div>see all projects</div>
            <div className="underline-link-master white-underline-master">
              <div className="underline-link-fill white-underline-fill" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
