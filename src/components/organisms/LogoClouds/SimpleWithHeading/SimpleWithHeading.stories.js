import Component from "./SimpleWithHeading.vue";

export default {
  title: "Components/Organisms/Logo Clouds",
  component: Component,
  argTypes: {},
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithHeading = Template.bind({});
SimpleWithHeading.args = {
  title: "The world's most innovative companies use Workflow",
  items: [
    {
      title: "Workcation",
      alt: "Workcation",
      source:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      class: "h-12",
    },
    {
      title: "Tuple",
      alt: "Tuple",
      source:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      class: "h-12",
    },
    {
      title: "Level",
      alt: "Level",
      source:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      class: "h-12",
    },
  ],
};
