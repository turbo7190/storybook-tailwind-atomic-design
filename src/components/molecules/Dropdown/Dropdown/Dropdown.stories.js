import Component from "./Dropdown.vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to be shown on dropdown",
    },
    options: {
      type: "array",
      description: "list to populate dropdown",
    },
    menuItemClicked: { action: "menuItemClicked" },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Dropdown = Template.bind({});
Dropdown.args = {
  label: "Options",
  customClass: "ml-40",
  options: ["Account Settings", "Support", "License", "Sign out"],
};
