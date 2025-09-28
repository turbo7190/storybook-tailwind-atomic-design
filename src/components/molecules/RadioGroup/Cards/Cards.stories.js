import Component from './Cards.vue';

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
      'display radio group with cards, checked Icon is shown when an item is selected',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" v-model:selected-item="args.selectedItem"/>',
});

export const Cards = Template.bind({});
Cards.args = {
  items:[
    {
      id: 1,
      title: "Newsletter",
      description: "Last message sent an hour ago",
      users: "621 users",
    },
    {
      id: 2,
      title: "Existing Customers",
      description: "Last message sent 2 weeks ago",
      users: "1200 users",
    },
  ],
  selectedItem: {
    id: 2,
    title: "Existing Customers",
    description: "Last message sent 2 weeks ago",
    users: "1200 users",
  },
  label: 'Select a mailing list'
};
