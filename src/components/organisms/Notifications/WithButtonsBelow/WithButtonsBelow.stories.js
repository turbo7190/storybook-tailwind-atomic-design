import Component from "./WithButtonsBelow.vue";

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
    buttons: {
      type: "array",
      description: "notification action buttons list",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple notification with buttons below",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithButtonsBelow = Template.bind({});
WithButtonsBelow.args = {
  title: "Emilia Gates",
  description: "Sent you an invite to connect",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  buttons: [
    {
      label: "Accept",
      type: "primary",
      onClick: () => console.log("clicked"),
    },
    {
      label: "Decline",
      type: "secondary",
      onClick: () => console.log("clicked"),
    },
  ],
};
