import Component from "./WithBackgroundImageAndDetailOverlay.vue";

export default {
  title: "Components/Organisms/Ecommerce/Category Preview",
  component: Component,
  argTypes: {},
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBackgroundImageAndDetailOverlay = Template.bind({});
WithBackgroundImageAndDetailOverlay.args = {};
