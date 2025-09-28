import Component from "./ListWithDescription.vue";

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
  },
  parameters: {
    componentSubtitle: "Displays a checkbox list with title and description",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" v-model:value="args.value" />',
});

export const ListWithDescription = Template.bind({});
ListWithDescription.args = {
  items: [
    {
      id: "Comments",
      name: "Comments",
      title: "Comments",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: "Candidates",
      name: "Candidates",
      title: "Candidates",
      description: "Get notified when a candidate applies for a job.",
    },
    {
      id: "Offers",
      name: "Offers",
      title: "Offers",
      description: "Get notified when a candidate accepts or rejects an offer.",
    },
  ],
};
