import Component from "./Secondary.vue";

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

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button Text",
};
