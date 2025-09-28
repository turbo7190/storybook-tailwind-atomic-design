import Component from "./WithTallImages.vue";

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

export const WithTallImages = Template.bind({});
WithTallImages.args = {
  products: [
    {
      id: 1,
      name: "Focus Paper Refill",
      href: "#",
      price: "$13",
      description: "3 sizes available",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "Focus Card Holder",
      href: "#",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Focus Carry Case",
      href: "#",
      price: "$32",
      description: "Heather Gray",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    // More products...
  ],
};
