import Component from './WithAvatarAndAction.vue';

export default {
  title: 'Components/Organisms/Card Headings',
  component: Component,
  argTypes: {
    avatar: {
      type: 'object',
      description: 'avatar object'
    },
    buttons: {
      type: 'array',
      description: 'buttons list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a card header with avatar and action'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAvatarAndAction = Template.bind({});
WithAvatarAndAction.args = {
  avatar: {
    title: 'Tom Cook',
    subtitle: '@tom_cook',
    src: ''
  },
  buttons: [
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      onClick: () => console.log('clicked'),
    },
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      onClick: () => console.log('clicked'),
    }
  ]
};
