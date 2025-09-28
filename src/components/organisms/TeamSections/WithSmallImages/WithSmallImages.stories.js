import Component from './WithSmallImages.vue';

export default {
  title: 'Components/Organisms/Team Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    people: {
      type: 'array',
      description: 'teammates list'
    }
  },
  parameters: {
    componentSubtitle: 'Display a team section with small images'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSmallImages = Template.bind({});
WithSmallImages.args = {
  people: [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ],
  title: 'Meet our leadership',
  description: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.'
};
