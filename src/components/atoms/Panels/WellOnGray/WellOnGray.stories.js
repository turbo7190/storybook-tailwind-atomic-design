import Component from "./WellOnGray.vue";

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

export const WellOnGray = Template.bind({});
WellOnGray.args = {};
