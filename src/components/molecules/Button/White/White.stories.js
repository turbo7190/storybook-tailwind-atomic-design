import Component from "./White.vue";

export default {
  title: "Components/Molecules/Button",
  component: Component,
  argTypes: {
    label: {
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

export const White = Template.bind({});
White.args = {
  label: "Button",
};
