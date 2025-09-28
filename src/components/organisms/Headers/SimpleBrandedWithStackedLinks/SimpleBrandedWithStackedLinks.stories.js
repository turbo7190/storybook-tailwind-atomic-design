import Component from './SimpleBrandedWithStackedLinks.vue';

export default {
  title: 'Components/Organisms/Headers',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple branded header with stacked links'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleBrandedWithStackedLinks = Template.bind({});
SimpleBrandedWithStackedLinks.args = {
  navigation: [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
};
