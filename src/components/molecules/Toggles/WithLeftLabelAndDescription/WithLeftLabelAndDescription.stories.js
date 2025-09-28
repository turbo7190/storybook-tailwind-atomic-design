import Component from './WithLeftLabelAndDescription.vue';

export default {
  title: 'Components/Molecules/Toggles',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'toggle label'
    },
    description: {
      type: 'string',
      description: 'toggle description'
    },
    value: {
      type: 'boolean',
      description: 'toggle value'
    }
  },
  parameters: {
    componentSubtitle: 'Display toggle with label and description'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithLeftLabelAndDescription = Template.bind({});
WithLeftLabelAndDescription.args = {
  label: 'Avaliable to hire',
  description: 'Nulla amet tempus sit accumasan',
  value: false
};
