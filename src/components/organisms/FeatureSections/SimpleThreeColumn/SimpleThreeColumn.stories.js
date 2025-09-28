import Component from "./SimpleThreeColumn.vue";

export default {
  title: "Components/Organisms/Feature Sections",
  component: Component,
  argTypes: {
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle: "Display simple three column grid feature section",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleThreeColumn = Template.bind({});
SimpleThreeColumn.args = {
  items: [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "GlobeAltIcon",
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "ScaleIcon",
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "BoltIcon",
    },
  ],
};
