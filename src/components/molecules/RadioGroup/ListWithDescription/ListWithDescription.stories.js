import Component from './ListWithDescription.vue';

export default {
  title: 'Components/Molecules/Radio Groups',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label to be shown on top of group'
    },
    items: {
      type: 'array',
      description: 'list of items'
    }
  },
  parameters: {
    componentSubtitle:
      'display radio group with list',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ListWithDescription = Template.bind({});
ListWithDescription.args = {
  label: 'Plan',
  items: [
    {
      id: "small",
      name: "Small",
      description: "4 GB RAM / 2 CPUS / 80 GB SSD Storage",
    },
    {
      id: "medium",
      name: "Medium",
      description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
    },
    {
      id: "large",
      name: "Large",
      description: "16 GB RAM / 8 CPUS / 320 GB SSD Storage",
    },
  ],
  value: {
    id: "medium",
    name: "Medium",
    description: "8 GB RAM / 4 CPUS / 160 GB SSD Storage",
  }
};
