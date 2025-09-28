import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/List Item',
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
    componentSubtitle: 'Display a list item with label and value in a row'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  label: 'Name',
  value: 'John Dowen'
};
