import Component from './SimpleListWithRadioOnRight.vue';

export default {
  title: 'Components/Molecules/Radio Groups',
  component: Component,
  argTypes: {
    label: {
      type: 'string',
      description: 'label to be shown on top of group'
    },
    items: {
      type: 'array',
      description: 'list of items'
    }
  },
  parameters: {
    componentSubtitle:
      'display radio group with divider list ',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleListWithRadioOnRight = Template.bind({});
SimpleListWithRadioOnRight.args = {
  label: 'Side',
  items: [
    { id: null, name: "None" },
    { id: 1, name: "Baked beans" },
    { id: 2, name: "Coleslaw" },
    { id: 3, name: "French fries" },
    { id: 4, name: "Garden salad" },
    { id: 5, name: "Mashed potatoes" },
  ],
  value:  { id: 1, name: "Baked beans" },
};
