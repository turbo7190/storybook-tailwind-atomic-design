import Component from './TabsInPills.vue';

export default {
  title: 'Components/Molecules/Tabs',
  component: Component,
  argTypes: {
    tabs: {
      type: 'array',
      description: 'the list of tabs'
    }
  },
  parameters: {
    componentSubtitle: 'Display tabs in pills'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TabsInPills = Template.bind({});
TabsInPills.args = {
  tabs: [
    { name: 'My Account', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
  ]
};
