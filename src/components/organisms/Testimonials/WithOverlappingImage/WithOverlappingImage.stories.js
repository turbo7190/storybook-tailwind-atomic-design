import Component from './WithOverlappingImage.vue';

export default {
  title: 'Components/Organisms/Testimonials',
  component: Component,
  argTypes: {
    description: {
      type: 'string',
      description: 'tesitimonial description'
    },
    user: {
      type: 'object',
      description: 'user object'
    },
    image: {
      type: 'string',
      description: 'overlapping image'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple testimonial with overlapping image'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithOverlappingImage = Template.bind({});
WithOverlappingImage.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.',
  user: {
    name: 'Judith Black',
		role: 'CEO, Tuple'
  },
  image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
};
