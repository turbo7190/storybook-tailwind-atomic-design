import Component from './WithAngledImageOnRight.vue';

export default {
  title: 'Components/Organisms/Hero Sections',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
    },
    image: {
      type: 'string',
      description: 'background image'
    },
    title: {
      type: 'string',
      description: 'section title'
    },
    subtitle: {
      type: 'string',
      description: 'section subtitle'
    },
    description: {
      type: 'string',
      description: 'section description'
    },
    buttons: {
      type: 'array',
      description: 'section buttons list'
    },
  },
  parameters: {
    componentSubtitle: 'Display a hero sections with angled image on right'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAngledImageOnRight = Template.bind({});
WithAngledImageOnRight.args = {
  navigation: [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
  ],
  title: 'Data to enrich your',
  subtitle: 'online business',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  buttons: [
    {
      label: 'Get Started',
      type: 'primary'
    },
    {
      label: 'Live Demo',
      type: 'secondary'
    }
  ],
  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
};
