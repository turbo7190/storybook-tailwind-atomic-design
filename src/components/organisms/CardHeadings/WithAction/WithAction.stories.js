import Component from './WithAction.vue';

export default {
  title: 'Components/Organisms/Card Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'card title'
    },
    btnText: {
      type: 'string',
      description: 'card button text'
    },
    onClick: {
      action: 'clicked',
      description: 'card button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display card header with title and button'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'Job Postings',
  btnText: 'Create new job',
  onClick: () => console.log('clicked'),
};
