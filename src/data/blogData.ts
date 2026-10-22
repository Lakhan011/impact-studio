export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  content?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "typography-in-your-designs",
    title: "Typography in Designs",
    subtitle: "Learn how to effectively use typography in your creative designs.",
    image: "/blog-1.jpg",
  },
  {
    slug: "illustrations-in-graphic-design",
    title: "Illustrations in Design",
    subtitle: "Learn how illustrations can enhance your designs.",
    image: "/blog-2.jpg",
  },
  {
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility",
    subtitle: "Learn how to create designs that are accessible to all users",
    image: "/blog-3.jpg",
  },
  {
    slug: "color-in-your-brand-identity",
    title: "Color in Brand Identity",
    subtitle: "Learn how to effectively use color in your brand design.",
    image: "/blog-4.jpg",
  },
  {
    slug: "cohesive-brand-identity",
    title: "Cohesive Brand Identity",
    subtitle: "Learn how to develop a consistent brand identity for your business.",
    image: "/blog-5.jpg",
  },
];
