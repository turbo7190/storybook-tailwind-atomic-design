import Component from './WithSignInForm.vue';

export default {
  title: 'Components/Organisms/Hero Sections',
  component: Component,
  argTypes: {
    navigation: {
      type: 'array',
      description: 'navigation items'
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
    cloudLabel: {
      type: 'string',
      description: 'cloud label'
    },
    cloudItems: {
      type: 'array',
      description: 'cloud items'
    }
  },
  parameters: {
    componentSubtitle: 'Display a dark hero sections with signin form'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSignInForm = Template.bind({});
WithSignInForm.args = {
  navigation: [
    {name: 'Product', href: '#'},
    {name: 'Features', href: '#'},
    {name: 'Marketplace', href: '#'},
    {name: 'Company', href: '#'},
  ],
  title: 'A better way to',
  subtitle: 'ship web apps',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  cloudLabel: 'used by',
  cloudItems: [
    {
      title: 'Tuple',
      alt: 'Tuple',
      source: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      class: 'h-12',
    },
    {
      title: 'Mirage',
      alt: 'Mirage',
      source: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      class: 'h-12',
    },
    {
      title: 'StaticKit',
      alt: 'StaticKit',
      source: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      class: 'h-12',
    },
  ]
};
