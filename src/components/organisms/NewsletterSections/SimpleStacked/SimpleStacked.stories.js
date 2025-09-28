import Component from './SimpleStacked.vue';

export default {
  title: 'Components/Organisms/Newsletter Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    subtitle: {
      type: 'string',
      description: 'section subtitle'
    },
    placeholder: {
      type: 'string',
      description: 'input form placeholder'
    },
    value: {
      type: 'string',
      description: 'input value'
    },
    btnText: {
      type: 'string',
      description: 'action button text'
    },
    onClick: {
      action: 'clicked',
      description: 'button action'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple stacked newsletter'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleStacked = Template.bind({});
SimpleStacked.args = {
  title: 'Want product news and updates?',
  subtitle: 'Sign up for our newsletter',
  placeholder: 'Enter your email',
  value: '',
  btnText: 'Notify me',
  onClick: () => console.log('clicked'),
};
