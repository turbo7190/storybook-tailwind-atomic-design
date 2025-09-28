import Component from "./ThreeColumnWithIconsAndSupportingText.vue";
// Icons are now referenced as strings

export default {
  title: "Components/Organisms/Ecommerce/Incentives",
  component: Component,
  argTypes: {
    heading: {
      type: "string",
    },
    items: {
      type: "array",
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ThreeColumnWithIconsAndSupportingText = Template.bind({});
ThreeColumnWithIconsAndSupportingText.args = {
  heading: "Our perks",
  items: [
    {
      name: "10-year all-inclusive warranty",
      description: "We’ll replace it with a new one",
      icon: "CalendarIcon",
    },
    {
      name: "Free shipping on returns",
      description: "Send it back for free",
      icon: "ArrowPathIcon",
    },
    {
      name: "Free, contactless delivery",
      description: "The shipping is on us",
      icon: "TruckIcon",
    },
  ],
};
