import Component from './SimpleWithHeadingOnBrand.vue';

export default {
  title: 'Components/Organisms/Logo Clouds',
  component: Component,
  argTypes: {
  },
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithHeadingOnBrand = Template.bind({});
SimpleWithHeadingOnBrand.args = {
  title: "The world's most innovative companies use Workflow",
  items: [
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
    {
      title: 'Transistor',
      alt: 'Transistor',
      source: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      class: 'h-12',
    },
    {
      title: 'Workcation',
      alt: 'Workcation',
      source: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      class: 'h-12',
    },
  ]
};
