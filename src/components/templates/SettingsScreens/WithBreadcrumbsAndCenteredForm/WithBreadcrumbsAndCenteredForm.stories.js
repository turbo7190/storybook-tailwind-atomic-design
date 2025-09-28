import Component from "./WithBreadcrumbsAndCenteredForm.vue";

export default {
  title: "Components/Templates/Settings Screens",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBreadcrumbsAndCenteredForm = Template.bind({});
WithBreadcrumbsAndCenteredForm.args = {
  user: {
    name: "Floyd Miles",
    email: "floy.dmiles@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Applicants", href: "#" },
    { name: "Company", href: "#" },
  ],
  breadcrumbs: [
    { name: "Projects", href: "#", current: false },
    { name: "Project Nero", href: "#", current: true },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  team: [
    {
      name: "Calvin Hawkins",
      email: "calvin.hawkins@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Bessie Richards",
      email: "bessie.richards@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Floyd Black",
      email: "floyd.black@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
  settings: [
    {
      name: "Public access",
      description: "This project would be available to anyone who has the link",
    },
    {
      name: "Private to Project Members",
      description: "Only members of this project would be able to access",
    },
    {
      name: "Private to you",
      description: "You are the only one able to access this project",
    },
  ],
};
