import Component from "./FullWidthWithBackgroundImageAndLargeContent.vue";

export default {
  title: "Components/Organisms/Ecommerce/Promo Sections",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    imageSrc: {
      type: "string",
    },
    description: {
      type: "string",
    },
    linkText: {
      type: "string",
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

export const FullWidthWithBackgroundImageAndLargeContent = Template.bind({});
FullWidthWithBackgroundImageAndLargeContent.args = {
  heading: "New arrivals are here",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  description:
    "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.",
  linkText: "Shop New Arrivals",
};
