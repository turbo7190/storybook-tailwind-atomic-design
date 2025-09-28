import Component from "./WithTieredImages.vue";
// Icons are now referenced as strings

export default {
  title: "Components/Organisms/Ecommerce/Product Overviews",
  component: Component,
  argTypes: {
    product: {
      type: Object,
    },
    policies: {
      type: Array,
    },
    selectedColor: {
      type: Object,
    },
    selectedSize: {
      type: Object,
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

export const WithTieredImages = Template.bind({});
WithTieredImages.args = {
  product: {
    name: "Basic Tee",
    price: "$35",
    rating: 3.9,
    reviewCount: 512,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Women", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      {
        id: 1,
        imageSrc:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        imageSrc:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        imageSrc:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
    colors: [
      { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
      {
        name: "Heather Grey",
        bgColor: "bg-gray-400",
        selectedColor: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: false },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      "Only the best materials",
      "Ethically and locally made",
      "Pre-washed and pre-shrunk",
      "Machine wash cold with similar colors",
    ],
  },
  policies: [
    {
      name: "International delivery",
      icon: "GlobeAmericasIcon",
      description: "Get your order in 2 years",
    },
    {
      name: "Loyalty rewards",
      icon: "CurrencyDollarIcon",
      description: "Don't look at other tees",
    },
  ],
  selectedColor: {
    name: "Black",
    bgColor: "bg-gray-900",
    selectedColor: "ring-gray-900",
  },
  selectedSize: { name: "S", inStock: true },
};
