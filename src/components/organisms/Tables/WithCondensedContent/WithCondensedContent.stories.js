import Component from './WithCondensedContent.vue';

export default {
  title: 'Components/Organisms/Tables',
  component: Component,
  argTypes: {
    list: {
      type: 'array',
      description: 'table list'
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
    componentSubtitle: 'Display a simple table with condensed content'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithCondensedContent = Template.bind({});
WithCondensedContent.args = {
  list: [
    {
      id: 'AAPS0L',
      company: 'Chase & Co.',
      share: 'CAC',
      commission: '+$4.37',
      price: '$3,509.00',
      quantity: '12.00',
      netAmount: '$4,397.00',
    },
    // More transactions...
  ],
  title: 'Transactions',
  description: 'A table of placeholder stock market data that does not make any sense.',
  btnText: 'Export',
  onClick: () => console.log('clicked'),
};
