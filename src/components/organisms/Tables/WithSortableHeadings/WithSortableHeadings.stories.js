import Component from './WithSortableHeadings.vue';

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
    componentSubtitle: 'Display a simple table with sortable headings'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSortableHeadings = Template.bind({});
WithSortableHeadings.args = {
  list: [
    {name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member'},
    // More people...
  ],
  title: 'Users',
  description: 'A list of all the users in your account including their name, title, email and role.',
  btnText: 'Add User',
  onClick: () => console.log('clicked'),
};
