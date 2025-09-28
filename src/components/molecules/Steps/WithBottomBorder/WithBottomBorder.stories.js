import Component from "./WithBottomBorder.vue";

export default {
  title: "Components/Molecules/Steps/WithBottomBorder",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "steps array",
    },
    dependancy: {
      type: "boolean",
      description: "when set to true allows to traverse steps only in sequence",
    },
    stepClicked: {
      action: "step clicked",
    },
    completeBorderColor: {
      type: "string",
    },
    completeBorderHoverColor: {
      type: "string",
    },
    currentBorderColor: {
      type: "string",
    },
    currentBorderHoverColor: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});
const DEFAULT_ARGS = {
  items: [
    { id: "Step 1", name: "Job details", status: "current" },
    { id: "Step 2", name: "Application form", status: "pending" },
    { id: "Step 3", name: "Preview", status: "pending" },
  ],
};
