import Component from "./WithImageBackgrounds.vue";

export default {
  title: "Components/Organisms/Ecommerce/Category Preview",
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

export const WithImageBackgrounds = Template.bind({});
WithImageBackgrounds.args = {};
