import Component from "./CardWithHeaderAndFooter.vue";

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

export const CardWithHeaderAndFooter = Template.bind({});
CardWithHeaderAndFooter.args = {};
