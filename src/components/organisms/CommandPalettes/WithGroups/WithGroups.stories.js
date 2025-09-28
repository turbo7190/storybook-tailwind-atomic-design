import Component from './WithGroups.vue';

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
    componentSubtitle: 'Display a command palettes with groups'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithGroups = Template.bind({});
WithGroups.args = {
  items: [
    {id: 1, name: 'Workflow Inc.', category: 'Clients', url: '#'},
    // More items...
  ]
};
