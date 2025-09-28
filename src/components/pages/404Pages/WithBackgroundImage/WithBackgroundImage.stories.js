import Component from "./WithBackgroundImage.vue";

export default {
  title: "Components/Templates/404 Pages",
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

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {};
