import Component from './WithSplitButtons.vue';

export default {
  title: 'Components/Organisms/Notifications',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'notification title'
    },
    description: {
      type: 'string',
      description: 'notification description'
    },
    yesBtnText: {
      type: 'string',
      description: 'yes button text'
    },
    noBtnText: {
      type: 'string',
      description: 'no button text'
    },
    onYesClick: {
      action: 'clicked',
      description: 'yes button action'
    },
    onNoClick: {
      action: 'clicked',
      description: 'no button action'
    },
  },
  parameters: {
    componentSubtitle: 'Display a notification with split buttons'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithSplitButtons = Template.bind({});
WithSplitButtons.args = {
  title: 'Receive notifications',
  description: 'Notifications may include alerts, sounds, and badges',
  yesBtnText: 'Reply',
  noBtnText: 'Don\'t allow',
  onYesClick: () => console.log('clicked'),
  onNoClick: () => console.log('clicked')
};
