import Component from './ListWithDescriptionsInPanel.vue';

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
      'display radio group with panel list',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ListWithDescriptionsInPanel = Template.bind({});
ListWithDescriptionsInPanel.args = {
  label:" Privacy item",
  items: [
    {
      name: "Public access",
      description: "This project would be available to anyone who has the link",
    },
    {
      name: "Private to Project Members",
      description: "Only members of this project would be able to access",
    },
    {
      name: "Private to you",
      description: "You are the only one able to access this project",
    },
  ],
  selectedItem: {
    name: "Private to you",
    description: "You are the only one able to access this project",
  }
};
