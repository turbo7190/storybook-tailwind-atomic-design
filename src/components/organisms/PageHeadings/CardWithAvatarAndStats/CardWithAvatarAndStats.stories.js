import Component from './CardWithAvatarAndStats.vue';

export default {
  title: 'Components/Organisms/Page Headings',
  component: Component,
  argTypes: {
    user: {
      type: 'object',
      description: 'user object'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    stats: {
      type: 'array',
      description: 'stats list'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display page headings with avatar and stats'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CardWithAvatarAndStats = Template.bind({});
CardWithAvatarAndStats.args = {
  user: {
    name: 'Rebecca Nicholas',
    role: 'Product Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  stats: [
    {label: 'Vacation days left', value: 12},
    {label: 'Sick days left', value: 4},
    {label: 'Personal days left', value: 2},
  ],
  btnText: 'View Profile',
  onClick: () => console.log('clicked'),
};
