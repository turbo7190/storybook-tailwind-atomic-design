import Component from "./SimpleWithDescription.vue";

export default {
  title: "Components/Molecules/Checkboxes",
  component: Component,
  argTypes: {
    content: {
      type: "string",
    },
    value: {
      type: "boolean",
      description: "value of checkbox",
    },
    title: {
      type: "string",
      description: "text shown below title",
    },
    description: {
      type: "string",
      description: "text shown below title",
    },
    helpText: {
      type: "string",
      description: "text shown below form to help",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays a checkbox like a list item with title and description",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" v-model:value="args.value" />',
});

export const SimpleWithDescription = Template.bind({});
SimpleWithDescription.args = {
  title: "Comments",
  description: "Get notified when someones posts a comment on a posting.",
};

export const SimpleWithInlineDescription = Template.bind({});
SimpleWithInlineDescription.args = {
  description: "Get notified when someones posts a comment on a posting.",
  helpText: "It's required.",
};
