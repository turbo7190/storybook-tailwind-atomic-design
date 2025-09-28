import Component from './AutoComplete.vue';

export default {
  title: 'Components/Molecules/Forms',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label'
    },
    listData: {
      type: 'string',
      description: 'list data'
    },
    handleSelectFn: {
      action: 'clicked',
      description: 'selecting action'
    },
    onChangeRelation: {
      action: 'clicked',
      description: 'changing relation action'
    }
  },
  parameters: {
    componentSubtitle: 'Display an auto complete'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const AutoComplete = Template.bind({});
AutoComplete.args = {
  listData: [
    { id: 1, name: 'Leslie Alexander' },
    // More users...
  ],
  label: 'Select'
};
