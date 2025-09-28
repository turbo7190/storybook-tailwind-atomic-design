import Component from './WithSecondaryNavigation.vue';

export default {
  title: 'Components/Organisms/Vertical Navigation',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
    },
    secondaryNavigation: {
      type: 'array',
      description: 'secondary navigation items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a vertical navigation with secondary navigation'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSecondaryNavigation = Template.bind({});
WithSecondaryNavigation.args = {
  navigation: [
    {name: 'Dashboard', href: '#', icon: 'HomeIcon', current: true, count: '5'},
    {name: 'Team', href: '#', icon: 'UsersIcon', current: false},
    {name: 'Projects', href: '#', icon: 'FolderIcon', current: false, count: '19'},
    {name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false, count: '20+'},
    {name: 'Documents', href: '#', icon: 'InboxIcon', current: false},
    {name: 'Reports', href: '#', icon: 'ChartBarIcon', current: false},
  ],
  secondaryNavigation: [
    {name: 'Website redesign', href: '#'},
    {name: 'GraphQL API', href: '#'},
    {name: 'Customer migration guides', href: '#'},
    {name: 'Profit sharing program', href: '#'},
  ]
};
