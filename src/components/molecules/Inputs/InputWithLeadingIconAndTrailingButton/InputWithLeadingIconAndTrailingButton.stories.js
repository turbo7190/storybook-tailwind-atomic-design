import Component from './InputWithLeadingIconAndTrailingButton.vue';

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
    leadIcon: {
      type: 'string',
      description: 'leading icon name'
    },
    btnIcon: {
      type: 'string',
      description: 'button icon name'
    },
    btnText: {
      type: 'string',
      description: 'button text'
    }
  },
  parameters: {
    componentSubtitle: 'Display input with leading icon and trailing button'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithLeadingIconAndTrailingButton = Template.bind({});
InputWithLeadingIconAndTrailingButton.args = {
  label: 'Search candidates',
  placeholder: 'John Doe',
  value: '',
  leadIcon: 'UsersIcon',
  btnIcon: 'BarsArrowUpIcon',
  btnText: 'Sort'
};
