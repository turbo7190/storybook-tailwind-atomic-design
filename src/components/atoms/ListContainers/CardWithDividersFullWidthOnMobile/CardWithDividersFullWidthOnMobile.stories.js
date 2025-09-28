import Component from "./CardWithDividersFullWidthOnMobile.vue";
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
    componentSubtitle:
      "Display a card type container with dividers full width on mobile",
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

export const CardWithDividersFullWidthOnMobile = Template.bind({});
CardWithDividersFullWidthOnMobile.args = {
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
