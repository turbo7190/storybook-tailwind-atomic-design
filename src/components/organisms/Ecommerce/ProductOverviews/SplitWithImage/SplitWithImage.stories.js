import Component from "./SplitWithImage.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Overviews",
  component: Component,
  argTypes: {
    product: {
      type: Object,
    },
    reviews: {
      type: Object,
    },
    selectedSize: {
      type: Object,
    },
    sizeCards: {
      type: Array,
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

export const SplitWithImage = Template.bind({});
SplitWithImage.args = {
  product: {
    name: "Everyday Ruck Snack",
    href: "#",
    price: "$220",
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt:
      "Model wearing light green backpack with black canvas straps and front zipper pouch.",
    breadcrumbs: [
      { id: 1, name: "Travel", href: "#" },
      { id: 2, name: "Bags", href: "#" },
    ],
    sizes: [
      {
        name: "18L",
        description: "Perfect for a reasonable amount of snacks.",
      },
      {
        name: "20L",
        description: "Enough room for a serious amount of snacks.",
      },
    ],
  },
  reviews: {
    average: 4,
    totalCount: 1624,
  },
  selectedSize: {
    name: "18L",
    description: "Perfect for a reasonable amount of snacks.",
  },
  sizeCards: [
    { title: "18L", description: "Perfect for a reasonable amount of snacks." },
    {
      title: "20L",
      description: "Enough room for a serious amount of snacks.",
    },
  ],
};
