import Component from './SimpleCardFooter.vue';

export default {
  title: 'Components/Organisms/Pagination',
  component: Component,
  argTypes: {
    totalCount: {
      type: 'number',
      description: 'items total count',
    },
    first: {
      type: 'number',
      description: 'first item index in current page'
    },
    last: {
      type: 'number',
      description: 'last item index in current page'
    },
  },
  parameters: {
    componentSubtitle: 'Display a pagination in card footer'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleCardFooter = Template.bind({});
SimpleCardFooter.args = {
  first: 1,
  last: 10,
  totalCount: 20
};
