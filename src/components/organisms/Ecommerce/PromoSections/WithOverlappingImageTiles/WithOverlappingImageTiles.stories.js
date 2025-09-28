import Component from "./WithOverlappingImageTiles.vue";

export default {
  title: "Components/Organisms/Ecommerce/Promo Sections",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    linkText: {
      type: "string",
    },
    imageSrc: {
      type: "string",
    },
    items: {
      type: "array",
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

export const WithOverlappingImageTiles = Template.bind({});
WithOverlappingImageTiles.args = {
  heading: "Mid-Season Sale",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  linkText: "Shop Collection",
  items: [
    {
      name: "Women's",
      description: "Shop the collection",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Woman wearing an off-white cotton t-shirt.",
    },
    {
      name: "Men's",
      description: "Shop the collection",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
    },
    {
      name: "Desk Accessories",
      description: "Shop the collection",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt:
        "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
    },
  ],
};
