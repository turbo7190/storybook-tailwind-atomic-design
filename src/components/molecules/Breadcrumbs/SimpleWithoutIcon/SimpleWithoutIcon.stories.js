import Component from "./SimpleWithoutIcon.vue";

export default {
  title: "Components/Molecules/Breadcrumbs",
  component: Component,
  argTypes: {
    breadcrumbs: {
      type: "array",
      description: "breadcrumbs array",
    },
  },
  parameters: {
    componentSubtitle: "Display a simple breadcrumbs without icon",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithoutIcon = Template.bind({});
SimpleWithoutIcon.args = {
  breadcrumbs: ["Users", "User Detail"],
};
