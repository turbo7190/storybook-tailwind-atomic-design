import Component from "./SimpleList.vue";

export default {
  title: "Components/Molecules/Checkboxes",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "list of checkboxes",
    },
    selected: {
      type: "array",
      description: "list of selected values",
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
  template: '<component v-bind="args" v-model:selected="args.selected" />',
});

export const SimpleList = Template.bind({});
SimpleList.args = {
  items: ["Comments", "Candidates", "Offers"],
  selected: ["Candidates"],
};
