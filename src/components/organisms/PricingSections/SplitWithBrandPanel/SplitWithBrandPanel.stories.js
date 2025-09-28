import Component from "./SplitWithBrandPanel.vue";

export default {
  title: "Components/Organisms/Pricing Sections",
  component: Component,
  argTypes: {
    featureInfo: {
      type: "object",
      description: "feature list info",
    },
    checkList: {
      type: "array",
      description: "membership check items",
    },
    setupFee: {
      type: "number",
      description: "setup fee",
    },
    perMonth: {
      type: "number",
      description: "per month",
    },
    btnText: {
      type: "string",
      description: "button text",
    },
  },
  parameters: {
    componentSubtitle: "Display a price section splitting with brand panel",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithBrandPanel = Template.bind({});
SplitWithBrandPanel.args = {
  setupFee: 99,
  perMonth: 4,
  featureInfo: {
    title: "A better way to send money",
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
  },
  checkList: [
    "Unlimited projects",
    "No per user fees",
    "Unlimited storage",
    "24/7 support",
    "Cancel any time",
    "14 days free",
  ],
};
