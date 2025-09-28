import Component from "./SplitScreen.vue";

export default {
  title: "Components/Templates/Sign-in and Registration",
  component: Component,
  parameters: {
    componentSubtitle:
      "Display a simple signin and registration form with split screen",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitScreen = Template.bind({});
SplitScreen.args = {};
