import Component from "./WithDescription.vue";

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
    icon: {
      type: "string",
      description: "icon name",
    },
  },
  parameters: {
    componentSubtitle: "Display an alert with description",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: "Attention needed",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  icon: "ExclamationTriangleIcon",
};
