import Component from './SimpleWithIconsAndBrandColor.vue';

export default {
  title: 'Components/Organisms/Sidebar Navigation',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items list'
    },
    logo: {
      type: 'string',
      description: 'navigation menu logo'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple sidebar navigation with icons, and brand color'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithIconsAndBrandColor = Template.bind({});
SimpleWithIconsAndBrandColor.args = {
  logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
  navigation: [
    {name: 'Dashboard', icon: 'HomeIcon', href: '#', current: true},
    {name: 'Team', icon: 'UsersIcon', href: '#', current: false},
    {name: 'Projects', icon: 'FolderIcon', href: '#', current: false},
    {name: 'Calendar', icon: 'CalendarIcon', href: '#', current: false},
    {name: 'Documents', icon: 'InboxIcon', href: '#', current: false},
    {name: 'Reports', icon: 'ChartBarIcon', href: '#', current: false},
  ]
};
