import Component from "./FullWidthWithBackgroundImage.vue";

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

export const FullWidthWithBackgroundImage = Template.bind({});
FullWidthWithBackgroundImage.args = {
  heading: "Long-term thinking",
  imageSrc:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  description:
    "We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.",
  linkText: "Read our story",
};
