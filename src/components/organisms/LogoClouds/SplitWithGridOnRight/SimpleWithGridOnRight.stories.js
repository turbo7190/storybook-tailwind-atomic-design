import Component from './SimpleWithGridOnRight.vue';

export default {
  title: 'Components/Organisms/Logo Clouds',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'cloud title'
    },
    description: {
      type: 'string',
      description: 'cloud description'
    },
    buttons: {
      type: 'array',
      description: 'action buttons'
    },
    items: {
      type: 'array',
      description: 'logos'
    }
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithGridOnRight = Template.bind({});
SimpleWithGridOnRight.args = {
  title: "Used by the world's most average companies",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
  buttons: [
    {
      label: 'Create Account',
      containerClass: 'rounded-md shadow',
      class: 'py-3 sm:text-base font-bold',
      type: 'primary',
      size: 'xl',
      onClick: () => console.log('clicked'),
    },
    {
      label: 'Contact Us',
      containerClass: 'mt-3 sm:mt-0 sm:ml-3',
      class: 'border border-transparent font-bold font-medium bg-primary-100 text-primary-700 hover:bg-primary-200',
      type: 'secondary',
      size: 'xl',
      onClick: () => console.log('clicked'),
    }
  ],
  items: [
    {
      title: 'Workcation',
      alt: 'Workcation',
      source: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      class: 'max-h-12',
    },
    {
      title: 'Mirage',
      alt: 'Mirage',
      source: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      class: 'max-h-12',
    },
    {
      title: 'Tuple',
      alt: 'Tuple',
      source: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      class: 'max-h-12',
    },
    {
      title: 'Laravel',
      alt: 'Laravel',
      source: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
      class: 'max-h-12',
    },
    {
      title: 'StaticKit',
      alt: 'StaticKit',
      source: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      class: 'max-h-12',
    },
    {
      title: 'Statamic',
      alt: 'Statamic',
      source: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      class: 'max-h-12',
    },
  ]
};
