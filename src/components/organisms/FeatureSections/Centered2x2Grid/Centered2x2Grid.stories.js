import Component from "./Centered2x2Grid.vue";
export default {
  title: "Components/Organisms/Feature Sections",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "section title",
    },
    description: {
      type: "string",
      description: "section description",
    },
    category: {
      type: "string",
      description: "section category",
    },
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle: "Display a centered 2 x 2 grid feature section",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Centered2x2Grid = Template.bind({});
Centered2x2Grid.args = {
  title: "A better way to send money",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
  category: "transactions",
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
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "ChatBubbleBottomCenterTextIcon",
    },
  ],
};
