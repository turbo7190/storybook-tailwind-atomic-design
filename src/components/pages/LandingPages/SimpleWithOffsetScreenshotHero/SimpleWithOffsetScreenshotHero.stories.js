import Component from "./SimpleWithOffsetScreenshotHero.vue";

export default {
  title: "Components/Templates/Landing Pages",
  component: Component,
  argTypes: {
    content: {
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

export const SimpleWithOffsetScreenshotHero = Template.bind({});
SimpleWithOffsetScreenshotHero.args = {};
