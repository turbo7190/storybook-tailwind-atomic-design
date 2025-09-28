import Component from './WithSummaryRows.vue';

export default {
  title: 'Components/Organisms/Tables',
  component: Component,
  argTypes: {
    list: {
      type: 'array',
      description: 'table list'
    },
    summaries: {
      type: 'array',
      description: 'summary list'
    },
    title: {
      type: 'string',
      description: 'table title'
    },
    description: {
      type: 'string',
      description: 'table description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a table with summary rows'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSummaryRows = Template.bind({});
WithSummaryRows.args = {
  list: [
    {name: 'New Advertising Campaign', hours: '12.0', rate: '$75.00', price: '$900.00'},
    // More projects...
  ],
  title: 'Invoice',
  description: 'For work completed from August 1, 2022 to August 31, 2022.',
  btnText: 'Print',
  onClick: () => console.log('clicked'),
  summaries: [
    {name: 'Subtotal', value: '$3,900.00'},
    {name: 'Tax', value: '$585.00'},
    {name: 'Total', value: '$4,400.00'},
  ]
};
