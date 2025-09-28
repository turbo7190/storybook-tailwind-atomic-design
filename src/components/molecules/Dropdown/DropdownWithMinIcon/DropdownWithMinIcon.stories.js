import Component from "./DropdownWithMinIcon.vue";

export default {
  title: "Components/Molecules/Dropdown",
  component: Component,
  argTypes: {
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

export const DropdownWithMinIcon = Template.bind({});
DropdownWithMinIcon.args = {
  customClass: "ml-96",
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
  buttonText: "Sign out",
};
