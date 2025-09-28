import Component from './ListWithRadioOnRight.vue';

export default {
  title: 'Components/Molecules/Radio Groups',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'title to be shown on top of group'
    },
    subtitle: {
      type: 'string',
      description: 'subtitle to be shown below title'
    },
    items: {
      type: 'array',
      description: 'list of items'
    }
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ListWithRadioOnRight = Template.bind({});
ListWithRadioOnRight.args = {
  title: 'Transfer funds',
  subtitle: 'Transfer your balance to your bank accounts',
  items:  [
    { id: "checking", name: "Checking", description: "CIBC ••••6610" },
    { id: "savings", name: "Savings", description: "Bank of America ••••0149" },
    { id: "mastercard", name: "Mastercard", description: "Capital One ••••7877" },
  ],
  selectedItem: { id: "checking", name: "Checking", description: "CIBC ••••6610" }
};
