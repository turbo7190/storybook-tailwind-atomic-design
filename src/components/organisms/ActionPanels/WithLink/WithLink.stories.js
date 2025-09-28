import Component from './WithLink.vue';

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
    link: {
      value: 'string',
      description: 'link text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a panel with link.'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Update your email',
  description: 'Change the email address you want associated with your account.',
  onClick: () => {
    // console.log('clicked')
  },
  link: 'Learn more about our CI features'
};
