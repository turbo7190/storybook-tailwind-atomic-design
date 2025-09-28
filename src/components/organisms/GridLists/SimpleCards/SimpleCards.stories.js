import Component from './SimpleCards.vue';

export default {
  title: 'Components/Organisms/Grid Lists',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'list to populate action cards'
    },
    menuItemClicked: { action: 'menuItemClicked' },
    title: {
      type: 'string',
      description: 'title to be displayed on top of cards'
    }
  },
  parameters: {
    componentSubtitle:
      'Display action card with name, initials on basis of name, action menu',
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleCards = Template.bind({});
SimpleCards.args = {
  title: 'Pinned Projects',
  items: [
    {
      id: 1,
      name: 'Graph API', 
      href: '#', 
      description: '16 Members', 
      bgColor: 'bg-pink-600', 
      actionItems: [
        {
          name: 'View',
          parentId: 1,
        },
        {
          name: 'Edit',
          parentId: 1,
        }
      ]
    },
    {
      id: 2,
      name: 'Component Design', 
      href: '#', 
      description: '12 Members', 
      bgColor: 'bg-purple-600',
      actionItems: [
        {

          name: 'View',
          parentId: 2,
        },
        {
          name: 'Edit',
          parentId: 2,
        }
      ]
    },
    {
      id: 3,
      name: 'Templates', 
      href: '#', 
      description: '16 Members', 
      bgColor: 'bg-yellow-500',
      actionItems: [
        {
          name: 'View',
          parentId: 3,
        },
        {
          name: 'Edit',
          parentId:3,
        }
      ]
    },
    {
      id: 4,
      name: 'React Components', 
      href: '#', 
      description: '8 Members', 
      bgColor: 'bg-green-500',
      actionItems: [
        {
          name: 'View',
          parentId: 4
        },
        {
          name: 'Edit',
          parentId: 4
        }
      ]
    },
  ]
};
