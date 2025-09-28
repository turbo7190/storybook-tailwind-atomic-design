import Component from "./NarrowConstrainedWithPaddedContent.vue";

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

export const NarrowConstrainedWithPaddedContent = Template.bind({});
NarrowConstrainedWithPaddedContent.args = {};
