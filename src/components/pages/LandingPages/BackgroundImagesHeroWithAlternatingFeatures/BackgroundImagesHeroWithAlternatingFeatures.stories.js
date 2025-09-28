import Component from "./BackgroundImagesHeroWithAlternatingFeatures.vue";

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

export const BackgroundImagesHeroWithAlternatingFeatures = Template.bind({});
BackgroundImagesHeroWithAlternatingFeatures.args = {};
