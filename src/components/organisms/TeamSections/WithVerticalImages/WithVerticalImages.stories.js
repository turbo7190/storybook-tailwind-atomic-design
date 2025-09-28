import Component from './WithVerticalImages.vue';

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
    componentSubtitle: 'Display a team section with vertical images'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithVerticalImages = Template.bind({});
WithVerticalImages.args = {
  people: [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ],
  title: 'About Us',
  description: 'Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.'
};
