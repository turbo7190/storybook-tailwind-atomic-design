import Component from './InputWithInlineAddOn.vue';

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
    addOn: {
      type: 'string',
      description: 'addOn text of input form'
    },
  },
  parameters: {
    componentSubtitle: 'Display input with inline addon'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithInlineAddOn = Template.bind({});
InputWithInlineAddOn.args = {
  label: 'Company Website',
  addOn: 'http://',
  placeholder: 'www.example.com',
  customClass: '',
  value: ''
};
