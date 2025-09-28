import Component from "./AlternativeSideBySideWithImages.vue";

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
    items: {
      type: "array",
      description: "section feature items",
    },
  },
  parameters: {
    componentSubtitle:
      "Display an alternative side by side feature section with images",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const AlternativeSideBySideWithImages = Template.bind({});
AlternativeSideBySideWithImages.args = {
  title: "A better way to send money",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
  items: [
    {
      title: "Transfer funds world-wide",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.",
      subItems: [
        {
          id: 1,
          name: "Competitive exchange rates",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "GlobeAltIcon",
        },
        {
          id: 2,
          name: "No hidden fees",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "ScaleIcon",
        },
        {
          id: 3,
          name: "Transfers are instant",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "BoltIcon",
        },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Always in the loop",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.",
      subItems: [
        {
          id: 1,
          name: "Mobile notifications",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "ChatBubbleBottomCenterTextIcon",
        },
        {
          id: 2,
          name: "Reminder emails",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
          icon: "EnvelopeIcon",
        },
      ],
      screenshot:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ],
};
