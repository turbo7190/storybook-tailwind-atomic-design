import Component from './WithExpandableSections.vue';

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
    componentSubtitle: 'Display a sidebar navigation with expandable section'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithExpandableSections = Template.bind({});
WithExpandableSections.args = {
  logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
  navigation: [
    {name: 'Dashboard', href: '#', current: true},
    {
      name: 'Team',
      current: false,
      children: [
        {name: 'Overview', href: '#'},
        {name: 'Members', href: '#'},
        {name: 'Calendar', href: '#'},
        {name: 'Settings', href: '#'},
      ],
    },
    {
      name: 'Projects',
      current: false,
      children: [
        {name: 'Overview', href: '#'},
        {name: 'Members', href: '#'},
        {name: 'Calendar', href: '#'},
        {name: 'Settings', href: '#'},
      ],
    },
    {
      name: 'Calendar',
      current: false,
      children: [
        {name: 'Overview', href: '#'},
        {name: 'Members', href: '#'},
        {name: 'Calendar', href: '#'},
        {name: 'Settings', href: '#'},
      ],
    },
    {
      name: 'Documents',
      current: false,
      children: [
        {name: 'Overview', href: '#'},
        {name: 'Members', href: '#'},
        {name: 'Calendar', href: '#'},
        {name: 'Settings', href: '#'},
      ],
    },
    {
      name: 'Reports',
      current: false,
      children: [
        {name: 'Overview', href: '#'},
        {name: 'Members', href: '#'},
        {name: 'Calendar', href: '#'},
        {name: 'Settings', href: '#'},
      ],
    },
  ]
};
