import Component from "./ThreeColumnWithIcons.vue";
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

export const ThreeColumnWithIcons = Template.bind({});
ThreeColumnWithIcons.args = {
  heading: "Why you should buy from us",
  items: [
    { name: "Free, contactless delivery", icon: "TruckIcon" },
    { name: "No questions asked returns", icon: "CheckBadgeIcon" },
    { name: "2-year warranty", icon: "CalendarIcon" },
  ],
};
