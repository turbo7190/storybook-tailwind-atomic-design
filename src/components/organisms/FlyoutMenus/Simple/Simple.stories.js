import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Flyout Menus',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'menu label'
    },
    list: {
      type: 'array',
      description: 'menu list items'
    },
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  label: 'Solutions',
  list: [
    {name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#'},
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums of contact support.',
      href: '#',
    },
    {name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#'},
    {name: 'Events', description: 'Check out webinars with experts and learn about our annual conference.', href: '#'},
    {name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#'},
  ]
};
