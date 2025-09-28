import Component from "./TabGroup.vue";

export default {
  title: "Components/Molecules/Tabs",
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

export const TabGroup = Template.bind({});
TabGroup.args = {
  tabs: [
    {
      id: 1,
      name: "Angled view",
      src: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "Side view",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      alt: "Side view of the bag with zipper closed.",
    },
    {
      id: 3,
      name: "Front view",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      alt: "Front view of the bag showing the main compartment.",
    },
    {
      id: 4,
      name: "Back view",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      alt: "Back view of the bag showing the rear compartment.",
    },
  ],
};
