import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Stats',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'stat title'
    },
    stats: {
      type: 'array',
      description: 'stat list'
    }
  },
  parameters: {
    componentSubtitle: 'Display simple stat list'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  stats: [
    {name: 'Total Subscribers', stat: '71,897'},
    {name: 'Avg. Open Rate', stat: '58.16%'},
    {name: 'Avg. Click Rate', stat: '24.57%'},
  ],
  title: 'Last 30 days'
};
