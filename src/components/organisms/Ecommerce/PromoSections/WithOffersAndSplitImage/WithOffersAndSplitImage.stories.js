import Component from "./WithOffersAndSplitImage.vue";

export default {
  title: "Components/Organisms/Ecommerce/Promo Sections",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    description: {
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

export const WithOffersAndSplitImage = Template.bind({});
WithOffersAndSplitImage.args = {
  heading: "Focus on what matters",
  linkText: "Shop Productivity",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  description:
    "All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.",
  items: [
    {
      name: "Download the app",
      description: "Get an exclusive $5 off code",
      href: "#",
    },
    {
      name: "Return when you're ready",
      description: "60 days of free returns",
      href: "#",
    },
    {
      name: "Sign up for our newsletter",
      description: "15% off your first order",
      href: "#",
    },
  ],
};
