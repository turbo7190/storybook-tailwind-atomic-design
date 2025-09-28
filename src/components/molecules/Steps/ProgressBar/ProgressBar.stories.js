import Component from './ProgressBar.vue';

export default {
  title: 'Components/Molecules/Steps',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'title'
    },
    steps: {
      type: 'array',
      description: 'steps list'
    },
    currentStep: {
      type: 'number',
      description: 'current step index'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple progress bar with steps'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  steps: [
    'Copying files',
    'Migrating database',
    'Compiling assets',
    'Deployed'
  ],
  currentStep: 1,
  title: 'Migrating MySQL database...'
};
