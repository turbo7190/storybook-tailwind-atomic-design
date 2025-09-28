import Component from './StackedWithAvatars.vue';

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

const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
export const StackedWithAvatars = Template.bind({});
StackedWithAvatars.args = {
  people,
  activityItems: [
    { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 2, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 3, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 4, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 5, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    { id: 6, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    // More items...
  ]
};
