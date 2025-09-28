import Component from './WithDescriptionAndAction.vue';

export default {
  title: 'Components/Organisms/Card Headings',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'card title'
    },
    description: {
      type: 'string',
      description: 'card description'
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
    componentSubtitle: 'Display card header with title, description, and button'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithDescriptionAndAction = Template.bind({});
WithDescriptionAndAction.args = {
  title: 'Job Postings',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.',
  btnText: 'Create new job',
  onClick: () => console.log('clicked'),
};
