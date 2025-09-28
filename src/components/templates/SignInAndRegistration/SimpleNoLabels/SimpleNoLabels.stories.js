import Component from "./SimpleNoLabels.vue";

export default {
  title: "Components/Templates/Sign-in and Registration",
  component: Component,
  argTypes: {},
  parameters: {
    componentSubtitle:
      "Display a simple signin and registration form with no labels",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleNoLabels = Template.bind({});
SimpleNoLabels.args = {};
