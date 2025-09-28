import Component from './WithGroupedRows.vue';

export default {
  title: 'Components/Organisms/Tables',
  component: Component,
  argTypes: {
    list: {
      type: 'array',
      description: 'table list'
    },
    title: {
      type: 'string',
      description: 'table title'
    },
    description: {
      type: 'string',
      description: 'table description'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple table with grouped rows'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithGroupedRows = Template.bind({});
WithGroupedRows.args = {
  list: [
    {
      name: 'Edinburgh',
      people: [
        {name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member'},
        {name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin'},
      ],
    },
    {
      name: 'Edinburgh',
      people: [
        {name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member'},
        {name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin'},
      ],
    },
    // More people...
  ],
  title: 'Users',
  description: 'A list of all the users in your account including their name, title, email and role.',
  btnText: 'Add User',
  onClick: () => console.log('clicked'),
};
