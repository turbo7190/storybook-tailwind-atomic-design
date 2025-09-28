import Component from './BarWithUnderline.vue';

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

export const BarWithUnderline = Template.bind({});
BarWithUnderline.args = {
  tabs: [
    { name: 'My Account', href: '#', current: true },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
  ]
};
