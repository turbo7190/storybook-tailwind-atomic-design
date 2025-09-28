import Component from "./SingleColumn.vue";

export default {
  title: "Components/Organisms/Ecommerce/Shopping Carts",
  component: Component,
  argTypes: {},
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  products: [
    {
      id: 1,
      name: "Artwork Tee",
      href: "#",
      price: 32,
      color: "Mint",
      size: "Medium",
      inStock: true,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Front side of mint cotton t-shirt with wavey lines pattern.",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      price: 32,
      color: "Charcoal",
      inStock: false,
      leadTime: "7-8 years",
      size: "Large",
      imageSrc:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      imageAlt: "Front side of charcoal cotton t-shirt.",
    },
    // More products...
  ],
};
