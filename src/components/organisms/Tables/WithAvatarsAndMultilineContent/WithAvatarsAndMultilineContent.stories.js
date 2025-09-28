import Component from './WithAvatarsAndMultilineContent.vue';

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
    componentSubtitle: 'Display a simple table with avatars and multiline content'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAvatarsAndMultilineContent = Template.bind({});
WithAvatarsAndMultilineContent.args = {
  list: [
    {
      user: {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      group: {
        title: 'Front-end Developer',
        department: 'Optimization',
      },
      status: 'Active',
      role: 'Member',
      
    },
    // More people...
  ],
  title: 'Users',
  description: 'A list of all the users in your account including their name, title, email and role.',
  btnText: 'Add User',
  onClick: () => console.log('clicked'),
};
