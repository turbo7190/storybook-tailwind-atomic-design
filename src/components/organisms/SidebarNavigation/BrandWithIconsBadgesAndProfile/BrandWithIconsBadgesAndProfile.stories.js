import Component from "./BrandWithIconsBadgesAndProfile.vue";

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
    user: {
      type: "object",
      description: "navigation bottom user object",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a brand sidebar navigation with icons, badges, and profile",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const BrandWithIconsBadgesAndProfile = Template.bind({});
BrandWithIconsBadgesAndProfile.args = {
  user: {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Tom Cook",
    role: "View profile",
  },
  logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  navigation: [
    { name: "Dashboard", icon: "HomeIcon", href: "#", current: true },
    { name: "Team", icon: "UsersIcon", href: "#", count: 3, current: false },
    {
      name: "Projects",
      icon: "FolderIcon",
      href: "#",
      count: 4,
      current: false,
    },
    { name: "Calendar", icon: "CalendarIcon", href: "#", current: false },
    {
      name: "Documents",
      icon: "InboxIcon",
      href: "#",
      count: 12,
      current: false,
    },
    { name: "Reports", icon: "ChartBarIcon", href: "#", current: false },
  ],
};
