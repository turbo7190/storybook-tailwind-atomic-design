import Component from './InputWithKeyboardShortcut.vue';

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
    shortcut: {
      type: 'string',
      description: 'keyboard shortcut text'
    }
  },
  parameters: {
    componentSubtitle: 'Display input with keyboard shortcut'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const InputWithKeyboardShortcut = Template.bind({});
InputWithKeyboardShortcut.args = {
  label: 'Quick Search',
  placeholder: '',
  value: '',
  shortcut: '⌘K'
};
