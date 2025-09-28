import Component from './WithFadingBackgroundImage.vue';

export default {
  title: 'Components/Organisms/Page Stats',
  component: Component,
  argTypes: {
    category: {
      type: 'string',
      description: 'page category'
    },
    title: {
      type: 'string',
      description: 'page title'
    },
    description: {
      type: 'string',
      description: 'page description'
    },
    stats: {
      type: 'array',
      description: 'stats list'
    },
    banner: {
      type: 'string',
      description: 'banner of page'
    }
  },
  parameters: {
    componentSubtitle: 'Display a page with fading background image'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithFadingBackgroundImage = Template.bind({});
WithFadingBackgroundImage.args = {
  stats: [
    {id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.'},
    {id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.'},
    {id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.'},
    {id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.'},
  ],
  title: 'Get actionable data that will help grow your business',
  description: 'Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.',
  category: 'valuable metrics',
  banner: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
};
