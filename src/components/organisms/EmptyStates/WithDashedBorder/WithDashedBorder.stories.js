import Component from "./WithDashedBorder.vue";

export default {
  title: "Components/Organisms/Empty States",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "state title",
    },
    description: {
      type: "string",
      description: "state description",
    },
    btnText: {
      type: "string",
      description: "action button text",
    },
    btnIcon: {
      type: "string",
      description: "action button icon",
    },
    onClick: {
      action: "clicked",
      description: "button action",
    },
  },
  parameters: {
    componentSubtitle: "Display an empty state with dashed border",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithDashedBorder = Template.bind({});
WithDashedBorder.args = {
  title: "Create a new database",
  onClick: () => console.log("clicked"),
};
