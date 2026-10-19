import Link from "next/link";
import Footer from "@/components/common/Footer";
import FloatingBadge from "@/components/common/FloatingBadge";
import MovingTextSection from "@/components/homepage/MovingTextSection";
import ContactSection from "@/components/homepage/ContactSection";

export const projectsData = [
  {
    id: "restoring-nature",
    slug: "restoring-nature",
    title: "Restoring nature",
    category: "Branding for new healthcare company",
    image: "/65bae802686068b6e01d5657_Thumbnail-min.jpg",
  },
  {
    id: "cool-fash",
    slug: "cool-fash",
    title: "Cool fash",
    category: "Marketing for new fashion brand",
    image: "/65bae96362d53e7973263294_Thumbnail-min.jpg",
  },
  {
    id: "wedding-smile",
    slug: "wedding-smile",
    title: "Wedding Smile",
    category: "Ecommerce for wedding company",
    image: "/65baead679e68738804a43ed_Thumbnail-min.jpg",
  },
  {
    id: "creative-existence",
    slug: "creative-existence",
    title: "Creative Existence",
    category: "Brand identity for new eco brand",
    image: "/65baea6f990294b8ec4847c1_Thumbnail-min.jpg",
  },
  {
    id: "bubble",
    slug: "bubble",
    title: "Bubble",
    category: "3D renders for no-code tool",
    image: "/bubble-thumbnail.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-wrapper">
      {/* Hero Section */}
      <section className="section hero-projects">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="title-wrap-left mg-bottom-120 center-landscape">
            <h1 className="no-margins">Our projects</h1>
          </div>

          {/* 2-Column Halves Grid */}
          <div className="w-dyn-list">
            <div role="list" className="grid-proojects-halves w-dyn-items">
              {projectsData.map((project) => (
                <div key={project.id} role="listitem" className="w-dyn-item">
                  <div className="master-project-tile">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="link-project-main main-color-font w-inline-block"
                    >
                      <div className="wrap-image-project-main">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="image-project-main"
                        />
                        <div className="view-circle">
                          <div className="wrap-text-view">
                            <div className="text-view">View</div>
                          </div>
                        </div>
                      </div>
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

      {/* Moving Text Section */}
      <MovingTextSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Badge */}
      <FloatingBadge />
    </main>
  );
}
