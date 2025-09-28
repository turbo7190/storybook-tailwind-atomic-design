import Component from './WithBadges.vue';

export default {
  title: 'Components/Organisms/Vertical Navigation',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple vertical navigation with badges'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithBadges = Template.bind({});
WithBadges.args = {
  navigation: [
    {name: 'Dashboard', href: '#', current: true, count: '5'},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false, count: '19'},
    {name: 'Calendar', href: '#', current: false, count: '20+'},
    {name: 'Documents', href: '#', current: false},
    {name: 'Reports', href: '#', current: false},
  ]
};
