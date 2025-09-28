import Component from './ContactCardsWithSmallPortraits.vue';

export default {
  title: 'Components/Organisms/Grid Lists',
  component: Component,
  argTypes: {
    leftActionButton: {
      type: 'object',
      description: 'action button with icon and label'
    },
    rightActionButton: {
      type: 'object',
      description: 'action button with icon and label'
    },
    items: {
      type: 'array',
      description: 'array of people for contact cards'
    }
  },
  parameters: {
    componentSubtitle:
      'Display contact card list with avatar, name, role,action for email and call',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ContactCardsWithSmallPortraits = Template.bind({});
ContactCardsWithSmallPortraits.args = {
  leftActionButton: {
    label: 'Email',
    icon: 'EnvelopeIcon'
  },
  rightActionButton: {
    label: 'Call',
    icon: 'PhoneIcon'
  },
  items: [
    {
      id:1,
      name: 'Jane Cooper',
      title: 'Paradigm Representative',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id:2,
      name: 'Jane Cooper',
      title: 'Paradigm Representative',
      role: 'Admin',
      email: 'janecooper@example.com',
      telephone: '+1-202-555-0170',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]
};
