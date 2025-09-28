import Component from "./WithSecondaryNavigation.vue";

export default {
  title: "Components/Organisms/Sidebar Navigation",
  component: Component,
  argTypes: {
    navigation: {
      type: "array",
      description: "navigation items list",
    },
    logo: {
      type: "string",
      description: "navigation menu logo",
    },
    secondaryLabel: {
      type: "string",
      description: "secondary navigation label",
    },
    secondaryNavigation: {
      type: "array",
      description: "secondary navigation items list",
    },
  },
  parameters: {
    componentSubtitle: "Display a sidebar navigation with secondary one",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSecondaryNavigation = Template.bind({});
WithSecondaryNavigation.args = {
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  secondaryLabel: "Projects",
  navigation: [
    { name: "Dashboard", icon: "HomeIcon", href: "#", current: true },
    { name: "Team", icon: "UsersIcon", href: "#", current: false },
    { name: "Projects", icon: "FolderIcon", href: "#", current: false },
    { name: "Calendar", icon: "CalendarIcon", href: "#", current: false },
    { name: "Documents", icon: "InboxIcon", href: "#", current: false },
    { name: "Reports", icon: "ChartBarIcon", href: "#", current: false },
  ],
  secondaryNavigation: [
    { name: "Website redesign", href: "#" },
    { name: "GraphQL API", href: "#" },
    { name: "Customer migration guides", href: "#" },
    { name: "Profit sharing program", href: "#" },
  ],
};
