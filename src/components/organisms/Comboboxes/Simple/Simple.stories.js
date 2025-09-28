import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Comboboxes',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label to be shown on combobox'
    },
    items: {
      type: 'array',
      description: 'list of items'
    },
    filterKey: {
      type: 'string',
      description: 'custom key for filtering item'
    }
  },
  parameters: {
    componentSubtitle:
      'Combobox with text input to filter on basis of name property on default and filterKey for custom filter',
  },
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
  label: 'Assigned to',
  items: [{ id: 1, name: "Leslie Alexander" }],
  selectedItem: { id: 1, name: "Leslie Alexander" },
  filterKey: 'name'
};
