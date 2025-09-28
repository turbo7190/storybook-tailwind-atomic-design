import Component from './SimpleNativeWithObject.vue';

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
    key: {
      type: 'string',
      description: 'to set as key'
    },
    displayProp: {
      type: 'string',
      description: 'value to show in dropdown'
    },
    selectedItemChanged: {
      action: 'selection changed'
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

export const SimpleNativeWithObject = Template.bind({});
SimpleNativeWithObject.args = {
  selectedItem: {id:'Canada',name:'Canada'} ,
  label:'Country',
  key: 'id',
  displayProp: 'name',
  items:[
    {id:'Canada',name:'Canada'},{id:'USA',name:'USA'}]
};
