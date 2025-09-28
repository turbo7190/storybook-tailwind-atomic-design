import Component from './SimpleWithDescription.vue';

export default {
  title: 'Components/Organisms/Newsletter Sections',
  component: Component,
  argTypes: {
    title: {
      type: 'string',
      description: 'section title'
    },
    description: {
      type: 'string',
      description: 'section description'
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
    },
    helpText: {
      type: 'string',
      description: 'input form help text'
    },
    linkText: {
      type: 'string',
      description: 'link text'
    }
  },
  parameters: {
    componentSubtitle: 'Display a simple newsletter with description'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const SimpleWithDescription = Template.bind({});
SimpleWithDescription.args = {
  title: 'Sign up for our newsletter',
  description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.',
  placeholder: 'Enter your email',
  value: '',
  btnText: 'Notify me',
  onClick: () => console.log('clicked'),
  helpText: 'We care about the protection of your data. Read our',
  linkText: 'Privacy Policy'
};
