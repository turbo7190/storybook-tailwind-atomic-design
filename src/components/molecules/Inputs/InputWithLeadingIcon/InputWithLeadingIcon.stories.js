import Component from './InputWithLeadingIcon.vue';

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
    icon: {
      type: 'string',
      description: 'icon name'
    }
  },
  parameters: {
    componentSubtitle: 'Display input with leading icon'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithLeadingIcon = Template.bind({});
InputWithLeadingIcon.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  value: '',
  icon: 'EnvelopeIcon'
};
