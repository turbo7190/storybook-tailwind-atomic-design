import Component from './SimpleWithSelectMenuDark.vue';

export default {
  title: 'Components/Organisms/Header Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    selectOptions: {
      type: 'array',
      description: 'select form options'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple header section with select dark menu'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithSelectMenuDark = Template.bind({});
SimpleWithSelectMenuDark.args = {
  title: 'Pricing Plans',
  description: 'Start building for free, then add a site plan to go live. Account plans unlock additional features.',
  selectOptions: [
    {text: 'Argentina (ARS)', value: 'Argentina (ARS)'},
    {text: 'Australia (AUD)', value: 'Australia (AUD)'},
    {text: 'United States (USD)', value: 'United States (USD)'},
    {text: 'Canada (CAD)', value: 'Canada (CAD)'},
    {text: 'France (EUR)', value: 'France (EUR)'},
    {text: 'Japan (JPY)', value: 'Japan (JPY)'},
    {text: 'Nigeria (NGN)', value: 'Nigeria (NGN)'},
    {text: 'Switzerland (CHF)', value: 'Switzerland (CHF)'},
    {text: 'United Kingdom (GBP)', value: 'United Kingdom (GBP)'},
  ]
};
