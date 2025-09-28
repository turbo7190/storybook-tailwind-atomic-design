import Component from "./CardEdgeToEdgeOnMobile.vue";

export default {
  title: "Components/Atoms/Panels",
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

export const CardEdgeToEdgeOnMobile = Template.bind({});
CardEdgeToEdgeOnMobile.args = {};
