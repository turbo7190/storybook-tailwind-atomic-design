import Component from './WithLargeAvatar.vue';

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
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple testimonial with large avatar'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithLargeAvatar = Template.bind({});
WithLargeAvatar.args = {
  description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."',
  user: {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Judith Black',
    role: 'CEO, Tuple'
  }
};
