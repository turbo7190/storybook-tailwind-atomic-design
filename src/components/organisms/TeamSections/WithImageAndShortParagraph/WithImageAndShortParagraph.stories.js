import Component from './WithImageAndShortParagraph.vue';

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
    componentSubtitle: 'Display a team section with images and short paragraph'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithImageAndShortParagraph = Template.bind({});
WithImageAndShortParagraph.args = {
  people: [
    {
      name: 'Emma Dorsey',
      role: 'Senior Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ],
  title: 'Our Team',
  description: 'Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.'
};
