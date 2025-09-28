import Component from './HorizontalLinkCards.vue';

export default {
  title: 'Components/Organisms/Grid Lists',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list of items to show info in card'
    }
  },
  parameters: {
    componentSubtitle:
      'Display horizontal link card for person with avatar, role and name',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const HorizontalLinkCards = Template.bind({});
HorizontalLinkCards.args = {
  items: [
    {
      id:1,
      name: 'Jane Cooper',
      role: 'Paradigm Representative / Admin',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    { id:2,
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
};
