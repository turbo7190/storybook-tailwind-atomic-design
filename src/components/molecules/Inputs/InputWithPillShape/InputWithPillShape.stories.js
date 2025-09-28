import Component from './InputWithPillShape.vue';

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
  },
  parameters: {
    componentSubtitle: 'Display input with pill shape'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithPillShape = Template.bind({});
InputWithPillShape.args = {
  label: 'Name',
  placeholder: 'Jane Doe',
  value: ''
};
