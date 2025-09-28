import Component from "./WithImageGalleryAndExpandableDetails.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Overviews",
  component: Component,
  argTypes: {
    product: {
      type: Object,
    },
    selectedColor: {
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

export const WithImageGalleryAndExpandableDetails = Template.bind({});
WithImageGalleryAndExpandableDetails.args = {
  product: {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
      {
        id: 1,
        name: "Angled view",
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Angled front view with bag zipped and handles upright.",
      },
      {
        id: 2,
        name: "Side view",
        src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Side view of the bag with zipper closed.",
      },
      {
        id: 3,
        name: "Front view",
        src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Front view of the bag showing the main compartment.",
      },
      {
        id: 4,
        name: "Back view",
        src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
        alt: "Back view of the bag showing the rear compartment.",
      },
    ],
    colors: [
      {
        name: "Washed Black",
        bgColor: "bg-gray-700",
        selectedColor: "ring-gray-700",
      },
      { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
      {
        name: "Washed Gray",
        bgColor: "bg-gray-500",
        selectedColor: "ring-gray-500",
      },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: "Features",
        items: [
          "Multiple strap configurations",
          "Spacious interior with top zip",
          "Leather handle and tabs",
          "Interior dividers",
          "Stainless strap loops",
          "Double stitched construction",
          "Water-resistant",
        ],
      },
      {
        name: "Care",
        items: [
          "Spot clean as needed",
          "Hand wash with mild soap",
          "Machine wash cold",
          "Only non-chlorine bleach",
          "Hang dry to preserve shape",
          "Iron on low heat",
        ],
      },
      {
        name: "Shipping",
        items: [
          "Free shipping on orders over $100",
          "International shipping available",
          "Expedited shipping options",
          "Tracking included with all orders",
          "Returns accepted within 30 days",
        ],
      },
    ],
  },
  selectedColor: {
    name: "Washed Black",
    bgColor: "bg-gray-700",
    selectedColor: "ring-gray-700",
  },
};
