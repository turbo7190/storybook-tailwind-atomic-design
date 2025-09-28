import Component from './WithAvatarAndActions.vue';

export default {
  title: 'Components/Organisms/Page Headings',
  component: Component,
  argTypes: {
    user: {
      type: 'object',
      description: 'user object'
    },
    buttons: {
      type: 'array',
      description: 'header action buttons list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a page header with avatar and actions'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAvatarAndActions = Template.bind({});
WithAvatarAndActions.args = {
  user: {
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    name: 'Ricardo Cooper',
    description: 'Applied for Front End Developer on August 25, 2020'
  },
  buttons: [
    {
      label: 'Disqualify',
      type: 'secondary',
      onClick: () => console.log('clicked'),
    },
    {
      label: 'Advance to offer',
      type: 'primary',
      onClick: () => console.log('clicked'),
    }
  ]
};
