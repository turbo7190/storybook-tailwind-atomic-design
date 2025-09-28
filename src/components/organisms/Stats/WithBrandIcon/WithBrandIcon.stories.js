import Component from "./WithBrandIcon.vue";

export default {
  title: "Components/Organisms/Stats",
  component: Component,
  argTypes: {
    title: {
      type: "string",
      description: "stat title",
    },
    stats: {
      type: "array",
      description: "stat list",
    },
  },
  parameters: {
    componentSubtitle: "Display stat list with brand icon",
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBrandIcon = Template.bind({});
WithBrandIcon.args = {
  stats: [
    {
      id: 1,
      name: "Total Subscribers",
      stat: "71,897",
      icon: "UsersIcon",
      change: "122",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Avg. Open Rate",
      stat: "58.16%",
      icon: "UsersIcon",
      change: "5.4%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Avg. Click Rate",
      stat: "24.57%",
      icon: "CursorArrowRaysIcon",
      change: "3.2%",
      changeType: "decrease",
    },
  ],
  title: "Last 30 days",
};
