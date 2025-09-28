import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Vertical Navigation',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple vertical navigation'
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
  navigation: [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false},
    {name: 'Calendar', href: '#', current: false},
    {name: 'Documents', href: '#', current: false},
    {name: 'Reports', href: '#', current: false},
  ]
};
