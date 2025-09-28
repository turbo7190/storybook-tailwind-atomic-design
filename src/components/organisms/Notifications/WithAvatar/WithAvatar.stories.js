import Component from "./WithAvatar.vue";

export default {
  title: "Components/Organisms/Notifications",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "notification title",
    },
    description: {
      type: "string",
      description: "notification description",
    },
    avatar: {
      type: "string",
      description: "avatar link",
    },
    btnText: {
      type: "string",
      description: "notification button text",
    },
    onClick: {
      action: "clicked",
      description: "notification button action",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple notification with avatar",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  title: "Emilia Gates",
  description: "Sure! 8:30pm works great!",
  btnText: "Reply",
  onClick: () => console.log("clicked"),
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
};
