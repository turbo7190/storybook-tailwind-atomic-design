import Component from './SimpleNative.vue';

export default {
  title: 'Components/Molecules/Selects',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list to populate select'
    },
    selectedItem: {
      type:'string',
      description: 'selected value'
    },
    label: {
      type: 'string',
      description: 'label of select'
    },
    isSimpleList: {
      type: 'boolean',
      description: 'check if list contain objects or not'
    }
  },
  parameters: {
    componentSubtitle:
      'Displays a Select with list of items',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleNative = Template.bind({});
SimpleNative.args = {
  selectedItem: 'Canada',
  label:'Country',
  items:[{text:'Canada',value:'Canada'},{text:'USA',value:'USA'}]
};
export const SimpleNativeWithStrings = Template.bind({});
SimpleNativeWithStrings.args = {
  isSimpleList: true,
  selectedItem: 'Canada',
  label:'Country',
  items:['Canada', 'USA','UK']
};
