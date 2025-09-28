import Component from './WithDescription.vue';

export default {
  title: 'Components/Organisms/Section Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'header title'
    },
    description: {
      type: 'string',
      description: 'header description'
    }
  },
  parameters: {
    componentSubtitle: 'Display section header with title, description'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Job Postings',
  description: 'Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.'
};
