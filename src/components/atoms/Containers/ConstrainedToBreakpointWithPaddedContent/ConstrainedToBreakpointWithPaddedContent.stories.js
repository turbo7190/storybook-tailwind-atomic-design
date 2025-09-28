import Component from "./ConstrainedToBreakpointWithPaddedContent.vue";

export default {
  title: "Components/Atoms/Containers",
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

export const ConstrainedToBreakpointWithPaddedContent = Template.bind({});
ConstrainedToBreakpointWithPaddedContent.args = {};
