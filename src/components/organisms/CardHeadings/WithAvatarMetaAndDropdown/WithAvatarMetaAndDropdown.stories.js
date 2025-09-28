import Component from './WithAvatarMetaAndDropdown.vue';

export default {
  title: 'Components/Organisms/Card Headings',
  component: Component,
  argTypes: {
    avatar: {
      type: 'object',
      description: 'avatar object'
    },
    items: {
      type: 'array',
      description: 'options list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a card header with avatar and dropdown'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAvatarMetaAndDropdown = Template.bind({});
WithAvatarMetaAndDropdown.args = {
  avatar: {
    title: 'Chelsea Hagon',
    subtitle: 'December 9 at 11:43 AM',
    src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  items: [
    {
      name: 'Account Settings'
    },
    {
      name: 'Support'
    },
    {
      name: 'License'
    }
  ]
};
