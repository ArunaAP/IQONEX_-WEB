export type Project = {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string | null;
  year: string;
  desc: string;
  featured?: boolean;
  homeShow?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "IQONEX POS",
    category: "ERP",
    tag: "ERP",
    image: "/works/pos-system-img.png",
    year: "2026",
    desc: "A modern point-of-sale system built for retail businesses.",
    homeShow: true,
  },
  {
    id: 2,
    title: "Ceylon Fresh Flower Farm",
    category: "WEB",
    tag: "WEB",
    image: "/works/ceylon-fresh-flower.png",
    year: "2026",
    desc: "E-commerce platform for a flower farm business in Sri Lanka.",
    homeShow: true,
  },
  {
    id: 3,
    title: "Tree Haven - Tree house resort",
    category: "WEB",
    tag: "WEB",
    image: "/works/tree-haven-img.jpg",
    year: "2026",
    desc: "Custom design website for a tree house resort.",
    featured: true,
    homeShow: true,
  },
  {
    id: 4,
    title: "SEO Campaign — RetailCo",
    category: "SEO",
    tag: "SEO",
    image: null,
    year: "2023",
    desc: "Organic traffic grew 240% in 6 months through targeted SEO.",
    homeShow: true,
  },
  {
    id: 5,
    title: "Mobile App — DeliveryX",
    category: "MOBILE",
    tag: "MOBILE",
    image: null,
    year: "2024",
    desc: "Cross-platform delivery tracking app for drivers and customers.",
  },
  {
    id: 6,
    title: "ERP System — ManufacturePro",
    category: "ERP",
    tag: "ERP",
    image: null,
    year: "2023",
    desc: "Custom ERP solution managing inventory, HR, and finance.",
  },
  {
    id: 7,
    title: "Portfolio — Creative Agency",
    category: "WEB",
    tag: "WEB",
    image: null,
    year: "2024",
    desc: "Award-winning portfolio site for a creative agency.",
  },
  {
    id: 8,
    title: "Brand — GreenLeaf",
    category: "BRANDING",
    tag: "BRANDING",
    image: null,
    year: "2024",
    desc: "Eco-friendly brand identity with packaging design.",
  },
];
