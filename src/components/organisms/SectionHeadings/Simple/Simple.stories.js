import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Section Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'header title'
    }
  },
  parameters: {
    componentSubtitle: 'Display section header with title'
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
  title: 'Job Postings'
};
