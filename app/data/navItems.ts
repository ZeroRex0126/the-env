interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export const navigation: NavigationItem[] = [
  { name: "Services", href: "#services-section", current: false },
  { name: "About Us", href: "#aboutus-section", current: false },
  { name: "Featured", href: "#featured-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
];

interface ProductType {
  id: number;
  section: string;
  link: { name: string; href: string }[];
}

export const footerProducts: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: [
      { name: "Home", href: "#home-section" },
      { name: "About Us", href: "#aboutus-section" },
      { name: "Services", href: "#services-section" },
      { name: "Featured", href: "#featured-section" },
      { name: "FAQ", href: "#faq-section" },
    ],
  },
];
