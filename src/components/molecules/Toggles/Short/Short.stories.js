import Component from './Short.vue';

export default {
  title: 'Components/Molecules/Toggles',
  component: Component,
  argTypes: {
    value: {
      value: 'boolean',
      description: 'toggle value'
    },
    label: {
      value: 'string',
      description: 'toggle label'
    },
    enableBg: {
      value: 'string',
      description: 'enabled background color'
    },
    disableBg: {
      value: 'string',
      description: 'disabled background color'
    },
    focusBorderColor: {
      value: 'string',
      description: 'focus border color'
    }
  },
  parameters: {
    componentSubtitle: 'Display a short toggle'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Short = Template.bind({});
Short.args = {
  value: false,
  label: 'Use Setting',
  enableBg: 'primary-600',
  disableBg: 'gray-200',
  focusBorderColor: 'primary-500'
};
