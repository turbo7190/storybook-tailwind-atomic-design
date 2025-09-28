import Component from "./FullWidthOnMobileConstrainedWithPaddedContentAbove.vue";

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

export const FullWidthOnMobileConstrainedWithPaddedContentAbove = Template.bind(
  {}
);
FullWidthOnMobileConstrainedWithPaddedContentAbove.args = {};
