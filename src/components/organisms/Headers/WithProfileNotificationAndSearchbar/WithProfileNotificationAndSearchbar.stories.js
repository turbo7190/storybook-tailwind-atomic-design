import Component from './WithProfileNotificationAndSearchbar.vue';

export default {
  title: 'Components/Organisms/Headers',
  component: Component,
  argTypes: {
    user: {
      type: 'object',
      description: 'user object',
    },
    userNavigation: {
      type: 'array',
      description: 'menu list'
    },
    searchInputChange : {
      action: 'search input changes'
    },
    notificationClicked : {
      action: 'notification clicked'
    },
    menuClicked: {
      action: 'menu clicked'
    }
  },
  parameters: {
    componentSubtitle: 'Display a light navbar with search input'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const LightWithSearch = Template.bind({});
LightWithSearch.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Tom Cook',
    email: 'tom@example.com'
  },
  userNavigation: [
    {
      name: 'Your Profile',
      action: () => console.log('your profile')
    },
    {
      name: 'Settings',
      action: () => console.log('Settings')
    },
    {
      name: 'Sign out',
      action: () => console.log('Sign out')
    }
  ]
};
