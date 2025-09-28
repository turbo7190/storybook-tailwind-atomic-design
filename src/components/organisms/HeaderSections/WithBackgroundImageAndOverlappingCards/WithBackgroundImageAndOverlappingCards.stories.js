import Component from "./WithBackgroundImageAndOverlappingCards.vue";

export default {
  title: "Components/Organisms/Header Sections",
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
    cards: {
      type: "array",
      description: "section cards list",
    },
    bgImage: {
      type: "string",
      description: "background image",
    },
  },
  parameters: {
    componentSubtitle:
      "Display a header section with background image and overlapping cards",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBackgroundImageAndOverlappingCards = Template.bind({});
WithBackgroundImageAndOverlappingCards.args = {
  title: "Support",
  description:
    "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.",
  bgImage:
    "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100",
  cards: [
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: "PhoneIcon",
    },
    {
      name: "Technical Support",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: "LifebuoyIcon",
    },
    {
      name: "Media Inquiries",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: "NewspaperIcon",
    },
  ],
};
