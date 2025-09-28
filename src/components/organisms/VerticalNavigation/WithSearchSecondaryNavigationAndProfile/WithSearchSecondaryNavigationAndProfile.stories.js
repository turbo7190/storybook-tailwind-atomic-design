import Component from "./WithSearchSecondaryNavigationAndProfile.vue";
export default {
  title: "Components/Organisms/Vertical Navigation",
  component: Component,
  argTypes: {
    navigation: {
      type: "array",
      description: "navigation items list",
    },
    userNavigation: {
      type: "array",
      description: "user navigation items list",
    },
    logo: {
      type: "string",
      description: "navigation menu logo",
    },
    user: {
      type: "object",
      description: "navigation bottom user object",
    },
    itemClicked: {
      action: "item clicked",
    },
    searchInputChange: {
      action: "search input changes",
    },
    notificationClicked: {
      action: "notification clicked",
    },
    closeButtonClicked: {
      action: "close button clicked",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a navigation with secondary navigation, search bar and profile options",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
            </component>`,
});

export const WithSearchSecondaryNavigationAndProfile = Template.bind({});
WithSearchSecondaryNavigationAndProfile.args = {
  logo: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    title: "workflow",
  },
  user: {
    name: "Whitney Francis",
    role: "whitney.francis@example.com",
    avatar:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    {
      name: "Inboxes",
      href: "#",
      children: [
        { name: "Technical Support", href: "#" },
        { name: "Sales", href: "#" },
        { name: "General", href: "#" },
      ],
    },
    { name: "Reporting", href: "#", children: [] },
    { name: "Settings", href: "#", children: [] },
  ],
  userNavigation: [
    {
      name: "Your Profile",
      action: () => console.log("your profile"),
    },
    {
      name: "Sign out",
      action: () => console.log("Sign out"),
    },
  ],
};
