import Component from './Simple.vue';

export default {
  title: 'Components/Organisms/Action Panels',
  component: Component,
  argTypes: {
    title: {
      value: 'string',
      description: 'title of panel'
    },
    description: {
      value: 'string',
      description: 'description of panel'
    },
    onClick: {
      action: 'clicked',
      control: null,
      description: 'action of button'
    },
    btnText: {
      value: 'string',
      description: 'button text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple panel with title, description and button.'
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
  title: 'Delete your account',
  description: 'Once you delete your account, you will lose all data associated with it.',
  onClick: () => {
    // console.log('clicked')
  },
  btnText: 'Delete Account'
};
