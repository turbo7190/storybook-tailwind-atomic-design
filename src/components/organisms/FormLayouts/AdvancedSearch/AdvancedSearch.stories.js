import Component from './AdvancedSearch.vue';

export default {
  title: 'Components/Organisms/Form Layouts',
  component: Component,
  argTypes: {
    fields: {
      type: 'array',
      description: 'fields'
    },
    schema: {
      type: 'object',
      description: 'fields structure'
    },
    isShow: {
      type: 'boolean',
      description: 'value whether or not show form'
    },
    onClose: {
      action: 'clicked',
      description: 'close action'
    },
    onSearch: {
      action: 'clicked',
      description: 'search action'
    }
  },
  parameters: {
    componentSubtitle: 'Display advanced search form that search items by each fields and filter options '
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const AdvancedSearch = Template.bind({});
AdvancedSearch.args = {
  isShow: true,
};
