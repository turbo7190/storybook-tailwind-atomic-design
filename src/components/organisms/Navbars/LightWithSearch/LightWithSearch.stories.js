import Component from "./LightWithSearch.vue";

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
    placeholder: {
      type: "string",
      description: "input form placeholder",
    },
    inputIcon: {
      type: "string",
      description: "input icon",
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
    componentSubtitle: "Display a light navbar with search input",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const LightWithSearch = Template.bind({});
LightWithSearch.args = {
  desktopLogo:
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  mobileLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  navigation: [
    {
      label: "Dashboard",
      href: "#",
    },
    {
      label: "Team",
      href: "#",
    },
    {
      label: "Projects",
      href: "#",
    },
    {
      label: "Calendar",
      href: "#",
    },
  ],
  placeholder: "Search",
  inputIcon: "MagnifyingGlassIcon",
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
