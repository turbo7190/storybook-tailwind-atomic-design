import Component from "./WithSupportingText.vue";

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

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
  products: [
    {
      id: 1,
      name: "Nomad Pouch",
      href: "#",
      price: "$50",
      availability: "White and Black",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
    },
    {
      id: 2,
      name: "Zip Tote Basket",
      href: "#",
      price: "$140",
      availability: "Washed Black",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
    },
    {
      id: 3,
      name: "Medium Stuff Satchel",
      href: "#",
      price: "$220",
      availability: "Blue",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ],
};
