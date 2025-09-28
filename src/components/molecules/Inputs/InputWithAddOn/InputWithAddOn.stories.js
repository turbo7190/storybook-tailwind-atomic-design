import Component from './InputWithAddOn.vue';

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
      description: 'addOn text of input'
    },
  },
  parameters: {
    componentSubtitle:
      'Display Input forms with addOn',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithAddOn = Template.bind({});
InputWithAddOn.args = {
  label: 'Company Website',
  addOn: 'https://',
  placeholder: 'www.example.com'
};
