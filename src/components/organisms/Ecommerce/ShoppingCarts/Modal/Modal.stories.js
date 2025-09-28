import Component from "./Modal.vue";

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

export const Modal = Template.bind({});
Modal.args = {
  shipping: 5,
  tax: 54,
  products: [
    {
      id: 1,
      name: "Zip Tote Basket",
      href: "#",
      color: "White and black",
      price: 140,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
    {
      id: 2,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: 90,
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    // More products...
  ],
};
