import Component from "./ConstrainedWithPaddedContent.vue";

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

export const ConstrainedWithPaddedContent = Template.bind({});
ConstrainedWithPaddedContent.args = {};
