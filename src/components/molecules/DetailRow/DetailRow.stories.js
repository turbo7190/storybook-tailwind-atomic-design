import Component from './DetailRow.vue';

export default {
  title: 'Components/Molecules',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label'
    },
    value: {
      type: 'string',
      description: 'value'
    }
  },
  parameters: {
    componentSubtitle: 'Display a detail row with label and value'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const DetailRow = Template.bind({});
DetailRow.args = {
  label: 'Name',
  value: 'John'
};
