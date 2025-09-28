import Component from "./SimpleWithCheckboxOnRight.vue";

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
    header: {
      type: "string",
      description: "text shown on top",
    },
    title: {
      type: "string",
      description: "text shown below title",
    },
    description: {
      type: "string",
      description: "text shown below title",
    },
  },
  parameters: {
    componentSubtitle:
      "Displays a checkbox like a list item with title, header and description",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" v-model:value="args.value" />',
});

export const SimpleWithCheckboxOnRight = Template.bind({});
SimpleWithCheckboxOnRight.args = {
  title: "Comments",
  description: "Get notified when someones posts a comment on a posting.",
  value: true,
  id: "comments",
  name: "comments",
};

export const SimpleWithHeading = Template.bind({});
SimpleWithHeading.args = {
  title: "Comments",
  description: "Get notified when someones posts a comment on a posting.",
  header: "Members",
  headerTitle: "Members",
  value: true,
  id: "comments",
  name: "comments",
};
