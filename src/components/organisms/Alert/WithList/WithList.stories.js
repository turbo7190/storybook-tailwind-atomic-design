import Component from './WithList.vue';

export default {
  title: 'Components/Organisms/Alert',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'Static text'
    },
    list: {
      type: 'array',
      description: 'content list'
    },
    icon: {
      type: 'string',
      description: 'icon name'
    }
  },
  parameters: {
    componentSubtitle: 'Display an alert with list'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithList = Template.bind({});
WithList.args = {
  title: 'There were 2 errors with your submission',
  icon: 'XCircleIcon',
  list: [
    'Your password must be at least 8 characters',
    'Your password must include at least one pro wrestling finishing move'
  ]
};
