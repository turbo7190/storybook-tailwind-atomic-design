import Component from "./SeparateCards.vue";
import ListItem from "../../../organisms/ListItem/Simple/Simple.vue";

export default {
  title: "Components/Atoms/List Containers",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "list items",
    },
    component: {
      type: "object",
      description: "child component",
    },
  },
  parameters: {
    componentSubtitle: "Display separate cards container",
  },
};

const Template = (args) => ({
  components: { Component, ListItem },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
  </component>`,
});

export const SeparateCards = Template.bind({});
SeparateCards.args = {
  items: [
    {
      id: 0,
      label: "Name",
      value: "John Dowen",
    },
    {
      id: 1,
      label: "Email",
      value: "john@gmail.com",
    },
  ],
  component: ListItem,
};
