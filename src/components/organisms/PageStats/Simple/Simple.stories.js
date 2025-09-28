import Component from './Simple.vue';

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

export const Simple = Template.bind({});
Simple.args = {
  title: 'Trusted by developers from over 80 planets',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.',
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
  ]
};
