import Component from "./WithProgressBar.vue";

export default {
  title: "Components/Templates/Ecommerce/Order Detail Pages",
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

export const WithProgressBar = Template.bind({});
WithProgressBar.args = {
  currencies: ["CAD", "USD", "AUD", "EUR", "GBP"],
  navigation: {
    categories: [
      {
        name: "Women",
        featured: [
          { name: "Sleep", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Underwear", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Basic Tees", href: "#" },
          { name: "Artwork Tees", href: "#" },
          { name: "Bottoms", href: "#" },
          { name: "Underwear", href: "#" },
          { name: "Accessories", href: "#" },
        ],
        brands: [
          { name: "Full Nelson", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Significant Other", href: "#" },
        ],
      },
      {
        name: "Men",
        featured: [
          { name: "Casual", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Outdoor", href: "#" },
        ],
        collection: [
          { name: "Everything", href: "#" },
          { name: "Core", href: "#" },
          { name: "New Arrivals", href: "#" },
          { name: "Sale", href: "#" },
        ],
        categories: [
          { name: "Artwork Tees", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Accessories", href: "#" },
          { name: "Boxers", href: "#" },
          { name: "Basic Tees", href: "#" },
        ],
        brands: [
          { name: "Significant Other", href: "#" },
          { name: "My Way", href: "#" },
          { name: "Counterfeit", href: "#" },
          { name: "Re-Arranged", href: "#" },
          { name: "Full Nelson", href: "#" },
        ],
      },
    ],
    pages: [
      { name: "Company", href: "#" },
      { name: "Stores", href: "#" },
    ],
  },
  products: [
    {
      id: 1,
      name: "Nomad Tumbler",
      description:
        "This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
      href: "#",
      price: "35.00",
      status: "Preparing to ship",
      step: 1,
      date: "March 24, 2021",
      datetime: "2021-03-24",
      address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
      email: "f•••@example.com",
      phone: "1•••••••••40",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt: "Insulated bottle with white base and black snap lid.",
    },
    {
      id: 2,
      name: "Minimalist Wristwatch",
      description:
        "This contemporary wristwatch has a clean, minimalist look and high quality components.",
      href: "#",
      price: "149.00",
      status: "Shipped",
      step: 0,
      date: "March 23, 2021",
      datetime: "2021-03-23",
      address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
      email: "f•••@example.com",
      phone: "1•••••••••40",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      imageAlt:
        "Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.",
    },
    // More products...
  ],
  footerNavigation: {
    account: [
      { name: "Manage Account", href: "#" },
      { name: "Saved Items", href: "#" },
      { name: "Orders", href: "#" },
      { name: "Redeem Gift card", href: "#" },
    ],
    service: [
      { name: "Shipping & Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Find a store", href: "#" },
      { name: "Get in touch", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    connect: [
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
      { name: "Twitter", href: "#" },
    ],
  },
};
