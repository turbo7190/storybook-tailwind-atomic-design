import Component from "./Primary.vue";

export default {
  title: "Components/Molecules/Button",
  component: Component,
  argTypes: {
    label: {
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

export const Primary = Template.bind({});
Primary.args = {
  label: "Button Text",
  color: "indigo",
};

export const Round = Template.bind({});
Round.args = {
  label: "Button Text",
  isRounded: true,
  color: "indigo",
};
