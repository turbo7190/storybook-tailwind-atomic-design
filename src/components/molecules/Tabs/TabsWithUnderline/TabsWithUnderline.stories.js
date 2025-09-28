import Component from './TabsWithUnderline.vue';

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
    componentSubtitle: 'Display tabs with underline'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const TabsWithUnderline = Template.bind({});
TabsWithUnderline.args = {
  tabs: [
    { name: 'My Account', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
  ]
};
