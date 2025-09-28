import Component from './SimpleCentered.vue';

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
    category: {
      type: 'string',
      description: 'section category'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple centered header section'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleCentered = Template.bind({});
SimpleCentered.args = {
  category: 'pricing',
  title: 'Take control of your team.',
  description: 'Start building for free, then add a site plan to go live. Account plans unlock additional features.'
};
