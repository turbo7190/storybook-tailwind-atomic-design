import Component from "./SmallCards.vue";

export default {
  title: "Components/Molecules/Radio Groups/Small Cards",
  component: Component,
  argTypes: {
    label: {
      type: "string",
      description: "label to be shown on top of group",
    },
    items: {
      type: "array",
      description: "list of items",
    },
    showLink: {
      type: "boolean",
      description: "toggle link visibility",
    },
    linkUrl: {
      type: "string",
      description: "redirect url",
    },
    disabledKey: {
      type: "string",
      description: "disabled property name from item",
    },
    linkLabel: {
      type: "string",
      description: "text to show in link",
    },
    linkColor: {
      control: { type: "select" },
      options: [
        "primary-600",
        "primary-500",
        "gray-500",
        "red-500",
        "green-500",
      ],
      description: "text color of link",
    },
    hoverLinkColor: {
      control: { type: "select" },
      options: [
        "primary-600",
        "primary-500",
        "gray-500",
        "red-500",
        "green-500",
      ],
      description: "hover text color of link",
    },
  },
  parameters: {
    componentSubtitle:
      "display radio group with small cards, disabled state can be achieved through disabledKey property",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SmallCards = Template.bind({});
SmallCards.args = {
  items: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  label: "Choose a Size",
  showLink: true,
  linkLabel: "See sizing charts",
  linkColor: "primary-600",
  hoverLinkColor: "primary-500",
  linkUrl: "#",
  disabledKey: "inStock",
};
