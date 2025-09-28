import Component from "./FullWidthWithNarrowSidebarAndSecondaryColumnOnRight.vue";

export default {
  title: "Components/Organisms/Multi-Column Layouts",
  component: Component,
  argTypes: {
    user: {
      type: "object",
      description: "user object",
    },
    userNavigation: {
      type: "array",
      description: "menu list",
    },
    searchInputChange: {
      action: "search input changes",
    },
    navigation: {
      type: "array",
      description: "navigation items list",
    },
    logo: {
      type: "string",
      description: "navigation menu logo",
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
      options: ["gray-700", "red-700", "green-700", "primary-700"],
      description: "background color of navigation bar",
    },
    navSelectionBgColor: {
      control: { type: "select" },
      options: ["gray-800", "red-800", "green-800", "primary-800"],
      description: "background color of navigation bar selection item",
    },
    hoverBgColor: {
      control: { type: "select" },
      options: ["gray-800", "red-800", "green-800", "primary-800"],
      description: "background color of navigation bar item on hover",
    },
    iconColor: {
      control: { type: "select" },
      options: ["gray-300", "red-300", "green-300", "primary-300"],
      description: "color of icon",
    },
    iconSelectionColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200", "white"],
      description: "color of icon of selected item",
    },
    navTextColor: {
      control: { type: "select" },
      options: ["gray-100", "red-100", "green-100", "primary-100", "white"],
      description: "color of icon of selected item",
    },
    navTextSelectionColor: {
      control: { type: "select" },
      options: ["gray-200", "red-200", "green-200", "primary-200", "white"],
      description: "color of icon of selected item",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
                <template #secondaryColumn>
                  <div class="text-sm text-gray-900 font-medium p-4">
                    Secondary Column
                  </div>
                </template>
                <template #primaryColumn>
                  <div class="text-sm text-gray-900 font-medium p-4">
                    Primary Column
                  </div>
                </template>
              </component>`,
});

export const FullWidthWithNarrowSidebarAndSecondaryColumnOnRight =
  Template.bind({});
FullWidthWithNarrowSidebarAndSecondaryColumnOnRight.args = {
  user: {
    avatar:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    name: "Kelly Adams",
  },
  logo: {
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
    title: "workflow",
  },
  navigation: [
    { id: 1, name: "Home", href: "#", icon: "HomeIcon" },
    { id: 2, name: "All Files", href: "#", icon: "Squares2X2Icon" },
    { id: 3, name: "Photos", href: "#", icon: "CameraIcon" },
    { id: 4, name: "Shared", href: "#", icon: "UserGroupIcon" },
    { id: 5, name: "Albums", href: "#", icon: "RectangleStackIcon" },
    { id: 6, name: "Settings", href: "#", icon: "CogIcon" },
  ],
  userNavigation: [
    {
      name: "Your Profile",
      action: () => console.log("your profile"),
    },
    {
      name: "Settings",
      action: () => console.log("Settings"),
    },
    {
      name: "Sign out",
      action: () => console.log("Sign out"),
    },
  ],
  selectedItem: { id: 3, name: "Photos", href: "#", icon: "CameraIcon" },
};
