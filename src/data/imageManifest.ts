export type ImageManifestEntry = {
  filename: string;
  assetPath: string;
  page: string;
  section: string;
  slug: string;
  description: string;
  mapped: boolean;
};

export const imageManifest: ImageManifestEntry[] = [
  {
    filename: "hero-fashion.jpg",
    assetPath: "/images/hero-fashion.jpg",
    page: "/homepage",
    section: "Hero",
    slug: "homepage-hero",
    description: "Fashion portrait with red and cream styling for the homepage hero.",
    mapped: true,
  },
  {
    filename: "studio-portrait.jpg",
    assetPath: "/images/studio-portrait.jpg",
    page: "/about",
    section: "Founder story",
    slug: "about-story",
    description: "Team portrait used in the About section.",
    mapped: false,
  },
  {
    filename: "project-01.jpg",
    assetPath: "/images/project-01.jpg",
    page: "/projects",
    section: "Portfolio cards",
    slug: "project-bloom",
    description: "Editorial project image for the portfolio gallery.",
    mapped: false,
  },
  {
    filename: "blog-cover.jpg",
    assetPath: "/images/blog-cover.jpg",
    page: "/blog",
    section: "Article feed",
    slug: "creative-strategy",
    description: "Editorial blog thumbnail for the latest article.",
    mapped: false,
  },
  {
    filename: "pricing-cta.jpg",
    assetPath: "/images/pricing-cta.jpg",
    page: "/pricing",
    section: "Plans",
    slug: "pricing-plan",
    description: "Brand photography for the pricing highlight.",
    mapped: false,
  },
];
