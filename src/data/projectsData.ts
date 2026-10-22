export interface Project {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  client: string;
  completed: string;
  website: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    slug: "restoring-nature",
    title: "Restoring nature",
    category: "Branding for new healthcare company",
    subtitle:
      "Nam adipiscing. Fusce fermentum odio nec arcu. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu. Etiam imperdiet imperdiet orci. Sed hendrerit.",
    client: "Caged Shapes",
    completed: "August 14, 2023",
    website: "http://www.cagedshapes.com",
    image: "/65bae802686068b6e01d5657_Thumbnail-min.jpg",
  },
  {
    slug: "cool-fash",
    title: "Cool fash",
    category: "Marketing for new fashion brand",
    subtitle:
      "Nam adipiscing. Fusce fermentum odio nec arcu. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu. Etiam imperdiet imperdiet orci. Sed hendrerit.",
    client: "Force Majeure Apparel",
    completed: "September 10, 2023",
    website: "http://www.coolfash.com",
    image: "/65bae96362d53e7973263294_Thumbnail-min.jpg",
  },
  {
    slug: "fabrics",
    title: "Wedding Smile",
    category: "Ecommerce for wedding company",
    subtitle:
      "Nam adipiscing. Fusce fermentum odio nec arcu. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu. Etiam imperdiet imperdiet orci. Sed hendrerit.",
    client: "Smile Weddings Inc.",
    completed: "October 22, 2023",
    website: "http://www.weddingsmile.com",
    image: "/65baead679e68738804a43ed_Thumbnail-min.jpg",
  },
  {
    slug: "creative-existence",
    title: "Creative Existence",
    category: "Brand identity for new eco brand",
    subtitle:
      "Nam adipiscing. Fusce fermentum odio nec arcu. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu. Etiam imperdiet imperdiet orci. Sed hendrerit.",
    client: "Creative Existence Ltd.",
    completed: "November 05, 2023",
    website: "http://www.creativeexistence.com",
    image: "/65baea6f990294b8ec4847c1_Thumbnail-min.jpg",
  },
  {
    slug: "bubble",
    title: "Bubble",
    category: "3D renders for no-code tool",
    subtitle:
      "Nam adipiscing. Fusce fermentum odio nec arcu. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu. Etiam imperdiet imperdiet orci. Sed hendrerit.",
    client: "Bubble Interactive",
    completed: "December 12, 2023",
    website: "http://www.bubbletool.com",
    image: "/bubble-thumbnail.jpeg",
  },
];
