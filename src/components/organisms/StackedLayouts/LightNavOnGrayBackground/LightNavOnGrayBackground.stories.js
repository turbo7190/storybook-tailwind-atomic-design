import Component from './LightNavOnGrayBackground.vue';

export default {
  title: 'Components/Organisms/Stacked Layouts',
  component: Component,
  argTypes: {
    user: {
      type: 'object',
      description: 'user object'
    },
    navigation: {
      type: 'array',
      description: 'navigation items'
    },
    userNavigation: {
      type: 'array',
      description: 'user navigation list',
    },
    desktopLogo: {
      type: 'string',
      description: 'desktop logo'
    },
    mobileLogo: {
      type: 'string',
      description: 'mobile logo'
    }
  },
  parameters: {
    componentSubtitle: 'Display a light nav on gray background'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const LightNavOnGrayBackground = Template.bind({});
LightNavOnGrayBackground.args = {
  desktopLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  mobileLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  user: {
    name: 'Tom Cook',
    email: 'tom@example.com',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  navigation: [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false},
    {name: 'Calendar', href: '#', current: false},
    {name: 'Reports', href: '#', current: false},
  ],
  userNavigation: [
    {label: 'Your Profile', href: '#'},
    {label: 'Settings', href: '#'},
    {label: 'Sign out', href: '#'},
  ]
};
