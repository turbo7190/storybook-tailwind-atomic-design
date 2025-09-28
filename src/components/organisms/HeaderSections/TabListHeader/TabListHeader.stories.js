import Component from './TabListHeader.vue';

export default {
  title: 'Components/Organisms/Header Sections',
  component: Component,
  argTypes: {
    item: {
      type: 'object',
      description: 'tab item'
    },
    onSearch: {
      action: 'clicked',
      description: 'search event'
    }
  },
  parameters: {
    componentSubtitle: 'Display a tab list header'
  }
};

const ComponentTemp = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<Component v-bind="args" />',
});

export const TabListHeader = ComponentTemp.bind({});
TabListHeader.args = {
  item: {},
  onSearch: () => console.log('clicked'),
};
