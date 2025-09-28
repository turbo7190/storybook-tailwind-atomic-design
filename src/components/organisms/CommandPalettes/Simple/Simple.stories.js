import Component from './Simple.vue';

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
    componentSubtitle: 'Display a simple command palettes'
  }
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
  items: [
    {id: 1, name: 'Leslie Alexander', url: '#'},
    // More people...
  ],
};
