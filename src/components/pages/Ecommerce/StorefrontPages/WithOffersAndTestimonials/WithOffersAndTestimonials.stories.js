import Component from "./WithOffersAndTestimonials.vue";

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

export const WithOffersAndTestimonials = Template.bind({});
WithOffersAndTestimonials.args = {
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
  offers: [
    {
      name: "Download the app",
      description: "Get an exclusive $5 off code",
      href: "#",
    },
    {
      name: "Return when you're ready",
      description: "60 days of free returns",
      href: "#",
    },
    {
      name: "Sign up for our newsletter",
      description: "15% off your first order",
      href: "#",
    },
  ],
  trendingProducts: [
    {
      id: 1,
      name: "Machined Pen",
      color: "Black",
      price: "$35",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Black machined steel pen with hexagonal grip and small white logo at top.",
      availableColors: [
        { name: "Black", colorBg: "#111827" },
        { name: "Brass", colorBg: "#FDE68A" },
        { name: "Chrome", colorBg: "#E5E7EB" },
      ],
    },
    // More products...
  ],
  collections: [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Daily commute essentials",
      imageSrc:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ],
  testimonials: [
    {
      id: 1,
      quote:
        "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
      attribution: "Sarah Peters, New Orleans",
    },
    {
      id: 2,
      quote:
        "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
      attribution: "Kelly McPherson, Chicago",
    },
    {
      id: 3,
      quote:
        "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
      attribution: "Chris Paul, Phoenix",
    },
  ],
  footerNavigation: {
    products: [
      { name: "Bags", href: "#" },
      { name: "Tees", href: "#" },
      { name: "Objects", href: "#" },
      { name: "Home Goods", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    customerService: [
      { name: "Contact", href: "#" },
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Secure Payments", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Find a store", href: "#" },
    ],
    company: [
      { name: "Who we are", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Shipping Policy", href: "#" },
    ],
    bottomLinks: [
      { name: "Accessibility", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
};
