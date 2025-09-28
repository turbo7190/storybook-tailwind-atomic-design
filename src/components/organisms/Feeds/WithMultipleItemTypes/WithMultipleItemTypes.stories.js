import Component from './WithMultipleItemTypes.vue';

export default {
  title: 'Components/Organisms/Feeds',
  component: Component,
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithMultipleItemTypes = Template.bind({});
WithMultipleItemTypes.args = {
  activity: [
    {
      id: 1,
      type: 'comment',
      person: {name: 'Eduardo Benz', href: '#'},
      imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
      date: '6d ago',
    },
    {
      id: 2,
      type: 'assignment',
      person: {name: 'Hilary Mahy', href: '#'},
      assigned: {name: 'Kristin Watson', href: '#'},
      date: '2d ago',
    },
    {
      id: 3,
      type: 'tags',
      person: {name: 'Hilary Mahy', href: '#'},
      tags: [
        {name: 'Bug', href: '#', color: 'bg-rose-500'},
        {name: 'Accessibility', href: '#', color: 'bg-primary-500'},
      ],
      date: '6h ago',
    },
    {
      id: 4,
      type: 'comment',
      person: {name: 'Jason Meyers', href: '#'},
      imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
      date: '2h ago',
    },
  ]
};
