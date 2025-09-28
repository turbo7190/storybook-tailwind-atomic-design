import Component from "./DropdownWithHeader.vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to be shown on dropdown",
    },
    headerTitle: {
      type: "string",
      description: "header title",
    },
    headerSubtitle: {
      type: "string",
      description: "header subtitle",
    },
    items: {
      type: "array",
      description: "list to populate dropdown",
    },
    menuItemClicked: { action: "menuItemClicked" },
    actionButtonClicked: { action: "actionButtonClicked" },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const DropdownWithHeader = Template.bind({});
DropdownWithHeader.args = {
  headerTitle: "Signed in as",
  headerSubtitle: "tom@example.com",
  items: [
    {
      name: "Account Settings",
    },
    {
      name: "Support",
    },
    {
      name: "License",
    },
  ],
  label: "Options",
  customClass: "ml-40",
  buttonText: "Sign out",
};
