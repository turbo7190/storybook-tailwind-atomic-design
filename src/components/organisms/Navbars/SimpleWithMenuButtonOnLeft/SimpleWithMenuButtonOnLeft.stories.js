import Component from "./SimpleWithMenuButtonOnLeft.vue";

export default {
  title: "Components/Organisms/Navbars",
  component: Component,
  argTypes: {
    desktopLogo: {
      type: "string",
      description: "desktop logo",
    },
    mobileLogo: {
      type: "string",
      description: "mobile logo",
    },
    navigation: {
      type: "array",
      description: "navigation list",
    },
    icon: {
      type: "string",
      description: "action icon",
    },
    user: {
      type: "object",
      description: "user object",
    },
    menu: {
      type: "array",
      description: "menu list",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple navbar with menu button on left",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithMenuButtonOnLeft = Template.bind({});
SimpleWithMenuButtonOnLeft.args = {
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ],
  desktopLogo:
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
  mobileLogo:
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  icon: "BellIcon",
  user: {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Tom Cook",
    email: "tom@example.com",
  },
  menu: [
    {
      label: "Your Profile",
      action: () => console.log("your profile"),
    },
    {
      label: "Settings",
      action: () => console.log("Settings"),
    },
    {
      label: "Sign out",
      action: () => console.log("Sign out"),
    },
  ],
};
