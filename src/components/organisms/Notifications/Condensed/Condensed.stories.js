import Component from './Condensed.vue';

export default {
  title: 'Components/Organisms/Notifications',
  component: Component,
  argTypes: {
    content: {
      type: 'string',
      description: 'notification content'
    },
    btnText: {
      type: 'string',
      description: 'buttion text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a condensed notification'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const Condensed = Template.bind({});
Condensed.args = {
  content: 'Discussion archived',
  btnText: 'Undo',
  onClicked: () => console.log('clicked')
};
