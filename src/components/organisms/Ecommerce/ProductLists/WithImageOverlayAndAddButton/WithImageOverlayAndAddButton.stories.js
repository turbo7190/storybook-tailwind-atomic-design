import Component from "./WithImageOverlayAndAddButton.vue";

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

export const WithImageOverlayAndAddButton = Template.bind({});
WithImageOverlayAndAddButton.args = {
  products: [
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
  ],
};
