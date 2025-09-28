import Component from './WithDismissButton.vue';

export default {
  title: 'Components/Organisms/Alert',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'Static text'
    },
    icon: {
      type: 'string',
      description: 'icon name'
    }
  },
  parameters: {
    componentSubtitle: 'Display an alert with dismiss button'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithDismissButton = Template.bind({});
WithDismissButton.args = {
  title: 'Successfully uploaded',
  icon: 'CheckCircleIcon'
};
