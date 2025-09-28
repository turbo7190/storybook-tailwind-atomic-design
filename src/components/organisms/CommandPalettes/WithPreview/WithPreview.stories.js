import Component from './WithPreview.vue';

export default {
  title: 'Components/Organisms/Command Palettes',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'items list'
    },
  },
  parameters: {
    componentSubtitle: 'Display a command palettes with preview'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithPreview = Template.bind({});
WithPreview.args = {
  items: [
    {
      id: 1,
      name: 'Leslie Alexander',
      phone: '1-493-747-9031',
      email: 'lesliealexander@example.com',
      role: 'Co-Founder / CEO',
      url: 'https://example.com',
      profileUrl: '#',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
};
