import Component from "./WithImagesAndDescriptions.vue";

export default {
  title: "Components/Organisms/Command Palettes",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "items list",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a command palettes with images and descriptions",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithImagesAndDescriptions = Template.bind({});
WithImagesAndDescriptions.args = {
  items: [
    {
      id: 1,
      name: "Text",
      description: "Add freeform text with basic formatting options.",
      url: "#",
      color: "bg-primary-500",
      icon: "PencilIcon",
    },
    // More items...
  ],
};
