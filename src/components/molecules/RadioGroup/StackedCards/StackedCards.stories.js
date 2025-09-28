import Component from './StackedCards.vue';

export default {
  title: 'Components/Molecules/Radio Groups/StackedCards',
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
      'display radio group as stacked cards, transform data to show in name, description, line1 and line2 properties',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const StackedCards = Template.bind({});
StackedCards.args = {
  label: 'Servere Size',
  items: [
    {
      name: "Hobby",
      description: '8GB / 4 CPUs . 160 GB SSD disk',
      line1: '$40',
      line2: '/mo'
    },
    {
      name: "Startup",
      description: '12GB / 6 CPUs . 250 GB SSD disk',
      line1: '$80',
      line2: '/mo'
    },
    {
      name: "Business",
      description: '16GB / 8 CPUs . 512 GB SSD disk',
      line1: '$160',
      line2: '/mo'
    },
    {
      name: "Enterprise",
      description: '32GB / 12 CPUs . 1024 GB SSD disk',
      line1: '$240',
      line2: '/mo'
    },
  ]
};
export const StackedCardsDynamicFields = Template.bind({});
StackedCardsDynamicFields.args = {
  label: 'Servere Size',
  items: [
    {
      name: "name",
      description: 'description',
      line1: 'line1',
      line2: 'line2'
    }
  ]
};
