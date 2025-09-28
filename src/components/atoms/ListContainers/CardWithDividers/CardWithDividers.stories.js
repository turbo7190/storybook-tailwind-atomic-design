import Component from "./CardWithDividers.vue";
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
    componentSubtitle: "Display a card type container with dividers",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: `<component v-bind="args">
  </component>`,
});

export const CardWithDividers = Template.bind({});
CardWithDividers.args = {
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
