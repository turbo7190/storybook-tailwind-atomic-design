import Component from './WithInput.vue';

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
    placeholder: {
      type: 'string',
      description: 'input form placeholder'
    },
    value: {
      type: 'string',
      description: 'input form value'
    },
    btnText: {
      value: 'string',
      description: 'button text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a panel with input.'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithInput = Template.bind({});
WithInput.args = {
  title: 'Update your email',
  description: 'Change the email address you want associated with your account.',
  onClick: () => {
    // console.log('clicked')
  },
  placeholder: 'you@email.com',
  value: '',
  btnText: 'Save'
};
