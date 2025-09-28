import Component from "./WithColorSwatchesAndHorizontalScrolling.vue";

export default {
  title: "Components/Organisms/Ecommerce/Product Lists",
  component: Component,
  argTypes: {
    products: {
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

export const WithColorSwatchesAndHorizontalScrolling = Template.bind({});
WithColorSwatchesAndHorizontalScrolling.args = {
  products: [
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
};
