import Component from "./WithActions.vue";

export default {
  title: "Components/Organisms/Alert",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "Static text",
    },
    description: {
      type: "string",
      description: "link text",
    },
    buttons: {
      type: "array",
      description: "action buttons list",
    },
    icon: {
      type: "string",
      description: "icon name",
    },
  },
  parameters: {
    componentSubtitle: "Display an alert with actions",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithActions = Template.bind({});
WithActions.args = {
  title: "Order completed",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
  icon: "CheckCircleIcon",
  buttons: [
    {
      label: "View Status",
      onClick: () => console.log("clicked"),
    },
    {
      label: "Dismiss",
      onClick: () => console.log("clicked"),
    },
  ],
};
