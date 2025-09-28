import Component from "./WithBorderGrid.vue";

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

export const WithBorderGrid = Template.bind({});
WithBorderGrid.args = {
  products: [
    {
      id: 1,
      name: "Organize Basic Set (Walnut)",
      price: "$149",
      rating: 5,
      reviewCount: 38,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 2,
      name: "Organize Pen Holder",
      price: "$15",
      rating: 5,
      reviewCount: 18,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 3,
      name: "Organize Sticky Note Holder",
      price: "$15",
      rating: 5,
      reviewCount: 14,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "TODO",
      href: "#",
    },
    {
      id: 4,
      name: "Organize Phone Holder",
      price: "$15",
      rating: 4,
      reviewCount: 21,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "TODO",
      href: "#",
    },
    // More products...
  ],
};
