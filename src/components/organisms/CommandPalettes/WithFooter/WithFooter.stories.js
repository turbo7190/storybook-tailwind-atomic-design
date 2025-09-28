import Component from './WithFooter.vue';

export default {
  title: 'Components/Organisms/Command Palettes',
  component: Component,
  argTypes: {
    projects: {
      type: 'array',
      description: 'projects list'
    },
    users: {
      type: 'array',
      description: 'users list'
    },
  },
  parameters: {
    componentSubtitle: 'Display a simple command palettes with footer'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithFooter = Template.bind({});
WithFooter.args = {
  projects: [
    {id: 1, name: 'Workflow Inc. / Website Redesign', url: '#'},
    // More projects...
  ],
  users: [
    {
      id: 1,
      name: 'Leslie Alexander',
      url: '#',
      imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More users...
  ]
};
