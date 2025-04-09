// src/utils/navigation.ts

// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/screwFast/" },
  { name: "Products", url: "/screwFast/products" },
  { name: "Services", url: "/screwFast/services" },
  { name: "Blog", url: "/screwFast/blog" },
  { name: "Contact", url: "/screwFast/contact" },
];

// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/screwFast/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/screwFast/products" },
      { name: "Construction Services", url: "/screwFast/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },  // если есть страница, тоже добавь /screwFast/about
      { name: "Blog", url: "/screwFast/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];

// An object of links for social icons (эти ссылки внешние, менять не надо)
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
