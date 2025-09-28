import Component from './SplitWithImage.vue';
import * as heroIcons from "@heroicons/vue/24/outline";

export default {
  title: 'Components/Organisms/Page Stats',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'page title'
    },
    description: {
      type: 'string',
      description: 'page description'
    },
    stats: {
      type: 'array',
      description: 'stats list'
    },
    banner: {
      type: 'string',
      description: 'banner of page'
    },
    icon: {
      control: {type: 'select'},
      options: Object.keys(heroIcons),
      description: 'name of hero icons'
    }
  },
  parameters: {
    componentSubtitle: 'Display a page with simple stats'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SplitWithImage = Template.bind({});
SplitWithImage.args = {
  title: 'Deliver what your customers want every time',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil earerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.',
  stats: [
    {
      title: '100%',
      description: 'Pepperoni'
    },
    {
      title: '24/7',
      description: 'Delivery'
    },
    {
      title: '100k',
      description: 'Calories'
    }
  ],
  banner: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  icon: 'UsersIcon'
};
