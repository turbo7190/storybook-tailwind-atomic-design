import Component from "./Simple.vue";

export default {
  title: "Components/Templates/Sign-in and Registration",
  component: Component,
  argTypes: {},
  parameters: {
    componentSubtitle: "Display a simple signin and registration form",
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
Simple.args = {};
