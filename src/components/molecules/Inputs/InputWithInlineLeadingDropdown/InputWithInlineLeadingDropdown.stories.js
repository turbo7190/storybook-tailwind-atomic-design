import Component from './InputWithInlineLeadingDropdown.vue';

export default {
  title: 'Components/Molecules/Inputs',
  component: Component,
  argTypes: {
    value: {
      type: 'string',
      description: 'value of input'
    },
    label: {
      type: 'string',
      description: 'label of input'
    },
    placeholder: {
      type: 'string',
      description: 'placeholder of input'
    },
    customClass: {
      type: 'string',
      description: 'extra class of input form'
    },
    options: {
      type: 'array',
      description: 'options of leading dropdown'
    },
  },
  parameters: {
    componentSubtitle: 'Display input with inline leading dropdown'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithInlineLeadingDropdown = Template.bind({});
InputWithInlineLeadingDropdown.args = {
  label: 'Phone Number',
  optionValue: 'US',
  value: '',
  placeholder: '+1 (555) 987-6543',
  options: ['US', 'CA', 'EU']
};
