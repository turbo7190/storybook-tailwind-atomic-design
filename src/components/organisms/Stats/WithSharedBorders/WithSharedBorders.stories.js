import Component from './WithSharedBorders.vue';

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
    componentSubtitle: 'Display stat list with shared border'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSharedBorders = Template.bind({});
WithSharedBorders.args = {
  stats: [
    {name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase'},
    {name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase'},
    {name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease'},
  ],
  title: 'Last 30 days'
};
