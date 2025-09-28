import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Card Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'card title'
    }
  },
  parameters: {
    componentSubtitle: 'Display card header with title'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Simple = Template.bind({});
Simple.args = {
  title: 'Job posting'
};
