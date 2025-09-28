import Component from './CenteredCardWithGraphic.vue';

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
    }
  },
  parameters: {
    componentSubtitle: 'Display a centered newsletter with graphic'
  }
};

const Template = (args) => ({
  components: { Component },
  setup() {
    return { args };
  },
  template: '<component v-bind="args" />',
});

export const CenteredCardWithGraphic = Template.bind({});
CenteredCardWithGraphic.args = {
  title: 'Get notified when we\'re launching.',
  description: 'Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque.',
  placeholder: 'Enter your email',
  value: '',
  btnText: 'Notify me',
  onClick: () => console.log('clicked'),
};
