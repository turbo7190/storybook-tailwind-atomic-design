import Component from './Meta.vue';

export default {
  title: 'Components/Molecules/Meta',
  component: Component,
  argTypes: {
    meta: {
      type: 'array',
      description: 'meta list'
    }
  },
  parameters: {
    componentSuttitle: 'Display a simple meta with icons'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Meta = Template.bind({});
Meta.args = {
  meta: [
    {
      title: 'Full-time',
      icon: 'BriefcaseIcon'
    },
    {
      title: 'Remote',
      icon: 'MapPinIcon'
    },
    {
      title: '$120k - $140k',
      icon: 'CurrencyDollarIcon'
    },
    {
      title: 'Closing on January 9, 2020',
      icon: 'CalendarIcon'
    }
  ]
};
