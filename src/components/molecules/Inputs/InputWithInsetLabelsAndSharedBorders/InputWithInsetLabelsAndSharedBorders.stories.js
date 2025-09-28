import Component from './InputWithInsetLabelsAndSharedBorders.vue';

export default {
  title: 'Components/Molecules/Inputs',
  component: Component,
  argTypes: {
    forms: {
      type: 'array',
      description: 'Array of input forms'
    }
  },
  parameters: {
    componentSubtitle: 'Display inputs with inset labels and shared border'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithInsetLabelsAndSharedBorders = Template.bind({});
InputWithInsetLabelsAndSharedBorders.args = {
  forms: [
    {
      label: 'Name',
      value: '',
      placeholder: 'Jane Doe',
    },
    {
      label: 'Job Title',
      value: '',
      placeholder: 'Head of Tomfoolery',
    }
  ]
};
