import Component from "./FlatCardWithDividers.vue";
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
    componentSubtitle: "Display flat cards container with dividers",
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

export const FlatCardWithDividers = Template.bind({});
FlatCardWithDividers.args = {
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
