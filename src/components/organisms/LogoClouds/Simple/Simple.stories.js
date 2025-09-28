import Component from "./Simple.vue";

export default {
  title: "Components/Organisms/Logo Clouds",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "logos",
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

export const Simple = Template.bind({});
Simple.args = {
  items: [
    {
      title: "Tuple",
      alt: "Tuple",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      class: "h-12",
    },
    {
      title: "Mirage",
      alt: "Mirage",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      class: "h-12",
    },
    {
      title: "StaticKit",
      alt: "StaticKit",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      class: "h-12",
    },
    {
      title: "Statamic",
      alt: "Statamic",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      class: "h-12",
    },
    {
      title: "Transistor",
      alt: "Transistor",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      class: "h-12",
    },
  ],
};
