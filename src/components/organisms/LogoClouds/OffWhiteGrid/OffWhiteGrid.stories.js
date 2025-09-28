import Component from './OffWhiteGrid.vue';

export default {
  title: 'Components/Organisms/Logo Clouds',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'logo cloud title'
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

export const OffWhiteGrid = Template.bind({});
OffWhiteGrid.args = {
  title: 'Trusted by over 5 very average small businesses',
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



