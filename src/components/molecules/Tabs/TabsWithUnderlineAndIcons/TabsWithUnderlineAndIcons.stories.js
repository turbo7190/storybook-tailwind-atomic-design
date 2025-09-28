import Component from "./TabsWithUnderlineAndIcons.vue";

export default {
  title: "Components/Molecules/Tabs",
  component: Component,
  argTypes: {
    tabs: {
      type: "array",
      description: "the list of tabs",
    },
  },
  parameters: {
    componentSubtitle: "Display tabs with underline and icons",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TabsWithUnderlineAndIcons = Template.bind({});
TabsWithUnderlineAndIcons.args = {
  tabs: [
    { name: "My Account", href: "#", icon: "UserIcon", current: false },
    { name: "Company", href: "#", icon: "BuildingOfficeIcon", current: false },
    { name: "Team Members", href: "#", icon: "UsersIcon", current: true },
    { name: "Billing", href: "#", icon: "CreditCardIcon", current: false },
  ],
};
