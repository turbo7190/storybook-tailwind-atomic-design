import Component from './OnGray.vue';

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
    componentSubtitle: 'Display a vertical navigation on gray'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const OnGray = Template.bind({});
OnGray.args = {
  navigation: [
    {name: 'Dashboard', href: '#', icon: 'HomeIcon', current: true, count: '5'},
    {name: 'Team', href: '#', icon: 'UsersIcon', current: false},
    {name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
    {name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false, count: '20+'},
    {name: 'Documents', href: '#', icon: 'InboxIcon', current: false},
    {name: 'Reports', href: '#', icon: 'ChartBarIcon', current: false},
  ]
};
