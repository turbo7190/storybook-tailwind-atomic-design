import Component from "./Accordion.vue";

export default {
  title: "Components/Molecules/Accordion",
  component: Component,
  argTypes: {
    tabs: {
      type: "array",
      description: "the list of tabs",
    },
  },
  parameters: {
    componentSubtitle: "Display tabs with underline and icons",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Accordion = Template.bind({});
Accordion.args = {
  accordions: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};
