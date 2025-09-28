import Component from './Component.vue';

export default {
  title: 'Components/Molecules/Inputs',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'input form type'
    },
    hint: {
      type: 'string',
      description: 'hint of input form value'
    },
    id: {
      type: 'string',
      description: 'input form id'
    },
    name: {
      type: 'string',
      description: 'input form name'
    },
    placeholder: {
      type: 'string',
      description: 'input form placeholder'
    },
    helpText: {
      type: 'string',
      description: 'input form help text'
    },
    value: {
      type: 'string',
      description: 'input form value'
    },
    type: {
      type: 'string',
      description: 'input form type'
    },
    customClass: {
      type: 'string',
      description: 'extra class of input form'
    },
    inputMask: {
      type: 'string',
      description: 'mask of input form'
    },
    isError: {
      type: 'boolean',
      description: 'validation of input form value'
    }
  },
  parameters: {
    componentSubtitle: 'Display inputs with help text, validation, mask'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  id: 'inputEl',
  name: 'inputEl',
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'text'
};

export const InputWithHelpText = Template.bind({});
InputWithHelpText.args = {
  ...InputWithLabel.args,
  hint: 'Optional',
  helpText: 'We\'ll only use this for spam'
};

export const InputWithValidationError = Template.bind({});
InputWithValidationError.args = {
  ...InputWithLabel.args,
  helpText: 'Your password must be less than 4 characters.',
  isError: true,
  value: 'adamwathan'
};

export const InputWithMask = Template.bind({});
InputWithMask.args = {
  ...InputWithLabel.args,
  label: 'Phone Number',
  placeholder: 'Enter phone number',
  inputMask: "'(###) ###-####'"
};
