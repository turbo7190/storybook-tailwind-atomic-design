import Component from './SimpleStacked.vue';

export default {
  title: 'Components/Organisms/CTA Sections',
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
    componentSubtitle: 'Display a simple stacked panel'
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
  title: 'Ready to dive in?',
  subtitle: 'Start your free trial today.',
  btnText: 'Get Started',
  onClick: () => console.log('clicked'),
};
