import Component from './SideBySideOnBrand.vue';

export default {
  title: 'Components/Organisms/Testimonials',
  component: Component,
  argTypes: {
    items: {
      type: 'array',
      description: 'items list'
    }
  },
  parameters: {
    componentSubtitle: 'Display side by side testimonials on brand'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SideBySideOnBrand = Template.bind({});
SideBySideOnBrand.args = {
  items: [
    {
      id: 0,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      user: {
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Judith Black',
        role: 'CEO, Tuple'
      }
    },
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      user: {
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        name: 'Joseph Rodriguez',
        role: 'CEO, Workcation'
      }
    }
  ]
};
