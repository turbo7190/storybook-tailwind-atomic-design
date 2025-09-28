import Component from './GridWithLargeRoundImages.vue';

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
    componentSubtitle: 'Display a team section with large round images'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const GridWithLargeRoundImages = Template.bind({});
GridWithLargeRoundImages.args = {
  people: [
    {
      name: 'Whitney Francis',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ],
  title: 'Meet our team',
  description: 'Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.'
};
