import Component from "./DropdownWIthDivider.vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to be shown on dropdown",
    },
    items: {
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

export const DropdownWithDivider = Template.bind({});
DropdownWithDivider.args = {
  label: "Options",
  customClass: "ml-40",
  items: [
    {
      name: "Edit",
    },
    {
      name: "Duplicate",
    },
    {
      name: "Archive",
    },
    {
      name: "Move",
    },
    {
      name: "Share",
    },
    {
      name: "Add to favorites",
    },
    {
      name: "Delete",
    },
  ],
};
