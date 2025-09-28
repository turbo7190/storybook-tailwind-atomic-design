import Component from './FormMultiSelect.vue';

export default {
  title: 'Components/Molecules/Forms',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label'
    },
    options: {
      type: 'array',
      description: 'options list'
    },
    items: {
      type: 'array',
      description: 'selected items'
    },
    onUpdate: {
      action: 'clicked',
      description: 'update action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a special multiselect form in administry'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const FormMultiSelect = Template.bind({});
FormMultiSelect.args = {
  label: 'Select Users'
};
