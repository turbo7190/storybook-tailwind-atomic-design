import Component from "./WithImageGrid.vue";

export default {
  title: "Components/Templates/Ecommerce/Product Pages",
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

export const WithImageGrid = Template.bind({});
WithImageGrid.args = {
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
  product: {
    name: "Basic Tee 6-Pack",
    price: "$192",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  },
  reviews: {
    href: "#",
    average: 4,
    totalCount: 117,
    featured: [
      {
        id: 1,
        title: "This is the best white t-shirt out there",
        rating: 5,
        content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
        author: "Mark Edwards",
        avatarSrc:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        title: "Adds the perfect variety to my wardrobe",
        rating: 4,
        content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
        author: "Blake Reid",
        avatarSrc:
          "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
      },
      {
        id: 3,
        title: "All good things come in 6-Packs",
        rating: 5,
        content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
        author: "Ben Russel",
        avatarSrc:
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
  },
  products: [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
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
