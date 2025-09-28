import Component from "./WithAccentBorder.vue";

export default {
  title: "Components/Organisms/Alert",
  component: Component,
  argTypes: {
    text: {
      type: "string",
      description: "Static text",
    },
    linkText: {
      type: "string",
      description: "link text",
    },
    onClick: {
      action: "clicked",
      description: "link action",
    },
    icon: {
      type: "string",
      description: "icon name",
    },
  },
  parameters: {
    componentSubtitle: "Display an alert with accent border",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAccentBorder = Template.bind({});
WithAccentBorder.args = {
  text: "You have no credits left.",
  linkText: "Upgrade your account to add more credits",
  onClick: () => console.log("clicked"),
  icon: "ExclamationTriangleIcon",
};
