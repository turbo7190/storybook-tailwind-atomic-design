import Component from "./TwoRowNavWithOverlap.vue";

export default {
  title: "Components/Organisms/Stacked Layouts",
  component: Component,
  argTypes: {
    user: {
      type: "object",
      description: "user object",
    },
    navigation: {
      type: "array",
      description: "navigation items",
    },
    userNavigation: {
      type: "array",
      description: "user navigation list",
    },
    logo: {
      type: "string",
      description: "logo",
    },
    content1: {
      type: "string",
      description: "first content",
    },
    content2: {
      type: "string",
      description: "second content",
    },
  },
  parameters: {
    componentSubtitle: "Display two row nav with overlap",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TwoRowNavWithOverlap = Template.bind({});
TwoRowNavWithOverlap.args = {
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
  user: {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  navigation: [
    { name: "Home", href: "#", current: true },
    { name: "Profile", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "Company Directory", href: "#", current: false },
    { name: "Openings", href: "#", current: false },
  ],
  userNavigation: [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ],
  content1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  content2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
