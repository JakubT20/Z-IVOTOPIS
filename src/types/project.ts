export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  role: string;
  tags: string[];
  cover: string;
  images: string[];
  pdf?: string;
  featured: boolean;
};
