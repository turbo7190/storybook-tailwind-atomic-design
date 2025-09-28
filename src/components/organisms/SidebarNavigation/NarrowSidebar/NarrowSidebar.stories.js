import Component from "./NarrowSidebar.vue";

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
    selectedItem: {
      type: "object",
      description: "selected navigation item",
    },
    itemClicked: {
      action: "item clicked",
    },
    navBgColor: {
      control: { type: "select" },
      options: ["gray-600", "red-600", "green-600", "primary-600"],
      description: "background color of navigation bar",
    },
    navSelectionBgColor: {
      control: { type: "select" },
      options: ["gray-900", "red-900", "green-900", "primary-900"],
      description: "background color of navigation bar selection item",
    },
    hoverBgColor: {
      control: { type: "select" },
      options: ["gray-700", "red-700", "green-700", "primary-700"],
      description: "background color of navigation bar item on hover",
    },
    iconColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200"],
      description: "color of icon",
    },
    iconSelectionColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200"],
      description: "color of icon of selected item",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a brand sidebar navigation with icons, logo and avatar",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template:
    ' <div class="flex flex-col w-20"><component v-bind="args" /></div>',
});

export const NarrowSidebar = Template.bind({});
NarrowSidebar.args = {
  user: {
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Emily Selman",
    role: "View profile",
  },
  logo: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: "workflow",
  },
  navigation: [
    { id: 1, name: "Home", href: "#", icon: "HomeIcon" },
    { id: 2, name: "Trending", href: "#", icon: "FireIcon" },
    { id: 3, name: "Bookmarks", href: "#", icon: "FireIcon" },
    { id: 4, name: "Messages", href: "#", icon: "InboxIcon" },
    { id: 5, name: "Profile", href: "#", icon: "UserIcon" },
  ],
  selectedItem: {
    id: 3,
    name: "Bookmarks",
    href: "#",
    icon: "FireIcon",
  },
};
export const DarkNarrowSidebar = Template.bind({});
DarkNarrowSidebar.args = {
  navigation: [
    { id: 1, name: "Home", href: "#", icon: "HomeIcon" },
    { id: 2, name: "Trending", href: "#", icon: "FireIcon" },
    { id: 3, name: "Bookmarks", href: "#", icon: "FireIcon" },
    { id: 4, name: "Messages", href: "#", icon: "InboxIcon" },
    { id: 5, name: "Profile", href: "#", icon: "UserIcon" },
  ],
  selectedItem: {
    id: 3,
    name: "Bookmarks",
    href: "#",
    icon: "FireIcon",
  },
  navBgColor: "gray-800",
  navSelectionBgColor: "gray-900",
  hoverBgColor: "gray-700",
  iconColor: "gray-400",
  iconSelectionColor: "white",
  logoSectionColor: "primary-500",
};
