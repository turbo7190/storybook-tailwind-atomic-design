import Component from './Table.vue';
// 

export default {
  title: 'Components/Organisms/Tables',
  component: Component,
  argTypes: {
    records: {
      type: 'array',
      description: 'table list'
    },
    properties: {
      type: 'array',
      description: 'table header list'
    },
    onRowClick: {
      action: 'clicked',
      description: 'row click action'
    },
    onRowEdit: {
      action: 'clicked',
      description: 'row edit action'
    },
    onRowDelete: {
      action: 'clicked',
      description: 'row delete action'
    },
    onRightClick: {
      action: 'clicked',
      description: 'righ click action'
    },
    onRemove: {
      action: 'clicked',
      description: 'bulk remove action'
    },
    onSelected: {
      action: 'clicked',
      description: 'checkbox action'
    },
    selected: {
      type: 'array',
      description: 'selected items list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple table with checkboxes, bulk actions, row actions, and icons'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Table = Template.bind({});
Table.args = {
  properties: [
    { title: 'firstName', label: 'First Name' },
    { title: 'lastName', label: 'Last Name' },
    { title: 'email', label: 'Email' }
  ],
  records: [
    { id: '1', firstName: 'User', lastName: '1', email: 'user1@admari.com' },
    { id: '2', firstName: 'User', lastName: '1', email: 'user1@admari.com' },
    { id: '3', firstName: 'User', lastName: '1', email: 'user1@admari.com' },
  ],
  selected: [],
  onRowClick: () => console.log('clicked'),
  onRowEdit: () => console.log('clicked'),
  onRowDelete: () => console.log('clicked'),
  onRemove: () => console.log('clicked'),
  onSelected: () => console.log('clicked'),
  onRightClick: () => console.log('clicked'),
};
