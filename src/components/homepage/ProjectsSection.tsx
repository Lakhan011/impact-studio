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
    <section className="section red" style={{ paddingLeft: 0, paddingRight: 0 }}>
      {/* 1. Section Heading & 2-column halves in standard container */}
      <div
        className="w-layout-blockcontainer main-container w-container"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        <div className="heading-left mg-bottom-80">
          <ScrollHeading as="h2" className="no-margins">
            As good as our last project
          </ScrollHeading>
        </div>

        <div className="w-layout-grid grid-projects-home-b-halves">
          {renderProjectTile(projects[0])}
          {renderProjectTile(projects[1])}
        </div>
      </div>

      {/* 2. Wide single-project showcase (Wedding Smile) — full-bleed edge-to-edge with zero left/right gaps */}
      <div
        className="list-wrapper-home-b-wide"
        style={{
          width: "100%",
          maxWidth: "100%",
          marginTop: "100px",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="master-project-tile" style={{ width: "100%" }}>
          <Link
            href={`/projects/${projects[2].slug}`}
            className="link-project-main"
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <div style={{ width: "100%" }}>
              <ProjectImageHover
                imageSrc={projects[2].image}
                imageAlt={projects[2].title}
                extraClass={projects[2].wrapClass}
              />
            </div>
            <div
              className="bottom-project-main"
              style={{
                maxWidth: "1440px",
                width: "100%",
                margin: "0 auto",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              <h3 className="no-margins">{projects[2].title}</h3>
              <div className="paragraph-big">{projects[2].category}</div>
            </div>
          </Link>
        </div>
      </div>

      {/* 3. See all projects CTA in standard container */}
      <div
        className="w-layout-blockcontainer main-container w-container"
        style={{ maxWidth: "1440px", width: "100%" }}
      >
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
