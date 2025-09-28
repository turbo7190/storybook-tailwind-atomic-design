import Component from "./WithImageTilesAndFeatureSections.vue";

export default {
  title: "Components/Templates/Ecommerce/Storefront Pages",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithImageTilesAndFeatureSections = Template.bind({});
WithImageTilesAndFeatureSections.args = {
  navigation: {
    categories: [
      {
        id: "women",
        name: "Women",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Models sitting back to back, wearing Basic Tee in black and bone.",
          },
          {
            name: "Basic Tees",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "#" },
              { name: "Dresses", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Denim", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      },
      {
        id: "men",
        name: "Men",
        featured: [
          {
            name: "New Arrivals",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Drawstring top with elastic loop closure and textured interior padding.",
          },
          {
            name: "Artwork Tees",
            href: "#",
            imageSrc:
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            imageAlt:
              "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
          },
        ],
        sections: [
          {
            id: "clothing",
            name: "Clothing",
            items: [
              { name: "Tops", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Sweaters", href: "#" },
              { name: "T-Shirts", href: "#" },
              { name: "Jackets", href: "#" },
              { name: "Activewear", href: "#" },
              { name: "Browse All", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  },
  favorites: [
    {
      id: 1,
      name: "Black Basic Tee",
      price: "$32",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
      id: 2,
      name: "Off-White Basic Tee",
      price: "$32",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
    {
      id: 3,
      name: "Mountains Artwork Tee",
      price: "$36",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
    },
  ],
  footerNavigation: {
    shop: [
      { name: "Bags", href: "#" },
      { name: "Tees", href: "#" },
      { name: "Objects", href: "#" },
      { name: "Home Goods", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    account: [
      { name: "Manage Account", href: "#" },
      { name: "Returns & Exchanges", href: "#" },
      { name: "Redeem a Gift Card", href: "#" },
    ],
    connect: [
      { name: "Contact Us", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
    ],
  },
};
