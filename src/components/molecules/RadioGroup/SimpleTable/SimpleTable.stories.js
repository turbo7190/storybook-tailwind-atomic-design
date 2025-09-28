import Component from './SimpleTable.vue';

export default {
  title: 'Components/Molecules/Radio Groups/Simple Tab',
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
      'display radio group as table',
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  label: 'Pricing plans',
  items: [
    {
      name: "Startup",
      description: "29/mo 290/yr",
      description1: "Up to 5 active job postings",
    },
    {
      name: "Business",
      description: "99/mo 990/yr",
      description1: "Up to 25 active job postings",
    },
    {
      name: "Enterprise",
      description: "249/mo 2490/yr",
      description1: "Unlimited active job postings",
    },
  ],
  selectedItem: {
    name: "Business",
    description: "99/mo 990/yr",
    description1: "Up to 25 active job postings",
  }
};
export const SimpleTableDynamicFields = Template.bind({});
SimpleTableDynamicFields.args = {
  label: 'Pricing plans',
  items: [
    {
      name: "name",
      description: "description",
      description1: "description1",
    }
  ]
};
